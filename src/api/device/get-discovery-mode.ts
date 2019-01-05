import { mapResponseXmlToJson, createDeviceRequestBodyFromString } from '../request'

export enum DiscoveryMode {
  DISCOVERABLE = 'Discoverable',
  NON_DISCOVERABLE = 'NonDiscoverable'
}

export interface IDiscoveryResponse {
  readonly DiscoveryMode: DiscoveryMode
}

/**
 * This operation gets the discovery mode of a device. See Section 7.2 for the definition of 
 * the different device discovery modes. The device shall support retrieval of the discovery 
 * mode setting through the GetDiscoveryMode command.
 */
export const getDeviceDiscoveryMode = () =>
  createDeviceRequestBodyFromString('GetDiscoveryMode')
    .map(mapResponseXmlToJson<IDiscoveryResponse>('tds:GetDiscoveryModeResponse'))
