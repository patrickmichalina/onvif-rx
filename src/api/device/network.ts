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

export enum IPType {
  IPV4 = 'IPv4',
  IPV6 = 'IPv4'
}

export interface IDNSInformation {
  /**
   * Indicates whether or not DNS information is retrieved from DHCP.
   */
  readonly FromDHCP: boolean

  /**
   * Search domain.
   */
  readonly SearchDomain: string

  /**
   * List of DNS addresses received from DHCP.
   */
  readonly DNSFromDHCP?: IIPAddress

  /**
   * List of manually entered DNS addresses.
   */
  readonly DNSManual?: IIPAddress
}

export interface IIPAddress {
  /**
   * Indicates if the address is an IPv4 or IPv6 address.
   */
  readonly Type?: IPType

  /**
   * IPv4 address.
   */
  readonly IPv4Address?: string

  /**
   * IPv6 address.
   */
  readonly IPv6Address?: string
}

export interface IHostnameInformation {
  /**
   * Indicates whether the hostname is obtained from DHCP or not.
   */
  readonly FromDHCP: boolean

  /**
   * Indicates the hostname.
   */
  readonly Name: string
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

/**
 * This operation gets the DNS settings from a device. The device shall return its DNS configurations through the GetDNS command.
 */
export const getDNS = () =>
  createDeviceRequestBodyFromString('GetDNS')
    .map(mapResponseXmlToJson<IDNSInformation>('tds:DNSInformation'))

/**
 * This operation is used by an endpoint to get the hostname from a device. 
 * The device shall return its hostname configurations through the GetHostname command.
 */
export const getHostname = () =>
  createDeviceRequestBodyFromString('GetHostname')
    .map(mapResponseXmlToJson<IHostnameInformation>('tds:HostnameInformation'))

/**
* This operation gets defined network protocols from a device. 
* The device shall support the GetNetworkProtocols command returning configured network protocols.
*/
export const getNetworkProtocols = () =>
  createDeviceRequestBodyFromString('GetNetworkProtocols')
    .map(mapResponseXmlToJson<any>('tds:GetNetworkProtocolsResponse'))

/**
* This operation gets the network interface configuration from a device. The device shall support 
* return of network interface configuration settings as defined by the NetworkInterface type 
* through the GetNetworkInterfaces command.
*/
export const getNetworkInterfaces = () =>
  createDeviceRequestBodyFromString('GetNetworkInterfaces')
    .map(mapResponseXmlToJson<any>('tds:GetNetworkInterfacesResponse'))

  // TODO: parsing this payload will require special work!