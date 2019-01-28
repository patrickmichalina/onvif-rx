import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import { ReferenceToken, PresetTour } from "../types";

/**
 * Operation to modify a preset tour for the selected media profile.
 */
export function ModifyPresetTour(ProfileToken: ReferenceToken, PresetTour: PresetTour) {
    createStandardRequestBodyFromString('<tptz:ModifyPresetTour />')
                  .map(mapResponseXmlToJson<any>('tptz:ModifyPresetTourResponse')())
                
}
