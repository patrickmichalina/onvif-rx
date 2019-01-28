import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import "../types";

/**
 * This operation is specific to TLS functionality. This operation sets the status
 *   (enabled/disabled) of the device TLS client authentication. A device that supports TLS shall
 *   support this command.
 */
export function SetClientCertificateMode(Enabled: boolean) {
    createStandardRequestBodyFromString('<tds:SetClientCertificateMode />')
                  .map(mapResponseXmlToJson<any>('tds:SetClientCertificateModeResponse')())
                
}
