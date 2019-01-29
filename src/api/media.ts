import { createStandardRequestBodyFromString, mapResponseXmlToJson, generateRequestElements, mapResponseObsToProperty } from "../soap/request";
import { IDeviceConfig } from "../config";
import { Name, ReferenceToken, VideoSourceConfiguration, VideoEncoderConfiguration, AudioSourceConfiguration, AudioEncoderConfiguration, VideoAnalyticsConfiguration, MetadataConfiguration, AudioOutputConfiguration, AudioDecoderConfiguration, StreamSetup, OSDConfiguration } from "./types";

export class ONVIFMedia {
    constructor(private config: IDeviceConfig) {
    }

    /**
     * Returns the capabilities of the media service. The result is returned in a typed answer.
     */
    static GetServiceCapabilities() {
        return createStandardRequestBodyFromString(generateRequestElements('trt:GetServiceCapabilities')([])())
                        .map(mapResponseXmlToJson<any>('trt:GetServiceCapabilitiesResponse'))
                      
    }

    /**
     * This command lists all available physical video inputs of the device.
     */
    static GetVideoSources() {
        return createStandardRequestBodyFromString(generateRequestElements('trt:GetVideoSources')([])())
                        .map(mapResponseXmlToJson<any>('trt:GetVideoSourcesResponse'))
                      
    }

    /**
     * This command lists all available physical audio inputs of the device.
     */
    static GetAudioSources() {
        return createStandardRequestBodyFromString(generateRequestElements('trt:GetAudioSources')([])())
                        .map(mapResponseXmlToJson<any>('trt:GetAudioSourcesResponse'))
                      
    }

    /**
     * This command lists all available physical audio outputs of the device.
     */
    static GetAudioOutputs() {
        return createStandardRequestBodyFromString(generateRequestElements('trt:GetAudioOutputs')([])())
                        .map(mapResponseXmlToJson<any>('trt:GetAudioOutputsResponse'))
                      
    }

    /**
     * This operation creates a new empty media profile. The media profile shall be created in the
     *   device and shall be persistent (remain after reboot). A created profile shall be deletable and a device shall set the “fixed” attribute to false in the
     *   returned Profile.
     */
    static CreateProfile(Name: Name, Token?: ReferenceToken) {
        return createStandardRequestBodyFromString(generateRequestElements('trt:CreateProfile')(['Name','Token'])(Name,Token))
                        .map(mapResponseXmlToJson<any>('trt:CreateProfileResponse'))
                      
    }

    /**
     * If the profile token is already known, a profile can be fetched through the GetProfile command.
     */
    static GetProfile(ProfileToken: ReferenceToken) {
        return createStandardRequestBodyFromString(generateRequestElements('trt:GetProfile')(['ProfileToken'])(ProfileToken))
                        .map(mapResponseXmlToJson<any>('trt:GetProfileResponse'))
                      
    }

    /**
     * Any endpoint can ask for the existing media profiles of a device using the GetProfiles
     *   command. Pre-configured or dynamically configured profiles can be retrieved using this
     *   command. This command lists all configured profiles in a device. The client does not need to
     *   know the media profile in order to use the command.
     */
    static GetProfiles() {
        return createStandardRequestBodyFromString(generateRequestElements('trt:GetProfiles')([])())
                        .map(mapResponseXmlToJson<any>('trt:GetProfilesResponse'))
                      
    }

    /**
     * This operation adds a VideoEncoderConfiguration to an existing media profile. If a
     *   configuration exists in the media profile, it will be replaced. The change shall be persistent. A device shall
     *   support adding a compatible VideoEncoderConfiguration to a Profile containing a VideoSourceConfiguration and shall
     *   support streaming video data of such a profile.
     *   
     */
    static AddVideoEncoderConfiguration(ProfileToken: ReferenceToken, ConfigurationToken: ReferenceToken) {
        return createStandardRequestBodyFromString(generateRequestElements('trt:AddVideoEncoderConfiguration')(['ProfileToken','ConfigurationToken'])(ProfileToken,ConfigurationToken))
                        .map(mapResponseXmlToJson<any>('trt:AddVideoEncoderConfigurationResponse'))
                      
    }

    /**
     * This operation removes a VideoEncoderConfiguration from an existing media profile. If the
     *   media profile does not contain a VideoEncoderConfiguration, the operation has no effect. The removal shall be persistent.
     */
    static RemoveVideoEncoderConfiguration(ProfileToken: ReferenceToken) {
        return createStandardRequestBodyFromString(generateRequestElements('trt:RemoveVideoEncoderConfiguration')(['ProfileToken'])(ProfileToken))
                        .map(mapResponseXmlToJson<any>('trt:RemoveVideoEncoderConfigurationResponse'))
                      
    }

    /**
     * This operation adds a VideoSourceConfiguration to an existing media profile. If such a
     *   configuration exists in the media profile, it will be replaced. The change shall be persistent.
     */
    static AddVideoSourceConfiguration(ProfileToken: ReferenceToken, ConfigurationToken: ReferenceToken) {
        return createStandardRequestBodyFromString(generateRequestElements('trt:AddVideoSourceConfiguration')(['ProfileToken','ConfigurationToken'])(ProfileToken,ConfigurationToken))
                        .map(mapResponseXmlToJson<any>('trt:AddVideoSourceConfigurationResponse'))
                      
    }

    /**
     * This operation removes a VideoSourceConfiguration from an existing media profile. If the
     *   media profile does not contain a VideoSourceConfiguration, the operation has no effect. The removal shall be persistent. Video source configurations should only be removed after removing a
     *   VideoEncoderConfiguration from the media profile.
     */
    static RemoveVideoSourceConfiguration(ProfileToken: ReferenceToken) {
        return createStandardRequestBodyFromString(generateRequestElements('trt:RemoveVideoSourceConfiguration')(['ProfileToken'])(ProfileToken))
                        .map(mapResponseXmlToJson<any>('trt:RemoveVideoSourceConfigurationResponse'))
                      
    }

    /**
     * This operation adds an AudioEncoderConfiguration to an existing media profile. If a 
     *   configuration exists in the media profile, it will be replaced. The change shall be persistent. A device shall
     *   support adding a compatible AudioEncoderConfiguration to a profile containing an AudioSourceConfiguration and shall
     *   support streaming audio data of such a profile.
     *   
     */
    static AddAudioEncoderConfiguration(ProfileToken: ReferenceToken, ConfigurationToken: ReferenceToken) {
        return createStandardRequestBodyFromString(generateRequestElements('trt:AddAudioEncoderConfiguration')(['ProfileToken','ConfigurationToken'])(ProfileToken,ConfigurationToken))
                        .map(mapResponseXmlToJson<any>('trt:AddAudioEncoderConfigurationResponse'))
                      
    }

    /**
     * This operation removes an AudioEncoderConfiguration from an existing media profile. If the
     *   media profile does not contain an AudioEncoderConfiguration, the operation has no effect.
     *   The removal shall be persistent.
     */
    static RemoveAudioEncoderConfiguration(ProfileToken: ReferenceToken) {
        return createStandardRequestBodyFromString(generateRequestElements('trt:RemoveAudioEncoderConfiguration')(['ProfileToken'])(ProfileToken))
                        .map(mapResponseXmlToJson<any>('trt:RemoveAudioEncoderConfigurationResponse'))
                      
    }

    /**
     * This operation adds an AudioSourceConfiguration to an existing media profile. If a
     *   configuration exists in the media profile, it will be replaced. The change shall be persistent.
     */
    static AddAudioSourceConfiguration(ProfileToken: ReferenceToken, ConfigurationToken: ReferenceToken) {
        return createStandardRequestBodyFromString(generateRequestElements('trt:AddAudioSourceConfiguration')(['ProfileToken','ConfigurationToken'])(ProfileToken,ConfigurationToken))
                        .map(mapResponseXmlToJson<any>('trt:AddAudioSourceConfigurationResponse'))
                      
    }

    /**
     * This operation removes an AudioSourceConfiguration from an existing media profile. If the
     *   media profile does not contain an AudioSourceConfiguration, the operation has no effect. The
     *   removal shall be persistent. Audio source configurations should only be removed after removing an
     *   AudioEncoderConfiguration from the media profile.
     */
    static RemoveAudioSourceConfiguration(ProfileToken: ReferenceToken) {
        return createStandardRequestBodyFromString(generateRequestElements('trt:RemoveAudioSourceConfiguration')(['ProfileToken'])(ProfileToken))
                        .map(mapResponseXmlToJson<any>('trt:RemoveAudioSourceConfigurationResponse'))
                      
    }

    /**
     * This operation adds a PTZConfiguration to an existing media profile. If a configuration exists
     *   in the media profile, it will be replaced. The change shall be persistent. Adding a PTZConfiguration to a media profile means that streams using that media profile can
     *   contain PTZ status (in the metadata), and that the media profile can be used for controlling
     *   PTZ movement.
     */
    static AddPTZConfiguration(ProfileToken: ReferenceToken, ConfigurationToken: ReferenceToken) {
        return createStandardRequestBodyFromString(generateRequestElements('trt:AddPTZConfiguration')(['ProfileToken','ConfigurationToken'])(ProfileToken,ConfigurationToken))
                        .map(mapResponseXmlToJson<any>('trt:AddPTZConfigurationResponse'))
                      
    }

