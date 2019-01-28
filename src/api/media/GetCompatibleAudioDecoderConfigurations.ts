import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import { ReferenceToken } from "../types";

/**
 * This operation lists all the audio decoder configurations of the device that are compatible with a certain media profile. Each of the returned configurations shall be a valid input parameter for the AddAudioDecoderConfiguration command on the media profile.
 */
export function GetCompatibleAudioDecoderConfigurations(ProfileToken: ReferenceToken) {
    createStandardRequestBodyFromString('<trt:GetCompatibleAudioDecoderConfigurations />')
                  .map(mapResponseXmlToJson<any>('trt:GetCompatibleAudioDecoderConfigurationsResponse')())
                
}
