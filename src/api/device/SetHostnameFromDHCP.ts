import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import "../types";

/**
 * This operation controls whether the hostname is set manually or retrieved via DHCP.
 */
export function SetHostnameFromDHCP(FromDHCP: boolean) {
    createStandardRequestBodyFromString('<tds:SetHostnameFromDHCP />')
                  .map(mapResponseXmlToJson<any>('tds:SetHostnameFromDHCPResponse')())
                
}
