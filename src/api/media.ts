import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../soap/request";
import { Name, ReferenceToken, VideoSourceConfiguration, VideoEncoderConfiguration, AudioSourceConfiguration, AudioEncoderConfiguration, VideoAnalyticsConfiguration, MetadataConfiguration, AudioOutputConfiguration, AudioDecoderConfiguration, StreamSetup, OSDConfiguration } from "./types";

export namespace Media {
    /**
     * Returns the capabilities of the media service. The result is returned in a typed answer.
     */
    export function GetServiceCapabilities() {
        return createStandardRequestBodyFromString('<trt:GetServiceCapabilities />')
                        .map(mapResponseXmlToJson<any>('trt:GetServiceCapabilitiesResponse')())
                      
    }

    /**
     * This command lists all available physical video inputs of the device.
     */
    export function GetVideoSources() {
        return createStandardRequestBodyFromString('<trt:GetVideoSources />')
                        .map(mapResponseXmlToJson<any>('trt:GetVideoSourcesResponse')())
                      
    }

    /**
     * This command lists all available physical audio inputs of the device.
     */
    export function GetAudioSources() {
        return createStandardRequestBodyFromString('<trt:GetAudioSources />')
                        .map(mapResponseXmlToJson<any>('trt:GetAudioSourcesResponse')())
                      
    }

    /**
     * This command lists all available physical audio outputs of the device.
     */
    export function GetAudioOutputs() {
        return createStandardRequestBodyFromString('<trt:GetAudioOutputs />')
                        .map(mapResponseXmlToJson<any>('trt:GetAudioOutputsResponse')())
                      
    }

    /**
     * This operation creates a new empty media profile. The media profile shall be created in the
     *   device and shall be persistent (remain after reboot). A created profile shall be deletable and a device shall set the “fixed” attribute to false in the
     *   returned Profile.
     */
    export function CreateProfile(Name: Name, Token: ReferenceToken) {
        return createStandardRequestBodyFromString('<trt:CreateProfile />')
                        .map(mapResponseXmlToJson<any>('trt:CreateProfileResponse')())
                      
    }

    /**
     * If the profile token is already known, a profile can be fetched through the GetProfile command.
     */
    export function GetProfile(ProfileToken: ReferenceToken) {
        return createStandardRequestBodyFromString('<trt:GetProfile />')
                        .map(mapResponseXmlToJson<any>('trt:GetProfileResponse')())
                      
    }

    /**
     * Any endpoint can ask for the existing media profiles of a device using the GetProfiles
     *   command. Pre-configured or dynamically configured profiles can be retrieved using this
     *   command. This command lists all configured profiles in a device. The client does not need to
     *   know the media profile in order to use the command.
     */
    export function GetProfiles() {
        return createStandardRequestBodyFromString('<trt:GetProfiles />')
                        .map(mapResponseXmlToJson<any>('trt:GetProfilesResponse')())
                      
    }

    /**
     * This operation adds a VideoEncoderConfiguration to an existing media profile. If a
     *   configuration exists in the media profile, it will be replaced. The change shall be persistent. A device shall
     *   support adding a compatible VideoEncoderConfiguration to a Profile containing a VideoSourceConfiguration and shall
     *   support streaming video data of such a profile.
     *   
     */
    export function AddVideoEncoderConfiguration(ProfileToken: ReferenceToken, ConfigurationToken: ReferenceToken) {
        return createStandardRequestBodyFromString('<trt:AddVideoEncoderConfiguration />')
                        .map(mapResponseXmlToJson<any>('trt:AddVideoEncoderConfigurationResponse')())
                      
    }

    /**
     * This operation removes a VideoEncoderConfiguration from an existing media profile. If the
     *   media profile does not contain a VideoEncoderConfiguration, the operation has no effect. The removal shall be persistent.
     */
    export function RemoveVideoEncoderConfiguration(ProfileToken: ReferenceToken) {
        return createStandardRequestBodyFromString('<trt:RemoveVideoEncoderConfiguration />')
                        .map(mapResponseXmlToJson<any>('trt:RemoveVideoEncoderConfigurationResponse')())
                      
    }

    /**
     * This operation adds a VideoSourceConfiguration to an existing media profile. If such a
     *   configuration exists in the media profile, it will be replaced. The change shall be persistent.
     */
    export function AddVideoSourceConfiguration(ProfileToken: ReferenceToken, ConfigurationToken: ReferenceToken) {
        return createStandardRequestBodyFromString('<trt:AddVideoSourceConfiguration />')
                        .map(mapResponseXmlToJson<any>('trt:AddVideoSourceConfigurationResponse')())
                      
    }

    /**
     * This operation removes a VideoSourceConfiguration from an existing media profile. If the
     *   media profile does not contain a VideoSourceConfiguration, the operation has no effect. The removal shall be persistent. Video source configurations should only be removed after removing a
     *   VideoEncoderConfiguration from the media profile.
     */
    export function RemoveVideoSourceConfiguration(ProfileToken: ReferenceToken) {
        return createStandardRequestBodyFromString('<trt:RemoveVideoSourceConfiguration />')
                        .map(mapResponseXmlToJson<any>('trt:RemoveVideoSourceConfigurationResponse')())
                      
    }

