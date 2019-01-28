import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import { User } from "../types";

/**
 * This operation creates new device users and corresponding credentials on a device for authentication purposes. 
 *   The device shall support creation of device users and their credentials through the CreateUsers
 *   command. Either all users are created successfully or a fault message shall be returned
 *   without creating any user.
 *   ONVIF compliant devices are recommended to support password length of at least 28 bytes,
 *   as clients may follow the password derivation mechanism which results in 'password
 *   equivalent' of length 28 bytes, as described in section 3.1.2 of the ONVIF security white paper.
 */
export function CreateUsers(User: User) {
    createStandardRequestBodyFromString('<tds:CreateUsers />')
                  .map(mapResponseXmlToJson<any>('tds:CreateUsersResponse')())
                
}
