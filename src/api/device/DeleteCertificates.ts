import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import "../types";

/**
 * This operation deletes a certificate or multiple certificates. The device MAY also delete a
 *   private/public key pair which is coupled with the certificate to be deleted. The device that
 *   support either TLS or IEEE 802.1X shall support the deletion of a certificate or multiple
 *   certificates through this command. Either all certificates are deleted successfully or a fault
 *   message shall be returned without deleting any certificate.
 */
export function DeleteCertificates(CertificateID: string) {
    createStandardRequestBodyFromString('<tds:DeleteCertificates />')
                  .map(mapResponseXmlToJson<any>('tds:DeleteCertificatesResponse')())
                
}
