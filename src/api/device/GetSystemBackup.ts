import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import "../types";

/**
 * This operation is retrieves system backup configuration file(s) from a device. The device
 *   should support return of back up configuration file(s) through the GetSystemBackup command.
 *   The backup is returned with reference to a name and mime-type together with binary data.
 *   The exact format of the backup configuration files is outside the scope of this standard.
 */
export function GetSystemBackup() {
    createStandardRequestBodyFromString('<tds:GetSystemBackup />')
                  .map(mapResponseXmlToJson<any>('tds:GetSystemBackupResponse')())
                
}
