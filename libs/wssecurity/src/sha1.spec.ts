import { digestMessage } from './sha1'

describe("sha1", () => {
  it('should', done => {
    digestMessage('test').subscribe({
      next: val => {
        expect(val.isOk()).toEqual(true)
        expect(val.unwrap()).toEqual('a94a8fe5ccb19ba61c4c0873d391e987982fbbd3')
        done()
      },
      error: done
    })
  })
})