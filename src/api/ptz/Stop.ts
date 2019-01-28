import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import { ReferenceToken } from "../types";

/**
 * Operation to stop ongoing pan, tilt and zoom movements of absolute relative and continuous type.
 *   If no stop argument for pan, tilt or zoom is set, the device will stop all ongoing pan, tilt and zoom movements.
 */
export function Stop(ProfileToken: ReferenceToken, PanTilt: boolean, Zoom: boolean) {
    createStandardRequestBodyFromString('<tptz:Stop />')
                  .map(mapResponseXmlToJson<any>('tptz:StopResponse')())
                
}
