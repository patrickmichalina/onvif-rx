import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * This operation requests the scope parameters of a device. The scope parameters are used in
 * the device discovery to match a probe message, see Section 7. The Scope parameters are of
 * two different types: 
 * Fixed
 * Configurable
 * 
 * Fixed scope parameters are permanent device characteristics and cannot be removed through the device management interface. 
 * The scope type is indicated in the scope list returned in the get scope parameters response. A device shall support 
 * retrieval of discovery scope parameters through the GetScopes command. As some scope parameters are mandatory, 
 * the device shall return a non-empty scope list in the response.
 */
export const GetScopes =
  () =>
    createStandardRequestBodyFromString('<tds:GetScopes />')
      .map(mapResponseXmlToJson<any>('tds:GetScopesResponse')())
