import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import { ReferenceToken } from "../types";

/**
 * Synchronization points allow clients to decode and correctly use all data after the
 *   synchronization point.
 *   For example, if a video stream is configured with a large I-frame distance and a client loses a
 *   single packet, the client does not display video until the next I-frame is transmitted. In such
 *   cases, the client can request a Synchronization Point which enforces the device to add an I-Frame as soon as possible. Clients can request Synchronization Points for profiles. The device
 *   shall add synchronization points for all streams associated with this profile.
 *   Similarly, a synchronization point is used to get an update on full PTZ or event status through
 *   the metadata stream.
 *   If a video stream is associated with the profile, an I-frame shall be added to this video stream.
 *   If a PTZ metadata stream is associated to the profile,
 *   the PTZ position shall be repeated within the metadata stream.
 */
export function SetSynchronizationPoint(ProfileToken: ReferenceToken) {
    createStandardRequestBodyFromString('<trt:SetSynchronizationPoint />')
                  .map(mapResponseXmlToJson<any>('trt:SetSynchronizationPointResponse')())
                
}
