import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import { ReferenceToken } from "../types";

/**
 * This operation returns a lists of the wireless networks in range of the device. A device should
 *   support this operation.
 */
export function ScanAvailableDot11Networks(InterfaceToken: ReferenceToken) {
    createStandardRequestBodyFromString('<tds:ScanAvailableDot11Networks />')
                  .map(mapResponseXmlToJson<any>('tds:ScanAvailableDot11NetworksResponse')())
                
}
