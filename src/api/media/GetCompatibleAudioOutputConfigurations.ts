import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * This command lists all audio output configurations of a device that are compatible with a certain media profile. Each returned configuration shall be a valid input for the 
 * AddAudioOutputConfiguration command.
 */
export const GetCompatibleAudioOutputConfigurations =
  () =>
    createStandardRequestBodyFromString('<trt:GetCompatibleAudioOutputConfigurations />')
      .map(mapResponseXmlToJson<any>('trt:GetCompatibleAudioOutputConfigurationsResponse')())
