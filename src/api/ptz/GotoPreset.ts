import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * 
 *         Operation to go to a saved preset position for the
 *         PTZNode in the selected profile. The operation is supported if there is
 *         support for at least on PTZ preset by the PTZNode.
 */
export const GotoPreset =
  () =>
    createStandardRequestBodyFromString('<tptz:GotoPreset />')
      .map(mapResponseXmlToJson<any>('tptz:GotoPresetResponse')())
