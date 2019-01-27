import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * This operation lists all video analytics configurations of a device. This command lists all configured video analytics in a device. The client need not know anything apriori about the video analytics in order to use the command.
 */
export const GetVideoAnalyticsConfigurations =
  () =>
    createStandardRequestBodyFromString('<trt:GetVideoAnalyticsConfigurations />')
      .map(mapResponseXmlToJson<any>('trt:GetVideoAnalyticsConfigurationsResponse')())
