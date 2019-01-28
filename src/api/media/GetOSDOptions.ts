import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import { ReferenceToken } from "../types";

/**
 * Get the OSD Options.
 */
export function GetOSDOptions(ConfigurationToken: ReferenceToken) {
    createStandardRequestBodyFromString('<trt:GetOSDOptions />')
                  .map(mapResponseXmlToJson<any>('trt:GetOSDOptionsResponse')())
                
}
