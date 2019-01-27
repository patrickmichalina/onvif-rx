import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * A device returns the information for current video source mode and settable video source modes of specified video source. A device that indicates a capability of  VideoSourceModes shall support this command.
 */
export const GetVideoSourceModes =
  () =>
    createStandardRequestBodyFromString('<trt:GetVideoSourceModes />')
      .map(mapResponseXmlToJson<any>('trt:GetVideoSourceModesResponse')())
