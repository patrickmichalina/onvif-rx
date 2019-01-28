import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import "../types";

/**
 * This operation lists all existing video source configurations for a device. The client need not know anything about the video source configurations in order to use the command.
 */
export function GetVideoSourceConfigurations() {
    createStandardRequestBodyFromString('<trt:GetVideoSourceConfigurations />')
                  .map(mapResponseXmlToJson<any>('trt:GetVideoSourceConfigurationsResponse')())
                
}
