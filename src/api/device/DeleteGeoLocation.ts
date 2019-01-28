import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import { LocationEntity } from "../types";

/**
 * 
 *   This operation deletes the given geo location entries.
 *   
 */
export function DeleteGeoLocation(Location: LocationEntity) {
    createStandardRequestBodyFromString('<tds:DeleteGeoLocation />')
                  .map(mapResponseXmlToJson<any>('tds:DeleteGeoLocationResponse')())
                
}
