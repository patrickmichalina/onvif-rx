import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * This operation is specific to TLS functionality. This operation sets the status
 * (enabled/disabled) of the device TLS client authentication. A device that supports TLS shall
 * support this command.
 */
export const SetClientCertificateMode =
  () =>
    createStandardRequestBodyFromString('<tds:SetClientCertificateMode />')
      .map(mapResponseXmlToJson<any>('tds:SetClientCertificateModeResponse')())
