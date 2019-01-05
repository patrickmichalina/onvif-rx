// import { ONVIFDeviceOperation } from "../interfaces"
// import { soapRequest, createONVIFDeviceActionSoapBody } from "../request"
// import { maybeOVNIFNodeItemTexts } from "../parse"
// import { successXmlPathMap } from "../xml"

// /**
//  * It is possible for an endpoint to request a URL that can be used to retrieve the complete 
//  * schema and WSDL definitions of a device. The command gives in return a URL entry point where all 
//  * the necessary product specific WSDL and schema definitions can be retrieved. The device shall 
//  * provide a URL for WSDL and schema download through the GetWsdlUrl command.
//  */
// export const getDeviceWsdlUrl = () =>
//   createONVIFDeviceActionSoapBody(ONVIFDeviceOperation.GET_WSDL_URL)
//     .flatMap(soapRequest)
//     .map(successXmlPathMap(xml => maybeOVNIFNodeItemTexts(xml)('//tds:GetWsdlUrlResponse').valueOr([])))
