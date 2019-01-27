import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * 
 * This operation creates a new storage configuration. 
 * The configuration data shall be created in the device and shall be persistent (remain after reboot).
 * 
 */
export const CreateStorageConfiguration =
  () =>
    createStandardRequestBodyFromString('<tds:CreateStorageConfiguration />')
      .map(mapResponseXmlToJson<any>('tds:CreateStorageConfigurationResponse')())
