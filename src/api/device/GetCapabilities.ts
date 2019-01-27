import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * This method has been replaced by the more generic GetServices method.
 *  For capabilities of individual services refer to the GetServiceCapabilities methods.
 */
export const GetCapabilities =
  () =>
    createStandardRequestBodyFromString('<tds:GetCapabilities />')
      .map(mapResponseXmlToJson<any>('tds:GetCapabilitiesResponse')())
