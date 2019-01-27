import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * Returns the capabilities of the device service. The result is returned in a typed answer.
 */
export const GetServiceCapabilities =
  () =>
    createStandardRequestBodyFromString('<tds:GetServiceCapabilities />')
      .map(mapResponseXmlToJson<any>('tds:GetServiceCapabilitiesResponse')())
