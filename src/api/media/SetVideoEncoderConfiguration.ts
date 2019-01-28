import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import { VideoEncoderConfiguration } from "../types";

/**
 * This operation modifies a video encoder configuration. The ForcePersistence flag indicates if the changes shall remain after reboot of the device. Changes in the Multicast settings shall always be persistent. Running streams using this configuration may be immediately updated according to the new settings. The changes are not guaranteed to take effect unless the client requests a new stream URI and restarts any affected stream. NVC methods for changing a running stream are out of scope for this specification. SessionTimeout is provided as a hint for keeping rtsp session by a device. If necessary the device may adapt parameter values for SessionTimeout elements without returning an error. For the time between keep alive calls the client shall adhere to the timeout value signaled via RTSP.
 */
export function SetVideoEncoderConfiguration(Configuration: VideoEncoderConfiguration, ForcePersistence: boolean) {
    createStandardRequestBodyFromString('<trt:SetVideoEncoderConfiguration />')
                  .map(mapResponseXmlToJson<any>('trt:SetVideoEncoderConfigurationResponse')())
                
}
