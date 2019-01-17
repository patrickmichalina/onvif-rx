import { IDeviceInitConfig, createManagedDevice } from '.'
import { DEFAULT_NODE_ENV } from './config/node'

// export * from './browser'
export * from './index'

export const createManagedDeviceInNode =
  (config: IDeviceInitConfig) =>
    createManagedDevice(config)
      .run(DEFAULT_NODE_ENV)
