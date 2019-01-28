import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import "../types";

/**
 * This operation gets the default gateway settings from a device. The device shall support the
 *   GetNetworkDefaultGateway command returning configured default gateway address(es).
 */
export function GetNetworkDefaultGateway() {
    createStandardRequestBodyFromString('<tds:GetNetworkDefaultGateway />')
                  .map(mapResponseXmlToJson<any>('tds:GetNetworkDefaultGatewayResponse')())
                
}
