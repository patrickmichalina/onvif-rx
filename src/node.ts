import { IDeviceInitConfig, createManagedDevice } from '.'
import { DEFAULT_NODE_ENV } from './config/node'

export * from './browser'
export * from './index'

export const createManagedDeviceInNode =
  (config: IDeviceInitConfig) =>
    createManagedDevice(config)
      .run(DEFAULT_NODE_ENV)



// createManagedDeviceInNode({
//   deviceUrl: 'http://192.168.1.143:80/onvif/device_service',
//   password: '123456',
//   username: 'admin'
// }).api.device.getHostname().toPromise()
//   .then(console.log)
//   .catch(console.log)


createManagedDeviceInNode({
  deviceUrl: 'http://192.168.1.172/onvif/device_service',
  password: 'admin',
  username: 'admin'
}).api.device.getDeviceInformation().toPromise()
  .then(console.log)
  .catch(console.log)
