import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * Returns information about services on the device.
 */
export const GetServices =
  () =>
    createStandardRequestBodyFromString('<tds:GetServices />')
      .map(mapResponseXmlToJson<any>('tds:GetServicesResponse')())
