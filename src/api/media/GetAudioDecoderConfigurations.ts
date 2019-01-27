import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * This command lists all existing AudioDecoderConfigurations of a device. The NVC need not know anything apriori about the audio decoder configurations in order to
 * use this command.
 */
export const GetAudioDecoderConfigurations =
  () =>
    createStandardRequestBodyFromString('<trt:GetAudioDecoderConfigurations />')
      .map(mapResponseXmlToJson<any>('trt:GetAudioDecoderConfigurationsResponse')())
