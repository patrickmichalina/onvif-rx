import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import { IPv4Address, IPv6Address } from "../types";

/**
 * This operation sets the default gateway settings on a device. The device shall support
 *   configuration of default gateway through the SetNetworkDefaultGateway command.
 */
export function SetNetworkDefaultGateway(IPv4Address: IPv4Address, IPv6Address: IPv6Address) {
    createStandardRequestBodyFromString('<tds:SetNetworkDefaultGateway />')
                  .map(mapResponseXmlToJson<any>('tds:SetNetworkDefaultGatewayResponse')())
                
}
