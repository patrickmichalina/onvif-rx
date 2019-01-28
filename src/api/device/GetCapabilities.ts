import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import { CapabilityCategory } from "../types";

/**
 * This method has been replaced by the more generic GetServices method.
 *    For capabilities of individual services refer to the GetServiceCapabilities methods.
 */
export function GetCapabilities(Category: CapabilityCategory) {
    createStandardRequestBodyFromString('<tds:GetCapabilities />')
                  .map(mapResponseXmlToJson<any>('tds:GetCapabilitiesResponse')())
                
}