    /**
     * This operation adds an AudioEncoderConfiguration to an existing media profile. If a 
     *   configuration exists in the media profile, it will be replaced. The change shall be persistent. A device shall
     *   support adding a compatible AudioEncoderConfiguration to a profile containing an AudioSourceConfiguration and shall
     *   support streaming audio data of such a profile.
     *   
     */
    export function AddAudioEncoderConfiguration(ProfileToken: ReferenceToken, ConfigurationToken: ReferenceToken) {
        return createStandardRequestBodyFromString('<trt:AddAudioEncoderConfiguration />')
                        .map(mapResponseXmlToJson<any>('trt:AddAudioEncoderConfigurationResponse')())
                      
    }

    /**
     * This operation removes an AudioEncoderConfiguration from an existing media profile. If the
     *   media profile does not contain an AudioEncoderConfiguration, the operation has no effect.
     *   The removal shall be persistent.
     */
    export function RemoveAudioEncoderConfiguration(ProfileToken: ReferenceToken) {
        return createStandardRequestBodyFromString('<trt:RemoveAudioEncoderConfiguration />')
                        .map(mapResponseXmlToJson<any>('trt:RemoveAudioEncoderConfigurationResponse')())
                      
    }

    /**
     * This operation adds an AudioSourceConfiguration to an existing media profile. If a
     *   configuration exists in the media profile, it will be replaced. The change shall be persistent.
     */
    export function AddAudioSourceConfiguration(ProfileToken: ReferenceToken, ConfigurationToken: ReferenceToken) {
        return createStandardRequestBodyFromString('<trt:AddAudioSourceConfiguration />')
                        .map(mapResponseXmlToJson<any>('trt:AddAudioSourceConfigurationResponse')())
                      
    }

    /**
     * This operation removes an AudioSourceConfiguration from an existing media profile. If the
     *   media profile does not contain an AudioSourceConfiguration, the operation has no effect. The
     *   removal shall be persistent. Audio source configurations should only be removed after removing an
     *   AudioEncoderConfiguration from the media profile.
     */
    export function RemoveAudioSourceConfiguration(ProfileToken: ReferenceToken) {
        return createStandardRequestBodyFromString('<trt:RemoveAudioSourceConfiguration />')
                        .map(mapResponseXmlToJson<any>('trt:RemoveAudioSourceConfigurationResponse')())
                      
    }

    /**
     * This operation adds a PTZConfiguration to an existing media profile. If a configuration exists
     *   in the media profile, it will be replaced. The change shall be persistent. Adding a PTZConfiguration to a media profile means that streams using that media profile can
     *   contain PTZ status (in the metadata), and that the media profile can be used for controlling
     *   PTZ movement.
     */
    export function AddPTZConfiguration(ProfileToken: ReferenceToken, ConfigurationToken: ReferenceToken) {
        return createStandardRequestBodyFromString('<trt:AddPTZConfiguration />')
                        .map(mapResponseXmlToJson<any>('trt:AddPTZConfigurationResponse')())
                      
    }

    /**
     * This operation removes a PTZConfiguration from an existing media profile. If the media profile
     *   does not contain a PTZConfiguration, the operation has no effect. The removal shall be persistent.
     */
    export function RemovePTZConfiguration(ProfileToken: ReferenceToken) {
        return createStandardRequestBodyFromString('<trt:RemovePTZConfiguration />')
                        .map(mapResponseXmlToJson<any>('trt:RemovePTZConfigurationResponse')())
                      
    }

    /**
     * This operation adds a VideoAnalytics configuration to an existing media profile. If a
     *   configuration exists in the media profile, it will be replaced. The change shall be persistent. Adding a VideoAnalyticsConfiguration to a media profile means that streams using that media
     *   profile can contain video analytics data (in the metadata) as defined by the submitted configuration reference. A profile containing only a video analytics configuration but no video source configuration is incomplete. Therefore, a client should first add a video source configuration to a profile before adding a video analytics configuration. The device can deny adding of a video analytics
     *   configuration before a video source configuration.
     */
    export function AddVideoAnalyticsConfiguration(ProfileToken: ReferenceToken, ConfigurationToken: ReferenceToken) {
        return createStandardRequestBodyFromString('<trt:AddVideoAnalyticsConfiguration />')
                        .map(mapResponseXmlToJson<any>('trt:AddVideoAnalyticsConfigurationResponse')())
                      
    }

    /**
     * This operation removes a VideoAnalyticsConfiguration from an existing media profile. If the media profile does not contain a VideoAnalyticsConfiguration, the operation has no effect.
     *   The removal shall be persistent.
     */
    export function RemoveVideoAnalyticsConfiguration(ProfileToken: ReferenceToken) {
        return createStandardRequestBodyFromString('<trt:RemoveVideoAnalyticsConfiguration />')
                        .map(mapResponseXmlToJson<any>('trt:RemoveVideoAnalyticsConfigurationResponse')())
                      
    }

