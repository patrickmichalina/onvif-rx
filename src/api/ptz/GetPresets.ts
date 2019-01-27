import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * 
 *         Operation to request all PTZ presets for the PTZNode
 *         in the selected profile. The operation is supported if there is support
 *         for at least on PTZ preset by the PTZNode.
 */
export const GetPresets =
  () =>
    createStandardRequestBodyFromString('<tptz:GetPresets />')
      .map(mapResponseXmlToJson<any>('tptz:GetPresetsResponse')())
