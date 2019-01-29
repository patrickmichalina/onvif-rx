// import { DOMParser } from 'xmldom'
// import { maybe, result } from 'typescript-monads'
// import { writeFile, ensureDir, ensureDirSync, writeFileSync } from 'fs-extra'
// import { resolve } from 'path'
// import fetch from 'node-fetch'

// const funcBody = (name: string, reqNode: string, outputXmlNode: string, docs: string) => {
//   return `import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

// /**
//  * ${docs}
//  */
// export const ${name} =
//   () =>
//     createStandardRequestBodyFromString('<${reqNode} />')
//       .map(mapResponseXmlToJson<any>('${outputXmlNode}')())
// `
// }

// const genIndexApi = (name: string) => (exp: string) => (imports: string) => (funcs: string) => (iface: string) => {
//   return `${exp}

// ${imports}
// import { IDeviceConfig } from '../../config'
// import { IOnvifNetworkResponse } from '../../soap/request'

// export interface IONVIF${name}Api {
//   ${iface}
// }

// export const ONVIF_${name}_API = (config: IDeviceConfig): IONVIF${name}Api => {
//   return {
//     ${funcs}
//   }
// }`
// }

// const genApiMain = (objs: string) => (iface: string) => (imports: string) => {
//   return `import { IDeviceConfig } from '../config'
// ${imports}

// export interface IONVIFApi {
//   ${iface}
// }

// export const ONVIF_API = (config: IDeviceConfig): IONVIFApi => {
//   return {
//     ${objs}
//   }
// }`
// }

// enum WSDL {
//   Device = 'https://www.onvif.org/ver10/device/wsdl/devicemgmt.wsdl',
//   Media = 'https://www.onvif.org/ver10/media/wsdl/media.wsdl',
//   PTZ = 'https://www.onvif.org/ver20/ptz/wsdl/ptz.wsdl'
// }

// const gen = (wsdl: WSDL | string) => {
//   return fetch(wsdl)
//     .then(res => res.text())
//     .then(xml => {
      
//     })
// }

// const promises = Object.keys(WSDL)
//   .map((a: any) => WSDL[a])
//   .map(gen)

// Promise
//   .all(promises)
//   .then(results => {
//     const operateMe = results.map(b => b.valueOrUndefined()).filter(Boolean)
//     operateMe.forEach(a => a && ensureDirSync(a.baseDir))


//     const formain = operateMe.reduce((acc, curr: any) => {
//       return {
//         ...acc,
//         apis: [
//           ...acc.apis,
//           `IONVIF${curr.name}Api`
//         ]
//       }
//     }, { apis: [] } as any)


//     const interfaces = operateMe.map((a: any) => `readonly ${a.type}: IONVIF${a.name}Api`).join('\n  ')
//     const imports = operateMe.map((a: any) => `import { IONVIF${a.name}Api, ONVIF_${a.name}_API } from './${a.type}'`).join('\n')
//     const objs = operateMe.map((a: any) => `${a.type}: ONVIF_${a.name}_API(config),`).join('\n    ')

//     writeFileSync(resolve('src/api/index.ts'), genApiMain(objs)(interfaces)(imports))

//     const writeOperations = operateMe.reduce((acc, curr: any) => {
//       return [
//         ...acc,
//         ...curr.outputFiles.map((f: any) => () => writeFile(f.path, f.body)),
//         () => writeFile(curr.indexFile.path, curr.indexFile.body)
//       ]
//     }, [] as ReadonlyArray<any>)

//     Promise.all(writeOperations.map(b => b()))
//   })
