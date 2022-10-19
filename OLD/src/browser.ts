import { IDeviceInitConfig, createManagedDevice } from '.'
import { DEFAULT_BROWSER_ENV } from './config/browser'

export * from './config/browser'
export * from './index'

export const createManagedDeviceInBrowser =
  (config: IDeviceInitConfig) =>
    createManagedDevice(config)
      .run(DEFAULT_BROWSER_ENV)
