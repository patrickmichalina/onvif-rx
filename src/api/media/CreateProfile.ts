import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import { Name, ReferenceToken } from "../types";

/**
 * This operation creates a new empty media profile. The media profile shall be created in the
 *   device and shall be persistent (remain after reboot). A created profile shall be deletable and a device shall set the “fixed” attribute to false in the
 *   returned Profile.
 */
export function CreateProfile(Name: Name, Token: ReferenceToken) {
    createStandardRequestBodyFromString('<trt:CreateProfile />')
                  .map(mapResponseXmlToJson<any>('trt:CreateProfileResponse')())
                
}
