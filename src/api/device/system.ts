import { createDeviceRequestBodyFromString, mapResponseXmlToJson } from '../request'

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

/**
 * This operation reboots the device.
 */
export const systemReboot = () =>
  createDeviceRequestBodyFromString(`SystemReboot`)
    .map(mapResponseXmlToJson<ISystemRebootResponse>(`tds:SystemRebootResponse`)())

const dtkey = 'SystemDateAndTime'

/**
 * This operation gets the device system date and time. 
 * The device shall support the return of the daylight saving setting and of 
 * the manual system date and time (if applicable) or indication of NTP time (if applicable) 
 * through the GetSystemDateAndTime command.
 */
export const getDeviceSystemDateAndTime = () =>
  createDeviceRequestBodyFromString(`Get${dtkey}`)
    .map(mapResponseXmlToJson<SystemDateTime>(`tds:${dtkey}`)())

/**
 * This operation gets a system log from the device. The exact format of the system logs is outside the scope of this standard.
 */
export const getSystemLog = () =>
  createDeviceRequestBodyFromString(`GetSystemLog`)
    .map(mapResponseXmlToJson<ISystemLog>(`tds:GetSystemLogResponse`)())

/**
 * This operation gets a system log from the device. The exact format of the system logs is outside the scope of this standard.
 */
export const getSystemSupportInformation = () =>
  createDeviceRequestBodyFromString(`GetSystemSupportInformation`)
    .map(mapResponseXmlToJson<ISupportInformation>(`tds:GetSystemSupportInformationResponse`)())

/**
 * This operation is retrieves system backup configuration file(s) from a device. 
 * The device should support return of back up configuration file(s) through the GetSystemBackup command. 
 * The backup is returned with reference to a name and mime-type together with binary data. 
 * The exact format of the backup configuration files is outside the scope of this standard.
 */
export const getSystemBackup = () =>
  createDeviceRequestBodyFromString(`GetSystemBackup`)
    .map(mapResponseXmlToJson<any>(`tds:GetSystemBackupResponse`)())

/**
 * This operation is used to retrieve URIs from which system information may be downloaded using HTTP. URIs may be returned for the following system information:
 * System Logs. Multiple system logs may be returned, of different types. The exact format of the system logs is outside the scope of this specification.
 * Support Information. This consists of arbitrary device diagnostics information from a device. The exact format of the diagnostic information is outside the scope of this specification.
 * System Backup. The received file is a backup file that can be used to restore the current device configuration at a later date. The exact format of the backup configuration file is outside the scope of this specification.
 * If the device allows retrieval of system logs, support information or system backup data, it should make them available via HTTP GET. If it does, it shall support the GetSystemUris command.
 */
export const getSystemUris = () =>
  createDeviceRequestBodyFromString(`GetSystemUris`)
    .map(mapResponseXmlToJson<any>(`tds:GetSystemUrisResponse`)())

/**
 * It is possible for an endpoint to request a URL that can be used to retrieve the complete 
 * schema and WSDL definitions of a device. The command gives in return a URL entry point where all 
 * the necessary product specific WSDL and schema definitions can be retrieved. The device shall 
 * provide a URL for WSDL and schema download through the GetWsdlUrl command.
 */
export const getWsdlUrl = () =>
  createDeviceRequestBodyFromString(`GetWsdlUrl`)
    .map(mapResponseXmlToJson<WdslResponse>(`tds:GetWsdlUrlResponse`)())
