import { mapResponseXmlToJson, createDeviceRequestBodyFromString } from '../request'

export interface ICapabilities {
  /**
   * Security capabilities.
   */
  readonly Security: ISecurityCapabilities

  /**
   * Network capabilities.
   */
  readonly Network: INetworkCapabilities

  /**
   * System capabilities.
   */
  readonly System: ISystemCapabilities

  /**
   * Capabilities that do not fit in any of the other categories.
   */
  readonly Misc?: IMiscCapabilities
}

export interface IMiscCapabilities {
  /**
   * Lists of commands supported by SendAuxiliaryCommand.
   */
  readonly AuxiliaryCommands: any
}

export interface ISecurityCapabilities {
  /**
   * Maximum number of characters supported for the password by CreateUsers and SetUser.
   */
  readonly MaxPasswordLength: number

  /**
   * Maximum number of characters supported for the username by CreateUsers.
   */
  readonly MaxUserNameLength: number

  /**
   * The maximum number of users that the device supports.
   */
  readonly MaxUsers: number

  /**
   * Indicates support for WS-Security REL token.
   */
  readonly RELToken: boolean

  /**
   * EAP Methods supported by the device. The int values refer to the IANA EAP Registry.
   */
  readonly SupportedEAPMethods: any

  /**
   * Indicates support for WS over HTTP digest authenticated communication layer.
   */
  readonly HttpDigest: boolean

  /**
   * Indicates support for WS-Security Username token.
   */
  readonly UsernameToken: boolean

  /**
   * Indicates support for WS-Security Kerberos token.
   */
  readonly KerberosToken: boolean

  /**
   * Indicates support for WS-Security SAML token.
   */
  readonly SAMLToken: boolean

  /**
   * Indicates support for WS-Security X.509 token.
   */
  readonly X509Token: boolean

  /**
   * Indicates support for remote user configuration. Used when accessing another device.
   */
  readonly RemoteUserHandling: boolean

  /**
   * Indicates support for IEEE 802.1X configuration.
   */
  readonly Dot1X: boolean

  /**
   * Indicates support for the ONVIF default access policy.
   */
  readonly DefaultAccessPolicy: boolean

  /**
   * Indicates support for access policy configuration.
   */
  readonly AccessPolicyConfig: boolean

  /**
   * Indicates support for onboard key generation.
   */
  readonly OnboardKeyGeneration: boolean

  /**
   * Indicates support for TLS 1.0.
   */
  readonly TLS10: boolean

  /**
   * Indicates support for TLS 1.1.
   */
  readonly TLS11: boolean

  /**
   * Indicates support for TLS 1.2.
   */
  readonly TLS12: boolean
}

export interface INetworkCapabilities {
  /**
   * Maximum number of NTP servers supported by the devices SetNTP command.
   */
  readonly NTP: string

  /**
   * Indicates support for retrieval of hostname from DHCP.
   */
  readonly HostnameFromDHCP: boolean

  /**
   * Indicates support for IEEE 802.11 configuration.
   */
  readonly Dot11Configuration: boolean

  /**
   * Indicates the maximum number of Dot1X configurations supported by the device
   */
  readonly Dot1XConfigurations: number

  /**
   * Indicates support for dynamic DNS configuration.
   */
  readonly DynDNS: boolean

  /**
   * Indicates support for IPv6.
   */
  readonly IPVersion6: boolean

  /**
   * Indicates support for zeroconf.
   */
  readonly ZeroConfiguration: boolean

  /**
   * Indicates support for IP filtering.
   */
  readonly IPFilter: boolean

  /**
   * Indicates support for Stateful IPv6 DHCP.
   */
  readonly DHCPv6: boolean
}

export interface ISystemCapabilities {
  /**
   * Indicates support for WS Discovery resolve requests.
   */
  readonly DiscoveryResolve: boolean

  /**
   * Indicates support for WS-Discovery Bye.
   */
  readonly DiscoveryBye: boolean

  /**
   * Indicates support for remote discovery.
   */
  readonly RemoteDiscovery: boolean

  /**
   * Indicates support for system backup through MTOM.
   */
  readonly SystemBackup: boolean

  /**
   * Indicates support for retrieval of system logging through MTOM.
   */
  readonly SystemLogging: boolean

  /**
   * Indicates support for firmware upgrade through MTOM.
   */
  readonly FirmwareUpgrade: boolean

  /**
   * Indicates support for firmware upgrade through HTTP.
   */
  readonly HttpFirmwareUpgrade: boolean

  /**
   * Indicates support for system backup through HTTP.
   */
  readonly HttpSystemBackup: boolean

  /**
   * Indicates support for retrieval of system logging through HTTP.
   */
  readonly HTTPSystemLogging: boolean

  /**
   * Indicates support for retrieving support information through HTTP.
   */
  readonly HTTPSupportInformation: boolean

  /**
   * Indicates support for storage configuration interfaces.
   */
  readonly StorageConfiguration: boolean

  /**
   * Indicates maximum number of storage configurations supported.
   */
  readonly MaxStorageConfigurations: number

  /**
   * If present signals support for geo location. The value signals the supported number of entries.
   */
  readonly GeoLocationEntries: number

  /**
   * List of supported automatic GeoLocation adjustment supported by the device. Valid items are defined by tds:AutoGeoMode.
   */
  readonly AutoGeo: any

  /**
   * Enumerates the supported StorageTypes, see tds:StorageType.
   */
  readonly StorageTypesSupported: any
}

/**
 * Returns the capabilities of the device service. The result is returned in a typed answer.
 */
export const getServiceCapabilities = () =>
  createDeviceRequestBodyFromString('GetServiceCapabilities')
    .map(mapResponseXmlToJson<ICapabilities>(`tds:Capabilities`)())
