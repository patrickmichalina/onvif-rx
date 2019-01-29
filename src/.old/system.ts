import { createDeviceRequestBodyFromString, mapResponseXmlToJson } from '../soap/request'

/**
 * Contains the arbitary device diagnostics information.
 */
export interface ISupportInformation {
  /**
   * The support information as attachment data.
   */
  readonly binaryData?: any

  /**
   * The support information as character data.
   */
  readonly string?: string
}

/**
 * Contains the system log information.
 */
export interface ISystemLog {
  /**
   * The log information as attachment data.
   */
  readonly binaryData?: any

  /**
   * The log information as character data.
   */
  readonly string?: string
}

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

export interface ISystemRebootResponse {
  readonly Message: string
}

export interface WdslResponse {
  readonly WsdlUrl: string
}

export const systemReboot = () =>
  createDeviceRequestBodyFromString(`SystemReboot`)
    .map(mapResponseXmlToJson<ISystemRebootResponse>(`tds:SystemRebootResponse`)())

const dtkey = 'SystemDateAndTime'

export const getDeviceSystemDateAndTime = () =>
  createDeviceRequestBodyFromString(`Get${dtkey}`)
    .map(mapResponseXmlToJson<SystemDateTime>(`tds:${dtkey}`)())

export const getSystemLog = () =>
  createDeviceRequestBodyFromString(`GetSystemLog`)
    .map(mapResponseXmlToJson<ISystemLog>(`tds:GetSystemLogResponse`)())

export const getSystemSupportInformation = () =>
  createDeviceRequestBodyFromString(`GetSystemSupportInformation`)
    .map(mapResponseXmlToJson<ISupportInformation>(`tds:GetSystemSupportInformationResponse`)())

export const getSystemBackup = () =>
  createDeviceRequestBodyFromString(`GetSystemBackup`)
    .map(mapResponseXmlToJson<any>(`tds:GetSystemBackupResponse`)())

export const getSystemUris = () =>
  createDeviceRequestBodyFromString(`GetSystemUris`)
    .map(mapResponseXmlToJson<any>(`tds:GetSystemUrisResponse`)())

export const getWsdlUrl = () =>
  createDeviceRequestBodyFromString(`GetWsdlUrl`)
    .map(mapResponseXmlToJson<WdslResponse>(`tds:GetWsdlUrlResponse`)())
