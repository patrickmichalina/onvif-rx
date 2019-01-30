[onvif-rx](../README.md) > ["soap/request"](../modules/_soap_request_.md)

# External module: "soap/request"

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

* [createDeviceRequestBodyFromString](_soap_request_.md#createdevicerequestbodyfromstring)
* [createMediaRequestBodyFromString](_soap_request_.md#createmediarequestbodyfromstring)
* [createSimpleRequestBodyFromString](_soap_request_.md#createsimplerequestbodyfromstring)
* [createStandardRequestBody](_soap_request_.md#createstandardrequestbody)
* [createStandardRequestBodyFromString](_soap_request_.md#createstandardrequestbodyfromstring)
* [generateRequestElements](_soap_request_.md#generaterequestelements)
* [mapResponseObsToProperty](_soap_request_.md#mapresponseobstoproperty)
* [mapResponseXmlToJson](_soap_request_.md#mapresponsexmltojson)
* [nsstr](_soap_request_.md#nsstr)
* [parseXml](_soap_request_.md#parsexml)
* [soapShell](_soap_request_.md#soapshell)

---

## Type aliases

<a id="ionvifresult"></a>

###  IOnvifResult

**Ƭ IOnvifResult**: *`IResult`<[IXmlContainer](../interfaces/_soap_request_.ixmlcontainer.md), [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>*

*Defined in [soap/request.ts:13](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/soap/request.ts#L13)*

___

## Functions

<a id="createdevicerequestbodyfromstring"></a>

### `<Const>` createDeviceRequestBodyFromString

▸ **createDeviceRequestBodyFromString**(key: *`string`*): `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IXmlContainer](../interfaces/_soap_request_.ixmlcontainer.md), [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

*Defined in [soap/request.ts:159](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/soap/request.ts#L159)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `string` |

**Returns:** `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IXmlContainer](../interfaces/_soap_request_.ixmlcontainer.md), [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

___
<a id="createmediarequestbodyfromstring"></a>

### `<Const>` createMediaRequestBodyFromString

▸ **createMediaRequestBodyFromString**(key: *`string`*): `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IXmlContainer](../interfaces/_soap_request_.ixmlcontainer.md), [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

*Defined in [soap/request.ts:163](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/soap/request.ts#L163)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `string` |

**Returns:** `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IXmlContainer](../interfaces/_soap_request_.ixmlcontainer.md), [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

___
<a id="createsimplerequestbodyfromstring"></a>

### `<Const>` createSimpleRequestBodyFromString

▸ **createSimpleRequestBodyFromString**(key: *`string`*): `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IXmlContainer](../interfaces/_soap_request_.ixmlcontainer.md), [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

*Defined in [soap/request.ts:155](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/soap/request.ts#L155)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `string` |

**Returns:** `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IXmlContainer](../interfaces/_soap_request_.ixmlcontainer.md), [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

___
<a id="createstandardrequestbody"></a>

### `<Const>` createStandardRequestBody

▸ **createStandardRequestBody**(body: *`string`*): `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IXmlContainer](../interfaces/_soap_request_.ixmlcontainer.md), [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

*Defined in [soap/request.ts:126](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/soap/request.ts#L126)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| body | `string` |

**Returns:** `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IXmlContainer](../interfaces/_soap_request_.ixmlcontainer.md), [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

___
<a id="createstandardrequestbodyfromstring"></a>

### `<Const>` createStandardRequestBodyFromString

▸ **createStandardRequestBodyFromString**(body: *`string`*): `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IXmlContainer](../interfaces/_soap_request_.ixmlcontainer.md), [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

*Defined in [soap/request.ts:151](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/soap/request.ts#L151)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| body | `string` |

**Returns:** `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IXmlContainer](../interfaces/_soap_request_.ixmlcontainer.md), [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

___
<a id="generaterequestelements"></a>

### `<Const>` generateRequestElements

▸ **generateRequestElements**(reqNode: *`string`*): `(Anonymous function)`

*Defined in [soap/request.ts:110](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/soap/request.ts#L110)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| reqNode | `string` |

**Returns:** `(Anonymous function)`

___
<a id="mapresponseobstoproperty"></a>

### `<Const>` mapResponseObsToProperty

▸ **mapResponseObsToProperty**<`A`,`B`,`E`>(propSelectFn: *`function`*): `(Anonymous function)`

*Defined in [soap/request.ts:100](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/soap/request.ts#L100)*

**Type parameters:**

#### A 
#### B 
#### E 
**Parameters:**

| Name | Type |
| ------ | ------ |
| propSelectFn | `function` |

**Returns:** `(Anonymous function)`

___
<a id="mapresponsexmltojson"></a>

### `<Const>` mapResponseXmlToJson

▸ **mapResponseXmlToJson**<`T`>(node: *`string`*): `(Anonymous function)`

*Defined in [soap/request.ts:73](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/soap/request.ts#L73)*

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| node | `string` |

**Returns:** `(Anonymous function)`

___
<a id="nsstr"></a>

### `<Const>` nsstr

▸ **nsstr**(): `string`[]

*Defined in [soap/request.ts:56](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/soap/request.ts#L56)*

**Returns:** `string`[]

___
<a id="parsexml"></a>

### `<Const>` parseXml

▸ **parseXml**(parser: *`DOMParser`*): `(Anonymous function)`

*Defined in [soap/request.ts:51](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/soap/request.ts#L51)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| parser | `DOMParser` |

**Returns:** `(Anonymous function)`

___
<a id="soapshell"></a>

### `<Const>` soapShell

▸ **soapShell**(rawBody: *`string`*): `(Anonymous function)`

*Defined in [soap/request.ts:64](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/soap/request.ts#L64)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| rawBody | `string` |

**Returns:** `(Anonymous function)`

___

