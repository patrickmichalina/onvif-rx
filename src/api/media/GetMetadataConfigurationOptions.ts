import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import { ReferenceToken } from "../types";

/**
 * This operation returns the available options (supported values and ranges for metadata configuration parameters) for changing the metadata configuration.
 */
export function GetMetadataConfigurationOptions(ConfigurationToken: ReferenceToken, ProfileToken: ReferenceToken) {
    createStandardRequestBodyFromString('<trt:GetMetadataConfigurationOptions />')
                  .map(mapResponseXmlToJson<any>('trt:GetMetadataConfigurationOptionsResponse')())
                
}