    /**
     * This operation adds a Metadata configuration to an existing media profile. If a configuration exists in the media profile, it will be replaced. The change shall be persistent. Adding a MetadataConfiguration to a Profile means that streams using that profile contain metadata. Metadata can consist of events, PTZ status, and/or video analytics data.
     */
    export function AddMetadataConfiguration(ProfileToken: ReferenceToken, ConfigurationToken: ReferenceToken) {
        return createStandardRequestBodyFromString('<trt:AddMetadataConfiguration />')
                        .map(mapResponseXmlToJson<any>('trt:AddMetadataConfigurationResponse')())
                      
    }

    /**
     * This operation removes a MetadataConfiguration from an existing media profile. If the media profile does not contain a MetadataConfiguration, the operation has no effect. The removal shall be persistent.
     */
    export function RemoveMetadataConfiguration(ProfileToken: ReferenceToken) {
        return createStandardRequestBodyFromString('<trt:RemoveMetadataConfiguration />')
                        .map(mapResponseXmlToJson<any>('trt:RemoveMetadataConfigurationResponse')())
                      
    }

    /**
     * This operation adds an AudioOutputConfiguration to an existing media profile. If a configuration exists in the media profile, it will be replaced. The change shall be persistent.
     */
    export function AddAudioOutputConfiguration(ProfileToken: ReferenceToken, ConfigurationToken: ReferenceToken) {
        return createStandardRequestBodyFromString('<trt:AddAudioOutputConfiguration />')
                        .map(mapResponseXmlToJson<any>('trt:AddAudioOutputConfigurationResponse')())
                      
    }

    /**
     * This operation removes an AudioOutputConfiguration from an existing media profile. If the media profile does not contain an AudioOutputConfiguration, the operation has no effect. The removal shall be persistent.
     */
    export function RemoveAudioOutputConfiguration(ProfileToken: ReferenceToken) {
        return createStandardRequestBodyFromString('<trt:RemoveAudioOutputConfiguration />')
                        .map(mapResponseXmlToJson<any>('trt:RemoveAudioOutputConfigurationResponse')())
                      
    }

    /**
     * This operation adds an AudioDecoderConfiguration to an existing media profile. If a configuration exists in the media profile, it shall be replaced. The change shall be persistent.
     */
    export function AddAudioDecoderConfiguration(ProfileToken: ReferenceToken, ConfigurationToken: ReferenceToken) {
        return createStandardRequestBodyFromString('<trt:AddAudioDecoderConfiguration />')
                        .map(mapResponseXmlToJson<any>('trt:AddAudioDecoderConfigurationResponse')())
                      
    }

    /**
     * This operation removes an AudioDecoderConfiguration from an existing media profile. If the media profile does not contain an AudioDecoderConfiguration, the operation has no effect. The removal shall be persistent.
     */
    export function RemoveAudioDecoderConfiguration(ProfileToken: ReferenceToken) {
        return createStandardRequestBodyFromString('<trt:RemoveAudioDecoderConfiguration />')
                        .map(mapResponseXmlToJson<any>('trt:RemoveAudioDecoderConfigurationResponse')())
                      
    }

    /**
     * This operation deletes a profile. This change shall always be persistent. Deletion of a profile is only possible for non-fixed profiles
     */
    export function DeleteProfile(ProfileToken: ReferenceToken) {
        return createStandardRequestBodyFromString('<trt:DeleteProfile />')
                        .map(mapResponseXmlToJson<any>('trt:DeleteProfileResponse')())
                      
    }

    /**
     * This operation lists all existing video source configurations for a device. The client need not know anything about the video source configurations in order to use the command.
     */
    export function GetVideoSourceConfigurations() {
        return createStandardRequestBodyFromString('<trt:GetVideoSourceConfigurations />')
                        .map(mapResponseXmlToJson<any>('trt:GetVideoSourceConfigurationsResponse')())
                      
    }

    /**
     * This operation lists all existing video encoder configurations of a device. This command lists all configured video encoder configurations in a device. The client need not know anything apriori about the video encoder configurations in order to use the command.
     */
    export function GetVideoEncoderConfigurations() {
        return createStandardRequestBodyFromString('<trt:GetVideoEncoderConfigurations />')
                        .map(mapResponseXmlToJson<any>('trt:GetVideoEncoderConfigurationsResponse')())
                      
    }

    /**
     * This operation lists all existing audio source configurations of a device. This command lists all audio source configurations in a device. The client need not know anything apriori about the audio source configurations in order to use the command.
     */
    export function GetAudioSourceConfigurations() {
        return createStandardRequestBodyFromString('<trt:GetAudioSourceConfigurations />')
                        .map(mapResponseXmlToJson<any>('trt:GetAudioSourceConfigurationsResponse')())
                      
    }

    /**
     * This operation lists all existing device audio encoder configurations. The client need not know anything apriori about the audio encoder configurations in order to use the command.
     */
    export function GetAudioEncoderConfigurations() {
        return createStandardRequestBodyFromString('<trt:GetAudioEncoderConfigurations />')
                        .map(mapResponseXmlToJson<any>('trt:GetAudioEncoderConfigurationsResponse')())
                      
    }

