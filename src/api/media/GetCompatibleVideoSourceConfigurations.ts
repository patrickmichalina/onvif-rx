import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import { ReferenceToken } from "../types";

/**
 * This operation requests all the video source configurations of the device that are compatible
 *   with a certain media profile. Each of the returned configurations shall be a valid input
 *   parameter for the AddVideoSourceConfiguration command on the media profile. The result
 *   will vary depending on the capabilities, configurations and settings in the device.
 */
export function GetCompatibleVideoSourceConfigurations(ProfileToken: ReferenceToken) {
    createStandardRequestBodyFromString('<trt:GetCompatibleVideoSourceConfigurations />')
                  .map(mapResponseXmlToJson<any>('trt:GetCompatibleVideoSourceConfigurationsResponse')())
                
}
