/* eslint-disable @typescript-eslint/no-namespace */

import { webcrypto } from 'crypto'
import { from, Observable } from 'rxjs';
import { fail, IResult, ok } from 'typescript-monads';

declare module "crypto" {
  namespace webcrypto {
    const subtle: SubtleCrypto;
  }
}

export enum DigestAlgo {
  SHA1 = 'SHA-1',
  SHA256 = 'SHA-256',
  SHA384 = 'SHA-384',
  SHA512 = 'SHA-512'
}

export class DigestMessageOptions {
  readonly message: string
  readonly alg: DigestAlgo
}

export function digestMessage(message: string, alg: DigestAlgo = DigestAlgo.SHA256): Observable<IResult<string, Error>> {
  const promise = webcrypto.subtle
    .digest(alg, new TextEncoder().encode(message))
    .then(hashBuffer => Array.from(new Uint8Array(hashBuffer)))
    .then(hashArray => hashArray.map((b) => b.toString(16).padStart(2, '0')).join(''))
    .then(hashHex => ok<string, Error>(hashHex))
    .catch((err: Error) => fail<string, Error>(err))

  return from(promise)
}
