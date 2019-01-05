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
        tap(a => console.log(a.response.request.body)),
        map(res => res.body))

export const DEFAULT_NODE_ENV: ISystemConfig = {
  parser,
  transport
}