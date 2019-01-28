import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import { CertificateStatus } from "../types";

/**
 * This operation is specific to TLS functionality. This operation sets the status (enable/disable)
 *   of the device TLS server certificates. A device that supports TLS shall support this command.
 *   Typically only one device server certificate is allowed to be enabled at a time.
 */
export function SetCertificatesStatus(CertificateStatus: CertificateStatus) {
    createStandardRequestBodyFromString('<tds:SetCertificatesStatus />')
                  .map(mapResponseXmlToJson<any>('tds:SetCertificatesStatusResponse')())
                
}
