import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * Returns the capabilities of the media service. The result is returned in a typed answer.
 */
export const GetServiceCapabilities =
  () =>
    createStandardRequestBodyFromString('<trt:GetServiceCapabilities />')
      .map(mapResponseXmlToJson<any>('trt:GetServiceCapabilitiesResponse')())
