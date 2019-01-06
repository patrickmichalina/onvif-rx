import { mapResponseXmlToJson, createMediaRequestBodyFromString } from '../request'

export interface IGetStreamUriResponse {
}

/**
 * This operation gets basic device information from the device.
 */
export const getStreamUri = () =>
  createMediaRequestBodyFromString('GetStreamUri')
    .map(mapResponseXmlToJson<IGetStreamUriResponse>('tds:GetStreamUriResponse')())
