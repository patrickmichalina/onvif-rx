import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import { ReferenceToken } from "../types";

/**
 * Operation to create a preset tour for the selected media profile.
 */
export function CreatePresetTour(ProfileToken: ReferenceToken) {
    createStandardRequestBodyFromString('<tptz:CreatePresetTour />')
                  .map(mapResponseXmlToJson<any>('tptz:CreatePresetTourResponse')())
                
}
