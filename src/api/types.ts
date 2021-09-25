/**
 * 
 */
export type AbsoluteOrRelativeTimeType = any;
/**
 * Unique identifier for a physical or logical resource.
 * 			Tokens should be assigned such that they are unique within a device. Tokens must be at least unique within its class.
 * 			Length up to 64 characters. Token may be extended by intermediate terminal with adding prefix to make it global unique.
 * 			The length should be within 36 characters for generating at local device. See "Remote Token" section in Resource Query specification.
 */
export type ReferenceToken = string;
/**
 * User readable name. Length up to 64 characters.
 */
export type Name = string;
/**
 * 
 */
export type IntList = ReadonlyArray<number>;
/**
 * 
 */
export type FloatList = ReadonlyArray<number>;
/**
 * 
 */
export type StringAttrList = ReadonlyArray<string>;
/**
 * 
 */
export type StringList = ReadonlyArray<string>;
/**
 * 
 */
export type ReferenceTokenList = ReadonlyArray<ReferenceToken>;
/**
 * 
 */
export type NetworkInterfaceConfigPriority = number;
/**
 * 
 */
export type IPv4Address = string;
/**
 * 
 */
export type IPv6Address = string;
/**
 * 
 */
export type HwAddress = string;
/**
 * 
 */
export type DNSName = string;
/**
 * 
 */
export type Domain = string;
/**
 * 
 */
export type Dot11SSIDType = string;
/**
 * 
 */
export type Dot11PSK = string;
/**
 * 
 */
export type Dot11PSKPassphrase = string;
/**
 * 
 */
export type AuxiliaryData = string;
/**
 * 
 */
export type ReceiverReference = ReferenceToken;
/**
 * 
 */
export type RecordingReference = ReferenceToken;
/**
 * 
 */
export type TrackReference = ReferenceToken;
/**
 * 
 */
export type Description = string;
/**
 * 
 */
export type XPathExpression = string;
/**
 * 
 */
export type JobToken = ReferenceToken;
/**
 * 
 */
export type RecordingJobReference = ReferenceToken;
/**
 * 
 */
export type RecordingJobMode = string;
/**
 * 
 */
export type RecordingJobState = string;
/**
 * 
 * 	    'encodingStyle' indicates any canonicalization conventions followed in the contents of the containing element.  For example, the value 'http://schemas.xmlsoap.org/soap/encoding/' indicates the pattern described in SOAP specification
 * 	  
 */
export type encodingStyle = ReadonlyArray<string>;

/**
 * 
 */
export interface QueryExpressionType {
}

/**
 * 
 */
export interface TopicExpressionType {
}

/**
 * 
 */
export interface FilterType {
}

/**
 * 
 */
export interface SubscriptionPolicyType {
}

/**
 * 
 */
export interface NotificationMessageHolderType {
    readonly 'Message': any;
}

/**
 * 
 */
export interface SubscribeCreationFailedFaultType {
}

/**
 * 
 */
export interface InvalidFilterFaultType {
    readonly 'UnknownFilter': any;
}

/**
 * 
 */
export interface TopicExpressionDialectUnknownFaultType {
}

/**
 * 
 */
export interface InvalidTopicExpressionFaultType {
}

/**
 * 
 */
export interface TopicNotSupportedFaultType {
}

/**
 * 
 */
export interface MultipleTopicsSpecifiedFaultType {
}

/**
 * 
 */
export interface InvalidProducerPropertiesExpressionFaultType {
}

/**
 * 
 */
export interface InvalidMessageContentExpressionFaultType {
}

/**
 * 
 */
export interface UnrecognizedPolicyRequestFaultType {
    readonly 'UnrecognizedPolicy'?: any;
}

/**
 * 
 */
export interface UnsupportedPolicyRequestFaultType {
    readonly 'UnsupportedPolicy'?: any;
}

/**
 * 
 */
export interface NotifyMessageNotSupportedFaultType {
}

/**
 * 
 */
export interface UnacceptableInitialTerminationTimeFaultType {
    readonly 'MinimumTime': string;
    readonly 'MaximumTime'?: string;
}

/**
 * 
 */
export interface NoCurrentMessageOnTopicFaultType {
}

/**
 * 
 */
export interface UnableToGetMessagesFaultType {
}

/**
 * 
 */
export interface UnableToDestroyPullPointFaultType {
}

/**
 * 
 */
export interface UnableToCreatePullPointFaultType {
}

/**
 * 
 */
export interface UnacceptableTerminationTimeFaultType {
    readonly 'MinimumTime': string;
    readonly 'MaximumTime'?: string;
}

/**
 * 
 */
export interface UnableToDestroySubscriptionFaultType {
}

/**
 * 
 */
export interface PauseFailedFaultType {
}

/**
 * 
 */
export interface ResumeFailedFaultType {
}

/**
 * Range of values greater equal Min value and less equal Max value.
 */
export interface IntRange {
    readonly 'Min': number;
    readonly 'Max': number;
}

/**
 * 
 *   				Pan/tilt coordinate space selector. The following options are defined:
 * 						 http://www.onvif.org/ver10/tptz/PanTiltSpaces/PositionGenericSpace
 * 						 http://www.onvif.org/ver10/tptz/PanTiltSpaces/TranslationGenericSpace
 * 						 http://www.onvif.org/ver10/tptz/PanTiltSpaces/VelocityGenericSpace
 * 						 http://www.onvif.org/ver10/tptz/PanTiltSpaces/GenericSpeedSpace
 * 					
 * 				
 */
export interface Vector2D {
}

/**
 * 
 * 				Zoom coordinate space selector. The following options are defined:
 * 						 http://www.onvif.org/ver10/tptz/ZoomSpaces/PositionGenericSpace
 * 						 http://www.onvif.org/ver10/tptz/ZoomSpaces/TranslationGenericSpace
 * 						 http://www.onvif.org/ver10/tptz/ZoomSpaces/VelocityGenericSpace
 * 						 http://www.onvif.org/ver10/tptz/ZoomSpaces/ZoomGenericSpeedSpace
 * 					
 * 				
 */
export interface Vector1D {
}

/**
 * Pan and tilt position. The x component corresponds to pan and the y component to tilt.
 */
export interface PTZVector {
    readonly 'PanTilt'?: Vector2D;
    readonly 'Zoom'?: Vector1D;
}

/**
 * 
 *             Specifies the absolute position of the PTZ unit together with the Space references. The default absolute spaces of the corresponding PTZ configuration MUST be referenced within the Position element.
 *           
 */
export interface PTZStatus {
    readonly 'Position'?: PTZVector;
    readonly 'MoveStatus'?: PTZMoveStatus;
    readonly 'Error'?: string;
    readonly 'UtcTime': string;
}

/**
 * 
 *           
 */
export interface PTZMoveStatus {
    readonly 'PanTilt'?: MoveStatus;
    readonly 'Zoom'?: MoveStatus;
}

/**
 * 
 */
export interface Vector {
}

/**
 * 
 */
export interface Rectangle {
}

/**
 * 
 */
export interface Polygon {
    readonly 'Point': Vector;
}

/**
 * 
 * 					Acceptable values:
 * 					
 * 						http://www.onvif.org/ver10/colorspace/YCbCr - YCbCr
 * 							X attribute = Y value
 * 								Y attribute = Cb value
 * 								Z attribute = Cr value
 * 						
 * 						http://www.onvif.org/ver10/colorspace/RGB - RGB
 * 							X attribute = R value
 * 								Y attribute = G value
 * 								Z attribute = B value
 * 						
 * 					
 * 					If the Colorspace attribute is absent, YCbCr is implied.
 * 
 * 					Deprecated values:
 * 					
 * 						http://www.onvif.org/ver10/colorspace/CIELUV - CIE LUV
 * 						http://www.onvif.org/ver10/colorspace/CIELAB - CIE 1976 (L*a*b*)
 * 						http://www.onvif.org/ver10/colorspace/HSV - HSV
 * 					
 * 				
 */
export interface Color {
}

/**
 * 
 * 					Acceptable values are the same as in tt:Color.
 * 				
 */
export interface ColorCovariance {
}

/**
 * 
 */
export interface ColorDescriptor {
    readonly 'ColorCluster'?: any;
    readonly 'Color': Color;
    readonly 'Weight'?: number;
    readonly 'Covariance'?: ColorCovariance;
    readonly 'Extension'?: any;
}

/**
 * 
 */
export interface Transformation {
    readonly 'Translate'?: Vector;
    readonly 'Scale'?: Vector;
    readonly 'Extension'?: TransformationExtension;
}

/**
 * 
 */
export interface TransformationExtension {
}

/**
 * East west location as angle.
 */
export interface GeoLocation {
}

/**
 * Rotation around the x axis.
 */
export interface GeoOrientation {
}

/**
 * East west location as angle.
 */
export interface LocalLocation {
}

/**
 * Rotation around the y axis.
 */
export interface LocalOrientation {
}

/**
 * Location on earth.
 */
export interface LocationEntity {
    readonly 'GeoLocation'?: GeoLocation;
    readonly 'GeoOrientation'?: GeoOrientation;
    readonly 'LocalLocation'?: LocalLocation;
    readonly 'LocalOrientation'?: LocalOrientation;
}

/**
 * Base class for physical entities like inputs and outputs.
 */
export interface DeviceEntity {
}

/**
 * Rectangle defined by lower left corner position and size. Units are pixel.
 */
export interface IntRectangle {
}

/**
 * Range of a rectangle. The rectangle itself is defined by lower left corner position and size. Units are pixel.
 */
export interface IntRectangleRange {
    readonly 'XRange': IntRange;
    readonly 'YRange': IntRange;
    readonly 'WidthRange': IntRange;
    readonly 'HeightRange': IntRange;
}

/**
 * Range of values greater equal Min value and less equal Max value.
 */
export interface FloatRange {
    readonly 'Min': number;
    readonly 'Max': number;
}

/**
 * Range of duration greater equal Min duration and less equal Max duration.
 */
export interface DurationRange {
    readonly 'Min': string;
    readonly 'Max': string;
}

/**
 * List of values.
 */
export interface IntItems {
    readonly 'Items'?: number;
}

/**
 * 
 */
export interface FloatItems {
    readonly 'Items'?: number;
}

/**
 * 
 */
export interface AnyHolder {
}

/**
 * Representation of a physical video input.
 */
export interface VideoSource {
    readonly 'Framerate': number;
    readonly 'Resolution': VideoResolution;
    readonly 'Imaging'?: ImagingSettings;
    readonly 'Extension'?: VideoSourceExtension;
}

/**
 * Optional configuration of the image sensor. To be used if imaging service 2.00 is supported.
 */
export interface VideoSourceExtension {
    readonly 'Imaging'?: ImagingSettings20;
    readonly 'Extension'?: VideoSourceExtension2;
}

/**
 * 
 */
export interface VideoSourceExtension2 {
}

/**
 * Representation of a physical audio input.
 */
export interface AudioSource {
    readonly 'Channels': number;
}

/**
 * 
 * 			A media profile consists of a set of media configurations. Media profiles are used by a client
 * 			to configure properties of a media stream from an NVT.
 * 			An NVT shall provide at least one media profile at boot. An NVT should provide “ready to use”
 * 			profiles for the most common media configurations that the device offers.
 * 			A profile consists of a set of interconnected configuration entities. Configurations are provided
 * 			by the NVT and can be either static or created dynamically by the NVT. For example, the
 * 			dynamic configurations can be created by the NVT depending on current available encoding
 * 			resources.
 * 		
 */
export interface Profile {
    readonly 'Name': Name;
    readonly 'VideoSourceConfiguration'?: VideoSourceConfiguration;
    readonly 'AudioSourceConfiguration'?: AudioSourceConfiguration;
    readonly 'VideoEncoderConfiguration'?: VideoEncoderConfiguration;
    readonly 'AudioEncoderConfiguration'?: AudioEncoderConfiguration;
    readonly 'VideoAnalyticsConfiguration'?: VideoAnalyticsConfiguration;
    readonly 'PTZConfiguration'?: PTZConfiguration;
    readonly 'MetadataConfiguration'?: MetadataConfiguration;
    readonly 'Extension'?: ProfileExtension;
}

/**
 * Optional configuration of the Audio output.
 */
export interface ProfileExtension {
    readonly 'AudioOutputConfiguration'?: AudioOutputConfiguration;
    readonly 'AudioDecoderConfiguration'?: AudioDecoderConfiguration;
    readonly 'Extension'?: ProfileExtension2;
}

/**
 * 
 */
export interface ProfileExtension2 {
}

/**
 * Base type defining the common properties of a configuration.
 */
export interface ConfigurationEntity {
    readonly 'Name': Name;
    readonly 'UseCount': number;
}

/**
 * Reference to the physical input.
 */
export interface VideoSourceConfiguration {
    readonly 'SourceToken': ReferenceToken;
    readonly 'Bounds': IntRectangle;
    readonly 'Extension'?: VideoSourceConfigurationExtension;
}

/**
 * Optional element to configure rotation of captured image.
 * 						What resolutions a device supports shall be unaffected by the Rotate parameters.
 * 						If a device is configured with Rotate=AUTO, the device shall take control over the Degree parameter and automatically update it so that a client can query current rotation.
 * 						The device shall automatically apply the same rotation to its pan/tilt control direction depending on the following condition: 
 * 						if Reverse=AUTO in PTControlDirection or if the device doesn’t support Reverse in PTControlDirection
 * 					
 */
export interface VideoSourceConfigurationExtension {
    readonly 'Rotate'?: Rotate;
    readonly 'Extension'?: VideoSourceConfigurationExtension2;
}

/**
 * Optional element describing the geometric lens distortion. Multiple instances for future variable lens support.
 */
export interface VideoSourceConfigurationExtension2 {
    readonly 'LensDescription'?: LensDescription;
    readonly 'SceneOrientation'?: SceneOrientation;
}

/**
 * Parameter to enable/disable Rotation feature.
 */
export interface Rotate {
    readonly 'Mode': RotateMode;
    readonly 'Degree'?: number;
    readonly 'Extension'?: RotateExtension;
}

/**
 * 
 */
export interface RotateExtension {
}

/**
 * Angle of incidence.
 */
export interface LensProjection {
    readonly 'Angle': number;
    readonly 'Radius': number;
    readonly 'Transmittance'?: number;
}

/**
 * Optional horizontal offset of the lens center in normalized coordinates.
 */
export interface LensOffset {
}

/**
 * Offset of the lens center to the imager center in normalized coordinates.
 */
export interface LensDescription {
    readonly 'Offset': LensOffset;
    readonly 'Projection': LensProjection;
    readonly 'XFactor': number;
}

/**
 * 
 * 						Supported range for the capturing area.
 * 						Device that does not support cropped streaming shall express BoundsRange option as mentioned below
 * 						BoundsRange->XRange and BoundsRange->YRange with same Min/Max values HeightRange and WidthRange Min/Max values same as VideoSource Height and Width Limits.
 * 					
 */
export interface VideoSourceConfigurationOptions {
    readonly 'BoundsRange': IntRectangleRange;
    readonly 'VideoSourceTokensAvailable': ReferenceToken;
    readonly 'Extension'?: VideoSourceConfigurationOptionsExtension;
}

/**
 * Options of parameters for Rotation feature.
 */
export interface VideoSourceConfigurationOptionsExtension {
    readonly 'Rotate'?: RotateOptions;
    readonly 'Extension'?: VideoSourceConfigurationOptionsExtension2;
}

/**
 * Scene orientation modes supported by the device for this configuration.
 */
export interface VideoSourceConfigurationOptionsExtension2 {
    readonly 'SceneOrientationMode'?: SceneOrientationMode;
}

/**
 * Supported options of Rotate mode parameter.
 */
export interface RotateOptions {
    readonly 'Mode': RotateMode;
    readonly 'DegreeList'?: IntItems;
    readonly 'Extension'?: RotateOptionsExtension;
}

/**
 * 
 */
export interface RotateOptionsExtension {
}

/**
 * 
 * 						Parameter to assign the way the camera determines the scene orientation.
 * 					
 */
export interface SceneOrientation {
    readonly 'Mode': SceneOrientationMode;
    readonly 'Orientation'?: string;
}

/**
 * Used video codec, either Jpeg, H.264 or Mpeg4
 */
export interface VideoEncoderConfiguration {
    readonly 'Encoding': VideoEncoding;
    readonly 'Resolution': VideoResolution;
    readonly 'Quality': number;
    readonly 'RateControl'?: VideoRateControl;
    readonly 'MPEG4'?: Mpeg4Configuration;
    readonly 'H264'?: H264Configuration;
    readonly 'Multicast': MulticastConfiguration;
    readonly 'SessionTimeout': string;
}

/**
 * Number of the columns of the Video image.
 */
export interface VideoResolution {
    readonly 'Width': number;
    readonly 'Height': number;
}

/**
 * Maximum output framerate in fps. If an EncodingInterval is provided the resulting encoded framerate will be reduced by the given factor.
 */
export interface VideoRateControl {
    readonly 'FrameRateLimit': number;
    readonly 'EncodingInterval': number;
    readonly 'BitrateLimit': number;
}

