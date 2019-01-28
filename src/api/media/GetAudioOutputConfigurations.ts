import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import "../types";

/**
 * This command lists all existing AudioOutputConfigurations of a device. The NVC need not know anything apriori about the audio configurations to use this command.
 */
export function GetAudioOutputConfigurations() {
    createStandardRequestBodyFromString('<trt:GetAudioOutputConfigurations />')
                  .map(mapResponseXmlToJson<any>('trt:GetAudioOutputConfigurationsResponse')())
                
}
