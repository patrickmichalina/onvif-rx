import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * This operation lists all existing video source configurations for a device. The client need not know anything about the video source configurations in order to use the command.
 */
export const GetVideoSourceConfigurations =
  () =>
    createStandardRequestBodyFromString('<trt:GetVideoSourceConfigurations />')
      .map(mapResponseXmlToJson<any>('trt:GetVideoSourceConfigurationsResponse')())
