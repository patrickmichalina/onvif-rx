import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * This operation removes a VideoAnalyticsConfiguration from an existing media profile. If the media profile does not contain a VideoAnalyticsConfiguration, the operation has no effect.
 * The removal shall be persistent.
 */
export const RemoveVideoAnalyticsConfiguration =
  () =>
    createStandardRequestBodyFromString('<trt:RemoveVideoAnalyticsConfiguration />')
      .map(mapResponseXmlToJson<any>('trt:RemoveVideoAnalyticsConfigurationResponse')())
