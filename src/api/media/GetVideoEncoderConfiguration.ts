import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * If the video encoder configuration token is already known, the encoder configuration can be fetched through the GetVideoEncoderConfiguration command.
 */
export const GetVideoEncoderConfiguration =
  () =>
    createStandardRequestBodyFromString('<trt:GetVideoEncoderConfiguration />')
      .map(mapResponseXmlToJson<any>('trt:GetVideoEncoderConfigurationResponse')())
