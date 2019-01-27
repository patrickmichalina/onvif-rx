import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * This operation removes an AudioSourceConfiguration from an existing media profile. If the
 * media profile does not contain an AudioSourceConfiguration, the operation has no effect. The
 * removal shall be persistent. Audio source configurations should only be removed after removing an
 * AudioEncoderConfiguration from the media profile.
 */
export const RemoveAudioSourceConfiguration =
  () =>
    createStandardRequestBodyFromString('<trt:RemoveAudioSourceConfiguration />')
      .map(mapResponseXmlToJson<any>('trt:RemoveAudioSourceConfigurationResponse')())
