import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import "../types";

/**
 * This command lists all available physical video inputs of the device.
 */
export function GetVideoSources() {
    createStandardRequestBodyFromString('<trt:GetVideoSources />')
                  .map(mapResponseXmlToJson<any>('trt:GetVideoSourcesResponse')())
                
}
