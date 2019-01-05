import { soapShell, XMLNS } from '../../xml'
import { createStandardRequestBody, mapResponseXmlToJson } from '../request'

export enum SetDateTimeType {
  MANUAL = 'Manual',
  NTP = 'NTP'
}

/**
 * Contains information whether system date and time are set manually or by NTP, 
 * daylight savings is on or off, time zone in POSIX 1003.1 format and system 
 * date and time in UTC and also local system date and time.
 */
export interface SystemDateTime {
  /**
   * Indicates if the time is set manully or through NTP.
   */
  readonly dateTimeType: SetDateTimeType

  /**
   * Informative indicator whether daylight savings is currently on/off.
   */
  readonly daylightSavings: boolean

  /**
   * Timezone information in Posix format.
   */
  readonly timeZone?: any

  /**
   * Current system date and time in UTC format. This field is mandatory since version 2.0.
   */
  readonly utcDateTime?: any

  /**
   * Date and time in local format.
   */
  readonly localDateTime?: any
  readonly extension?: any
}

const createGetDeviceSystemDateAndTimeBody = () =>
  soapShell(`<GetSystemDateAndTime ${XMLNS.DEVICE}></GetSystemDateAndTime>`)

/**
 * This operation gets the device system date and time. 
 * The device shall support the return of the daylight saving setting and of 
 * the manual system date and time (if applicable) or indication of NTP time (if applicable) 
 * through the GetSystemDateAndTime command.
 */
export const getDeviceSystemDateAndTime = () =>
  createStandardRequestBody(createGetDeviceSystemDateAndTimeBody())
    .map(mapResponseXmlToJson<SystemDateTime>('tds:SystemDateAndTime'))

