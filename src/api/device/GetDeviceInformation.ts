import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import "../types";

/**
 * This operation gets basic device information from the device.
 */
export function GetDeviceInformation() {
    createStandardRequestBodyFromString('<tds:GetDeviceInformation />')
                  .map(mapResponseXmlToJson<any>('tds:GetDeviceInformationResponse')())
                
}
