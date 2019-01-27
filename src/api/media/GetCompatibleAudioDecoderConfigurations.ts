import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * This operation lists all the audio decoder configurations of the device that are compatible with a certain media profile. Each of the returned configurations shall be a valid input parameter for the AddAudioDecoderConfiguration command on the media profile.
 */
export const GetCompatibleAudioDecoderConfigurations =
  () =>
    createStandardRequestBodyFromString('<trt:GetCompatibleAudioDecoderConfigurations />')
      .map(mapResponseXmlToJson<any>('trt:GetCompatibleAudioDecoderConfigurationsResponse')())
