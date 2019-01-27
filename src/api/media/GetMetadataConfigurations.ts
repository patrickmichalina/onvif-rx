import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * This operation lists all existing metadata configurations. The client need not know anything apriori about the metadata in order to use the command.
 */
export const GetMetadataConfigurations =
  () =>
    createStandardRequestBodyFromString('<trt:GetMetadataConfigurations />')
      .map(mapResponseXmlToJson<any>('trt:GetMetadataConfigurationsResponse')())
