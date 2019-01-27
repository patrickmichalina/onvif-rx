import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * This operation gets defined network protocols from a device. The device shall support the
 * GetNetworkProtocols command returning configured network protocols.
 */
export const GetNetworkProtocols =
  () =>
    createStandardRequestBodyFromString('<tds:GetNetworkProtocols />')
      .map(mapResponseXmlToJson<any>('tds:GetNetworkProtocolsResponse')())
