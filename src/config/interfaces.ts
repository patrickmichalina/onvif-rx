import { Observable } from "rxjs"

export type ITransport = (body: string) => (uri: string) => Observable<string>

export interface ISystemConfig {
  readonly parser: DOMParser
  readonly transport: ITransport
  readonly xaddrs: string
  readonly username?: string
  readonly password?: string
}
