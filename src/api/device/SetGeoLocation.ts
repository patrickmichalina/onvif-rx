import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * 
 * This operation allows to modify one or more geo configuration entries.
 * 
 */
export const SetGeoLocation =
  () =>
    createStandardRequestBodyFromString('<tds:SetGeoLocation />')
      .map(mapResponseXmlToJson<any>('tds:SetGeoLocationResponse')())
