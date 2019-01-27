import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * This operation sets the remote discovery mode of operation of a device. See Section 7.4 for
 * the definition of remote discovery remote extensions. A device that supports remote discovery
 * shall support configuration of the discovery mode setting through the
 * SetRemoteDiscoveryMode command.
 */
export const SetRemoteDiscoveryMode =
  () =>
    createStandardRequestBodyFromString('<tds:SetRemoteDiscoveryMode />')
      .map(mapResponseXmlToJson<any>('tds:SetRemoteDiscoveryModeResponse')())
