import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import { ReferenceToken } from "../types";

/**
 * This operation lists all the video encoder configurations of the device that are compatible with a certain media profile. Each of the returned configurations shall be a valid input parameter for the AddVideoEncoderConfiguration command on the media profile. The result will vary depending on the capabilities, configurations and settings in the device.
 */
export function GetCompatibleVideoEncoderConfigurations(ProfileToken: ReferenceToken) {
    createStandardRequestBodyFromString('<trt:GetCompatibleVideoEncoderConfigurations />')
                  .map(mapResponseXmlToJson<any>('trt:GetCompatibleVideoEncoderConfigurationsResponse')())
                
}
