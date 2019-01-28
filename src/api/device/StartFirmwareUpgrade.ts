import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import "../types";

/**
 * This operation initiates a firmware upgrade using the HTTP POST mechanism. The response
 *   to the command includes an HTTP URL to which the upgrade file may be uploaded. The
 *   actual upgrade takes place as soon as the HTTP POST operation has completed. The device
 *   should support firmware upgrade through the StartFirmwareUpgrade command. The exact
 *   format of the firmware data is outside the scope of this specification.
 *   Firmware upgrade over HTTP may be achieved using the following steps:
 *   Client calls StartFirmwareUpgrade.
 *   Server responds with upload URI and optional delay value.
 *   Client waits for delay duration if specified by server.
 *   Client transmits the firmware image to the upload URI using HTTP POST.
 *   Server reprograms itself using the uploaded image, then reboots.
 *   
 *   If the firmware upgrade fails because the upgrade file was invalid, the HTTP POST response
 *   shall be “415 Unsupported Media Type”. If the firmware upgrade fails due to an error at the
 *   device, the HTTP POST response shall be “500 Internal Server Error”.
 *   The value of the Content-Type header in the HTTP POST request shall be “application/octetstream”.
 */
export function StartFirmwareUpgrade() {
    createStandardRequestBodyFromString('<tds:StartFirmwareUpgrade />')
                  .map(mapResponseXmlToJson<any>('tds:StartFirmwareUpgradeResponse')())
                
}
