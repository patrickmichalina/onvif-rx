[onvif-rx](../README.md) › ["api/replay"](../modules/_api_replay_.md) › [ONVIFReplay](_api_replay_.onvifreplay.md)

# Class: ONVIFReplay

## Hierarchy

* **ONVIFReplay**

## Index

### Constructors

* [constructor](_api_replay_.onvifreplay.md#constructor)

### Properties

* [config](_api_replay_.onvifreplay.md#private-config)

### Methods

* [GetReplayConfiguration](_api_replay_.onvifreplay.md#getreplayconfiguration)
* [GetReplayUri](_api_replay_.onvifreplay.md#getreplayuri)
* [GetServiceCapabilities](_api_replay_.onvifreplay.md#getservicecapabilities)
* [SetReplayConfiguration](_api_replay_.onvifreplay.md#setreplayconfiguration)
* [GetReplayConfiguration](_api_replay_.onvifreplay.md#static-getreplayconfiguration)
* [GetReplayUri](_api_replay_.onvifreplay.md#static-getreplayuri)
* [GetServiceCapabilities](_api_replay_.onvifreplay.md#static-getservicecapabilities)
* [SetReplayConfiguration](_api_replay_.onvifreplay.md#static-setreplayconfiguration)

## Constructors

###  constructor

\+ **new ONVIFReplay**(`config`: [IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md)): *[ONVIFReplay](_api_replay_.onvifreplay.md)*

*Defined in [api/replay.ts:5](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/replay.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | [IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md) |

**Returns:** *[ONVIFReplay](_api_replay_.onvifreplay.md)*

## Properties

### `Private` config

• **config**: *[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md)*

*Defined in [api/replay.ts:6](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/replay.ts#L6)*

## Methods

###  GetReplayConfiguration

▸ **GetReplayConfiguration**(): *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

*Defined in [api/replay.ts:81](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/replay.ts#L81)*

  Returns the current configuration of the replay service.
  This operation is mandatory.

**Returns:** *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

___

###  GetReplayUri

▸ **GetReplayUri**(`StreamSetup`: [StreamSetup](../interfaces/_api_types_.streamsetup.md), `RecordingToken`: [ReferenceToken](../modules/_api_types_.md#referencetoken)): *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

*Defined in [api/replay.ts:71](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/replay.ts#L71)*

  Requests a URI that can be used to initiate playback of a recorded stream
  using RTSP as the control protocol. The URI is valid only as it is
  specified in the response.
  A device supporting the Replay Service shall support the GetReplayUri command.

**Parameters:**

Name | Type |
------ | ------ |
`StreamSetup` | [StreamSetup](../interfaces/_api_types_.streamsetup.md) |
`RecordingToken` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |

**Returns:** *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

___

###  GetServiceCapabilities

▸ **GetServiceCapabilities**(): *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

*Defined in [api/replay.ts:59](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/replay.ts#L59)*

Returns the capabilities of the replay service. The result is returned in a typed answer.

**Returns:** *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

___

###  SetReplayConfiguration

▸ **SetReplayConfiguration**(`Configuration`: [ReplayConfiguration](../interfaces/_api_types_.replayconfiguration.md)): *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

*Defined in [api/replay.ts:91](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/replay.ts#L91)*

  Changes the current configuration of the replay service.
  This operation is mandatory.

**Parameters:**

Name | Type |
------ | ------ |
`Configuration` | [ReplayConfiguration](../interfaces/_api_types_.replayconfiguration.md) |

**Returns:** *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

___

### `Static` GetReplayConfiguration

▸ **GetReplayConfiguration**(): *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

*Defined in [api/replay.ts:38](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/replay.ts#L38)*

  Returns the current configuration of the replay service.
  This operation is mandatory.

**Returns:** *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

___

### `Static` GetReplayUri

▸ **GetReplayUri**(`StreamSetup`: [StreamSetup](../interfaces/_api_types_.streamsetup.md), `RecordingToken`: [ReferenceToken](../modules/_api_types_.md#referencetoken)): *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

*Defined in [api/replay.ts:26](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/replay.ts#L26)*

  Requests a URI that can be used to initiate playback of a recorded stream
  using RTSP as the control protocol. The URI is valid only as it is
  specified in the response.
  A device supporting the Replay Service shall support the GetReplayUri command.

**Parameters:**

Name | Type |
------ | ------ |
`StreamSetup` | [StreamSetup](../interfaces/_api_types_.streamsetup.md) |
`RecordingToken` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |

**Returns:** *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

___

### `Static` GetServiceCapabilities

▸ **GetServiceCapabilities**(): *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

*Defined in [api/replay.ts:12](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/replay.ts#L12)*

Returns the capabilities of the replay service. The result is returned in a typed answer.

**Returns:** *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

___

### `Static` SetReplayConfiguration

▸ **SetReplayConfiguration**(`Configuration`: [ReplayConfiguration](../interfaces/_api_types_.replayconfiguration.md)): *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

*Defined in [api/replay.ts:50](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/replay.ts#L50)*

  Changes the current configuration of the replay service.
  This operation is mandatory.

**Parameters:**

Name | Type |
------ | ------ |
`Configuration` | [ReplayConfiguration](../interfaces/_api_types_.replayconfiguration.md) |

**Returns:** *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*
