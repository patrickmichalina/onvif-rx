import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import { NetworkHost } from "../types";

/**
 * This operation sets the NTP settings on a device. If the device supports NTP, it shall be
 *   possible to set the NTP server settings through the SetNTP command.
 *   A device shall accept string formated according to RFC 1123 section 2.1 or alternatively to RFC 952, 
 *   other string shall be considered as invalid strings. 
 *   Changes to the NTP server list will not affect the clock mode DateTimeType. Use SetSystemDateAndTime to activate NTP operation.
 *   
 */
export function SetNTP(FromDHCP: boolean, NTPManual: NetworkHost) {
    createStandardRequestBodyFromString('<tds:SetNTP />')
                  .map(mapResponseXmlToJson<any>('tds:SetNTPResponse')())
                
}
