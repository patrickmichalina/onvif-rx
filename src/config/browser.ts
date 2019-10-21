import { ISystemConfig } from './interfaces'
import { nonce, sharedFetchWrapper, FETCH_CONFIG } from './universal'
import { Buffer } from 'buffer'

const digestSha1 =
  (data: string) =>
    crypto.subtle.digest('SHA-1', new TextEncoder().encode(data))
      .then(hash => Array.from(new Uint8Array(hash)).map(b => b.toString(16).padStart(2, '0')).join(''))

const transport =
  (body: string) =>
    (uri: string) =>
      sharedFetchWrapper(fetch(uri, FETCH_CONFIG(body)))

export const DEFAULT_BROWSER_ENV: ISystemConfig = {
  parser: typeof DOMParser !== 'undefined' ? new DOMParser() : {} as DOMParser,
  nonce,
  digestSha1,
  transport,
  buffer: Buffer
}
