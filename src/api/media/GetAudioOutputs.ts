import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * This command lists all available physical audio outputs of the device.
 */
export const GetAudioOutputs =
  () =>
    createStandardRequestBodyFromString('<trt:GetAudioOutputs />')
      .map(mapResponseXmlToJson<any>('trt:GetAudioOutputsResponse')())