    /**
     * This operation lists all video analytics configurations of a device. This command lists all configured video analytics in a device. The client need not know anything apriori about the video analytics in order to use the command.
     */
    export function GetVideoAnalyticsConfigurations() {
        return createStandardRequestBodyFromString('<trt:GetVideoAnalyticsConfigurations />')
                        .map(mapResponseXmlToJson<any>('trt:GetVideoAnalyticsConfigurationsResponse')())
                      
    }

    /**
     * This operation lists all existing metadata configurations. The client need not know anything apriori about the metadata in order to use the command.
     */
    export function GetMetadataConfigurations() {
        return createStandardRequestBodyFromString('<trt:GetMetadataConfigurations />')
                        .map(mapResponseXmlToJson<any>('trt:GetMetadataConfigurationsResponse')())
                      
    }

    /**
     * This command lists all existing AudioOutputConfigurations of a device. The NVC need not know anything apriori about the audio configurations to use this command.
     */
    export function GetAudioOutputConfigurations() {
        return createStandardRequestBodyFromString('<trt:GetAudioOutputConfigurations />')
                        .map(mapResponseXmlToJson<any>('trt:GetAudioOutputConfigurationsResponse')())
                      
    }

    /**
     * This command lists all existing AudioDecoderConfigurations of a device. The NVC need not know anything apriori about the audio decoder configurations in order to
     *   use this command.
     */
    export function GetAudioDecoderConfigurations() {
        return createStandardRequestBodyFromString('<trt:GetAudioDecoderConfigurations />')
                        .map(mapResponseXmlToJson<any>('trt:GetAudioDecoderConfigurationsResponse')())
                      
    }

    /**
     * If the video source configuration token is already known, the video source configuration can be fetched through the GetVideoSourceConfiguration command.
     */
    export function GetVideoSourceConfiguration(ConfigurationToken: ReferenceToken) {
        return createStandardRequestBodyFromString('<trt:GetVideoSourceConfiguration />')
                        .map(mapResponseXmlToJson<any>('trt:GetVideoSourceConfigurationResponse')())
                      
    }

    /**
     * If the video encoder configuration token is already known, the encoder configuration can be fetched through the GetVideoEncoderConfiguration command.
     */
    export function GetVideoEncoderConfiguration(ConfigurationToken: ReferenceToken) {
        return createStandardRequestBodyFromString('<trt:GetVideoEncoderConfiguration />')
                        .map(mapResponseXmlToJson<any>('trt:GetVideoEncoderConfigurationResponse')())
                      
    }

    /**
     * The GetAudioSourceConfiguration command fetches the audio source configurations if the audio source configuration token is already known. An
     */
    export function GetAudioSourceConfiguration(ConfigurationToken: ReferenceToken) {
        return createStandardRequestBodyFromString('<trt:GetAudioSourceConfiguration />')
                        .map(mapResponseXmlToJson<any>('trt:GetAudioSourceConfigurationResponse')())
                      
    }

    /**
     * The GetAudioEncoderConfiguration command fetches the encoder configuration if the audio encoder configuration token is known.
     */
    export function GetAudioEncoderConfiguration(ConfigurationToken: ReferenceToken) {
        return createStandardRequestBodyFromString('<trt:GetAudioEncoderConfiguration />')
                        .map(mapResponseXmlToJson<any>('trt:GetAudioEncoderConfigurationResponse')())
                      
    }

    /**
     * The GetVideoAnalyticsConfiguration command fetches the video analytics configuration if the video analytics token is known.
     */
    export function GetVideoAnalyticsConfiguration(ConfigurationToken: ReferenceToken) {
        return createStandardRequestBodyFromString('<trt:GetVideoAnalyticsConfiguration />')
                        .map(mapResponseXmlToJson<any>('trt:GetVideoAnalyticsConfigurationResponse')())
                      
    }

    /**
     * The GetMetadataConfiguration command fetches the metadata configuration if the metadata token is known.
     */
    export function GetMetadataConfiguration(ConfigurationToken: ReferenceToken) {
        return createStandardRequestBodyFromString('<trt:GetMetadataConfiguration />')
                        .map(mapResponseXmlToJson<any>('trt:GetMetadataConfigurationResponse')())
                      
    }

    /**
     * If the audio output configuration token is already known, the output configuration can be fetched through the GetAudioOutputConfiguration command.
     */
    export function GetAudioOutputConfiguration(ConfigurationToken: ReferenceToken) {
        return createStandardRequestBodyFromString('<trt:GetAudioOutputConfiguration />')
                        .map(mapResponseXmlToJson<any>('trt:GetAudioOutputConfigurationResponse')())
                      
    }

    /**
     * If the audio decoder configuration token is already known, the decoder configuration can be fetched through the GetAudioDecoderConfiguration command.
     */
    export function GetAudioDecoderConfiguration(ConfigurationToken: ReferenceToken) {
        return createStandardRequestBodyFromString('<trt:GetAudioDecoderConfiguration />')
                        .map(mapResponseXmlToJson<any>('trt:GetAudioDecoderConfigurationResponse')())
                      
    }

