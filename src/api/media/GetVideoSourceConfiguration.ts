import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * If the video source configuration token is already known, the video source configuration can be fetched through the GetVideoSourceConfiguration command.
 */
export const GetVideoSourceConfiguration =
  () =>
    createStandardRequestBodyFromString('<trt:GetVideoSourceConfiguration />')
      .map(mapResponseXmlToJson<any>('trt:GetVideoSourceConfigurationResponse')())
