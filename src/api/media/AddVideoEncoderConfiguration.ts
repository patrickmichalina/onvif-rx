import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * This operation adds a VideoEncoderConfiguration to an existing media profile. If a
 * configuration exists in the media profile, it will be replaced. The change shall be persistent. A device shall
 * support adding a compatible VideoEncoderConfiguration to a Profile containing a VideoSourceConfiguration and shall
 * support streaming video data of such a profile.
 * 
 */
export const AddVideoEncoderConfiguration =
  () =>
    createStandardRequestBodyFromString('<trt:AddVideoEncoderConfiguration />')
      .map(mapResponseXmlToJson<any>('trt:AddVideoEncoderConfigurationResponse')())
