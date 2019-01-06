import { mapResponseXmlToJson, createMediaRequestBodyFromString, mapResponseObsToProperty } from '../request'

export interface IGetVideoSourceConfigurations {
  readonly Configurations: any
}

export interface IGetVideoSourcesResponse {
  readonly VideoSources: any
}

export const getVideoSources = () =>
  createMediaRequestBodyFromString('GetVideoSources')
    .map(mapResponseXmlToJson<IGetVideoSourcesResponse>('trt:GetVideoSourcesResponse')(['trt:VideoSources']))
    .map(mapResponseObsToProperty(a => a.VideoSources))


export const getVideoSourceConfigurations = () =>
  createMediaRequestBodyFromString('GetVideoSourceConfigurations')
    .map(mapResponseXmlToJson<IGetVideoSourceConfigurations>('trt:GetVideoSourceConfigurationsResponse')(['trt:Configurations']))
    .map(mapResponseObsToProperty(a => a.Configurations))
