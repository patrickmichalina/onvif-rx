import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * Returns the capabilities of the PTZ service. The result is returned in a typed answer.
 */
export const GetServiceCapabilities =
  () =>
    createStandardRequestBodyFromString('<tptz:GetServiceCapabilities />')
      .map(mapResponseXmlToJson<any>('tptz:GetServiceCapabilitiesResponse')())
