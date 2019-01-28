import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import { ReferenceToken } from "../types";

/**
 * This operation requests all audio encoder configurations of a device that are compatible with a certain media profile. Each of the returned configurations shall be a valid input parameter for the AddAudioSourceConfiguration command on the media profile. The result varies depending on the capabilities, configurations and settings in the device.
 */
export function GetCompatibleAudioEncoderConfigurations(ProfileToken: ReferenceToken) {
    createStandardRequestBodyFromString('<trt:GetCompatibleAudioEncoderConfigurations />')
                  .map(mapResponseXmlToJson<any>('trt:GetCompatibleAudioEncoderConfigurationsResponse')())
                
}
