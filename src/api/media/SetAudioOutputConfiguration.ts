import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * This operation modifies an audio output configuration. The ForcePersistence flag indicates if
 * the changes shall remain after reboot of the device.
 */
export const SetAudioOutputConfiguration =
  () =>
    createStandardRequestBodyFromString('<trt:SetAudioOutputConfiguration />')
      .map(mapResponseXmlToJson<any>('trt:SetAudioOutputConfigurationResponse')())
