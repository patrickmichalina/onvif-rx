import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import { ReferenceToken } from "../types";

/**
 * 
 *   This operation retrieves the Storage configuration associated with the given storage configuration token.
 *   
 */
export function GetStorageConfiguration(Token: ReferenceToken) {
    createStandardRequestBodyFromString('<tds:GetStorageConfiguration />')
                  .map(mapResponseXmlToJson<any>('tds:GetStorageConfigurationResponse')())
                
}
