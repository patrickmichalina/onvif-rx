import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * While the CreateDot1XConfiguration command is trying to create a new configuration
 * parameter set, this operation modifies existing IEEE 802.1X configuration parameter set of
 * the device. A device that support IEEE 802.1X shall support this command.
 */
export const SetDot1XConfiguration =
  () =>
    createStandardRequestBodyFromString('<tds:SetDot1XConfiguration />')
      .map(mapResponseXmlToJson<any>('tds:SetDot1XConfigurationResponse')())
