import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * This operation restores the system backup configuration files(s) previously retrieved from a
 * device. The device should support restore of backup configuration file(s) through the
 * RestoreSystem command. The exact format of the backup configuration file(s) is outside the
 * scope of this standard. If the command is supported, it shall accept backup files returned by
 * the GetSystemBackup command.
 */
export const RestoreSystem =
  () =>
    createStandardRequestBodyFromString('<tds:RestoreSystem />')
      .map(mapResponseXmlToJson<any>('tds:RestoreSystemResponse')())
