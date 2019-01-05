import { Observable } from 'rxjs'

export type ITransport = (body: string) => (uri: string) => Observable<string>

export interface IBase64 {
  readonly encode: (str: string) => string
  readonly decode: (str: string) => string
}

export interface ISystemConfig {
  readonly parser: DOMParser
  readonly transport: ITransport
  readonly base64: IBase64
  readonly xaddrs: string
  readonly username?: string
  readonly password?: string
}
