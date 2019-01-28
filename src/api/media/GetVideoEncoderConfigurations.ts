import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import "../types";

/**
 * This operation lists all existing video encoder configurations of a device. This command lists all configured video encoder configurations in a device. The client need not know anything apriori about the video encoder configurations in order to use the command.
 */
export function GetVideoEncoderConfigurations() {
    createStandardRequestBodyFromString('<trt:GetVideoEncoderConfigurations />')
                  .map(mapResponseXmlToJson<any>('trt:GetVideoEncoderConfigurationsResponse')())
                
}
