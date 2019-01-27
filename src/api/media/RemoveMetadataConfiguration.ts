import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * This operation removes a MetadataConfiguration from an existing media profile. If the media profile does not contain a MetadataConfiguration, the operation has no effect. The removal shall be persistent.
 */
export const RemoveMetadataConfiguration =
  () =>
    createStandardRequestBodyFromString('<trt:RemoveMetadataConfiguration />')
      .map(mapResponseXmlToJson<any>('trt:RemoveMetadataConfigurationResponse')())
