import { createDeviceRequestBodyFromString, mapResponseXmlToJson } from '../request'

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
 * This operation is used by an endpoint to get the hostname from a device. 
 * The device shall return its hostname configurations through the GetHostname command.
 */
export const getHostname = () =>
  createDeviceRequestBodyFromString('GetHostname')
    .map(mapResponseXmlToJson<IHostnameInformation>('tds:HostnameInformation'))