/**
 * Determines the interval in which the I-Frames will be coded. An entry of 1 indicates I-Frames are continuously generated. An entry of 2 indicates that every 2nd image is an I-Frame, and 3 only every 3rd frame, etc. The frames in between are coded as P or B Frames.
 */
export interface Mpeg4Configuration {
    readonly 'GovLength': number;
    readonly 'Mpeg4Profile': Mpeg4Profile;
}

/**
 * Group of Video frames length. Determines typically the interval in which the I-Frames will be coded. An entry of 1 indicates I-Frames are continuously generated. An entry of 2 indicates that every 2nd image is an I-Frame, and 3 only every 3rd frame, etc. The frames in between are coded as P or B Frames.
 */
export interface H264Configuration {
    readonly 'GovLength': number;
    readonly 'H264Profile': H264Profile;
}

/**
 * Range of the quality values. A high value means higher quality.
 */
export interface VideoEncoderConfigurationOptions {
    readonly 'QualityRange': IntRange;
    readonly 'JPEG'?: JpegOptions;
    readonly 'MPEG4'?: Mpeg4Options;
    readonly 'H264'?: H264Options;
    readonly 'Extension'?: VideoEncoderOptionsExtension;
}

/**
 * Optional JPEG encoder settings ranges.
 */
export interface VideoEncoderOptionsExtension {
    readonly 'JPEG'?: JpegOptions2;
    readonly 'MPEG4'?: Mpeg4Options2;
    readonly 'H264'?: H264Options2;
    readonly 'Extension'?: VideoEncoderOptionsExtension2;
}

/**
 * 
 */
export interface VideoEncoderOptionsExtension2 {
}

/**
 * List of supported image sizes.
 */
export interface JpegOptions {
    readonly 'ResolutionsAvailable': VideoResolution;
    readonly 'FrameRateRange': IntRange;
    readonly 'EncodingIntervalRange': IntRange;
}

/**
 * Supported range of encoded bitrate in kbps.
 */
export interface JpegOptions2 {
    readonly 'BitrateRange': IntRange;
}

/**
 * List of supported image sizes.
 */
export interface Mpeg4Options {
    readonly 'ResolutionsAvailable': VideoResolution;
    readonly 'GovLengthRange': IntRange;
    readonly 'FrameRateRange': IntRange;
    readonly 'EncodingIntervalRange': IntRange;
    readonly 'Mpeg4ProfilesSupported': Mpeg4Profile;
}

/**
 * Supported range of encoded bitrate in kbps.
 */
export interface Mpeg4Options2 {
    readonly 'BitrateRange': IntRange;
}

/**
 * List of supported image sizes.
 */
export interface H264Options {
    readonly 'ResolutionsAvailable': VideoResolution;
    readonly 'GovLengthRange': IntRange;
    readonly 'FrameRateRange': IntRange;
    readonly 'EncodingIntervalRange': IntRange;
    readonly 'H264ProfilesSupported': H264Profile;
}

/**
 * Supported range of encoded bitrate in kbps.
 */
export interface H264Options2 {
    readonly 'BitrateRange': IntRange;
}

/**
 * Video Media Subtype for the video format. For definitions see tt:VideoEncodingMimeNames and  IANA Media Types.
 */
export interface VideoEncoder2Configuration {
    readonly 'Encoding': string;
    readonly 'Resolution': VideoResolution2;
    readonly 'RateControl'?: VideoRateControl2;
    readonly 'Multicast'?: MulticastConfiguration;
    readonly 'Quality': number;
}

/**
 * Number of the columns of the Video image.
 */
export interface VideoResolution2 {
    readonly 'Width': number;
    readonly 'Height': number;
}

/**
 * Desired frame rate in fps. The actual rate may be lower due to e.g. performance limitations.
 */
export interface VideoRateControl2 {
    readonly 'FrameRateLimit': number;
    readonly 'BitrateLimit': number;
}

/**
 * Video Media Subtype for the video format. For definitions see tt:VideoEncodingMimeNames and  IANA Media Types.
 */
export interface VideoEncoder2ConfigurationOptions {
    readonly 'Encoding': string;
    readonly 'QualityRange': FloatRange;
    readonly 'ResolutionsAvailable': VideoResolution2;
    readonly 'BitrateRange': IntRange;
}

/**
 * Token of the Audio Source the configuration applies to
 */
export interface AudioSourceConfiguration {
    readonly 'SourceToken': ReferenceToken;
}

/**
 * Tokens of the audio source the configuration can be used for.
 */
export interface AudioSourceConfigurationOptions {
    readonly 'InputTokensAvailable': ReferenceToken;
    readonly 'Extension'?: AudioSourceOptionsExtension;
}

/**
 * 
 */
export interface AudioSourceOptionsExtension {
}

/**
 * Audio codec used for encoding the audio input (either G.711, G.726 or AAC)
 */
export interface AudioEncoderConfiguration {
    readonly 'Encoding': AudioEncoding;
    readonly 'Bitrate': number;
    readonly 'SampleRate': number;
    readonly 'Multicast': MulticastConfiguration;
    readonly 'SessionTimeout': string;
}

/**
 * list of supported AudioEncoderConfigurations
 */
export interface AudioEncoderConfigurationOptions {
    readonly 'Options'?: AudioEncoderConfigurationOption;
}

/**
 * The enoding used for audio data (either G.711, G.726 or AAC)
 */
export interface AudioEncoderConfigurationOption {
    readonly 'Encoding': AudioEncoding;
    readonly 'BitrateList': IntItems;
    readonly 'SampleRateList': IntItems;
}

/**
 * Audio Media Subtype for the audio format. For definitions see tt:AudioEncodingMimeNames and  IANA Media Types.
 */
export interface AudioEncoder2Configuration {
    readonly 'Encoding': string;
    readonly 'Multicast'?: MulticastConfiguration;
    readonly 'Bitrate': number;
    readonly 'SampleRate': number;
}

/**
 * Audio Media Subtype for the audio format. For definitions see tt:AudioEncodingMimeNames and  IANA Media Types.
 */
export interface AudioEncoder2ConfigurationOptions {
    readonly 'Encoding': string;
    readonly 'BitrateList': IntItems;
    readonly 'SampleRateList': IntItems;
}

/**
 * 
 */
export interface VideoAnalyticsConfiguration {
    readonly 'AnalyticsEngineConfiguration': AnalyticsEngineConfiguration;
    readonly 'RuleEngineConfiguration': RuleEngineConfiguration;
}

/**
 * optional element to configure which PTZ related data is to include in the metadata stream
 */
export interface MetadataConfiguration {
    readonly 'PTZStatus'?: PTZFilter;
    readonly 'Events'?: EventSubscription;
    readonly 'Analytics'?: boolean;
    readonly 'Multicast': MulticastConfiguration;
    readonly 'SessionTimeout': string;
    readonly 'AnalyticsEngineConfiguration'?: AnalyticsEngineConfiguration;
    readonly 'Extension'?: MetadataConfigurationExtension;
}

/**
 * 
 */
export interface MetadataConfigurationExtension {
}

/**
 * True if the metadata stream shall contain the PTZ status (IDLE, MOVING or UNKNOWN)
 */
export interface PTZFilter {
    readonly 'Status': boolean;
    readonly 'Position': boolean;
}

/**
 * Subcription handling in the same way as base notification subscription.
 */
export interface EventSubscription {
    readonly 'Filter'?: any;
    readonly 'SubscriptionPolicy'?: any;
}

/**
 * True if the device is able to stream the Geo Located positions of each target.
 */
export interface MetadataConfigurationOptions {
    readonly 'PTZStatusFilterOptions': PTZStatusFilterOptions;
    readonly 'Extension'?: MetadataConfigurationOptionsExtension;
}

/**
 * List of supported metadata compression type. Its options shall be chosen from tt:MetadataCompressionType.
 */
export interface MetadataConfigurationOptionsExtension {
    readonly 'CompressionType'?: string;
    readonly 'Extension'?: MetadataConfigurationOptionsExtension2;
}

/**
 * 
 */
export interface MetadataConfigurationOptionsExtension2 {
}

/**
 * True if the device is able to stream pan or tilt status information.
 */
export interface PTZStatusFilterOptions {
    readonly 'PanTiltStatusSupported': boolean;
    readonly 'ZoomStatusSupported': boolean;
    readonly 'PanTiltPositionSupported'?: boolean;
    readonly 'ZoomPositionSupported'?: boolean;
    readonly 'Extension'?: PTZStatusFilterOptionsExtension;
}

/**
 * 
 */
export interface PTZStatusFilterOptionsExtension {
}

/**
 * Representation of a physical video outputs.
 */
export interface VideoOutput {
    readonly 'Layout': Layout;
    readonly 'Resolution'?: VideoResolution;
    readonly 'RefreshRate'?: number;
    readonly 'AspectRatio'?: number;
    readonly 'Extension'?: VideoOutputExtension;
}

/**
 * 
 */
export interface VideoOutputExtension {
}

/**
 * Token of the Video Output the configuration applies to
 */
export interface VideoOutputConfiguration {
    readonly 'OutputToken': ReferenceToken;
}

/**
 * 
 */
export interface VideoOutputConfigurationOptions {
}

/**
 * If the device is able to decode Jpeg streams this element describes the supported codecs and configurations
 */
export interface VideoDecoderConfigurationOptions {
    readonly 'JpegDecOptions'?: JpegDecOptions;
    readonly 'H264DecOptions'?: H264DecOptions;
    readonly 'Mpeg4DecOptions'?: Mpeg4DecOptions;
    readonly 'Extension'?: VideoDecoderConfigurationOptionsExtension;
}

/**
 * List of supported H.264 Video Resolutions
 */
export interface H264DecOptions {
    readonly 'ResolutionsAvailable': VideoResolution;
    readonly 'SupportedH264Profiles': H264Profile;
    readonly 'SupportedInputBitrate': IntRange;
    readonly 'SupportedFrameRate': IntRange;
}

/**
 * List of supported Jpeg Video Resolutions
 */
export interface JpegDecOptions {
    readonly 'ResolutionsAvailable': VideoResolution;
    readonly 'SupportedInputBitrate': IntRange;
    readonly 'SupportedFrameRate': IntRange;
}

/**
 * List of supported Mpeg4 Video Resolutions
 */
export interface Mpeg4DecOptions {
    readonly 'ResolutionsAvailable': VideoResolution;
    readonly 'SupportedMpeg4Profiles': Mpeg4Profile;
    readonly 'SupportedInputBitrate': IntRange;
    readonly 'SupportedFrameRate': IntRange;
}

/**
 * 
 */
export interface VideoDecoderConfigurationOptionsExtension {
}

/**
 * Representation of a physical audio outputs.
 */
export interface AudioOutput {
}

/**
 * Token of the phsycial Audio output.
 */
export interface AudioOutputConfiguration {
    readonly 'OutputToken': ReferenceToken;
    readonly 'SendPrimacy'?: string;
    readonly 'OutputLevel': number;
}

/**
 * Tokens of the physical Audio outputs (typically one).
 */
export interface AudioOutputConfigurationOptions {
    readonly 'OutputTokensAvailable': ReferenceToken;
    readonly 'SendPrimacyOptions'?: string;
    readonly 'OutputLevelRange': IntRange;
}

/**
 * The Audio Decoder Configuration does not contain any that parameter to configure the
 * decoding .A decoder shall decode every data it receives (according to its capabilities).
 */
export interface AudioDecoderConfiguration {
}

/**
 * If the device is able to decode AAC encoded audio this section describes the supported configurations
 */
export interface AudioDecoderConfigurationOptions {
    readonly 'AACDecOptions'?: AACDecOptions;
    readonly 'G711DecOptions'?: G711DecOptions;
    readonly 'G726DecOptions'?: G726DecOptions;
    readonly 'Extension'?: AudioDecoderConfigurationOptionsExtension;
}

/**
 * List of supported bitrates in kbps
 */
export interface G711DecOptions {
    readonly 'Bitrate': IntItems;
    readonly 'SampleRateRange': IntItems;
}

/**
 * List of supported bitrates in kbps
 */
export interface AACDecOptions {
    readonly 'Bitrate': IntItems;
    readonly 'SampleRateRange': IntItems;
}

/**
 * List of supported bitrates in kbps
 */
export interface G726DecOptions {
    readonly 'Bitrate': IntItems;
    readonly 'SampleRateRange': IntItems;
}

/**
 * 
 */
export interface AudioDecoderConfigurationOptionsExtension {
}

/**
 * The multicast address (if this address is set to 0 no multicast streaming is enaled)
 */
export interface MulticastConfiguration {
    readonly 'Address': IPAddress;
    readonly 'Port': number;
    readonly 'TTL': number;
    readonly 'AutoStart': boolean;
}

/**
 * Defines if a multicast or unicast stream is requested
 */
export interface StreamSetup {
    readonly 'Stream': StreamType;
    readonly 'Transport': Transport;
}

/**
 * Defines the network protocol for streaming, either UDP=RTP/UDP, RTSP=RTP/RTSP/TCP or HTTP=RTP/RTSP/HTTP/TCP 
 */
export interface Transport {
    readonly 'Protocol': TransportProtocol;
    readonly 'Tunnel'?: Transport;
}

/**
 * Stable Uri to be used for requesting the media stream
 */
export interface MediaUri {
    readonly 'Uri': string;
    readonly 'InvalidAfterConnect': boolean;
    readonly 'InvalidAfterReboot': boolean;
    readonly 'Timeout': string;
}

/**
 * Indicates if the scope is fixed or configurable.
 */
export interface Scope {
    readonly 'ScopeDef': ScopeDefinition;
    readonly 'ScopeItem': string;
}

/**
 * Indicates whether or not an interface is enabled.
 */
export interface NetworkInterface {
    readonly 'Enabled': boolean;
    readonly 'Info'?: NetworkInterfaceInfo;
    readonly 'Link'?: NetworkInterfaceLink;
    readonly 'IPv4'?: IPv4NetworkInterface;
    readonly 'IPv6'?: IPv6NetworkInterface;
    readonly 'Extension'?: NetworkInterfaceExtension;
}

/**
 * Extension point prepared for future 802.3 configuration.
 */
export interface NetworkInterfaceExtension {
    readonly 'InterfaceType': any;
    readonly 'Dot3'?: Dot3Configuration;
    readonly 'Dot11'?: Dot11Configuration;
    readonly 'Extension'?: NetworkInterfaceExtension2;
}

/**
 * 
 */
export interface Dot3Configuration {
}

/**
 * 
 */
export interface NetworkInterfaceExtension2 {
}

/**
 * Configured link settings.
 */
export interface NetworkInterfaceLink {
    readonly 'AdminSettings': NetworkInterfaceConnectionSetting;
    readonly 'OperSettings': NetworkInterfaceConnectionSetting;
    readonly 'InterfaceType': any;
}

/**
 * Auto negotiation on/off.
 */
export interface NetworkInterfaceConnectionSetting {
    readonly 'AutoNegotiation': boolean;
    readonly 'Speed': number;
    readonly 'Duplex': Duplex;
}

/**
 * Network interface name, for example eth0.
 */
export interface NetworkInterfaceInfo {
    readonly 'Name'?: string;
    readonly 'HwAddress': HwAddress;
    readonly 'MTU'?: number;
}

/**
 * Indicates whether or not IPv6 is enabled.
 */
export interface IPv6NetworkInterface {
    readonly 'Enabled': boolean;
    readonly 'Config'?: IPv6Configuration;
}

/**
 * Indicates whether or not IPv4 is enabled.
 */
export interface IPv4NetworkInterface {
    readonly 'Enabled': boolean;
    readonly 'Config': IPv4Configuration;
}

/**
 * List of manually added IPv4 addresses.
 */
export interface IPv4Configuration {
    readonly 'Manual'?: PrefixedIPv4Address;
    readonly 'LinkLocal'?: PrefixedIPv4Address;
    readonly 'FromDHCP'?: PrefixedIPv4Address;
    readonly 'DHCP': boolean;
}

/**
 * Indicates whether router advertisment is used.
 */
export interface IPv6Configuration {
    readonly 'AcceptRouterAdvert'?: boolean;
    readonly 'DHCP': IPv6DHCPConfiguration;
    readonly 'Manual'?: PrefixedIPv6Address;
    readonly 'LinkLocal'?: PrefixedIPv6Address;
    readonly 'FromDHCP'?: PrefixedIPv6Address;
    readonly 'FromRA'?: PrefixedIPv6Address;
    readonly 'Extension'?: IPv6ConfigurationExtension;
}

/**
 * 
 */
export interface IPv6ConfigurationExtension {
}

/**
 * Network protocol type string.
 */
export interface NetworkProtocol {
    readonly 'Name': NetworkProtocolType;
    readonly 'Enabled': boolean;
    readonly 'Port': number;
    readonly 'Extension'?: NetworkProtocolExtension;
}

/**
 * 
 */
export interface NetworkProtocolExtension {
}

/**
 * Network host type: IPv4, IPv6 or DNS.
 */
export interface NetworkHost {
    readonly 'Type': NetworkHostType;
    readonly 'IPv4Address'?: IPv4Address;
    readonly 'IPv6Address'?: IPv6Address;
    readonly 'DNSname'?: DNSName;
    readonly 'Extension'?: NetworkHostExtension;
}

