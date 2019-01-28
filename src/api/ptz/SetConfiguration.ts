import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import { PTZConfiguration } from "../types";

/**
 * 
 *           Set/update a existing PTZConfiguration on the device.
 *         
 */
export function SetConfiguration(PTZConfiguration: PTZConfiguration, ForcePersistence: boolean) {
    createStandardRequestBodyFromString('<tptz:SetConfiguration />')
                  .map(mapResponseXmlToJson<any>('tptz:SetConfigurationResponse')())
                
}
