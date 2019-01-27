import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * Get the OSDs.
 */
export const GetOSDs =
  () =>
    createStandardRequestBodyFromString('<trt:GetOSDs />')
      .map(mapResponseXmlToJson<any>('trt:GetOSDsResponse')())
