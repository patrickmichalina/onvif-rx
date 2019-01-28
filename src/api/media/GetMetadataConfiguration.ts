import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import { ReferenceToken } from "../types";

/**
 * The GetMetadataConfiguration command fetches the metadata configuration if the metadata token is known.
 */
export function GetMetadataConfiguration(ConfigurationToken: ReferenceToken) {
    createStandardRequestBodyFromString('<trt:GetMetadataConfiguration />')
                  .map(mapResponseXmlToJson<any>('trt:GetMetadataConfigurationResponse')())
                
}
