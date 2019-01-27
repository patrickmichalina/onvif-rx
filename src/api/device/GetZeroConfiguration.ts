import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * This operation gets the zero-configuration from a device. If the device supports dynamic IP
 * configuration according to [RFC3927], it shall support the return of IPv4 zero configuration
 * address and status through the GetZeroConfiguration command.
 * Devices supporting zero configuration on more than one interface shall use the extension to list the additional interface settings.
 */
export const GetZeroConfiguration =
  () =>
    createStandardRequestBodyFromString('<tds:GetZeroConfiguration />')
      .map(mapResponseXmlToJson<any>('tds:GetZeroConfigurationResponse')())
