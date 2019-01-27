import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * 
 * Get the descriptions of the available PTZ Nodes.
 * 
 * A PTZ-capable device may have multiple PTZ Nodes. The PTZ Nodes may represent
 * mechanical PTZ drivers, uploaded PTZ drivers or digital PTZ drivers. PTZ Nodes are the
 * lowest level entities in the PTZ control API and reflect the supported PTZ capabilities. The
 * PTZ Node is referenced either by its name or by its reference token. 
 *       
 */
export const GetNodes =
  () =>
    createStandardRequestBodyFromString('<tptz:GetNodes />')
      .map(mapResponseXmlToJson<any>('tptz:GetNodesResponse')())
