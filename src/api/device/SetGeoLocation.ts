import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import { LocationEntity } from "../types";

/**
 * 
 *   This operation allows to modify one or more geo configuration entries.
 *   
 */
export function SetGeoLocation(Location: LocationEntity) {
    createStandardRequestBodyFromString('<tds:SetGeoLocation />')
                  .map(mapResponseXmlToJson<any>('tds:SetGeoLocationResponse')())
                
}
