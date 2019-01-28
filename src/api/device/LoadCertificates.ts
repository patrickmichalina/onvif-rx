import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import { Certificate } from "../types";

/**
 * TLS server certificate(s) or IEEE 802.1X client certificate(s) created using the PKCS#10
 *   certificate request command can be loaded into the device using this command (see Section
 *   8.4.13). The certificate ID in the request shall be present. The device may sort the received
 *   certificate(s) based on the public key and subject information in the certificate(s).
 *   The certificate ID in the request will be the ID value the client wish to have. The device is
 *   supposed to scan the generated key pairs present in the device to identify which is the
 *   correspondent key pair with the loaded certificate and then make the link between the
 *   certificate and the key pair.
 *   A device that supports onboard key pair generation that support either TLS or IEEE 802.1X
 *   shall support this command.
 *   The certificates shall be encoded using ASN.1 [X.681], [X.682], [X.683] DER [X.690] encoding
 *   rules.
 *   This command is applicable to any device type, although the parameter name is called for
 *   historical reasons NVTCertificate.
 */
export function LoadCertificates(NVTCertificate: Certificate) {
    createStandardRequestBodyFromString('<tds:LoadCertificates />')
                  .map(mapResponseXmlToJson<any>('tds:LoadCertificatesResponse')())
                
}