    /**
     * This operation lists all the video encoder configurations of the device that are compatible with a certain media profile. Each of the returned configurations shall be a valid input parameter for the AddVideoEncoderConfiguration command on the media profile. The result will vary depending on the capabilities, configurations and settings in the device.
     */
    export function GetCompatibleVideoEncoderConfigurations(ProfileToken: ReferenceToken) {
        return createStandardRequestBodyFromString('<trt:GetCompatibleVideoEncoderConfigurations />')
                        .map(mapResponseXmlToJson<any>('trt:GetCompatibleVideoEncoderConfigurationsResponse')())
                      
    }

    /**
     * This operation requests all the video source configurations of the device that are compatible
     *   with a certain media profile. Each of the returned configurations shall be a valid input
     *   parameter for the AddVideoSourceConfiguration command on the media profile. The result
     *   will vary depending on the capabilities, configurations and settings in the device.
     */
    export function GetCompatibleVideoSourceConfigurations(ProfileToken: ReferenceToken) {
        return createStandardRequestBodyFromString('<trt:GetCompatibleVideoSourceConfigurations />')
                        .map(mapResponseXmlToJson<any>('trt:GetCompatibleVideoSourceConfigurationsResponse')())
                      
    }

    /**
     * This operation requests all audio encoder configurations of a device that are compatible with a certain media profile. Each of the returned configurations shall be a valid input parameter for the AddAudioSourceConfiguration command on the media profile. The result varies depending on the capabilities, configurations and settings in the device.
     */
    export function GetCompatibleAudioEncoderConfigurations(ProfileToken: ReferenceToken) {
        return createStandardRequestBodyFromString('<trt:GetCompatibleAudioEncoderConfigurations />')
                        .map(mapResponseXmlToJson<any>('trt:GetCompatibleAudioEncoderConfigurationsResponse')())
                      
    }

    /**
     * This operation requests all audio source configurations of the device that are compatible with a certain media profile. Each of the returned configurations shall be a valid input parameter for the AddAudioEncoderConfiguration command on the media profile. The result varies depending on the capabilities, configurations and settings in the device.
     */
    export function GetCompatibleAudioSourceConfigurations(ProfileToken: ReferenceToken) {
        return createStandardRequestBodyFromString('<trt:GetCompatibleAudioSourceConfigurations />')
                        .map(mapResponseXmlToJson<any>('trt:GetCompatibleAudioSourceConfigurationsResponse')())
                      
    }

    /**
     * This operation requests all video analytic configurations of the device that are compatible with a certain media profile. Each of the returned configurations shall be a valid input parameter for the AddVideoAnalyticsConfiguration command on the media profile. The result varies depending on the capabilities, configurations and settings in the device.
     */
    export function GetCompatibleVideoAnalyticsConfigurations(ProfileToken: ReferenceToken) {
        return createStandardRequestBodyFromString('<trt:GetCompatibleVideoAnalyticsConfigurations />')
                        .map(mapResponseXmlToJson<any>('trt:GetCompatibleVideoAnalyticsConfigurationsResponse')())
                      
    }

    /**
     * This operation requests all the metadata configurations of the device that are compatible with a certain media profile. Each of the returned configurations shall be a valid input parameter for the AddMetadataConfiguration command on the media profile. The result varies depending on the capabilities, configurations and settings in the device.
     */
    export function GetCompatibleMetadataConfigurations(ProfileToken: ReferenceToken) {
        return createStandardRequestBodyFromString('<trt:GetCompatibleMetadataConfigurations />')
                        .map(mapResponseXmlToJson<any>('trt:GetCompatibleMetadataConfigurationsResponse')())
                      
    }

    /**
     * This command lists all audio output configurations of a device that are compatible with a certain media profile. Each returned configuration shall be a valid input for the 
     *   AddAudioOutputConfiguration command.
     */
    export function GetCompatibleAudioOutputConfigurations(ProfileToken: ReferenceToken) {
        return createStandardRequestBodyFromString('<trt:GetCompatibleAudioOutputConfigurations />')
                        .map(mapResponseXmlToJson<any>('trt:GetCompatibleAudioOutputConfigurationsResponse')())
                      
    }

    /**
     * This operation lists all the audio decoder configurations of the device that are compatible with a certain media profile. Each of the returned configurations shall be a valid input parameter for the AddAudioDecoderConfiguration command on the media profile.
     */
    export function GetCompatibleAudioDecoderConfigurations(ProfileToken: ReferenceToken) {
        return createStandardRequestBodyFromString('<trt:GetCompatibleAudioDecoderConfigurations />')
                        .map(mapResponseXmlToJson<any>('trt:GetCompatibleAudioDecoderConfigurationsResponse')())
                      
    }

    /**
     * This operation modifies a video source configuration. The ForcePersistence flag indicates if the changes shall remain after reboot of the device. Running streams using this configuration may be immediately updated according to the new settings. The changes are not guaranteed to take effect unless the client requests a new stream URI and restarts any affected stream. NVC methods for changing a running stream are out of scope for this specification.
     */
    export function SetVideoSourceConfiguration(Configuration: VideoSourceConfiguration, ForcePersistence: boolean) {
        return createStandardRequestBodyFromString('<trt:SetVideoSourceConfiguration />')
                        .map(mapResponseXmlToJson<any>('trt:SetVideoSourceConfigurationResponse')())
                      
    }

