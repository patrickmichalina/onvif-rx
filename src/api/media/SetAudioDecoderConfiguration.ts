import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import { AudioDecoderConfiguration } from "../types";

/**
 * This operation modifies an audio decoder configuration. The ForcePersistence flag indicates if
 *   the changes shall remain after reboot of the device.
 */
export function SetAudioDecoderConfiguration(Configuration: AudioDecoderConfiguration, ForcePersistence: boolean) {
    createStandardRequestBodyFromString('<trt:SetAudioDecoderConfiguration />')
                  .map(mapResponseXmlToJson<any>('trt:SetAudioDecoderConfigurationResponse')())
                
}
