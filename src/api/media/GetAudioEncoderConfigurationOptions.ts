import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import { ReferenceToken } from "../types";

/**
 * This operation returns the available options  (supported values and ranges for audio encoder configuration parameters) when the audio encoder parameters are
 *   reconfigured.
 */
export function GetAudioEncoderConfigurationOptions(ConfigurationToken: ReferenceToken, ProfileToken: ReferenceToken) {
    createStandardRequestBodyFromString('<trt:GetAudioEncoderConfigurationOptions />')
                  .map(mapResponseXmlToJson<any>('trt:GetAudioEncoderConfigurationOptionsResponse')())
                
}
