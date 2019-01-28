import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import "../types";

/**
 * This operation adds new configurable scope parameters to a device. The scope parameters
 *   are used in the device discovery to match a probe message. The device shall
 *   support addition of discovery scope parameters through the AddScopes command.
 */
export function AddScopes(ScopeItem: string) {
    createStandardRequestBodyFromString('<tds:AddScopes />')
                  .map(mapResponseXmlToJson<any>('tds:AddScopesResponse')())
                
}
