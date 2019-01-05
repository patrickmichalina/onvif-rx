export const XMLNS = {
  SOAP: 'xmlns="http://www.w3.org/2003/05/soap-envelope"',
  DEVICE: 'xmlns="http://www.onvif.org/ver10/device/wsdl"'
}

export const soapShell =
  (rawBody: string) =>
    (rawHeader?: string) =>
      `<?xml version="1.0" encoding="UTF-8"?>
 <Envelope ${XMLNS.SOAP}>
  <Header>${rawHeader}</Header>
  <Body>${rawBody}</Body>
</Envelope>`.replace('<Header></Header>', '')


