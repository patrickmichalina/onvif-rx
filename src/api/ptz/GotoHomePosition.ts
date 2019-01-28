import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import { ReferenceToken, PTZSpeed } from "../types";

/**
 * 
 *           Operation to move the PTZ device to it's "home" position. The operation is supported if the HomeSupported element in the PTZNode is true.
 */
export function GotoHomePosition(ProfileToken: ReferenceToken, Speed: PTZSpeed) {
    createStandardRequestBodyFromString('<tptz:GotoHomePosition />')
                  .map(mapResponseXmlToJson<any>('tptz:GotoHomePositionResponse')())
                
}
