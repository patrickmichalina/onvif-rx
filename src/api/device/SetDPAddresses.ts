import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * This operation sets the remote DP address or addresses on a device. If the device supports
 * remote discovery, as specified in Section 7.4, the device shall support configuration of the
 * remote DP address(es) through the SetDPAddresses command.
 */
export const SetDPAddresses =
  () =>
    createStandardRequestBodyFromString('<tds:SetDPAddresses />')
      .map(mapResponseXmlToJson<any>('tds:SetDPAddressesResponse')())
