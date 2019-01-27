import { DOMParser } from 'xmldom'
import { maybe, result } from 'typescript-monads'
import { writeFile, ensureDir, ensureDirSync, writeFileSync } from 'fs-extra'
import { resolve } from 'path'
import fetch from 'node-fetch'

const funcBody = (name: string, reqNode: string, outputXmlNode: string, docs: string) => {
  return `import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * ${docs}
 */
export const ${name} =
  () =>
    createStandardRequestBodyFromString('<${reqNode} />')
      .map(mapResponseXmlToJson<any>('${outputXmlNode}')())
`
}

const genIndexApi = (name: string) => (exp: string) => (imports: string) => (funcs: string) => (iface: string) => {
  return `${exp}

${imports}
import { IDeviceConfig } from '../../config'

export interface IONVIF${name}Api {
  ${iface}
}

export const ONVIF_${name}_API = (config: IDeviceConfig): IONVIF${name}Api => {
  return {
    ${funcs}
  }
}`
}

const genApiMain = (objs: string) => (iface: string) => {
  return `import { IDeviceConfig } from '../config'

export interface IONVIFApi {
  ${iface}
}

export const ONVIF_API = (config: IDeviceConfig): IONVIFApi => {
  return {
    ${objs}
  }
}`
}

enum WSDL {
  Device = 'https://www.onvif.org/ver10/device/wsdl/devicemgmt.wsdl',
  Media = 'https://www.onvif.org/ver10/media/wsdl/media.wsdl',
  PTZ = 'https://www.onvif.org/ver20/ptz/wsdl/ptz.wsdl'
}

const gen = (wsdl: WSDL | string) => {
  return fetch(wsdl)
    .then(res => res.text())
    .then(xml => {
      const parser = new DOMParser()
      const doc = parser.parseFromString(xml, 'text/xml')

      const target = maybe(Object.keys(WSDL).find((a: any) => WSDL[a] === wsdl))

      return target.flatMap(b => {
        const wsdlNs = 'http://schemas.xmlsoap.org/wsdl/'
        const elements = doc.getElementsByTagNameNS(wsdlNs, 'portType')
        const serviceNode = maybe(Array.from(elements).find(a => a.getAttribute('name') === b))

        return serviceNode.map(n => {
          const actions = Array.from(n.getElementsByTagNameNS(wsdlNs, 'operation'))
            .map(a => {
              const getOp = (name: string) => maybe(a.getElementsByTagNameNS(wsdlNs, name).item(0))

              const name = a.getAttribute('name') as string
              const comments = getOp('documentation').flatMapAuto(a => a.textContent).map(a => a.replace(/\r?\n|\r/g, '\n * ').replace(/\t/g, '')).valueOr('')
              const inputType = getOp('input').flatMapAuto(a => a.getAttribute('message')).valueOr('')
              const outputXmlNode = getOp('output').flatMapAuto(a => a.getAttribute('message')).valueOr('')

              const xmlRequestNode = maybe(Array.from(doc.getElementsByTagNameNS(wsdlNs, 'message')).find(a => a.getAttribute('name') === inputType.split(':').pop()))
                .flatMapAuto(a => a.getElementsByTagNameNS(wsdlNs, 'part').item(0))
                .map(a => a.getAttribute('element'))
                .valueOr('') as string

              return {
                name,
                comments,
                inputType,
                outputXmlNode,
                xmlRequestNode,
                body: funcBody(name, xmlRequestNode, outputXmlNode, comments)
              }
            })

          const type = b.toLowerCase()
          const baseDir = resolve('src/api/', type)

          const indexExports = actions.map(a => `export * from './${a.name}'`).join('\n')
          const indexImports = actions.map(a => `import { ${a.name} } from './${a.name}'`).join('\n')
          const indexFunctions = actions.map(a => `${a.name}: () => ${a.name}().run(config),`).join('\n    ')
          const indexInterface = actions.map(a => `
  /**
   * ${a.comments.replace(/\n \* /g, '\n   * ')}
   */
  readonly ${a.name}: () => any`).join('\n')


          return {
            name: b,
            type,
            baseDir,
            actions,
            outputFiles: actions.map(a => ({ path: resolve(baseDir, `${a.name}.ts`), body: a.body })),
            indexFile: {
              objOutName: `ONVIF_${b}_API`,
              path: resolve(baseDir, 'index.ts'),
              body: genIndexApi(b)(indexExports)(indexImports)(indexFunctions)(indexInterface)
            }
          }
        })
      })
    })
}

const promises = Object.keys(WSDL)
  .map((a: any) => WSDL[a])
  .map(gen)

Promise
  .all(promises)
  .then(results => {
    const operateMe = results.map(b => b.valueOrUndefined()).filter(Boolean)
    operateMe.forEach(a => a && ensureDirSync(a.baseDir))


    const formain = operateMe.reduce((acc, curr: any) => {
      return {
        ...acc,
        apis: [
          ...acc.apis,
          `IONVIF${curr.name}Api`
        ]
      }
    }, { apis: [] } as any)

    console.log(formain)
    writeFileSync(resolve('src/api/index.ts'), genApiMain('')(''))

    const writeOperations = operateMe.reduce((acc, curr: any) => {
      return [
        ...acc,
        ...curr.outputFiles.map((f: any) => () => writeFile(f.path, f.body)),
        () => writeFile(curr.indexFile.path, curr.indexFile.body)
      ]
    }, [] as ReadonlyArray<any>)

    Promise.all(writeOperations.map(b => b()))
  })
