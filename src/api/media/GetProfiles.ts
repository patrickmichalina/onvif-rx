import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import "../types";

/**
 * Any endpoint can ask for the existing media profiles of a device using the GetProfiles
 *   command. Pre-configured or dynamically configured profiles can be retrieved using this
 *   command. This command lists all configured profiles in a device. The client does not need to
 *   know the media profile in order to use the command.
 */
export function GetProfiles() {
    createStandardRequestBodyFromString('<trt:GetProfiles />')
                  .map(mapResponseXmlToJson<any>('trt:GetProfilesResponse')())
                
}
