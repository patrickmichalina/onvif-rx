import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * The GetAudioEncoderConfiguration command fetches the encoder configuration if the audio encoder configuration token is known.
 */
export const GetAudioEncoderConfiguration =
  () =>
    createStandardRequestBodyFromString('<trt:GetAudioEncoderConfiguration />')
      .map(mapResponseXmlToJson<any>('trt:GetAudioEncoderConfigurationResponse')())
