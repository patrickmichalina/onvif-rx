import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * Operation to create a preset tour for the selected media profile.
 */
export const CreatePresetTour =
  () =>
    createStandardRequestBodyFromString('<tptz:CreatePresetTour />')
      .map(mapResponseXmlToJson<any>('tptz:CreatePresetTourResponse')())
