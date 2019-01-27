import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * 
 *         Operation to move the PTZ device to it's "home" position. The operation is supported if the HomeSupported element in the PTZNode is true.
 */
export const GotoHomePosition =
  () =>
    createStandardRequestBodyFromString('<tptz:GotoHomePosition />')
      .map(mapResponseXmlToJson<any>('tptz:GotoHomePositionResponse')())
