import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * This operation deletes a profile. This change shall always be persistent. Deletion of a profile is only possible for non-fixed profiles
 */
export const DeleteProfile =
  () =>
    createStandardRequestBodyFromString('<trt:DeleteProfile />')
      .map(mapResponseXmlToJson<any>('trt:DeleteProfileResponse')())
