import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * This operation gets arbitary device diagnostics information from the device.
 */
export const GetSystemSupportInformation =
  () =>
    createStandardRequestBodyFromString('<tds:GetSystemSupportInformation />')
      .map(mapResponseXmlToJson<any>('tds:GetSystemSupportInformationResponse')())
