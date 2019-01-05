import { createDeviceRequestBodyFromString, mapResponseXmlToJson } from '../request'

/**
 * This operation gets defined network protocols from a device. 
 * The device shall support the GetNetworkProtocols command returning configured network protocols.
 */
export const getNetworkProtocols = () =>
  createDeviceRequestBodyFromString('GetNetworkProtocols')
    .map(mapResponseXmlToJson<any>('tds:GetNetworkProtocolsResponse'))

    // TODO: parsing this payload will require special work!