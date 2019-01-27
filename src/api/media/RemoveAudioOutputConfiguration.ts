import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * This operation removes an AudioOutputConfiguration from an existing media profile. If the media profile does not contain an AudioOutputConfiguration, the operation has no effect. The removal shall be persistent.
 */
export const RemoveAudioOutputConfiguration =
  () =>
    createStandardRequestBodyFromString('<trt:RemoveAudioOutputConfiguration />')
      .map(mapResponseXmlToJson<any>('trt:RemoveAudioOutputConfigurationResponse')())
