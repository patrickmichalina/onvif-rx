import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import { ReferenceToken, RelayOutputSettings } from "../types";

/**
 * This operation sets the settings of a relay output.
 *   This method has been depricated with version 2.0. Refer to the DeviceIO service.
 */
export function SetRelayOutputSettings(RelayOutputToken: ReferenceToken, Properties: RelayOutputSettings) {
    createStandardRequestBodyFromString('<tds:SetRelayOutputSettings />')
                  .map(mapResponseXmlToJson<any>('tds:SetRelayOutputSettingsResponse')())
                
}
