import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * This operation gets a list of all available relay outputs and their settings.
 * This method has been depricated with version 2.0. Refer to the DeviceIO service.
 */
export const GetRelayOutputs =
  () =>
    createStandardRequestBodyFromString('<tds:GetRelayOutputs />')
      .map(mapResponseXmlToJson<any>('tds:GetRelayOutputsResponse')())
