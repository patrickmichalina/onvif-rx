import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import { IPAddressFilter } from "../types";

/**
 * This operation sets the IP address filter settings on a device. If the device supports device
 *   access control based on IP filtering rules (denied or accepted ranges of IP addresses), the
 *   device shall support configuration of IP filtering rules through the SetIPAddressFilter
 *   command.
 */
export function SetIPAddressFilter(IPAddressFilter: IPAddressFilter) {
    createStandardRequestBodyFromString('<tds:SetIPAddressFilter />')
                  .map(mapResponseXmlToJson<any>('tds:SetIPAddressFilterResponse')())
                
}
