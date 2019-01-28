import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import { ReferenceToken } from "../types";

/**
 * The GetAudioEncoderConfiguration command fetches the encoder configuration if the audio encoder configuration token is known.
 */
export function GetAudioEncoderConfiguration(ConfigurationToken: ReferenceToken) {
    createStandardRequestBodyFromString('<trt:GetAudioEncoderConfiguration />')
                  .map(mapResponseXmlToJson<any>('trt:GetAudioEncoderConfigurationResponse')())
                
}
