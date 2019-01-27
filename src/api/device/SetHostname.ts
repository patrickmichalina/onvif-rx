import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * This operation sets the hostname on a device. It shall be possible to set the device hostname
 * configurations through the SetHostname command.
 * A device shall accept string formated according to RFC 1123 section 2.1 or alternatively to RFC 952, 
 * other string shall be considered as invalid strings. 
 * 
 */
export const SetHostname =
  () =>
    createStandardRequestBodyFromString('<tds:SetHostname />')
      .map(mapResponseXmlToJson<any>('tds:SetHostnameResponse')())
