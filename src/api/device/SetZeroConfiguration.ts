import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import { ReferenceToken } from "../types";

/**
 * This operation sets the zero-configuration. Use GetCapalities to get if zero-zero-configuration is supported or not.
 */
export function SetZeroConfiguration(InterfaceToken: ReferenceToken, Enabled: boolean) {
    createStandardRequestBodyFromString('<tds:SetZeroConfiguration />')
                  .map(mapResponseXmlToJson<any>('tds:SetZeroConfigurationResponse')())
                
}
