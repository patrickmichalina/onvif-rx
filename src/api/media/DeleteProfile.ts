import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import { ReferenceToken } from "../types";

/**
 * This operation deletes a profile. This change shall always be persistent. Deletion of a profile is only possible for non-fixed profiles
 */
export function DeleteProfile(ProfileToken: ReferenceToken) {
    createStandardRequestBodyFromString('<trt:DeleteProfile />')
                  .map(mapResponseXmlToJson<any>('trt:DeleteProfileResponse')())
                
}
