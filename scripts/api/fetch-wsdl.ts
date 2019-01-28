import fetch from 'node-fetch'
import { DOMParser } from 'xmldom'

export enum WSDL {
  Device = 'https://www.onvif.org/ver10/device/wsdl/devicemgmt.wsdl',
  Media = 'https://www.onvif.org/ver10/media/wsdl/media.wsdl',
  PTZ = 'https://www.onvif.org/ver20/ptz/wsdl/ptz.wsdl'
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
    'https://www.onvif.org/ver10/schema/common.xsd',
    'https://www.onvif.org/ver10/schema/onvif.xsd',
    'http://schemas.xmlsoap.org/soap/envelope/'
  ]
    .map(url => fetch(url)
      .then(res => res.text())
      .then(xml => new DOMParser().parseFromString(xml, 'type/xml'))))