/**
 * 
 */
export interface NetworkHostExtension {
}

/**
 * Indicates if the address is an IPv4 or IPv6 address.
 */
export interface IPAddress {
    readonly 'Type': IPType;
    readonly 'IPv4Address'?: IPv4Address;
    readonly 'IPv6Address'?: IPv6Address;
}

/**
 * IPv4 address
 */
export interface PrefixedIPv4Address {
    readonly 'Address': IPv4Address;
    readonly 'PrefixLength': number;
}

/**
 * IPv6 address
 */
export interface PrefixedIPv6Address {
    readonly 'Address': IPv6Address;
    readonly 'PrefixLength': number;
}

/**
 * Indicates whether the hostname is obtained from DHCP or not.
 */
export interface HostnameInformation {
    readonly 'FromDHCP': boolean;
    readonly 'Name'?: string;
    readonly 'Extension'?: HostnameInformationExtension;
}

/**
 * 
 */
export interface HostnameInformationExtension {
}

/**
 * Indicates whether or not DNS information is retrieved from DHCP.
 */
export interface DNSInformation {
    readonly 'FromDHCP': boolean;
    readonly 'SearchDomain'?: string;
    readonly 'DNSFromDHCP'?: IPAddress;
    readonly 'DNSManual'?: IPAddress;
    readonly 'Extension'?: DNSInformationExtension;
}

/**
 * 
 */
export interface DNSInformationExtension {
}

/**
 * Indicates if NTP information is to be retrieved by using DHCP.
 */
export interface NTPInformation {
    readonly 'FromDHCP': boolean;
    readonly 'NTPFromDHCP'?: NetworkHost;
    readonly 'NTPManual'?: NetworkHost;
    readonly 'Extension'?: NTPInformationExtension;
}

/**
 * 
 */
export interface NTPInformationExtension {
}

/**
 * Dynamic DNS type.
 */
export interface DynamicDNSInformation {
    readonly 'Type': DynamicDNSType;
    readonly 'Name'?: DNSName;
    readonly 'TTL'?: string;
    readonly 'Extension'?: DynamicDNSInformationExtension;
}

/**
 * 
 */
export interface DynamicDNSInformationExtension {
}

/**
 * Indicates whether or not an interface is enabled.
 */
export interface NetworkInterfaceSetConfiguration {
    readonly 'Enabled'?: boolean;
    readonly 'Link'?: NetworkInterfaceConnectionSetting;
    readonly 'MTU'?: number;
    readonly 'IPv4'?: IPv4NetworkInterfaceSetConfiguration;
    readonly 'IPv6'?: IPv6NetworkInterfaceSetConfiguration;
    readonly 'Extension'?: NetworkInterfaceSetConfigurationExtension;
}

/**
 * 
 */
export interface NetworkInterfaceSetConfigurationExtension {
    readonly 'Dot3'?: Dot3Configuration;
    readonly 'Dot11'?: Dot11Configuration;
    readonly 'Extension'?: NetworkInterfaceSetConfigurationExtension2;
}

/**
 * Indicates whether or not IPv6 is enabled.
 */
export interface IPv6NetworkInterfaceSetConfiguration {
    readonly 'Enabled'?: boolean;
    readonly 'AcceptRouterAdvert'?: boolean;
    readonly 'Manual'?: PrefixedIPv6Address;
    readonly 'DHCP'?: IPv6DHCPConfiguration;
}

/**
 * Indicates whether or not IPv4 is enabled.
 */
export interface IPv4NetworkInterfaceSetConfiguration {
    readonly 'Enabled'?: boolean;
    readonly 'Manual'?: PrefixedIPv4Address;
    readonly 'DHCP'?: boolean;
}

/**
 * IPv4 address string.
 */
export interface NetworkGateway {
    readonly 'IPv4Address'?: IPv4Address;
    readonly 'IPv6Address'?: IPv6Address;
}

/**
 * Unique identifier of network interface.
 */
export interface NetworkZeroConfiguration {
    readonly 'InterfaceToken': ReferenceToken;
    readonly 'Enabled': boolean;
    readonly 'Addresses'?: IPv4Address;
    readonly 'Extension'?: NetworkZeroConfigurationExtension;
}

/**
 * Optional array holding the configuration for the second and possibly further interfaces.
 */
export interface NetworkZeroConfigurationExtension {
    readonly 'Additional'?: NetworkZeroConfiguration;
    readonly 'Extension'?: NetworkZeroConfigurationExtension2;
}

/**
 * 
 */
export interface NetworkZeroConfigurationExtension2 {
}

/**
 * 
 */
export interface IPAddressFilter {
    readonly 'Type': IPAddressFilterType;
    readonly 'IPv4Address'?: PrefixedIPv4Address;
    readonly 'IPv6Address'?: PrefixedIPv6Address;
    readonly 'Extension'?: IPAddressFilterExtension;
}

/**
 * 
 */
export interface IPAddressFilterExtension {
}

/**
 * 
 */
export interface Dot11Configuration {
    readonly 'SSID': Dot11SSIDType;
    readonly 'Mode': Dot11StationMode;
    readonly 'Alias': Name;
    readonly 'Priority': NetworkInterfaceConfigPriority;
    readonly 'Security': Dot11SecurityConfiguration;
}

/**
 * 
 */
export interface Dot11SecurityConfiguration {
    readonly 'Mode': Dot11SecurityMode;
    readonly 'Algorithm'?: Dot11Cipher;
    readonly 'PSK'?: Dot11PSKSet;
    readonly 'Dot1X'?: ReferenceToken;
    readonly 'Extension'?: Dot11SecurityConfigurationExtension;
}

/**
 * 
 */
export interface Dot11SecurityConfigurationExtension {
}

/**
 * 
 * 					According to IEEE802.11-2007 H.4.1 the RSNA PSK consists of 256 bits, or 64 octets when represented in hex
 * 					Either Key or Passphrase shall be given, if both are supplied Key shall be used by the device and Passphrase ignored.
 * 				
 */
export interface Dot11PSKSet {
    readonly 'Key'?: Dot11PSK;
    readonly 'Passphrase'?: Dot11PSKPassphrase;
    readonly 'Extension'?: Dot11PSKSetExtension;
}

/**
 * 
 */
export interface Dot11PSKSetExtension {
}

/**
 * 
 */
export interface NetworkInterfaceSetConfigurationExtension2 {
}

/**
 * 
 */
export interface Dot11Capabilities {
    readonly 'TKIP': boolean;
    readonly 'ScanAvailableNetworks': boolean;
    readonly 'MultipleConfiguration': boolean;
    readonly 'AdHocStationMode': boolean;
    readonly 'WEP': boolean;
}

/**
 * 
 */
export interface Dot11Status {
    readonly 'SSID': Dot11SSIDType;
    readonly 'BSSID'?: string;
    readonly 'PairCipher'?: Dot11Cipher;
    readonly 'GroupCipher'?: Dot11Cipher;
    readonly 'SignalStrength'?: Dot11SignalStrength;
    readonly 'ActiveConfigAlias': ReferenceToken;
}

/**
 * See IEEE802.11 7.3.2.25.2 for details.
 */
export interface Dot11AvailableNetworks {
    readonly 'SSID': Dot11SSIDType;
    readonly 'BSSID'?: string;
    readonly 'AuthAndMangementSuite'?: Dot11AuthAndMangementSuite;
    readonly 'PairCipher'?: Dot11Cipher;
    readonly 'GroupCipher'?: Dot11Cipher;
    readonly 'SignalStrength'?: Dot11SignalStrength;
    readonly 'Extension'?: Dot11AvailableNetworksExtension;
}

/**
 * 
 */
export interface Dot11AvailableNetworksExtension {
}

/**
 * Analytics capabilities
 */
export interface Capabilities {
    readonly 'Analytics'?: AnalyticsCapabilities;
    readonly 'Device'?: DeviceCapabilities;
    readonly 'Events'?: EventCapabilities;
    readonly 'Imaging'?: ImagingCapabilities;
    readonly 'Media'?: MediaCapabilities;
    readonly 'PTZ'?: PTZCapabilities;
    readonly 'Extension'?: CapabilitiesExtension;
}

/**
 * 
 */
export interface CapabilitiesExtension {
    readonly 'DeviceIO'?: DeviceIOCapabilities;
    readonly 'Display'?: DisplayCapabilities;
    readonly 'Recording'?: RecordingCapabilities;
    readonly 'Search'?: SearchCapabilities;
    readonly 'Replay'?: ReplayCapabilities;
    readonly 'Receiver'?: ReceiverCapabilities;
    readonly 'AnalyticsDevice'?: AnalyticsDeviceCapabilities;
    readonly 'Extensions'?: CapabilitiesExtension2;
}

/**
 * 
 */
export interface CapabilitiesExtension2 {
}

/**
 * Analytics service URI.
 */
export interface AnalyticsCapabilities {
    readonly 'XAddr': string;
    readonly 'RuleSupport': boolean;
    readonly 'AnalyticsModuleSupport': boolean;
}

/**
 * Device service URI.
 */
export interface DeviceCapabilities {
    readonly 'XAddr': string;
    readonly 'Network'?: NetworkCapabilities;
    readonly 'System'?: SystemCapabilities;
    readonly 'IO'?: IOCapabilities;
    readonly 'Security'?: SecurityCapabilities;
    readonly 'Extension'?: DeviceCapabilitiesExtension;
}

/**
 * 
 */
export interface DeviceCapabilitiesExtension {
}

/**
 * Event service URI.
 */
export interface EventCapabilities {
    readonly 'XAddr': string;
    readonly 'WSSubscriptionPolicySupport': boolean;
    readonly 'WSPullPointSupport': boolean;
    readonly 'WSPausableSubscriptionManagerInterfaceSupport': boolean;
}

/**
 * Number of input connectors.
 */
export interface IOCapabilities {
    readonly 'InputConnectors'?: number;
    readonly 'RelayOutputs'?: number;
    readonly 'Extension'?: IOCapabilitiesExtension;
}

/**
 * 
 */
export interface IOCapabilitiesExtension {
    readonly 'Auxiliary'?: boolean;
    readonly 'AuxiliaryCommands'?: AuxiliaryData;
    readonly 'Extension': IOCapabilitiesExtension2;
}

/**
 * 
 */
export interface IOCapabilitiesExtension2 {
}

/**
 * Media service URI.
 */
export interface MediaCapabilities {
    readonly 'XAddr': string;
    readonly 'StreamingCapabilities': RealTimeStreamingCapabilities;
    readonly 'Extension'?: MediaCapabilitiesExtension;
}

/**
 * 
 */
export interface MediaCapabilitiesExtension {
    readonly 'ProfileCapabilities': ProfileCapabilities;
}

/**
 * Indicates whether or not RTP multicast is supported.
 */
export interface RealTimeStreamingCapabilities {
    readonly 'RTPMulticast'?: boolean;
    readonly 'RTP_TCP'?: boolean;
    readonly 'RTP_RTSP_TCP'?: boolean;
    readonly 'Extension'?: RealTimeStreamingCapabilitiesExtension;
}

/**
 * 
 */
export interface RealTimeStreamingCapabilitiesExtension {
}

/**
 * Maximum number of profiles.
 */
export interface ProfileCapabilities {
    readonly 'MaximumNumberOfProfiles': number;
}

/**
 * Indicates whether or not IP filtering is supported.
 */
export interface NetworkCapabilities {
    readonly 'IPFilter'?: boolean;
    readonly 'ZeroConfiguration'?: boolean;
    readonly 'IPVersion6'?: boolean;
    readonly 'DynDNS'?: boolean;
    readonly 'Extension'?: NetworkCapabilitiesExtension;
}

/**
 * 
 */
export interface NetworkCapabilitiesExtension {
    readonly 'Dot11Configuration'?: boolean;
    readonly 'Extension'?: NetworkCapabilitiesExtension2;
}

/**
 * 
 */
export interface NetworkCapabilitiesExtension2 {
}

/**
 * Indicates whether or not TLS 1.1 is supported.
 */
export interface SecurityCapabilities {
    readonly 'TLS1.1': boolean;
    readonly 'TLS1.2': boolean;
    readonly 'OnboardKeyGeneration': boolean;
    readonly 'AccessPolicyConfig': boolean;
    readonly 'X.509Token': boolean;
    readonly 'SAMLToken': boolean;
    readonly 'KerberosToken': boolean;
    readonly 'RELToken': boolean;
    readonly 'Extension'?: SecurityCapabilitiesExtension;
}

/**
 * 
 */
export interface SecurityCapabilitiesExtension {
    readonly 'TLS1.0': boolean;
    readonly 'Extension'?: SecurityCapabilitiesExtension2;
}

/**
 * EAP Methods supported by the device. The int values refer to the IANA EAP Registry.
 */
export interface SecurityCapabilitiesExtension2 {
    readonly 'Dot1X': boolean;
    readonly 'SupportedEAPMethod'?: number;
    readonly 'RemoteUserHandling': boolean;
}

/**
 * Indicates whether or not WS Discovery resolve requests are supported.
 */
export interface SystemCapabilities {
    readonly 'DiscoveryResolve': boolean;
    readonly 'DiscoveryBye': boolean;
    readonly 'RemoteDiscovery': boolean;
    readonly 'SystemBackup': boolean;
    readonly 'SystemLogging': boolean;
    readonly 'FirmwareUpgrade': boolean;
    readonly 'SupportedVersions': OnvifVersion;
    readonly 'Extension'?: SystemCapabilitiesExtension;
}

/**
 * 
 */
export interface SystemCapabilitiesExtension {
    readonly 'HttpFirmwareUpgrade'?: boolean;
    readonly 'HttpSystemBackup'?: boolean;
    readonly 'HttpSystemLogging'?: boolean;
    readonly 'HttpSupportInformation'?: boolean;
    readonly 'Extension'?: SystemCapabilitiesExtension2;
}

/**
 * 
 */
export interface SystemCapabilitiesExtension2 {
}

/**
 * Major version number.
 */
export interface OnvifVersion {
    readonly 'Major': number;
    readonly 'Minor': number;
}

/**
 * Imaging service URI.
 */
export interface ImagingCapabilities {
    readonly 'XAddr': string;
}

/**
 * PTZ service URI.
 */
export interface PTZCapabilities {
    readonly 'XAddr': string;
}

/**
 * 
 */
export interface DeviceIOCapabilities {
    readonly 'XAddr': string;
    readonly 'VideoSources': number;
    readonly 'VideoOutputs': number;
    readonly 'AudioSources': number;
    readonly 'AudioOutputs': number;
    readonly 'RelayOutputs': number;
}

/**
 * Indication that the SetLayout command supports only predefined layouts.
 */
export interface DisplayCapabilities {
    readonly 'XAddr': string;
    readonly 'FixedLayout': boolean;
}

/**
 * 
 */
export interface RecordingCapabilities {
    readonly 'XAddr': string;
    readonly 'ReceiverSource': boolean;
    readonly 'MediaProfileSource': boolean;
    readonly 'DynamicRecordings': boolean;
    readonly 'DynamicTracks': boolean;
    readonly 'MaxStringLength': number;
}

/**
 * 
 */
export interface SearchCapabilities {
    readonly 'XAddr': string;
    readonly 'MetadataSearch': boolean;
}

/**
 * The address of the replay service.
 */
export interface ReplayCapabilities {
    readonly 'XAddr': string;
}

/**
 * The address of the receiver service.
 */
export interface ReceiverCapabilities {
    readonly 'XAddr': string;
    readonly 'RTP_Multicast': boolean;
    readonly 'RTP_TCP': boolean;
    readonly 'RTP_RTSP_TCP': boolean;
    readonly 'SupportedReceivers': number;
    readonly 'MaximumRTSPURILength': number;
}

/**
 * Obsolete property.
 */
export interface AnalyticsDeviceCapabilities {
    readonly 'XAddr': string;
    readonly 'RuleSupport'?: boolean;
    readonly 'Extension'?: AnalyticsDeviceExtension;
}

/**
 * 
 */
export interface AnalyticsDeviceExtension {
}

/**
 * The log information as attachment data.
 */
export interface SystemLog {
    readonly 'Binary'?: AttachmentData;
    readonly 'String'?: string;
}

/**
 * The support information as attachment data.
 */
export interface SupportInformation {
    readonly 'Binary'?: AttachmentData;
    readonly 'String'?: string;
}

/**
 * base64 encoded binary data.
 */
export interface BinaryData {
    readonly 'Data': string;
}

/**
 * 
 */
export interface AttachmentData {
}

/**
 * 
 */
export interface BackupFile {
    readonly 'Name': string;
    readonly 'Data': AttachmentData;
}

/**
 * 
 */
export interface SystemLogUriList {
    readonly 'SystemLog'?: SystemLogUri;
}

/**
 * 
 */
export interface SystemLogUri {
    readonly 'Type': SystemLogType;
    readonly 'Uri': string;
}

/**
 * General date time inforamtion returned by the GetSystemDateTime method.
 */
export interface SystemDateTime {
    readonly 'DateTimeType': SetDateTimeType;
    readonly 'DaylightSavings': boolean;
    readonly 'TimeZone'?: TimeZone;
    readonly 'UTCDateTime'?: DateTime;
    readonly 'LocalDateTime'?: DateTime;
    readonly 'Extension'?: SystemDateTimeExtension;
}

