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
  })

  it('should work', done => {
    wsUsernameTokenFragment({ password: "123", username: "test" }).pipe(map(a => a.map(b => b.end({ prettyPrint: true })))).subscribe({
      next: sut => {
        expect(sut.isOk()).toEqual(true)

        const expects = `<wsse:Security xmlns:wsse="http://schemas.xmlsoap.org/ws/2003/06/secext" S11:mustUnderstand="1">
  <wsse:UsernameToken xmlns:wsu="http://schemas.xmlsoap.org/ws/2003/06/utility" wsu:Id="test">
    <wsse:Username>test</wsse:Username>
    <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordDigest">123</wsse:Password>
    <wsse:Nonce EncodingType="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-soap-message-security-1.0#Base64Binary">123</wsse:Nonce>
    <wsu:Created xmlns:wsu="http://schemas.xmlsoap.org/ws/2003/06/utility">ISODATESTRING</wsu:Created>
  </wsse:UsernameToken>
</wsse:Security>`

        expect(sut.unwrap()).toEqual(expects);
        done();
      },
      error: done
    })
  });
});
