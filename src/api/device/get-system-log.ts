// import { ONVIFDeviceOperation } from "../interfaces"
// import { soapRequest, createONVIFDeviceActionSoapBody } from "../request"
// import { successXmlPathMap } from "../xml"

// /**
//  * Contains the system log information.
//  */
// export interface SystemLog {
//   /**
//    * The log information as attachment data.
//    */
//   readonly binaryData?: any

//   /**
//    * The log information as character data.
//    */
//   readonly string?: string
// }

// /**
//  * This operation gets a system log from the device. The exact format of the system logs is outside the scope of this standard.
//  */
// export const getDeviceSystemLog = () =>
//   createONVIFDeviceActionSoapBody(ONVIFDeviceOperation.GET_SYSTEM_LOG)
//     .flatMap(soapRequest)
//     .map(successXmlPathMap<SystemLog>(xml => {
//       // TODO: complete this conversion
//       return { 
//         string: xml.toString()
//       }
//     }))

