import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import { ReferenceToken } from "../types";

/**
 * 
 *   This operation deletes the given storage configuration and configuration change shall always be persistent.
 *   
 */
export function DeleteStorageConfiguration(Token: ReferenceToken) {
    createStandardRequestBodyFromString('<tds:DeleteStorageConfiguration />')
                  .map(mapResponseXmlToJson<any>('tds:DeleteStorageConfigurationResponse')())
                
}
