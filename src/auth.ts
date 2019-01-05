import { reader } from 'typescript-monads'
import { ISystemConfig } from './config/interfaces'
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
      reader<ISystemConfig, any>(config => {
        return {
          dateIsoString,
          nonceString,
          nonceBase64: config.base64.encode(nonceString),
          digest: config.base64.encode(SHA1(nonceString).ciphertext + dateIsoString + config.password),
          username: config.username
        }
      })

export const createUserToken =
  (timeDifference = 0) => onvifDigest((new Date(Date.now() + timeDifference)).toISOString())(nonce())
    .map(obj => `<Security mustUnderstand="1" xmlns="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
  <UsernameToken>
    <Username>${obj.username}</Username>
    <Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordDigest">${obj.digest}</Password>
    <Nonce EncodingType="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-soap-message-security-1.0#Base64Binary">${obj.nonceBase64}</Nonce>
    <Created xmlns="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">${obj.dateIsoString}</Created>
  </UsernameToken>
</Security>`.trim())

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

// Digest = B64ENCODE( SHA1( B64DECODE( Nonce ) + Date + Password ) )
// const nonceBase64 = nonceBuffer.toString('base64')
// const digest = hashSha1(Buffer.concat([nonceBuffer, Buffer.from(date), Buffer.from(userObject.password)]))('base64')
  // reader<ISystemConfig, IDigestBag>(config => {
  //   const nonceString = nonce()
  //   // return {
  //   //   dateIsoString: (new Date(Date.now() + timeDifference)).toISOString(),
  //   //   nonceString,
  //   //   nonceBase64: config.base64.encode(nonceString),
  //   //   // password: 
  //   // }
  //   //   const date = (new Date(Date.now() + timeDifference)).toISOString()
  //   //   const nonceBuffer = nonce()
  //   //   const nonceBase64 = ''
  //   //   const digest = onvifDigest(date)(userObject.password)(nonceBuffer).run(config)
  // })
  //   .flatMap(digestBag => onvifDigest(digestBag.dateIsoString)(userObject.password)(digestBag.nonceString))
  //   .map(_ => {
  //     return _
  //   })
