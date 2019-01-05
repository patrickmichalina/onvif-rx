import { DEFAULT_NODE_ENV } from './config/node'
import { maybe } from 'typescript-monads'
import { getDNS } from './api/device/get-dns'
import { ISystemConfig, IDeviceConfig } from './config/interfaces'
import { getCapabilities } from './api/device/get-capabilities'
import { getDeviceInformation } from './api/device/get-device-information'
import { getServiceCapabilities } from './api/device/get-service-capabilities'
import { getDeviceDiscoveryMode } from './api/device/get-discovery-mode'
import { getDynamicDNS } from './api/device/get-dynamic-dns'
import { getHostname } from './api/device/get-hostname'
import { getNetworkInterfaces } from './api/device/get-network-interfaces'
import { getNetworkProtocols } from './api/device/get-network-protocols'
import { getWsdlUrl } from './api/device/get-wsdl-url'
import { getSystemLog } from './api/device/system'
import { getScopes } from './api/device/get-scopes'

const NODE_CONFIG: IDeviceConfig = {
  system: DEFAULT_NODE_ENV,
  url: 'http://192.168.1.172/onvif/device_service',
  user: maybe({
    username: 'admin',
    password: 'Cam120cam'
  })
}

getServiceCapabilities()
  .run(NODE_CONFIG)
  .subscribe(a => {
    console.log(a)
  }, console.log)
