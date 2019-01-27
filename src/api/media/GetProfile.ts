import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * If the profile token is already known, a profile can be fetched through the GetProfile command.
 */
export const GetProfile =
  () =>
    createStandardRequestBodyFromString('<trt:GetProfile />')
      .map(mapResponseXmlToJson<any>('trt:GetProfileResponse')())
