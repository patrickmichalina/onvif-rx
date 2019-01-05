import { createDeviceRequestBodyFromString, mapResponseXmlToJson } from '../request'

export enum DynamicDNSType {
  NO_UPDATE = 'NoUpdate',
  CLIENT_UPDATES = 'ClientUpdates',
  SERVER_UPDATES = 'ServerUpdates'
}

export interface IDynamicDNSInformation {
  readonly Type?: DynamicDNSType
  readonly Name?: string
  readonly TTL?: string
  readonly Extension?: any
}

/**
 * This operation gets the dynamic DNS settings from a device. 
 * If the device supports dynamic DNS as specified in [RFC 2136] and [RFC 4702], 
 * it shall be possible to get the type, name and TTL through the GetDynamicDNS command.
 */
export const getDynamicDNS = () =>
  createDeviceRequestBodyFromString('GetDynamicDNS')
    .map(mapResponseXmlToJson<IDynamicDNSInformation>('tds:DynamicDNSInformation'))
