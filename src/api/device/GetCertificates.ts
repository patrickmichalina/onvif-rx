import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import "../types";

/**
 * This operation gets all device server certificates (including self-signed) for the purpose of TLS
 *   authentication and all device client certificates for the purpose of IEEE 802.1X authentication.
 *   This command lists only the TLS server certificates and IEEE 802.1X client certificates for the
 *   device (neither trusted CA certificates nor trusted root certificates). The certificates are
 *   returned as binary data. A device that supports TLS shall support this command and the
 *   certificates shall be encoded using ASN.1 [X.681], [X.682], [X.683] DER [X.690] encoding
 *   rules.
 */
export function GetCertificates() {
    createStandardRequestBodyFromString('<tds:GetCertificates />')
                  .map(mapResponseXmlToJson<any>('tds:GetCertificatesResponse')())
                
}
