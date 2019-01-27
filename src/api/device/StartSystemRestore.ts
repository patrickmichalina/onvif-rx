import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * This operation initiates a system restore from backed up configuration data using the HTTP
 * POST mechanism. The response to the command includes an HTTP URL to which the backup
 * file may be uploaded. The actual restore takes place as soon as the HTTP POST operation
 * has completed. Devices should support system restore through the StartSystemRestore
 * command. The exact format of the backup configuration data is outside the scope of this
 * specification.
 * System restore over HTTP may be achieved using the following steps:
 * Client calls StartSystemRestore.
 * Server responds with upload URI.
 * Client transmits the configuration data to the upload URI using HTTP POST.
 * Server applies the uploaded configuration, then reboots if necessary.
 * 
 * If the system restore fails because the uploaded file was invalid, the HTTP POST response
 * shall be “415 Unsupported Media Type”. If the system restore fails due to an error at the
 * device, the HTTP POST response shall be “500 Internal Server Error”.
 * The value of the Content-Type header in the HTTP POST request shall be “application/octetstream”.
 */
export const StartSystemRestore =
  () =>
    createStandardRequestBodyFromString('<tds:StartSystemRestore />')
      .map(mapResponseXmlToJson<any>('tds:StartSystemRestoreResponse')())
