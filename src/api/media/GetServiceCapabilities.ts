import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import "../types";

/**
 * Returns the capabilities of the media service. The result is returned in a typed answer.
 */
export function GetServiceCapabilities() {
    createStandardRequestBodyFromString('<trt:GetServiceCapabilities />')
                  .map(mapResponseXmlToJson<any>('trt:GetServiceCapabilitiesResponse')())
                
}
