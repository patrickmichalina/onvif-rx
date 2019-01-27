import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * This command is used when it is necessary to load trusted CA certificates or trusted root
 * certificates for the purpose of verification for its counterpart i.e. client certificate verification in
 * TLS function or server certificate verification in IEEE 802.1X function.
 * A device that support either TLS or IEEE 802.1X shall support this command. As for the
 * supported certificate format, either DER format or PEM format is possible to be used. But a
 * device that support this command shall support at least DER format as supported format type.
 * The device may sort the received certificate(s) based on the public key and subject
 * information in the certificate(s). Either all CA certificates are loaded successfully or a fault
 * message shall be returned without loading any CA certificate.
 */
export const LoadCACertificates =
  () =>
    createStandardRequestBodyFromString('<tds:LoadCACertificates />')
      .map(mapResponseXmlToJson<any>('tds:LoadCACertificatesResponse')())
