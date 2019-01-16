import { Observable } from 'rxjs'
import { IService, IScope, getScopes, getServices, IDeviceInformation, getDeviceInformation } from '../api/device/capabilities'
import { maybe, reader } from 'typescript-monads'
import { IDeviceConfig, ISystemConfig, IUserCredentials } from '../config/interfaces'
import { getStreamUri, IGetStreamUriRequest } from '../api/media/stream'
import { getProfiles } from '../api/media/profiles'

export interface IDeviceApi {
  readonly getScopes: () => Observable<ReadonlyArray<IScope>>
  readonly getServices: (includeCapability?: boolean) => Observable<ReadonlyArray<IService>>
  readonly getDeviceInformation: () => Observable<IDeviceInformation>
}

export interface IMediaApi {
  readonly getStreamUri: (req: IGetStreamUriRequest) => Observable<any>
  readonly getProfiles: () => Observable<any>
}

export interface IOnvifApi {
  readonly device: IDeviceApi
  readonly media: IMediaApi
}

export interface IManagedDevice {
  readonly api: IOnvifApi
}

export interface IDeviceInitConfig {
  readonly deviceUrl: string
  readonly username?: string
  readonly password?: string
}

export const createManagedDevice = (config: IDeviceInitConfig) => reader<ISystemConfig, IManagedDevice>(system => {
  const innerRunConfig: IDeviceConfig = {
    system,
    deviceUrl: config.deviceUrl,
    user: config.username && config.password
      ? maybe<IUserCredentials>({ username: config.username, password: config.password })
      : maybe<IUserCredentials>()
  }

  return {
    api: {
      device: {
        getScopes: () => getScopes().run(innerRunConfig),
        getServices: (includeCapability?: boolean) => getServices(includeCapability).run(innerRunConfig),
        getDeviceInformation: () => getDeviceInformation().run(innerRunConfig)
      },
      media: {
        getStreamUri: (req: IGetStreamUriRequest) => getStreamUri(req).run(innerRunConfig),
        getProfiles: () => getProfiles().run(innerRunConfig)
      }
    }
  }
})