import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * This command stop multicast streaming using a specified media profile of a device
 */
export const StopMulticastStreaming =
  () =>
    createStandardRequestBodyFromString('<trt:StopMulticastStreaming />')
      .map(mapResponseXmlToJson<any>('trt:StopMulticastStreamingResponse')())
