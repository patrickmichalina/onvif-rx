import { IDeviceInitConfig, createManagedDevice } from '.'
import { DEFAULT_NODE_ENV } from './config/node'
import { StreamType, TransportProtocol } from './api/types'

export * from './browser'
export * from './index'

export const createManagedDeviceInNode =
  (config: IDeviceInitConfig) =>
    createManagedDevice(config)
      .run(DEFAULT_NODE_ENV)


createManagedDeviceInNode({
  deviceUrl: 'http://192.168.1.172/onvif/device_service',
  password: 'admin',
  username: 'admin'
})
.api.Media.GetStreamUri({
  Stream: StreamType['RTP-Unicast'],
  Transport: {
    Protocol: TransportProtocol.UDP,
  }
}, 'MediaProfile001')
.subscribe(res => {
  console.log(res.unwrap().json)
})