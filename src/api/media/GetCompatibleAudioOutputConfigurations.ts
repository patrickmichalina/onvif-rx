import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import { ReferenceToken } from "../types";

/**
 * This command lists all audio output configurations of a device that are compatible with a certain media profile. Each returned configuration shall be a valid input for the 
 *   AddAudioOutputConfiguration command.
 */
export function GetCompatibleAudioOutputConfigurations(ProfileToken: ReferenceToken) {
    createStandardRequestBodyFromString('<trt:GetCompatibleAudioOutputConfigurations />')
                  .map(mapResponseXmlToJson<any>('trt:GetCompatibleAudioOutputConfigurationsResponse')())
                
}
