import { Observable } from 'rxjs'
import { IMaybe } from 'typescript-monads'

export type ITransport = (body: string) => (uri: string) => Observable<string>

export type IEncodeBase64 = (str: string) => string
export type ISha1Digest = (str: string) => string
export type INonce = (size?: number) => string

export interface ISystemConfig {
  readonly parser: DOMParser
  readonly transport: ITransport
  readonly nonce: INonce
  readonly toBase64: IEncodeBase64
  readonly digestSha1: ISha1Digest
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