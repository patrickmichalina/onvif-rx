import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import { IPAddress } from "../types";

/**
 * This operation sets the DNS settings on a device. It shall be possible to set the device DNS
 *   configurations through the SetDNS command.
 */
export function SetDNS(FromDHCP: boolean, SearchDomain: string, DNSManual: IPAddress) {
    createStandardRequestBodyFromString('<tds:SetDNS />')
                  .map(mapResponseXmlToJson<any>('tds:SetDNSResponse')())
                
}
