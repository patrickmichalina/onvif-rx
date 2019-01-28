import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import { ReferenceToken } from "../types";

/**
 * This operation requests all video analytic configurations of the device that are compatible with a certain media profile. Each of the returned configurations shall be a valid input parameter for the AddVideoAnalyticsConfiguration command on the media profile. The result varies depending on the capabilities, configurations and settings in the device.
 */
export function GetCompatibleVideoAnalyticsConfigurations(ProfileToken: ReferenceToken) {
    createStandardRequestBodyFromString('<trt:GetCompatibleVideoAnalyticsConfigurations />')
                  .map(mapResponseXmlToJson<any>('trt:GetCompatibleVideoAnalyticsConfigurationsResponse')())
                
}