    /**
     * This operation removes a PTZConfiguration from an existing media profile. If the media profile
     *   does not contain a PTZConfiguration, the operation has no effect. The removal shall be persistent.
     */
    static RemovePTZConfiguration(ProfileToken: ReferenceToken) {
        return createStandardRequestBodyFromString(generateRequestElements('trt:RemovePTZConfiguration')(['ProfileToken'])(ProfileToken))
                        .map(mapResponseXmlToJson<any>('trt:RemovePTZConfigurationResponse'))
                      
    }

    /**
     * This operation adds a VideoAnalytics configuration to an existing media profile. If a
     *   configuration exists in the media profile, it will be replaced. The change shall be persistent. Adding a VideoAnalyticsConfiguration to a media profile means that streams using that media
     *   profile can contain video analytics data (in the metadata) as defined by the submitted configuration reference. A profile containing only a video analytics configuration but no video source configuration is incomplete. Therefore, a client should first add a video source configuration to a profile before adding a video analytics configuration. The device can deny adding of a video analytics
     *   configuration before a video source configuration.
     */
    static AddVideoAnalyticsConfiguration(ProfileToken: ReferenceToken, ConfigurationToken: ReferenceToken) {
        return createStandardRequestBodyFromString(generateRequestElements('trt:AddVideoAnalyticsConfiguration')(['ProfileToken','ConfigurationToken'])(ProfileToken,ConfigurationToken))
                        .map(mapResponseXmlToJson<any>('trt:AddVideoAnalyticsConfigurationResponse'))
                      
    }

    /**
     * This operation removes a VideoAnalyticsConfiguration from an existing media profile. If the media profile does not contain a VideoAnalyticsConfiguration, the operation has no effect.
     *   The removal shall be persistent.
     */
    static RemoveVideoAnalyticsConfiguration(ProfileToken: ReferenceToken) {
        return createStandardRequestBodyFromString(generateRequestElements('trt:RemoveVideoAnalyticsConfiguration')(['ProfileToken'])(ProfileToken))
                        .map(mapResponseXmlToJson<any>('trt:RemoveVideoAnalyticsConfigurationResponse'))
                      
    }

    /**
     * This operation adds a Metadata configuration to an existing media profile. If a configuration exists in the media profile, it will be replaced. The change shall be persistent. Adding a MetadataConfiguration to a Profile means that streams using that profile contain metadata. Metadata can consist of events, PTZ status, and/or video analytics data.
     */
    static AddMetadataConfiguration(ProfileToken: ReferenceToken, ConfigurationToken: ReferenceToken) {
        return createStandardRequestBodyFromString(generateRequestElements('trt:AddMetadataConfiguration')(['ProfileToken','ConfigurationToken'])(ProfileToken,ConfigurationToken))
                        .map(mapResponseXmlToJson<any>('trt:AddMetadataConfigurationResponse'))
                      
    }

    /**
     * This operation removes a MetadataConfiguration from an existing media profile. If the media profile does not contain a MetadataConfiguration, the operation has no effect. The removal shall be persistent.
     */
    static RemoveMetadataConfiguration(ProfileToken: ReferenceToken) {
        return createStandardRequestBodyFromString(generateRequestElements('trt:RemoveMetadataConfiguration')(['ProfileToken'])(ProfileToken))
                        .map(mapResponseXmlToJson<any>('trt:RemoveMetadataConfigurationResponse'))
                      
    }

    /**
     * This operation adds an AudioOutputConfiguration to an existing media profile. If a configuration exists in the media profile, it will be replaced. The change shall be persistent.
     */
    static AddAudioOutputConfiguration(ProfileToken: ReferenceToken, ConfigurationToken: ReferenceToken) {
        return createStandardRequestBodyFromString(generateRequestElements('trt:AddAudioOutputConfiguration')(['ProfileToken','ConfigurationToken'])(ProfileToken,ConfigurationToken))
                        .map(mapResponseXmlToJson<any>('trt:AddAudioOutputConfigurationResponse'))
                      
    }

    /**
     * This operation removes an AudioOutputConfiguration from an existing media profile. If the media profile does not contain an AudioOutputConfiguration, the operation has no effect. The removal shall be persistent.
     */
    static RemoveAudioOutputConfiguration(ProfileToken: ReferenceToken) {
        return createStandardRequestBodyFromString(generateRequestElements('trt:RemoveAudioOutputConfiguration')(['ProfileToken'])(ProfileToken))
                        .map(mapResponseXmlToJson<any>('trt:RemoveAudioOutputConfigurationResponse'))
                      
    }

    /**
     * This operation adds an AudioDecoderConfiguration to an existing media profile. If a configuration exists in the media profile, it shall be replaced. The change shall be persistent.
     */
    static AddAudioDecoderConfiguration(ProfileToken: ReferenceToken, ConfigurationToken: ReferenceToken) {
        return createStandardRequestBodyFromString(generateRequestElements('trt:AddAudioDecoderConfiguration')(['ProfileToken','ConfigurationToken'])(ProfileToken,ConfigurationToken))
                        .map(mapResponseXmlToJson<any>('trt:AddAudioDecoderConfigurationResponse'))
                      
    }

    /**
     * This operation removes an AudioDecoderConfiguration from an existing media profile. If the media profile does not contain an AudioDecoderConfiguration, the operation has no effect. The removal shall be persistent.
     */
    static RemoveAudioDecoderConfiguration(ProfileToken: ReferenceToken) {
        return createStandardRequestBodyFromString(generateRequestElements('trt:RemoveAudioDecoderConfiguration')(['ProfileToken'])(ProfileToken))
                        .map(mapResponseXmlToJson<any>('trt:RemoveAudioDecoderConfigurationResponse'))
                      
    }

    /**
     * This operation deletes a profile. This change shall always be persistent. Deletion of a profile is only possible for non-fixed profiles
     */
    static DeleteProfile(ProfileToken: ReferenceToken) {
        return createStandardRequestBodyFromString(generateRequestElements('trt:DeleteProfile')(['ProfileToken'])(ProfileToken))
                        .map(mapResponseXmlToJson<any>('trt:DeleteProfileResponse'))
                      
    }

    /**
     * This operation lists all existing video source configurations for a device. The client need not know anything about the video source configurations in order to use the command.
     */
    static GetVideoSourceConfigurations() {
        return createStandardRequestBodyFromString(generateRequestElements('trt:GetVideoSourceConfigurations')([])())
                        .map(mapResponseXmlToJson<any>('trt:GetVideoSourceConfigurationsResponse'))
                      
    }

    /**
     * This operation lists all existing video encoder configurations of a device. This command lists all configured video encoder configurations in a device. The client need not know anything apriori about the video encoder configurations in order to use the command.
     */
    static GetVideoEncoderConfigurations() {
        return createStandardRequestBodyFromString(generateRequestElements('trt:GetVideoEncoderConfigurations')([])())
                        .map(mapResponseXmlToJson<any>('trt:GetVideoEncoderConfigurationsResponse'))
                      
    }

    /**
     * This operation lists all existing audio source configurations of a device. This command lists all audio source configurations in a device. The client need not know anything apriori about the audio source configurations in order to use the command.
     */
    static GetAudioSourceConfigurations() {
        return createStandardRequestBodyFromString(generateRequestElements('trt:GetAudioSourceConfigurations')([])())
                        .map(mapResponseXmlToJson<any>('trt:GetAudioSourceConfigurationsResponse'))
                      
    }

    /**
     * This operation lists all existing device audio encoder configurations. The client need not know anything apriori about the audio encoder configurations in order to use the command.
     */
    static GetAudioEncoderConfigurations() {
        return createStandardRequestBodyFromString(generateRequestElements('trt:GetAudioEncoderConfigurations')([])())
                        .map(mapResponseXmlToJson<any>('trt:GetAudioEncoderConfigurationsResponse'))
                      
    }

    /**
     * This operation lists all video analytics configurations of a device. This command lists all configured video analytics in a device. The client need not know anything apriori about the video analytics in order to use the command.
     */
    static GetVideoAnalyticsConfigurations() {
        return createStandardRequestBodyFromString(generateRequestElements('trt:GetVideoAnalyticsConfigurations')([])())
                        .map(mapResponseXmlToJson<any>('trt:GetVideoAnalyticsConfigurationsResponse'))
                      
    }

    /**
     * This operation lists all existing metadata configurations. The client need not know anything apriori about the metadata in order to use the command.
     */
    static GetMetadataConfigurations() {
        return createStandardRequestBodyFromString(generateRequestElements('trt:GetMetadataConfigurations')([])())
                        .map(mapResponseXmlToJson<any>('trt:GetMetadataConfigurationsResponse'))
                      
    }

    /**
     * This command lists all existing AudioOutputConfigurations of a device. The NVC need not know anything apriori about the audio configurations to use this command.
     */
    static GetAudioOutputConfigurations() {
        return createStandardRequestBodyFromString(generateRequestElements('trt:GetAudioOutputConfigurations')([])())
                        .map(mapResponseXmlToJson<any>('trt:GetAudioOutputConfigurationsResponse'))
                      
    }

