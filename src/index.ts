import { createUserToken } from './auth'
import { DEFAULT_NODE_ENV } from './config/node'
import { maybe } from 'typescript-monads'
import { getDNS } from './api/device/get-dns'
import { ISystemConfig, IDeviceConfig } from './config/interfaces'
import { getDeviceSystemDateAndTime } from './api/device/get-system-date-and-time'

// import { ISystemConfig } from './config/interfaces'
// import { DEFAULT_NODE_ENV } from './config/node'
// export { getServiceCapabilities } from './api/device/get-service-capabilities'
// import { getCapabilities } from './api/device/get-capabilities'
// import { getDeviceSystemDateAndTime } from './api/device/get-system-date-and-time'
// import { onvifDigest, nonce, createUserToken } from './auth'

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
