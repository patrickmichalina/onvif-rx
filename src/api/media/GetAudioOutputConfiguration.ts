import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import { ReferenceToken } from "../types";

/**
 * If the audio output configuration token is already known, the output configuration can be fetched through the GetAudioOutputConfiguration command.
 */
export function GetAudioOutputConfiguration(ConfigurationToken: ReferenceToken) {
    createStandardRequestBodyFromString('<trt:GetAudioOutputConfiguration />')
                  .map(mapResponseXmlToJson<any>('trt:GetAudioOutputConfigurationResponse')())
                
}
