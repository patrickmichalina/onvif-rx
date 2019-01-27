import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * If the audio output configuration token is already known, the output configuration can be fetched through the GetAudioOutputConfiguration command.
 */
export const GetAudioOutputConfiguration =
  () =>
    createStandardRequestBodyFromString('<trt:GetAudioOutputConfiguration />')
      .map(mapResponseXmlToJson<any>('trt:GetAudioOutputConfigurationResponse')())
