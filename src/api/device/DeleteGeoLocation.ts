import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * 
 * This operation deletes the given geo location entries.
 * 
 */
export const DeleteGeoLocation =
  () =>
    createStandardRequestBodyFromString('<tds:DeleteGeoLocation />')
      .map(mapResponseXmlToJson<any>('tds:DeleteGeoLocationResponse')())
