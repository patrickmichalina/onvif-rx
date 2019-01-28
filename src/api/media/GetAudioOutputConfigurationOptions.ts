import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import { ReferenceToken } from "../types";

/**
 * This operation returns the available options (supported values and ranges for audio output configuration parameters) for configuring an audio output.
 */
export function GetAudioOutputConfigurationOptions(ConfigurationToken: ReferenceToken, ProfileToken: ReferenceToken) {
    createStandardRequestBodyFromString('<trt:GetAudioOutputConfigurationOptions />')
                  .map(mapResponseXmlToJson<any>('trt:GetAudioOutputConfigurationOptionsResponse')())
                
}
