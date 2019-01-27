import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * This operation removes an AudioDecoderConfiguration from an existing media profile. If the media profile does not contain an AudioDecoderConfiguration, the operation has no effect. The removal shall be persistent.
 */
export const RemoveAudioDecoderConfiguration =
  () =>
    createStandardRequestBodyFromString('<trt:RemoveAudioDecoderConfiguration />')
      .map(mapResponseXmlToJson<any>('trt:RemoveAudioDecoderConfigurationResponse')())
