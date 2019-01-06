import { DEFAULT_NODE_ENV } from './config/node'
import { maybe } from 'typescript-monads'
import { IDeviceConfig } from './config/interfaces'
import { getNetworkProtocols } from './api/device/network'
import { getServices } from './api/device/get-services'
import { getSystemBackup, getSystemUris } from './api/device/system'
import { getUsers, createUsers, IUserLevel } from './api/device/users'
import { flatMap } from 'rxjs/operators'
import { getCapabilities } from './api/device/get-capabilities'
import { getVideoAnalyticsConfigurations } from './api/media/video-analytics'
import { getGetVideoEncoderConfigurations } from './api/media/video-encoder'
import { getVideoSourceConfigurations, getVideoSources } from './api/media/video-source'
import { getProfiles } from './api/media/profiles'
import { getStreamUri, StreamType, TransportProtocol } from './api/media/stream'

const NODE_CONFIG: IDeviceConfig = {
  system: DEFAULT_NODE_ENV,
  url: 'http://192.168.1.172/onvif/media_service',
  user: maybe({
    username: 'admin',
    password: 'Cam120cam'
  })
}

// createUsers([{
//   Password: 'Test',
//   UserLevel: IUserLevel.USER,
//   Username: 'Test'
// }])

// getStreamUri({
//   ProfileToken: 'MediaProfile000',
//   Protocol: TransportProtocol.RTSP,
//   Stream: StreamType.RTP_UNICAST
// })
getProfiles()
  .run(NODE_CONFIG)
  .subscribe(a => {
    console.log(a)
  }, console.log)
