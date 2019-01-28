import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import "../types";

/**
 * This operation gets the remote discovery mode of a device. See Section 7.4 for the definition
 *   of remote discovery extensions. A device that supports remote discovery shall support
 *   retrieval of the remote discovery mode setting through the GetRemoteDiscoveryMode
 *   command.
 */
export function GetRemoteDiscoveryMode() {
    createStandardRequestBodyFromString('<tds:GetRemoteDiscoveryMode />')
                  .map(mapResponseXmlToJson<any>('tds:GetRemoteDiscoveryModeResponse')())
                
}
