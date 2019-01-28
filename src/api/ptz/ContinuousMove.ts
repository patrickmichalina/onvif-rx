import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import { ReferenceToken, PTZSpeed } from "../types";

/**
 * Operation for continuous Pan/Tilt and Zoom movements. The operation is supported if the PTZNode supports at least one continuous Pan/Tilt or Zoom space. If the space argument is omitted, the default space set by the PTZConfiguration will be used.
 */
export function ContinuousMove(ProfileToken: ReferenceToken, Velocity: PTZSpeed, Timeout: string) {
    createStandardRequestBodyFromString('<tptz:ContinuousMove />')
                  .map(mapResponseXmlToJson<any>('tptz:ContinuousMoveResponse')())
                
}
