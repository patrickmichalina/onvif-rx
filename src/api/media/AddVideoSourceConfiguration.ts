import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import { ReferenceToken } from "../types";

/**
 * This operation adds a VideoSourceConfiguration to an existing media profile. If such a
 *   configuration exists in the media profile, it will be replaced. The change shall be persistent.
 */
export function AddVideoSourceConfiguration(ProfileToken: ReferenceToken, ConfigurationToken: ReferenceToken) {
    createStandardRequestBodyFromString('<trt:AddVideoSourceConfiguration />')
                  .map(mapResponseXmlToJson<any>('trt:AddVideoSourceConfigurationResponse')())
                
}
