import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import "../types";

/**
 * This operation sets the hostname on a device. It shall be possible to set the device hostname
 *   configurations through the SetHostname command.
 *   A device shall accept string formated according to RFC 1123 section 2.1 or alternatively to RFC 952, 
 *   other string shall be considered as invalid strings. 
 *   
 */
export function SetHostname(Name: string) {
    createStandardRequestBodyFromString('<tds:SetHostname />')
                  .map(mapResponseXmlToJson<any>('tds:SetHostnameResponse')())
                
}
