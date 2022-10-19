import { Observable, map } from "rxjs"
import { IResult } from "typescript-monads"

export function mapResult<T, M, E>(fn: (val: T) => M): (source: Observable<IResult<T, E>>) => Observable<IResult<M, E>> {
  return function mapResult(source: Observable<IResult<T, E>>) {
    return source.pipe(
      map(a => a.map(fn))
    )
  }
}

export function flatMapResult<T, M, E>(fn: (val: T) => IResult<M, E>): (source: Observable<IResult<T, E>>) => Observable<IResult<M, E>> {
  return function flatMapResult(source: Observable<IResult<T, E>>) {
    return source.pipe(
      map(a => a.flatMap(fn))
    )
  }
}