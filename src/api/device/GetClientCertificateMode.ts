import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import "../types";

/**
 * This operation is specific to TLS functionality. This operation gets the status
 *   (enabled/disabled) of the device TLS client authentication. A device that supports TLS shall
 *   support this command.
 */
export function GetClientCertificateMode() {
    createStandardRequestBodyFromString('<tds:GetClientCertificateMode />')
                  .map(mapResponseXmlToJson<any>('tds:GetClientCertificateModeResponse')())
                
}
