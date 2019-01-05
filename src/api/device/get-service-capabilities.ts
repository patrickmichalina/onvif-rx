import { soapShell, XMLNS } from '../../xml'
import { createStandardRequestBody, startingAtNode } from '../request'
import { map } from 'rxjs/operators'

export interface Capabilities {
  readonly security: SecurityCapabilities
  readonly network: NetworkCapabilities
  readonly system: SystemCapabilities
}

export interface SecurityCapabilities {
  readonly maxPasswordLength: number
  readonly maxUserNameLength: number
  readonly maxUsers: number
  readonly relToken: boolean
  readonly httpDigest: boolean
  readonly usernameToken: boolean
  readonly kerberosToken: boolean
  readonly samlToken: boolean
  readonly x509Token: boolean
  readonly RemoteUserHandling: boolean
  readonly Dot1X: boolean
  readonly DefaultAccessPolicy: boolean
  readonly AccessPolicyConfig: boolean
  readonly OnboardKeyGeneration: boolean
  readonly tls10: boolean
  readonly tls11: boolean
  readonly tls12: boolean
}

export interface NetworkCapabilities {
  readonly ntp: string
  readonly hostnameFromDHCP: boolean
  readonly Dot11Configuration: boolean
  readonly DynDNS: boolean
  readonly IPVersion6: boolean
  readonly ZeroConfiguration: boolean
  readonly IPFilter: boolean
}

export interface SystemCapabilities {
  readonly HTTPSupportInformation: boolean
  readonly HTTPSystemLogging: boolean
  readonly HttpSystemBackup: boolean
  readonly HttpFirmwareUpgrade: boolean
  readonly FirmwareUpgrade: boolean
  readonly SystemLogging: boolean
  readonly SystemBackup: boolean
  readonly RemoteDiscovery: boolean
  readonly DiscoveryBye: boolean
  readonly DiscoveryResolve: boolean
}

const createGetDeviceServiceCapabilitiesBody = () =>
  soapShell(`<GetServiceCapabilities ${XMLNS.DEVICE} />`)()

/**
 * Returns the capabilities of the device service. The result is returned in a typed answer.
 */
export const getServiceCapabilities = () =>
  createStandardRequestBody(createGetDeviceServiceCapabilitiesBody())
    .map(res => res.pipe(
      map<Document, Partial<any>>(startingAtNode('tds:Capabilities'))
    ))
