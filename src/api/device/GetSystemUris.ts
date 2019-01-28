import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import "../types";

/**
 * This operation is used to retrieve URIs from which system information may be downloaded
 *   using HTTP. URIs may be returned for the following system information:
 *   System Logs. Multiple system logs may be returned, of different types. The exact format of
 *   the system logs is outside the scope of this specification.
 *   Support Information. This consists of arbitrary device diagnostics information from a device.
 *   The exact format of the diagnostic information is outside the scope of this specification.
 *   System Backup. The received file is a backup file that can be used to restore the current
 *   device configuration at a later date. The exact format of the backup configuration file is
 *   outside the scope of this specification.
 *   If the device allows retrieval of system logs, support information or system backup data, it
 *   should make them available via HTTP GET. If it does, it shall support the GetSystemUris
 *   command.
 */
export function GetSystemUris() {
    createStandardRequestBodyFromString('<tds:GetSystemUris />')
                  .map(mapResponseXmlToJson<any>('tds:GetSystemUrisResponse')())
                
}
