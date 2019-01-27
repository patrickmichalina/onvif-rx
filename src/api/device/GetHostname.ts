import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * This operation is used by an endpoint to get the hostname from a device. The device shall
 * return its hostname configurations through the GetHostname command.
 */
export const GetHostname =
  () =>
    createStandardRequestBodyFromString('<tds:GetHostname />')
      .map(mapResponseXmlToJson<any>('tds:GetHostnameResponse')())
