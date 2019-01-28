import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import { ReferenceToken } from "../types";

/**
 * This command stop multicast streaming using a specified media profile of a device
 */
export function StopMulticastStreaming(ProfileToken: ReferenceToken) {
    createStandardRequestBodyFromString('<trt:StopMulticastStreaming />')
                  .map(mapResponseXmlToJson<any>('trt:StopMulticastStreamingResponse')())
                
}
