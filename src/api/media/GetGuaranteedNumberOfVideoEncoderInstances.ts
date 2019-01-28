import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import { ReferenceToken } from "../types";

/**
 * The GetGuaranteedNumberOfVideoEncoderInstances command can be used to request the
 *   minimum number of guaranteed video encoder instances (applications) per Video Source
 *   Configuration.
 */
export function GetGuaranteedNumberOfVideoEncoderInstances(ConfigurationToken: ReferenceToken) {
    createStandardRequestBodyFromString('<trt:GetGuaranteedNumberOfVideoEncoderInstances />')
                  .map(mapResponseXmlToJson<any>('trt:GetGuaranteedNumberOfVideoEncoderInstancesResponse')())
                
}
