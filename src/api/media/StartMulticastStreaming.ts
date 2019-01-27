import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * This command starts multicast streaming using a specified media profile of a device.
 * Streaming continues until StopMulticastStreaming is called for the same Profile. The
 * streaming shall continue after a reboot of the device until a StopMulticastStreaming request is
 * received. The multicast address, port and TTL are configured in the
 * VideoEncoderConfiguration, AudioEncoderConfiguration and MetadataConfiguration
 * respectively.
 */
export const StartMulticastStreaming =
  () =>
    createStandardRequestBodyFromString('<trt:StartMulticastStreaming />')
      .map(mapResponseXmlToJson<any>('trt:StartMulticastStreamingResponse')())
