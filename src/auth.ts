import { reader, IMaybe } from 'typescript-monads'
import { ISystemConfig, IDeviceConfig } from './config/interfaces'
import { SHA1 } from 'crypto-js'

interface IDigestBag {
  readonly dateIsoString: string
  readonly nonceString: string
  readonly nonceBase64: string
  readonly digest: string
  readonly username: string
}

export interface IUserCredentials {
  readonly username: string
  readonly password: string
}

export const nonce =
  (tokenLength = 30) =>
    Array.from([...Array(tokenLength)]).map(() => Math.random().toString(36)[3]).join('')

export const onvifDigest =
  (dateIsoString: string) =>
    (nonceString: string) =>
      reader<IDeviceConfig, IMaybe<IDigestBag>>(config => config.user
        .map(user => {
          return {
            dateIsoString,
            nonceString,
            nonceBase64: config.system.base64.encode(nonceString),
            digest: config.system.base64.encode(SHA1(nonceString).ciphertext + dateIsoString + user.password),
            username: user.username
          }
        }))

export const createUserToken =
  (timeDifference = 0) =>
    onvifDigest((new Date(Date.now() + timeDifference)).toISOString())(nonce())
      .map(obj => obj.map(securityInfo => `<Security mustUnderstand="1" xmlns="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
      <UsernameToken>
        <Username>${securityInfo.username}</Username>
        <Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordDigest">${securityInfo.digest}</Password>
        <Nonce EncodingType="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-soap-message-security-1.0#Base64Binary">${securityInfo.nonceBase64}</Nonce>
        <Created xmlns="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">${securityInfo.dateIsoString}</Created>
      </UsernameToken>
    </Security>`.trim()))

// reader<ISystemConfig, string>(config => {
//   // const nonceString = nonce()
//   // const date = (new Date(Date.now() + timeDifference)).toISOString()
//   return ''
//   // return onvifDigest(date)(config.password as string)(nonceString).run(config)
// }).flatMap(str => {
//   const nonceString = nonce()
//   const date = (new Date(Date.now() + timeDifference)).toISOString()
//   return onvifDigest(date)(nonceString)
//     .map(res => {
//       return 1
//     })
// })
// export const createUserToken =
//   (timeDifference = 0) =>
//     (userObject: IUserCredentials) => {
//       const nonceString = nonce()
//       const date = (new Date(Date.now() + timeDifference)).toISOString()
//       return onvifDigest(date)(userObject.password)(nonceString)
//         .map(b => {
//           console.log(b)
//           return `
//           <Security mustUnderstand="1" xmlns="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
//             <UsernameToken>
//               <Username>${userObject.username}</Username>
//               <Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordDigest">${b.digest}</Password>
//               <Nonce EncodingType="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-soap-message-security-1.0#Base64Binary">${b.nonceBase64}</Nonce>
//               <Created xmlns="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">${date}</Created>
//             </UsernameToken>
//           </Security>`.trim()
//         })
//     }
