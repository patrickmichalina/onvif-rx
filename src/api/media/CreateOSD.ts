import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import { OSDConfiguration } from "../types";

/**
 * Create the OSD.
 */
export function CreateOSD(OSD: OSDConfiguration) {
    createStandardRequestBodyFromString('<trt:CreateOSD />')
                  .map(mapResponseXmlToJson<any>('trt:CreateOSDResponse')())
                
}
