import { Project } from 'ts-simple-ast'
import { generateActions, generateTypes } from './exec'

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
              name: `'${a.name}'` as string,
              type: a.type as string
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
      })
    })

    actionTree.forEach(group => {
      // index file for each group
      // project.createSourceFile(`src/api/${group.type}/index.ts`, {
      //   exports: group.actions.map(a => {
      //     return {
      //       moduleSpecifier: `./${a.actionName}`
      //     }
      //   })
      // })

      project.createSourceFile(`src/api/${group.type.toLowerCase()}.ts`, {
        imports: [{
          moduleSpecifier: '../soap/request',
          namedImports: ['createStandardRequestBodyFromString', 'mapResponseXmlToJson', 'mapResponseObsToProperty'].map(name => ({ name }))
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
        }
        ],
        namespaces: [{
          isExported: true,
          name: group.type,
          functions: group.actions.map(action => {
            return {
              isExported: true,
              docs: [{ description: action.documentation.replace(/\*/g, '') }],
              name: action.actionName,
              bodyText: `return createStandardRequestBodyFromString('<${action.soapRequestNode} />')
                .map(mapResponseXmlToJson<any>('${action.output.ref}')())
              `,
              parameters: action.input.parameters.map(p => {
                return {
                  name: p.name,
                  type: p.propertyType
                }
              })
            }
          })
        }]
      })
    })
    return project.save()
  })



// const myClassFile = project.createSourceFile('src/MyClass.ts', {
//   classes: [{

//   }]
// })
// const myEnumFile = project.createSourceFile('src/MyEnum.ts', {
//   enums: [{
//     name: 'MyEnum',
//     isExported: true,
//     members: [{ name: 'member' }]
//   }]
// })

// // get information from ast
// const myClass = myClassFile.getClassOrThrow('MyClass')
// myClass.getName()          // returns: "MyClass"
// myClass.hasExportKeyword() // returns: true
// myClass.isDefaultExport()  // returns: false

// // manipulate ast
// const myInterface = myClassFile.addInterface({
//   name: 'IMyInterface',
//   isExported: true,
//   properties: [{
//     name: 'myProp',
//     type: 'number'
//   }]
// })

// myClass.rename('NewName')
// myClass.addImplements(myInterface.getName())
// myClass.addProperty({
//   name: 'myProp',
//   initializer: '5'
// })

// project.getSourceFileOrThrow('src/ExistingFile.ts').delete()
// get underlying compiler node from the typescript AST from any node
// const compilerNode = myClassFile.compilerNode
