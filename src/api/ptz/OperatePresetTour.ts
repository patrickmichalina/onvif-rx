import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * Operation to perform specific operation on the preset tour in selected media profile.
 */
export const OperatePresetTour =
  () =>
    createStandardRequestBodyFromString('<tptz:OperatePresetTour />')
      .map(mapResponseXmlToJson<any>('tptz:OperatePresetTourResponse')())
