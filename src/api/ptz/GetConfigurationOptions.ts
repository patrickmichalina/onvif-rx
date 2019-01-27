import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * 
 * List supported coordinate systems including their range limitations. Therefore, the options
 * MAY differ depending on whether the PTZ Configuration is assigned to a Profile containing a
 * Video Source Configuration. In that case, the options may additionally contain coordinate
 * systems referring to the image coordinate system described by the Video Source
 * Configuration. If the PTZ Node supports continuous movements, it shall return a Timeout Range within
 * which Timeouts are accepted by the PTZ Node.
 * 
 */
export const GetConfigurationOptions =
  () =>
    createStandardRequestBodyFromString('<tptz:GetConfigurationOptions />')
      .map(mapResponseXmlToJson<any>('tptz:GetConfigurationOptionsResponse')())
