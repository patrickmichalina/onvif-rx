// import { ONVIFDeviceOperation } from "../interfaces"
// import { soapRequest, createONVIFDeviceActionSoapBody } from "../request"
// import { successXmlPathMap } from "../xml"
// import { maybeOVNIFNodeItemText } from "../parse"

// /**
//  * This operation reboots the device.
//  */
// export const deviceSystemReboot = () =>
//   createONVIFDeviceActionSoapBody(ONVIFDeviceOperation.SYSTEM_REBOOT)
//     .flatMap(soapRequest)
//     .map(successXmlPathMap<string>(xml => maybeOVNIFNodeItemText(xml)('//tds:SystemRebootResponse').valueOr('')))
