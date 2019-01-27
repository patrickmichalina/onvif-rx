import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * The GetVideoAnalyticsConfiguration command fetches the video analytics configuration if the video analytics token is known.
 */
export const GetVideoAnalyticsConfiguration =
  () =>
    createStandardRequestBodyFromString('<trt:GetVideoAnalyticsConfiguration />')
      .map(mapResponseXmlToJson<any>('trt:GetVideoAnalyticsConfigurationResponse')())
