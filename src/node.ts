import { IDeviceInitConfig, createManagedDevice } from '.'
import { DEFAULT_NODE_ENV } from './config/node'

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


device.api.Media.GetProfiles().toPromise()
  .then(res => {
    res.match({
      fail: r => console.log(r.statusMessage),
      ok: r => console.log(r.json.Profiles[0])
    })
  })