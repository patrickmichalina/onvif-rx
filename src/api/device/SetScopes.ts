import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * This operation sets the scope parameters of a device. The scope parameters are used in the
 * device discovery to match a probe message.
 * This operation replaces all existing configurable scope parameters (not fixed parameters). If
 * this shall be avoided, one should use the scope add command instead. The device shall
 * support configuration of discovery scope parameters through the SetScopes command.
 */
export const SetScopes =
  () =>
    createStandardRequestBodyFromString('<tds:SetScopes />')
      .map(mapResponseXmlToJson<any>('tds:SetScopesResponse')())
