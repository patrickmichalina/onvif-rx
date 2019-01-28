import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import { ReferenceToken, PTZPresetTourOperation } from "../types";

/**
 * Operation to perform specific operation on the preset tour in selected media profile.
 */
export function OperatePresetTour(ProfileToken: ReferenceToken, PresetTourToken: ReferenceToken, Operation: PTZPresetTourOperation) {
    createStandardRequestBodyFromString('<tptz:OperatePresetTour />')
                  .map(mapResponseXmlToJson<any>('tptz:OperatePresetTourResponse')())
                
}
