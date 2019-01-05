import { createDeviceRequestBodyFromString, mapResponseXmlToJson } from '../request'

/**
 * Contains the arbitary device diagnostics information.
 */
export interface ISupportInformation {
  /**
   * The support information as attachment data.
   */
  readonly binaryData?: any

  /**
   * The support information as character data.
   */
  readonly string?: string
}

/**
 * This operation gets a system log from the device. The exact format of the system logs is outside the scope of this standard.
 */
export const getSystemSupportInformation = () =>
  createDeviceRequestBodyFromString(`GetSystemSupportInformation`)
    .map(mapResponseXmlToJson<ISupportInformation>(`tds:GetSystemSupportInformationResponse`))
