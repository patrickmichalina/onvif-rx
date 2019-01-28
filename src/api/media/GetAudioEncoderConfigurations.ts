import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import "../types";

/**
 * This operation lists all existing device audio encoder configurations. The client need not know anything apriori about the audio encoder configurations in order to use the command.
 */
export function GetAudioEncoderConfigurations() {
    createStandardRequestBodyFromString('<trt:GetAudioEncoderConfigurations />')
                  .map(mapResponseXmlToJson<any>('trt:GetAudioEncoderConfigurationsResponse')())
                
}
