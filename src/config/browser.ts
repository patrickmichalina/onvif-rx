import { DOMParser } from 'xmldom'
import { ISystemConfig } from './interfaces'
import { nonce } from './universal'

export const DEFAULT_BROWSER_ENV: ISystemConfig = {
  parser: new DOMParser(),
  transport: {} as any,
  nonce,
  toBase64: btoa
}
