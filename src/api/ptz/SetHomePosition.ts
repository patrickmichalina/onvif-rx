import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import { ReferenceToken } from "../types";

/**
 * Operation to save current position as the home position.
 *   The SetHomePosition command returns with a failure if the “home” position is fixed and
 *   cannot be overwritten. If the SetHomePosition is successful, it is possible to recall the
 *   Home Position with the GotoHomePosition command.
 */
export function SetHomePosition(ProfileToken: ReferenceToken) {
    createStandardRequestBodyFromString('<tptz:SetHomePosition />')
                  .map(mapResponseXmlToJson<any>('tptz:SetHomePositionResponse')())
                
}
