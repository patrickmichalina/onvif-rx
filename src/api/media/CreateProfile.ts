import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * This operation creates a new empty media profile. The media profile shall be created in the
 * device and shall be persistent (remain after reboot). A created profile shall be deletable and a device shall set the “fixed” attribute to false in the
 * returned Profile.
 */
export const CreateProfile =
  () =>
    createStandardRequestBodyFromString('<trt:CreateProfile />')
      .map(mapResponseXmlToJson<any>('trt:CreateProfileResponse')())
