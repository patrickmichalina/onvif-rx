import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import { NetworkProtocol } from "../types";

/**
 * This operation configures defined network protocols on a device. The device shall support
 *   configuration of defined network protocols through the SetNetworkProtocols command.
 */
export function SetNetworkProtocols(NetworkProtocols: NetworkProtocol) {
    createStandardRequestBodyFromString('<tds:SetNetworkProtocols />')
                  .map(mapResponseXmlToJson<any>('tds:SetNetworkProtocolsResponse')())
                
}
