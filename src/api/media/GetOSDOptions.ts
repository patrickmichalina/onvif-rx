import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * Get the OSD Options.
 */
export const GetOSDOptions =
  () =>
    createStandardRequestBodyFromString('<trt:GetOSDOptions />')
      .map(mapResponseXmlToJson<any>('trt:GetOSDOptionsResponse')())
