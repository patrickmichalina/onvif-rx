import { soapShell, XMLNS } from "../../xml"
import { createStandardRequestBody, drillXml } from "../request"
import { map } from "rxjs/operators"

export enum CapabilityCategory {
  ALL = 'All',
  ANALYTICS = 'Analytics',
  DEVICE = 'Device',
  EVENTS = 'Events',
  IMAGING = 'Imaging',
  MEDIA = 'Media',
  PTZ = 'PTZ'
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

const createGetCapabilitiesBody =
  (cat: CapabilityCategory = CapabilityCategory.ALL) =>
    soapShell(`<GetCapabilities ${XMLNS.DEVICE}><Category>${cat}</Category></GetCapabilities>`)

/**
 * This method has been replaced by the more generic GetServices method. 
 * For capabilities of individual services refer to the GetServiceCapabilities methods.
 */
export const getCapabilities =
  (cat: CapabilityCategory) =>
    createStandardRequestBody(createGetCapabilitiesBody(cat))
      .map(res => res.pipe(
        map<Document, Partial<ICapabilities>>(doc => {
          return ['Analytics', 'Device', 'Events', 'Imaging', 'Media', 'PTZ', 'Extension']
            .reduce((acc, curr) => {
              return {
                ...acc,
                [curr]: drillXml(doc)(`tt:${curr}`).valueOrUndefined()
              }
            }, {})
        })
      ))