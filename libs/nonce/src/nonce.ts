import { IResult, ok } from "typescript-monads";

export function nonce(size = 12): IResult<string, Error> {
  return ok(Array.from([...Array(size)]).map(() => Math.random().toString(36)[3]).join(''))
}