
export enum DiscoveryMode {
  DISCOVERABLE = 'Discoverable',
  NON_DISCOVERABLE = 'NonDiscoverable'
}

/**
 * This operation gets the discovery mode of a device. See Section 7.2 for the definition of 
 * the different device discovery modes. The device shall support retrieval of the discovery 
 * mode setting through the GetDiscoveryMode command.
 */
export const getDeviceDiscoveryMode = () => 1
  // createONVIFDeviceActionSoapBody(ONVIFDeviceOperation.GET_DISCOVERY_MODE)
  //   .flatMap(soapRequest)
  //   .map(successXmlPathMap(xml =>
  //     maybeOVNIFNodeItemText(xml)('//tds:DiscoveryMode')
  //       .map(a => a as DiscoveryMode)
  //       .valueOr(DiscoveryMode.NON_DISCOVERABLE)))
