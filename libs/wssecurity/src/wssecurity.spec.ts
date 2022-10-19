import { map } from 'rxjs';
import { wsUsernameTokenFragment } from './wssecurity';

describe('wssecurity', () => {
  it('should return fail with invalid options', done => {
    wsUsernameTokenFragment({ password: "", username: "" })
      .pipe(
        map(a => a.map(b => b.end({ prettyPrint: true })))
      )
      .subscribe({
        next: val => {
          expect(val.isOk()).toEqual(false)
          done()
        },
        error: done
      })
    // expect(sut.unwrapFail()).toEqual([

    // ])

  })

//   it('should work', () => {
//     const sut = wsUsernameTokenFragment({ password: "123", username: "test" }).map(a => a.end({ prettyPrint: true }))

//     expect(sut.isOk()).toEqual(true)

//     const expects = `<wsse:Security xmlns:wsse="http://schemas.xmlsoap.org/ws/2003/06/secext" S11:mustUnderstand="1">
//   <wsse:UsernameToken xmlns:wsu="http://schemas.xmlsoap.org/ws/2003/06/utility" wsu:Id="Sample">
//     <wsse:Username>test</wsse:Username>
//     <wsse:Password Type="wsse:PasswordText">123</wsse:Password>
//     <wsu:Created xmlns:wsu="http://schemas.xmlsoap.org/ws/2003/06/utility"/>
//   </wsse:UsernameToken>
// </wsse:Security>`

//     expect(sut.unwrap()).toEqual(expects);
//   });
});
