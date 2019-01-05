import { mapResponseXmlToJson, createDeviceRequestBodyFromString } from '../request'

export interface IDeviceInformation {
  /**
   * The manufactor of the device.
   */
  readonly Manufacturer: string

  /**
   * The device model.
   */
  readonly Model: string

  /**
   * The firmware version in the device.
   */
  readonly FirmwareVersion: string

  /**
   * The serial number of the device.
   */
  readonly SerialNumber: string

  /**
   * The hardware ID of the device.
   */
  readonly HardwareId: string
}

/**
 * This operation gets basic device information from the device.
 */
export const getDeviceInformation = () =>
  createDeviceRequestBodyFromString('GetDeviceInformation')
    .map(mapResponseXmlToJson<IDeviceInformation>('tds:GetDeviceInformationResponse'))
