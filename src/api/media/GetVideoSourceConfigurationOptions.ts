import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import { ReferenceToken } from "../types";

/**
 * This operation returns the available options  (supported values and ranges for video source configuration parameters) when the video source parameters are
 *   reconfigured If a video source configuration is specified, the options shall concern that
 *   particular configuration. If a media profile is specified, the options shall be compatible with
 *   that media profile.
 */
export function GetVideoSourceConfigurationOptions(ConfigurationToken: ReferenceToken, ProfileToken: ReferenceToken) {
    createStandardRequestBodyFromString('<trt:GetVideoSourceConfigurationOptions />')
                  .map(mapResponseXmlToJson<any>('trt:GetVideoSourceConfigurationOptionsResponse')())
                
}
