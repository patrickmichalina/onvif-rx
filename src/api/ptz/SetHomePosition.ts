import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * Operation to save current position as the home position.
 * The SetHomePosition command returns with a failure if the “home” position is fixed and
 * cannot be overwritten. If the SetHomePosition is successful, it is possible to recall the
 * Home Position with the GotoHomePosition command.
 */
export const SetHomePosition =
  () =>
    createStandardRequestBodyFromString('<tptz:SetHomePosition />')
      .map(mapResponseXmlToJson<any>('tptz:SetHomePositionResponse')())
