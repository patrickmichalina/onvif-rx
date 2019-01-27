import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * Delete the OSD.
 */
export const DeleteOSD =
  () =>
    createStandardRequestBodyFromString('<trt:DeleteOSD />')
      .map(mapResponseXmlToJson<any>('trt:DeleteOSDResponse')())
