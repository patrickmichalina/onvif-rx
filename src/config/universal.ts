import { INonce } from './interfaces'

export const nonce: INonce =
  (size = 30) =>
    Array.from([...Array(size)]).map(() => Math.random().toString(36)[3]).join('')