    /**
     * This command lists all existing AudioDecoderConfigurations of a device. The NVC need not know anything apriori about the audio decoder configurations in order to
     *   use this command.
     */
    static GetAudioDecoderConfigurations() {
        return createStandardRequestBodyFromString(generateRequestElements('trt:GetAudioDecoderConfigurations')([])())
                        .map(mapResponseXmlToJson<any>('trt:GetAudioDecoderConfigurationsResponse'))
                      
    }

    /**
     * If the video source configuration token is already known, the video source configuration can be fetched through the GetVideoSourceConfiguration command.
     */
    static GetVideoSourceConfiguration(ConfigurationToken: ReferenceToken) {
        return createStandardRequestBodyFromString(generateRequestElements('trt:GetVideoSourceConfiguration')(['ConfigurationToken'])(ConfigurationToken))
                        .map(mapResponseXmlToJson<any>('trt:GetVideoSourceConfigurationResponse'))
                      
    }

    /**
     * If the video encoder configuration token is already known, the encoder configuration can be fetched through the GetVideoEncoderConfiguration command.
     */
    static GetVideoEncoderConfiguration(ConfigurationToken: ReferenceToken) {
        return createStandardRequestBodyFromString(generateRequestElements('trt:GetVideoEncoderConfiguration')(['ConfigurationToken'])(ConfigurationToken))
                        .map(mapResponseXmlToJson<any>('trt:GetVideoEncoderConfigurationResponse'))
                      
    }

    /**
     * The GetAudioSourceConfiguration command fetches the audio source configurations if the audio source configuration token is already known. An
     */
    static GetAudioSourceConfiguration(ConfigurationToken: ReferenceToken) {
        return createStandardRequestBodyFromString(generateRequestElements('trt:GetAudioSourceConfiguration')(['ConfigurationToken'])(ConfigurationToken))
                        .map(mapResponseXmlToJson<any>('trt:GetAudioSourceConfigurationResponse'))
                      
    }

    /**
     * The GetAudioEncoderConfiguration command fetches the encoder configuration if the audio encoder configuration token is known.
     */
    static GetAudioEncoderConfiguration(ConfigurationToken: ReferenceToken) {
        return createStandardRequestBodyFromString(generateRequestElements('trt:GetAudioEncoderConfiguration')(['ConfigurationToken'])(ConfigurationToken))
                        .map(mapResponseXmlToJson<any>('trt:GetAudioEncoderConfigurationResponse'))
                      
    }

    /**
     * The GetVideoAnalyticsConfiguration command fetches the video analytics configuration if the video analytics token is known.
     */
    static GetVideoAnalyticsConfiguration(ConfigurationToken: ReferenceToken) {
        return createStandardRequestBodyFromString(generateRequestElements('trt:GetVideoAnalyticsConfiguration')(['ConfigurationToken'])(ConfigurationToken))
                        .map(mapResponseXmlToJson<any>('trt:GetVideoAnalyticsConfigurationResponse'))
                      
    }

    /**
     * The GetMetadataConfiguration command fetches the metadata configuration if the metadata token is known.
     */
    static GetMetadataConfiguration(ConfigurationToken: ReferenceToken) {
        return createStandardRequestBodyFromString(generateRequestElements('trt:GetMetadataConfiguration')(['ConfigurationToken'])(ConfigurationToken))
                        .map(mapResponseXmlToJson<any>('trt:GetMetadataConfigurationResponse'))
                      
    }

    /**
     * If the audio output configuration token is already known, the output configuration can be fetched through the GetAudioOutputConfiguration command.
     */
    static GetAudioOutputConfiguration(ConfigurationToken: ReferenceToken) {
        return createStandardRequestBodyFromString(generateRequestElements('trt:GetAudioOutputConfiguration')(['ConfigurationToken'])(ConfigurationToken))
                        .map(mapResponseXmlToJson<any>('trt:GetAudioOutputConfigurationResponse'))
                      
    }

    /**
     * If the audio decoder configuration token is already known, the decoder configuration can be fetched through the GetAudioDecoderConfiguration command.
     */
    static GetAudioDecoderConfiguration(ConfigurationToken: ReferenceToken) {
        return createStandardRequestBodyFromString(generateRequestElements('trt:GetAudioDecoderConfiguration')(['ConfigurationToken'])(ConfigurationToken))
                        .map(mapResponseXmlToJson<any>('trt:GetAudioDecoderConfigurationResponse'))
                      
    }

    /**
     * This operation lists all the video encoder configurations of the device that are compatible with a certain media profile. Each of the returned configurations shall be a valid input parameter for the AddVideoEncoderConfiguration command on the media profile. The result will vary depending on the capabilities, configurations and settings in the device.
     */
    static GetCompatibleVideoEncoderConfigurations(ProfileToken: ReferenceToken) {
        return createStandardRequestBodyFromString(generateRequestElements('trt:GetCompatibleVideoEncoderConfigurations')(['ProfileToken'])(ProfileToken))
                        .map(mapResponseXmlToJson<any>('trt:GetCompatibleVideoEncoderConfigurationsResponse'))
                      
    }

    /**
     * This operation requests all the video source configurations of the device that are compatible
     *   with a certain media profile. Each of the returned configurations shall be a valid input
     *   parameter for the AddVideoSourceConfiguration command on the media profile. The result
     *   will vary depending on the capabilities, configurations and settings in the device.
     */
    static GetCompatibleVideoSourceConfigurations(ProfileToken: ReferenceToken) {
        return createStandardRequestBodyFromString(generateRequestElements('trt:GetCompatibleVideoSourceConfigurations')(['ProfileToken'])(ProfileToken))
                        .map(mapResponseXmlToJson<any>('trt:GetCompatibleVideoSourceConfigurationsResponse'))
                      
    }

    /**
     * This operation requests all audio encoder configurations of a device that are compatible with a certain media profile. Each of the returned configurations shall be a valid input parameter for the AddAudioSourceConfiguration command on the media profile. The result varies depending on the capabilities, configurations and settings in the device.
     */
    static GetCompatibleAudioEncoderConfigurations(ProfileToken: ReferenceToken) {
        return createStandardRequestBodyFromString(generateRequestElements('trt:GetCompatibleAudioEncoderConfigurations')(['ProfileToken'])(ProfileToken))
                        .map(mapResponseXmlToJson<any>('trt:GetCompatibleAudioEncoderConfigurationsResponse'))
                      
    }

    /**
     * This operation requests all audio source configurations of the device that are compatible with a certain media profile. Each of the returned configurations shall be a valid input parameter for the AddAudioEncoderConfiguration command on the media profile. The result varies depending on the capabilities, configurations and settings in the device.
     */
    static GetCompatibleAudioSourceConfigurations(ProfileToken: ReferenceToken) {
        return createStandardRequestBodyFromString(generateRequestElements('trt:GetCompatibleAudioSourceConfigurations')(['ProfileToken'])(ProfileToken))
                        .map(mapResponseXmlToJson<any>('trt:GetCompatibleAudioSourceConfigurationsResponse'))
                      
    }

    /**
     * This operation requests all video analytic configurations of the device that are compatible with a certain media profile. Each of the returned configurations shall be a valid input parameter for the AddVideoAnalyticsConfiguration command on the media profile. The result varies depending on the capabilities, configurations and settings in the device.
     */
    static GetCompatibleVideoAnalyticsConfigurations(ProfileToken: ReferenceToken) {
        return createStandardRequestBodyFromString(generateRequestElements('trt:GetCompatibleVideoAnalyticsConfigurations')(['ProfileToken'])(ProfileToken))
                        .map(mapResponseXmlToJson<any>('trt:GetCompatibleVideoAnalyticsConfigurationsResponse'))
                      
    }

    /**
     * This operation requests all the metadata configurations of the device that are compatible with a certain media profile. Each of the returned configurations shall be a valid input parameter for the AddMetadataConfiguration command on the media profile. The result varies depending on the capabilities, configurations and settings in the device.
     */
    static GetCompatibleMetadataConfigurations(ProfileToken: ReferenceToken) {
        return createStandardRequestBodyFromString(generateRequestElements('trt:GetCompatibleMetadataConfigurations')(['ProfileToken'])(ProfileToken))
                        .map(mapResponseXmlToJson<any>('trt:GetCompatibleMetadataConfigurationsResponse'))
                      
    }

    /**
     * This command lists all audio output configurations of a device that are compatible with a certain media profile. Each returned configuration shall be a valid input for the 
     *   AddAudioOutputConfiguration command.
     */
    static GetCompatibleAudioOutputConfigurations(ProfileToken: ReferenceToken) {
        return createStandardRequestBodyFromString(generateRequestElements('trt:GetCompatibleAudioOutputConfigurations')(['ProfileToken'])(ProfileToken))
                        .map(mapResponseXmlToJson<any>('trt:GetCompatibleAudioOutputConfigurationsResponse'))
                      
    }

    /**
     * This operation lists all the audio decoder configurations of the device that are compatible with a certain media profile. Each of the returned configurations shall be a valid input parameter for the AddAudioDecoderConfiguration command on the media profile.
     */
    static GetCompatibleAudioDecoderConfigurations(ProfileToken: ReferenceToken) {
        return createStandardRequestBodyFromString(generateRequestElements('trt:GetCompatibleAudioDecoderConfigurations')(['ProfileToken'])(ProfileToken))
                        .map(mapResponseXmlToJson<any>('trt:GetCompatibleAudioDecoderConfigurationsResponse'))
                      
    }

