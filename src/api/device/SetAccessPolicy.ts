import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * This command sets the device access security policy (for more details on the access security
 * policy see the Get command). If the device supports access policy settings
 * based on WS-Security authentication, then the device shall support this command.
 */
export const SetAccessPolicy =
  () =>
    createStandardRequestBodyFromString('<tds:SetAccessPolicy />')
      .map(mapResponseXmlToJson<any>('tds:SetAccessPolicyResponse')())
