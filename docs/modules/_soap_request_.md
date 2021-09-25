[onvif-rx](../README.md) › ["soap/request"](_soap_request_.md)

# Module: "soap/request"

## Index

### Enumerations

* [SOAP_NODE](../enums/_soap_request_.soap_node.md)
* [XMLNS](../enums/_soap_request_.xmlns.md)

### Interfaces

* [IResultStructure](../interfaces/_soap_request_.iresultstructure.md)
* [IXmlContainer](../interfaces/_soap_request_.ixmlcontainer.md)

### Type aliases

* [IOnvifResult](_soap_request_.md#ionvifresult)

### Functions

* [createDeviceRequestBodyFromString](_soap_request_.md#const-createdevicerequestbodyfromstring)
* [createMediaRequestBodyFromString](_soap_request_.md#const-createmediarequestbodyfromstring)
* [createSimpleRequestBodyFromString](_soap_request_.md#const-createsimplerequestbodyfromstring)
* [createStandardRequestBody](_soap_request_.md#const-createstandardrequestbody)
* [createStandardRequestBodyFromString](_soap_request_.md#const-createstandardrequestbodyfromstring)
* [generateRequestElements](_soap_request_.md#const-generaterequestelements)
* [mapResponseObsToProperty](_soap_request_.md#const-mapresponseobstoproperty)
* [mapResponseXmlToJson](_soap_request_.md#const-mapresponsexmltojson)
* [nsstr](_soap_request_.md#const-nsstr)
* [parseXml](_soap_request_.md#const-parsexml)
* [soapShell](_soap_request_.md#const-soapshell)
* [stringIsBool](_soap_request_.md#const-stringisbool)
* [stringToBool](_soap_request_.md#const-stringtobool)
* [typeConversion](_soap_request_.md#const-typeconversion)

## Type aliases

###  IOnvifResult

Ƭ **IOnvifResult**: *IResult‹[IXmlContainer](../interfaces/_soap_request_.ixmlcontainer.md), [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›*

*Defined in [soap/request.ts:13](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/soap/request.ts#L13)*

## Functions

### `Const` createDeviceRequestBodyFromString

▸ **createDeviceRequestBodyFromString**(`key`: string): *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IXmlContainer](../interfaces/_soap_request_.ixmlcontainer.md), [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

*Defined in [soap/request.ts:165](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/soap/request.ts#L165)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IXmlContainer](../interfaces/_soap_request_.ixmlcontainer.md), [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

___

### `Const` createMediaRequestBodyFromString

▸ **createMediaRequestBodyFromString**(`key`: string): *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IXmlContainer](../interfaces/_soap_request_.ixmlcontainer.md), [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

*Defined in [soap/request.ts:169](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/soap/request.ts#L169)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IXmlContainer](../interfaces/_soap_request_.ixmlcontainer.md), [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

___

### `Const` createSimpleRequestBodyFromString

▸ **createSimpleRequestBodyFromString**(`key`: string): *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IXmlContainer](../interfaces/_soap_request_.ixmlcontainer.md), [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

*Defined in [soap/request.ts:161](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/soap/request.ts#L161)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IXmlContainer](../interfaces/_soap_request_.ixmlcontainer.md), [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

___

### `Const` createStandardRequestBody

▸ **createStandardRequestBody**(`body`: string): *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IXmlContainer](../interfaces/_soap_request_.ixmlcontainer.md), [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

*Defined in [soap/request.ts:131](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/soap/request.ts#L131)*

**Parameters:**

Name | Type |
------ | ------ |
`body` | string |

**Returns:** *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IXmlContainer](../interfaces/_soap_request_.ixmlcontainer.md), [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

___

### `Const` createStandardRequestBodyFromString

▸ **createStandardRequestBodyFromString**(`body`: string): *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IXmlContainer](../interfaces/_soap_request_.ixmlcontainer.md), [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

*Defined in [soap/request.ts:157](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/soap/request.ts#L157)*

**Parameters:**

Name | Type |
------ | ------ |
`body` | string |

**Returns:** *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IXmlContainer](../interfaces/_soap_request_.ixmlcontainer.md), [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

___

### `Const` generateRequestElements

▸ **generateRequestElements**(`reqNode`: string): *(Anonymous function)*

*Defined in [soap/request.ts:120](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/soap/request.ts#L120)*

**Parameters:**

Name | Type |
------ | ------ |
`reqNode` | string |

**Returns:** *(Anonymous function)*

___

### `Const` mapResponseObsToProperty

▸ **mapResponseObsToProperty**<**A**, **B**, **E**>(`propSelectFn`: function): *(Anonymous function)*

*Defined in [soap/request.ts:110](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/soap/request.ts#L110)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **E**

**Parameters:**

▪ **propSelectFn**: *function*

▸ (`sel`: A): *B*

**Parameters:**

Name | Type |
------ | ------ |
`sel` | A |

**Returns:** *(Anonymous function)*

___

### `Const` mapResponseXmlToJson

▸ **mapResponseXmlToJson**<**T**>(`node`: string): *(Anonymous function)*

*Defined in [soap/request.ts:77](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/soap/request.ts#L77)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`node` | string |

**Returns:** *(Anonymous function)*

___

### `Const` nsstr

▸ **nsstr**(): *any[]*

*Defined in [soap/request.ts:56](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/soap/request.ts#L56)*

**Returns:** *any[]*

___

### `Const` parseXml

▸ **parseXml**(`parser`: DOMParser): *(Anonymous function)*

*Defined in [soap/request.ts:51](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/soap/request.ts#L51)*

**Parameters:**

Name | Type |
------ | ------ |
`parser` | DOMParser |

**Returns:** *(Anonymous function)*

___

### `Const` soapShell

▸ **soapShell**(`rawBody`: string): *(Anonymous function)*

*Defined in [soap/request.ts:64](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/soap/request.ts#L64)*

**Parameters:**

Name | Type |
------ | ------ |
`rawBody` | string |

**Returns:** *(Anonymous function)*

___

### `Const` stringIsBool

▸ **stringIsBool**(`str`: string): *boolean*

*Defined in [soap/request.ts:73](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/soap/request.ts#L73)*

**Parameters:**

Name | Type |
------ | ------ |
`str` | string |

**Returns:** *boolean*

___

### `Const` stringToBool

▸ **stringToBool**(`str`: string): *boolean*

*Defined in [soap/request.ts:74](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/soap/request.ts#L74)*

**Parameters:**

Name | Type |
------ | ------ |
`str` | string |

**Returns:** *boolean*

___

### `Const` typeConversion

▸ **typeConversion**(`str`: string): *string | false | true*

*Defined in [soap/request.ts:75](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/soap/request.ts#L75)*

**Parameters:**

Name | Type |
------ | ------ |
`str` | string |

**Returns:** *string | false | true*
