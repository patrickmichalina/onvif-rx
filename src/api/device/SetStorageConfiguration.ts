import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import "../types";

/**
 * 
 *   This operation modifies an existing Storage configuration.
 *   
 */
export function SetStorageConfiguration(StorageConfiguration: any) {
    createStandardRequestBodyFromString('<tds:SetStorageConfiguration />')
                  .map(mapResponseXmlToJson<any>('tds:SetStorageConfigurationResponse')())
                
}
