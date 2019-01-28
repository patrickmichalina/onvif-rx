import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import "../types";

/**
 * 
 *   This operation lists all existing storage configurations for the device. 
 *   
 */
export function GetStorageConfigurations() {
    createStandardRequestBodyFromString('<tds:GetStorageConfigurations />')
                  .map(mapResponseXmlToJson<any>('tds:GetStorageConfigurationsResponse')())
                
}
