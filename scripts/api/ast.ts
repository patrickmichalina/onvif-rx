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
    actionTree.forEach(group => {
      group.actions.forEach(action => {
        project.createSourceFile(`src/api/${group.type}/${action.actionName}.ts`, {
          imports: [{
            moduleSpecifier: '../../soap/request',
            namedImports: ['createStandardRequestBodyFromString', 'mapResponseXmlToJson', 'mapResponseObsToProperty'].map(name => ({ name }))
          }, {
            moduleSpecifier: '../types',
            namedImports: action.input.parameters
              .map(a => a.propertyType)
              .filter((elem, pos, arr) => arr.indexOf(elem) == pos)
              .filter(a => !['string', 'number', 'any', 'boolean']
                .some(b => b === a)).map(a => ({ name: a }))
          }],
          functions: [{
            isExported: true,
            docs: [{ description: action.documentation.replace(/\*/g, '') }],
            name: action.actionName,
            bodyText: `createStandardRequestBodyFromString('<${action.soapRequestNode} />')
              .map(mapResponseXmlToJson<any>('${action.output.ref}')())
            `,
            // parameters: [{}]
            parameters: action.input.parameters.map(p => {
              return {
                name: p.name,
                type: p.propertyType
              }
            })
          }]
        })
      })
    })
    return project.save()
  })






// const requestSource = project.getSourceFileOrThrow(resolve('src/soap/request.ts'))
// const requestFunctions = requestSource.getVariableDeclarations().map(a => a.getName())

// console.log(requestFunctions)

// project.createSourceFile('test.ts', {
//   // imports: [{
//     // moduleSpecifier: 'test',
//     // namedImports: ['createStandardRequestBodyFromString', 'mapResponseXmlToJson', 'mapResponseObsToProperty'].map(name => ({ name }))
//   // }],
//   functions: [{
//     isExported: true,
//     docs: [{
//       description: 'This operation adds an IP filter address to a device. If the device supports device access'
//     }],
//     name: 'CreateUsers',
//     bodyText: 'console.log(1)',
//     parameters: [{
//       name: 'test',
//       initializer: '\'thing\''
//     }]
//   }]
// })
// project.save()


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
