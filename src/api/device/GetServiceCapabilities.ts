import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import "../types";

/**
 * Returns the capabilities of the device service. The result is returned in a typed answer.
 */
export function GetServiceCapabilities() {
    createStandardRequestBodyFromString('<tds:GetServiceCapabilities />')
                  .map(mapResponseXmlToJson<any>('tds:GetServiceCapabilitiesResponse')())
                
}
