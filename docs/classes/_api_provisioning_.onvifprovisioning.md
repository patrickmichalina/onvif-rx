[onvif-rx](../README.md) > ["api/provisioning"](../modules/_api_provisioning_.md) > [ONVIFProvisioning](../classes/_api_provisioning_.onvifprovisioning.md)

# Class: ONVIFProvisioning

## Hierarchy

**ONVIFProvisioning**

## Index

### Constructors

* [constructor](_api_provisioning_.onvifprovisioning.md#constructor)

### Properties

* [config](_api_provisioning_.onvifprovisioning.md#config)

### Methods

* [FocusMove](_api_provisioning_.onvifprovisioning.md#focusmove)
* [GetServiceCapabilities](_api_provisioning_.onvifprovisioning.md#getservicecapabilities)
* [GetUsage](_api_provisioning_.onvifprovisioning.md#getusage)
* [PanMove](_api_provisioning_.onvifprovisioning.md#panmove)
* [RollMove](_api_provisioning_.onvifprovisioning.md#rollmove)
* [Stop](_api_provisioning_.onvifprovisioning.md#stop)
* [TiltMove](_api_provisioning_.onvifprovisioning.md#tiltmove)
* [ZoomMove](_api_provisioning_.onvifprovisioning.md#zoommove)
* [FocusMove](_api_provisioning_.onvifprovisioning.md#focusmove-1)
* [GetServiceCapabilities](_api_provisioning_.onvifprovisioning.md#getservicecapabilities-1)
* [GetUsage](_api_provisioning_.onvifprovisioning.md#getusage-1)
* [PanMove](_api_provisioning_.onvifprovisioning.md#panmove-1)
* [RollMove](_api_provisioning_.onvifprovisioning.md#rollmove-1)
* [Stop](_api_provisioning_.onvifprovisioning.md#stop-1)
* [TiltMove](_api_provisioning_.onvifprovisioning.md#tiltmove-1)
* [ZoomMove](_api_provisioning_.onvifprovisioning.md#zoommove-1)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new ONVIFProvisioning**(config: *[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md)*): [ONVIFProvisioning](_api_provisioning_.onvifprovisioning.md)

*Defined in [api/provisioning.ts:5](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/api/provisioning.ts#L5)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| config | [IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md) |

**Returns:** [ONVIFProvisioning](_api_provisioning_.onvifprovisioning.md)

___

## Properties

<a id="config"></a>

### `<Private>` config

**● config**: *[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md)*

*Defined in [api/provisioning.ts:6](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/api/provisioning.ts#L6)*

___

## Methods

<a id="focusmove"></a>

###  FocusMove

▸ **FocusMove**(): `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>

*Defined in [api/provisioning.ts:119](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/api/provisioning.ts#L119)*

Moves device on the focus axis.

**Returns:** `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>

___
<a id="getservicecapabilities"></a>

###  GetServiceCapabilities

▸ **GetServiceCapabilities**(): `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>

*Defined in [api/provisioning.ts:84](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/api/provisioning.ts#L84)*

Returns the capabilities of the provisioning service.

**Returns:** `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>

___
<a id="getusage"></a>

###  GetUsage

▸ **GetUsage**(): `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>

*Defined in [api/provisioning.ts:133](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/api/provisioning.ts#L133)*

Returns the lifetime move counts.

**Returns:** `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>

___
<a id="panmove"></a>

###  PanMove

▸ **PanMove**(): `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>

*Defined in [api/provisioning.ts:91](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/api/provisioning.ts#L91)*

Moves device on the pan axis.

**Returns:** `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>

___
<a id="rollmove"></a>

###  RollMove

▸ **RollMove**(): `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>

*Defined in [api/provisioning.ts:112](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/api/provisioning.ts#L112)*

Moves device on the roll axis.

**Returns:** `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>

___
<a id="stop"></a>

###  Stop

▸ **Stop**(): `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>

*Defined in [api/provisioning.ts:126](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/api/provisioning.ts#L126)*

Stops device motion on all axes.

**Returns:** `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>

___
<a id="tiltmove"></a>

###  TiltMove

▸ **TiltMove**(): `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>

*Defined in [api/provisioning.ts:98](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/api/provisioning.ts#L98)*

Moves device on the tilt axis.

**Returns:** `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>

___
<a id="zoommove"></a>

###  ZoomMove

▸ **ZoomMove**(): `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>

*Defined in [api/provisioning.ts:105](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/api/provisioning.ts#L105)*

Moves device on the zoom axis.

**Returns:** `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>

___
<a id="focusmove-1"></a>

### `<Static>` FocusMove

▸ **FocusMove**(): `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

*Defined in [api/provisioning.ts:57](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/api/provisioning.ts#L57)*

Moves device on the focus axis.

**Returns:** `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

___
<a id="getservicecapabilities-1"></a>

### `<Static>` GetServiceCapabilities

▸ **GetServiceCapabilities**(): `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

*Defined in [api/provisioning.ts:12](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/api/provisioning.ts#L12)*

Returns the capabilities of the provisioning service.

**Returns:** `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

___
<a id="getusage-1"></a>

### `<Static>` GetUsage

▸ **GetUsage**(): `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

*Defined in [api/provisioning.ts:75](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/api/provisioning.ts#L75)*

Returns the lifetime move counts.

**Returns:** `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

___
<a id="panmove-1"></a>

### `<Static>` PanMove

▸ **PanMove**(): `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

*Defined in [api/provisioning.ts:21](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/api/provisioning.ts#L21)*

Moves device on the pan axis.

**Returns:** `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

___
<a id="rollmove-1"></a>

### `<Static>` RollMove

▸ **RollMove**(): `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

*Defined in [api/provisioning.ts:48](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/api/provisioning.ts#L48)*

Moves device on the roll axis.

**Returns:** `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

___
<a id="stop-1"></a>

### `<Static>` Stop

▸ **Stop**(): `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

*Defined in [api/provisioning.ts:66](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/api/provisioning.ts#L66)*

Stops device motion on all axes.

**Returns:** `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

___
<a id="tiltmove-1"></a>

### `<Static>` TiltMove

▸ **TiltMove**(): `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

*Defined in [api/provisioning.ts:30](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/api/provisioning.ts#L30)*

Moves device on the tilt axis.

**Returns:** `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

___
<a id="zoommove-1"></a>

### `<Static>` ZoomMove

▸ **ZoomMove**(): `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

*Defined in [api/provisioning.ts:39](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/api/provisioning.ts#L39)*

Moves device on the zoom axis.

**Returns:** `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

___

