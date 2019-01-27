import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * This operation returns the IEEE802.11 capabilities. The device shall support
 * this operation.
 */
export const GetDot11Capabilities =
  () =>
    createStandardRequestBodyFromString('<tds:GetDot11Capabilities />')
      .map(mapResponseXmlToJson<any>('tds:GetDot11CapabilitiesResponse')())
