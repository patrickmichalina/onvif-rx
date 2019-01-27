import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * This operation requests a URI that can be used to initiate a live media stream using RTSP as
 * the control protocol. The returned URI shall remain valid indefinitely even if the profile is
 * changed. The ValidUntilConnect, ValidUntilReboot and Timeout Parameter shall be set
 * accordingly (ValidUntilConnect=false, ValidUntilReboot=false, timeout=PT0S). 
 * The correct syntax for the StreamSetup element for these media stream setups defined in 5.1.1 of the streaming specification are as follows:
 * 
 * RTP unicast over UDP: StreamType = "RTP_unicast", TransportProtocol = "UDP"
 * RTP over RTSP over HTTP over TCP: StreamType = "RTP_unicast", TransportProtocol = "HTTP"
 * RTP over RTSP over TCP: StreamType = "RTP_unicast", TransportProtocol = "RTSP"
 * 
 * 
 * If a multicast stream is requested the VideoEncoderConfiguration, AudioEncoderConfiguration and MetadataConfiguration element inside the corresponding 
 * media profile must be configured with valid multicast settings.
 * For full compatibility with other ONVIF services a device should not generate Uris longer than
 * 128 octets.
 */
export const GetStreamUri =
  () =>
    createStandardRequestBodyFromString('<trt:GetStreamUri />')
      .map(mapResponseXmlToJson<any>('trt:GetStreamUriResponse')())
