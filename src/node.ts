import { IDeviceInitConfig, createManagedDevice } from '.'
import { DEFAULT_NODE_ENV } from './config/node'
import { maybe } from 'typescript-monads'
// import { GetProfiles } from './api/media/functions'
// import { GetAccessPolicy } from './api/device/functions'

export * from './browser'
export * from './index'

export const createManagedDeviceInNode =
  (config: IDeviceInitConfig) =>
    createManagedDevice(config)
      .run(DEFAULT_NODE_ENV)

// GetProfiles().run({
//   system: DEFAULT_NODE_ENV,
//   deviceUrl: 'http://192.168.1.172/onvif/device_service',
//   user: maybe({
//     username: 'admin',
//     password: 'admin'
//   })
// }).subscribe(res => {
//   res.match({
//     ok: console.log,
//     fail: err => console.log(err.status, err.statusMessage)
//   })
// })

// createManagedDeviceInNode({
//   deviceUrl: ''
// }).api.media