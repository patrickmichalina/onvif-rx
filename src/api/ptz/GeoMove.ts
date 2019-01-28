import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import { ReferenceToken, GeoLocation, PTZSpeed } from "../types";

/**
 * Operation to move pan,tilt or zoom to point to a destination based on the geolocation of the target. 
 *   The speed argument is optional. If an x/y speed value is given it is up to the device to either use 
 *   the x value as absolute resoluting speed vector or to map x and y to the component speed. 
 *   If the speed argument is omitted, the default speed set by the PTZConfiguration will be used.
 *   The area height and area dwidth parameters are optional, they can be used independently and may be used
 *   by the device to automatically determine the best zoom level to show the target.
 *   
 */
export function GeoMove(ProfileToken: ReferenceToken, Target: GeoLocation, Speed: PTZSpeed, AreaHeight: number, AreaWidth: number) {
    createStandardRequestBodyFromString('<tptz:GeoMove />')
                  .map(mapResponseXmlToJson<any>('tptz:GeoMoveResponse')())
                
}
