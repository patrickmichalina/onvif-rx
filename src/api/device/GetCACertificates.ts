import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * CA certificates will be loaded into a device and be used for the sake of following two cases.
 * The one is for the purpose of TLS client authentication in TLS server function. The other one
 * is for the purpose of Authentication Server authentication in IEEE 802.1X function. This
 * operation gets all CA certificates loaded into a device. A device that supports either TLS client
 * authentication or IEEE 802.1X shall support this command and the returned certificates shall
 * be encoded using ASN.1 [X.681], [X.682], [X.683] DER [X.690] encoding rules.
 */
export const GetCACertificates =
  () =>
    createStandardRequestBodyFromString('<tds:GetCACertificates />')
      .map(mapResponseXmlToJson<any>('tds:GetCACertificatesResponse')())
