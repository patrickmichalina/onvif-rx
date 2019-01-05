import { createUserToken } from './auth'
import { DEFAULT_NODE_ENV } from './config/node'
import { maybe } from 'typescript-monads'

// export * from api

// import { ISystemConfig } from './config/interfaces'
// import { DEFAULT_NODE_ENV } from './config/node'
// import { getServiceCapabilities } from './api/device/get-service-capabilities'
// import { getCapabilities } from './api/device/get-capabilities'
// import { getDeviceSystemDateAndTime } from './api/device/get-system-date-and-time'
// import { getDNS } from './api/device/get-dns'
// import { onvifDigest, nonce, createUserToken } from './auth'

// const NODE_CONFIG: ISystemConfig = {
//   ...DEFAULT_NODE_ENV,
//   xaddrs: 'http://192.168.1.172/onvif/device_service',
//   password: '',
//   username: 'admin'
// }

const digest = createUserToken().run({
  system: DEFAULT_NODE_ENV,
  url: 'http://192.168.1.172/onvif/device_service',
  user: maybe({
    username: 'admin',
    password: 'Cam120Cam'
  })
})
digest.tapSome(console.log)

// // getDNS()
// //   .run(NODE_CONFIG)
// //   .subscribe(a => {
// //     console.log(a)
// //   }, console.log)
