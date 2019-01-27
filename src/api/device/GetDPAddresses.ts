import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * This operation gets the remote DP address or addresses from a device. If the device supports
 * remote discovery, as specified in Section 7.4, the device shall support retrieval of the remote
 * DP address(es) through the GetDPAddresses command.
 */
export const GetDPAddresses =
  () =>
    createStandardRequestBodyFromString('<tds:GetDPAddresses />')
      .map(mapResponseXmlToJson<any>('tds:GetDPAddressesResponse')())
