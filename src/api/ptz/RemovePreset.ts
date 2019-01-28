import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import { ReferenceToken } from "../types";

/**
 * 
 *           Operation to remove a PTZ preset for the Node in
 *           the
 *           selected profile. The operation is supported if the
 *           PresetPosition
 *           capability exists for teh Node in the
 *           selected profile.
 *         
 */
export function RemovePreset(ProfileToken: ReferenceToken, PresetToken: ReferenceToken) {
    createStandardRequestBodyFromString('<tptz:RemovePreset />')
                  .map(mapResponseXmlToJson<any>('tptz:RemovePresetResponse')())
                
}
