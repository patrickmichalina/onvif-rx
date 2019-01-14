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
    reader<IDeviceConfig, IMaybe<IDigestBag>>(config => config.user
      .map(user => {
        const nonce = config.system.nonce()
        const digest = config.system.digestSha1(nonce + dateIsoString + user.password)
        const digest64 = config.system.toBase64(digest)
        const nonceBase64 = config.system.toBase64(nonce)
        return {
          dateIsoString,
          nonceBase64,
          digest64,
          username: user.username
        }
      }))

const TOKENS = {
  s: 'Security',
  unt: 'UsernameToken',
  un: 'Username',
  pw: 'Password',
  nc: 'Nonce',
  cr: 'Created',
}

export const createUserToken =
  (timeDifference = 0) =>
    onvifDigest((new Date(Date.now() + timeDifference)).toISOString())
      .map(obj => obj.map(securityInfo => `<${TOKENS.s} s:mustUnderstand="1" xmlns="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
      <${TOKENS.unt}>
        <${TOKENS.un}>${securityInfo.username}</${TOKENS.un}>
        <${TOKENS.pw} Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordDigest">${securityInfo.digest64}</${TOKENS.pw}>
        <${TOKENS.nc} EncodingType="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-soap-message-security-1.0#Base64Binary">${securityInfo.nonceBase64}</${TOKENS.nc}>
        <${TOKENS.cr} xmlns="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">${securityInfo.dateIsoString}</${TOKENS.cr}>
      </${TOKENS.unt}>
    </${TOKENS.s}>`))
