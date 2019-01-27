import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * This operation deletes users on a device. The device shall support deletion of device users and their credentials 
 * through the DeleteUsers command. A device may have one or more fixed users
 * that cannot be deleted to ensure access to the unit. Either all users are deleted successfully or a
 * fault message shall be returned and no users be deleted.
 */
export const DeleteUsers =
  () =>
    createStandardRequestBodyFromString('<tds:DeleteUsers />')
      .map(mapResponseXmlToJson<any>('tds:DeleteUsersResponse')())
