import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * This operation adds an AudioDecoderConfiguration to an existing media profile. If a configuration exists in the media profile, it shall be replaced. The change shall be persistent.
 */
export const AddAudioDecoderConfiguration =
  () =>
    createStandardRequestBodyFromString('<trt:AddAudioDecoderConfiguration />')
      .map(mapResponseXmlToJson<any>('trt:AddAudioDecoderConfigurationResponse')())
