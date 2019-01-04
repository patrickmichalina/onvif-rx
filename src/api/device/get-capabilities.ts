import { soapShell, XMLNS } from "../../xml"
import { createStandardRequestBody, propertyTypeConverter } from "../request"
import { map } from "rxjs/operators";
import { maybe } from "typescript-monads"

export enum CapabilityCategory {
  ALL = 'All',
  ANALYTICS = 'Analytics',
  DEVICE = 'Device',
  EVENTS = 'Events',
  IMAGING = 'Imaging',
  MEDIA = 'Media',
  PTZ = 'PTZ'
}

export interface ICapability {
  readonly XAddr: string
}

export interface IImagingCapabilities extends ICapability { }
export interface IPTZCapabilities extends ICapability { }

export interface IAnalyticsCapabilities extends ICapability {
  readonly RuleSupport: string
  readonly AnalyticsModuleSupport: string
}

export interface ICapabilities {
  readonly Analytics: IAnalyticsCapabilities
  readonly Device: any
  readonly Events: any
  readonly Imaging: IImagingCapabilities
  readonly Media: any
  readonly PTZ: IPTZCapabilities
  readonly Extension: any
}

const createGetCapabilitiesBody =
  (cat: CapabilityCategory = CapabilityCategory.ALL) =>
    soapShell(`<GetCapabilities ${XMLNS.DEVICE}><Category>${cat}</Category></GetCapabilities>`)

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

const drillXml =
  <T>(doc: Document) =>
    (startNodeElementTag: string) =>
      maybe(Array.from(doc.documentElement.getElementsByTagName(startNodeElementTag))[0])
        .map<T>(deep)

/**
 * This method has been replaced by the more generic GetServices method. 
 * For capabilities of individual services refer to the GetServiceCapabilities methods.
 */
export const getCapabilities =
  (cat: CapabilityCategory) =>
    createStandardRequestBody(createGetCapabilitiesBody(cat))
      .map(res => res.pipe(
        map<Document, Partial<ICapabilities>>(doc => {
          return ['Analytics', 'Device', 'Events', 'Imaging', 'Media', 'PTZ', 'Extension']
            .reduce((acc, curr) => {
              return {
                ...acc,
                [curr]: drillXml(doc)(`tt:${curr}`).valueOrUndefined()
              }
            }, {} as any)
        })
      ))