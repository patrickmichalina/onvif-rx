import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * This operation configures defined network protocols on a device. The device shall support
 * configuration of defined network protocols through the SetNetworkProtocols command.
 */
export const SetNetworkProtocols =
  () =>
    createStandardRequestBodyFromString('<tds:SetNetworkProtocols />')
      .map(mapResponseXmlToJson<any>('tds:SetNetworkProtocolsResponse')())
