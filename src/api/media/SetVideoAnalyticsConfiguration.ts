import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import { VideoAnalyticsConfiguration } from "../types";

/**
 * A video analytics configuration is modified using this command. The ForcePersistence flag
 *   indicates if the changes shall remain after reboot of the device or not. Running streams using
 *   this configuration shall be immediately updated according to the new settings. Otherwise
 *   inconsistencies can occur between the scene description processed by the rule engine and
 *   the notifications produced by analytics engine and rule engine which reference the very same
 *   video analytics configuration token.
 */
export function SetVideoAnalyticsConfiguration(Configuration: VideoAnalyticsConfiguration, ForcePersistence: boolean) {
    createStandardRequestBodyFromString('<trt:SetVideoAnalyticsConfiguration />')
                  .map(mapResponseXmlToJson<any>('trt:SetVideoAnalyticsConfigurationResponse')())
                
}
