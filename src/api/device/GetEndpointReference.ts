import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import "../types";

/**
 * A client can ask for the device service endpoint reference address property that can be used
 *   to derive the password equivalent for remote user operation. The device shall support the
 *   GetEndpointReference command returning the address property of the device service
 *   endpoint reference.
 */
export function GetEndpointReference() {
    createStandardRequestBodyFromString('<tds:GetEndpointReference />')
                  .map(mapResponseXmlToJson<any>('tds:GetEndpointReferenceResponse')())
                
}
