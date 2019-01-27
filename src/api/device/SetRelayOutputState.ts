import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * This operation sets the state of a relay output.
 * This method has been depricated with version 2.0. Refer to the DeviceIO service.
 */
export const SetRelayOutputState =
  () =>
    createStandardRequestBodyFromString('<tds:SetRelayOutputState />')
      .map(mapResponseXmlToJson<any>('tds:SetRelayOutputStateResponse')())
