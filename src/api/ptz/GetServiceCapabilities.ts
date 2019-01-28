import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import "../types";

/**
 * Returns the capabilities of the PTZ service. The result is returned in a typed answer.
 */
export function GetServiceCapabilities() {
    createStandardRequestBodyFromString('<tptz:GetServiceCapabilities />')
                  .map(mapResponseXmlToJson<any>('tptz:GetServiceCapabilitiesResponse')())
                
}
