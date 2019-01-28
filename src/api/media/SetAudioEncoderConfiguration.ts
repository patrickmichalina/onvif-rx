import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import { AudioEncoderConfiguration } from "../types";

/**
 * This operation modifies an audio encoder configuration. The ForcePersistence flag indicates if
 *   the changes shall remain after reboot of the device. Running streams using this configuration may be immediately updated
 *   according to the new settings. The changes are not guaranteed to take effect unless the client
 *   requests a new stream URI and restarts any affected streams. NVC methods for changing a
 *   running stream are out of scope for this specification.
 */
export function SetAudioEncoderConfiguration(Configuration: AudioEncoderConfiguration, ForcePersistence: boolean) {
    createStandardRequestBodyFromString('<trt:SetAudioEncoderConfiguration />')
                  .map(mapResponseXmlToJson<any>('trt:SetAudioEncoderConfigurationResponse')())
                
}
