import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * This operation sets the network interface configuration on a device. The device shall support
 * network configuration of supported network interfaces through the SetNetworkInterfaces
 * command.
 * For interoperability with a client unaware of the IEEE 802.11 extension a device shall retain
 * its IEEE 802.11 configuration if the IEEE 802.11 configuration element isn’t present in the
 * request.
 */
export const SetNetworkInterfaces =
  () =>
    createStandardRequestBodyFromString('<tds:SetNetworkInterfaces />')
      .map(mapResponseXmlToJson<any>('tds:SetNetworkInterfacesResponse')())
