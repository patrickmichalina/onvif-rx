import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import "../types";

/**
 * This operation gets arbitary device diagnostics information from the device.
 */
export function GetSystemSupportInformation() {
    createStandardRequestBodyFromString('<tds:GetSystemSupportInformation />')
                  .map(mapResponseXmlToJson<any>('tds:GetSystemSupportInformationResponse')())
                
}
