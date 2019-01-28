import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import "../types";

/**
 * This operation gets the IP address filter settings from a device. If the device supports device
 *   access control based on IP filtering rules (denied or accepted ranges of IP addresses), the
 *   device shall support the GetIPAddressFilter command.
 */
export function GetIPAddressFilter() {
    createStandardRequestBodyFromString('<tds:GetIPAddressFilter />')
                  .map(mapResponseXmlToJson<any>('tds:GetIPAddressFilterResponse')())
                
}
