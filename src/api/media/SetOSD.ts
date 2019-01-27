import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * Set the OSD
 */
export const SetOSD =
  () =>
    createStandardRequestBodyFromString('<trt:SetOSD />')
      .map(mapResponseXmlToJson<any>('trt:SetOSDResponse')())
