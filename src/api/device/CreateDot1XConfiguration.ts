import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * This operation newly creates IEEE 802.1X configuration parameter set of the device. The
 * device shall support this command if it supports IEEE 802.1X. If the device receives this
 * request with already existing configuration token (Dot1XConfigurationToken) specification, the
 * device should respond with 'ter:ReferenceToken ' error to indicate there is some configuration
 * conflict.
 */
export const CreateDot1XConfiguration =
  () =>
    createStandardRequestBodyFromString('<tds:CreateDot1XConfiguration />')
      .map(mapResponseXmlToJson<any>('tds:CreateDot1XConfigurationResponse')())
