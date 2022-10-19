import { IResult } from 'typescript-monads';
import { fragment } from 'xmlbuilder2'
import { IsString, ValidationError, MinLength } from 'class-validator'
import { XMLBuilder } from 'xmlbuilder2/lib/interfaces';
import { Observable } from 'rxjs';
import { validateOrRejectPlainObservable } from './validate-or-reject-plain-obs';
import { mapResult } from './result-operators';

export class UsernameTokenFragmentOptions {
  @IsString()
  @MinLength(1)
  readonly username: string

  @IsString()
  @MinLength(1)
  readonly password: string
}

export function wsUsernameTokenFragment(options: UsernameTokenFragmentOptions): Observable<IResult<XMLBuilder, ValidationError[]>> {
  return validateOrRejectPlainObservable(UsernameTokenFragmentOptions, options).pipe(
    mapResult(optionsInstance => {
      const { username, password } = optionsInstance

      const namespaceAlias = {
        wsse: 'http://schemas.xmlsoap.org/ws/2003/06/secext',
        wsu: 'http://schemas.xmlsoap.org/ws/2003/06/utility'
      }

      // (new Date(Date.now() + timeDifference)).toISOString()

      return fragment({ version: '1.0', namespaceAlias })
        .ele('@wsse', 'wsse:Security').att('S11:mustUnderstand', '1')
        .ele('@wsse', 'UsernameToken').att('@wsu', 'wsu:Id', username)
        .ele('@wsse', 'Username').txt(username).up()
        .ele('@wsse', 'Password').att('Type', 'wsse:PasswordText').txt(password).up()
        .ele('@wsu', 'wsu:Created')
        .up()
        .up();
    })
  )
}
