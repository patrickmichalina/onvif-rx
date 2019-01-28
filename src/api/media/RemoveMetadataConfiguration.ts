import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import { ReferenceToken } from "../types";

/**
 * This operation removes a MetadataConfiguration from an existing media profile. If the media profile does not contain a MetadataConfiguration, the operation has no effect. The removal shall be persistent.
 */
export function RemoveMetadataConfiguration(ProfileToken: ReferenceToken) {
    createStandardRequestBodyFromString('<trt:RemoveMetadataConfiguration />')
                  .map(mapResponseXmlToJson<any>('trt:RemoveMetadataConfigurationResponse')())
                
}
