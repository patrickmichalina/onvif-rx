import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * Operation to request a specific PTZ preset tour in the selected media profile.
 */
export const GetPresetTour =
  () =>
    createStandardRequestBodyFromString('<tptz:GetPresetTour />')
      .map(mapResponseXmlToJson<any>('tptz:GetPresetTourResponse')())
