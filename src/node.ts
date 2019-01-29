import { IDeviceInitConfig, createManagedDevice } from '.'
import { DEFAULT_NODE_ENV } from './config/node'
import { CapabilityCategory, UserLevel } from './api/types'

export * from './browser'
export * from './index'

export const createManagedDeviceInNode =
  (config: IDeviceInitConfig) =>
    createManagedDevice(config)
      .run(DEFAULT_NODE_ENV)



const device = createManagedDeviceInNode({
  deviceUrl: 'http://192.168.1.172/onvif/device_service',
  password: 'admin',
  username: 'admin'
})

device.api.Device.GetNetworkProtocols()
  .toPromise()
  .then(res => {
    res.match({
      ok: console.log,
      fail: r => console.log(r.status, r.statusMessage)
    })
  })

device.api.Device.GetUsers()
  .toPromise()
  .then(res => {
    res.match({
      ok: console.log,
      fail: r => console.log(r.status, r.statusMessage)
    })
  })