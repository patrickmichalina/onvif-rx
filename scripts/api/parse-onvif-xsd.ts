import { maybe } from 'typescript-monads'

export const typeConvert = (val: string) => {
  switch (val) {
    case 'int': return 'number'
    case 'float': return 'number'
    case 'integer': return 'number'
    case 'token': return 'string'
    case 'hexBinary': return 'string'
    case 'anyURI': return 'string'
    case 'base64Binary': return 'string'
    case 'duration': return 'string'
    case 'IANA-IfTypes': return 'any'
    case 'dateTime': return 'string'
    case 'FilterType': return 'any'
    case 'QName': return 'any'
    case 'NotificationMessageHolderType': return 'any'
    case 'StorageConfigurationData': return 'any'
    case 'StorageConfiguration': return 'any'
    default: return val
  }
}

export interface ParsedXsd {
  readonly enumerations: ReadonlyArray<any>,
  readonly simples: ReadonlyArray<any>
  readonly complexTypes: ReadonlyArray<any>
}

/**
 * https://www.onvif.org/ver10/schema/onvif.xsd
 */
export const parseOnvifXsdForTypeInfo = (xmlDoc: Document): ParsedXsd => {
  const NS = xmlDoc.documentElement.lookupNamespaceURI('xs') || ''
  const sts = Array.from(xmlDoc.getElementsByTagNameNS(NS, 'simpleType'))

  const enumTypes = sts.filter(s => Array.from(s.getElementsByTagNameNS(NS, 'enumeration')).length)
  const simpleTypes = sts.filter(s => Array.from(s.getElementsByTagNameNS(NS, 'enumeration')).length === 0)

  const enumerations = enumTypes
    .map(simpleType => {
      const name = maybe(simpleType.getAttribute('name')).valueOr('')
      const documentation = maybe(simpleType.getElementsByTagNameNS(NS, 'documentation').item(0)).flatMapAuto(a => a.textContent).valueOr('')

      const values = Array.from(simpleType.getElementsByTagNameNS(NS, 'enumeration'))
        .map(_enum => {
          const value = maybe(_enum.getAttribute('value')).flatMapAuto(a => a.split(':').pop()).valueOr('')
          const documentation = maybe(_enum.getElementsByTagNameNS(NS, 'documentation').item(0)).flatMapAuto(a => a.textContent).valueOr('')

          return {
            value,
            documentation
          }
        })

      return {
        name,
        documentation,
        values,
      }
    })

  const simples = simpleTypes
    .filter(st => !!maybe(st.getAttribute('name')).valueOrUndefined())
    .map(simpleType => {
      const name = maybe(simpleType.getAttribute('name')).valueOr('')
      const documentation = maybe(simpleType.getElementsByTagNameNS(NS, 'documentation').item(0)).flatMapAuto(a => a.textContent).valueOr('')

      const list = maybe(simpleType.getElementsByTagNameNS(NS, 'list').item(0))
        .flatMapAuto(a => a.getAttribute('itemType'))
        .flatMapAuto(a => a.split(':').pop())
        .map(typeConvert)
        .map(a => `ReadonlyArray<${a}>`).valueOrUndefined()


      const simple = maybe(simpleType.getElementsByTagNameNS(NS, 'restriction').item(0))
        .flatMapAuto(a => a.getAttribute('base'))
        .flatMapAuto(a => a.split(':').pop())
        .map(typeConvert)
        .valueOr('')

      return {
        name,
        documentation,
        value: list || simple
      }
    })

  const complexTypes = Array.from(xmlDoc.getElementsByTagNameNS(NS, 'complexType'))
    .filter(complexType => complexType.getAttribute('name'))
    .map(complexType => {
      const documentation = maybe(complexType.getElementsByTagNameNS(NS, 'documentation').item(0)).flatMapAuto(a => a.textContent).valueOr('')
      const properties = Array.from(complexType.getElementsByTagNameNS(NS, 'element'))
        .filter(elm => elm.getAttribute('name'))
        .map(elm => {
          const name = elm.getAttribute('name')
          const type = maybe(elm.getAttribute('type')).flatMapAuto(a => a.split(':').pop())
            .map(typeConvert)
            .valueOr('')
          const minOccurs = maybe(elm.getAttribute('minOccurs')).map(a => parseInt(a) === 0).valueOr(false)
          return {
            name,
            type,
            minOccurs
          }
        })

      return {
        type: complexType.getAttribute('name'),
        properties,
        documentation
      }
    })

  return {
    enumerations,
    simples,
    complexTypes
  }
}