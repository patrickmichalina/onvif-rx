import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * Operation to modify a preset tour for the selected media profile.
 */
export const ModifyPresetTour =
  () =>
    createStandardRequestBodyFromString('<tptz:ModifyPresetTour />')
      .map(mapResponseXmlToJson<any>('tptz:ModifyPresetTourResponse')())
