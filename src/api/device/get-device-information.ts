import { soapShell, XMLNS } from '../../xml'
import { createStandardRequestBody } from '../request'
import { map } from 'rxjs/operators'

export interface DeviceInformation {
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

const createDeviceInformationBody = () =>
  soapShell(`<GetDeviceInformation ${XMLNS.DEVICE}></GetDeviceInformation>`)()


/**
 * This operation gets basic device information from the device.
 */
export const getDeviceInformation = () =>
  createStandardRequestBody(createDeviceInformationBody())
    .map(res => res.pipe(
      map<Document, any>(doc => {
        return {}
        // return ['GetDeviceInformationResponse']
        //   .reduce((acc, curr) => {
        //     return {
        //       ...acc,
        //       [curr]: drillXml(doc)(`tt:${curr}`).valueOrUndefined()
        //     }
        //   }, {})
      })
    ))
  // createONVIFDeviceActionSoapBody(ONVIFDeviceOperation.GET_DEVICE_INFORMATION)
  //   .flatMap(soapRequest)
  //   .map(successXmlPathMap<DeviceInformation>(xml => {
  //     return simpleParseToMaybeObject<DeviceInformation>('//tds:GetDeviceInformationResponse')({
  //       firmwareversion: 'firmwareVersion',
  //       serialnumber: 'serialNumber',
  //       hardwareid: 'hardwareId'
  //     })(xml).valueOr({
  //       firmwareVersion: 'unknown',
  //       hardwareId: 'unknown',
  //       manufacturer: 'unknown',
  //       model: 'unknown',
  //       serialNumber: 'unknown'
  //     })
  //   }))
