import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import { ReferenceToken } from "../types";

/**
 * This operation adds a PTZConfiguration to an existing media profile. If a configuration exists
 *   in the media profile, it will be replaced. The change shall be persistent. Adding a PTZConfiguration to a media profile means that streams using that media profile can
 *   contain PTZ status (in the metadata), and that the media profile can be used for controlling
 *   PTZ movement.
 */
export function AddPTZConfiguration(ProfileToken: ReferenceToken, ConfigurationToken: ReferenceToken) {
    createStandardRequestBodyFromString('<trt:AddPTZConfiguration />')
                  .map(mapResponseXmlToJson<any>('trt:AddPTZConfigurationResponse')())
                
}