/**
 * 
 */
export interface SystemDateTimeExtension {
}

/**
 * 
 */
export interface DateTime {
    readonly 'Time': Time;
    readonly 'Date': Date;
}

/**
 * Range is 1 to 12.
 */
export interface Date {
    readonly 'Year': number;
    readonly 'Month': number;
    readonly 'Day': number;
}

/**
 * Range is 0 to 23.
 */
export interface Time {
    readonly 'Hour': number;
    readonly 'Minute': number;
    readonly 'Second': number;
}

/**
 * 
 * 				The TZ format is specified by POSIX, please refer to POSIX 1003.1 section 8.3
 * 				Example: Europe, Paris TZ=CET-1CEST,M3.5.0/2,M10.5.0/3
 * 				CET = designation for standard time when daylight saving is not in force
 * 				-1 = offset in hours = negative so 1 hour east of Greenwich meridian
 * 				CEST = designation when daylight saving is in force ("Central European Summer Time")
 * 				, = no offset number between code and comma, so default to one hour ahead for daylight saving
 * 				M3.5.0 = when daylight saving starts = the last Sunday in March (the "5th" week means the last in the month)
 * 				/2, = the local time when the switch occurs = 2 a.m. in this case
 * 				M10.5.0 = when daylight saving ends = the last Sunday in October.
 * 				/3, = the local time when the switch occurs = 3 a.m. in this case
 * 			
 */
export interface TimeZone {
    readonly 'TZ': string;
}

/**
 * 
 */
export interface RemoteUser {
    readonly 'Username': string;
    readonly 'Password'?: string;
    readonly 'UseDerivedPassword': boolean;
}

/**
 * Username string.
 */
export interface User {
    readonly 'Username': string;
    readonly 'Password'?: string;
    readonly 'UserLevel': UserLevel;
    readonly 'Extension'?: UserExtension;
}

/**
 * 
 */
export interface UserExtension {
}

/**
 * 
 */
export interface CertificateGenerationParameters {
    readonly 'CertificateID'?: string;
    readonly 'Subject'?: string;
    readonly 'ValidNotBefore'?: string;
    readonly 'ValidNotAfter'?: string;
    readonly 'Extension'?: CertificateGenerationParametersExtension;
}

/**
 * 
 */
export interface CertificateGenerationParametersExtension {
}

/**
 * Certificate id.
 */
export interface Certificate {
    readonly 'CertificateID': string;
    readonly 'Certificate': BinaryData;
}

/**
 * Certificate id.
 */
export interface CertificateStatus {
    readonly 'CertificateID': string;
    readonly 'Status': boolean;
}

/**
 * 
 */
export interface CertificateWithPrivateKey {
    readonly 'CertificateID'?: string;
    readonly 'Certificate': BinaryData;
    readonly 'PrivateKey': BinaryData;
}

/**
 * Validity Range is from "NotBefore" to "NotAfter"; the corresponding DateTimeRange is from "From" to "Until"
 */
export interface CertificateInformation {
    readonly 'CertificateID': string;
    readonly 'IssuerDN'?: string;
    readonly 'SubjectDN'?: string;
    readonly 'KeyUsage'?: CertificateUsage;
    readonly 'ExtendedKeyUsage'?: CertificateUsage;
    readonly 'KeyLength'?: number;
    readonly 'Version'?: string;
    readonly 'SerialNum'?: string;
    readonly 'SignatureAlgorithm'?: string;
    readonly 'Validity'?: DateTimeRange;
    readonly 'Extension'?: CertificateInformationExtension;
}

/**
 * 
 */
export interface CertificateUsage {
}

/**
 * 
 */
export interface CertificateInformationExtension {
}

/**
 * 
 * 				EAP Method type as defined in IANA EAP Registry.
 * 			
 */
export interface Dot1XConfiguration {
    readonly 'Dot1XConfigurationToken': ReferenceToken;
    readonly 'Identity': string;
    readonly 'AnonymousID'?: string;
    readonly 'EAPMethod': number;
    readonly 'CACertificateID'?: string;
    readonly 'EAPMethodConfiguration'?: EAPMethodConfiguration;
    readonly 'Extension'?: Dot1XConfigurationExtension;
}

/**
 * 
 */
export interface Dot1XConfigurationExtension {
}

/**
 * Confgiuration information for TLS Method.
 */
export interface EAPMethodConfiguration {
    readonly 'TLSConfiguration'?: TLSConfiguration;
    readonly 'Password'?: string;
    readonly 'Extension'?: EapMethodExtension;
}

/**
 * 
 */
export interface EapMethodExtension {
}

/**
 * 
 */
export interface TLSConfiguration {
    readonly 'CertificateID': string;
}

/**
 * 
 */
export interface GenericEapPwdConfigurationExtension {
}

/**
 * 
 * 					'Bistable' or 'Monostable'
 * 					
 * 							Bistable – After setting the state, the relay remains in this state.
 * 							Monostable – After setting the state, the relay returns to its idle state after the specified time.
 * 						
 * 					
 */
export interface RelayOutputSettings {
    readonly 'Mode': RelayMode;
    readonly 'DelayTime': string;
    readonly 'IdleState': RelayIdleState;
}

/**
 * 
 */
export interface RelayOutput {
    readonly 'Properties': RelayOutputSettings;
}

/**
 * 
 * 							Indicate the Digital IdleState status.
 * 						
 */
export interface DigitalInput {
}

/**
 * 
 *                 A unique identifier that is used to reference PTZ Nodes.
 *               
 */
export interface PTZNode {
    readonly 'Name'?: Name;
    readonly 'SupportedPTZSpaces': PTZSpaces;
    readonly 'MaximumNumberOfPresets': number;
    readonly 'HomeSupported': boolean;
    readonly 'AuxiliaryCommands'?: AuxiliaryData;
    readonly 'Extension'?: PTZNodeExtension;
}

/**
 * 
 *             Detail of supported Preset Tour feature.
 *           
 */
export interface PTZNodeExtension {
    readonly 'SupportedPresetTour'?: PTZPresetTourSupported;
    readonly 'Extension'?: PTZNodeExtension2;
}

/**
 * 
 */
export interface PTZNodeExtension2 {
}

/**
 * Indicates number of preset tours that can be created. Required preset tour operations shall be available for this PTZ Node if one or more preset tour is supported.
 */
export interface PTZPresetTourSupported {
    readonly 'MaximumNumberOfPresetTours': number;
    readonly 'PTZPresetTourOperation'?: PTZPresetTourOperation;
    readonly 'Extension'?: PTZPresetTourSupportedExtension;
}

/**
 * 
 */
export interface PTZPresetTourSupportedExtension {
}

/**
 * 
 *                 A mandatory reference to the PTZ Node that the PTZ Configuration belongs to.
 *               
 */
export interface PTZConfiguration {
    readonly 'NodeToken': ReferenceToken;
    readonly 'DefaultAbsolutePantTiltPositionSpace'?: string;
    readonly 'DefaultAbsoluteZoomPositionSpace'?: string;
    readonly 'DefaultRelativePanTiltTranslationSpace'?: string;
    readonly 'DefaultRelativeZoomTranslationSpace'?: string;
    readonly 'DefaultContinuousPanTiltVelocitySpace'?: string;
    readonly 'DefaultContinuousZoomVelocitySpace'?: string;
    readonly 'DefaultPTZSpeed'?: PTZSpeed;
    readonly 'DefaultPTZTimeout'?: string;
    readonly 'PanTiltLimits'?: PanTiltLimits;
    readonly 'ZoomLimits'?: ZoomLimits;
    readonly 'Extension'?: PTZConfigurationExtension;
}

/**
 * Optional element to configure PT Control Direction related features.
 */
export interface PTZConfigurationExtension {
    readonly 'PTControlDirection'?: PTControlDirection;
    readonly 'Extension'?: PTZConfigurationExtension2;
}

/**
 * 
 */
export interface PTZConfigurationExtension2 {
}

/**
 * Optional element to configure related parameters for E-Flip.
 */
export interface PTControlDirection {
    readonly 'EFlip'?: EFlip;
    readonly 'Reverse'?: Reverse;
    readonly 'Extension'?: PTControlDirectionExtension;
}

/**
 * 
 */
export interface PTControlDirectionExtension {
}

/**
 * Parameter to enable/disable E-Flip feature.
 */
export interface EFlip {
    readonly 'Mode': EFlipMode;
}

/**
 * Parameter to enable/disable Reverse feature.
 */
export interface Reverse {
    readonly 'Mode': ReverseMode;
}

/**
 * 
 *             A list of supported coordinate systems including their range limitations.
 *           
 */
export interface PTZConfigurationOptions {
    readonly 'Spaces': PTZSpaces;
    readonly 'PTZTimeout': DurationRange;
    readonly 'PTControlDirection'?: PTControlDirectionOptions;
    readonly 'Extension'?: PTZConfigurationOptions2;
}

/**
 * 
 */
export interface PTZConfigurationOptions2 {
}

/**
 * Supported options for EFlip feature.
 */
export interface PTControlDirectionOptions {
    readonly 'EFlip'?: EFlipOptions;
    readonly 'Reverse'?: ReverseOptions;
    readonly 'Extension'?: PTControlDirectionOptionsExtension;
}

/**
 * 
 */
export interface PTControlDirectionOptionsExtension {
}

/**
 * Options of EFlip mode parameter.
 */
export interface EFlipOptions {
    readonly 'Mode'?: EFlipMode;
    readonly 'Extension'?: EFlipOptionsExtension;
}

/**
 * 
 */
export interface EFlipOptionsExtension {
}

/**
 * Options of Reverse mode parameter.
 */
export interface ReverseOptions {
    readonly 'Mode'?: ReverseMode;
    readonly 'Extension'?: ReverseOptionsExtension;
}

/**
 * 
 */
export interface ReverseOptionsExtension {
}

/**
 * 
 *             A range of pan tilt limits.
 *           
 */
export interface PanTiltLimits {
    readonly 'Range': Space2DDescription;
}

/**
 * 
 *             A range of zoom limit
 *           
 */
export interface ZoomLimits {
    readonly 'Range': Space1DDescription;
}

/**
 * 
 *             The Generic Pan/Tilt Position space is provided by every PTZ node that supports absolute Pan/Tilt, since it does not relate to a specific physical range. 
 * 			Instead, the range should be defined as the full range of the PTZ unit normalized to the range -1 to 1 resulting in the following space description.
 *           
 */
export interface PTZSpaces {
    readonly 'AbsolutePanTiltPositionSpace'?: Space2DDescription;
    readonly 'AbsoluteZoomPositionSpace'?: Space1DDescription;
    readonly 'RelativePanTiltTranslationSpace'?: Space2DDescription;
    readonly 'RelativeZoomTranslationSpace'?: Space1DDescription;
    readonly 'ContinuousPanTiltVelocitySpace'?: Space2DDescription;
    readonly 'ContinuousZoomVelocitySpace'?: Space1DDescription;
    readonly 'PanTiltSpeedSpace'?: Space1DDescription;
    readonly 'ZoomSpeedSpace'?: Space1DDescription;
    readonly 'Extension'?: PTZSpacesExtension;
}

/**
 * 
 */
export interface PTZSpacesExtension {
}

/**
 * 
 *             A URI of coordinate systems.
 *           
 */
export interface Space2DDescription {
    readonly 'URI': string;
    readonly 'XRange': FloatRange;
    readonly 'YRange': FloatRange;
}

/**
 * 
 *             A URI of coordinate systems.
 *           
 */
export interface Space1DDescription {
    readonly 'URI': string;
    readonly 'XRange': FloatRange;
}

/**
 * Pan and tilt speed. The x component corresponds to pan and the y component to tilt. If omitted in a request, the current (if any) PanTilt movement should not be affected. 
 */
export interface PTZSpeed {
    readonly 'PanTilt'?: Vector2D;
    readonly 'Zoom'?: Vector1D;
}

/**
 * 
 *             A list of preset position name.
 *           
 */
export interface PTZPreset {
    readonly 'Name'?: Name;
    readonly 'PTZPosition'?: PTZVector;
}

/**
 * Readable name of the preset tour.
 */
export interface PresetTour {
    readonly 'Name'?: Name;
    readonly 'Status': PTZPresetTourStatus;
    readonly 'AutoStart': boolean;
    readonly 'StartingCondition': PTZPresetTourStartingCondition;
    readonly 'TourSpot'?: PTZPresetTourSpot;
    readonly 'Extension'?: PTZPresetTourExtension;
}

/**
 * 
 */
export interface PTZPresetTourExtension {
}

/**
 * Detail definition of preset position of the tour spot.
 */
export interface PTZPresetTourSpot {
    readonly 'PresetDetail': PTZPresetTourPresetDetail;
    readonly 'Speed'?: PTZSpeed;
    readonly 'StayTime'?: string;
    readonly 'Extension'?: PTZPresetTourSpotExtension;
}

/**
 * 
 */
export interface PTZPresetTourSpotExtension {
}

/**
 * Option to specify the preset position with Preset Token defined in advance.
 */
export interface PTZPresetTourPresetDetail {
    readonly 'PresetToken': ReferenceToken;
    readonly 'Home': boolean;
    readonly 'PTZPosition': PTZVector;
    readonly 'TypeExtension': PTZPresetTourTypeExtension;
}

/**
 * 
 */
export interface PTZPresetTourTypeExtension {
}

/**
 * Indicates state of this preset tour by Idle/Touring/Paused.
 */
export interface PTZPresetTourStatus {
    readonly 'State': PTZPresetTourState;
    readonly 'CurrentTourSpot'?: PTZPresetTourSpot;
    readonly 'Extension'?: PTZPresetTourStatusExtension;
}

/**
 * 
 */
export interface PTZPresetTourStatusExtension {
}

/**
 * Optional parameter to specify how many times the preset tour is recurred.
 */
export interface PTZPresetTourStartingCondition {
    readonly 'RecurringTime'?: number;
    readonly 'RecurringDuration'?: string;
    readonly 'Direction'?: PTZPresetTourDirection;
    readonly 'Extension'?: PTZPresetTourStartingConditionExtension;
}

/**
 * 
 */
export interface PTZPresetTourStartingConditionExtension {
}

/**
 * Indicates whether or not the AutoStart is supported.
 */
export interface PTZPresetTourOptions {
    readonly 'AutoStart': boolean;
    readonly 'StartingCondition': PTZPresetTourStartingConditionOptions;
    readonly 'TourSpot': PTZPresetTourSpotOptions;
}

/**
 * Supported options for detail definition of preset position of the tour spot.
 */
export interface PTZPresetTourSpotOptions {
    readonly 'PresetDetail': PTZPresetTourPresetDetailOptions;
    readonly 'StayTime': DurationRange;
}

/**
 * A list of available Preset Tokens for tour spots.
 */
export interface PTZPresetTourPresetDetailOptions {
    readonly 'PresetToken'?: ReferenceToken;
    readonly 'Home'?: boolean;
    readonly 'PanTiltPositionSpace'?: Space2DDescription;
    readonly 'ZoomPositionSpace'?: Space1DDescription;
    readonly 'Extension'?: PTZPresetTourPresetDetailOptionsExtension;
}

/**
 * 
 */
export interface PTZPresetTourPresetDetailOptionsExtension {
}

/**
 * Supported range of Recurring Time.
 */
export interface PTZPresetTourStartingConditionOptions {
    readonly 'RecurringTime'?: IntRange;
    readonly 'RecurringDuration'?: DurationRange;
    readonly 'Direction'?: PTZPresetTourDirection;
    readonly 'Extension'?: PTZPresetTourStartingConditionOptionsExtension;
}

/**
 * 
 */
export interface PTZPresetTourStartingConditionOptionsExtension {
}

/**
 * 
 */
export interface ImagingStatus {
    readonly 'FocusStatus': FocusStatus;
}

/**
 * 
 * 				Status of focus position.
 * 				
 */
export interface FocusStatus {
    readonly 'Position': number;
    readonly 'MoveStatus': MoveStatus;
    readonly 'Error': string;
}

/**
 * Parameter to set autofocus near limit (unit: meter).
 */
export interface FocusConfiguration {
    readonly 'AutoFocusMode': AutoFocusMode;
    readonly 'DefaultSpeed': number;
    readonly 'NearLimit': number;
    readonly 'FarLimit': number;
}

/**
 * Enabled/disabled BLC mode (on/off).
 */
export interface ImagingSettings {
    readonly 'BacklightCompensation'?: BacklightCompensation;
    readonly 'Brightness'?: number;
    readonly 'ColorSaturation'?: number;
    readonly 'Contrast'?: number;
    readonly 'Exposure'?: Exposure;
    readonly 'Focus'?: FocusConfiguration;
    readonly 'IrCutFilter'?: IrCutFilterMode;
    readonly 'Sharpness'?: number;
    readonly 'WideDynamicRange'?: WideDynamicRange;
    readonly 'WhiteBalance'?: WhiteBalance;
    readonly 'Extension'?: ImagingSettingsExtension;
}

/**
 * 
 */
export interface ImagingSettingsExtension {
}

