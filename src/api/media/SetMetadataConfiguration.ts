import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import { MetadataConfiguration } from "../types";

/**
 * This operation modifies a metadata configuration. The ForcePersistence flag indicates if the
 *   changes shall remain after reboot of the device. Changes in the Multicast settings shall
 *   always be persistent. Running streams using this configuration may be updated immediately
 *   according to the new settings. The changes are not guaranteed to take effect unless the client
 *   requests a new stream URI and restarts any affected streams. NVC methods for changing a
 *   running stream are out of scope for this specification.
 */
export function SetMetadataConfiguration(Configuration: MetadataConfiguration, ForcePersistence: boolean) {
    createStandardRequestBodyFromString('<trt:SetMetadataConfiguration />')
                  .map(mapResponseXmlToJson<any>('trt:SetMetadataConfigurationResponse')())
                
}
