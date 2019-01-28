import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import { ReferenceToken } from "../types";

/**
 * This operation adds an AudioOutputConfiguration to an existing media profile. If a configuration exists in the media profile, it will be replaced. The change shall be persistent.
 */
export function AddAudioOutputConfiguration(ProfileToken: ReferenceToken, ConfigurationToken: ReferenceToken) {
    createStandardRequestBodyFromString('<trt:AddAudioOutputConfiguration />')
                  .map(mapResponseXmlToJson<any>('trt:AddAudioOutputConfigurationResponse')())
                
}
