import { ISystemConfig } from './interfaces'
import { nonce, digestSha1 } from './universal'
import { Buffer } from 'buffer'

export const DEFAULT_BROWSER_ENV: ISystemConfig = {
  parser: new DOMParser(),
  nonce,
  digestSha1,
  buffer: Buffer,
  transport: {} as any
}
