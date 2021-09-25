[onvif-rx](../README.md) › ["api/provisioning"](../modules/_api_provisioning_.md) › [ONVIFProvisioning](_api_provisioning_.onvifprovisioning.md)

# Class: ONVIFProvisioning

## Hierarchy

* **ONVIFProvisioning**

## Index

### Constructors

* [constructor](_api_provisioning_.onvifprovisioning.md#constructor)

### Properties

* [config](_api_provisioning_.onvifprovisioning.md#private-config)

### Methods

* [FocusMove](_api_provisioning_.onvifprovisioning.md#focusmove)
* [GetServiceCapabilities](_api_provisioning_.onvifprovisioning.md#getservicecapabilities)
* [GetUsage](_api_provisioning_.onvifprovisioning.md#getusage)
* [PanMove](_api_provisioning_.onvifprovisioning.md#panmove)
* [RollMove](_api_provisioning_.onvifprovisioning.md#rollmove)
* [Stop](_api_provisioning_.onvifprovisioning.md#stop)
* [TiltMove](_api_provisioning_.onvifprovisioning.md#tiltmove)
* [ZoomMove](_api_provisioning_.onvifprovisioning.md#zoommove)
* [FocusMove](_api_provisioning_.onvifprovisioning.md#static-focusmove)
* [GetServiceCapabilities](_api_provisioning_.onvifprovisioning.md#static-getservicecapabilities)
* [GetUsage](_api_provisioning_.onvifprovisioning.md#static-getusage)
* [PanMove](_api_provisioning_.onvifprovisioning.md#static-panmove)
* [RollMove](_api_provisioning_.onvifprovisioning.md#static-rollmove)
* [Stop](_api_provisioning_.onvifprovisioning.md#static-stop)
* [TiltMove](_api_provisioning_.onvifprovisioning.md#static-tiltmove)
* [ZoomMove](_api_provisioning_.onvifprovisioning.md#static-zoommove)

## Constructors

###  constructor

\+ **new ONVIFProvisioning**(`config`: [IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md)): *[ONVIFProvisioning](_api_provisioning_.onvifprovisioning.md)*

*Defined in [api/provisioning.ts:5](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/provisioning.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | [IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md) |

**Returns:** *[ONVIFProvisioning](_api_provisioning_.onvifprovisioning.md)*

## Properties

### `Private` config

• **config**: *[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md)*

*Defined in [api/provisioning.ts:6](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/provisioning.ts#L6)*

## Methods

###  FocusMove

▸ **FocusMove**(): *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

*Defined in [api/provisioning.ts:119](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/provisioning.ts#L119)*

Moves device on the focus axis.

**Returns:** *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

___

###  GetServiceCapabilities

▸ **GetServiceCapabilities**(): *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

*Defined in [api/provisioning.ts:84](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/provisioning.ts#L84)*

Returns the capabilities of the provisioning service.

**Returns:** *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

___

###  GetUsage

▸ **GetUsage**(): *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

*Defined in [api/provisioning.ts:133](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/provisioning.ts#L133)*

Returns the lifetime move counts.

**Returns:** *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

___

###  PanMove

▸ **PanMove**(): *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

*Defined in [api/provisioning.ts:91](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/provisioning.ts#L91)*

Moves device on the pan axis.

**Returns:** *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

___

###  RollMove

▸ **RollMove**(): *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

*Defined in [api/provisioning.ts:112](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/provisioning.ts#L112)*

Moves device on the roll axis.

**Returns:** *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

___

###  Stop

▸ **Stop**(): *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

*Defined in [api/provisioning.ts:126](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/provisioning.ts#L126)*

Stops device motion on all axes.

**Returns:** *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

___

###  TiltMove

▸ **TiltMove**(): *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

*Defined in [api/provisioning.ts:98](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/provisioning.ts#L98)*

Moves device on the tilt axis.

**Returns:** *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

___

###  ZoomMove

▸ **ZoomMove**(): *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

*Defined in [api/provisioning.ts:105](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/provisioning.ts#L105)*

Moves device on the zoom axis.

**Returns:** *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

___

### `Static` FocusMove

▸ **FocusMove**(): *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

*Defined in [api/provisioning.ts:57](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/provisioning.ts#L57)*

Moves device on the focus axis.

**Returns:** *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

___

### `Static` GetServiceCapabilities

▸ **GetServiceCapabilities**(): *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

*Defined in [api/provisioning.ts:12](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/provisioning.ts#L12)*

Returns the capabilities of the provisioning service.

**Returns:** *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

___

### `Static` GetUsage

▸ **GetUsage**(): *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

*Defined in [api/provisioning.ts:75](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/provisioning.ts#L75)*

Returns the lifetime move counts.

**Returns:** *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

___

### `Static` PanMove

▸ **PanMove**(): *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

*Defined in [api/provisioning.ts:21](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/provisioning.ts#L21)*

Moves device on the pan axis.

**Returns:** *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

___

### `Static` RollMove

▸ **RollMove**(): *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

*Defined in [api/provisioning.ts:48](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/provisioning.ts#L48)*

Moves device on the roll axis.

**Returns:** *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

___

### `Static` Stop

▸ **Stop**(): *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

*Defined in [api/provisioning.ts:66](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/provisioning.ts#L66)*

Stops device motion on all axes.

**Returns:** *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

___

### `Static` TiltMove

▸ **TiltMove**(): *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

*Defined in [api/provisioning.ts:30](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/provisioning.ts#L30)*

Moves device on the tilt axis.

**Returns:** *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

___

### `Static` ZoomMove

▸ **ZoomMove**(): *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

*Defined in [api/provisioning.ts:39](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/provisioning.ts#L39)*

Moves device on the zoom axis.

**Returns:** *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*
