import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import { ReferenceToken } from "../types";

/**
 * If the video encoder configuration token is already known, the encoder configuration can be fetched through the GetVideoEncoderConfiguration command.
 */
export function GetVideoEncoderConfiguration(ConfigurationToken: ReferenceToken) {
    createStandardRequestBodyFromString('<trt:GetVideoEncoderConfiguration />')
                  .map(mapResponseXmlToJson<any>('trt:GetVideoEncoderConfigurationResponse')())
                
}
