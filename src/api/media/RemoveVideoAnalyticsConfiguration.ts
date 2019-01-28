import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import { ReferenceToken } from "../types";

/**
 * This operation removes a VideoAnalyticsConfiguration from an existing media profile. If the media profile does not contain a VideoAnalyticsConfiguration, the operation has no effect.
 *   The removal shall be persistent.
 */
export function RemoveVideoAnalyticsConfiguration(ProfileToken: ReferenceToken) {
    createStandardRequestBodyFromString('<trt:RemoveVideoAnalyticsConfiguration />')
                  .map(mapResponseXmlToJson<any>('trt:RemoveVideoAnalyticsConfigurationResponse')())
                
}
