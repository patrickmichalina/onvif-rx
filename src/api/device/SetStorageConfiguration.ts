import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * 
 * This operation modifies an existing Storage configuration.
 * 
 */
export const SetStorageConfiguration =
  () =>
    createStandardRequestBodyFromString('<tds:SetStorageConfiguration />')
      .map(mapResponseXmlToJson<any>('tds:SetStorageConfigurationResponse')())
