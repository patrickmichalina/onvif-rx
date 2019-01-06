import { INonce, ISha1Digest } from './interfaces'

export const digestSha1: ISha1Digest = require('js-sha1').digest

export const nonce: INonce =
  (size = 30) =>
    Array.from([...Array(size)]).map(() => Math.random().toString(36)[3]).join('')