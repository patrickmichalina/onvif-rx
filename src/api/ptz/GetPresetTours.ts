import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * Operation to request PTZ preset tours in the selected media profiles.
 */
export const GetPresetTours =
  () =>
    createStandardRequestBodyFromString('<tptz:GetPresetTours />')
      .map(mapResponseXmlToJson<any>('tptz:GetPresetToursResponse')())
