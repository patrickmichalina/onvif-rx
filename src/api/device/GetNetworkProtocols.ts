import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import "../types";

/**
 * This operation gets defined network protocols from a device. The device shall support the
 *   GetNetworkProtocols command returning configured network protocols.
 */
export function GetNetworkProtocols() {
    createStandardRequestBodyFromString('<tds:GetNetworkProtocols />')
                  .map(mapResponseXmlToJson<any>('tds:GetNetworkProtocolsResponse')())
                
}
