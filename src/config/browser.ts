import { ISystemConfig } from './interfaces'
import { nonce, digestSha1 } from './universal'

export const DEFAULT_BROWSER_ENV: ISystemConfig = {
  parser: new DOMParser(),
  transport: {} as any,
  nonce,
  digestSha1,
  toBase64: btoa
}
