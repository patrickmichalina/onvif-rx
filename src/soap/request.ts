import { reader, maybe, fail, ok, IResult } from 'typescript-monads'
import { IDeviceConfig, ITransportPayoad } from '../config/interfaces'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { createUserToken } from './auth'

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

export interface ITransportPayloadXml {
  readonly body: Document
  readonly statusMessage: string
  readonly status: number
}

export type IOnvifNetworkResponse<T> = Observable<IResult<T, ITransportPayloadXml>>

// LOL
const cleanColon = (str: string) => str.replace(/^.+:/, '')

const parseXml =
  (parser: DOMParser) =>
    (payload: ITransportPayoad): ITransportPayloadXml => {
      // console.log(payload.body)
      return {
        ...payload,
        body: parser.parseFromString(payload.body, 'text/xml')
      }
    }

const propertyTypeConverter =
  (val?: string | null) =>
    val === 'false' || val === 'true'
      ? val === 'true' ? true : false
      : val
        ? isNaN(Number(val)) ? val : Number(val)
        : undefined

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
          }
        }, { ...parseAttributes(elm.attributes as any) } as T)


export enum SOAP_NODE {
  Header = 'S11:Header',
  Envelope = 'S11:Envelope',
  Body = 'S11:Body'
}

const nsstr = () => Object.keys(XMLNS).map((k: any) => XMLNS[k])

export const soapShell =
  (rawBody: string) =>
    (rawHeader?: string) =>
      `<?xml version="1.0" encoding="UTF-8"?>
      <${SOAP_NODE.Envelope} ${nsstr().join(' ')}>
        <${SOAP_NODE.Header}>${rawHeader || ''}</${SOAP_NODE.Header}>
        <${SOAP_NODE.Body}>${rawBody}</${SOAP_NODE.Body}>
      </${SOAP_NODE.Envelope}>`

export const mapResponseXmlToJson =
  <T>(node: string) =>
    (collectionKeys: ReadonlyArray<string> = []) =>
      (source: Observable<IOnvifResult>) =>
        source.pipe(
          map(a => a.map(startingAtNode<T>(node)(collectionKeys))))

export const mapResponseObsToProperty =
  <A, B, E>(propSelectFn: (sel: A) => B) =>
    (source: Observable<IResult<A, E>>) =>
      source.pipe(map(a => a.map(propSelectFn)))

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

type IOnvifResult = IResult<Document, ITransportPayloadXml>

export const createStandardRequestBody =
  (body: string) =>
    reader<IDeviceConfig, Observable<IOnvifResult>>(config => {
      const gen = (body: string) => config.system.transport(body)(config.deviceUrl)
        .pipe(map(parseXml(config.system.parser)))
        .pipe(map(response => {
          const tmp = (XMLNS.S11.split('=').pop() || '').replace(/"/g, '')
          const subcode = maybe(response.body.getElementsByTagNameNS(tmp, 'Subcode').item(0)).flatMapAuto(a => a.textContent)
          const reason = maybe(response.body.getElementsByTagNameNS(tmp, 'Reason').item(0)).flatMapAuto(a => a.textContent)

          return response.status === 200 && !reason.valueOrUndefined()
            ? ok(response.body)
            : fail<Document, ITransportPayloadXml>({
              ...response,
              statusMessage: (reason.valueOrUndefined() || subcode.valueOr(response.statusMessage)).trim()
            })
        }))

      return createUserToken().map(maybeUserToken => {
        return maybeUserToken.map(token => {
          return gen(body.replace(`<${SOAP_NODE.Header}></${SOAP_NODE.Header}>`, `<${SOAP_NODE.Header}>${token}</${SOAP_NODE.Header}>`))
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

// tslint:disable-next-line:readonly-array
export const generateRequestElements = (reqNode: string) => (parameterNodes: string[]) => (...params: any[]) => {
  return !params.length
    ? `<${reqNode} />`
    : `<${reqNode}>${params.map((param, index) => {
      const type = typeof param
      const insertIntoRootNode = (inner: string) => `<${parameterNodes[index]}>${inner}</${parameterNodes[index]}>`

      switch (type) {
        case 'undefined': return ''
        case 'boolean': return insertIntoRootNode(param)
        case 'object': return insertIntoRootNode(Object.keys(param).reduce((acc, key) => {
          const val = (param as any)[key]
          return val
            ? (acc || '') + `<${key}>${(param as any)[key]}</${key}>`
            : (acc || '')
        }, ''))
        default: return insertIntoRootNode(param)
      }
    }).join('')}</${reqNode}>`
}
