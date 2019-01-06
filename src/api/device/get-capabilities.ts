import { mapResponseXmlToJson, createStandardRequestBodyFromString, XMLNS, mapResponseObsToProperty } from '../request'

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

/**
 * This method has been replaced by the more generic GetServices method. 
 * For capabilities of individual services refer to the GetServiceCapabilities methods.
 */
export const getCapabilities =
  (cat: CapabilityCategory = CapabilityCategory.ALL) =>
    createStandardRequestBodyFromString(`<${K.k1} ${XMLNS.DEVICE}><${K.k2}>${cat}</${K.k2}></${K.k1}>`)
      .map(mapResponseXmlToJson<IGetCapabilitiesResponse>('tds:GetCapabilitiesResponse')())
      .map(mapResponseObsToProperty(a => a.Capabilities))