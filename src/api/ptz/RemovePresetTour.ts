import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * Operation to delete a specific preset tour from the media profile.
 */
export const RemovePresetTour =
  () =>
    createStandardRequestBodyFromString('<tptz:RemovePresetTour />')
      .map(mapResponseXmlToJson<any>('tptz:RemovePresetTourResponse')())
