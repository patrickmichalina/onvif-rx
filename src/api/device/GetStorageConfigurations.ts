import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * 
 * This operation lists all existing storage configurations for the device. 
 * 
 */
export const GetStorageConfigurations =
  () =>
    createStandardRequestBodyFromString('<tds:GetStorageConfigurations />')
      .map(mapResponseXmlToJson<any>('tds:GetStorageConfigurationsResponse')())
