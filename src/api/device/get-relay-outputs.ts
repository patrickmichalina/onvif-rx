// import { ONVIFDeviceOperation } from "../interfaces"
// import { soapRequest, createONVIFDeviceActionSoapBody } from "../request"
// import { successXmlPathMap, ONVIF_NAMESPACE } from "../xml"
// import { commonOVNIFXPath } from "../parse"
// import { maybe } from "typescript-monads"

// export enum RelayMode {
//   /**
//    * After setting the state, the relay remains in this state
//    */
//   BISTABLE = 'Bistable',

//   /**
//    * After setting the state, the relay returns to its idle state after the specified time.
//    */
//   MONOSTABLE = 'Monostable'
// }

// export enum RelayIdleState {
//   OPEN = 'open',
//   CLOSED = 'closed'
// }

// export interface RelayOutput {
//   /**
//    * Unique identifier referencing the physical entity.
//    */
//   readonly token: string

//   /**
//    * 'Bistable' or 'Monostable'
//    */
//   readonly mode: RelayMode

//   /**
//    * Time after which the relay returns to its idle state if it is in monostable mode. 
//    * If the Mode field is set to bistable mode the value of the parameter can be ignored.
//    */
//   readonly delayTime: any

//   /**
//    * open' or 'closed'
//    * - 'open' means that the relay is open when the relay state is set to 'inactive' through the trigger command and closed when the state is set to 'active' through the same command.
//    * - 'closed' means that the relay is closed when the relay state is set to 'inactive' through the trigger command and open when the state is set to 'active' through the same command.
//    */
//   readonly idleState: RelayIdleState
// }

// /**
//  * This operation gets a list of all available relay outputs and their settings.
//  * This method has been depricated with version 2.0. Refer to the DeviceIO service.
//  */
// export const getDeviceRelayOutputs = () =>
//   createONVIFDeviceActionSoapBody(ONVIFDeviceOperation.GET_RELAY_OUTPUTS)
//     .flatMap(soapRequest)
//     .map(successXmlPathMap<ReadonlyArray<RelayOutput>>(xml => {
//       console.log(xml.toString())
//       return commonOVNIFXPath(xml)('//tds:GetRelayOutputsResponse')
//         .map(responseNode => {
//           return responseNode.childNodes()
//             .map<RelayOutput>((sn: any) => {
//               const token = maybe(sn.get('@token')).map(a => a.value()).valueOr('')
//               const mode = maybe(sn.get('//tt:Mode', ONVIF_NAMESPACE)).map<RelayMode>(a => a.text() as RelayMode).valueOr(RelayMode.BISTABLE)
//               const idleState = maybe(sn.get('//tt:IdleState', ONVIF_NAMESPACE)).map<RelayIdleState>(a => a.text() as RelayIdleState).valueOr(RelayIdleState.CLOSED)
//               return {
//                 token,
//                 mode,
//                 delayTime: '',
//                 idleState
//               }
//             })
//         }).valueOr([])
//     }))

