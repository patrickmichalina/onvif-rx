import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * This operation returns the available options (supported values and ranges for video encoder 
 * configuration parameters) when the video encoder parameters are reconfigured. 
 * For JPEG, MPEG4 and H264 extension elements have been defined that provide additional information. A device must provide the 
 * XxxOption information for all encodings supported and should additionally provide the corresponding XxxOption2 information.
 * This response contains the available video encoder configuration options. If a video encoder configuration is specified, 
 * the options shall concern that particular configuration. If a media profile is specified, the options shall be 
 * compatible with that media profile. If no tokens are specified, the options shall be considered generic for the device.
 * 
 */
export const GetVideoEncoderConfigurationOptions =
  () =>
    createStandardRequestBodyFromString('<trt:GetVideoEncoderConfigurationOptions />')
      .map(mapResponseXmlToJson<any>('trt:GetVideoEncoderConfigurationOptionsResponse')())
