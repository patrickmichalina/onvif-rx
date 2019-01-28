import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import "../types";

/**
 * This operation reboots the device.
 */
export function SystemReboot() {
    createStandardRequestBodyFromString('<tds:SystemReboot />')
                  .map(mapResponseXmlToJson<any>('tds:SystemRebootResponse')())
                
}
