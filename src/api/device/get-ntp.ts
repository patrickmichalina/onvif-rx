// import { ONVIFDeviceOperation } from "../interfaces"
// import { soapRequest, createONVIFDeviceActionSoapBody } from "../request"
// import { successXmlPathMap } from "../xml"

// export enum NetworkHostType {
//   IPV4 = 'IPv4',
//   IPV6 = 'IPv6',
//   DNS = 'DNS'
// }

// export interface NetworkHost {
//   /**
//    * Network host type: IPv4, IPv6 or DNS.
//    */
//   readonly type: NetworkHostType

//   /**
//    * IPv4 address.
//    */
//   readonly IPv4Address?: any

//   /**
//    * IPv6 address.
//    */
//   readonly IPv6Address?: any

//   /**
//    * DNS name.
//    */
//   readonly DNSname?: any
//   readonly Extension?: any
// }

// export interface NTPInformation {
//   /**
//    * Indicates if NTP information is to be retrieved by using DHCP.
//    */
//   readonly fromDHCP: boolean

//   /**
//    * List of NTP addresses retrieved by using DHCP.
//    */
//   readonly ntpFromDHCP?: ReadonlyArray<NetworkHost>

//   /**
//    * List of manually entered NTP addresses.
//    */
//   readonly ntpManual?: ReadonlyArray<NetworkHost>
//   readonly extension?: any
// }

// /**
//  * This operation gets the NTP settings from a device. If the device supports NTP, 
//  * it shall be possible to get the NTP server settings through the GetNTP command.
//  */
// export const getDeviceNTP = () =>
//   createONVIFDeviceActionSoapBody(ONVIFDeviceOperation.GET_NTP)
//     .flatMap(soapRequest)
//     .map(successXmlPathMap<NTPInformation>(xml => {
//       // todo: finish this method
//       return {
//         fromDHCP: xml.toString()
//       } as any
//     }))

