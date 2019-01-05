// import { soapRequest, createONVIFDeviceActionSoapBodyWithSimpleParams } from "../request"
// import { ONVIFDeviceOperation } from "../interfaces"
// import { map } from "rxjs/operators"
// import { commonOVNIFXPath } from "../parse"

// type ServiceResponse = ReadonlyArray<Service>

// interface Service {
//   readonly namespace: string
//   readonly xaddr: string
//   readonly version: string
// }

// /**
//  * Returns information about services on the device.
//  */
// export const getDeviceServices =
//   (includeCapability = true) =>
//     createONVIFDeviceActionSoapBodyWithSimpleParams(ONVIFDeviceOperation.GET_SERVICES)({ 'tds:IncludeCapability': includeCapability ? 'true' : 'false' })
//       .flatMap(soapRequest)
//       .map(obs => obs.pipe(
//         map(res => {
//           return res.map(xmlDoc => {
//             return commonOVNIFXPath(xmlDoc)('//tds:GetServicesResponse')
//               .map(responseNode => {
//                 return responseNode.childNodes()
//                   .map((serviceNode: any) => serviceNode.childNodes())
//                   .map((sn: any) => {
//                     return sn.reduce((x: any, curr: any) => {
//                       const key = curr.name().toLowerCase()
//                       const value = curr.text()
//                       return {
//                         ...x,
//                         [key]: key === 'version'
//                           ? `${value[0]}.${value[1]}`
//                           : value
//                       }
//                     }, {})
//                   })
//               }).valueOr([]) as ServiceResponse
//           })
//         })
//       ))
