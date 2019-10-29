import { DOMParser } from 'xmldom'
import { ISystemConfig } from './interfaces'
import { nonce, sharedFetchWrapper } from './universal'
import { createHash } from 'crypto'
import { request } from 'http'

const digestSha1 = (str: string) => Promise.resolve(createHash('sha1').update(str).digest('hex'))

const getContent = (url: string, body: string) => {
  return new Promise((resolve, reject) => {
    const req = request(url, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/soap+xml; charset=utf-8;',
        'Content-Length': body.length
      }
    }, response => {
      // tslint:disable-next-line: no-if-statement
      if (!response.statusCode || response.statusCode < 200 || response.statusCode > 299) {
        reject(new Error('Failed to load page, status code: ' + response.statusCode))
      }
      // tslint:disable-next-line: readonly-array
      const body: any[] = []
      response.on('data', a => body.push(a))
      response.on('end', () => resolve({
        text: () => Promise.resolve(body.toString()),
        status: response.statusCode,
        statusText: response.statusMessage
      }))
    })
    req.on('error', (err) => reject(err))
    req.write(body)
    req.end()
  })
}

const parser = new DOMParser()
const transport =
  (body: string) =>
    (uri: string) =>
      sharedFetchWrapper(getContent(uri, body))

export const DEFAULT_NODE_ENV: ISystemConfig = {
  parser,
  transport,
  nonce,
  digestSha1,
  buffer: Buffer
}