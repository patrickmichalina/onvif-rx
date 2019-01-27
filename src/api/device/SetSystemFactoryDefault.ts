import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * This operation reloads the parameters on the device to their factory default values.
 */
export const SetSystemFactoryDefault =
  () =>
    createStandardRequestBodyFromString('<tds:SetSystemFactoryDefault />')
      .map(mapResponseXmlToJson<any>('tds:SetSystemFactoryDefaultResponse')())
