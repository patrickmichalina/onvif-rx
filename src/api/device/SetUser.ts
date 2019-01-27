import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * This operation updates the settings for one or several users on a device for authentication purposes.
 * The device shall support update of device users and their credentials through the SetUser command. 
 * Either all change requests are processed successfully or a fault message shall be returned and no change requests be processed.
 */
export const SetUser =
  () =>
    createStandardRequestBodyFromString('<tds:SetUser />')
      .map(mapResponseXmlToJson<any>('tds:SetUserResponse')())
