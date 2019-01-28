import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import { ReferenceToken } from "../types";

/**
 * This operation adds a Metadata configuration to an existing media profile. If a configuration exists in the media profile, it will be replaced. The change shall be persistent. Adding a MetadataConfiguration to a Profile means that streams using that profile contain metadata. Metadata can consist of events, PTZ status, and/or video analytics data.
 */
export function AddMetadataConfiguration(ProfileToken: ReferenceToken, ConfigurationToken: ReferenceToken) {
    createStandardRequestBodyFromString('<trt:AddMetadataConfiguration />')
                  .map(mapResponseXmlToJson<any>('trt:AddMetadataConfigurationResponse')())
                
}
