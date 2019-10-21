import { DOMParser } from 'xmldom'
import { ISystemConfig } from './interfaces'
import { nonce, sharedFetchWrapper, FETCH_CONFIG } from './universal'
import { createHash } from 'crypto'
import fetch from 'node-fetch'

const digestSha1 = (str: string) => Promise.resolve(createHash('sha1').update(str).digest('hex'))

const parser = new DOMParser()
const transport =
  (body: string) =>
    (uri: string) =>
      sharedFetchWrapper(fetch(uri, FETCH_CONFIG(body)))

export const DEFAULT_NODE_ENV: ISystemConfig = {
  parser,
  transport,
  nonce,
  digestSha1,
  buffer: Buffer
}