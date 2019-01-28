import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../soap/request";
import { StreamSetup, ReferenceToken, ReplayConfiguration } from "./types";

export namespace Replay {
    /**
     * Returns the capabilities of the replay service. The result is returned in a typed answer.
     */
    export function GetServiceCapabilities() {
        return createStandardRequestBodyFromString('<trp:GetServiceCapabilities />')
                        .map(mapResponseXmlToJson<any>('trp:GetServiceCapabilitiesResponse')())
                      
    }

    /**
     * 
     *   Requests a URI that can be used to initiate playback of a recorded stream
     *   using RTSP as the control protocol. The URI is valid only as it is
     *   specified in the response.
     *   This operation is mandatory.
     *   
     */
    export function GetReplayUri(StreamSetup: StreamSetup, RecordingToken: ReferenceToken) {
        return createStandardRequestBodyFromString('<trp:GetReplayUri />')
                        .map(mapResponseXmlToJson<any>('trp:GetReplayUriResponse')())
                      
    }

    /**
     * 
     *   Returns the current configuration of the replay service.
     *   This operation is mandatory.
     *   
     */
    export function GetReplayConfiguration() {
        return createStandardRequestBodyFromString('<trp:GetReplayConfiguration />')
                        .map(mapResponseXmlToJson<any>('trp:GetReplayConfigurationResponse')())
                      
    }

    /**
     * 
     *   Changes the current configuration of the replay service.
     *   This operation is mandatory.
     *   
     */
    export function SetReplayConfiguration(Configuration: ReplayConfiguration) {
        return createStandardRequestBodyFromString('<trp:SetReplayConfiguration />')
                        .map(mapResponseXmlToJson<any>('trp:SetReplayConfigurationResponse')())
                      
    }
}
