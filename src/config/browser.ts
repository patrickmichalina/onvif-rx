import { ISystemConfig } from './interfaces'
import { nonce, digestSha1 } from './universal'

export const DEFAULT_BROWSER_ENV: ISystemConfig = {
  parser: new DOMParser(),
  nonce,
  digestSha1,
  toBase64: (str: string) => btoa(str),
  transport: {} as any
}
