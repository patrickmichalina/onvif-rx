import { maybe, IMaybe } from 'typescript-monads'
import { typeConvert } from './parse-onvif-xsd'

export interface IParameterMeta {
  readonly name: string
  readonly propertyType: string
  readonly propertyMinOccurs: string
  readonly propertyMaxOccurs: string
  readonly documentation: string
}

export interface ITypeReference {
  readonly ns: IMaybe<string>
  readonly ref: string
  readonly type: string
  readonly parameters: ReadonlyArray<IParameterMeta>
}

export interface IOperationParseResult {
  readonly actionName: string
  readonly documentation: string
  readonly soapRequestNode: string
  readonly input: ITypeReference
  readonly output: ITypeReference
}

/**
 * scans ONVIF XML in order to construct an object to describe how to construct the API in typescript.
 */
export const parseOnvifWsdlDocument = (xmlDoc: Document) => {
  const wsdlNs = xmlDoc.documentElement.lookupNamespaceURI('wsdl') || ''
  const xmlSchemaNs = xmlDoc.documentElement.lookupNamespaceURI('xs') || ''

  const actionElements = Array.from(xmlDoc.getElementsByTagNameNS(wsdlNs, 'portType'))
    .reduce((acc, portTypeElement) => [...acc, ...Array.from(portTypeElement.getElementsByTagNameNS(wsdlNs, 'operation'))
      .map(actionElement => {
        const messageNodes = Array.from(xmlDoc.getElementsByTagNameNS(wsdlNs, 'message'))
        const xsElementNodes = Array.from(xmlDoc.getElementsByTagNameNS(xmlSchemaNs, 'element'))

        const getXsElementByName = (elementName: string) => maybe(xsElementNodes.find(a => a.getAttribute('name') === elementName))
        const getFirstNode = (name: string) => maybe(actionElement.getElementsByTagNameNS(wsdlNs, name).item(0))
        const mapReqResType = (name: string) => maybe(messageNodes.find(a => a.getAttribute('name') === name))
          .flatMapAuto(a => a.getElementsByTagNameNS(wsdlNs, 'part').item(0))
          .flatMapAuto(a => a.getAttribute('element'))
          .flatMapAuto(a => a.split(':').pop())

        const typeRef = (name: string) => getFirstNode(name).flatMapAuto(a => a.getAttribute('message'))
          .map<ITypeReference>(ref => {
            const split = ref.split(':')
            return {
              ref,
              type: split[1] || '',
              parameters: getTypeParams(mapReqResType(split[1]).valueOr('')),
              ns: maybe(actionElement.lookupNamespaceURI(split[0]))
            }
          })

        const getTypeParams = (typeName: string) =>
          getXsElementByName(typeName)
            .map<ReadonlyArray<IParameterMeta>>(typeElement => {
              return Array.from(typeElement.getElementsByTagNameNS(xmlSchemaNs, 'element'))
                .map(paramNode => {
                  const name = paramNode.getAttribute('name') as string
                  const propertyType = maybe(paramNode.getAttribute('type')).flatMapAuto(a => a.split(':').pop()).map(typeConvert).valueOr('')
                  const propertyMinOccurs = paramNode.getAttribute('minOccurs') || '1' as string
                  const propertyMaxOccurs = paramNode.getAttribute('maxOccurs') as string
                  const documentation = maybe(paramNode.getElementsByTagNameNS(xmlSchemaNs, 'documentation').item(0)).map(a => a.textContent).valueOr('') as string

                  return {
                    name,
                    propertyType,
                    propertyMinOccurs,
                    propertyMaxOccurs,
                    documentation
                  }
                }).sort((a, b) => parseInt(b.propertyMinOccurs) - parseInt(a.propertyMinOccurs))
            }).valueOr([])

        const input = typeRef('input')
        const output = typeRef('output')
        const actionName = maybe(actionElement.getAttribute('name')).valueOr('')
        const documentation = getFirstNode('documentation').flatMapAuto(a => a.textContent).map(a => a.replace(/\r?\n|\r/g, '\n * ').replace(/\t/g, '')).valueOr('')

        const soapRequestNode = maybe(messageNodes.find(a => a.getAttribute('name') === input.map(i => i.type).valueOrUndefined()))
          .flatMapAuto(a => a.getElementsByTagNameNS(wsdlNs, 'part').item(0))
          .flatMapAuto(a => a.getAttribute('element'))
          .valueOr('')

        return {
          actionName,
          documentation,
          input: input.valueOr({} as any),
          output: output.valueOr({} as any),
          soapRequestNode
        }
      })], [] as ReadonlyArray<IOperationParseResult>)

  return actionElements
}
