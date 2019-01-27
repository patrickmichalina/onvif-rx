import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * This operation sets the device system date and time. The device shall support the
 * configuration of the daylight saving setting and of the manual system date and time (if
 * applicable) or indication of NTP time (if applicable) through the SetSystemDateAndTime
 * command. 
 * If system time and date are set manually, the client shall include UTCDateTime in the request.
 * A TimeZone token which is not formed according to the rules of IEEE 1003.1 section 8.3 is considered as invalid timezone.
 * The DayLightSavings flag should be set to true to activate any DST settings of the TimeZone string. 
 * Clear the DayLightSavings flag if the DST portion of the TimeZone settings should be ignored.
 * 
 */
export const SetSystemDateAndTime =
  () =>
    createStandardRequestBodyFromString('<tds:SetSystemDateAndTime />')
      .map(mapResponseXmlToJson<any>('tds:SetSystemDateAndTimeResponse')())
