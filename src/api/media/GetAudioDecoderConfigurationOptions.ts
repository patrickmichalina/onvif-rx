import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import { ReferenceToken } from "../types";

/**
 * This command list the audio decoding capabilities for a given profile and configuration of a
 *   device.
 */
export function GetAudioDecoderConfigurationOptions(ConfigurationToken: ReferenceToken, ProfileToken: ReferenceToken) {
    createStandardRequestBodyFromString('<trt:GetAudioDecoderConfigurationOptions />')
                  .map(mapResponseXmlToJson<any>('trt:GetAudioDecoderConfigurationOptionsResponse')())
                
}
