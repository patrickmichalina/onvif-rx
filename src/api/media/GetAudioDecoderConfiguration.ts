import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import { ReferenceToken } from "../types";

/**
 * If the audio decoder configuration token is already known, the decoder configuration can be fetched through the GetAudioDecoderConfiguration command.
 */
export function GetAudioDecoderConfiguration(ConfigurationToken: ReferenceToken) {
    createStandardRequestBodyFromString('<trt:GetAudioDecoderConfiguration />')
                  .map(mapResponseXmlToJson<any>('trt:GetAudioDecoderConfigurationResponse')())
                
}
