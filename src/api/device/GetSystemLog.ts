import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import { SystemLogType } from "../types";

/**
 * This operation gets a system log from the device. The exact format of the system logs is outside the scope of this standard.
 */
export function GetSystemLog(LogType: SystemLogType) {
    createStandardRequestBodyFromString('<tds:GetSystemLog />')
                  .map(mapResponseXmlToJson<any>('tds:GetSystemLogResponse')())
                
}
