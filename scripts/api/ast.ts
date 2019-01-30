import { Project, Scope, ParameterDeclarationStructure } from 'ts-simple-ast'
import { generateActions, generateTypes } from './exec'
import { maybe } from 'typescript-monads'

// initialize
const project = new Project({})

// add source files
project.addExistingSourceFiles('src/**/*.ts')

generateTypes()
  .then(model => {
    project.createSourceFile(`src/api/types.ts`, {
      enums: model.enumerations.map(e => {
        return {
          isExported: true,
          name: e.name,
          docs: [{ description: e.documentation }],
          members: e.values.map((m: any) => {
            return {
              name: `'${m.value}'`,
              value: m.value,
              docs: [{ description: m.documentation }]
            }
          })
        }
      }),
      typeAliases: model.simples.filter(a => a.name !== 'IANA-IfTypes').map(s => {
        return {
          isExported: true,
          docs: [{ description: s.documentation }],
          name: s.name,
          type: s.value
        }
      }),
      interfaces: model.complexTypes.map(m => {
        return {
          isExported: true,
          name: m.type as string,
          docs: [{ description: m.documentation }],
          properties: m.properties.map((a: any) => {
            return {
              isReadonly: true,
              hasQuestionToken: a.minOccurs,
              name: `'${a.name}'` as string,
              type: a.type as string,
            }
          })
        }
      })
    })
  })
  .then(generateActions)
  .then(actionTree => {
    // main api entry index.ts
    project.createSourceFile(`src/api/index.ts`, {
      exports: actionTree.map(grp => {
        return {
          moduleSpecifier: `./${grp.type.toLowerCase()}`
        }
      }),
      imports: [
        ...actionTree.map(grp => {
          return {
            moduleSpecifier: `./${grp.type.toLowerCase()}`,
            namedImports: [{ name: `ONVIF${grp.type}` }]
          }
        }),
        {
          moduleSpecifier: '../config',
          namedImports: [{ name: 'IDeviceConfig' }]
        }
      ],
      classes: [{
        isExported: true,
        name: 'ManagedONVIFApi',
        ctors: [{ parameters: [{ scope: Scope.Private, name: 'config', type: 'IDeviceConfig' }] }],
        properties: actionTree.map(group => {
          return {
            name: group.type,
            scope: Scope.Public,
            initializer: `new ONVIF${group.type}(this.config)`
          }
        })
      }]
    })

    actionTree.forEach(group => {
      project.createSourceFile(`src/api/${group.type.toLowerCase()}.ts`, {
        imports: [{
          moduleSpecifier: '../soap/request',
          namedImports: ['createStandardRequestBodyFromString', 'mapResponseXmlToJson', 'generateRequestElements', 'mapResponseObsToProperty'].map(name => ({ name }))
        },
        {
          moduleSpecifier: '../config',
          namedImports: [{ name: 'IDeviceConfig' }]
        },
        {
          moduleSpecifier: './types',
          namedImports: group.actions.reduce((acc, action) => {
            return [
              ...acc,
              ...action.input.parameters.map(a => a.propertyType)
            ]
          }, [] as ReadonlyArray<string>)
            .filter((elem, pos, arr) => arr.indexOf(elem) == pos)
            .filter(a => !['string', 'number', 'any', 'boolean'].some(b => b === a))
            .map(name => ({ name }))
        }],
        classes: [{
          isExported: true,
          name: `ONVIF${group.type}`,
          ctors: [{
            parameters: [{ name: 'config', type: 'IDeviceConfig', scope: Scope.Private }]
          }],
          methods: [...group.actions.map(action => {
            const ps = action.input.parameters.reduce((acc, curr) => {
              const key = maybe(action.soapRequestNode.split(':')[0]).map(a => `${a}_${curr.name}`).valueOr('')
              return {
                ...acc,
                [key]: curr.name
              }
            }, {} as any)

            const d = JSON.stringify(ps).replace(/"/g, '')
            
            return {
              isStatic: true,
              docs: [{ description: action.documentation.replace(/\*/g, '') }],
              name: action.actionName,
              bodyText: `return createStandardRequestBodyFromString(generateRequestElements('${action.soapRequestNode}')(${d}))
                .map(mapResponseXmlToJson<any>('${action.output.ref}'))
              `,
              parameters: action.input.parameters
                .map<ParameterDeclarationStructure>(p => {
                  return {
                    name: p.name,
                    type: p.propertyType,
                    hasQuestionToken: p.propertyMinOccurs === '0'
                  }
                })
            }
          }),
          ...group.actions.map(action => {
            return {
              docs: [{ description: action.documentation.replace(/\*/g, '') }],
              name: action.actionName,
              bodyText: `return ONVIF${group.type}.${action.actionName}(${action.input.parameters.map(a => a.name).join(',')}).run(this.config)`,
              parameters: action.input.parameters.map(p => {
                return {
                  name: p.name,
                  type: p.propertyType
                }
              })
            }
          })]
        }]
      })
    })
    return project.save()
  })
