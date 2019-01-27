import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * This operation sets the default gateway settings on a device. The device shall support
 * configuration of default gateway through the SetNetworkDefaultGateway command.
 */
export const SetNetworkDefaultGateway =
  () =>
    createStandardRequestBodyFromString('<tds:SetNetworkDefaultGateway />')
      .map(mapResponseXmlToJson<any>('tds:SetNetworkDefaultGatewayResponse')())
