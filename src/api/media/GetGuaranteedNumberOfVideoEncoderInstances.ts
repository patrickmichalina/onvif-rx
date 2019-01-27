import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * The GetGuaranteedNumberOfVideoEncoderInstances command can be used to request the
 * minimum number of guaranteed video encoder instances (applications) per Video Source
 * Configuration.
 */
export const GetGuaranteedNumberOfVideoEncoderInstances =
  () =>
    createStandardRequestBodyFromString('<trt:GetGuaranteedNumberOfVideoEncoderInstances />')
      .map(mapResponseXmlToJson<any>('trt:GetGuaranteedNumberOfVideoEncoderInstancesResponse')())
