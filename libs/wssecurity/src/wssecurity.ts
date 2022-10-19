import { fail, IResult, ok } from 'typescript-monads';
import { fragment } from 'xmlbuilder2'
import { IsString, validateOrReject, ValidationError, MinLength } from 'class-validator'
import { XMLBuilder } from 'xmlbuilder2/lib/interfaces';
import { plainToInstance } from 'class-transformer'
import { from, Observable } from 'rxjs';
// <wsse:Security xmlns:wsse="http://schemas.xmlsoap.org/ws/2003/06/secext">
//    <wsse:UsernameToken wsu:Id="sample" xmlns:wsu="http://schemas.xmlsoap.org/ws/2003/06/utility">
//     <wsse:Username>sample</wsse:Username>
//     <wsse:Password Type="wsse:PasswordText">oracle</wsse:Password>
//     <wsu:Created>2004-05-19T08:44:51Z</wsu:Created>
//    </wsse:UsernameToken>
//   </wsse:Security>
//   <wsse:Security soap:actor="oracle" 
//       xmlns:wsse="http://schemas.xmlsoap.org/ws/2003/06/secext">
//    <wsse:UsernameToken wsu:Id="oracle" 
//        xmlns:wsu="http://schemas.xmlsoap.org/ws/2003/06/utility">
//     <wsse:Username>oracle</wsse:Username>
//     <wsse:Password Type="wsse:PasswordText">oracle</wsse:Password>
//     <wsu:Created>2004-05-19T08:46:04Z</wsu:Created>
//    </wsse:UsernameToken>
//   </wsse:Security>

class UsernameTokenFragmentOptions {
  @IsString()
  @MinLength(2)
  readonly username: string

  @IsString()
  @MinLength(2)
  readonly password: string
}

export function wsUsernameTokenFragment(options: UsernameTokenFragmentOptions): Observable<IResult<XMLBuilder, ValidationError[]>> {
  const optionsInstance = plainToInstance(UsernameTokenFragmentOptions, options)
  const promise = validateOrReject(optionsInstance)
    .then(() => {
      const { username, password } = optionsInstance

      const namespaceAlias = {
        wsse: 'http://schemas.xmlsoap.org/ws/2003/06/secext',
        wsu: 'http://schemas.xmlsoap.org/ws/2003/06/utility'
      }

      const node = fragment({ version: '1.0', namespaceAlias })
        .ele('@wsse', 'wsse:Security').att('S11:mustUnderstand', '1')
        .ele('@wsse', 'UsernameToken').att('@wsu', 'wsu:Id', 'Sample')
        .ele('@wsse', 'Username').txt(username).up()
        .ele('@wsse', 'Password').att('Type', 'wsse:PasswordText').txt(password).up()
        .ele('@wsu', 'wsu:Created')
        .up()
        .up();

      return ok<XMLBuilder, ValidationError[]>(node)
    })
    .catch(validationErrors => fail<XMLBuilder, ValidationError[]>(validationErrors))

  return from(promise)
}