/**
 * 
 * 					Exposure Mode
 * 					
 * 							Auto – Enabled the exposure algorithm on the NVT.
 * 							Manual – Disabled exposure algorithm on the NVT.
 * 						
 * 					
 */
export interface Exposure {
    readonly 'Mode': ExposureMode;
    readonly 'Priority': ExposurePriority;
    readonly 'Window': Rectangle;
    readonly 'MinExposureTime': number;
    readonly 'MaxExposureTime': number;
    readonly 'MinGain': number;
    readonly 'MaxGain': number;
    readonly 'MinIris': number;
    readonly 'MaxIris': number;
    readonly 'ExposureTime': number;
    readonly 'Gain': number;
    readonly 'Iris': number;
}

/**
 * 
 * 				White dynamic range (on/off)
 * 				
 */
export interface WideDynamicRange {
    readonly 'Mode': WideDynamicMode;
    readonly 'Level': number;
}

/**
 * Backlight compensation mode (on/off).
 */
export interface BacklightCompensation {
    readonly 'Mode': BacklightCompensationMode;
    readonly 'Level': number;
}

/**
 * 
 */
export interface ImagingOptions {
    readonly 'BacklightCompensation': BacklightCompensationOptions;
    readonly 'Brightness': FloatRange;
    readonly 'ColorSaturation': FloatRange;
    readonly 'Contrast': FloatRange;
    readonly 'Exposure': ExposureOptions;
    readonly 'Focus': FocusOptions;
    readonly 'IrCutFilterModes': IrCutFilterMode;
    readonly 'Sharpness': FloatRange;
    readonly 'WideDynamicRange': WideDynamicRangeOptions;
    readonly 'WhiteBalance': WhiteBalanceOptions;
}

/**
 * 
 */
export interface WideDynamicRangeOptions {
    readonly 'Mode': WideDynamicMode;
    readonly 'Level': FloatRange;
}

/**
 * 
 */
export interface BacklightCompensationOptions {
    readonly 'Mode': WideDynamicMode;
    readonly 'Level': FloatRange;
}

/**
 * 
 */
export interface FocusOptions {
    readonly 'AutoFocusModes'?: AutoFocusMode;
    readonly 'DefaultSpeed': FloatRange;
    readonly 'NearLimit': FloatRange;
    readonly 'FarLimit': FloatRange;
}

/**
 * 
 */
export interface ExposureOptions {
    readonly 'Mode': ExposureMode;
    readonly 'Priority': ExposurePriority;
    readonly 'MinExposureTime': FloatRange;
    readonly 'MaxExposureTime': FloatRange;
    readonly 'MinGain': FloatRange;
    readonly 'MaxGain': FloatRange;
    readonly 'MinIris': FloatRange;
    readonly 'MaxIris': FloatRange;
    readonly 'ExposureTime': FloatRange;
    readonly 'Gain': FloatRange;
    readonly 'Iris': FloatRange;
}

/**
 * 
 */
export interface WhiteBalanceOptions {
    readonly 'Mode': WhiteBalanceMode;
    readonly 'YrGain': FloatRange;
    readonly 'YbGain': FloatRange;
}

/**
 * 
 * 				Parameters for the absolute focus control.
 * 				
 */
export interface FocusMove {
    readonly 'Absolute'?: AbsoluteFocus;
    readonly 'Relative'?: RelativeFocus;
    readonly 'Continuous'?: ContinuousFocus;
}

/**
 * 
 * 				Position parameter for the absolute focus control.
 * 				
 */
export interface AbsoluteFocus {
    readonly 'Position': number;
    readonly 'Speed'?: number;
}

/**
 * 
 * 				Distance parameter for the relative focus control.
 * 				
 */
export interface RelativeFocus {
    readonly 'Distance': number;
    readonly 'Speed'?: number;
}

/**
 * 
 * 				Speed parameter for the Continuous focus control.
 * 				
 */
export interface ContinuousFocus {
    readonly 'Speed': number;
}

/**
 * 
 */
export interface MoveOptions {
    readonly 'Absolute'?: AbsoluteFocusOptions;
    readonly 'Relative'?: RelativeFocusOptions;
    readonly 'Continuous'?: ContinuousFocusOptions;
}

/**
 * 
 * 				Valid ranges of the position.
 * 				
 */
export interface AbsoluteFocusOptions {
    readonly 'Position': FloatRange;
    readonly 'Speed'?: FloatRange;
}

/**
 * 
 * 				Valid ranges of the distance.
 * 				
 */
export interface RelativeFocusOptions {
    readonly 'Distance': FloatRange;
    readonly 'Speed': FloatRange;
}

/**
 * 
 * 				Valid ranges of the speed.
 * 				
 */
export interface ContinuousFocusOptions {
    readonly 'Speed': FloatRange;
}

/**
 * Auto whitebalancing mode (auto/manual).
 */
export interface WhiteBalance {
    readonly 'Mode': WhiteBalanceMode;
    readonly 'CrGain': number;
    readonly 'CbGain': number;
}

/**
 * 
 * 				Status of focus.
 * 				
 */
export interface ImagingStatus20 {
    readonly 'FocusStatus20'?: FocusStatus20;
    readonly 'Extension'?: ImagingStatus20Extension;
}

/**
 * 
 */
export interface ImagingStatus20Extension {
}

/**
 * 
 * 				Status of focus position.
 * 				
 */
export interface FocusStatus20 {
    readonly 'Position': number;
    readonly 'MoveStatus': MoveStatus;
    readonly 'Error'?: string;
    readonly 'Extension'?: FocusStatus20Extension;
}

/**
 * 
 */
export interface FocusStatus20Extension {
}

/**
 * Type describing the ImagingSettings of a VideoSource. The supported options and ranges can be obtained via the GetOptions command.
 */
export interface ImagingSettings20 {
    readonly 'BacklightCompensation'?: BacklightCompensation20;
    readonly 'Brightness'?: number;
    readonly 'ColorSaturation'?: number;
    readonly 'Contrast'?: number;
    readonly 'Exposure'?: Exposure20;
    readonly 'Focus'?: FocusConfiguration20;
    readonly 'IrCutFilter'?: IrCutFilterMode;
    readonly 'Sharpness'?: number;
    readonly 'WideDynamicRange'?: WideDynamicRange20;
    readonly 'WhiteBalance'?: WhiteBalance20;
    readonly 'Extension'?: ImagingSettingsExtension20;
}

/**
 * Optional element to configure Image Stabilization feature.
 */
export interface ImagingSettingsExtension20 {
    readonly 'ImageStabilization'?: ImageStabilization;
    readonly 'Extension'?: ImagingSettingsExtension202;
}

/**
 * An optional parameter applied to only auto mode to adjust timing of toggling Ir cut filter.
 */
export interface ImagingSettingsExtension202 {
    readonly 'IrCutFilterAutoAdjustment'?: IrCutFilterAutoAdjustment;
    readonly 'Extension'?: ImagingSettingsExtension203;
}

/**
 * Optional element to configure Image Contrast Compensation.
 */
export interface ImagingSettingsExtension203 {
    readonly 'ToneCompensation'?: ToneCompensation;
    readonly 'Defogging'?: Defogging;
    readonly 'NoiseReduction'?: NoiseReduction;
    readonly 'Extension'?: ImagingSettingsExtension204;
}

/**
 * 
 */
export interface ImagingSettingsExtension204 {
}

/**
 * Parameter to enable/disable Image Stabilization feature.
 */
export interface ImageStabilization {
    readonly 'Mode': ImageStabilizationMode;
    readonly 'Level'?: number;
    readonly 'Extension'?: ImageStabilizationExtension;
}

/**
 * 
 */
export interface ImageStabilizationExtension {
}

/**
 * Specifies which boundaries to automatically toggle Ir cut filter following parameters are applied to. Its options shall be chosen from tt:IrCutFilterAutoBoundaryType.
 */
export interface IrCutFilterAutoAdjustment {
    readonly 'BoundaryType': string;
    readonly 'BoundaryOffset'?: number;
    readonly 'ResponseTime'?: string;
    readonly 'Extension'?: IrCutFilterAutoAdjustmentExtension;
}

/**
 * 
 */
export interface IrCutFilterAutoAdjustmentExtension {
}

/**
 * Type describing whether WDR mode is enabled or disabled (on/off).
 */
export interface WideDynamicRange20 {
    readonly 'Mode': WideDynamicMode;
    readonly 'Level'?: number;
}

/**
 * Type describing whether BLC mode is enabled or disabled (on/off).
 */
export interface BacklightCompensation20 {
    readonly 'Mode': BacklightCompensationMode;
    readonly 'Level'?: number;
}

/**
 * Type describing the exposure settings.
 */
export interface Exposure20 {
    readonly 'Mode': ExposureMode;
    readonly 'Priority'?: ExposurePriority;
    readonly 'Window'?: Rectangle;
    readonly 'MinExposureTime'?: number;
    readonly 'MaxExposureTime'?: number;
    readonly 'MinGain'?: number;
    readonly 'MaxGain'?: number;
    readonly 'MinIris'?: number;
    readonly 'MaxIris'?: number;
    readonly 'ExposureTime'?: number;
    readonly 'Gain'?: number;
    readonly 'Iris'?: number;
}

/**
 * Parameter to enable/disable or automatic ToneCompensation feature. Its options shall be chosen from tt:ToneCompensationMode Type.
 */
export interface ToneCompensation {
    readonly 'Mode': string;
    readonly 'Level'?: number;
    readonly 'Extension'?: ToneCompensationExtension;
}

/**
 * 
 */
export interface ToneCompensationExtension {
}

/**
 * Parameter to enable/disable or automatic Defogging feature. Its options shall be chosen from tt:DefoggingMode Type.
 */
export interface Defogging {
    readonly 'Mode': string;
    readonly 'Level'?: number;
    readonly 'Extension'?: DefoggingExtension;
}

/**
 * 
 */
export interface DefoggingExtension {
}

/**
 * Level parameter specified with unitless normalized value from 0.0 to +1.0. Level=0 means no noise reduction or minimal noise reduction.
 */
export interface NoiseReduction {
    readonly 'Level': number;
}

/**
 * 
 * 				Valid range of Backlight Compensation.
 * 				
 */
export interface ImagingOptions20 {
    readonly 'BacklightCompensation'?: BacklightCompensationOptions20;
    readonly 'Brightness'?: FloatRange;
    readonly 'ColorSaturation'?: FloatRange;
    readonly 'Contrast'?: FloatRange;
    readonly 'Exposure'?: ExposureOptions20;
    readonly 'Focus'?: FocusOptions20;
    readonly 'IrCutFilterModes'?: IrCutFilterMode;
    readonly 'Sharpness'?: FloatRange;
    readonly 'WideDynamicRange'?: WideDynamicRangeOptions20;
    readonly 'WhiteBalance'?: WhiteBalanceOptions20;
    readonly 'Extension'?: ImagingOptions20Extension;
}

/**
 * Options of parameters for Image Stabilization feature.
 */
export interface ImagingOptions20Extension {
    readonly 'ImageStabilization'?: ImageStabilizationOptions;
    readonly 'Extension'?: ImagingOptions20Extension2;
}

/**
 * Options of parameters for adjustment of Ir cut filter auto mode.
 */
export interface ImagingOptions20Extension2 {
    readonly 'IrCutFilterAutoAdjustment'?: IrCutFilterAutoAdjustmentOptions;
    readonly 'Extension'?: ImagingOptions20Extension3;
}

/**
 * Options of parameters for Tone Compensation feature.
 */
export interface ImagingOptions20Extension3 {
    readonly 'ToneCompensationOptions'?: ToneCompensationOptions;
    readonly 'DefoggingOptions'?: DefoggingOptions;
    readonly 'NoiseReductionOptions'?: NoiseReductionOptions;
    readonly 'Extension'?: ImagingOptions20Extension4;
}

/**
 * 
 */
export interface ImagingOptions20Extension4 {
}

/**
 * Supported options of Image Stabilization mode parameter.
 */
export interface ImageStabilizationOptions {
    readonly 'Mode': ImageStabilizationMode;
    readonly 'Level'?: FloatRange;
    readonly 'Extension'?: ImageStabilizationOptionsExtension;
}

/**
 * 
 */
export interface ImageStabilizationOptionsExtension {
}

/**
 * Supported options of boundary types for adjustment of Ir cut filter auto mode. The opptions shall be chosen from tt:IrCutFilterAutoBoundaryType. 
 */
export interface IrCutFilterAutoAdjustmentOptions {
    readonly 'BoundaryType': string;
    readonly 'BoundaryOffset'?: boolean;
    readonly 'ResponseTimeRange'?: DurationRange;
    readonly 'Extension'?: IrCutFilterAutoAdjustmentOptionsExtension;
}

/**
 * 
 */
export interface IrCutFilterAutoAdjustmentOptionsExtension {
}

/**
 * 
 */
export interface WideDynamicRangeOptions20 {
    readonly 'Mode': WideDynamicMode;
    readonly 'Level'?: FloatRange;
}

/**
 * 
 * 				'ON' or 'OFF'
 * 				
 */
export interface BacklightCompensationOptions20 {
    readonly 'Mode': BacklightCompensationMode;
    readonly 'Level'?: FloatRange;
}

/**
 * 
 * 				Exposure Mode
 * 				
 * 							Auto – Enabled the exposure algorithm on the device.
 * 							Manual – Disabled exposure algorithm on the device.
 * 						
 * 					
 */
export interface ExposureOptions20 {
    readonly 'Mode': ExposureMode;
    readonly 'Priority'?: ExposurePriority;
    readonly 'MinExposureTime'?: FloatRange;
    readonly 'MaxExposureTime'?: FloatRange;
    readonly 'MinGain'?: FloatRange;
    readonly 'MaxGain'?: FloatRange;
    readonly 'MinIris'?: FloatRange;
    readonly 'MaxIris'?: FloatRange;
    readonly 'ExposureTime'?: FloatRange;
    readonly 'Gain'?: FloatRange;
    readonly 'Iris'?: FloatRange;
}

/**
 * 
 * 				Valid ranges for the absolute control.
 * 				
 */
export interface MoveOptions20 {
    readonly 'Absolute'?: AbsoluteFocusOptions;
    readonly 'Relative'?: RelativeFocusOptions20;
    readonly 'Continuous'?: ContinuousFocusOptions;
}

/**
 * 
 * 				Valid ranges of the distance.
 * 				
 */
export interface RelativeFocusOptions20 {
    readonly 'Distance': FloatRange;
    readonly 'Speed'?: FloatRange;
}

/**
 * 
 * 				'AUTO' or 'MANUAL'
 * 				
 */
export interface WhiteBalance20 {
    readonly 'Mode': WhiteBalanceMode;
    readonly 'CrGain'?: number;
    readonly 'CbGain'?: number;
    readonly 'Extension'?: WhiteBalance20Extension;
}

/**
 * 
 */
export interface WhiteBalance20Extension {
}

/**
 * 
 * 						Mode of auto focus.
 * 						
 * 							AUTO - The device automatically adjusts focus.
 * 							MANUAL - The device does not automatically adjust focus.
 * 						
 * 						Note: for devices supporting both manual and auto operation at the same time manual operation may be supported even if the Mode parameter is set to Auto.
 * 					
 */
export interface FocusConfiguration20 {
    readonly 'AutoFocusMode': AutoFocusMode;
    readonly 'DefaultSpeed'?: number;
    readonly 'NearLimit'?: number;
    readonly 'FarLimit'?: number;
    readonly 'Extension'?: FocusConfiguration20Extension;
}

/**
 * 
 */
export interface FocusConfiguration20Extension {
}

/**
 * 
 * 				Mode of WhiteBalance.
 * 				
 * 							AUTO
 * 							MANUAL
 * 						
 * 					
 */
export interface WhiteBalanceOptions20 {
    readonly 'Mode': WhiteBalanceMode;
    readonly 'YrGain'?: FloatRange;
    readonly 'YbGain'?: FloatRange;
    readonly 'Extension'?: WhiteBalanceOptions20Extension;
}

/**
 * 
 */
export interface WhiteBalanceOptions20Extension {
}

/**
 * 
 * 					Supported modes for auto focus.
 * 					
 * 						AUTO - The device supports automatic focus adjustment.
 * 						MANUAL - The device supports manual focus adjustment.
 * 						
 * 					
 */
export interface FocusOptions20 {
    readonly 'AutoFocusModes'?: AutoFocusMode;
    readonly 'DefaultSpeed'?: FloatRange;
    readonly 'NearLimit'?: FloatRange;
    readonly 'FarLimit'?: FloatRange;
    readonly 'Extension'?: FocusOptions20Extension;
}

/**
 * Supported options for auto focus. Options shall be chosen from tt:AFModes.
 */
export interface FocusOptions20Extension {
    readonly 'AFModes'?: StringAttrList;
}

/**
 * Supported options for Tone Compensation mode. Its options shall be chosen from tt:ToneCompensationMode Type.
 */
export interface ToneCompensationOptions {
    readonly 'Mode': string;
    readonly 'Level': boolean;
}

/**
 * Supported options for Defogging mode. Its options shall be chosen from tt:DefoggingMode Type.
 */
export interface DefoggingOptions {
    readonly 'Mode': string;
    readonly 'Level': boolean;
}

