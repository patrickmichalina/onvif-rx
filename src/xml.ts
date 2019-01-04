export const soapShell =
  (rawBody: string) =>
    `<?xml version="1.0" encoding="UTF-8"?>
 <Envelope ${XMLNS.SOAP}>
  <Header>${rawBody}</Header>
  <Body>${rawBody}</Body>
</Envelope>`.replace('<Header></Header>', '')

export const XMLNS = {
  SOAP: 'xmlns="http://www.w3.org/2003/05/soap-envelope"',
  DEVICE: 'xmlns="http://www.onvif.org/ver10/device/wsdl"'
}
