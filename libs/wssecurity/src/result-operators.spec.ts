import { of } from 'rxjs'
import { ok } from 'typescript-monads'
import { flatMapResult, mapResult } from './result-operators'

describe("", () => {
  it("", done => {
    of(ok("thing")).pipe(
      mapResult<string, string, Error>(a => `${a}-with-tail`)
    ).subscribe({
      next: val => {
        expect(val.isOk()).toEqual(true)
        expect(val.unwrap()).toEqual("thing-with-tail")
        done()
      },
      error: done
    })
  })

  it("", done => {
    of(ok("thing")).pipe(
      flatMapResult(() => ok<number, Error>(2))
    ).subscribe({
      next: val => {
        expect(val.isOk()).toEqual(true)
        expect(val.unwrap()).toEqual(2)
        done()
      },
      error: done
    })
  })
})