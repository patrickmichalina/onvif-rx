import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * Operation for continuous Pan/Tilt and Zoom movements. The operation is supported if the PTZNode supports at least one continuous Pan/Tilt or Zoom space. If the space argument is omitted, the default space set by the PTZConfiguration will be used.
 */
export const ContinuousMove =
  () =>
    createStandardRequestBodyFromString('<tptz:ContinuousMove />')
      .map(mapResponseXmlToJson<any>('tptz:ContinuousMoveResponse')())
