import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import { ReferenceToken } from "../types";

/**
 * This operation removes a VideoSourceConfiguration from an existing media profile. If the
 *   media profile does not contain a VideoSourceConfiguration, the operation has no effect. The removal shall be persistent. Video source configurations should only be removed after removing a
 *   VideoEncoderConfiguration from the media profile.
 */
export function RemoveVideoSourceConfiguration(ProfileToken: ReferenceToken) {
    createStandardRequestBodyFromString('<trt:RemoveVideoSourceConfiguration />')
                  .map(mapResponseXmlToJson<any>('trt:RemoveVideoSourceConfigurationResponse')())
                
}
