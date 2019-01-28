import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import { ReferenceToken } from "../types";

/**
 * Operation to get all available PTZConfigurations that can be added to the referenced media profile. 
 *   A device providing more than one PTZConfiguration or more than one VideoSourceConfiguration or which has any other resource
 *   interdependency between PTZConfiguration entities and other resources listable in a media profile should implement this operation.
 *   PTZConfiguration entities returned by this operation shall not fail on adding them to the referenced media profile.
 *   
 */
export function GetCompatibleConfigurations(ProfileToken: ReferenceToken) {
    createStandardRequestBodyFromString('<tptz:GetCompatibleConfigurations />')
                  .map(mapResponseXmlToJson<any>('tptz:GetCompatibleConfigurationsResponse')())
                
}
