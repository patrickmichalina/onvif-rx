import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * This operation removes a VideoEncoderConfiguration from an existing media profile. If the
 * media profile does not contain a VideoEncoderConfiguration, the operation has no effect. The removal shall be persistent.
 */
export const RemoveVideoEncoderConfiguration =
  () =>
    createStandardRequestBodyFromString('<trt:RemoveVideoEncoderConfiguration />')
      .map(mapResponseXmlToJson<any>('trt:RemoveVideoEncoderConfigurationResponse')())