    /**
     * This operation modifies a video encoder configuration. The ForcePersistence flag indicates if the changes shall remain after reboot of the device. Changes in the Multicast settings shall always be persistent. Running streams using this configuration may be immediately updated according to the new settings. The changes are not guaranteed to take effect unless the client requests a new stream URI and restarts any affected stream. NVC methods for changing a running stream are out of scope for this specification. SessionTimeout is provided as a hint for keeping rtsp session by a device. If necessary the device may adapt parameter values for SessionTimeout elements without returning an error. For the time between keep alive calls the client shall adhere to the timeout value signaled via RTSP.
     */
    export function SetVideoEncoderConfiguration(Configuration: VideoEncoderConfiguration, ForcePersistence: boolean) {
        return createStandardRequestBodyFromString('<trt:SetVideoEncoderConfiguration />')
                        .map(mapResponseXmlToJson<any>('trt:SetVideoEncoderConfigurationResponse')())
                      
    }

    /**
     * This operation modifies an audio source configuration. The ForcePersistence flag indicates if
     *   the changes shall remain after reboot of the device. Running streams using this configuration
     *   may be immediately updated according to the new settings. The changes are not guaranteed
     *   to take effect unless the client requests a new stream URI and restarts any affected stream
     *   NVC methods for changing a running stream are out of scope for this specification.
     */
    export function SetAudioSourceConfiguration(Configuration: AudioSourceConfiguration, ForcePersistence: boolean) {
        return createStandardRequestBodyFromString('<trt:SetAudioSourceConfiguration />')
                        .map(mapResponseXmlToJson<any>('trt:SetAudioSourceConfigurationResponse')())
                      
    }

    /**
     * This operation modifies an audio encoder configuration. The ForcePersistence flag indicates if
     *   the changes shall remain after reboot of the device. Running streams using this configuration may be immediately updated
     *   according to the new settings. The changes are not guaranteed to take effect unless the client
     *   requests a new stream URI and restarts any affected streams. NVC methods for changing a
     *   running stream are out of scope for this specification.
     */
    export function SetAudioEncoderConfiguration(Configuration: AudioEncoderConfiguration, ForcePersistence: boolean) {
        return createStandardRequestBodyFromString('<trt:SetAudioEncoderConfiguration />')
                        .map(mapResponseXmlToJson<any>('trt:SetAudioEncoderConfigurationResponse')())
                      
    }

    /**
     * A video analytics configuration is modified using this command. The ForcePersistence flag
     *   indicates if the changes shall remain after reboot of the device or not. Running streams using
     *   this configuration shall be immediately updated according to the new settings. Otherwise
     *   inconsistencies can occur between the scene description processed by the rule engine and
     *   the notifications produced by analytics engine and rule engine which reference the very same
     *   video analytics configuration token.
     */
    export function SetVideoAnalyticsConfiguration(Configuration: VideoAnalyticsConfiguration, ForcePersistence: boolean) {
        return createStandardRequestBodyFromString('<trt:SetVideoAnalyticsConfiguration />')
                        .map(mapResponseXmlToJson<any>('trt:SetVideoAnalyticsConfigurationResponse')())
                      
    }

    /**
     * This operation modifies a metadata configuration. The ForcePersistence flag indicates if the
     *   changes shall remain after reboot of the device. Changes in the Multicast settings shall
     *   always be persistent. Running streams using this configuration may be updated immediately
     *   according to the new settings. The changes are not guaranteed to take effect unless the client
     *   requests a new stream URI and restarts any affected streams. NVC methods for changing a
     *   running stream are out of scope for this specification.
     */
    export function SetMetadataConfiguration(Configuration: MetadataConfiguration, ForcePersistence: boolean) {
        return createStandardRequestBodyFromString('<trt:SetMetadataConfiguration />')
                        .map(mapResponseXmlToJson<any>('trt:SetMetadataConfigurationResponse')())
                      
    }

    /**
     * This operation modifies an audio output configuration. The ForcePersistence flag indicates if
     *   the changes shall remain after reboot of the device.
     */
    export function SetAudioOutputConfiguration(Configuration: AudioOutputConfiguration, ForcePersistence: boolean) {
        return createStandardRequestBodyFromString('<trt:SetAudioOutputConfiguration />')
                        .map(mapResponseXmlToJson<any>('trt:SetAudioOutputConfigurationResponse')())
                      
    }

    /**
     * This operation modifies an audio decoder configuration. The ForcePersistence flag indicates if
     *   the changes shall remain after reboot of the device.
     */
    export function SetAudioDecoderConfiguration(Configuration: AudioDecoderConfiguration, ForcePersistence: boolean) {
        return createStandardRequestBodyFromString('<trt:SetAudioDecoderConfiguration />')
                        .map(mapResponseXmlToJson<any>('trt:SetAudioDecoderConfigurationResponse')())
                      
    }

