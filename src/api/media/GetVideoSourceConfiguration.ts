import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import { ReferenceToken } from "../types";

/**
 * If the video source configuration token is already known, the video source configuration can be fetched through the GetVideoSourceConfiguration command.
 */
export function GetVideoSourceConfiguration(ConfigurationToken: ReferenceToken) {
    createStandardRequestBodyFromString('<trt:GetVideoSourceConfiguration />')
                  .map(mapResponseXmlToJson<any>('trt:GetVideoSourceConfigurationResponse')())
                
}
