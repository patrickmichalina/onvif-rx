import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * 
 * Operation to request PTZ status for the Node in the
 * selected profile.
 */
export const GetStatus =
  () =>
    createStandardRequestBodyFromString('<tptz:GetStatus />')
      .map(mapResponseXmlToJson<any>('tptz:GetStatusResponse')())
