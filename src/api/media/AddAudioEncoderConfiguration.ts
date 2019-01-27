import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * This operation adds an AudioEncoderConfiguration to an existing media profile. If a 
 * configuration exists in the media profile, it will be replaced. The change shall be persistent. A device shall
 * support adding a compatible AudioEncoderConfiguration to a profile containing an AudioSourceConfiguration and shall
 * support streaming audio data of such a profile.
 * 
 */
export const AddAudioEncoderConfiguration =
  () =>
    createStandardRequestBodyFromString('<trt:AddAudioEncoderConfiguration />')
      .map(mapResponseXmlToJson<any>('trt:AddAudioEncoderConfigurationResponse')())
