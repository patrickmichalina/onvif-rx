import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import { RemoteUser } from "../types";

/**
 * This operation sets the remote user. A device supporting remote user handling shall support this
 *   operation. The user is only valid for the WS-UserToken profile or as a HTTP / RTSP user.
 *   The password that is set shall always be the original (not derived) password.
 *   If UseDerivedPassword is set password derivation shall be done by the device when connecting to a
 *   remote device.The algorithm to use for deriving the password is described in section 5.12.2.1 of the core specification.
 *   To remove the remote user SetRemoteUser should be called without the RemoteUser parameter.
 */
export function SetRemoteUser(RemoteUser: RemoteUser) {
    createStandardRequestBodyFromString('<tds:SetRemoteUser />')
                  .map(mapResponseXmlToJson<any>('tds:SetRemoteUserResponse')())
                
}
