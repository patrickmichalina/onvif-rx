import { soapShell, XMLNS } from '../../xml'
import { createStandardRequestBody, mapResponseXmlToJson } from '../request'

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

const createGetDNSBody = () =>
  soapShell(`<GetDNS ${XMLNS.DEVICE} />`)()

/**
 * This operation gets the DNS settings from a device. The device shall return its DNS configurations through the GetDNS command.
 */
export const getDNS = () =>
  createStandardRequestBody(createGetDNSBody())
    .map(mapResponseXmlToJson<IDNSInformation>('tds:DNSInformation'))
