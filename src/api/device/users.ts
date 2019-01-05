// import { ONVIFDeviceOperation } from "../interfaces"
// import { soapRequest, createONVIFDeviceActionSoapBody, createONVIFDeviceActionSoapBodyWithParams } from "../request"
// import { successXmlPathMap } from "../xml"
// import { simpleParseToColletion } from "../parse"

// export enum IUserLevel {
//   ADMINISTRATOR = 'Administrator',
//   OPERATOR = 'Operator',
//   USER = 'User',
//   ANONYMOUS = 'Anonymous',
//   EXTENDED = 'Extended'
// }

// export interface IUser {
//   /**
//    * Username string.
//    */
//   readonly username: string

//   /**
//    * Password string.
//    */
//   readonly password?: string

//   /**
//    * User level string.
//    */
//   readonly userlevel: IUserLevel

//   /**
//    * Extension
//    */
//   readonly extension?: any
// }

// export interface ICreateUserRequest {
//   readonly username: string
//   readonly password: string
//   readonly userLevel: IUserLevel
// }

// const mapUserToString =
//   (username: string) => `<tt:Username>${username}</tt:Username>`

// const mapUsersToString =
//   (users: ReadonlyArray<string>) => users.map(mapUserToString).join('\n')

// const mapUserRequestToString =
//   (user: ICreateUserRequest) =>
//     `<tds:User>
//       <tt:Username>${user.username}</tt:Username>
//       <tt:Password>${user.password}</tt:Password>
//       <tt:UserLevel>${user.userLevel}</tt:UserLevel>
//     </tds:User>`

// const mapUserRequestsToString =
//   (users: ReadonlyArray<ICreateUserRequest>) => users.map(mapUserRequestToString).join('\n')

// /**
//  * This operation lists the registered users and corresponding credentials on a device. 
//  * The device shall support retrieval of registered device users and their credentials for 
//  * the user token through the GetUsers command.
//  */
// export const getUsers = () =>
//   createONVIFDeviceActionSoapBody(ONVIFDeviceOperation.GET_USERS)
//     .flatMap(soapRequest)
//     .map(successXmlPathMap<ReadonlyArray<IUser>>(simpleParseToColletion('//tds:GetUsersResponse')()))

// /**
// * Deletes a user on an device and there may exist users that cannot be deleted to ensure access to the unit. 
// * Either all users are deleted successfully or a fault message MUST be returned and no users be deleted. 
// * If a username exists multiple times in the request, then a fault message is returned.
// */
// export const deleteUser =
//   (username: string) =>
//     deleteUsers([username])

// /**
//  * Deletes users on an device and there may exist users that cannot be deleted to ensure access to the unit. 
//  * Either all users are deleted successfully or a fault message MUST be returned and no users be deleted. 
//  * If a username exists multiple times in the request, then a fault message is returned.
//  */
// export const deleteUsers =
//   (usernames: ReadonlyArray<string>) =>
//     createONVIFDeviceActionSoapBodyWithParams(ONVIFDeviceOperation.DELETE_USERS)(mapUsersToString(usernames))
//       .flatMap(soapRequest)
//       .map(successXmlPathMap<string>(_ => 'OK')) //TODO: return list of users

// /**
// * This operation creates a new device user and corresponding credentials on a device for authentication purposes. 
// * The device shall support creation of device users and their credentials through the CreateUsers command. 
// * Either all users are created successfully or a fault message shall be returned without creating any user.
// * 
// * ONVIF compliant devices are recommended to support password length of at least 28 bytes, as clients may follow the 
// * password derivation mechanism which results in 'password equivalent' of length 28 bytes, as described in section 3.1.2 
// * of the ONVIF security white paper.
// */
// export const createUser =
//   (user: ICreateUserRequest) =>
//     createUsers([user])

// /**
//  * This operation creates new device users and corresponding credentials on a device for authentication purposes. 
//  * The device shall support creation of device users and their credentials through the CreateUsers command. 
//  * Either all users are created successfully or a fault message shall be returned without creating any user.
//  * 
//  * ONVIF compliant devices are recommended to support password length of at least 28 bytes, as clients may follow the 
//  * password derivation mechanism which results in 'password equivalent' of length 28 bytes, as described in section 3.1.2 
//  * of the ONVIF security white paper.
//  */
// export const createUsers =
//   (users: ReadonlyArray<ICreateUserRequest>) =>
//     createONVIFDeviceActionSoapBodyWithParams(ONVIFDeviceOperation.CREATE_USERS)(mapUserRequestsToString(users))
//       .flatMap(soapRequest)
//       .map(successXmlPathMap<string>(_ => 'OK')) //TODO: return list of users
