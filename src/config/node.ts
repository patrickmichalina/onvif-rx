import { DOMParser } from 'xmldom'
import { RxHR as http } from '@akanass/rx-http-request'
import { map } from 'rxjs/operators'
import { ISystemConfig } from './interfaces'
import { nonce, digestSha1, REQUEST_HEADERS } from './universal'

const parser = new DOMParser()
const transport =
  (body: string) =>
    (uri: string) =>
      http.post(uri, { body, headers: REQUEST_HEADERS }).pipe(
        // tap(a => console.log('REQ MADE!')),
        map(res => res.body))

export const DEFAULT_NODE_ENV: ISystemConfig = {
  parser,
  transport,
  nonce,
  digestSha1,
  buffer: Buffer
}