/**
 * Indicates whether or not support Level parameter for NoiseReduction.
 */
export interface NoiseReductionOptions {
    readonly 'Level': boolean;
}

/**
 * 
 */
export interface MessageExtension {
}

/**
 * Value name pair as defined by the corresponding description.
 */
export interface ItemList {
    readonly 'SimpleItem'?: any;
    readonly 'ElementItem'?: any;
    readonly 'Extension'?: ItemListExtension;
}

/**
 * 
 */
export interface ItemListExtension {
}

/**
 * Set of tokens producing this message. The list may only contain SimpleItemDescription items.
 * 					The set of tokens identify the component within the WS-Endpoint, which is responsible for the producing the message.
 * 					For analytics events the token set shall include the VideoSourceConfigurationToken, the VideoAnalyticsConfigurationToken
 * 					and the name of the analytics module or rule.
 * 				
 */
export interface MessageDescription {
    readonly 'Source'?: ItemListDescription;
    readonly 'Key'?: ItemListDescription;
    readonly 'Data'?: ItemListDescription;
    readonly 'Extension'?: MessageDescriptionExtension;
}

/**
 * 
 */
export interface MessageDescriptionExtension {
}

/**
 * 
 * 			Describes a list of items. Each item in the list shall have a unique name.
 * 			The list is designed as linear structure without optional or unbounded elements.
 * 			Use ElementItems only when complex structures are inevitable.
 * 		
 */
export interface ItemListDescription {
    readonly 'SimpleItemDescription'?: any;
    readonly 'ElementItemDescription'?: any;
    readonly 'Extension'?: ItemListDescriptionExtension;
}

/**
 * 
 */
export interface ItemListDescriptionExtension {
}

/**
 * 
 */
export interface Polyline {
    readonly 'Point': Vector;
}

/**
 * 
 */
export interface AnalyticsEngineConfiguration {
    readonly 'AnalyticsModule'?: Config;
    readonly 'Extension'?: AnalyticsEngineConfigurationExtension;
}

/**
 * 
 */
export interface AnalyticsEngineConfigurationExtension {
}

/**
 * 
 */
export interface RuleEngineConfiguration {
    readonly 'Rule'?: Config;
    readonly 'Extension'?: RuleEngineConfigurationExtension;
}

/**
 * 
 */
export interface RuleEngineConfigurationExtension {
}

/**
 * List of configuration parameters as defined in the corresponding description.
 */
export interface Config {
    readonly 'Parameters': ItemList;
}

/**
 * 
 * 						List describing the configuration parameters. The names of the parameters must be unique. If possible SimpleItems
 * 						should be used to transport the information to ease parsing of dynamically defined messages by a client
 * 						application.
 * 					
 */
export interface ConfigDescription {
    readonly 'Parameters': ItemListDescription;
    readonly 'Messages'?: any;
    readonly 'ParentTopic': string;
    readonly 'Extension'?: ConfigDescriptionExtension;
}

/**
 * 
 */
export interface ConfigDescriptionExtension {
}

/**
 * Lists the location of all schemas that are referenced in the rules.
 */
export interface SupportedRules {
    readonly 'RuleContentSchemaLocation'?: string;
    readonly 'RuleDescription'?: ConfigDescription;
    readonly 'Extension'?: SupportedRulesExtension;
}

/**
 * 
 */
export interface SupportedRulesExtension {
}

/**
 * It optionally contains a list of URLs that provide the location of schema files.
 * 					These schema files describe the types and elements used in the analytics module descriptions.
 * 					Analytics module descriptions that reference types or elements imported from any ONVIF defined schema files
 * 					need not explicitly list those schema files.
 */
export interface SupportedAnalyticsModules {
    readonly 'AnalyticsModuleContentSchemaLocation'?: string;
    readonly 'AnalyticsModuleDescription'?: ConfigDescription;
    readonly 'Extension'?: SupportedAnalyticsModulesExtension;
}

/**
 * 
 */
export interface SupportedAnalyticsModulesExtension {
}

/**
 * Contains array of Polyline
 */
export interface PolylineArray {
    readonly 'Segment': Polyline;
    readonly 'Extension'?: PolylineArrayExtension;
}

/**
 * 
 */
export interface PolylineArrayExtension {
}

/**
 * Contains PolylineArray configuration data
 */
export interface PolylineArrayConfiguration {
    readonly 'PolylineArray': PolylineArray;
}

/**
 * Motion Expression data structure contains motion expression which is based on Scene Descriptor schema with XPATH syntax. The Type argument could allow introduction of different dialects 
 */
export interface MotionExpression {
    readonly 'Expression': string;
}

/**
 * Contains Rule MotionExpression configuration
 */
export interface MotionExpressionConfiguration {
    readonly 'MotionExpression': MotionExpression;
}

/**
 * Mapping of the cell grid to the Video frame. The cell grid is starting from the upper left corner and x dimension is going from left to right and the y dimension from up to down.
 */
export interface CellLayout {
    readonly 'Transformation': Transformation;
}

/**
 * Configuration of the streaming and coding settings of a Video window.
 */
export interface PaneConfiguration {
    readonly 'PaneName'?: string;
    readonly 'AudioOutputToken'?: ReferenceToken;
    readonly 'AudioSourceToken'?: ReferenceToken;
    readonly 'AudioEncoderConfiguration'?: AudioEncoderConfiguration;
    readonly 'ReceiverToken'?: ReferenceToken;
    readonly 'Token': ReferenceToken;
}

/**
 * A pane layout describes one Video window of a display. It links a pane configuration to a region of the screen.
 */
export interface PaneLayout {
    readonly 'Pane': ReferenceToken;
    readonly 'Area': Rectangle;
}

/**
 * A layout describes a set of Video windows that are displayed simultaniously on a display. 
 */
export interface Layout {
    readonly 'PaneLayout': PaneLayout;
    readonly 'Extension'?: LayoutExtension;
}

/**
 * 
 */
export interface LayoutExtension {
}

/**
 * This type contains the Audio and Video coding capabilities of a display service.
 */
export interface CodingCapabilities {
    readonly 'AudioEncodingCapabilities'?: AudioEncoderConfigurationOptions;
    readonly 'AudioDecodingCapabilities'?: AudioDecoderConfigurationOptions;
    readonly 'VideoDecodingCapabilities': VideoDecoderConfigurationOptions;
}

/**
 * The options supported for a display layout.
 */
export interface LayoutOptions {
    readonly 'PaneLayoutOptions': PaneLayoutOptions;
    readonly 'Extension'?: LayoutOptionsExtension;
}

/**
 * 
 */
export interface LayoutOptionsExtension {
}

/**
 * Description of a pane layout describing a complete display layout.
 */
export interface PaneLayoutOptions {
    readonly 'Area': Rectangle;
    readonly 'Extension'?: PaneOptionExtension;
}

/**
 * 
 */
export interface PaneOptionExtension {
}

/**
 * 
 * 			Description of a receiver, including its token and configuration.
 * 		
 */
export interface Receiver {
    readonly 'Token': ReferenceToken;
    readonly 'Configuration': ReceiverConfiguration;
}

/**
 * 
 * 			Describes the configuration of a receiver.
 * 		
 */
export interface ReceiverConfiguration {
    readonly 'Mode': ReceiverMode;
    readonly 'MediaUri': string;
    readonly 'StreamSetup': StreamSetup;
}

/**
 * 
 * 			Contains information about a receiver's current state.
 * 		
 */
export interface ReceiverStateInformation {
    readonly 'State': ReceiverState;
    readonly 'AutoCreated': boolean;
}

/**
 * 
 */
export interface SourceReference {
    readonly 'Token': ReferenceToken;
}

/**
 * 
 */
export interface DateTimeRange {
    readonly 'From': string;
    readonly 'Until': string;
}

/**
 * The earliest point in time where there is recorded data on the device.
 */
export interface RecordingSummary {
    readonly 'DataFrom': string;
    readonly 'DataUntil': string;
    readonly 'NumberRecordings': number;
}

/**
 * A structure for defining a limited scope when searching in recorded data.
 */
export interface SearchScope {
    readonly 'IncludedSources'?: SourceReference;
    readonly 'IncludedRecordings'?: RecordingReference;
    readonly 'RecordingInformationFilter'?: XPathExpression;
    readonly 'Extension'?: SearchScopeExtension;
}

/**
 * 
 */
export interface SearchScopeExtension {
}

/**
 * 
 */
export interface EventFilter {
}

/**
 * The lower boundary of the PTZ volume to look for.
 */
export interface PTZPositionFilter {
    readonly 'MinPosition': PTZVector;
    readonly 'MaxPosition': PTZVector;
    readonly 'EnterOrExit': boolean;
}

/**
 * 
 */
export interface MetadataFilter {
    readonly 'MetadataStreamFilter': XPathExpression;
}

/**
 * The state of the search when the result is returned. Indicates if there can be more results, or if the search is completed.
 */
export interface FindRecordingResultList {
    readonly 'SearchState': SearchState;
    readonly 'RecordingInformation'?: RecordingInformation;
}

/**
 * The state of the search when the result is returned. Indicates if there can be more results, or if the search is completed.
 */
export interface FindEventResultList {
    readonly 'SearchState': SearchState;
    readonly 'Result'?: FindEventResult;
}

/**
 * The recording where this event was found. Empty string if no recording is associated with this event.
 */
export interface FindEventResult {
    readonly 'RecordingToken': RecordingReference;
    readonly 'TrackToken': TrackReference;
    readonly 'Time': string;
    readonly 'Event': NotificationMessageHolderType;
    readonly 'StartStateEvent': boolean;
}

/**
 * The state of the search when the result is returned. Indicates if there can be more results, or if the search is completed.
 */
export interface FindPTZPositionResultList {
    readonly 'SearchState': SearchState;
    readonly 'Result'?: FindPTZPositionResult;
}

/**
 * A reference to the recording containing the PTZ position.
 */
export interface FindPTZPositionResult {
    readonly 'RecordingToken': RecordingReference;
    readonly 'TrackToken': TrackReference;
    readonly 'Time': string;
    readonly 'Position': PTZVector;
}

/**
 * The state of the search when the result is returned. Indicates if there can be more results, or if the search is completed.
 */
export interface FindMetadataResultList {
    readonly 'SearchState': SearchState;
    readonly 'Result'?: FindMetadataResult;
}

/**
 * A reference to the recording containing the metadata.
 */
export interface FindMetadataResult {
    readonly 'RecordingToken': RecordingReference;
    readonly 'TrackToken': TrackReference;
    readonly 'Time': string;
}

/**
 * 
 * 					Information about the source of the recording. This gives a description of where the data in the recording comes from. Since a single
 * 					recording is intended to record related material, there is just one source. It is indicates the physical location or the
 * 					major data source for the recording. Currently the recordingconfiguration cannot describe each individual data source.
 * 				
 */
export interface RecordingInformation {
    readonly 'RecordingToken': RecordingReference;
    readonly 'Source': RecordingSourceInformation;
    readonly 'EarliestRecording'?: string;
    readonly 'LatestRecording'?: string;
    readonly 'Content': Description;
    readonly 'Track'?: TrackInformation;
    readonly 'RecordingStatus': RecordingStatus;
}

/**
 * 
 * 				A set of informative desciptions of a data source. The Search searvice allows a client to filter on recordings based on information in this structure.
 * 			
 */
export interface RecordingSourceInformation {
    readonly 'SourceId': string;
    readonly 'Name': Name;
    readonly 'Location': Description;
    readonly 'Description': Description;
    readonly 'Address': string;
}

/**
 * Type of the track: "Video", "Audio" or "Metadata".
 * 					The track shall only be able to hold data of that type.
 */
export interface TrackInformation {
    readonly 'TrackToken': TrackReference;
    readonly 'TrackType': TrackType;
    readonly 'Description': Description;
    readonly 'DataFrom': string;
    readonly 'DataTo': string;
}

/**
 * A set of media attributes valid for a recording at a point in time or for a time interval.
 */
export interface MediaAttributes {
    readonly 'RecordingToken': RecordingReference;
    readonly 'TrackAttributes'?: TrackAttributes;
    readonly 'From': string;
    readonly 'Until': string;
}

/**
 * The basic information about the track. Note that a track may represent a single contiguous time span or consist of multiple slices.
 */
export interface TrackAttributes {
    readonly 'TrackInformation': TrackInformation;
    readonly 'VideoAttributes'?: VideoAttributes;
    readonly 'AudioAttributes'?: AudioAttributes;
    readonly 'MetadataAttributes'?: MetadataAttributes;
    readonly 'Extension'?: TrackAttributesExtension;
}

/**
 * 
 */
export interface TrackAttributesExtension {
}

/**
 * Average bitrate in kbps.
 */
export interface VideoAttributes {
    readonly 'Bitrate'?: number;
    readonly 'Width': number;
    readonly 'Height': number;
    readonly 'Encoding': string;
    readonly 'Framerate': number;
}

/**
 * The bitrate in kbps.
 */
export interface AudioAttributes {
    readonly 'Bitrate'?: number;
    readonly 'Encoding': string;
    readonly 'Samplerate': number;
}

/**
 * Indicates that there can be PTZ data in the metadata track in the specified time interval.
 */
export interface MetadataAttributes {
    readonly 'CanContainPTZ': boolean;
    readonly 'CanContainAnalytics': boolean;
    readonly 'CanContainNotifications': boolean;
}

/**
 * Information about the source of the recording.
 */
export interface RecordingConfiguration {
    readonly 'Source': RecordingSourceInformation;
    readonly 'Content': Description;
    readonly 'MaximumRetentionTime': string;
}

/**
 * Type of the track. It shall be equal to the strings “Video”,
 * 				“Audio” or “Metadata”. The track shall only be able to hold data of that type.
 */
export interface TrackConfiguration {
    readonly 'TrackType': TrackType;
    readonly 'Description': Description;
}

/**
 * Token of the recording.
 */
export interface GetRecordingsResponseItem {
    readonly 'RecordingToken': RecordingReference;
    readonly 'Configuration': RecordingConfiguration;
    readonly 'Tracks': GetTracksResponseList;
}

/**
 * Configuration of a track.
 */
export interface GetTracksResponseList {
    readonly 'Track'?: GetTracksResponseItem;
}

/**
 * Token of the track.
 */
export interface GetTracksResponseItem {
    readonly 'TrackToken': TrackReference;
    readonly 'Configuration': TrackConfiguration;
}

/**
 * Identifies the recording to which this job shall store the received data.
 */
export interface RecordingJobConfiguration {
    readonly 'RecordingToken': RecordingReference;
    readonly 'Mode': RecordingJobMode;
    readonly 'Priority': number;
    readonly 'Source'?: RecordingJobSource;
    readonly 'Extension'?: RecordingJobConfigurationExtension;
}

/**
 * 
 */
export interface RecordingJobConfigurationExtension {
}

/**
 * This field shall be a reference to the source of the data. The type of the source
 * 				is determined by the attribute Type in the SourceToken structure. If Type is
 * 				http://www.onvif.org/ver10/schema/Receiver, the token is a ReceiverReference. In this case
 * 				the device shall receive the data over the network. If Type is
 * 				http://www.onvif.org/ver10/schema/Profile, the token identifies a media profile, instructing the
 * 				device to obtain data from a profile that exists on the local device.
 */
export interface RecordingJobSource {
    readonly 'SourceToken'?: SourceReference;
    readonly 'AutoCreateReceiver'?: boolean;
    readonly 'Tracks'?: RecordingJobTrack;
    readonly 'Extension'?: RecordingJobSourceExtension;
}

/**
 * 
 */
export interface RecordingJobSourceExtension {
}

/**
 * If the received RTSP stream contains multiple tracks of the same type, the
 * 						SourceTag differentiates between those Tracks. This field can be ignored in case of recording a local source.
 */
export interface RecordingJobTrack {
    readonly 'SourceTag': string;
    readonly 'Destination': TrackReference;
}

/**
 * Identification of the recording that the recording job records to.
 */
export interface RecordingJobStateInformation {
    readonly 'RecordingToken': RecordingReference;
    readonly 'State': RecordingJobState;
    readonly 'Sources'?: RecordingJobStateSource;
    readonly 'Extension'?: RecordingJobStateInformationExtension;
}

/**
 * 
 */
export interface RecordingJobStateInformationExtension {
}

/**
 * Identifies the data source of the recording job.
 */
export interface RecordingJobStateSource {
    readonly 'SourceToken': SourceReference;
    readonly 'State': RecordingJobState;
    readonly 'Tracks': RecordingJobStateTracks;
}

/**
 * 
 */
export interface RecordingJobStateTracks {
    readonly 'Track'?: RecordingJobStateTrack;
}

/**
 * Identifies the track of the data source that provides the data.
 */
export interface RecordingJobStateTrack {
    readonly 'SourceTag': string;
    readonly 'Destination': TrackReference;
    readonly 'Error'?: string;
    readonly 'State': RecordingJobState;
}

/**
 * 
 */
export interface GetRecordingJobsResponseItem {
    readonly 'JobToken': RecordingJobReference;
    readonly 'JobConfiguration': RecordingJobConfiguration;
}

/**
 * 
 *       Configuration parameters for the replay service.
 *     
 */
