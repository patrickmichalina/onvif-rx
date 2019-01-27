import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * This operation gets the discovery mode of a device. See Section 7.2 for the definition of the
 * different device discovery modes. The device shall support retrieval of the discovery mode
 * setting through the GetDiscoveryMode command.
 */
export const GetDiscoveryMode =
  () =>
    createStandardRequestBodyFromString('<tds:GetDiscoveryMode />')
      .map(mapResponseXmlToJson<any>('tds:GetDiscoveryModeResponse')())
