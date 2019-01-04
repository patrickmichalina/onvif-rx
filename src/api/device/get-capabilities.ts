import { soapShell, XMLNS } from "../../xml"
import { createStandardRequestBody } from "../request"
import { map } from "rxjs/operators";

export enum CapabilityCategory {
  ALL = 'All',
  ANALYTICS = 'Analytics',
  DEVICE = 'Device',
  EVENTS = 'Events',
  IMAGING = 'Imaging',
  MEDIA = 'Media',
  PTZ = 'PTZ'
}

const createGetCapabilitiesBody =
  (cat: CapabilityCategory = CapabilityCategory.ALL) =>
    soapShell(`<GetCapabilities ${XMLNS.DEVICE}><Category>${cat}</Category></GetCapabilities>`)

const booleanProperties = [
  'tt:RuleSupport',
  'tt:AnalyticsModuleSupport'
]

const numberProperties = [
  ''
]

const specialRename: { [key: string]: string } = {
  'XAddr': 'xaddr'
}

const lowerFirst = (str: string) => str[0].toLowerCase() + str.substring(1) 

const propertyTypeConverter =
  (key: string) =>
    (val?: string | null) =>
      booleanProperties.some(a => a === key)
        ? val === 'true' ? true : false
        : numberProperties.some(a => a === key)
          ? val ? parseInt(val) : 0
          : val

/**
 * This method has been replaced by the more generic GetServices method. 
 * For capabilities of individual services refer to the GetServiceCapabilities methods.
 */
export const getCapabilities =
  (cat: CapabilityCategory) =>
    createStandardRequestBody(createGetCapabilitiesBody(cat))
      .map(res => res.pipe(
        map(doc => {
          const z = Array.from(doc.documentElement.getElementsByTagName('tt:Analytics'))
          const analytics = Array.from(z[0].childNodes).reduce((acc, curr) => {
            const cleanedKey = curr.nodeName.replace('tt:', '')
            const key = specialRename[cleanedKey] ? specialRename[cleanedKey] : lowerFirst(cleanedKey)
            return {
              ...acc,
              [key]: propertyTypeConverter(curr.nodeName)(curr.textContent)
            }
          }, {})
          return {
            analytics
          }
        })
      ))