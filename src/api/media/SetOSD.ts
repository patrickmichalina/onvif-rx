import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import { OSDConfiguration } from "../types";

/**
 * Set the OSD
 */
export function SetOSD(OSD: OSDConfiguration) {
    createStandardRequestBodyFromString('<trt:SetOSD />')
                  .map(mapResponseXmlToJson<any>('trt:SetOSDResponse')())
                
}
