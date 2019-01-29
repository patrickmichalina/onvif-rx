[onvif-rx](../README.md) > ["soap/request"](../modules/_soap_request_.md)

# External module: "soap/request"

## Index

### Enumerations

* [SOAP_NODE](../enums/_soap_request_.soap_node.md)
* [XMLNS](../enums/_soap_request_.xmlns.md)

### Interfaces

* [ITransportPayloadXml](../interfaces/_soap_request_.itransportpayloadxml.md)

### Type aliases

* [IOnvifNetworkResponse](_soap_request_.md#ionvifnetworkresponse)
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

<a id="ionvifnetworkresponse"></a>

###  IOnvifNetworkResponse

**Ƭ IOnvifNetworkResponse**: *`Observable`<`IResult`<`T`, [ITransportPayloadXml](../interfaces/_soap_request_.itransportpayloadxml.md)>>*

*Defined in [soap/request.ts:50](https://github.com/patrickmichalina/onvif-rx/blob/d62cee9/src/soap/request.ts#L50)*

___
<a id="ionvifresult"></a>

###  IOnvifResult

**Ƭ IOnvifResult**: *`IResult`<`Document`, [ITransportPayloadXml](../interfaces/_soap_request_.itransportpayloadxml.md)>*

*Defined in [soap/request.ts:107](https://github.com/patrickmichalina/onvif-rx/blob/d62cee9/src/soap/request.ts#L107)*

___

## Functions

<a id="createdevicerequestbodyfromstring"></a>

### `<Const>` createDeviceRequestBodyFromString

▸ **createDeviceRequestBodyFromString**(key: *`string`*): `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<`Document`, [ITransportPayloadXml](../interfaces/_soap_request_.itransportpayloadxml.md)>>>

*Defined in [soap/request.ts:142](https://github.com/patrickmichalina/onvif-rx/blob/d62cee9/src/soap/request.ts#L142)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `string` |

**Returns:** `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<`Document`, [ITransportPayloadXml](../interfaces/_soap_request_.itransportpayloadxml.md)>>>

___
<a id="createmediarequestbodyfromstring"></a>

### `<Const>` createMediaRequestBodyFromString

▸ **createMediaRequestBodyFromString**(key: *`string`*): `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<`Document`, [ITransportPayloadXml](../interfaces/_soap_request_.itransportpayloadxml.md)>>>

*Defined in [soap/request.ts:146](https://github.com/patrickmichalina/onvif-rx/blob/d62cee9/src/soap/request.ts#L146)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `string` |

**Returns:** `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<`Document`, [ITransportPayloadXml](../interfaces/_soap_request_.itransportpayloadxml.md)>>>

___
<a id="createsimplerequestbodyfromstring"></a>

### `<Const>` createSimpleRequestBodyFromString

▸ **createSimpleRequestBodyFromString**(key: *`string`*): `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<`Document`, [ITransportPayloadXml](../interfaces/_soap_request_.itransportpayloadxml.md)>>>

*Defined in [soap/request.ts:138](https://github.com/patrickmichalina/onvif-rx/blob/d62cee9/src/soap/request.ts#L138)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `string` |

**Returns:** `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<`Document`, [ITransportPayloadXml](../interfaces/_soap_request_.itransportpayloadxml.md)>>>

___
<a id="createstandardrequestbody"></a>

### `<Const>` createStandardRequestBody

▸ **createStandardRequestBody**(body: *`string`*): `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<`Document`, [ITransportPayloadXml](../interfaces/_soap_request_.itransportpayloadxml.md)>>>

*Defined in [soap/request.ts:109](https://github.com/patrickmichalina/onvif-rx/blob/d62cee9/src/soap/request.ts#L109)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| body | `string` |

**Returns:** `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<`Document`, [ITransportPayloadXml](../interfaces/_soap_request_.itransportpayloadxml.md)>>>

___
<a id="createstandardrequestbodyfromstring"></a>

### `<Const>` createStandardRequestBodyFromString

▸ **createStandardRequestBodyFromString**(body: *`string`*): `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<`Document`, [ITransportPayloadXml](../interfaces/_soap_request_.itransportpayloadxml.md)>>>

*Defined in [soap/request.ts:134](https://github.com/patrickmichalina/onvif-rx/blob/d62cee9/src/soap/request.ts#L134)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| body | `string` |

**Returns:** `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<`Document`, [ITransportPayloadXml](../interfaces/_soap_request_.itransportpayloadxml.md)>>>

___
<a id="generaterequestelements"></a>

### `<Const>` generateRequestElements

▸ **generateRequestElements**(reqNode: *`string`*): `(Anonymous function)`

*Defined in [soap/request.ts:151](https://github.com/patrickmichalina/onvif-rx/blob/d62cee9/src/soap/request.ts#L151)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| reqNode | `string` |

**Returns:** `(Anonymous function)`

___
<a id="mapresponseobstoproperty"></a>

### `<Const>` mapResponseObsToProperty

▸ **mapResponseObsToProperty**<`A`,`B`,`E`>(propSelectFn: *`function`*): `(Anonymous function)`

*Defined in [soap/request.ts:102](https://github.com/patrickmichalina/onvif-rx/blob/d62cee9/src/soap/request.ts#L102)*

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

*Defined in [soap/request.ts:79](https://github.com/patrickmichalina/onvif-rx/blob/d62cee9/src/soap/request.ts#L79)*

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

*Defined in [soap/request.ts:68](https://github.com/patrickmichalina/onvif-rx/blob/d62cee9/src/soap/request.ts#L68)*

**Returns:** `string`[]

___
<a id="parsexml"></a>

### `<Const>` parseXml

▸ **parseXml**(parser: *`DOMParser`*): `(Anonymous function)`

*Defined in [soap/request.ts:52](https://github.com/patrickmichalina/onvif-rx/blob/d62cee9/src/soap/request.ts#L52)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| parser | `DOMParser` |

**Returns:** `(Anonymous function)`

___
<a id="soapshell"></a>

### `<Const>` soapShell

▸ **soapShell**(rawBody: *`string`*): `(Anonymous function)`

*Defined in [soap/request.ts:70](https://github.com/patrickmichalina/onvif-rx/blob/d62cee9/src/soap/request.ts#L70)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| rawBody | `string` |

**Returns:** `(Anonymous function)`

___

