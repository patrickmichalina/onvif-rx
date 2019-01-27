import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * This operation reboots the device.
 */
export const SystemReboot =
  () =>
    createStandardRequestBodyFromString('<tds:SystemReboot />')
      .map(mapResponseXmlToJson<any>('tds:SystemRebootResponse')())
