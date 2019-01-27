import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * This command lists all available physical video inputs of the device.
 */
export const GetVideoSources =
  () =>
    createStandardRequestBodyFromString('<trt:GetVideoSources />')
      .map(mapResponseXmlToJson<any>('trt:GetVideoSourcesResponse')())
