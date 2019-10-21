import { reader, IMaybe } from 'typescript-monads'
import { IDeviceConfig } from '../config/interfaces'

interface IDigestBag {
  readonly dateIsoString: string
  readonly nonceBase64: string
  readonly digest64: string
  readonly username: string
}

export interface IUserCredentials {
  readonly username: string
  readonly password: string
}

export const onvifDigest =
  (dateIsoString: string) =>
    reader<IDeviceConfig, IMaybe<PromiseLike<IDigestBag>>>(config => config.user
      .map(user => {
        const nonce = config.system.nonce()
        return config.system.digestSha1(nonce + dateIsoString + user.password).then(hash => {
          const digest64 = config.system.buffer.from(hash, 'hex').toString('base64')
          const nonceBase64 = config.system.buffer.from(nonce).toString('base64')
          return {
            dateIsoString,
            nonceBase64,
            digest64,
            username: user.username
          }
        })
      }))

const TOKENS = {
  s: 'wsse:Security',
  unt: 'wsse:UsernameToken',
  un: 'wsse:Username',
  pw: 'wsse:Password',
  nc: 'wsse:Nonce',
  cr: 'wsu:Created',
}

export const createUserToken =
  (timeDifference = 0) =>
    onvifDigest((new Date(Date.now() + timeDifference)).toISOString())
      .map(obj => obj.map(prom => prom.then(securityInfo => {
        return `<${TOKENS.s} S11:mustUnderstand="1">
        <${TOKENS.unt}>
          <${TOKENS.un}>${securityInfo.username}</${TOKENS.un}>
          <${TOKENS.pw} Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordDigest">${securityInfo.digest64}</${TOKENS.pw}>
          <${TOKENS.nc} EncodingType="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-soap-message-security-1.0#Base64Binary">${securityInfo.nonceBase64}</${TOKENS.nc}>
          <${TOKENS.cr}>${securityInfo.dateIsoString}</${TOKENS.cr}>
        </${TOKENS.unt}>
      </${TOKENS.s}>`
      })))
