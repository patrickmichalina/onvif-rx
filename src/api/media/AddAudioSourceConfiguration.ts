import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * This operation adds an AudioSourceConfiguration to an existing media profile. If a
 * configuration exists in the media profile, it will be replaced. The change shall be persistent.
 */
export const AddAudioSourceConfiguration =
  () =>
    createStandardRequestBodyFromString('<trt:AddAudioSourceConfiguration />')
      .map(mapResponseXmlToJson<any>('trt:AddAudioSourceConfigurationResponse')())
