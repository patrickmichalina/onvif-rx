import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * Operation to request available options to configure PTZ preset tour.
 */
export const GetPresetTourOptions =
  () =>
    createStandardRequestBodyFromString('<tptz:GetPresetTourOptions />')
      .map(mapResponseXmlToJson<any>('tptz:GetPresetTourOptionsResponse')())
