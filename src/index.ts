import { createUserToken } from './auth'
import { DEFAULT_NODE_ENV } from './config/node'
import { maybe } from 'typescript-monads'
import { getDNS } from './api/device/get-dns'
import { ISystemConfig, IDeviceConfig } from './config/interfaces'
import { getDeviceSystemDateAndTime } from './api/device/get-system-date-and-time'
import { getCapabilities } from './api/device/get-capabilities'
import { getDeviceInformation } from './api/device/get-device-information'
import { getServiceCapabilities } from './api/device/get-service-capabilities'

const NODE_CONFIG: IDeviceConfig = {
  system: DEFAULT_NODE_ENV,
  url: 'http://192.168.1.172/onvif/device_service',
  user: maybe({
    username: 'admin',
    password: 'Cam120cam'
  })
}

// const digest = createUserToken().run({
//   system: DEFAULT_NODE_ENV,
//   url: 'http://192.168.1.172/onvif/device_service',
//   user: maybe({
//     username: 'admin',
//     password: 'Cam120Cam'
//   })
// })
// digest.tapSome(console.log)

getDNS()
  .run(NODE_CONFIG)
  .subscribe(a => {
    console.log(a)
  }, console.log)
