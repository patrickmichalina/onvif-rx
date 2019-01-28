import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import { ReferenceToken } from "../types";

/**
 * A client uses the GetSnapshotUri command to obtain a JPEG snapshot from the
 *   device. The returned URI shall remain valid indefinitely even if the profile is changed. The
 *   ValidUntilConnect, ValidUntilReboot and Timeout Parameter shall be set accordingly
 *   (ValidUntilConnect=false, ValidUntilReboot=false, timeout=PT0S). The URI can be used for
 *   acquiring a JPEG image through a HTTP GET operation. The image encoding will always be
 *   JPEG regardless of the encoding setting in the media profile. The Jpeg settings
 *   (like resolution or quality) may be taken from the profile if suitable. The provided
 *   image will be updated automatically and independent from calls to GetSnapshotUri.
 */
export function GetSnapshotUri(ProfileToken: ReferenceToken) {
    createStandardRequestBodyFromString('<trt:GetSnapshotUri />')
                  .map(mapResponseXmlToJson<any>('trt:GetSnapshotUriResponse')())
                
}
