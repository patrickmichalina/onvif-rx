import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import "../types";

/**
 * This operation lists the registered users and corresponding credentials on a device. The
 *   device shall support retrieval of registered device users and their credentials for the user
 *   token through the GetUsers command.
 */
export function GetUsers() {
    createStandardRequestBodyFromString('<tds:GetUsers />')
                  .map(mapResponseXmlToJson<any>('tds:GetUsersResponse')())
                
}
