import { DOMParser } from 'xmldom'
import { ISystemConfig } from './interfaces'
import { nonce, digestSha1, sharedFetchWrapper, FETCH_CONFIG } from './universal'
import fetch from 'node-fetch'

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