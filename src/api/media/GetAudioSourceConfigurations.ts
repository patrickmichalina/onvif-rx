import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import "../types";

/**
 * This operation lists all existing audio source configurations of a device. This command lists all audio source configurations in a device. The client need not know anything apriori about the audio source configurations in order to use the command.
 */
export function GetAudioSourceConfigurations() {
    createStandardRequestBodyFromString('<trt:GetAudioSourceConfigurations />')
                  .map(mapResponseXmlToJson<any>('trt:GetAudioSourceConfigurationsResponse')())
                
}
