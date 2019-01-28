import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import { ReferenceToken } from "../types";

/**
 * Get a specific PTZ Node identified by a reference
 *           token or a name.
 *     
 */
export function GetNode(NodeToken: ReferenceToken) {
    createStandardRequestBodyFromString('<tptz:GetNode />')
                  .map(mapResponseXmlToJson<any>('tptz:GetNodeResponse')())
                
}
