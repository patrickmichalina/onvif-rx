import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * 
 * This operation retrieves the Storage configuration associated with the given storage configuration token.
 * 
 */
export const GetStorageConfiguration =
  () =>
    createStandardRequestBodyFromString('<tds:GetStorageConfiguration />')
      .map(mapResponseXmlToJson<any>('tds:GetStorageConfigurationResponse')())
