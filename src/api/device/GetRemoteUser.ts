import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import "../types";

/**
 * This operation returns the configured remote user (if any). A device supporting remote user
 *   handling shall support this operation. The user is only valid for the WS-UserToken profile or
 *   as a HTTP / RTSP user.
 *   The algorithm to use for deriving the password is described in section 5.12.2.1 of the core specification.
 */
export function GetRemoteUser() {
    createStandardRequestBodyFromString('<tds:GetRemoteUser />')
                  .map(mapResponseXmlToJson<any>('tds:GetRemoteUserResponse')())
                
}
