import { wsdlHttpRequests, fetchXsd } from './fetch-wsdl'
import { parseOnvifWsdlDocument } from './parse-onvif-wsdl'
import { parseOnvifXsdForTypeInfo, ParsedXsd } from './parse-onvif-xsd'

export const generateActions = () => {
  return wsdlHttpRequests()
    .then(res => {
      return res.map(a => {
        return {
          ...a,
          actions: parseOnvifWsdlDocument(a.parsedXml)
        }
      })
    })
}

export const generateTypes = () => {
  return fetchXsd()
    .then(doc => {
      return doc.map(a => parseOnvifXsdForTypeInfo(a)).reduce((acc, curr) => {
        return {
          complexTypes: [
            ...acc.complexTypes,
            ...curr.complexTypes
          ],
          enumerations: [
            ...acc.enumerations,
            ...curr.enumerations
          ],
          simples: [
            ...acc.simples,
            ...curr.simples
          ]
        }
      }, { complexTypes: [], simples: [], enumerations: [] } as ParsedXsd)
    })
}