import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * This operation removes an AudioEncoderConfiguration from an existing media profile. If the
 * media profile does not contain an AudioEncoderConfiguration, the operation has no effect.
 * The removal shall be persistent.
 */
export const RemoveAudioEncoderConfiguration =
  () =>
    createStandardRequestBodyFromString('<trt:RemoveAudioEncoderConfiguration />')
      .map(mapResponseXmlToJson<any>('trt:RemoveAudioEncoderConfigurationResponse')())
