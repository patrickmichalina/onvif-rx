import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import { ReferenceToken } from "../types";

/**
 * This operation returns the status of a wireless network interface. The device shall support this
 *   command.
 */
export function GetDot11Status(InterfaceToken: ReferenceToken) {
    createStandardRequestBodyFromString('<tds:GetDot11Status />')
                  .map(mapResponseXmlToJson<any>('tds:GetDot11StatusResponse')())
                
}
