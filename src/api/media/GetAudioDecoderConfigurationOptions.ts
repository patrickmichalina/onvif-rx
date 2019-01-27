import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * This command list the audio decoding capabilities for a given profile and configuration of a
 * device.
 */
export const GetAudioDecoderConfigurationOptions =
  () =>
    createStandardRequestBodyFromString('<trt:GetAudioDecoderConfigurationOptions />')
      .map(mapResponseXmlToJson<any>('trt:GetAudioDecoderConfigurationOptionsResponse')())
