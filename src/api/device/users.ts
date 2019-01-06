import { createDeviceRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty, createStandardRequestBodyFromString, XMLNS } from '../request'

export enum IUserLevel {
  ADMINISTRATOR = 'Administrator',
  OPERATOR = 'Operator',
  USER = 'User',
  ANONYMOUS = 'Anonymous',
  EXTENDED = 'Extended'
}

export interface IGetUsersResponse {
  readonly User: ReadonlyArray<IUser>
}

export interface IUser {
  /**
   * Username string.
   */
  readonly Username: string

  /**
   * Password string.
   */
  readonly Password?: string

  /**
   * User level string.
   */
  readonly UserLevel: IUserLevel

  /**
   * Extension
   */
  readonly Extension?: any
}

export interface ICreateUserRequest {
  readonly Username: string
  readonly Password: string
  readonly UserLevel: IUserLevel
}

const mapUserToString =
  (username: string) => `<Username>${username}</Username>`

const mapUsersToString =
  (users: ReadonlyArray<string>) => users.map(mapUserToString).join('\n')

const mapUserRequestToString =
  (user: ICreateUserRequest) =>
    `<User>
      <Username>${user.Username}</Username>
      <Password>${user.Password}</Password>
      <UserLevel>${user.UserLevel}</UserLevel>
    </User>`

const mapUserRequestsToString =
  (users: ReadonlyArray<ICreateUserRequest>) => users.map(mapUserRequestToString).join('\n')

/**
 * This operation lists the registered users and corresponding credentials on a device. 
 * The device shall support retrieval of registered device users and their credentials for 
 * the user token through the GetUsers command.
 */
export const getUsers = () =>
  createDeviceRequestBodyFromString(`GetUsers`)
    .map(mapResponseXmlToJson<IGetUsersResponse>(`tds:GetUsersResponse`)(['tds:User']))
    .map(mapResponseObsToProperty(a => a.User))

/**
* Deletes a user on an device and there may exist users that cannot be deleted to ensure access to the unit. 
* Either all users are deleted successfully or a fault message MUST be returned and no users be deleted. 
* If a username exists multiple times in the request, then a fault message is returned.
*/
export const deleteUser =
  (username: string) =>
    deleteUsers([username])

/**
 * Deletes users on an device and there may exist users that cannot be deleted to ensure access to the unit. 
 * Either all users are deleted successfully or a fault message MUST be returned and no users be deleted. 
 * If a username exists multiple times in the request, then a fault message is returned.
 */
export const deleteUsers =
  (usernames: ReadonlyArray<string>) =>
    createDeviceRequestBodyFromString(`<DeleteUsers ${XMLNS.DEVICE}>${mapUsersToString(usernames)}</DeleteUsers>`)
      .map(mapResponseXmlToJson<any>(`tds:DeleteUsersResponse`)())
// .map(successXmlPathMap<string>(_ => 'OK')) //TODO: return list of users

/**
* This operation creates a new device user and corresponding credentials on a device for authentication purposes. 
* The device shall support creation of device users and their credentials through the CreateUsers command. 
* Either all users are created successfully or a fault message shall be returned without creating any user.
* 
* ONVIF compliant devices are recommended to support password length of at least 28 bytes, as clients may follow the 
* password derivation mechanism which results in 'password equivalent' of length 28 bytes, as described in section 3.1.2 
* of the ONVIF security white paper.
*/
export const createUser =
  (user: ICreateUserRequest) =>
    createUsers([user])

/**
 * This operation creates new device users and corresponding credentials on a device for authentication purposes. 
 * The device shall support creation of device users and their credentials through the CreateUsers command. 
 * Either all users are created successfully or a fault message shall be returned without creating any user.
 * 
 * ONVIF compliant devices are recommended to support password length of at least 28 bytes, as clients may follow the 
 * password derivation mechanism which results in 'password equivalent' of length 28 bytes, as described in section 3.1.2 
 * of the ONVIF security white paper.
 */
export const createUsers =
  (users: ReadonlyArray<ICreateUserRequest>) =>
    createStandardRequestBodyFromString(`<CreateUsers ${XMLNS.DEVICE}>${mapUserRequestsToString(users)}</CreateUsers>`)
      .map(mapResponseXmlToJson<Object>(`tds:CreateUsersResponse`)())
    //   .map(successXmlPathMap<string>(_ => 'OK')) //TODO: return list of users
