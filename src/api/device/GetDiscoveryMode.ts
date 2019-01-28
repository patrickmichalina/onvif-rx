import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import "../types";

/**
 * This operation gets the discovery mode of a device. See Section 7.2 for the definition of the
 *   different device discovery modes. The device shall support retrieval of the discovery mode
 *   setting through the GetDiscoveryMode command.
 */
export function GetDiscoveryMode() {
    createStandardRequestBodyFromString('<tds:GetDiscoveryMode />')
                  .map(mapResponseXmlToJson<any>('tds:GetDiscoveryModeResponse')())
                
}