    /**
     * This operation returns the available options  (supported values and ranges for video source configuration parameters) when the video source parameters are
     *   reconfigured If a video source configuration is specified, the options shall concern that
     *   particular configuration. If a media profile is specified, the options shall be compatible with
     *   that media profile.
     */
    export function GetVideoSourceConfigurationOptions(ConfigurationToken: ReferenceToken, ProfileToken: ReferenceToken) {
        return createStandardRequestBodyFromString('<trt:GetVideoSourceConfigurationOptions />')
                        .map(mapResponseXmlToJson<any>('trt:GetVideoSourceConfigurationOptionsResponse')())
                      
    }

    /**
     * This operation returns the available options (supported values and ranges for video encoder 
     *   configuration parameters) when the video encoder parameters are reconfigured. 
     *   For JPEG, MPEG4 and H264 extension elements have been defined that provide additional information. A device must provide the 
     *   XxxOption information for all encodings supported and should additionally provide the corresponding XxxOption2 information.
     *   This response contains the available video encoder configuration options. If a video encoder configuration is specified, 
     *   the options shall concern that particular configuration. If a media profile is specified, the options shall be 
     *   compatible with that media profile. If no tokens are specified, the options shall be considered generic for the device.
     *   
     */
    export function GetVideoEncoderConfigurationOptions(ConfigurationToken: ReferenceToken, ProfileToken: ReferenceToken) {
        return createStandardRequestBodyFromString('<trt:GetVideoEncoderConfigurationOptions />')
                        .map(mapResponseXmlToJson<any>('trt:GetVideoEncoderConfigurationOptionsResponse')())
                      
    }

    /**
     * This operation returns the available options (supported values and ranges for audio source configuration parameters) when the audio source parameters are
     *   reconfigured. If an audio source configuration is specified, the options shall concern that
     *   particular configuration. If a media profile is specified, the options shall be compatible with
     *   that media profile.
     */
    export function GetAudioSourceConfigurationOptions(ConfigurationToken: ReferenceToken, ProfileToken: ReferenceToken) {
        return createStandardRequestBodyFromString('<trt:GetAudioSourceConfigurationOptions />')
                        .map(mapResponseXmlToJson<any>('trt:GetAudioSourceConfigurationOptionsResponse')())
                      
    }

    /**
     * This operation returns the available options  (supported values and ranges for audio encoder configuration parameters) when the audio encoder parameters are
     *   reconfigured.
     */
    export function GetAudioEncoderConfigurationOptions(ConfigurationToken: ReferenceToken, ProfileToken: ReferenceToken) {
        return createStandardRequestBodyFromString('<trt:GetAudioEncoderConfigurationOptions />')
                        .map(mapResponseXmlToJson<any>('trt:GetAudioEncoderConfigurationOptionsResponse')())
                      
    }

    /**
     * This operation returns the available options (supported values and ranges for metadata configuration parameters) for changing the metadata configuration.
     */
    export function GetMetadataConfigurationOptions(ConfigurationToken: ReferenceToken, ProfileToken: ReferenceToken) {
        return createStandardRequestBodyFromString('<trt:GetMetadataConfigurationOptions />')
                        .map(mapResponseXmlToJson<any>('trt:GetMetadataConfigurationOptionsResponse')())
                      
    }

    /**
     * This operation returns the available options (supported values and ranges for audio output configuration parameters) for configuring an audio output.
     */
    export function GetAudioOutputConfigurationOptions(ConfigurationToken: ReferenceToken, ProfileToken: ReferenceToken) {
        return createStandardRequestBodyFromString('<trt:GetAudioOutputConfigurationOptions />')
                        .map(mapResponseXmlToJson<any>('trt:GetAudioOutputConfigurationOptionsResponse')())
                      
    }

    /**
     * This command list the audio decoding capabilities for a given profile and configuration of a
     *   device.
     */
    export function GetAudioDecoderConfigurationOptions(ConfigurationToken: ReferenceToken, ProfileToken: ReferenceToken) {
        return createStandardRequestBodyFromString('<trt:GetAudioDecoderConfigurationOptions />')
                        .map(mapResponseXmlToJson<any>('trt:GetAudioDecoderConfigurationOptionsResponse')())
                      
    }

    /**
     * The GetGuaranteedNumberOfVideoEncoderInstances command can be used to request the
     *   minimum number of guaranteed video encoder instances (applications) per Video Source
     *   Configuration.
     */
    export function GetGuaranteedNumberOfVideoEncoderInstances(ConfigurationToken: ReferenceToken) {
        return createStandardRequestBodyFromString('<trt:GetGuaranteedNumberOfVideoEncoderInstances />')
                        .map(mapResponseXmlToJson<any>('trt:GetGuaranteedNumberOfVideoEncoderInstancesResponse')())
                      
    }

