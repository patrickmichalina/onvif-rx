import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * This operation returns the available options (supported values and ranges for audio output configuration parameters) for configuring an audio output.
 */
export const GetAudioOutputConfigurationOptions =
  () =>
    createStandardRequestBodyFromString('<trt:GetAudioOutputConfigurationOptions />')
      .map(mapResponseXmlToJson<any>('trt:GetAudioOutputConfigurationOptionsResponse')())
