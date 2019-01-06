import { createDeviceRequestBodyFromString, mapResponseXmlToJson } from '../request'
import { map } from 'rxjs/operators'

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
    .map(a => a.pipe(map(b => b.Scopes)))
