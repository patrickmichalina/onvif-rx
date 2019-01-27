import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * 
 * This operation lists all existing geo location configurations for the device. 
 * 
 */
export const GetGeoLocation =
  () =>
    createStandardRequestBodyFromString('<tds:GetGeoLocation />')
      .map(mapResponseXmlToJson<any>('tds:GetGeoLocationResponse')())
