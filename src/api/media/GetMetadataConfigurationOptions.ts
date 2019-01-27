import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * This operation returns the available options (supported values and ranges for metadata configuration parameters) for changing the metadata configuration.
 */
export const GetMetadataConfigurationOptions =
  () =>
    createStandardRequestBodyFromString('<trt:GetMetadataConfigurationOptions />')
      .map(mapResponseXmlToJson<any>('trt:GetMetadataConfigurationOptionsResponse')())