    /**
     * This operation modifies a video source configuration. The ForcePersistence flag indicates if the changes shall remain after reboot of the device. Running streams using this configuration may be immediately updated according to the new settings. The changes are not guaranteed to take effect unless the client requests a new stream URI and restarts any affected stream. NVC methods for changing a running stream are out of scope for this specification.
     */
    static SetVideoSourceConfiguration(Configuration: VideoSourceConfiguration, ForcePersistence: boolean) {
        return createStandardRequestBodyFromString(generateRequestElements('trt:SetVideoSourceConfiguration')(['Configuration','ForcePersistence'])(Configuration,ForcePersistence))
                        .map(mapResponseXmlToJson<any>('trt:SetVideoSourceConfigurationResponse'))
                      
    }

    /**
     * This operation modifies a video encoder configuration. The ForcePersistence flag indicates if the changes shall remain after reboot of the device. Changes in the Multicast settings shall always be persistent. Running streams using this configuration may be immediately updated according to the new settings. The changes are not guaranteed to take effect unless the client requests a new stream URI and restarts any affected stream. NVC methods for changing a running stream are out of scope for this specification. SessionTimeout is provided as a hint for keeping rtsp session by a device. If necessary the device may adapt parameter values for SessionTimeout elements without returning an error. For the time between keep alive calls the client shall adhere to the timeout value signaled via RTSP.
     */
    static SetVideoEncoderConfiguration(Configuration: VideoEncoderConfiguration, ForcePersistence: boolean) {
        return createStandardRequestBodyFromString(generateRequestElements('trt:SetVideoEncoderConfiguration')(['Configuration','ForcePersistence'])(Configuration,ForcePersistence))
                        .map(mapResponseXmlToJson<any>('trt:SetVideoEncoderConfigurationResponse'))
                      
    }

    /**
     * This operation modifies an audio source configuration. The ForcePersistence flag indicates if
     *   the changes shall remain after reboot of the device. Running streams using this configuration
     *   may be immediately updated according to the new settings. The changes are not guaranteed
     *   to take effect unless the client requests a new stream URI and restarts any affected stream
     *   NVC methods for changing a running stream are out of scope for this specification.
     */
    static SetAudioSourceConfiguration(Configuration: AudioSourceConfiguration, ForcePersistence: boolean) {
        return createStandardRequestBodyFromString(generateRequestElements('trt:SetAudioSourceConfiguration')(['Configuration','ForcePersistence'])(Configuration,ForcePersistence))
                        .map(mapResponseXmlToJson<any>('trt:SetAudioSourceConfigurationResponse'))
                      
    }

    /**
     * This operation modifies an audio encoder configuration. The ForcePersistence flag indicates if
     *   the changes shall remain after reboot of the device. Running streams using this configuration may be immediately updated
     *   according to the new settings. The changes are not guaranteed to take effect unless the client
     *   requests a new stream URI and restarts any affected streams. NVC methods for changing a
     *   running stream are out of scope for this specification.
     */
    static SetAudioEncoderConfiguration(Configuration: AudioEncoderConfiguration, ForcePersistence: boolean) {
        return createStandardRequestBodyFromString(generateRequestElements('trt:SetAudioEncoderConfiguration')(['Configuration','ForcePersistence'])(Configuration,ForcePersistence))
                        .map(mapResponseXmlToJson<any>('trt:SetAudioEncoderConfigurationResponse'))
                      
    }

    /**
     * A video analytics configuration is modified using this command. The ForcePersistence flag
     *   indicates if the changes shall remain after reboot of the device or not. Running streams using
     *   this configuration shall be immediately updated according to the new settings. Otherwise
     *   inconsistencies can occur between the scene description processed by the rule engine and
     *   the notifications produced by analytics engine and rule engine which reference the very same
     *   video analytics configuration token.
     */
    static SetVideoAnalyticsConfiguration(Configuration: VideoAnalyticsConfiguration, ForcePersistence: boolean) {
        return createStandardRequestBodyFromString(generateRequestElements('trt:SetVideoAnalyticsConfiguration')(['Configuration','ForcePersistence'])(Configuration,ForcePersistence))
                        .map(mapResponseXmlToJson<any>('trt:SetVideoAnalyticsConfigurationResponse'))
                      
    }

    /**
     * This operation modifies a metadata configuration. The ForcePersistence flag indicates if the
     *   changes shall remain after reboot of the device. Changes in the Multicast settings shall
     *   always be persistent. Running streams using this configuration may be updated immediately
     *   according to the new settings. The changes are not guaranteed to take effect unless the client
     *   requests a new stream URI and restarts any affected streams. NVC methods for changing a
     *   running stream are out of scope for this specification.
     */
    static SetMetadataConfiguration(Configuration: MetadataConfiguration, ForcePersistence: boolean) {
        return createStandardRequestBodyFromString(generateRequestElements('trt:SetMetadataConfiguration')(['Configuration','ForcePersistence'])(Configuration,ForcePersistence))
                        .map(mapResponseXmlToJson<any>('trt:SetMetadataConfigurationResponse'))
                      
    }

    /**
     * This operation modifies an audio output configuration. The ForcePersistence flag indicates if
     *   the changes shall remain after reboot of the device.
     */
    static SetAudioOutputConfiguration(Configuration: AudioOutputConfiguration, ForcePersistence: boolean) {
        return createStandardRequestBodyFromString(generateRequestElements('trt:SetAudioOutputConfiguration')(['Configuration','ForcePersistence'])(Configuration,ForcePersistence))
                        .map(mapResponseXmlToJson<any>('trt:SetAudioOutputConfigurationResponse'))
                      
    }

    /**
     * This operation modifies an audio decoder configuration. The ForcePersistence flag indicates if
     *   the changes shall remain after reboot of the device.
     */
    static SetAudioDecoderConfiguration(Configuration: AudioDecoderConfiguration, ForcePersistence: boolean) {
        return createStandardRequestBodyFromString(generateRequestElements('trt:SetAudioDecoderConfiguration')(['Configuration','ForcePersistence'])(Configuration,ForcePersistence))
                        .map(mapResponseXmlToJson<any>('trt:SetAudioDecoderConfigurationResponse'))
                      
    }

