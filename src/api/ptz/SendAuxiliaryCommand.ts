import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * 
 *         Operation to send auxiliary commands to the PTZ device
 *         mapped by the PTZNode in the selected profile. The
 *         operation is supported
 *         if the AuxiliarySupported element of the PTZNode is true
 *       
 */
export const SendAuxiliaryCommand =
  () =>
    createStandardRequestBodyFromString('<tptz:SendAuxiliaryCommand />')
      .map(mapResponseXmlToJson<any>('tptz:SendAuxiliaryCommandResponse')())
