import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * This operation modifies an audio decoder configuration. The ForcePersistence flag indicates if
 * the changes shall remain after reboot of the device.
 */
export const SetAudioDecoderConfiguration =
  () =>
    createStandardRequestBodyFromString('<trt:SetAudioDecoderConfiguration />')
      .map(mapResponseXmlToJson<any>('trt:SetAudioDecoderConfigurationResponse')())
