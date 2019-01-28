import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import "../types";

/**
 * This command lists all available physical audio outputs of the device.
 */
export function GetAudioOutputs() {
    createStandardRequestBodyFromString('<trt:GetAudioOutputs />')
                  .map(mapResponseXmlToJson<any>('trt:GetAudioOutputsResponse')())
                
}
