import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * This operation upgrades a device firmware version. After a successful upgrade the response
 * message is sent before the device reboots. The device should support firmware upgrade
 * through the UpgradeSystemFirmware command. The exact format of the firmware data is
 * outside the scope of this standard.
 */
export const UpgradeSystemFirmware =
  () =>
    createStandardRequestBodyFromString('<tds:UpgradeSystemFirmware />')
      .map(mapResponseXmlToJson<any>('tds:UpgradeSystemFirmwareResponse')())
