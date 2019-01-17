import { mapResponseXmlToJson, mapResponseObsToProperty, createStandardRequestBodyFromString, XMLNS, createDeviceRequestBodyFromString } from '../request'

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

export const getUsers = () =>
  createDeviceRequestBodyFromString(`GetUsers`)
    .map(mapResponseXmlToJson<IGetUsersResponse>(`tds:GetUsersResponse`)(['tds:User']))
    .map(mapResponseObsToProperty(a => a.User))

export const deleteUser =
  (username: string) =>
    deleteUsers([username])

export const deleteUsers =
  (usernames: ReadonlyArray<string>) =>
    createDeviceRequestBodyFromString(`<DeleteUsers ${XMLNS.DEVICE}>${mapUsersToString(usernames)}</DeleteUsers>`)
      .map(mapResponseXmlToJson<any>(`tds:DeleteUsersResponse`)())
// .map(successXmlPathMap<string>(_ => 'OK')) //TODO: return list of users

export const createUser =
  (user: ICreateUserRequest) =>
    createUsers([user])

export const createUsers =
  (users: ReadonlyArray<ICreateUserRequest>) =>
    createStandardRequestBodyFromString(`<CreateUsers ${XMLNS.DEVICE}>${mapUserRequestsToString(users)}</CreateUsers>`)
      .map(mapResponseXmlToJson<Object>(`tds:CreateUsersResponse`)())
    //   .map(successXmlPathMap<string>(_ => 'OK')) //TODO: return list of users
