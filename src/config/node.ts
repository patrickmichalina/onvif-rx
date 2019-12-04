import { DOMParser } from 'xmldom'
import { ISystemConfig } from './interfaces'
import { nonce, sharedFetchWrapper } from './universal'
import { createHash } from 'crypto'
import { RxHR as http } from '@akanass/rx-http-request'
import { map } from 'rxjs/operators'

const digestSha1 = (str: string) => Promise.resolve(createHash('sha1').update(str).digest('hex'))

const getContent =
  (url: string, body: string) =>
    http.post(url, {
      body,
      family: 4, // fixes: https://github.com/nodejs/node/issues/5436#issuecomment-189600282
      headers: {
        'Content-Type': 'application/soap+xml; charset=utf-8;',
        'Content-Length': body.length
      }
    })

const parser = new DOMParser()
const transport =
  (body: string) =>
    (uri: string) =>
      sharedFetchWrapper(getContent(uri, body).pipe(map(a => {
        return {
          text: () => Promise.resolve(a.body),
          status: a.response.statusCode,
          statusText: a.response.statusMessage
        }
      })).toPromise())

export const DEFAULT_NODE_ENV: ISystemConfig = {
  parser,
  transport,
  nonce,
  digestSha1,
  buffer: Buffer
}