import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * Create the OSD.
 */
export const CreateOSD =
  () =>
    createStandardRequestBodyFromString('<trt:CreateOSD />')
      .map(mapResponseXmlToJson<any>('trt:CreateOSDResponse')())
