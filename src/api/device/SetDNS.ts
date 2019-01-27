import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * This operation sets the DNS settings on a device. It shall be possible to set the device DNS
 * configurations through the SetDNS command.
 */
export const SetDNS =
  () =>
    createStandardRequestBodyFromString('<tds:SetDNS />')
      .map(mapResponseXmlToJson<any>('tds:SetDNSResponse')())
