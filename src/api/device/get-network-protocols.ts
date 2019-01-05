// import { ONVIFDeviceOperation } from "../interfaces"
// import { soapRequest, createONVIFDeviceActionSoapBody } from "../request"
// import { successXmlPathMap } from "../xml"

// /**
//  * TODO:
//  */
// export const getDeviceNetworkProtocols = () =>
//   createONVIFDeviceActionSoapBody(ONVIFDeviceOperation.GET_NETWORK_PROTOCOLS)
//     .flatMap(soapRequest)
//     .map(successXmlPathMap(xml => xml.toString()))
