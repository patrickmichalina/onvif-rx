import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * SetVideoSourceMode changes the media profile structure relating to video source for the specified video source mode. A device that indicates a capability of VideoSourceModes shall support this command. The behavior after changing the mode is not defined in this specification.
 */
export const SetVideoSourceMode =
  () =>
    createStandardRequestBodyFromString('<trt:SetVideoSourceMode />')
      .map(mapResponseXmlToJson<any>('trt:SetVideoSourceModeResponse')())
