import { mapResponseXmlToJson, createMediaRequestBodyFromString, mapResponseObsToProperty } from '../soap/request'

export interface IGetVideoEncoderConfigurationsResponse {
  readonly Configurations: any
}

/**
 * This command lists all configured video encoder configurations in a device. 
 * The client need not know anything apriori about the video encoder configurations in order to use the command.
 */
export const getGetVideoEncoderConfigurations = () =>
  createMediaRequestBodyFromString('GetVideoEncoderConfigurations')
    .map(mapResponseXmlToJson<IGetVideoEncoderConfigurationsResponse>('trt:GetVideoEncoderConfigurationsResponse')(['trt:Configurations']))
    .map(mapResponseObsToProperty(a => a.Configurations))