    /**
     * This operation returns the available options  (supported values and ranges for video source configuration parameters) when the video source parameters are
     *   reconfigured If a video source configuration is specified, the options shall concern that
     *   particular configuration. If a media profile is specified, the options shall be compatible with
     *   that media profile.
     */
    static GetVideoSourceConfigurationOptions(ConfigurationToken?: ReferenceToken, ProfileToken?: ReferenceToken) {
        return createStandardRequestBodyFromString(generateRequestElements('trt:GetVideoSourceConfigurationOptions')(['ConfigurationToken','ProfileToken'])(ConfigurationToken,ProfileToken))
                        .map(mapResponseXmlToJson<any>('trt:GetVideoSourceConfigurationOptionsResponse'))
                      
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
    static GetVideoEncoderConfigurationOptions(ConfigurationToken?: ReferenceToken, ProfileToken?: ReferenceToken) {
        return createStandardRequestBodyFromString(generateRequestElements('trt:GetVideoEncoderConfigurationOptions')(['ConfigurationToken','ProfileToken'])(ConfigurationToken,ProfileToken))
                        .map(mapResponseXmlToJson<any>('trt:GetVideoEncoderConfigurationOptionsResponse'))
                      
    }

    /**
     * This operation returns the available options (supported values and ranges for audio source configuration parameters) when the audio source parameters are
     *   reconfigured. If an audio source configuration is specified, the options shall concern that
     *   particular configuration. If a media profile is specified, the options shall be compatible with
     *   that media profile.
     */
    static GetAudioSourceConfigurationOptions(ConfigurationToken?: ReferenceToken, ProfileToken?: ReferenceToken) {
        return createStandardRequestBodyFromString(generateRequestElements('trt:GetAudioSourceConfigurationOptions')(['ConfigurationToken','ProfileToken'])(ConfigurationToken,ProfileToken))
                        .map(mapResponseXmlToJson<any>('trt:GetAudioSourceConfigurationOptionsResponse'))
                      
    }

    /**
     * This operation returns the available options  (supported values and ranges for audio encoder configuration parameters) when the audio encoder parameters are
     *   reconfigured.
     */
    static GetAudioEncoderConfigurationOptions(ConfigurationToken?: ReferenceToken, ProfileToken?: ReferenceToken) {
        return createStandardRequestBodyFromString(generateRequestElements('trt:GetAudioEncoderConfigurationOptions')(['ConfigurationToken','ProfileToken'])(ConfigurationToken,ProfileToken))
                        .map(mapResponseXmlToJson<any>('trt:GetAudioEncoderConfigurationOptionsResponse'))
                      
    }

    /**
     * This operation returns the available options (supported values and ranges for metadata configuration parameters) for changing the metadata configuration.
     */
    static GetMetadataConfigurationOptions(ConfigurationToken?: ReferenceToken, ProfileToken?: ReferenceToken) {
        return createStandardRequestBodyFromString(generateRequestElements('trt:GetMetadataConfigurationOptions')(['ConfigurationToken','ProfileToken'])(ConfigurationToken,ProfileToken))
                        .map(mapResponseXmlToJson<any>('trt:GetMetadataConfigurationOptionsResponse'))
                      
    }

    /**
     * This operation returns the available options (supported values and ranges for audio output configuration parameters) for configuring an audio output.
     */
    static GetAudioOutputConfigurationOptions(ConfigurationToken?: ReferenceToken, ProfileToken?: ReferenceToken) {
        return createStandardRequestBodyFromString(generateRequestElements('trt:GetAudioOutputConfigurationOptions')(['ConfigurationToken','ProfileToken'])(ConfigurationToken,ProfileToken))
                        .map(mapResponseXmlToJson<any>('trt:GetAudioOutputConfigurationOptionsResponse'))
                      
    }

    /**
     * This command list the audio decoding capabilities for a given profile and configuration of a
     *   device.
     */
    static GetAudioDecoderConfigurationOptions(ConfigurationToken?: ReferenceToken, ProfileToken?: ReferenceToken) {
        return createStandardRequestBodyFromString(generateRequestElements('trt:GetAudioDecoderConfigurationOptions')(['ConfigurationToken','ProfileToken'])(ConfigurationToken,ProfileToken))
                        .map(mapResponseXmlToJson<any>('trt:GetAudioDecoderConfigurationOptionsResponse'))
                      
    }

    /**
     * The GetGuaranteedNumberOfVideoEncoderInstances command can be used to request the
     *   minimum number of guaranteed video encoder instances (applications) per Video Source
     *   Configuration.
     */
    static GetGuaranteedNumberOfVideoEncoderInstances(ConfigurationToken: ReferenceToken) {
        return createStandardRequestBodyFromString(generateRequestElements('trt:GetGuaranteedNumberOfVideoEncoderInstances')(['ConfigurationToken'])(ConfigurationToken))
                        .map(mapResponseXmlToJson<any>('trt:GetGuaranteedNumberOfVideoEncoderInstancesResponse'))
                      
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
    static GetStreamUri(StreamSetup: StreamSetup, ProfileToken: ReferenceToken) {
        return createStandardRequestBodyFromString(generateRequestElements('trt:GetStreamUri')(['StreamSetup','ProfileToken'])(StreamSetup,ProfileToken))
                        .map(mapResponseXmlToJson<any>('trt:GetStreamUriResponse'))
                      
    }

    /**
     * This command starts multicast streaming using a specified media profile of a device.
     *   Streaming continues until StopMulticastStreaming is called for the same Profile. The
     *   streaming shall continue after a reboot of the device until a StopMulticastStreaming request is
     *   received. The multicast address, port and TTL are configured in the
     *   VideoEncoderConfiguration, AudioEncoderConfiguration and MetadataConfiguration
     *   respectively.
     */
    static StartMulticastStreaming(ProfileToken: ReferenceToken) {
        return createStandardRequestBodyFromString(generateRequestElements('trt:StartMulticastStreaming')(['ProfileToken'])(ProfileToken))
                        .map(mapResponseXmlToJson<any>('trt:StartMulticastStreamingResponse'))
                      
    }

    /**
     * This command stop multicast streaming using a specified media profile of a device
     */
    static StopMulticastStreaming(ProfileToken: ReferenceToken) {
        return createStandardRequestBodyFromString(generateRequestElements('trt:StopMulticastStreaming')(['ProfileToken'])(ProfileToken))
                        .map(mapResponseXmlToJson<any>('trt:StopMulticastStreamingResponse'))
                      
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
    static SetSynchronizationPoint(ProfileToken: ReferenceToken) {
        return createStandardRequestBodyFromString(generateRequestElements('trt:SetSynchronizationPoint')(['ProfileToken'])(ProfileToken))
                        .map(mapResponseXmlToJson<any>('trt:SetSynchronizationPointResponse'))
                      
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
    static GetSnapshotUri(ProfileToken: ReferenceToken) {
        return createStandardRequestBodyFromString(generateRequestElements('trt:GetSnapshotUri')(['ProfileToken'])(ProfileToken))
                        .map(mapResponseXmlToJson<any>('trt:GetSnapshotUriResponse'))
                      
    }

    /**
     * A device returns the information for current video source mode and settable video source modes of specified video source. A device that indicates a capability of  VideoSourceModes shall support this command.
     */
    static GetVideoSourceModes(VideoSourceToken: ReferenceToken) {
        return createStandardRequestBodyFromString(generateRequestElements('trt:GetVideoSourceModes')(['VideoSourceToken'])(VideoSourceToken))
                        .map(mapResponseXmlToJson<any>('trt:GetVideoSourceModesResponse'))
                      
    }

    /**
     * SetVideoSourceMode changes the media profile structure relating to video source for the specified video source mode. A device that indicates a capability of VideoSourceModes shall support this command. The behavior after changing the mode is not defined in this specification.
     */
    static SetVideoSourceMode(VideoSourceToken: ReferenceToken, VideoSourceModeToken: ReferenceToken) {
        return createStandardRequestBodyFromString(generateRequestElements('trt:SetVideoSourceMode')(['VideoSourceToken','VideoSourceModeToken'])(VideoSourceToken,VideoSourceModeToken))
                        .map(mapResponseXmlToJson<any>('trt:SetVideoSourceModeResponse'))
                      
    }

    /**
     * Get the OSDs.
     */
    static GetOSDs(ConfigurationToken?: ReferenceToken) {
        return createStandardRequestBodyFromString(generateRequestElements('trt:GetOSDs')(['ConfigurationToken'])(ConfigurationToken))
                        .map(mapResponseXmlToJson<any>('trt:GetOSDsResponse'))
                      
    }

    /**
     * Get the OSD.
     */
    static GetOSD(OSDToken: ReferenceToken) {
        return createStandardRequestBodyFromString(generateRequestElements('trt:GetOSD')(['OSDToken'])(OSDToken))
                        .map(mapResponseXmlToJson<any>('trt:GetOSDResponse'))
                      
    }

    /**
     * Get the OSD Options.
     */
    static GetOSDOptions(ConfigurationToken: ReferenceToken) {
        return createStandardRequestBodyFromString(generateRequestElements('trt:GetOSDOptions')(['ConfigurationToken'])(ConfigurationToken))
                        .map(mapResponseXmlToJson<any>('trt:GetOSDOptionsResponse'))
                      
    }

    /**
     * Set the OSD
     */
    static SetOSD(OSD: OSDConfiguration) {
        return createStandardRequestBodyFromString(generateRequestElements('trt:SetOSD')(['OSD'])(OSD))
                        .map(mapResponseXmlToJson<any>('trt:SetOSDResponse'))
                      
    }

    /**
     * Create the OSD.
     */
    static CreateOSD(OSD: OSDConfiguration) {
        return createStandardRequestBodyFromString(generateRequestElements('trt:CreateOSD')(['OSD'])(OSD))
                        .map(mapResponseXmlToJson<any>('trt:CreateOSDResponse'))
                      
    }

    /**
     * Delete the OSD.
     */
    static DeleteOSD(OSDToken: ReferenceToken) {
        return createStandardRequestBodyFromString(generateRequestElements('trt:DeleteOSD')(['OSDToken'])(OSDToken))
                        .map(mapResponseXmlToJson<any>('trt:DeleteOSDResponse'))
                      
    }

    /**
     * Returns the capabilities of the media service. The result is returned in a typed answer.
     */
    GetServiceCapabilities() {
        return ONVIFMedia.GetServiceCapabilities().run(this.config)
    }

    /**
     * This command lists all available physical video inputs of the device.
     */
    GetVideoSources() {
        return ONVIFMedia.GetVideoSources().run(this.config)
    }

    /**
     * This command lists all available physical audio inputs of the device.
     */
    GetAudioSources() {
        return ONVIFMedia.GetAudioSources().run(this.config)
    }

    /**
     * This command lists all available physical audio outputs of the device.
     */
    GetAudioOutputs() {
        return ONVIFMedia.GetAudioOutputs().run(this.config)
    }

    /**
     * This operation creates a new empty media profile. The media profile shall be created in the
     *   device and shall be persistent (remain after reboot). A created profile shall be deletable and a device shall set the “fixed” attribute to false in the
     *   returned Profile.
     */
    CreateProfile(Name: Name, Token: ReferenceToken) {
        return ONVIFMedia.CreateProfile(Name,Token).run(this.config)
    }

    /**
     * If the profile token is already known, a profile can be fetched through the GetProfile command.
     */
    GetProfile(ProfileToken: ReferenceToken) {
        return ONVIFMedia.GetProfile(ProfileToken).run(this.config)
    }

    /**
     * Any endpoint can ask for the existing media profiles of a device using the GetProfiles
     *   command. Pre-configured or dynamically configured profiles can be retrieved using this
     *   command. This command lists all configured profiles in a device. The client does not need to
     *   know the media profile in order to use the command.
     */
    GetProfiles() {
        return ONVIFMedia.GetProfiles().run(this.config)
    }

    /**
     * This operation adds a VideoEncoderConfiguration to an existing media profile. If a
     *   configuration exists in the media profile, it will be replaced. The change shall be persistent. A device shall
     *   support adding a compatible VideoEncoderConfiguration to a Profile containing a VideoSourceConfiguration and shall
     *   support streaming video data of such a profile.
     *   
     */
    AddVideoEncoderConfiguration(ProfileToken: ReferenceToken, ConfigurationToken: ReferenceToken) {
        return ONVIFMedia.AddVideoEncoderConfiguration(ProfileToken,ConfigurationToken).run(this.config)
    }

    /**
     * This operation removes a VideoEncoderConfiguration from an existing media profile. If the
     *   media profile does not contain a VideoEncoderConfiguration, the operation has no effect. The removal shall be persistent.
     */
    RemoveVideoEncoderConfiguration(ProfileToken: ReferenceToken) {
        return ONVIFMedia.RemoveVideoEncoderConfiguration(ProfileToken).run(this.config)
    }

    /**
     * This operation adds a VideoSourceConfiguration to an existing media profile. If such a
     *   configuration exists in the media profile, it will be replaced. The change shall be persistent.
     */
    AddVideoSourceConfiguration(ProfileToken: ReferenceToken, ConfigurationToken: ReferenceToken) {
        return ONVIFMedia.AddVideoSourceConfiguration(ProfileToken,ConfigurationToken).run(this.config)
    }

    /**
     * This operation removes a VideoSourceConfiguration from an existing media profile. If the
     *   media profile does not contain a VideoSourceConfiguration, the operation has no effect. The removal shall be persistent. Video source configurations should only be removed after removing a
     *   VideoEncoderConfiguration from the media profile.
     */
    RemoveVideoSourceConfiguration(ProfileToken: ReferenceToken) {
        return ONVIFMedia.RemoveVideoSourceConfiguration(ProfileToken).run(this.config)
    }

    /**
     * This operation adds an AudioEncoderConfiguration to an existing media profile. If a 
     *   configuration exists in the media profile, it will be replaced. The change shall be persistent. A device shall
     *   support adding a compatible AudioEncoderConfiguration to a profile containing an AudioSourceConfiguration and shall
     *   support streaming audio data of such a profile.
     *   
     */
    AddAudioEncoderConfiguration(ProfileToken: ReferenceToken, ConfigurationToken: ReferenceToken) {
        return ONVIFMedia.AddAudioEncoderConfiguration(ProfileToken,ConfigurationToken).run(this.config)
    }

    /**
     * This operation removes an AudioEncoderConfiguration from an existing media profile. If the
     *   media profile does not contain an AudioEncoderConfiguration, the operation has no effect.
     *   The removal shall be persistent.
     */
    RemoveAudioEncoderConfiguration(ProfileToken: ReferenceToken) {
        return ONVIFMedia.RemoveAudioEncoderConfiguration(ProfileToken).run(this.config)
    }

    /**
     * This operation adds an AudioSourceConfiguration to an existing media profile. If a
     *   configuration exists in the media profile, it will be replaced. The change shall be persistent.
     */
    AddAudioSourceConfiguration(ProfileToken: ReferenceToken, ConfigurationToken: ReferenceToken) {
        return ONVIFMedia.AddAudioSourceConfiguration(ProfileToken,ConfigurationToken).run(this.config)
    }

    /**
     * This operation removes an AudioSourceConfiguration from an existing media profile. If the
     *   media profile does not contain an AudioSourceConfiguration, the operation has no effect. The
     *   removal shall be persistent. Audio source configurations should only be removed after removing an
     *   AudioEncoderConfiguration from the media profile.
     */
    RemoveAudioSourceConfiguration(ProfileToken: ReferenceToken) {
        return ONVIFMedia.RemoveAudioSourceConfiguration(ProfileToken).run(this.config)
    }

    /**
     * This operation adds a PTZConfiguration to an existing media profile. If a configuration exists
     *   in the media profile, it will be replaced. The change shall be persistent. Adding a PTZConfiguration to a media profile means that streams using that media profile can
     *   contain PTZ status (in the metadata), and that the media profile can be used for controlling
     *   PTZ movement.
     */
    AddPTZConfiguration(ProfileToken: ReferenceToken, ConfigurationToken: ReferenceToken) {
        return ONVIFMedia.AddPTZConfiguration(ProfileToken,ConfigurationToken).run(this.config)
    }

    /**
     * This operation removes a PTZConfiguration from an existing media profile. If the media profile
     *   does not contain a PTZConfiguration, the operation has no effect. The removal shall be persistent.
     */
    RemovePTZConfiguration(ProfileToken: ReferenceToken) {
        return ONVIFMedia.RemovePTZConfiguration(ProfileToken).run(this.config)
    }

    /**
     * This operation adds a VideoAnalytics configuration to an existing media profile. If a
     *   configuration exists in the media profile, it will be replaced. The change shall be persistent. Adding a VideoAnalyticsConfiguration to a media profile means that streams using that media
     *   profile can contain video analytics data (in the metadata) as defined by the submitted configuration reference. A profile containing only a video analytics configuration but no video source configuration is incomplete. Therefore, a client should first add a video source configuration to a profile before adding a video analytics configuration. The device can deny adding of a video analytics
     *   configuration before a video source configuration.
     */
    AddVideoAnalyticsConfiguration(ProfileToken: ReferenceToken, ConfigurationToken: ReferenceToken) {
        return ONVIFMedia.AddVideoAnalyticsConfiguration(ProfileToken,ConfigurationToken).run(this.config)
    }

    /**
     * This operation removes a VideoAnalyticsConfiguration from an existing media profile. If the media profile does not contain a VideoAnalyticsConfiguration, the operation has no effect.
     *   The removal shall be persistent.
     */
    RemoveVideoAnalyticsConfiguration(ProfileToken: ReferenceToken) {
        return ONVIFMedia.RemoveVideoAnalyticsConfiguration(ProfileToken).run(this.config)
    }

    /**
     * This operation adds a Metadata configuration to an existing media profile. If a configuration exists in the media profile, it will be replaced. The change shall be persistent. Adding a MetadataConfiguration to a Profile means that streams using that profile contain metadata. Metadata can consist of events, PTZ status, and/or video analytics data.
     */
    AddMetadataConfiguration(ProfileToken: ReferenceToken, ConfigurationToken: ReferenceToken) {
        return ONVIFMedia.AddMetadataConfiguration(ProfileToken,ConfigurationToken).run(this.config)
    }

    /**
     * This operation removes a MetadataConfiguration from an existing media profile. If the media profile does not contain a MetadataConfiguration, the operation has no effect. The removal shall be persistent.
     */
    RemoveMetadataConfiguration(ProfileToken: ReferenceToken) {
        return ONVIFMedia.RemoveMetadataConfiguration(ProfileToken).run(this.config)
    }

    /**
     * This operation adds an AudioOutputConfiguration to an existing media profile. If a configuration exists in the media profile, it will be replaced. The change shall be persistent.
     */
    AddAudioOutputConfiguration(ProfileToken: ReferenceToken, ConfigurationToken: ReferenceToken) {
        return ONVIFMedia.AddAudioOutputConfiguration(ProfileToken,ConfigurationToken).run(this.config)
    }

    /**
     * This operation removes an AudioOutputConfiguration from an existing media profile. If the media profile does not contain an AudioOutputConfiguration, the operation has no effect. The removal shall be persistent.
     */
    RemoveAudioOutputConfiguration(ProfileToken: ReferenceToken) {
        return ONVIFMedia.RemoveAudioOutputConfiguration(ProfileToken).run(this.config)
    }

    /**
     * This operation adds an AudioDecoderConfiguration to an existing media profile. If a configuration exists in the media profile, it shall be replaced. The change shall be persistent.
     */
    AddAudioDecoderConfiguration(ProfileToken: ReferenceToken, ConfigurationToken: ReferenceToken) {
        return ONVIFMedia.AddAudioDecoderConfiguration(ProfileToken,ConfigurationToken).run(this.config)
    }

    /**
     * This operation removes an AudioDecoderConfiguration from an existing media profile. If the media profile does not contain an AudioDecoderConfiguration, the operation has no effect. The removal shall be persistent.
     */
    RemoveAudioDecoderConfiguration(ProfileToken: ReferenceToken) {
        return ONVIFMedia.RemoveAudioDecoderConfiguration(ProfileToken).run(this.config)
    }

    /**
     * This operation deletes a profile. This change shall always be persistent. Deletion of a profile is only possible for non-fixed profiles
     */
    DeleteProfile(ProfileToken: ReferenceToken) {
        return ONVIFMedia.DeleteProfile(ProfileToken).run(this.config)
    }

    /**
     * This operation lists all existing video source configurations for a device. The client need not know anything about the video source configurations in order to use the command.
     */
    GetVideoSourceConfigurations() {
        return ONVIFMedia.GetVideoSourceConfigurations().run(this.config)
    }

    /**
     * This operation lists all existing video encoder configurations of a device. This command lists all configured video encoder configurations in a device. The client need not know anything apriori about the video encoder configurations in order to use the command.
     */
    GetVideoEncoderConfigurations() {
        return ONVIFMedia.GetVideoEncoderConfigurations().run(this.config)
    }

    /**
     * This operation lists all existing audio source configurations of a device. This command lists all audio source configurations in a device. The client need not know anything apriori about the audio source configurations in order to use the command.
     */
    GetAudioSourceConfigurations() {
        return ONVIFMedia.GetAudioSourceConfigurations().run(this.config)
    }

    /**
     * This operation lists all existing device audio encoder configurations. The client need not know anything apriori about the audio encoder configurations in order to use the command.
     */
    GetAudioEncoderConfigurations() {
        return ONVIFMedia.GetAudioEncoderConfigurations().run(this.config)
    }

    /**
     * This operation lists all video analytics configurations of a device. This command lists all configured video analytics in a device. The client need not know anything apriori about the video analytics in order to use the command.
     */
    GetVideoAnalyticsConfigurations() {
        return ONVIFMedia.GetVideoAnalyticsConfigurations().run(this.config)
    }

    /**
     * This operation lists all existing metadata configurations. The client need not know anything apriori about the metadata in order to use the command.
     */
    GetMetadataConfigurations() {
        return ONVIFMedia.GetMetadataConfigurations().run(this.config)
    }

    /**
     * This command lists all existing AudioOutputConfigurations of a device. The NVC need not know anything apriori about the audio configurations to use this command.
     */
    GetAudioOutputConfigurations() {
        return ONVIFMedia.GetAudioOutputConfigurations().run(this.config)
    }

    /**
     * This command lists all existing AudioDecoderConfigurations of a device. The NVC need not know anything apriori about the audio decoder configurations in order to
     *   use this command.
     */
    GetAudioDecoderConfigurations() {
        return ONVIFMedia.GetAudioDecoderConfigurations().run(this.config)
    }

    /**
     * If the video source configuration token is already known, the video source configuration can be fetched through the GetVideoSourceConfiguration command.
     */
    GetVideoSourceConfiguration(ConfigurationToken: ReferenceToken) {
        return ONVIFMedia.GetVideoSourceConfiguration(ConfigurationToken).run(this.config)
    }

    /**
     * If the video encoder configuration token is already known, the encoder configuration can be fetched through the GetVideoEncoderConfiguration command.
     */
    GetVideoEncoderConfiguration(ConfigurationToken: ReferenceToken) {
        return ONVIFMedia.GetVideoEncoderConfiguration(ConfigurationToken).run(this.config)
    }

    /**
     * The GetAudioSourceConfiguration command fetches the audio source configurations if the audio source configuration token is already known. An
     */
    GetAudioSourceConfiguration(ConfigurationToken: ReferenceToken) {
        return ONVIFMedia.GetAudioSourceConfiguration(ConfigurationToken).run(this.config)
    }

    /**
     * The GetAudioEncoderConfiguration command fetches the encoder configuration if the audio encoder configuration token is known.
     */
    GetAudioEncoderConfiguration(ConfigurationToken: ReferenceToken) {
        return ONVIFMedia.GetAudioEncoderConfiguration(ConfigurationToken).run(this.config)
    }

    /**
     * The GetVideoAnalyticsConfiguration command fetches the video analytics configuration if the video analytics token is known.
     */
    GetVideoAnalyticsConfiguration(ConfigurationToken: ReferenceToken) {
        return ONVIFMedia.GetVideoAnalyticsConfiguration(ConfigurationToken).run(this.config)
    }

    /**
     * The GetMetadataConfiguration command fetches the metadata configuration if the metadata token is known.
     */
    GetMetadataConfiguration(ConfigurationToken: ReferenceToken) {
        return ONVIFMedia.GetMetadataConfiguration(ConfigurationToken).run(this.config)
    }

    /**
     * If the audio output configuration token is already known, the output configuration can be fetched through the GetAudioOutputConfiguration command.
     */
    GetAudioOutputConfiguration(ConfigurationToken: ReferenceToken) {
        return ONVIFMedia.GetAudioOutputConfiguration(ConfigurationToken).run(this.config)
    }

    /**
     * If the audio decoder configuration token is already known, the decoder configuration can be fetched through the GetAudioDecoderConfiguration command.
     */
    GetAudioDecoderConfiguration(ConfigurationToken: ReferenceToken) {
        return ONVIFMedia.GetAudioDecoderConfiguration(ConfigurationToken).run(this.config)
    }

    /**
     * This operation lists all the video encoder configurations of the device that are compatible with a certain media profile. Each of the returned configurations shall be a valid input parameter for the AddVideoEncoderConfiguration command on the media profile. The result will vary depending on the capabilities, configurations and settings in the device.
     */
    GetCompatibleVideoEncoderConfigurations(ProfileToken: ReferenceToken) {
        return ONVIFMedia.GetCompatibleVideoEncoderConfigurations(ProfileToken).run(this.config)
    }

    /**
     * This operation requests all the video source configurations of the device that are compatible
     *   with a certain media profile. Each of the returned configurations shall be a valid input
     *   parameter for the AddVideoSourceConfiguration command on the media profile. The result
     *   will vary depending on the capabilities, configurations and settings in the device.
     */
    GetCompatibleVideoSourceConfigurations(ProfileToken: ReferenceToken) {
        return ONVIFMedia.GetCompatibleVideoSourceConfigurations(ProfileToken).run(this.config)
    }

    /**
     * This operation requests all audio encoder configurations of a device that are compatible with a certain media profile. Each of the returned configurations shall be a valid input parameter for the AddAudioSourceConfiguration command on the media profile. The result varies depending on the capabilities, configurations and settings in the device.
     */
    GetCompatibleAudioEncoderConfigurations(ProfileToken: ReferenceToken) {
        return ONVIFMedia.GetCompatibleAudioEncoderConfigurations(ProfileToken).run(this.config)
    }

    /**
     * This operation requests all audio source configurations of the device that are compatible with a certain media profile. Each of the returned configurations shall be a valid input parameter for the AddAudioEncoderConfiguration command on the media profile. The result varies depending on the capabilities, configurations and settings in the device.
     */
    GetCompatibleAudioSourceConfigurations(ProfileToken: ReferenceToken) {
        return ONVIFMedia.GetCompatibleAudioSourceConfigurations(ProfileToken).run(this.config)
    }

    /**
     * This operation requests all video analytic configurations of the device that are compatible with a certain media profile. Each of the returned configurations shall be a valid input parameter for the AddVideoAnalyticsConfiguration command on the media profile. The result varies depending on the capabilities, configurations and settings in the device.
     */
    GetCompatibleVideoAnalyticsConfigurations(ProfileToken: ReferenceToken) {
        return ONVIFMedia.GetCompatibleVideoAnalyticsConfigurations(ProfileToken).run(this.config)
    }

    /**
     * This operation requests all the metadata configurations of the device that are compatible with a certain media profile. Each of the returned configurations shall be a valid input parameter for the AddMetadataConfiguration command on the media profile. The result varies depending on the capabilities, configurations and settings in the device.
     */
    GetCompatibleMetadataConfigurations(ProfileToken: ReferenceToken) {
        return ONVIFMedia.GetCompatibleMetadataConfigurations(ProfileToken).run(this.config)
    }

    /**
     * This command lists all audio output configurations of a device that are compatible with a certain media profile. Each returned configuration shall be a valid input for the 
     *   AddAudioOutputConfiguration command.
     */
    GetCompatibleAudioOutputConfigurations(ProfileToken: ReferenceToken) {
        return ONVIFMedia.GetCompatibleAudioOutputConfigurations(ProfileToken).run(this.config)
    }

    /**
     * This operation lists all the audio decoder configurations of the device that are compatible with a certain media profile. Each of the returned configurations shall be a valid input parameter for the AddAudioDecoderConfiguration command on the media profile.
     */
    GetCompatibleAudioDecoderConfigurations(ProfileToken: ReferenceToken) {
        return ONVIFMedia.GetCompatibleAudioDecoderConfigurations(ProfileToken).run(this.config)
    }

    /**
     * This operation modifies a video source configuration. The ForcePersistence flag indicates if the changes shall remain after reboot of the device. Running streams using this configuration may be immediately updated according to the new settings. The changes are not guaranteed to take effect unless the client requests a new stream URI and restarts any affected stream. NVC methods for changing a running stream are out of scope for this specification.
     */
    SetVideoSourceConfiguration(Configuration: VideoSourceConfiguration, ForcePersistence: boolean) {
        return ONVIFMedia.SetVideoSourceConfiguration(Configuration,ForcePersistence).run(this.config)
    }

    /**
     * This operation modifies a video encoder configuration. The ForcePersistence flag indicates if the changes shall remain after reboot of the device. Changes in the Multicast settings shall always be persistent. Running streams using this configuration may be immediately updated according to the new settings. The changes are not guaranteed to take effect unless the client requests a new stream URI and restarts any affected stream. NVC methods for changing a running stream are out of scope for this specification. SessionTimeout is provided as a hint for keeping rtsp session by a device. If necessary the device may adapt parameter values for SessionTimeout elements without returning an error. For the time between keep alive calls the client shall adhere to the timeout value signaled via RTSP.
     */
    SetVideoEncoderConfiguration(Configuration: VideoEncoderConfiguration, ForcePersistence: boolean) {
        return ONVIFMedia.SetVideoEncoderConfiguration(Configuration,ForcePersistence).run(this.config)
    }

    /**
     * This operation modifies an audio source configuration. The ForcePersistence flag indicates if
     *   the changes shall remain after reboot of the device. Running streams using this configuration
     *   may be immediately updated according to the new settings. The changes are not guaranteed
     *   to take effect unless the client requests a new stream URI and restarts any affected stream
     *   NVC methods for changing a running stream are out of scope for this specification.
     */
    SetAudioSourceConfiguration(Configuration: AudioSourceConfiguration, ForcePersistence: boolean) {
        return ONVIFMedia.SetAudioSourceConfiguration(Configuration,ForcePersistence).run(this.config)
    }

    /**
     * This operation modifies an audio encoder configuration. The ForcePersistence flag indicates if
     *   the changes shall remain after reboot of the device. Running streams using this configuration may be immediately updated
     *   according to the new settings. The changes are not guaranteed to take effect unless the client
     *   requests a new stream URI and restarts any affected streams. NVC methods for changing a
     *   running stream are out of scope for this specification.
     */
    SetAudioEncoderConfiguration(Configuration: AudioEncoderConfiguration, ForcePersistence: boolean) {
        return ONVIFMedia.SetAudioEncoderConfiguration(Configuration,ForcePersistence).run(this.config)
    }

    /**
     * A video analytics configuration is modified using this command. The ForcePersistence flag
     *   indicates if the changes shall remain after reboot of the device or not. Running streams using
     *   this configuration shall be immediately updated according to the new settings. Otherwise
     *   inconsistencies can occur between the scene description processed by the rule engine and
     *   the notifications produced by analytics engine and rule engine which reference the very same
     *   video analytics configuration token.
     */
    SetVideoAnalyticsConfiguration(Configuration: VideoAnalyticsConfiguration, ForcePersistence: boolean) {
        return ONVIFMedia.SetVideoAnalyticsConfiguration(Configuration,ForcePersistence).run(this.config)
    }

    /**
     * This operation modifies a metadata configuration. The ForcePersistence flag indicates if the
     *   changes shall remain after reboot of the device. Changes in the Multicast settings shall
     *   always be persistent. Running streams using this configuration may be updated immediately
     *   according to the new settings. The changes are not guaranteed to take effect unless the client
     *   requests a new stream URI and restarts any affected streams. NVC methods for changing a
     *   running stream are out of scope for this specification.
     */
    SetMetadataConfiguration(Configuration: MetadataConfiguration, ForcePersistence: boolean) {
        return ONVIFMedia.SetMetadataConfiguration(Configuration,ForcePersistence).run(this.config)
    }

    /**
     * This operation modifies an audio output configuration. The ForcePersistence flag indicates if
     *   the changes shall remain after reboot of the device.
     */
    SetAudioOutputConfiguration(Configuration: AudioOutputConfiguration, ForcePersistence: boolean) {
        return ONVIFMedia.SetAudioOutputConfiguration(Configuration,ForcePersistence).run(this.config)
    }

    /**
     * This operation modifies an audio decoder configuration. The ForcePersistence flag indicates if
     *   the changes shall remain after reboot of the device.
     */
    SetAudioDecoderConfiguration(Configuration: AudioDecoderConfiguration, ForcePersistence: boolean) {
        return ONVIFMedia.SetAudioDecoderConfiguration(Configuration,ForcePersistence).run(this.config)
    }

    /**
     * This operation returns the available options  (supported values and ranges for video source configuration parameters) when the video source parameters are
     *   reconfigured If a video source configuration is specified, the options shall concern that
     *   particular configuration. If a media profile is specified, the options shall be compatible with
     *   that media profile.
     */
    GetVideoSourceConfigurationOptions(ConfigurationToken: ReferenceToken, ProfileToken: ReferenceToken) {
        return ONVIFMedia.GetVideoSourceConfigurationOptions(ConfigurationToken,ProfileToken).run(this.config)
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
    GetVideoEncoderConfigurationOptions(ConfigurationToken: ReferenceToken, ProfileToken: ReferenceToken) {
        return ONVIFMedia.GetVideoEncoderConfigurationOptions(ConfigurationToken,ProfileToken).run(this.config)
    }

    /**
     * This operation returns the available options (supported values and ranges for audio source configuration parameters) when the audio source parameters are
     *   reconfigured. If an audio source configuration is specified, the options shall concern that
     *   particular configuration. If a media profile is specified, the options shall be compatible with
     *   that media profile.
     */
    GetAudioSourceConfigurationOptions(ConfigurationToken: ReferenceToken, ProfileToken: ReferenceToken) {
        return ONVIFMedia.GetAudioSourceConfigurationOptions(ConfigurationToken,ProfileToken).run(this.config)
    }

    /**
     * This operation returns the available options  (supported values and ranges for audio encoder configuration parameters) when the audio encoder parameters are
     *   reconfigured.
     */
    GetAudioEncoderConfigurationOptions(ConfigurationToken: ReferenceToken, ProfileToken: ReferenceToken) {
        return ONVIFMedia.GetAudioEncoderConfigurationOptions(ConfigurationToken,ProfileToken).run(this.config)
    }

    /**
     * This operation returns the available options (supported values and ranges for metadata configuration parameters) for changing the metadata configuration.
     */
    GetMetadataConfigurationOptions(ConfigurationToken: ReferenceToken, ProfileToken: ReferenceToken) {
        return ONVIFMedia.GetMetadataConfigurationOptions(ConfigurationToken,ProfileToken).run(this.config)
    }

    /**
     * This operation returns the available options (supported values and ranges for audio output configuration parameters) for configuring an audio output.
     */
    GetAudioOutputConfigurationOptions(ConfigurationToken: ReferenceToken, ProfileToken: ReferenceToken) {
        return ONVIFMedia.GetAudioOutputConfigurationOptions(ConfigurationToken,ProfileToken).run(this.config)
    }

    /**
     * This command list the audio decoding capabilities for a given profile and configuration of a
     *   device.
     */
    GetAudioDecoderConfigurationOptions(ConfigurationToken: ReferenceToken, ProfileToken: ReferenceToken) {
        return ONVIFMedia.GetAudioDecoderConfigurationOptions(ConfigurationToken,ProfileToken).run(this.config)
    }

    /**
     * The GetGuaranteedNumberOfVideoEncoderInstances command can be used to request the
     *   minimum number of guaranteed video encoder instances (applications) per Video Source
     *   Configuration.
     */
    GetGuaranteedNumberOfVideoEncoderInstances(ConfigurationToken: ReferenceToken) {
        return ONVIFMedia.GetGuaranteedNumberOfVideoEncoderInstances(ConfigurationToken).run(this.config)
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
    GetStreamUri(StreamSetup: StreamSetup, ProfileToken: ReferenceToken) {
        return ONVIFMedia.GetStreamUri(StreamSetup,ProfileToken).run(this.config)
    }

    /**
     * This command starts multicast streaming using a specified media profile of a device.
     *   Streaming continues until StopMulticastStreaming is called for the same Profile. The
     *   streaming shall continue after a reboot of the device until a StopMulticastStreaming request is
     *   received. The multicast address, port and TTL are configured in the
     *   VideoEncoderConfiguration, AudioEncoderConfiguration and MetadataConfiguration
     *   respectively.
     */
    StartMulticastStreaming(ProfileToken: ReferenceToken) {
        return ONVIFMedia.StartMulticastStreaming(ProfileToken).run(this.config)
    }

    /**
     * This command stop multicast streaming using a specified media profile of a device
     */
    StopMulticastStreaming(ProfileToken: ReferenceToken) {
        return ONVIFMedia.StopMulticastStreaming(ProfileToken).run(this.config)
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
    SetSynchronizationPoint(ProfileToken: ReferenceToken) {
        return ONVIFMedia.SetSynchronizationPoint(ProfileToken).run(this.config)
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
    GetSnapshotUri(ProfileToken: ReferenceToken) {
        return ONVIFMedia.GetSnapshotUri(ProfileToken).run(this.config)
    }

    /**
     * A device returns the information for current video source mode and settable video source modes of specified video source. A device that indicates a capability of  VideoSourceModes shall support this command.
     */
    GetVideoSourceModes(VideoSourceToken: ReferenceToken) {
        return ONVIFMedia.GetVideoSourceModes(VideoSourceToken).run(this.config)
    }

    /**
     * SetVideoSourceMode changes the media profile structure relating to video source for the specified video source mode. A device that indicates a capability of VideoSourceModes shall support this command. The behavior after changing the mode is not defined in this specification.
     */
    SetVideoSourceMode(VideoSourceToken: ReferenceToken, VideoSourceModeToken: ReferenceToken) {
        return ONVIFMedia.SetVideoSourceMode(VideoSourceToken,VideoSourceModeToken).run(this.config)
    }

    /**
     * Get the OSDs.
     */
    GetOSDs(ConfigurationToken: ReferenceToken) {
        return ONVIFMedia.GetOSDs(ConfigurationToken).run(this.config)
    }

    /**
     * Get the OSD.
     */
    GetOSD(OSDToken: ReferenceToken) {
        return ONVIFMedia.GetOSD(OSDToken).run(this.config)
    }

    /**
     * Get the OSD Options.
     */
    GetOSDOptions(ConfigurationToken: ReferenceToken) {
        return ONVIFMedia.GetOSDOptions(ConfigurationToken).run(this.config)
    }

    /**
     * Set the OSD
     */
    SetOSD(OSD: OSDConfiguration) {
        return ONVIFMedia.SetOSD(OSD).run(this.config)
    }

    /**
     * Create the OSD.
     */
    CreateOSD(OSD: OSDConfiguration) {
        return ONVIFMedia.CreateOSD(OSD).run(this.config)
    }

    /**
     * Delete the OSD.
     */
    DeleteOSD(OSDToken: ReferenceToken) {
        return ONVIFMedia.DeleteOSD(OSDToken).run(this.config)
    }
}
