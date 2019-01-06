import { reader, maybe } from 'typescript-monads'
import { ISystemConfig, IDeviceConfig } from '../config/interfaces'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { createUserToken } from '../auth'

const parseXml = (parser: DOMParser) => (xml: string) => parser.parseFromString(xml, 'text/xml')

const propertyTypeConverter =
  (val?: string | null) =>
    val === 'false' || val === 'true'
      ? val === 'true' ? true : false
      : val
        ? isNaN(Number(val)) ? val : Number(val)
        : undefined

const cleanColon = (str: string) => str.replace(/^.+:/, '')

const parseAttributes = (attrs: ReadonlyArray<Attr>) => Array.from(attrs)
  .reduce((acc: any, attr: any) => {
    return {
      ...acc,
      [attr.name.replace('.', '')]: propertyTypeConverter(attr.value)
    }
  }, {})

const deep =
  (collectionKeys: ReadonlyArray<string> = []) =>
    <T>(elm: Element): T =>
      Array.from(elm.childNodes)
        .reduce((acc, curr: any) => {
          const key = cleanColon(curr.nodeName).replace('.', '')
          const isCollection = collectionKeys.some(a => a === curr.nodeName)
          const baseVal = (acc as any)[key]

          return {
            ...acc,
            [key]: curr.childNodes.length > 1
              ? isCollection
                ? Array.isArray(baseVal)
                  ? [...baseVal, deep(collectionKeys)(curr)]
                  : [deep(collectionKeys)(curr)]
                : deep(collectionKeys)(curr)
              : propertyTypeConverter(curr.textContent)

            // [key]: curr.attributes.length
            //   ? parseAttributes(curr.attributes)
            //   : curr.childNodes.length > 1
            //     ? isCollection
            //       ? Array.isArray(baseVal)
            //         ? [...baseVal, deep(collectionKeys)(curr)]
            //         : [deep(collectionKeys)(curr)]
            //       : deep(collectionKeys)(curr)
            //     : propertyTypeConverter(curr.textContent)
          }
        }, { ...parseAttributes(elm.attributes as any) } as T)

export enum XMLNS {
  SOAP = 'xmlns="http://www.w3.org/2003/05/soap-envelope"',
  DEVICE = 'xmlns="http://www.onvif.org/ver10/device/wsdl"',
  MEDIA = 'xmlns="http://www.onvif.org/ver10/media/wsdl"'
}

export const soapShell =
  (rawBody: string) =>
    (rawHeader?: string) =>
      `<?xml version="1.0" encoding="UTF-8"?><Envelope xmlns:s="http://www.w3.org/2003/05/soap-envelope" xmlns:tds="http://www.onvif.org/ver10/device/wsdl" xmlns:tt="http://www.onvif.org/ver10/schema"><Header>${rawHeader || ''}</Header><Body>${rawBody}</Body></Envelope>`

export const mapResponseXmlToJson =
  <T>(node: string) =>
    (collectionKeys: ReadonlyArray<string> = []) =>
      (source: Observable<Document>) => source.pipe(
        map<Document, T>(startingAtNode<T>(node)(collectionKeys))
      )
export const mapResponseObsToProperty = <TIn, TOut>(propSelectFn: (sel: TIn) => TOut) => (source: Observable<TIn>) => source.pipe(map(propSelectFn))

export const startingAtNodes =
  <T>(nodes: ReadonlyArray<string>) =>
    (collectionKeys: ReadonlyArray<string> = []) =>
      (doc: Document) =>
        nodes
          .reduce<T>((acc, curr) => {
            return {
              ...acc,
              [curr]: drillXml(doc)(curr)(collectionKeys).valueOrUndefined()
            }
          }, {} as T)

export const startingAtNode =
  <T>(node: string) =>
    (collectionKeys: ReadonlyArray<string> = []) =>
      (doc: Document): T =>
        startingAtNodes<any>([node])(collectionKeys)(doc)[node] as T

export const drillXml =
  <T>(doc: Document) =>
    (startNodeElementTag: string) =>
      (collectionKeys: ReadonlyArray<string> = []) =>
        maybe(Array.from(doc.documentElement.getElementsByTagName(startNodeElementTag))[0])
          .map<T>(deep(collectionKeys))

export const createStandardRequestBody =
  (body: string) =>
    reader<IDeviceConfig, Observable<Document>>(config => {
      const gen = (body: string) => config.system.transport(body)(config.url).pipe(map(parseXml(config.system.parser)))
      return createUserToken().map(maybeUserToken => {
        return maybeUserToken.map(token => {
          return gen(body.replace('<Header></Header>', `<Header>${token}</Header>`))
        }).valueOr(gen(body))
      }).run(config)
    })

export const createStandardRequestBodyFromString =
  (body: string) =>
    createStandardRequestBody(soapShell(body)())

export const createSimpleRequestBodyFromString =
  (key: string) =>
    (ns: XMLNS) =>
      createStandardRequestBody(soapShell(`<${key} ${ns}/>`)())

export const createDeviceRequestBodyFromString =
  (key: string) =>
    createSimpleRequestBodyFromString(key)(XMLNS.DEVICE)

export const createMediaRequestBodyFromString =
  (key: string) =>
    createSimpleRequestBodyFromString(key)(XMLNS.MEDIA)
