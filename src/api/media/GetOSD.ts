import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * Get the OSD.
 */
export const GetOSD =
  () =>
    createStandardRequestBodyFromString('<trt:GetOSD />')
      .map(mapResponseXmlToJson<any>('trt:GetOSDResponse')())
