import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import { ReferenceToken } from "../types";

/**
 * Operation to request available options to configure PTZ preset tour.
 */
export function GetPresetTourOptions(ProfileToken: ReferenceToken, PresetTourToken: ReferenceToken) {
    createStandardRequestBodyFromString('<tptz:GetPresetTourOptions />')
                  .map(mapResponseXmlToJson<any>('tptz:GetPresetTourOptionsResponse')())
                
}
