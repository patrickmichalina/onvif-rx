import { Observable } from 'rxjs'
import { IMaybe } from 'typescript-monads'

export type ITransport = (body: string) => (uri: string) => Observable<string>

export interface IBase64 {
  readonly encode: (str: string) => string
  readonly decode: (str: string) => string
}

export interface ISystemConfig {
  readonly parser: DOMParser
  readonly transport: ITransport
}

export interface IDeviceConfig {
  readonly system: ISystemConfig
  readonly url: string
  readonly user: IMaybe<IUserCredentials>
}

export interface IUserCredentials {
  readonly username: string
  readonly password: string
}