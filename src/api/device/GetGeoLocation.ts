import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import "../types";

/**
 * 
 *   This operation lists all existing geo location configurations for the device. 
 *   
 */
export function GetGeoLocation() {
    createStandardRequestBodyFromString('<tds:GetGeoLocation />')
                  .map(mapResponseXmlToJson<any>('tds:GetGeoLocationResponse')())
                
}
