import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * This operation sets the zero-configuration. Use GetCapalities to get if zero-zero-configuration is supported or not.
 */
export const SetZeroConfiguration =
  () =>
    createStandardRequestBodyFromString('<tds:SetZeroConfiguration />')
      .map(mapResponseXmlToJson<any>('tds:SetZeroConfigurationResponse')())