    /**
     * This operation requests a URI that can be used to initiate a live media stream using RTSP as
     *   the control protocol. The returned URI shall remain valid indefinitely even if the profile is
     *   changed. The ValidUntilConnect, ValidUntilReboot and Timeout Parameter shall be set
     *   accordingly (ValidUntilConnect=false, ValidUntilReboot=false, timeout=PT0S). 
     *   The correct syntax for the StreamSetup element for these media stream setups defined in 5.1.1 of the streaming specification are as follows:
     *   
     *   RTP unicast over UDP: StreamType = "RTP_unicast", TransportProtocol = "UDP"
     *   RTP over RTSP over HTTP over TCP: StreamType = "RTP_unicast", TransportProtocol = "HTTP"
     *   RTP over RTSP over TCP: StreamType = "RTP_unicast", TransportProtocol = "RTSP"
     *   
     *   
     *   If a multicast stream is requested the VideoEncoderConfiguration, AudioEncoderConfiguration and MetadataConfiguration element inside the corresponding 
     *   media profile must be configured with valid multicast settings.
     *   For full compatibility with other ONVIF services a device should not generate Uris longer than
     *   128 octets.
     */
    export function GetStreamUri(StreamSetup: StreamSetup, ProfileToken: ReferenceToken) {
        return createStandardRequestBodyFromString('<trt:GetStreamUri />')
                        .map(mapResponseXmlToJson<any>('trt:GetStreamUriResponse')())
                      
    }

    /**
     * This command starts multicast streaming using a specified media profile of a device.
     *   Streaming continues until StopMulticastStreaming is called for the same Profile. The
     *   streaming shall continue after a reboot of the device until a StopMulticastStreaming request is
     *   received. The multicast address, port and TTL are configured in the
     *   VideoEncoderConfiguration, AudioEncoderConfiguration and MetadataConfiguration
     *   respectively.
     */
    export function StartMulticastStreaming(ProfileToken: ReferenceToken) {
        return createStandardRequestBodyFromString('<trt:StartMulticastStreaming />')
                        .map(mapResponseXmlToJson<any>('trt:StartMulticastStreamingResponse')())
                      
    }

    /**
     * This command stop multicast streaming using a specified media profile of a device
     */
    export function StopMulticastStreaming(ProfileToken: ReferenceToken) {
        return createStandardRequestBodyFromString('<trt:StopMulticastStreaming />')
                        .map(mapResponseXmlToJson<any>('trt:StopMulticastStreamingResponse')())
                      
    }

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
        return createStandardRequestBodyFromString('<trt:SetSynchronizationPoint />')
                        .map(mapResponseXmlToJson<any>('trt:SetSynchronizationPointResponse')())
                      
    }

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
        return createStandardRequestBodyFromString('<trt:GetSnapshotUri />')
                        .map(mapResponseXmlToJson<any>('trt:GetSnapshotUriResponse')())
                      
    }

    /**
     * A device returns the information for current video source mode and settable video source modes of specified video source. A device that indicates a capability of  VideoSourceModes shall support this command.
     */
    export function GetVideoSourceModes(VideoSourceToken: ReferenceToken) {
        return createStandardRequestBodyFromString('<trt:GetVideoSourceModes />')
                        .map(mapResponseXmlToJson<any>('trt:GetVideoSourceModesResponse')())
                      
    }

    /**
     * SetVideoSourceMode changes the media profile structure relating to video source for the specified video source mode. A device that indicates a capability of VideoSourceModes shall support this command. The behavior after changing the mode is not defined in this specification.
     */
    export function SetVideoSourceMode(VideoSourceToken: ReferenceToken, VideoSourceModeToken: ReferenceToken) {
        return createStandardRequestBodyFromString('<trt:SetVideoSourceMode />')
                        .map(mapResponseXmlToJson<any>('trt:SetVideoSourceModeResponse')())
                      
    }

    /**
     * Get the OSDs.
     */
    export function GetOSDs(ConfigurationToken: ReferenceToken) {
        return createStandardRequestBodyFromString('<trt:GetOSDs />')
                        .map(mapResponseXmlToJson<any>('trt:GetOSDsResponse')())
                      
    }

    /**
     * Get the OSD.
     */
    export function GetOSD(OSDToken: ReferenceToken) {
        return createStandardRequestBodyFromString('<trt:GetOSD />')
                        .map(mapResponseXmlToJson<any>('trt:GetOSDResponse')())
                      
    }

    /**
     * Get the OSD Options.
     */
    export function GetOSDOptions(ConfigurationToken: ReferenceToken) {
        return createStandardRequestBodyFromString('<trt:GetOSDOptions />')
                        .map(mapResponseXmlToJson<any>('trt:GetOSDOptionsResponse')())
                      
    }

    /**
     * Set the OSD
     */
    export function SetOSD(OSD: OSDConfiguration) {
        return createStandardRequestBodyFromString('<trt:SetOSD />')
                        .map(mapResponseXmlToJson<any>('trt:SetOSDResponse')())
                      
    }

    /**
     * Create the OSD.
     */
    export function CreateOSD(OSD: OSDConfiguration) {
        return createStandardRequestBodyFromString('<trt:CreateOSD />')
                        .map(mapResponseXmlToJson<any>('trt:CreateOSDResponse')())
                      
    }

    /**
     * Delete the OSD.
     */
    export function DeleteOSD(OSDToken: ReferenceToken) {
        return createStandardRequestBodyFromString('<trt:DeleteOSD />')
                        .map(mapResponseXmlToJson<any>('trt:DeleteOSDResponse')())
                      
    }
}
