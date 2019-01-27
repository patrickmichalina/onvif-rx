import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * 
 *         Operation to remove a PTZ preset for the Node in
 *         the
 *         selected profile. The operation is supported if the
 *         PresetPosition
 *         capability exists for teh Node in the
 *         selected profile.
 *       
 */
export const RemovePreset =
  () =>
    createStandardRequestBodyFromString('<tptz:RemovePreset />')
      .map(mapResponseXmlToJson<any>('tptz:RemovePresetResponse')())
