import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import { VideoSourceConfiguration } from "../types";

/**
 * This operation modifies a video source configuration. The ForcePersistence flag indicates if the changes shall remain after reboot of the device. Running streams using this configuration may be immediately updated according to the new settings. The changes are not guaranteed to take effect unless the client requests a new stream URI and restarts any affected stream. NVC methods for changing a running stream are out of scope for this specification.
 */
export function SetVideoSourceConfiguration(Configuration: VideoSourceConfiguration, ForcePersistence: boolean) {
    createStandardRequestBodyFromString('<trt:SetVideoSourceConfiguration />')
                  .map(mapResponseXmlToJson<any>('trt:SetVideoSourceConfigurationResponse')())
                
}
