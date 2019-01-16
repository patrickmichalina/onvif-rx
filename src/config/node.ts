import { DOMParser } from 'xmldom'
import { RxHR as http } from '@akanass/rx-http-request'
import { map, tap } from 'rxjs/operators'
import { ISystemConfig } from './interfaces'
import { nonce, digestSha1 } from './universal'

const parser = new DOMParser()
const toBase64 = (str: string) => Buffer.from(str).toString('base64')
const transportHeaders = { 'Content-Type': 'application/soap+xml; charset=utf-8;' }
const transport =
  (body: string) =>
    (uri: string) =>
      http.post(uri, { body, headers: transportHeaders }).pipe(
        tap(a => console.log('REQ MADE!')),
        map(res => res.body))

export const DEFAULT_NODE_ENV: ISystemConfig = {
  parser,
  transport,
  nonce,
  digestSha1,
  toBase64
}