import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * There might be some cases that a Certificate Authority or some other equivalent creates a
 * certificate without having PKCS#10 certificate signing request. In such cases, the certificate
 * will be bundled in conjunction with its private key. This command will be used for such use
 * case scenarios. The certificate ID in the request is optionally set to the ID value the client
 * wish to have. If the certificate ID is not specified in the request, device can choose the ID
 * accordingly.
 * This operation imports a private/public key pair into the device.
 * The certificates shall be encoded using ASN.1 [X.681], [X.682], [X.683] DER [X.690] encoding
 * rules.
 * A device that does not support onboard key pair generation and support either TLS or IEEE
 * 802.1X using client certificate shall support this command. A device that support onboard key
 * pair generation MAY support this command. The security policy of a device that supports this
 * operation should make sure that the private key is sufficiently protected.
 */
export const LoadCertificateWithPrivateKey =
  () =>
    createStandardRequestBodyFromString('<tds:LoadCertificateWithPrivateKey />')
      .map(mapResponseXmlToJson<any>('tds:LoadCertificateWithPrivateKeyResponse')())
