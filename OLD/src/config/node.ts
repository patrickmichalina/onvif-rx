import { DOMParser } from 'xmldom'
import { ISystemConfig } from './interfaces'
import { nonce, sharedFetchWrapper } from './universal'
import { createHash } from 'crypto'
import { RxHR as http, RxHttpRequestResponse } from '@akanass/rx-http-request'
import { map, catchError } from 'rxjs/operators'
import { of, Observable } from 'rxjs'

const soapFault = (code: number, reason: string, detail: string) => `<?xml version=”1.0” ?>
<soapenv:Envelope xmlns:soapenv="http://www.w3.org/2003/05/soapenvelope" 
  xmlns:ter="http://www.onvif.org/ver10/error" 
  xmlns:xs="http://www.w3.org/2000/10/XMLSchema">
  <soapenv:Body>
    <soapenv:Fault>
      <soapenv:Code>
        <soapenv:Value>${code}</soapenv:Value>
        <soapenv:Subcode>
          <soapenv:Value>ter:${code}</soapenv:Value>
          <soapenv:Subcode>
            <soapenv:Value>ter:${code}</soapenv:Value>
          </soapenv:Subcode>
        </soapenv:Subcode>
      </soapenv:Code>
      <soapenv:Reason>
        <soapenv:Text xml:lang="en">${reason}</soapenv:Text>
      </soapenv:Reason>
      <soapenv:Node>http://www.w3.org/2003/05/soapenvelope/node/ultimateReceiver</soapenv:Node>
      <soapenv:Role>http://www.w3.org/2003/05/soapenvelope/role/ultimateReceiver</soapenv:Role>
      <soapenv:Detail>
        <soapenv:Text>${detail}</soapenv:Text>
      </soapenv:Detail>
    </soapenv:Fault>
  </soapenv:Body>
</soapenv:Envelope>`

const digestSha1 = (str: string) => Promise.resolve(createHash('sha1').update(str).digest('hex'))

const getContent =
  (url: string, body: string): Observable<RxHttpRequestResponse<any>>  =>
    http.post(url, {
      body,
      family: 4, // https://github.com/nodejs/node/issues/5436#issuecomment-189600282
      headers: {
        'Content-Type': 'application/soap+xml; charset=utf-8;',
        'Content-Length': body.length
      }
    })
    .pipe(catchError(err => {
      const statusCode = 500
      const statusMessage = err.errno || err.status || err.message
      const body = soapFault(statusCode, statusMessage, statusMessage)
      return of<any>({
        body,
        response: {
          body,
          statusMessage,
          statusCode
        }
      })
    }))

const parser = new DOMParser()
const transport =
  (body: string) =>
    (uri: string) =>
      sharedFetchWrapper(getContent(uri, body).pipe(map(a => {
        return {
          text: () => Promise.resolve(a.body),
          status: a.response.statusCode,
          statusText: a.response.statusMessage
        }
      })).toPromise())

export const DEFAULT_NODE_ENV: ISystemConfig = {
  parser,
  transport,
  nonce,
  digestSha1,
  buffer: Buffer
}