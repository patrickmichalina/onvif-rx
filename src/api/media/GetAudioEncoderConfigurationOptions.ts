import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * This operation returns the available options  (supported values and ranges for audio encoder configuration parameters) when the audio encoder parameters are
 * reconfigured.
 */
export const GetAudioEncoderConfigurationOptions =
  () =>
    createStandardRequestBodyFromString('<trt:GetAudioEncoderConfigurationOptions />')
      .map(mapResponseXmlToJson<any>('trt:GetAudioEncoderConfigurationOptionsResponse')())
