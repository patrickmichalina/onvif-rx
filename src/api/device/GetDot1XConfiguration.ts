import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import { ReferenceToken } from "../types";

/**
 * This operation gets one IEEE 802.1X configuration parameter set from the device by
 *   specifying the configuration token (Dot1XConfigurationToken).
 *   A device that supports IEEE 802.1X shall support this command.
 *   Regardless of whether the 802.1X method in the retrieved configuration has a password or
 *   not, the device shall not include the Password element in the response.
 */
export function GetDot1XConfiguration(Dot1XConfigurationToken: ReferenceToken) {
    createStandardRequestBodyFromString('<tds:GetDot1XConfiguration />')
                  .map(mapResponseXmlToJson<any>('tds:GetDot1XConfigurationResponse')())
                
}
