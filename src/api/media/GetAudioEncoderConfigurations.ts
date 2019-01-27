import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * This operation lists all existing device audio encoder configurations. The client need not know anything apriori about the audio encoder configurations in order to use the command.
 */
export const GetAudioEncoderConfigurations =
  () =>
    createStandardRequestBodyFromString('<trt:GetAudioEncoderConfigurations />')
      .map(mapResponseXmlToJson<any>('trt:GetAudioEncoderConfigurationsResponse')())
