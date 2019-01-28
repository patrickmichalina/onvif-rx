import fetch from 'node-fetch'
import { DOMParser } from 'xmldom'

export enum WSDL {
  Device = 'https://www.onvif.org/ver10/device/wsdl/devicemgmt.wsdl',
  Media = 'https://www.onvif.org/ver10/media/wsdl/media.wsdl',
  // AccessControl = 'https://www.onvif.org/ver10/pacs/accesscontrol.wsdl',
  // AccessRules = 'https://www.onvif.org/ver10/pacs/accessrules.wsdl',
  // ActionEngine = 'https://www.onvif.org/ver10/actionengine.wsdl',
  Analytics = 'https://www.onvif.org/ver20/analytics/wsdl/analytics.wsdl',
  // AB = 'https://www.onvif.org/ver10/authenticationbehavior/wsdl/authenticationbehavior.wsdl',
  // Credential = 'https://www.onvif.org/ver10/credential/wsdl/credential.wsdl',
  // DeviceIO = 'https://www.onvif.org/ver10/deviceio.wsdl',
  Display = 'https://www.onvif.org/ver10/display.wsdl',
  // DoorControl = 'https://www.onvif.org/ver10/pacs/doorcontrol.wsdl',
  Imaging = 'https://www.onvif.org/ver20/imaging/wsdl/imaging.wsdl',
  // Media2 = 'https://www.onvif.org/ver20/media/wsdl/media.wsdl',
  Provisioning = 'https://www.onvif.org/ver10/provisioning/wsdl/provisioning.wsdl',
  PTZ = 'https://www.onvif.org/ver20/ptz/wsdl/ptz.wsdl',
  Receiver = 'https://www.onvif.org/ver10/receiver.wsdl',
  Recording = 'https://www.onvif.org/ver10/recording.wsdl',
  Replay = 'https://www.onvif.org/ver10/replay.wsdl',
  Search = 'https://www.onvif.org/ver10/search.wsdl',
  // Schedule = 'https://www.onvif.org/ver10/schedule/wsdl/schedule.wsdl',
  AdvancedSecurity = 'https://www.onvif.org/ver10/advancedsecurity/wsdl/advancedsecurity.wsdl'
}

type WsdlTypeKey = keyof typeof WSDL

const WSDL_KEY = Object.keys(WSDL)
const WSDL_VALUES = WSDL_KEY.map<string>(k => WSDL[k as WsdlTypeKey])
const findWsdlKeyByUrl = (url: string) => WSDL_KEY.find(k => WSDL[k as WsdlTypeKey] === url) as WsdlTypeKey

const httpRequests = () =>
  WSDL_VALUES
    .map(url => fetch(url)
      .then(res => res.text())
      .then(xml => {
        return {
          url,
          xml,
          type: findWsdlKeyByUrl(url),
          parsedXml: new DOMParser().parseFromString(xml, 'type/xml')
        }
      }))

export const wsdlHttpRequests = () => Promise.all(httpRequests())


export const fetchXsd = () =>
  Promise.all([
    // 'https://www.onvif.org/ver10/pacs/types.xsd',
    // 'https://www.onvif.org/ver20/analytics/rules.xsd',
    'https://www.onvif.org/ver10/schema/common.xsd',
    'https://www.onvif.org/ver10/schema/onvif.xsd',
    'http://schemas.xmlsoap.org/soap/envelope/'
  ]
    .map(url => fetch(url)
      .then(res => res.text())
      .then(xml => new DOMParser().parseFromString(xml, 'type/xml'))))