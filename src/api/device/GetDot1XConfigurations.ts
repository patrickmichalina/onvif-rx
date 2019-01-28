import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import "../types";

/**
 * This operation gets all the existing IEEE 802.1X configuration parameter sets from the device.
 *   The device shall respond with all the IEEE 802.1X configurations so that the client can get to
 *   know how many IEEE 802.1X configurations are existing and how they are configured.
 *   A device that support IEEE 802.1X shall support this command.
 *   Regardless of whether the 802.1X method in the retrieved configuration has a password or
 *   not, the device shall not include the Password element in the response.
 */
export function GetDot1XConfigurations() {
    createStandardRequestBodyFromString('<tds:GetDot1XConfigurations />')
                  .map(mapResponseXmlToJson<any>('tds:GetDot1XConfigurationsResponse')())
                
}
