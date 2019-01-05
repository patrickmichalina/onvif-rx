import { DOMParser } from 'xmldom'
import { RxHR as http } from '@akanass/rx-http-request'
import { map, tap } from 'rxjs/operators'
import { ISystemConfig } from './interfaces'

const parser = new DOMParser()
const transportHeaders = { 'Content-Type': 'application/soap+xml; charset=utf-8;' }
const transport =
  (body: string) =>
    (uri: string) =>
      http.post(uri, { body, headers: transportHeaders }).pipe(
        // tap(console.log),
        map(res => res.body))

export const DEFAULT_NODE_ENV: ISystemConfig = {
  parser,
  transport,
  base64: {
    decode: (str: string) => Buffer.from(str, 'base64').toString(),
    encode: (str: string) => Buffer.from(str).toString('base64')
  }
}