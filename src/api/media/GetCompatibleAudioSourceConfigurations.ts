import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * This operation requests all audio source configurations of the device that are compatible with a certain media profile. Each of the returned configurations shall be a valid input parameter for the AddAudioEncoderConfiguration command on the media profile. The result varies depending on the capabilities, configurations and settings in the device.
 */
export const GetCompatibleAudioSourceConfigurations =
  () =>
    createStandardRequestBodyFromString('<trt:GetCompatibleAudioSourceConfigurations />')
      .map(mapResponseXmlToJson<any>('trt:GetCompatibleAudioSourceConfigurationsResponse')())
