import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * Operation to stop ongoing pan, tilt and zoom movements of absolute relative and continuous type.
 * If no stop argument for pan, tilt or zoom is set, the device will stop all ongoing pan, tilt and zoom movements.
 */
export const Stop =
  () =>
    createStandardRequestBodyFromString('<tptz:Stop />')
      .map(mapResponseXmlToJson<any>('tptz:StopResponse')())
