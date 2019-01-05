import { createDeviceRequestBodyFromString, mapResponseXmlToJson } from '../request'

/**
 * This operation gets the network interface configuration from a device. The device shall support 
 * return of network interface configuration settings as defined by the NetworkInterface type 
 * through the GetNetworkInterfaces command.
 */
export const getNetworkInterfaces = () =>
  createDeviceRequestBodyFromString('GetNetworkInterfaces')
    .map(mapResponseXmlToJson<any>('tds:GetNetworkInterfacesResponse'))

    // TODO: parsing this payload will require special work!