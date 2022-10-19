import { maybe, reader } from 'typescript-monads'
import { IDeviceConfig, ISystemConfig, IUserCredentials } from '../config/interfaces'
import { ManagedONVIFApi } from '../api'

export interface IManagedDevice {
  /**
   * ONVIF standard API
   */
  readonly api: ManagedONVIFApi
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
    api: new ManagedONVIFApi(innerRunConfig)
  }
})
