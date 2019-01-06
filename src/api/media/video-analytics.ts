import { mapResponseXmlToJson, createMediaRequestBodyFromString, mapResponseObsToProperty } from '../request'

export interface IGetVideoAnalyticsConfigurationsResponse {
  readonly Configurations: any
}

/**
 * This operation lists all video analytics configurations of a device. This command lists 
 * all configured video analytics in a device. The client need not know anything apriori about 
 * the video analytics in order to use the command.
 */
export const getVideoAnalyticsConfigurations = () =>
  createMediaRequestBodyFromString('GetVideoAnalyticsConfigurations')
    .map(mapResponseXmlToJson<IGetVideoAnalyticsConfigurationsResponse>('trt:GetVideoAnalyticsConfigurationsResponse')(['trt:Configurations']))
    .map(mapResponseObsToProperty(a => a.Configurations))
