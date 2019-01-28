import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import { ReferenceToken } from "../types";

/**
 * Get the OSD.
 */
export function GetOSD(OSDToken: ReferenceToken) {
    createStandardRequestBodyFromString('<trt:GetOSD />')
                  .map(mapResponseXmlToJson<any>('trt:GetOSDResponse')())
                
}
