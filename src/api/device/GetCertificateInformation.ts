import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import "../types";

/**
 * This operation requests the information of a certificate specified by certificate ID. The device
 *   should respond with its “Issuer DN”, “Subject DN”, “Key usage”, "Extended key usage”, “Key
 *   Length”, “Version”, “Serial Number”, “Signature Algorithm” and “Validity” data as the
 *   information of the certificate, as long as the device can retrieve such information from the
 *   specified certificate.
 *   A device that supports either TLS or IEEE 802.1X should support this command.
 */
export function GetCertificateInformation(CertificateID: string) {
    createStandardRequestBodyFromString('<tds:GetCertificateInformation />')
                  .map(mapResponseXmlToJson<any>('tds:GetCertificateInformationResponse')())
                
}
