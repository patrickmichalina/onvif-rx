import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * This operation controls whether the hostname is set manually or retrieved via DHCP.
 */
export const SetHostnameFromDHCP =
  () =>
    createStandardRequestBodyFromString('<tds:SetHostnameFromDHCP />')
      .map(mapResponseXmlToJson<any>('tds:SetHostnameFromDHCPResponse')())
