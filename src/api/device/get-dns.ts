import { soapShell, XMLNS } from '../../xml'
import { createStandardRequestBody, mapResponseXmlToJson } from '../request'

const createGetDNSBody = () =>
  soapShell(`<GetDNS ${XMLNS.DEVICE} />`)()

/**
 * This operation gets the DNS settings from a device. The device shall return its DNS configurations through the GetDNS command.
 */
export const getDNS = () =>
  createStandardRequestBody(createGetDNSBody())
    .map(mapResponseXmlToJson<any>('tds:DNSInformation'))

