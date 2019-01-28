import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import "../types";

/**
 * This operation lists all existing metadata configurations. The client need not know anything apriori about the metadata in order to use the command.
 */
export function GetMetadataConfigurations() {
    createStandardRequestBodyFromString('<trt:GetMetadataConfigurations />')
                  .map(mapResponseXmlToJson<any>('trt:GetMetadataConfigurationsResponse')())
                
}
