import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * Operation for Relative Pan/Tilt and Zoom Move. The operation is supported if the PTZNode supports at least one relative Pan/Tilt or Zoom space. 
 * The speed argument is optional. If an x/y speed value is given it is up to the device to either use 
 * the x value as absolute resoluting speed vector or to map x and y to the component speed. 
 * If the speed argument is omitted, the default speed set by the PTZConfiguration will be used.
 * 
 */
export const RelativeMove =
  () =>
    createStandardRequestBodyFromString('<tptz:RelativeMove />')
      .map(mapResponseXmlToJson<any>('tptz:RelativeMoveResponse')())