export interface ReplayConfiguration {
    readonly 'SessionTimeout': string;
}

/**
 * 
 */
export interface AnalyticsEngine {
    readonly 'AnalyticsEngineConfiguration': AnalyticsDeviceEngineConfiguration;
}

/**
 * 
 */
export interface AnalyticsDeviceEngineConfiguration {
    readonly 'EngineConfiguration': EngineConfiguration;
    readonly 'Extension'?: AnalyticsDeviceEngineConfigurationExtension;
}

/**
 * 
 */
export interface AnalyticsDeviceEngineConfigurationExtension {
}

/**
 * 
 */
export interface EngineConfiguration {
    readonly 'VideoAnalyticsConfiguration': VideoAnalyticsConfiguration;
    readonly 'AnalyticsEngineInputInfo': AnalyticsEngineInputInfo;
}

/**
 * 
 */
export interface AnalyticsEngineInputInfo {
    readonly 'InputInfo'?: Config;
    readonly 'Extension'?: AnalyticsEngineInputInfoExtension;
}

/**
 * 
 */
export interface AnalyticsEngineInputInfoExtension {
}

/**
 * 
 */
export interface AnalyticsEngineInput {
    readonly 'SourceIdentification': SourceIdentification;
    readonly 'VideoInput': VideoEncoderConfiguration;
    readonly 'MetadataInput': MetadataInput;
}

/**
 * 
 */
export interface SourceIdentification {
    readonly 'Name': string;
    readonly 'Token': ReferenceToken;
    readonly 'Extension'?: SourceIdentificationExtension;
}

/**
 * 
 */
export interface SourceIdentificationExtension {
}

/**
 * 
 */
export interface MetadataInput {
    readonly 'MetadataConfig'?: Config;
    readonly 'Extension'?: MetadataInputExtension;
}

/**
 * 
 */
export interface MetadataInputExtension {
}

/**
 * Token of the analytics engine (AnalyticsEngine) being controlled.
 */
export interface AnalyticsEngineControl {
    readonly 'EngineToken': ReferenceToken;
    readonly 'EngineConfigToken': ReferenceToken;
    readonly 'InputToken': ReferenceToken;
    readonly 'ReceiverToken': ReferenceToken;
    readonly 'Multicast'?: MulticastConfiguration;
    readonly 'Subscription': Config;
    readonly 'Mode': ModeOfOperation;
}

/**
 * Token of the control object whose status is requested.
 */
export interface AnalyticsStateInformation {
    readonly 'AnalyticsEngineControlToken': ReferenceToken;
    readonly 'State': AnalyticsState;
}

/**
 * 
 */
export interface AnalyticsState {
    readonly 'Error'?: string;
    readonly 'State': string;
}

/**
 * Action Engine Event Payload data structure contains the information about the ONVIF command invocations. Since this event could be generated by other or proprietary actions, the command invocation specific fields are defined as optional and additional extension mechanism is provided for future or additional action definitions.
 */
export interface ActionEngineEventPayload {
    readonly 'RequestInfo'?: Envelope;
    readonly 'ResponseInfo'?: Envelope;
    readonly 'Fault'?: Fault;
    readonly 'Extension'?: ActionEngineEventPayloadExtension;
}

/**
 * 
 */
export interface ActionEngineEventPayloadExtension {
}

/**
 * Indicates audio class label
 */
export interface AudioClassCandidate {
    readonly 'Type': AudioClassType;
    readonly 'Likelihood': number;
}

/**
 * Array of audio class label and class probability
 */
export interface AudioClassDescriptor {
    readonly 'ClassCandidate'?: AudioClassCandidate;
    readonly 'Extension'?: AudioClassDescriptorExtension;
}

/**
 * 
 */
export interface AudioClassDescriptorExtension {
}

/**
 * 
 */
export interface ActiveConnection {
    readonly 'CurrentBitrate': number;
    readonly 'CurrentFps': number;
}

/**
 * 
 */
export interface ProfileStatus {
    readonly 'ActiveConnections'?: ActiveConnection;
    readonly 'Extension'?: ProfileStatusExtension;
}

/**
 * 
 */
export interface ProfileStatusExtension {
}

/**
 * 
 */
export interface OSDReference {
}

/**
 * For OSD position type, following are the pre-defined: UpperLeft
 * 						UpperRight
 * 						LowerLeft
 * 						LowerRight
 * 						Custom
 * 					
 */
export interface OSDPosConfiguration {
    readonly 'Type': string;
    readonly 'Pos'?: Vector;
    readonly 'Extension'?: OSDPosConfigurationExtension;
}

/**
 * 
 */
export interface OSDPosConfigurationExtension {
}

/**
 * The value range of "Transparent" could be defined by vendors only should follow this rule: the minimum value means non-transparent and the maximum value maens fully transparent.
 */
export interface OSDColor {
    readonly 'Color': Color;
}

/**
 * 
 * 						The following OSD Text Type are defined:
 * 							Plain - The Plain type means the OSD is shown as a text string which defined in the "PlainText" item.
 * 							Date - The Date type means the OSD is shown as a date, format of which should be present in the "DateFormat" item.
 * 							Time - The Time type means the OSD is shown as a time, format of which should be present in the "TimeFormat" item.
 * 							DateAndTime - The DateAndTime type means the OSD is shown as date and time, format of which should be present in the "DateFormat" and the "TimeFormat" item.
 * 						
 * 					
 */
export interface OSDTextConfiguration {
    readonly 'Type': string;
    readonly 'DateFormat'?: string;
    readonly 'TimeFormat'?: string;
    readonly 'FontSize'?: number;
    readonly 'FontColor'?: OSDColor;
    readonly 'BackgroundColor'?: OSDColor;
    readonly 'PlainText'?: string;
    readonly 'Extension'?: OSDTextConfigurationExtension;
}

/**
 * 
 */
export interface OSDTextConfigurationExtension {
}

/**
 * The URI of the image which to be displayed.
 */
export interface OSDImgConfiguration {
    readonly 'ImgPath': string;
    readonly 'Extension'?: OSDImgConfigurationExtension;
}

/**
 * 
 */
export interface OSDImgConfigurationExtension {
}

/**
 * 
 * 						Acceptable values are the same as in tt:Color.
 * 					
 */
export interface ColorspaceRange {
    readonly 'X': FloatRange;
    readonly 'Y': FloatRange;
    readonly 'Z': FloatRange;
    readonly 'Colorspace': string;
}

/**
 * 
 * 				Describe the colors supported. Either list each color or define the range of color values.
 * 			
 */
export interface ColorOptions {
    readonly 'ColorList': Color;
    readonly 'ColorspaceRange': ColorspaceRange;
}

/**
 * Describe the option of the color and its transparency.
 */
export interface OSDColorOptions {
    readonly 'Color'?: ColorOptions;
    readonly 'Transparent'?: IntRange;
    readonly 'Extension'?: OSDColorOptionsExtension;
}

/**
 * 
 */
export interface OSDColorOptionsExtension {
}

/**
 * List of supported OSD text type. When a device indicates the supported number relating to Text type in MaximumNumberOfOSDs, the type shall be presented.
 */
export interface OSDTextOptions {
    readonly 'Type': string;
    readonly 'FontSizeRange'?: IntRange;
    readonly 'DateFormat'?: string;
    readonly 'TimeFormat'?: string;
    readonly 'FontColor'?: OSDColorOptions;
    readonly 'BackgroundColor'?: OSDColorOptions;
    readonly 'Extension'?: OSDTextOptionsExtension;
}

/**
 * 
 */
export interface OSDTextOptionsExtension {
}

/**
 * List of available image URIs.
 */
export interface OSDImgOptions {
    readonly 'ImagePath': string;
    readonly 'Extension'?: OSDImgOptionsExtension;
}

/**
 * 
 */
export interface OSDImgOptionsExtension {
}

/**
 * Reference to the video source configuration.
 */
export interface OSDConfiguration {
    readonly 'VideoSourceConfigurationToken': OSDReference;
    readonly 'Type': OSDType;
    readonly 'Position': OSDPosConfiguration;
    readonly 'TextString'?: OSDTextConfiguration;
    readonly 'Image'?: OSDImgConfiguration;
    readonly 'Extension'?: OSDConfigurationExtension;
}

/**
 * 
 */
export interface OSDConfigurationExtension {
}

/**
 * 
 */
export interface MaximumNumberOfOSDs {
}

/**
 * The maximum number of OSD configurations supported for the specified video source configuration. If the configuration does not support OSDs, this value shall be zero and the Type and PositionOption elements are ignored. If a device limits the number of instances by OSDType, it shall indicate the supported number for each type via the related attribute.
 */
export interface OSDConfigurationOptions {
    readonly 'MaximumNumberOfOSDs': MaximumNumberOfOSDs;
    readonly 'Type': OSDType;
    readonly 'PositionOption': string;
    readonly 'TextOption'?: OSDTextOptions;
    readonly 'ImageOption'?: OSDImgOptions;
    readonly 'Extension'?: OSDConfigurationOptionsExtension;
}

/**
 * 
 */
export interface OSDConfigurationOptionsExtension {
}

/**
 * Exported file name
 */
export interface FileProgress {
    readonly 'FileName': string;
    readonly 'Progress': number;
}

/**
 * Exported file name and export progress information
 */
export interface ArrayOfFileProgress {
    readonly 'FileProgress'?: FileProgress;
    readonly 'Extension'?: ArrayOfFileProgressExtension;
}

/**
 * 
 */
export interface ArrayOfFileProgressExtension {
}

/**
 * identifier of an existing Storage Configuration.
 */
export interface StorageReferencePath {
    readonly 'StorageToken': ReferenceToken;
    readonly 'RelativePath'?: string;
    readonly 'Extension'?: StorageReferencePathExtension;
}

/**
 * 
 */
export interface StorageReferencePathExtension {
}

/**
 * 
 * True if the device supports defining a region only using Rectangle.
 * The rectangle points are still passed using a Polygon element if the device does not support polygon regions. In this case, the points provided in the Polygon element shall represent a rectangle.
 * 				
 */
export interface PolygonOptions {
    readonly 'RectangleOnly'?: boolean;
    readonly 'VertexLimits'?: IntRange;
}

/**
 * 
 */
export interface Envelope {
}

/**
 * 
 */
export interface Header {
}

/**
 * 
 * 		  Prose in the spec does not specify that attributes are allowed on the Body element
 * 		
 */
export interface Body {
}

/**
 * 
 * 	    Fault reporting structure
 * 	  
 */
export interface Fault {
    readonly 'faultcode': any;
    readonly 'faultstring': string;
    readonly 'faultactor'?: string;
    readonly 'detail'?: detail;
}

/**
 * 
 */
export interface detail {
}

/**
 * Indicates that the WS Subscription policy is supported.
 */
export interface Capabilities {
}

/**
 * Event broker address in the format "scheme://host:port[/resource]". The supported schemes shall be returned by the EventBrokerProtocols capability. The resource part of the URL is only valid when using websocket. The Address must be unique.
 */
export interface EventBrokerConfig {
    readonly 'Address': string;
    readonly 'TopicPrefix': string;
    readonly 'UserName'?: string;
    readonly 'Password'?: string;
    readonly 'CertificateID'?: string;
    readonly 'PublishFilter'?: any;
    readonly 'QoS'?: number;
    readonly 'Status'?: string;
    readonly 'CertPathValidationPolicyID'?: string;
}

/**
 * Namespace of the service being described. This parameter allows to match the service capabilities to the service. Note that only one set of capabilities is supported per namespace.
 */
export interface Service {
    readonly 'Namespace': string;
    readonly 'XAddr': string;
    readonly 'Capabilities'?: any;
    readonly 'Version': OnvifVersion;
}

/**
 * Network capabilities.
 */
export interface DeviceServiceCapabilities {
    readonly 'Network': NetworkCapabilities;
    readonly 'Security': SecurityCapabilities;
    readonly 'System': SystemCapabilities;
    readonly 'Misc'?: MiscCapabilities;
}

/**
 * Indicates support for IP filtering.
 */
export interface NetworkCapabilities {
}

/**
 * Indicates support for TLS 1.0.
 */
export interface SecurityCapabilities {
}

/**
 * Indicates support for WS Discovery resolve requests.
 */
export interface SystemCapabilities {
}

/**
 * Lists of commands supported by SendAuxiliaryCommand.
 */
export interface MiscCapabilities {
}

/**
 * User name
 */
export interface UserCredential {
    readonly 'UserName': string;
    readonly 'Password'?: string;
    readonly 'Extension'?: any;
}

/**
 *  local path 
 */
export interface StorageConfigurationData {
    readonly 'LocalPath'?: string;
    readonly 'StorageUri'?: string;
    readonly 'User'?: UserCredential;
    readonly 'Extension'?: any;
}

/**
 * 
 */
export interface StorageConfiguration {
    readonly 'Data': StorageConfigurationData;
}

/**
 * 
 */
export enum MoveStatus {
    /**
     * 
     */
    'IDLE' = "IDLE",
    /**
     * 
     */
    'MOVING' = "MOVING",
    /**
     * 
     */
    'UNKNOWN' = "UNKNOWN"
}

/**
 * 
 */
export enum Entity {
    /**
     * 
     */
    'Device' = "Device",
    /**
     * 
     */
    'VideoSource' = "VideoSource",
    /**
     * 
     */
    'AudioSource' = "AudioSource"
}

/**
 * Enable the Rotate feature. Degree of rotation is specified Degree parameter.
 */
export enum RotateMode {
    /**
     * Enable the Rotate feature. Degree of rotation is specified Degree parameter.
     */
    'OFF' = "OFF",
    /**
     * Disable the Rotate feature.
     */
    'ON' = "ON",
    /**
     * Rotate feature is automatically activated by the device.
     */
    'AUTO' = "AUTO"
}

/**
 * 
 */
export enum SceneOrientationMode {
    /**
     * 
     */
    'MANUAL' = "MANUAL",
    /**
     * 
     */
    'AUTO' = "AUTO"
}

/**
 * 
 * 					Defines the acceptable values for the Orientation element of the SceneOrientation type
 * 				
 */
export enum SceneOrientationOption {
    /**
     * 
     */
    'Below' = "Below",
    /**
     * 
     */
    'Horizon' = "Horizon",
    /**
     * 
     */
    'Above' = "Above"
}

/**
 * Source view modes supported by device.
 */
export enum ViewModes {
    /**
     * Undewarped viewmode from device supporting fisheye lens.
     */
    'Fisheye' = "Fisheye",
    /**
     * 360 degree panoramic view.
     */
    '360Panorama' = "360Panorama",
    /**
     * 180 degree panoramic view.
     */
    '180Panorama' = "180Panorama",
    /**
     * View mode combining four streams in single Quad, eg., applicable for devices supporting four heads.
     */
    'Quad' = "Quad",
    /**
     * Unaltered view from the sensor.
     */
    'Original' = "Original",
    /**
     * Viewmode combining the left side sensors, applicable for devices supporting multiple sensors.
     */
    'LeftHalf' = "LeftHalf",
    /**
     * Viewmode combining the right side sensors, applicable for devices supporting multiple sensors.
     */
    'RightHalf' = "RightHalf",
    /**
     * Dewarped view mode for device supporting fisheye lens.
     */
    'Dewarp' = "Dewarp"
}

/**
 * 
 */
export enum VideoEncoding {
    /**
     * 
     */
    'JPEG' = "JPEG",
    /**
     * 
     */
    'MPEG4' = "MPEG4",
    /**
     * 
     */
    'H264' = "H264"
}

/**
 * 
 */
export enum Mpeg4Profile {
    /**
     * 
     */
    'SP' = "SP",
    /**
     * 
     */
    'ASP' = "ASP"
}

/**
 * 
 */
export enum H264Profile {
    /**
     * 
     */
    'Baseline' = "Baseline",
    /**
     * 
     */
    'Main' = "Main",
    /**
     * 
     */
    'Extended' = "Extended",
    /**
     * 
     */
    'High' = "High"
}

/**
 * Video Media Subtypes as referenced by IANA (without the leading "video/" Video Media Type).  See also  IANA Media Types.
 */
export enum VideoEncodingMimeNames {
    /**
     * 
     */
    'JPEG' = "JPEG",
    /**
     * 
     */
    'MPV4-ES' = "MPV4-ES",
    /**
     * 
     */
    'H264' = "H264",
    /**
     * 
     */
    'H265' = "H265"
}

/**
 * 
 */
export enum VideoEncodingProfiles {
    /**
     * 
     */
    'Simple' = "Simple",
    /**
     * 
     */
    'AdvancedSimple' = "AdvancedSimple",
    /**
     * 
     */
    'Baseline' = "Baseline",
    /**
     * 
     */
    'Main' = "Main",
    /**
     * 
     */
    'Main10' = "Main10",
    /**
     * 
     */
    'Extended' = "Extended",
    /**
     * 
     */
    'High' = "High"
}

/**
 * 
 */
export enum AudioEncoding {
    /**
     * 
     */
    'G711' = "G711",
    /**
     * 
     */
    'G726' = "G726",
    /**
     * 
     */
    'AAC' = "AAC"
}

