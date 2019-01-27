import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * This operation gets basic device information from the device.
 */
export const GetDeviceInformation =
  () =>
    createStandardRequestBodyFromString('<tds:GetDeviceInformation />')
      .map(mapResponseXmlToJson<any>('tds:GetDeviceInformationResponse')())
