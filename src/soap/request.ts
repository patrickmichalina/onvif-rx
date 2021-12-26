import { reader, maybe, fail, ok, IResult } from 'typescript-monads'
import { IDeviceConfig, ITransportPayoad } from '../config/interfaces'
import { Observable, from } from 'rxjs'
import { map, flatMap } from 'rxjs/operators'
import { createUserToken } from './auth'
import { xml2json, js2xml } from 'xml-js'

export interface IResultStructure<T> {
  readonly json: T
  readonly xml: string
}

export type IOnvifResult = IResult<IXmlContainer, ITransportPayoad>

export enum XMLNS {
  S11 = 'xmlns:S11="http://www.w3.org/2003/05/soap-envelope"',
  wsse = 'xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd"',
  wsu = 'xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd"',
  tt = 'xmlns:tt="http://www.onvif.org/ver10/schema"',
  tds = 'xmlns:tds="http://www.onvif.org/ver10/device/wsdl"',
  trt = 'xmlns:trt="http://www.onvif.org/ver10/media/wsdl"',
  xsi = 'xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"',
  xsd = 'xmlns:xsd="http://www.w3.org/2001/XMLSchema"',
  ns1 = 'xmlns:ns1="http://www.onvif.org/ver10/accesscontrol/wsdl"',
  ns3 = 'xmlns:ns3="http://www.onvif.org/ver10/actionengine/wsdl"',
  tad = 'xmlns:tad="http://www.onvif.org/ver10/analyticsdevice/wsdl"',
  timg = 'xmlns:timg="http://www.onvif.org/ver20/imaging/wsdl"',
  tptz = 'xmlns:tptz="http://www.onvif.org/ver20/ptz/wsdl"',
  trc = 'xmlns:trc="http://www.onvif.org/ver10/recording/wsdl"',
  trv = 'xmlns:trv="http://www.onvif.org/ver10/receiver/wsdl"',
  tse = 'xmlns:tse="http://www.onvif.org/ver10/search/wsdl"',
  vifsvr = 'xmlns:vifsvr="http://www.onvif.org/ver10/events/wsdl/PullPointSubscriptionBinding"',
  vifsvr10 = 'xmlns:vifsvr10="http://www.onvif.org/ver20/analytics/wsdl/AnalyticsEngineBinding"',
  vifsvr2 = 'xmlns:vifsvr2="http://www.onvif.org/ver10/events/wsdl/EventBinding"',
  tev = 'xmlns:tev="http://www.onvif.org/ver10/events/wsdl"',
  vifsvr3 = 'xmlns:vifsvr3="http://www.onvif.org/ver10/events/wsdl/SubscriptionManagerBinding"',
  vifsvr4 = 'xmlns:vifsvr4="http://www.onvif.org/ver10/events/wsdl/NotificationProducerBinding"',
  vifsvr5 = 'xmlns:vifsvr5="http://www.onvif.org/ver10/events/wsdl/NotificationConsumerBinding"',
  vifsvr6 = 'xmlns:vifsvr6="http://www.onvif.org/ver10/events/wsdl/PullPointBinding"',
  vifsvr7 = 'xmlns:vifsvr7="http://www.onvif.org/ver10/events/wsdl/CreatePullPointBinding"',
  vifsvr8 = 'xmlns:vifsvr8="http://www.onvif.org/ver10/events/wsdl/PausableSubscriptionManagerBinding"',
  wsnt = 'xmlns:wsnt="http://docs.oasis-open.org/wsn/b-2"',
  vifsvr9 = 'xmlns:vifsvr9="http://www.onvif.org/ver20/analytics/wsdl/RuleEngineBinding"',
  tan = 'xmlns:tan="http://www.onvif.org/ver20/analytics/wsdl"',
  ter = 'xmlns:ter="http://www.onvif.org/ver10/error"',
  tns1 = 'xmlns:tns1="http://www.onvif.org/ver10/topics"',
  ns2 = 'xmlns:ns2="http://www.onvif.org/ver10/pacs"',
  wsa5 = 'xmlns:wsa5="http://www.w3.org/2005/08/addressing"'
}

const parseXml =
  (parser: DOMParser) =>
    (xmlString: string): Document =>
      parser.parseFromString(xmlString, 'text/xml')

const nsstr = () => Object.keys(XMLNS).map((k: any) => (XMLNS as any)[k])

export enum SOAP_NODE {
  Header = 'S11:Header',
  Envelope = 'S11:Envelope',
  Body = 'S11:Body'
}

