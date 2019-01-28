import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import { IPAddressFilter } from "../types";

/**
 * This operation adds an IP filter address to a device. If the device supports device access
 *   control based on IP filtering rules (denied or accepted ranges of IP addresses), the device
 *   shall support adding of IP filtering addresses through the AddIPAddressFilter command.
 */
export function AddIPAddressFilter(IPAddressFilter: IPAddressFilter) {
    createStandardRequestBodyFromString('<tds:AddIPAddressFilter />')
                  .map(mapResponseXmlToJson<any>('tds:AddIPAddressFilterResponse')())
                
}
