import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import { ReferenceToken } from "../types";

/**
 * Operation to request PTZ preset tours in the selected media profiles.
 */
export function GetPresetTours(ProfileToken: ReferenceToken) {
    createStandardRequestBodyFromString('<tptz:GetPresetTours />')
                  .map(mapResponseXmlToJson<any>('tptz:GetPresetToursResponse')())
                
}
