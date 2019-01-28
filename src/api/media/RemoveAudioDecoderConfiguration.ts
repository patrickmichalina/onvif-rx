import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import { ReferenceToken } from "../types";

/**
 * This operation removes an AudioDecoderConfiguration from an existing media profile. If the media profile does not contain an AudioDecoderConfiguration, the operation has no effect. The removal shall be persistent.
 */
export function RemoveAudioDecoderConfiguration(ProfileToken: ReferenceToken) {
    createStandardRequestBodyFromString('<trt:RemoveAudioDecoderConfiguration />')
                  .map(mapResponseXmlToJson<any>('trt:RemoveAudioDecoderConfigurationResponse')())
                
}
