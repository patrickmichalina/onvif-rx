import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * This operation sets the dynamic DNS settings on a device. If the device supports dynamic
 * DNS as specified in [RFC 2136] and [RFC 4702], it shall be possible to set the type, name
 * and TTL through the SetDynamicDNS command.
 */
export const SetDynamicDNS =
  () =>
    createStandardRequestBodyFromString('<tds:SetDynamicDNS />')
      .map(mapResponseXmlToJson<any>('tds:SetDynamicDNSResponse')())
