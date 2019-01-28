import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import { ReferenceToken } from "../types";

/**
 * This operation removes an AudioEncoderConfiguration from an existing media profile. If the
 *   media profile does not contain an AudioEncoderConfiguration, the operation has no effect.
 *   The removal shall be persistent.
 */
export function RemoveAudioEncoderConfiguration(ProfileToken: ReferenceToken) {
    createStandardRequestBodyFromString('<trt:RemoveAudioEncoderConfiguration />')
                  .map(mapResponseXmlToJson<any>('trt:RemoveAudioEncoderConfigurationResponse')())
                
}
