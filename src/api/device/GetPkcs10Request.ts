import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import { BinaryData } from "../types";

/**
 * This operation requests a PKCS #10 certificate signature request from the device. The
 *   returned information field shall be either formatted exactly as specified in [PKCS#10] or PEM
 *   encoded [PKCS#10] format. In order for this command to work, the device must already have
 *   a private/public key pair. This key pair should be referred by CertificateID as specified in the
 *   input parameter description. This CertificateID refers to the key pair generated using
 *   CreateCertificate command.
 *   A device that support onboard key pair generation that supports either TLS or IEEE 802.1X
 *   using client certificate shall support this command.
 */
export function GetPkcs10Request(CertificateID: string, Subject: string, Attributes: BinaryData) {
    createStandardRequestBodyFromString('<tds:GetPkcs10Request />')
                  .map(mapResponseXmlToJson<any>('tds:GetPkcs10RequestResponse')())
                
}
