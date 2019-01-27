import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * Operation to move pan,tilt or zoom to a absolute destination. 
 * The speed argument is optional. If an x/y speed value is given it is up to the device to either use 
 * the x value as absolute resoluting speed vector or to map x and y to the component speed. 
 * If the speed argument is omitted, the default speed set by the PTZConfiguration will be used.
 * 
 */
export const AbsoluteMove =
  () =>
    createStandardRequestBodyFromString('<tptz:AbsoluteMove />')
      .map(mapResponseXmlToJson<any>('tptz:AbsoluteMoveResponse')())
