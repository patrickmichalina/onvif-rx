import { IDeviceConfig } from '../config'
import { IONVIFDeviceApi, ONVIF_Device_API } from './device'
import { IONVIFMediaApi, ONVIF_Media_API } from './media'
import { IONVIFPTZApi, ONVIF_PTZ_API } from './ptz'

export interface IONVIFApi {
  readonly device: IONVIFDeviceApi
  readonly media: IONVIFMediaApi
  readonly ptz: IONVIFPTZApi
}

export const ONVIF_API = (config: IDeviceConfig): IONVIFApi => {
  return {
    device: ONVIF_Device_API(config),
    media: ONVIF_Media_API(config),
    ptz: ONVIF_PTZ_API(config),
  }
}