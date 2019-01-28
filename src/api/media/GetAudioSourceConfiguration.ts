import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import { ReferenceToken } from "../types";

/**
 * The GetAudioSourceConfiguration command fetches the audio source configurations if the audio source configuration token is already known. An
 */
export function GetAudioSourceConfiguration(ConfigurationToken: ReferenceToken) {
    createStandardRequestBodyFromString('<trt:GetAudioSourceConfiguration />')
                  .map(mapResponseXmlToJson<any>('trt:GetAudioSourceConfigurationResponse')())
                
}
