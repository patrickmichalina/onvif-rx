import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * This command lists all available physical audio inputs of the device.
 */
export const GetAudioSources =
  () =>
    createStandardRequestBodyFromString('<trt:GetAudioSources />')
      .map(mapResponseXmlToJson<any>('trt:GetAudioSourcesResponse')())
