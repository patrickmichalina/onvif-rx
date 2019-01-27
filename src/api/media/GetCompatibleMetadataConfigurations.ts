import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * This operation requests all the metadata configurations of the device that are compatible with a certain media profile. Each of the returned configurations shall be a valid input parameter for the AddMetadataConfiguration command on the media profile. The result varies depending on the capabilities, configurations and settings in the device.
 */
export const GetCompatibleMetadataConfigurations =
  () =>
    createStandardRequestBodyFromString('<trt:GetCompatibleMetadataConfigurations />')
      .map(mapResponseXmlToJson<any>('trt:GetCompatibleMetadataConfigurationsResponse')())
