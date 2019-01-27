import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * Get a specific PTZ Node identified by a reference
 *         token or a name.
 *   
 */
export const GetNode =
  () =>
    createStandardRequestBodyFromString('<tptz:GetNode />')
      .map(mapResponseXmlToJson<any>('tptz:GetNodeResponse')())