export const soapShell =
  (rawBody: string) =>
    (rawHeader?: string) =>
      `<?xml version="1.0" encoding="UTF-8"?>
      <${SOAP_NODE.Envelope} ${nsstr().join(' ')}>
        <${SOAP_NODE.Header}>${rawHeader || ''}</${SOAP_NODE.Header}>
        <${SOAP_NODE.Body}>${rawBody}</${SOAP_NODE.Body}>
      </${SOAP_NODE.Envelope}>`

const stringIsBool = (str: string) => str.toLowerCase() === 'true' || str.toLowerCase() === 'false'
const stringToBool = (str: string) => str.toLowerCase() === 'true' ? true : false
const typeConversion = (str: string) => stringIsBool(str) ? stringToBool(str) : str

export const mapResponseXmlToJson =
  <T>(node: string) =>
    (source: Observable<IOnvifResult>) =>
      source.pipe(
        map(a => a.map<IResultStructure<T>>(b => {
          const split = node.split(':')
          const nodeKey = maybe(split[1]).valueOr(node)
          const soapNsPrefix = b.xmlDocument.documentElement.lookupPrefix(b.xmlDocument.documentElement.namespaceURI)

          const parsed = JSON.parse(xml2json(b.xmlString, {
            compact: true,
            spaces: 2,
            textFn: (value: any, parentElement: any) => {
              try {
                const keyNo = Object.keys(parentElement._parent).length
                const keyName = Object.keys(parentElement._parent)[keyNo - 1]
                // tslint:disable-next-line:no-object-mutation
                parentElement._parent[keyName] = typeConversion(value)
              } catch (e) { }
            },
            elementNameFn: (d: string) => maybe(d.split(':')[1]).valueOr(d)
          } as any))

          const json = parsed['Envelope']
            ? parsed['Envelope']['Body'][nodeKey]
            : parsed[`${soapNsPrefix}:Envelope`][`${soapNsPrefix}:Body`][nodeKey]

          return {
            json,
            xml: b.xmlString
          }
        })))

export const mapResponseObsToProperty =
  <A, B, E>(propSelectFn: (sel: A) => B) =>
    (source: Observable<IResult<A, E>>) =>
      source.pipe(map(a => a.map(propSelectFn)))

export interface IXmlContainer {
  readonly xmlString: string
  readonly xmlDocument: Document
}

export const generateRequestElements = (reqNode: string) => (params: any) => {
  const cleanedParams = Object
    .keys(params)
    .reduce((acc, curr) => params[curr] === undefined ? acc : { ...acc, [curr]: params[curr] }, {})

  return js2xml({ [reqNode.replace(':', '_')]: cleanedParams }, {
    compact: true,
    elementNameFn: (value) => value.indexOf('_') > 0 ? value.replace('_', ':') : 'tt:' + value
  })
}

export const createStandardRequestBody =
  (body: string) =>
    reader<IDeviceConfig, Observable<IOnvifResult>>(config => {
      const gen = (body: string) => config.system.transport(body)(config.deviceUrl)
        .pipe(map(response => {
          const xmlDocument = parseXml(config.system.parser)(response.body)
          const tmp = (XMLNS.S11.split('=').pop() || '').replace(/"/g, '')
          const subcode = maybe(xmlDocument.getElementsByTagNameNS(tmp, 'Subcode').item(0)).flatMapAuto(a => a.textContent)
          const reason = maybe(xmlDocument.getElementsByTagNameNS(tmp, 'Reason').item(0)).flatMapAuto(a => a.textContent)

          return response.status === 200 && !reason.valueOrUndefined()
            ? ok<IXmlContainer, ITransportPayoad>({ xmlString: response.body, xmlDocument })
            : fail<IXmlContainer, ITransportPayoad>({
              ...response,
              statusMessage: (reason.valueOrUndefined() || subcode.valueOr(JSON.stringify(response.statusMessage))).trim()
            })
        }))

      return createUserToken().map(maybeUserToken => {
        return maybeUserToken.map(tokenPromise => {
          return from(tokenPromise).pipe(
            flatMap(token => gen(body.replace(`<${SOAP_NODE.Header}></${SOAP_NODE.Header}>`, `<${SOAP_NODE.Header}>${token}</${SOAP_NODE.Header}>`))))
        }).valueOr(gen(body))
      }).run(config)
    })

export const createStandardRequestBodyFromString =
  (body: string) =>
    createStandardRequestBody(soapShell(body)())

export const createSimpleRequestBodyFromString =
  (key: string) =>
    createStandardRequestBody(soapShell(`<${key}/>`)())

export const createDeviceRequestBodyFromString =
  (key: string) =>
    createSimpleRequestBodyFromString(`tds:${key}`)

export const createMediaRequestBodyFromString =
  (key: string) =>
    createSimpleRequestBodyFromString(`trt:${key}`)
