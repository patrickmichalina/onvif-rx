import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import { ReferenceToken } from "../types";

/**
 * This operation removes a PTZConfiguration from an existing media profile. If the media profile
 *   does not contain a PTZConfiguration, the operation has no effect. The removal shall be persistent.
 */
export function RemovePTZConfiguration(ProfileToken: ReferenceToken) {
    createStandardRequestBodyFromString('<trt:RemovePTZConfiguration />')
                  .map(mapResponseXmlToJson<any>('trt:RemovePTZConfigurationResponse')())
                
}
