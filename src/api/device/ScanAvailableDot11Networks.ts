import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * This operation returns a lists of the wireless networks in range of the device. A device should
 * support this operation.
 */
export const ScanAvailableDot11Networks =
  () =>
    createStandardRequestBodyFromString('<tds:ScanAvailableDot11Networks />')
      .map(mapResponseXmlToJson<any>('tds:ScanAvailableDot11NetworksResponse')())
