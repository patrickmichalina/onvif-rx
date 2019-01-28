import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import { ReferenceToken, RelayLogicalState } from "../types";

/**
 * This operation sets the state of a relay output.
 *   This method has been depricated with version 2.0. Refer to the DeviceIO service.
 */
export function SetRelayOutputState(RelayOutputToken: ReferenceToken, LogicalState: RelayLogicalState) {
    createStandardRequestBodyFromString('<tds:SetRelayOutputState />')
                  .map(mapResponseXmlToJson<any>('tds:SetRelayOutputStateResponse')())
                
}
