// import { ONVIFDeviceOperation } from "../interfaces"
// import { soapRequest, createONVIFDeviceActionSoapBody } from "../request"
// import { successXmlPathMap } from "../xml"

// /**
//  * Contains the arbitary device diagnostics information.
//  */
// export interface SupportInformation {
//   /**
//    * The support information as attachment data.
//    */
//   readonly binaryData?: any

//   /**
//    * The support information as character data.
//    */
//   readonly string?: string
// }

// /**
//  * This operation gets a system log from the device. The exact format of the system logs is outside the scope of this standard.
//  */
// export const getDeviceSystemSupportInformation = () =>
//   createONVIFDeviceActionSoapBody(ONVIFDeviceOperation.GET_SYSTEM_SUPPORT_INFORMATION)
//     .flatMap(soapRequest)
//     .map(successXmlPathMap<SupportInformation>(xml => {
//       // TODO: complete this conversion
//       return {
//         string: xml.toString()
//       }
//     }))

