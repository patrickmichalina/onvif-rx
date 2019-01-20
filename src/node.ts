import { IDeviceInitConfig, createManagedDevice } from '.'
import { DEFAULT_NODE_ENV } from './config/node'

export * from './browser'
export * from './index'

export const createManagedDeviceInNode =
  (config: IDeviceInitConfig) =>
    createManagedDevice(config)
      .run(DEFAULT_NODE_ENV)


createManagedDeviceInNode({
  deviceUrl: 'http://192.168.1.172/onvif/device_service',
  password: '',
  username: ''
}).api.device.getUsers().subscribe(console.log)