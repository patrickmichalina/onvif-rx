import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * This operation generates a private/public key pair and also can create a self-signed device
 * certificate as a result of key pair generation. The certificate is created using a suitable
 * onboard key pair generation mechanism.
 * If a device supports onboard key pair generation, the device that supports TLS shall support
 * this certificate creation command. And also, if a device supports onboard key pair generation,
 * the device that support IEEE 802.1X shall support this command for the purpose of key pair
 * generation. Certificates and key pairs are identified using certificate IDs. These IDs are either
 * chosen by the certificate generation requester or by the device (in case that no ID value is
 * given).
 */
export const CreateCertificate =
  () =>
    createStandardRequestBodyFromString('<tds:CreateCertificate />')
      .map(mapResponseXmlToJson<any>('tds:CreateCertificateResponse')())
