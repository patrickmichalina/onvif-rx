import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * This operation gets the network interface configuration from a device. The device shall
 * support return of network interface configuration settings as defined by the NetworkInterface
 * type through the GetNetworkInterfaces command.
 */
export const GetNetworkInterfaces =
  () =>
    createStandardRequestBodyFromString('<tds:GetNetworkInterfaces />')
      .map(mapResponseXmlToJson<any>('tds:GetNetworkInterfacesResponse')())
