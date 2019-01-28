import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import { DiscoveryMode } from "../types";

/**
 * This operation sets the discovery mode operation of a device. See Section 7.2 for the
 *   definition of the different device discovery modes. The device shall support configuration of
 *   the discovery mode setting through the SetDiscoveryMode command.
 */
export function SetDiscoveryMode(DiscoveryMode: DiscoveryMode) {
    createStandardRequestBodyFromString('<tds:SetDiscoveryMode />')
                  .map(mapResponseXmlToJson<any>('tds:SetDiscoveryModeResponse')())
                
}
