export const XMLNS = {
  SOAP: 'xmlns="http://www.w3.org/2003/05/soap-envelope"',
  DEVICE: 'xmlns="http://www.onvif.org/ver10/device/wsdl"'
}

export const soapShell =
  (rawBody: string) =>
    (rawHeader?: string) =>
      `<?xml version="1.0" encoding="UTF-8"?>
 <Envelope xmlns:s="http://www.w3.org/2003/05/soap-envelope" xmlns:tds="http://www.onvif.org/ver10/device/wsdl" xmlns:tt="http://www.onvif.org/ver10/schema">
  <Header>${rawHeader || ''}</Header>
  <Body>${rawBody}</Body>
</Envelope>`


