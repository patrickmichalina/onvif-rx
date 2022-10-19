import { webcrypto } from 'crypto'
import { from, Observable } from 'rxjs';
import { fail, IResult, ok } from 'typescript-monads';

declare module "crypto" {
  namespace webcrypto {
    const subtle: SubtleCrypto;
  }
}

export function digestMessage(message: string): Observable<IResult<string, Error>> {
  const promise = webcrypto.subtle
    .digest('SHA-1', new TextEncoder().encode(message))
    .then(hashBuffer => Array.from(new Uint8Array(hashBuffer)))
    .then(hashArray => hashArray.map((b) => b.toString(16).padStart(2, '0')).join(''))
    .then(hashHex => ok<string, Error>(hashHex))
    .catch((err: Error) => fail<string, Error>(err))

  return from(promise)
}
