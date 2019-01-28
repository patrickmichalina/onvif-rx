import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import "../types";

/**
 * This operation gets the dynamic DNS settings from a device. If the device supports dynamic
 *   DNS as specified in [RFC 2136] and [RFC 4702], it shall be possible to get the type, name
 *   and TTL through the GetDynamicDNS command.
 */
export function GetDynamicDNS() {
    createStandardRequestBodyFromString('<tds:GetDynamicDNS />')
                  .map(mapResponseXmlToJson<any>('tds:GetDynamicDNSResponse')())
                
}
