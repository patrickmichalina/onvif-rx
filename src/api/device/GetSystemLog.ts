import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * This operation gets a system log from the device. The exact format of the system logs is outside the scope of this standard.
 */
export const GetSystemLog =
  () =>
    createStandardRequestBodyFromString('<tds:GetSystemLog />')
      .map(mapResponseXmlToJson<any>('tds:GetSystemLogResponse')())
