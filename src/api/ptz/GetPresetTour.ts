import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import { ReferenceToken } from "../types";

/**
 * Operation to request a specific PTZ preset tour in the selected media profile.
 */
export function GetPresetTour(ProfileToken: ReferenceToken, PresetTourToken: ReferenceToken) {
    createStandardRequestBodyFromString('<tptz:GetPresetTour />')
                  .map(mapResponseXmlToJson<any>('tptz:GetPresetTourResponse')())
                
}
