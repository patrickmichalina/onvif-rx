import { ISystemConfig } from './interfaces'
import { nonce, digestSha1, sharedFetchWrapper, FETCH_CONFIG } from './universal'
import { Buffer } from 'buffer'

const transport =
  (body: string) =>
    (uri: string) =>
      sharedFetchWrapper(fetch(uri, FETCH_CONFIG(body)))

export const DEFAULT_BROWSER_ENV: ISystemConfig = {
  parser: new DOMParser(),
  nonce,
  digestSha1,
  transport,
  buffer: Buffer
}
