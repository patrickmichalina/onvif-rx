import { createStandardRequestBodyFromString, mapResponseXmlToJson, XMLNS, mapResponseObsToProperty } from '../request'

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
 * Returns information about services on the device.
 */
export const getServices =
  (includeCapability = false) =>
    createStandardRequestBodyFromString(`<GetServices ${XMLNS.DEVICE}><IncludeCapability>${includeCapability ? 'true' : 'false'}</IncludeCapability></GetServices>`)
      .map(mapResponseXmlToJson<IServiceResponse>('tds:GetServicesResponse')(['tds:Service']))
      .map(mapResponseObsToProperty(a => a.Service))
