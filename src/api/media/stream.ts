import { mapResponseXmlToJson, createStandardRequestBodyFromString, XMLNS } from '../request'

export interface IMediaUri {
  /**
   * Stable Uri to be used for requesting the media stream
   */
  readonly Uri: string

  /**
   * Indicates if the Uri is only valid until the connection is established. The value shall be set to "false".
   */
  readonly InvalidAfterConnect: boolean

  /**
   * Indicates if the Uri is invalid after a reboot of the device. The value shall be set to "false".
   */
  readonly InvalidAfterReboot: boolean

  /**
   * Duration how long the Uri is valid. This parameter shall be set to PT0S to indicate that this stream URI is indefinitely valid even if the profile changes
   */
  readonly Timeout: string
}

export enum StreamType {
  RTP_UNICAST = 'RTP-Unicast',
  RTP_MULTICAST = 'RTP-Multicast'
}

export enum TransportProtocol {
  UDP = 'UDP',
  TCP = 'TCP',
  RTSP = 'RTSP',
  HTTP = 'RTSP'
}

export interface IGetStreamUriRequest {
  /**
   * Defines if a multicast or unicast stream is requested
   */
  readonly Stream: StreamType

  /**
   * Defines the network protocol for streaming, either UDP=RTP/UDP, RTSP=RTP/RTSP/TCP or HTTP=RTP/RTSP/HTTP/TCP
   */
  readonly Protocol: TransportProtocol

  /**
   * The ProfileToken element indicates the media profile to use and will define the configuration of the content of the stream.
   */
  readonly ProfileToken: string
}

const mapStreamRequestToString =
  (req: IGetStreamUriRequest) =>
    `<StreamSetup>
      <Stream>${req.Stream}</Stream>
      <Transport>
        <Protocol>${req.Protocol}</Protocol>
      </Transport>
    </StreamSetup>
    <ProfileToken>${req.ProfileToken}</ProfileToken>`

export const getStreamUri = (req: IGetStreamUriRequest) =>
  createStandardRequestBodyFromString(`<GetStreamUri ${XMLNS.MEDIA}>${mapStreamRequestToString(req)}</GetStreamUri>`)
    .map(mapResponseXmlToJson<IMediaUri>('trt:MediaUri')())
