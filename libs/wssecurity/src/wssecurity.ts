import { IsString, ValidationError, MinLength } from 'class-validator'
import { validateOrRejectPlainObservable } from '@patrickmichalina/onvif-validation';
import { IResult } from 'typescript-monads';
import { mapResult } from './result-operators';
import { Observable } from 'rxjs';
import { fragment } from 'xmlbuilder2'
import { XMLBuilder } from 'xmlbuilder2/lib/interfaces';

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
    mapResult(({ username, password }) => {
      const urls = {
        passwordDigestType: 'http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordDigest',
        nonceEncodingType: 'http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-soap-message-security-1.0#Base64Binary',
        soapNsUtil: 'http://schemas.xmlsoap.org/ws/2003/06/utility',
        soapNsSecext: 'http://schemas.xmlsoap.org/ws/2003/06/secext'
      }

      const namespaceAlias = {
        wsse: urls.soapNsSecext,
        wsu: urls.soapNsUtil
      }

      return fragment({ version: '1.0', namespaceAlias })
        .ele('@wsse', 'wsse:Security').att('S11:mustUnderstand', '1')
        .ele('@wsse', 'UsernameToken').att('@wsu', 'wsu:Id', username)
        .ele('@wsse', 'Username').txt(username).up()
        .ele('@wsse', 'Password').att('Type', urls.passwordDigestType).txt(password).up()
        .ele('@wsse', 'Nonce').att('EncodingType', urls.nonceEncodingType).txt(password).up()
        .ele('@wsu', 'wsu:Created').txt('ISODATESTRING').up()
        .up();
    })
  )
}
