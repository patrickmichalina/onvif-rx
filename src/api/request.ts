import { reader, maybe } from "typescript-monads"
import { ISystemConfig } from "../config/interfaces"
import { Observable, of } from "rxjs"
import { map } from "rxjs/operators"

const parseXml = (parser: DOMParser) => (xml: string) => parser.parseFromString(xml, 'text/xml')

export const createStandardRequestBody =
  (body: string) =>
    reader<ISystemConfig, Observable<Document>>(config =>
      config.transport(body)(config.xaddrs)
        .pipe(map(parseXml(config.parser))))

const propertyTypeConverter =
  (val?: string | null) =>
    val === 'false' || val === 'true'
      ? val === 'true' ? true : false
      : val
        ? isNaN(Number(val)) ? val : Number(val)
        : undefined

const deep = <T>(elm: Element): T =>
  Array.from(elm.childNodes)
    .reduce((acc, curr: any) => {
      const goDeeper = curr.childNodes.length > 1
      const key = curr.nodeName.replace('tt:', '').replace('.', '')
      return {
        ...acc,
        [key]: goDeeper
          ? deep(curr)
          : propertyTypeConverter(curr.textContent)
      }
    }, {} as T)

export const drillXml =
  <T>(doc: Document) =>
    (startNodeElementTag: string) =>
      maybe(Array.from(doc.documentElement.getElementsByTagName(startNodeElementTag))[0])
        .map<T>(deep)
