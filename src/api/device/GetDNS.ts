import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * This operation gets the DNS settings from a device. The device shall return its DNS
 * configurations through the GetDNS command.
 */
export const GetDNS =
  () =>
    createStandardRequestBodyFromString('<tds:GetDNS />')
      .map(mapResponseXmlToJson<any>('tds:GetDNSResponse')())
