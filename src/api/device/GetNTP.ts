import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * This operation gets the NTP settings from a device. If the device supports NTP, it shall be
 * possible to get the NTP server settings through the GetNTP command.
 */
export const GetNTP =
  () =>
    createStandardRequestBodyFromString('<tds:GetNTP />')
      .map(mapResponseXmlToJson<any>('tds:GetNTPResponse')())
