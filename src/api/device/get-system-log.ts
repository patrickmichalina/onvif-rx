import { createDeviceRequestBodyFromString, mapResponseXmlToJson } from '../request'

/**
 * Contains the system log information.
 */
export interface ISystemLog {
  /**
   * The log information as attachment data.
   */
  readonly binaryData?: any

  /**
   * The log information as character data.
   */
  readonly string?: string
}

/**
 * This operation gets a system log from the device. The exact format of the system logs is outside the scope of this standard.
 */
export const getSystemLog = () =>
  createDeviceRequestBodyFromString(`GetSystemLog`)
    .map(mapResponseXmlToJson<ISystemLog>(`tds:GetSystemLogResponse`))
