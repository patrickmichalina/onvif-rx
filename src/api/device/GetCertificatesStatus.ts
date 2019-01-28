import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import "../types";

/**
 * This operation is specific to TLS functionality. This operation gets the status
 *   (enabled/disabled) of the device TLS server certificates. A device that supports TLS shall
 *   support this command.
 */
export function GetCertificatesStatus() {
    createStandardRequestBodyFromString('<tds:GetCertificatesStatus />')
                  .map(mapResponseXmlToJson<any>('tds:GetCertificatesStatusResponse')())
                
}