/**
 * Audio Media Subtypes as referenced by IANA (without the leading "audio/" Audio Media Type).  See also  IANA Media Types.
 */
export enum AudioEncodingMimeNames {
    /**
     * 
     */
    'PCMU' = "PCMU",
    /**
     * 
     */
    'G726' = "G726",
    /**
     * 
     */
    'MP4A-LATM' = "MP4A-LATM",
    /**
     * 
     */
    'mpeg4-generic' = "mpeg4-generic"
}

/**
 * 
 */
export enum MetadataCompressionType {
    /**
     * 
     */
    'None' = "None",
    /**
     * 
     */
    'GZIP' = "GZIP",
    /**
     * 
     */
    'EXI' = "EXI"
}

/**
 * 
 */
export enum StreamType {
    /**
     * 
     */
    'RTP-Unicast' = "RTP-Unicast",
    /**
     * 
     */
    'RTP-Multicast' = "RTP-Multicast"
}

/**
 * This value is deprecated.
 */
export enum TransportProtocol {
    /**
     * 
     */
    'UDP' = "UDP",
    /**
     * This value is deprecated.
     */
    'TCP' = "TCP",
    /**
     * 
     */
    'RTSP' = "RTSP",
    /**
     * 
     */
    'HTTP' = "HTTP"
}

/**
 * 
 */
export enum ScopeDefinition {
    /**
     * 
     */
    'Fixed' = "Fixed",
    /**
     * 
     */
    'Configurable' = "Configurable"
}

/**
 * 
 */
export enum DiscoveryMode {
    /**
     * 
     */
    'Discoverable' = "Discoverable",
    /**
     * 
     */
    'NonDiscoverable' = "NonDiscoverable"
}

/**
 * 
 */
export enum Duplex {
    /**
     * 
     */
    'Full' = "Full",
    /**
     * 
     */
    'Half' = "Half"
}

/**
 * 
 */
export enum IPv6DHCPConfiguration {
    /**
     * 
     */
    'Auto' = "Auto",
    /**
     * 
     */
    'Stateful' = "Stateful",
    /**
     * 
     */
    'Stateless' = "Stateless",
    /**
     * 
     */
    'Off' = "Off"
}

/**
 * 
 */
export enum NetworkProtocolType {
    /**
     * 
     */
    'HTTP' = "HTTP",
    /**
     * 
     */
    'HTTPS' = "HTTPS",
    /**
     * 
     */
    'RTSP' = "RTSP"
}

/**
 * 
 */
export enum NetworkHostType {
    /**
     * 
     */
    'IPv4' = "IPv4",
    /**
     * 
     */
    'IPv6' = "IPv6",
    /**
     * 
     */
    'DNS' = "DNS"
}

/**
 * 
 */
export enum IPType {
    /**
     * 
     */
    'IPv4' = "IPv4",
    /**
     * 
     */
    'IPv6' = "IPv6"
}

/**
 * 
 */
export enum IPAddressFilterType {
    /**
     * 
     */
    'Allow' = "Allow",
    /**
     * 
     */
    'Deny' = "Deny"
}

/**
 * 
 */
export enum DynamicDNSType {
    /**
     * 
     */
    'NoUpdate' = "NoUpdate",
    /**
     * 
     */
    'ClientUpdates' = "ClientUpdates",
    /**
     * 
     */
    'ServerUpdates' = "ServerUpdates"
}

/**
 * 
 */
export enum Dot11StationMode {
    /**
     * 
     */
    'Ad-hoc' = "Ad-hoc",
    /**
     * 
     */
    'Infrastructure' = "Infrastructure",
    /**
     * 
     */
    'Extended' = "Extended"
}

/**
 * 
 */
export enum Dot11SecurityMode {
    /**
     * 
     */
    'None' = "None",
    /**
     * 
     */
    'WEP' = "WEP",
    /**
     * 
     */
    'PSK' = "PSK",
    /**
     * 
     */
    'Dot1X' = "Dot1X",
    /**
     * 
     */
    'Extended' = "Extended"
}

/**
 * 
 */
export enum Dot11Cipher {
    /**
     * 
     */
    'CCMP' = "CCMP",
    /**
     * 
     */
    'TKIP' = "TKIP",
    /**
     * 
     */
    'Any' = "Any",
    /**
     * 
     */
    'Extended' = "Extended"
}

/**
 * 
 */
export enum Dot11SignalStrength {
    /**
     * 
     */
    'None' = "None",
    /**
     * 
     */
    'Very Bad' = "Very Bad",
    /**
     * 
     */
    'Bad' = "Bad",
    /**
     * 
     */
    'Good' = "Good",
    /**
     * 
     */
    'Very Good' = "Very Good",
    /**
     * 
     */
    'Extended' = "Extended"
}

/**
 * 
 */
export enum Dot11AuthAndMangementSuite {
    /**
     * 
     */
    'None' = "None",
    /**
     * 
     */
    'Dot1X' = "Dot1X",
    /**
     * 
     */
    'PSK' = "PSK",
    /**
     * 
     */
    'Extended' = "Extended"
}

/**
 * 
 */
export enum CapabilityCategory {
    /**
     * 
     */
    'All' = "All",
    /**
     * 
     */
    'Analytics' = "Analytics",
    /**
     * 
     */
    'Device' = "Device",
    /**
     * 
     */
    'Events' = "Events",
    /**
     * 
     */
    'Imaging' = "Imaging",
    /**
     * 
     */
    'Media' = "Media",
    /**
     * 
     */
    'PTZ' = "PTZ"
}

/**
 * Enumeration describing the available system log modes.
 */
export enum SystemLogType {
    /**
     * Indicates that a system log is requested.
     */
    'System' = "System",
    /**
     * Indicates that a access log is requested.
     */
    'Access' = "Access"
}

/**
 * Enumeration describing the available factory default modes.
 */
export enum FactoryDefaultType {
    /**
     * Indicates that a hard factory default is requested.
     */
    'Hard' = "Hard",
    /**
     * Indicates that a soft factory default is requested.
     */
    'Soft' = "Soft"
}

/**
 * Indicates that the date and time are set manually.
 */
export enum SetDateTimeType {
    /**
     * Indicates that the date and time are set manually.
     */
    'Manual' = "Manual",
    /**
     * Indicates that the date and time are set through NTP
     */
    'NTP' = "NTP"
}

/**
 * 
 */
export enum UserLevel {
    /**
     * 
     */
    'Administrator' = "Administrator",
    /**
     * 
     */
    'Operator' = "Operator",
    /**
     * 
     */
    'User' = "User",
    /**
     * 
     */
    'Anonymous' = "Anonymous",
    /**
     * 
     */
    'Extended' = "Extended"
}

/**
 * 
 */
export enum RelayLogicalState {
    /**
     * 
     */
    'active' = "active",
    /**
     * 
     */
    'inactive' = "inactive"
}

/**
 * 
 */
export enum RelayIdleState {
    /**
     * 
     */
    'closed' = "closed",
    /**
     * 
     */
    'open' = "open"
}

/**
 * 
 */
export enum RelayMode {
    /**
     * 
     */
    'Monostable' = "Monostable",
    /**
     * 
     */
    'Bistable' = "Bistable"
}

/**
 * 
 */
export enum DigitalIdleState {
    /**
     * 
     */
    'closed' = "closed",
    /**
     * 
     */
    'open' = "open"
}

/**
 * 
 */
export enum EFlipMode {
    /**
     * 
     */
    'OFF' = "OFF",
    /**
     * 
     */
    'ON' = "ON",
    /**
     * 
     */
    'Extended' = "Extended"
}

/**
 * 
 */
export enum ReverseMode {
    /**
     * 
     */
    'OFF' = "OFF",
    /**
     * 
     */
    'ON' = "ON",
    /**
     * 
     */
    'AUTO' = "AUTO",
    /**
     * 
     */
    'Extended' = "Extended"
}

/**
 * 
 */
export enum PTZPresetTourState {
    /**
     * 
     */
    'Idle' = "Idle",
    /**
     * 
     */
    'Touring' = "Touring",
    /**
     * 
     */
    'Paused' = "Paused",
    /**
     * 
     */
    'Extended' = "Extended"
}

/**
 * 
 */
export enum PTZPresetTourDirection {
    /**
     * 
     */
    'Forward' = "Forward",
    /**
     * 
     */
    'Backward' = "Backward",
    /**
     * 
     */
    'Extended' = "Extended"
}

/**
 * 
 */
export enum PTZPresetTourOperation {
    /**
     * 
     */
    'Start' = "Start",
    /**
     * 
     */
    'Stop' = "Stop",
    /**
     * 
     */
    'Pause' = "Pause",
    /**
     * 
     */
    'Extended' = "Extended"
}

/**
 * 
 */
export enum MoveAndTrackMethod {
    /**
     * 
     */
    'PresetToken' = "PresetToken",
    /**
     * 
     */
    'GeoLocation' = "GeoLocation",
    /**
     * 
     */
    'PTZVector' = "PTZVector",
    /**
     * 
     */
    'ObjectID' = "ObjectID"
}

/**
 * 
 */
export enum AutoFocusMode {
    /**
     * 
     */
    'AUTO' = "AUTO",
    /**
     * 
     */
    'MANUAL' = "MANUAL"
}

/**
 * Focus of a moving camera is updated only once after stopping a pan, tilt or zoom movement.
 */
export enum AFModes {
    /**
     * Focus of a moving camera is updated only once after stopping a pan, tilt or zoom movement.
     */
    'OnceAfterMove' = "OnceAfterMove"
}

/**
 * 
 */
export enum WideDynamicMode {
    /**
     * 
     */
    'OFF' = "OFF",
    /**
     * 
     */
    'ON' = "ON"
}

/**
 * Enumeration describing the available backlight compenstation modes.
 */
export enum BacklightCompensationMode {
    /**
     * Backlight compensation is disabled.
     */
    'OFF' = "OFF",
    /**
     * Backlight compensation is enabled.
     */
    'ON' = "ON"
}

/**
 * 
 */
export enum ExposurePriority {
    /**
     * 
     */
    'LowNoise' = "LowNoise",
    /**
     * 
     */
    'FrameRate' = "FrameRate"
}

/**
 * 
 */
export enum ExposureMode {
    /**
     * 
     */
    'AUTO' = "AUTO",
    /**
     * 
     */
    'MANUAL' = "MANUAL"
}

/**
 * 
 */
export enum Enabled {
    /**
     * 
     */
    'ENABLED' = "ENABLED",
    /**
     * 
     */
    'DISABLED' = "DISABLED"
}

/**
 * 
 */
export enum WhiteBalanceMode {
    /**
     * 
     */
    'AUTO' = "AUTO",
    /**
     * 
     */
    'MANUAL' = "MANUAL"
}

/**
 * 
 */
export enum IrCutFilterMode {
    /**
     * 
     */
    'ON' = "ON",
    /**
     * 
     */
    'OFF' = "OFF",
    /**
     * 
     */
    'AUTO' = "AUTO"
}

/**
 * 
 */
export enum ImageStabilizationMode {
    /**
     * 
     */
    'OFF' = "OFF",
    /**
     * 
     */
    'ON' = "ON",
    /**
     * 
     */
    'AUTO' = "AUTO",
    /**
     * 
     */
    'Extended' = "Extended"
}

/**
 * 
 */
export enum IrCutFilterAutoBoundaryType {
    /**
     * 
     */
    'Common' = "Common",
    /**
     * 
     */
    'ToOn' = "ToOn",
    /**
     * 
     */
    'ToOff' = "ToOff",
    /**
     * 
     */
    'Extended' = "Extended"
}

/**
 * 
 */
export enum ToneCompensationMode {
    /**
     * 
     */
    'OFF' = "OFF",
    /**
     * 
     */
    'ON' = "ON",
    /**
     * 
     */
    'AUTO' = "AUTO"
}

/**
 * 
 */
export enum DefoggingMode {
    /**
     * 
     */
    'OFF' = "OFF",
    /**
     * 
     */
    'ON' = "ON",
    /**
     * 
     */
    'AUTO' = "AUTO"
}

/**
 * 
 */
export enum ImageSendingType {
    /**
     * 
     */
    'Embedded' = "Embedded",
    /**
     * 
     */
    'LocalStorage' = "LocalStorage",
    /**
     * 
     */
    'RemoteStorage' = "RemoteStorage"
}

/**
 * 
 */
export enum PropertyOperation {
    /**
     * 
     */
    'Initialized' = "Initialized",
    /**
     * 
     */
    'Deleted' = "Deleted",
    /**
     * 
     */
    'Changed' = "Changed"
}

/**
 * 
 */
export enum Direction {
    /**
     * 
     */
    'Left' = "Left",
    /**
     * 
     */
    'Right' = "Right",
    /**
     * 
     */
    'Any' = "Any"
}

/**
 * 
 * 			Specifies a receiver connection mode.
 * 		
 */
export enum ReceiverMode {
    /**
     * The receiver connects on demand, as required by consumers of the media streams.
     */
    'AutoConnect' = "AutoConnect",
    /**
     * The receiver attempts to maintain a persistent connection to the configured endpoint.
     */
    'AlwaysConnect' = "AlwaysConnect",
    /**
     * The receiver does not attempt to connect.
     */
    'NeverConnect' = "NeverConnect",
    /**
     * This case should never happen.
     */
    'Unknown' = "Unknown"
}

/**
 * 
 * 			Specifies the current connection state of the receiver.
 * 		
 */
export enum ReceiverState {
    /**
     * The receiver is not connected.
     */
    'NotConnected' = "NotConnected",
    /**
     * The receiver is attempting to connect.
     */
    'Connecting' = "Connecting",
    /**
     * The receiver is connected.
     */
    'Connected' = "Connected",
    /**
     * This case should never happen.
     */
    'Unknown' = "Unknown"
}

/**
 * The search is queued and not yet started.
 */
export enum SearchState {
    /**
     * The search is queued and not yet started.
     */
    'Queued' = "Queued",
    /**
     * The search is underway and not yet completed.
     */
    'Searching' = "Searching",
    /**
     * The search has been completed and no new results will be found.
     */
    'Completed' = "Completed",
    /**
     * The state of the search is unknown. (This is not a valid response from GetSearchState.)
     */
    'Unknown' = "Unknown"
}

/**
 * This case should never happen.
 */
export enum RecordingStatus {
    /**
     * 
     */
    'Initiated' = "Initiated",
    /**
     * 
     */
    'Recording' = "Recording",
    /**
     * 
     */
    'Stopped' = "Stopped",
    /**
     * 
     */
    'Removing' = "Removing",
    /**
     * 
     */
    'Removed' = "Removed",
    /**
     * This case should never happen.
     */
    'Unknown' = "Unknown"
}

/**
 * Placeholder for future extension.
 */
export enum TrackType {
    /**
     * 
     */
    'Video' = "Video",
    /**
     * 
     */
    'Audio' = "Audio",
    /**
     * 
     */
    'Metadata' = "Metadata",
    /**
     * Placeholder for future extension.
     */
    'Extended' = "Extended"
}

/**
 * This case should never happen.
 */
export enum ModeOfOperation {
    /**
     * 
     */
    'Idle' = "Idle",
    /**
     * 
     */
    'Active' = "Active",
    /**
     * This case should never happen.
     */
    'Unknown' = "Unknown"
}

/**
 * 
 * 		  AudioClassType acceptable values are;
 * 		   gun_shot, scream, glass_breaking, tire_screech   
 * 		
 */
export enum AudioClassType {
    /**
     * 
     */
    'gun_shot' = "gun_shot",
    /**
     * 
     */
    'scream' = "scream",
    /**
     * 
     */
    'glass_breaking' = "glass_breaking",
    /**
     * 
     */
    'tire_screech' = "tire_screech"
}

/**
 * 
 */
export enum OSDType {
    /**
     * 
     */
    'Text' = "Text",
    /**
     * 
     */
    'Image' = "Image",
    /**
     * 
     */
    'Extended' = "Extended"
}

/**
 * 
 */
export enum EventBrokerProtocol {
    /**
     * 
     */
    'mqtt' = "mqtt",
    /**
     * 
     */
    'mqtts' = "mqtts",
    /**
     * 
     */
    'ws' = "ws",
    /**
     * 
     */
    'wss' = "wss"
}

/**
 * 
 */
export enum ConnectionStatus {
    /**
     * 
     */
    'Offline' = "Offline",
    /**
     * 
     */
    'Connecting' = "Connecting",
    /**
     * 
     */
    'Connected' = "Connected"
}

/**
 * Automatic adjustment of the device location.
 */
export enum AutoGeoModes {
    /**
     * Automatic adjustment of the device location.
     */
    'Location' = "Location",
    /**
     * Automatic adjustment of the device orientation relative to the compass also called yaw.
     */
    'Heading' = "Heading",
    /**
     * Automatic adjustment of the deviation from the horizon also called pitch and roll.
     */
    'Leveling' = "Leveling"
}

/**
 * NFS protocol
 */
export enum StorageType {
    /**
     * NFS protocol
     */
    'NFS' = "NFS",
    /**
     * CIFS protocol
     */
    'CIFS' = "CIFS",
    /**
     * CDMI protocol
     */
    'CDMI' = "CDMI",
    /**
     * FTP protocol
     */
    'FTP' = "FTP"
}
