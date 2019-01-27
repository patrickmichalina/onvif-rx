import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * The GetAudioSourceConfiguration command fetches the audio source configurations if the audio source configuration token is already known. An
 */
export const GetAudioSourceConfiguration =
  () =>
    createStandardRequestBodyFromString('<trt:GetAudioSourceConfiguration />')
      .map(mapResponseXmlToJson<any>('trt:GetAudioSourceConfigurationResponse')())
