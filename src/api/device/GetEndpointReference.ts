import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * A client can ask for the device service endpoint reference address property that can be used
 * to derive the password equivalent for remote user operation. The device shall support the
 * GetEndpointReference command returning the address property of the device service
 * endpoint reference.
 */
export const GetEndpointReference =
  () =>
    createStandardRequestBodyFromString('<tds:GetEndpointReference />')
      .map(mapResponseXmlToJson<any>('tds:GetEndpointReferenceResponse')())
