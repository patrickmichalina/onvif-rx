import { mapResponseXmlToJson, createStandardRequestBodyFromString, XMLNS, mapResponseObsToProperty, createDeviceRequestBodyFromString } from '../request'

export enum CapabilityCategory {
  ALL = 'All',
  ANALYTICS = 'Analytics',
  DEVICE = 'Device',
  EVENTS = 'Events',
  IMAGING = 'Imaging',
  MEDIA = 'Media',
  PTZ = 'PTZ'
}

export interface IGetCapabilitiesResponse {
  readonly Capabilities: Partial<ICapabilities>
}

export interface ICapability {
  readonly XAddr: string
}

export interface IImagingCapabilities extends ICapability { }
export interface IPTZCapabilities extends ICapability { }

export interface IAnalyticsCapabilities extends ICapability {
  readonly RuleSupport: string
  readonly AnalyticsModuleSupport: string
}

export interface IStreamingCapabilities {
  readonly RTPMulticast: boolean
  readonly RTP_TCP: boolean
  readonly RTP_RTSP_TCP: boolean
}

export interface IMediaCapabilities extends ICapability {
  readonly RuleSupport: IStreamingCapabilities
  readonly Extension: any
}

export interface IEventsCapabilities extends ICapability {
  readonly WSSubscriptionPolicySupport: boolean
  readonly WSPullPointSupport: boolean
  readonly WSPausableSubscriptionManagerInterfaceSupport: boolean
}

export interface INetworkCapabilities {
  readonly IPFilter: boolean
  readonly ZeroConfiguration: boolean
  readonly IPVersion6: boolean
  readonly DynDNS: boolean
  readonly Extension: boolean
}

export interface IDeviceCapabilities extends ICapability {
  readonly Network: INetworkCapabilities
  readonly System: any
  readonly IO: any
  readonly Security: any
}

export interface ICapabilities {
  readonly Analytics: IAnalyticsCapabilities
  readonly Device: IDeviceCapabilities
  readonly Events: IEventsCapabilities
  readonly Imaging: IImagingCapabilities
  readonly Media: IMediaCapabilities
  readonly PTZ: IPTZCapabilities
  readonly Extension: any
}

const K = {
  k1: 'GetCapabilities',
  k2: 'Category'
}

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

export interface IDeviceInformation {
  /**
   * The manufactor of the device.
   */
  readonly Manufacturer: string

  /**
   * The device model.
   */
  readonly Model: string

  /**
   * The firmware version in the device.
   */
  readonly FirmwareVersion: string

  /**
   * The serial number of the device.
   */
  readonly SerialNumber: string

  /**
   * The hardware ID of the device.
   */
  readonly HardwareId: string
}

export enum ScopeDefinition {
  FIXED = 'Fixed',
  CONFIGURABLE = 'Configurable'
}

export interface IScope {
  /**
   * Indicates if the scope is fixed or configurable.
   */
  readonly ScopeDef: ScopeDefinition

  /**
   * Scope item URI.
   */
  readonly ScopeItem: string
}

export interface IScopesResponse {
  /**
   * Contains a list of URI definining the device scopes. 
   * Scope parameters can be of two types: fixed and configurable. Fixed parameters can not be altered.
   */
  readonly Scopes: ReadonlyArray<IScope>
}

export interface IServiceResponse {
  /**
   * Each Service element contains information about one service.
   */
  readonly Service: ReadonlyArray<IService>
}

export interface OnvifVersion {
  /**
   * Major version number.
   */
  readonly Major: number

  /**
   * Two digit minor version number. If major version number is less than "16", X.0.1 maps to "01" and X.2.1 maps to "21" where X stands for Major version number.
   * Otherwise, minor number is month of release, such as "06" for June.
   */
  readonly Minor: number
}

export interface IService {
  /**
   * Namespace of the service being described. This parameter allows to match the service capabilities to the service.
   * Note that only one set of capabilities is supported per namespace.
   */
  readonly Namespace: string

  /**
   * The transport addresses where the service can be reached. The scheme and IP part shall match the one used in the request (i.e. the GetServices request).
   */
  readonly XAddr: string

  /**
   * Capabilities
   */
  readonly Capabilities?: ReadonlyArray<any>

  /**
   * The version of the service (not the ONVIF core spec version).
   */
  readonly Version: OnvifVersion
}

/**
 * This method has been replaced by the more generic GetServices method. 
 * For capabilities of individual services refer to the GetServiceCapabilities methods.
 */
export const getCapabilities =
  (cat: CapabilityCategory = CapabilityCategory.ALL) =>
    createStandardRequestBodyFromString(`<${K.k1} ${XMLNS.DEVICE}><${K.k2}>${cat}</${K.k2}></${K.k1}>`)
      .map(mapResponseXmlToJson<IGetCapabilitiesResponse>('tds:GetCapabilitiesResponse')())
      .map(mapResponseObsToProperty(a => a.Capabilities))

/**
 * Returns the capabilities of the device service. The result is returned in a typed answer.
 */
export const getServiceCapabilities = () =>
  createDeviceRequestBodyFromString('GetServiceCapabilities')
    .map(mapResponseXmlToJson<ICapabilities>(`tds:Capabilities`)())

/**
 * This operation gets basic device information from the device.
 */
export const getDeviceInformation = () =>
  createDeviceRequestBodyFromString('GetDeviceInformation')
    .map(mapResponseXmlToJson<IDeviceInformation>('tds:GetDeviceInformationResponse')())

/**
 * This operation requests the scope parameters of a device. The scope parameters are 
 * used in the device discovery to match a probe message, see Section 7. The Scope parameters are of two different types:
 *     Fixed
 *     Configurable
 * Fixed scope parameters are permanent device characteristics and cannot be removed through the device 
 * management interface. The scope type is indicated in the scope list returned in the get scope parameters 
 * response. A device shall support retrieval of discovery scope parameters through the GetScopes command. 
 * As some scope parameters are mandatory, the device shall return a non-empty scope list in the response.
 */
export const getScopes = () =>
  createDeviceRequestBodyFromString('GetScopes')
    .map(mapResponseXmlToJson<IScopesResponse>('tds:GetScopesResponse')(['tds:Scopes']))
    .map(mapResponseObsToProperty(a => a.Scopes))

/**
 * Returns information about services on the device.
 */
export const getServices =
  (includeCapability = false) =>
    createStandardRequestBodyFromString(`<GetServices ${XMLNS.DEVICE}><IncludeCapability>${includeCapability ? 'true' : 'false'}</IncludeCapability></GetServices>`)
      .map(mapResponseXmlToJson<IServiceResponse>('tds:GetServicesResponse')(['tds:Service']))
      .map(mapResponseObsToProperty(a => a.Service))
