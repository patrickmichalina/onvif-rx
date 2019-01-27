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

device.api.ptz.AbsoluteMove()
  .subscribe((res: any) => {
    res.match({
      ok: console.log,
      fail: (r: any) => console.log(r.status, r.statusMessage)
    })
  })