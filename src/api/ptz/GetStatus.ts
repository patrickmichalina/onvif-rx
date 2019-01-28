import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import { ReferenceToken } from "../types";

/**
 * 
 *   Operation to request PTZ status for the Node in the
 *   selected profile.
 */
export function GetStatus(ProfileToken: ReferenceToken) {
    createStandardRequestBodyFromString('<tptz:GetStatus />')
                  .map(mapResponseXmlToJson<any>('tptz:GetStatusResponse')())
                
}
