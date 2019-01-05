import 'typescript-monads'

import { DEFAULT_NODE_ENV } from './config/node'
import { maybe } from 'typescript-monads'
import { ISystemConfig, IDeviceConfig } from './config/interfaces'
// export * from './api/device/get-capabilities'
// export * from './api/device/get-device-information'
// export * from './api/device/get-discovery-mode'
// export * from './api/device/get-wsdl-url'
// export * from './api/device/system'
import { getScopes } from './api/device/get-scopes'

const NODE_CONFIG: IDeviceConfig = {
  system: DEFAULT_NODE_ENV,
  url: 'http://192.168.1.172/onvif/device_service',
  user: maybe({
    username: 'admin',
    password: 'Cam120cam'
  })
}

getScopes()
  .run(NODE_CONFIG)
  .subscribe(a => {
    console.log(a)
  }, console.log)
