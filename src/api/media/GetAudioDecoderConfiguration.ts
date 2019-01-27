import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * If the audio decoder configuration token is already known, the decoder configuration can be fetched through the GetAudioDecoderConfiguration command.
 */
export const GetAudioDecoderConfiguration =
  () =>
    createStandardRequestBodyFromString('<trt:GetAudioDecoderConfiguration />')
      .map(mapResponseXmlToJson<any>('trt:GetAudioDecoderConfigurationResponse')())
