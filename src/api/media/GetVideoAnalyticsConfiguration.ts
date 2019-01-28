import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import { ReferenceToken } from "../types";

/**
 * The GetVideoAnalyticsConfiguration command fetches the video analytics configuration if the video analytics token is known.
 */
export function GetVideoAnalyticsConfiguration(ConfigurationToken: ReferenceToken) {
    createStandardRequestBodyFromString('<trt:GetVideoAnalyticsConfiguration />')
                  .map(mapResponseXmlToJson<any>('trt:GetVideoAnalyticsConfigurationResponse')())
                
}
