import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * This command lists all existing AudioOutputConfigurations of a device. The NVC need not know anything apriori about the audio configurations to use this command.
 */
export const GetAudioOutputConfigurations =
  () =>
    createStandardRequestBodyFromString('<trt:GetAudioOutputConfigurations />')
      .map(mapResponseXmlToJson<any>('trt:GetAudioOutputConfigurationsResponse')())
