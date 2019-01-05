import { createDeviceRequestBodyFromString, mapResponseXmlToJson } from '../request'

export interface ISystemRebootResponse {
  readonly Message: string
}

/**
 * This operation reboots the device.
 */
export const systemReboot = () =>
  createDeviceRequestBodyFromString(`SystemReboot`)
    .map(mapResponseXmlToJson<ISystemRebootResponse>(`tds:SystemRebootResponse`))
