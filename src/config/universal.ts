import { INonce, ISha1Digest } from './interfaces'

export const digestSha1: ISha1Digest = require('js-sha1').digest

export const REQUEST_HEADERS = { 'Content-Type': 'application/soap+xml; charset=utf-8;' }

export const nonce: INonce =
  (size = 30) =>
    Array.from([...Array(size)]).map(() => Math.random().toString(36)[3]).join('')