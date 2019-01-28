import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import { ReferenceToken, AuxiliaryData } from "../types";

/**
 * 
 *           Operation to send auxiliary commands to the PTZ device
 *           mapped by the PTZNode in the selected profile. The
 *           operation is supported
 *           if the AuxiliarySupported element of the PTZNode is true
 *         
 */
export function SendAuxiliaryCommand(ProfileToken: ReferenceToken, AuxiliaryData: AuxiliaryData) {
    createStandardRequestBodyFromString('<tptz:SendAuxiliaryCommand />')
                  .map(mapResponseXmlToJson<any>('tptz:SendAuxiliaryCommandResponse')())
                
}
