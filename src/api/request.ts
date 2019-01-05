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

const deep = <T>(elm: Element): T =>
  Array.from(elm.childNodes)
    .reduce((acc, curr: any) => {
      const key = cleanColon(curr.nodeName).replace('.', '')
      return {
        ...acc,
        [key]: curr.nodeName.includes('tds:')
          ? parseAttributes(curr.attributes)
          : curr.childNodes.length > 1
            ? deep(curr as Element)
            : propertyTypeConverter(curr.textContent)
      }
    }, {} as T)

export const mapResponseXmlToJson = <T>(node: string) => (source: Observable<Document>) => source.pipe(
  map<Document, T>(startingAtNode(node))
)

export const startingAtNodes =
  <T>(nodes: ReadonlyArray<string>) =>
    (doc: Document) =>
      nodes
        .reduce((acc, curr) => {
          return {
            ...acc,
            [curr]: drillXml(doc)(curr).valueOrUndefined()
          }
        }, {} as T)

export const startingAtNode =
  <T>(node: string) =>
    (doc: Document) =>
      startingAtNodes<any>([node])(doc)[node] as T

export const drillXml =
  <T>(doc: Document) =>
    (startNodeElementTag: string) =>
      maybe(Array.from(doc.documentElement.getElementsByTagName(startNodeElementTag))[0])
        .map<T>(deep)

export const createStandardRequestBody =
  (body: string) =>
    reader<IDeviceConfig, Observable<Document>>(config => {
      // const z = createUserToken()
      return config.system.transport(body)(config.url)
        .pipe(map(parseXml(config.system.parser)))
    })

