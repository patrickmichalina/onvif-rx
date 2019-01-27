import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * This operation deletes an IP filter address from a device. If the device supports device access
 * control based on IP filtering rules (denied or accepted ranges of IP addresses), the device
 * shall support deletion of IP filtering addresses through the RemoveIPAddressFilter command.
 */
export const RemoveIPAddressFilter =
  () =>
    createStandardRequestBodyFromString('<tds:RemoveIPAddressFilter />')
      .map(mapResponseXmlToJson<any>('tds:RemoveIPAddressFilterResponse')())
