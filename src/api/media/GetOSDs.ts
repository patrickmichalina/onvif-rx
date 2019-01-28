import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import { ReferenceToken } from "../types";

/**
 * Get the OSDs.
 */
export function GetOSDs(ConfigurationToken: ReferenceToken) {
    createStandardRequestBodyFromString('<trt:GetOSDs />')
                  .map(mapResponseXmlToJson<any>('trt:GetOSDsResponse')())
                
}
