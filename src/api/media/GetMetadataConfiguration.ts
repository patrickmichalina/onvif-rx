import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * The GetMetadataConfiguration command fetches the metadata configuration if the metadata token is known.
 */
export const GetMetadataConfiguration =
  () =>
    createStandardRequestBodyFromString('<trt:GetMetadataConfiguration />')
      .map(mapResponseXmlToJson<any>('trt:GetMetadataConfigurationResponse')())
