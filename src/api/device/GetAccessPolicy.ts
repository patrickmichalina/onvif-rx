import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import "../types";

/**
 * Access to different services and sub-sets of services should be subject to access control. The
 *   WS-Security framework gives the prerequisite for end-point authentication. Authorization
 *   decisions can then be taken using an access security policy. This standard does not mandate
 *   any particular policy description format or security policy but this is up to the device
 *   manufacturer or system provider to choose policy and policy description format of choice.
 *   However, an access policy (in arbitrary format) can be requested using this command. If the
 *   device supports access policy settings based on WS-Security authentication, then the device
 *   shall support this command.
 */
export function GetAccessPolicy() {
    createStandardRequestBodyFromString('<tds:GetAccessPolicy />')
                  .map(mapResponseXmlToJson<any>('tds:GetAccessPolicyResponse')())
                
}
