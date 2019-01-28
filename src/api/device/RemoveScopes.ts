import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import "../types";

/**
 * This operation deletes scope-configurable scope parameters from a device. The scope
 *   parameters are used in the device discovery to match a probe message, see Section 7. The
 *   device shall support deletion of discovery scope parameters through the RemoveScopes
 *   command.
 *   Table
 */
export function RemoveScopes(ScopeItem: string) {
    createStandardRequestBodyFromString('<tds:RemoveScopes />')
                  .map(mapResponseXmlToJson<any>('tds:RemoveScopesResponse')())
                
}
