import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * 
 * This operation deletes the given storage configuration and configuration change shall always be persistent.
 * 
 */
export const DeleteStorageConfiguration =
  () =>
    createStandardRequestBodyFromString('<tds:DeleteStorageConfiguration />')
      .map(mapResponseXmlToJson<any>('tds:DeleteStorageConfigurationResponse')())
