import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import { ReferenceToken, PTZSpeed } from "../types";

/**
 * 
 *           Operation to go to a saved preset position for the
 *           PTZNode in the selected profile. The operation is supported if there is
 *           support for at least on PTZ preset by the PTZNode.
 */
export function GotoPreset(ProfileToken: ReferenceToken, PresetToken: ReferenceToken, Speed: PTZSpeed) {
    createStandardRequestBodyFromString('<tptz:GotoPreset />')
                  .map(mapResponseXmlToJson<any>('tptz:GotoPresetResponse')())
                
}
