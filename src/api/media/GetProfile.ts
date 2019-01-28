import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import { ReferenceToken } from "../types";

/**
 * If the profile token is already known, a profile can be fetched through the GetProfile command.
 */
export function GetProfile(ProfileToken: ReferenceToken) {
    createStandardRequestBodyFromString('<trt:GetProfile />')
                  .map(mapResponseXmlToJson<any>('trt:GetProfileResponse')())
                
}
