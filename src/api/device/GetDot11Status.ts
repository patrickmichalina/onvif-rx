import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * This operation returns the status of a wireless network interface. The device shall support this
 * command.
 */
export const GetDot11Status =
  () =>
    createStandardRequestBodyFromString('<tds:GetDot11Status />')
      .map(mapResponseXmlToJson<any>('tds:GetDot11StatusResponse')())
