import { mapResponseXmlToJson, createMediaRequestBodyFromString, mapResponseObsToProperty } from '../soap/request'

export interface IGetProfilesResponse {
  readonly Profiles: any
}

export const getProfiles = () =>
  createMediaRequestBodyFromString('GetProfiles')
    .map(mapResponseXmlToJson<IGetProfilesResponse>('trt:GetProfilesResponse')(['trt:Profiles']))
    .map(mapResponseObsToProperty(a => a.Profiles))
