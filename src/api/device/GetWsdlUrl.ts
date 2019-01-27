import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * It is possible for an endpoint to request a URL that can be used to retrieve the complete
 * schema and WSDL definitions of a device. The command gives in return a URL entry point
 * where all the necessary product specific WSDL and schema definitions can be retrieved. The
 * device shall provide a URL for WSDL and schema download through the GetWsdlUrl command.
 */
export const GetWsdlUrl =
  () =>
    createStandardRequestBodyFromString('<tds:GetWsdlUrl />')
      .map(mapResponseXmlToJson<any>('tds:GetWsdlUrlResponse')())
