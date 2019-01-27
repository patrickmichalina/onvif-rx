import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * This operation returns the available options (supported values and ranges for audio source configuration parameters) when the audio source parameters are
 * reconfigured. If an audio source configuration is specified, the options shall concern that
 * particular configuration. If a media profile is specified, the options shall be compatible with
 * that media profile.
 */
export const GetAudioSourceConfigurationOptions =
  () =>
    createStandardRequestBodyFromString('<trt:GetAudioSourceConfigurationOptions />')
      .map(mapResponseXmlToJson<any>('trt:GetAudioSourceConfigurationOptionsResponse')())
