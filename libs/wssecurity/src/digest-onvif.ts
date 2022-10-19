// export const onvifDigest =
//   (dateIsoString: string) =>
//     reader<IDeviceConfig, IMaybe<PromiseLike<IDigestBag>>>(config => config.user
//       .map(user => {
//         const nonce = config.system.nonce()
//         return config.system.digestSha1(nonce + dateIsoString + user.password).then(hash => {
//           const digest64 = config.system.buffer.from(hash, 'hex').toString('base64')
//           const nonceBase64 = config.system.buffer.from(nonce).toString('base64')
//           return {
//             dateIsoString,
//             nonceBase64,
//             digest64,
//             username: user.username
//           }
//         })
//       }))


export function wsSecurityDigest() {
  return {
    
  }
}