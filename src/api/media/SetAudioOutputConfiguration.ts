import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import { AudioOutputConfiguration } from "../types";

/**
 * This operation modifies an audio output configuration. The ForcePersistence flag indicates if
 *   the changes shall remain after reboot of the device.
 */
export function SetAudioOutputConfiguration(Configuration: AudioOutputConfiguration, ForcePersistence: boolean) {
    createStandardRequestBodyFromString('<trt:SetAudioOutputConfiguration />')
                  .map(mapResponseXmlToJson<any>('trt:SetAudioOutputConfigurationResponse')())
                
}
