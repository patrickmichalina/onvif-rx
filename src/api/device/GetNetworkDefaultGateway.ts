import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * This operation gets the default gateway settings from a device. The device shall support the
 * GetNetworkDefaultGateway command returning configured default gateway address(es).
 */
export const GetNetworkDefaultGateway =
  () =>
    createStandardRequestBodyFromString('<tds:GetNetworkDefaultGateway />')
      .map(mapResponseXmlToJson<any>('tds:GetNetworkDefaultGatewayResponse')())
