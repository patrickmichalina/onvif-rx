import { ISystemConfig } from './config/interfaces';
import { getCapabilities, CapabilityCategory } from './api/device/get-capabilities'
import { DEFAULT_NODE_ENV } from './config/node'

const NODE_CONFIG: ISystemConfig = {
  ...DEFAULT_NODE_ENV,
  xaddrs: 'http://192.168.1.172/onvif/device_service',
}

getCapabilities(CapabilityCategory.ALL)
  .run(NODE_CONFIG)
  .subscribe(console.log, console.log)
