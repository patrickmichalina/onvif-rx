import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import { ReferenceToken } from "../types";

/**
 * Operation to delete a specific preset tour from the media profile.
 */
export function RemovePresetTour(ProfileToken: ReferenceToken, PresetTourToken: ReferenceToken) {
    createStandardRequestBodyFromString('<tptz:RemovePresetTour />')
                  .map(mapResponseXmlToJson<any>('tptz:RemovePresetTourResponse')())
                
}
