import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import { ReferenceToken } from "../types";

/**
 * This operation adds an AudioSourceConfiguration to an existing media profile. If a
 *   configuration exists in the media profile, it will be replaced. The change shall be persistent.
 */
export function AddAudioSourceConfiguration(ProfileToken: ReferenceToken, ConfigurationToken: ReferenceToken) {
    createStandardRequestBodyFromString('<trt:AddAudioSourceConfiguration />')
                  .map(mapResponseXmlToJson<any>('trt:AddAudioSourceConfigurationResponse')())
                
}
