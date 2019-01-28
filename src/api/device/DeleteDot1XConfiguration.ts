import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import { ReferenceToken } from "../types";

/**
 * This operation deletes an IEEE 802.1X configuration parameter set from the device. Which
 *   configuration should be deleted is specified by the 'Dot1XConfigurationToken' in the request.
 *   A device that support IEEE 802.1X shall support this command.
 */
export function DeleteDot1XConfiguration(Dot1XConfigurationToken: ReferenceToken) {
    createStandardRequestBodyFromString('<tds:DeleteDot1XConfiguration />')
                  .map(mapResponseXmlToJson<any>('tds:DeleteDot1XConfigurationResponse')())
                
}
