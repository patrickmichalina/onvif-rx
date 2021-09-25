import { createStandardRequestBodyFromString, mapResponseXmlToJson, generateRequestElements, mapResponseObsToProperty } from "../soap/request";
import { IDeviceConfig } from "../config";
import { StreamSetup, ReferenceToken, ReplayConfiguration } from "./types";

export class ONVIFReplay {
    constructor(private config: IDeviceConfig) {
    }

    /**
     * Returns the capabilities of the replay service. The result is returned in a typed answer.
     */
    static GetServiceCapabilities() {
        return createStandardRequestBodyFromString(generateRequestElements('trp:GetServiceCapabilities')({}))
                        .map(mapResponseXmlToJson<any>('trp:GetServiceCapabilitiesResponse'))
                      
    }

    /**
     * 
     *   Requests a URI that can be used to initiate playback of a recorded stream
     *   using RTSP as the control protocol. The URI is valid only as it is
     *   specified in the response.
     *   A device supporting the Replay Service shall support the GetReplayUri command.
     *   
     */
    static GetReplayUri(StreamSetup: StreamSetup, RecordingToken: ReferenceToken) {
        return createStandardRequestBodyFromString(generateRequestElements('trp:GetReplayUri')({trp_StreamSetup:StreamSetup,trp_RecordingToken:RecordingToken}))
                        .map(mapResponseXmlToJson<any>('trp:GetReplayUriResponse'))
                      
    }

    /**
     * 
     *   Returns the current configuration of the replay service.
     *   This operation is mandatory.
     *   
     */
    static GetReplayConfiguration() {
        return createStandardRequestBodyFromString(generateRequestElements('trp:GetReplayConfiguration')({}))
                        .map(mapResponseXmlToJson<any>('trp:GetReplayConfigurationResponse'))
                      
    }

    /**
     * 
     *   Changes the current configuration of the replay service.
     *   This operation is mandatory.
     *   
     */
    static SetReplayConfiguration(Configuration: ReplayConfiguration) {
        return createStandardRequestBodyFromString(generateRequestElements('trp:SetReplayConfiguration')({trp_Configuration:Configuration}))
                        .map(mapResponseXmlToJson<any>('trp:SetReplayConfigurationResponse'))
                      
    }

    /**
     * Returns the capabilities of the replay service. The result is returned in a typed answer.
     */
    GetServiceCapabilities() {
        return ONVIFReplay.GetServiceCapabilities().run(this.config)
    }

    /**
     * 
     *   Requests a URI that can be used to initiate playback of a recorded stream
     *   using RTSP as the control protocol. The URI is valid only as it is
     *   specified in the response.
     *   A device supporting the Replay Service shall support the GetReplayUri command.
     *   
     */
    GetReplayUri(StreamSetup: StreamSetup, RecordingToken: ReferenceToken) {
        return ONVIFReplay.GetReplayUri(StreamSetup,RecordingToken).run(this.config)
    }

    /**
     * 
     *   Returns the current configuration of the replay service.
     *   This operation is mandatory.
     *   
     */
    GetReplayConfiguration() {
        return ONVIFReplay.GetReplayConfiguration().run(this.config)
    }

    /**
     * 
     *   Changes the current configuration of the replay service.
     *   This operation is mandatory.
     *   
     */
    SetReplayConfiguration(Configuration: ReplayConfiguration) {
        return ONVIFReplay.SetReplayConfiguration(Configuration).run(this.config)
    }
}
