import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import "../types";

/**
 * This command lists all available physical audio inputs of the device.
 */
export function GetAudioSources() {
    createStandardRequestBodyFromString('<trt:GetAudioSources />')
                  .map(mapResponseXmlToJson<any>('trt:GetAudioSourcesResponse')())
                
}
