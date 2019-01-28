import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import "../types";

/**
 * This operation gets the device system date and time. The device shall support the return of
 *   the daylight saving setting and of the manual system date and time (if applicable) or indication
 *   of NTP time (if applicable) through the GetSystemDateAndTime command.
 *   A device shall provide the UTCDateTime information.
 */
export function GetSystemDateAndTime() {
    createStandardRequestBodyFromString('<tds:GetSystemDateAndTime />')
                  .map(mapResponseXmlToJson<any>('tds:GetSystemDateAndTimeResponse')())
                
}
