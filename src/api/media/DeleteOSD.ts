import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import { ReferenceToken } from "../types";

/**
 * Delete the OSD.
 */
export function DeleteOSD(OSDToken: ReferenceToken) {
    createStandardRequestBodyFromString('<trt:DeleteOSD />')
                  .map(mapResponseXmlToJson<any>('trt:DeleteOSDResponse')())
                
}
