import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * 
 *         Set/update a existing PTZConfiguration on the device.
 *       
 */
export const SetConfiguration =
  () =>
    createStandardRequestBodyFromString('<tptz:SetConfiguration />')
      .map(mapResponseXmlToJson<any>('tptz:SetConfigurationResponse')())
