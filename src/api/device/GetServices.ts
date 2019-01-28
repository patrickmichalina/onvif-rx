import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import "../types";

/**
 * Returns information about services on the device.
 */
export function GetServices(IncludeCapability: boolean) {
    createStandardRequestBodyFromString('<tds:GetServices />')
                  .map(mapResponseXmlToJson<any>('tds:GetServicesResponse')())
                
}
