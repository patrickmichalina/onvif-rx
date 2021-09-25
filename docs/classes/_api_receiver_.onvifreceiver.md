[onvif-rx](../README.md) › ["api/receiver"](../modules/_api_receiver_.md) › [ONVIFReceiver](_api_receiver_.onvifreceiver.md)

# Class: ONVIFReceiver

## Hierarchy

* **ONVIFReceiver**

## Index

### Constructors

* [constructor](_api_receiver_.onvifreceiver.md#constructor)

### Properties

* [config](_api_receiver_.onvifreceiver.md#private-config)

### Methods

* [ConfigureReceiver](_api_receiver_.onvifreceiver.md#configurereceiver)
* [CreateReceiver](_api_receiver_.onvifreceiver.md#createreceiver)
* [DeleteReceiver](_api_receiver_.onvifreceiver.md#deletereceiver)
* [GetReceiver](_api_receiver_.onvifreceiver.md#getreceiver)
* [GetReceiverState](_api_receiver_.onvifreceiver.md#getreceiverstate)
* [GetReceivers](_api_receiver_.onvifreceiver.md#getreceivers)
* [GetServiceCapabilities](_api_receiver_.onvifreceiver.md#getservicecapabilities)
* [SetReceiverMode](_api_receiver_.onvifreceiver.md#setreceivermode)
* [ConfigureReceiver](_api_receiver_.onvifreceiver.md#static-configurereceiver)
* [CreateReceiver](_api_receiver_.onvifreceiver.md#static-createreceiver)
* [DeleteReceiver](_api_receiver_.onvifreceiver.md#static-deletereceiver)
* [GetReceiver](_api_receiver_.onvifreceiver.md#static-getreceiver)
* [GetReceiverState](_api_receiver_.onvifreceiver.md#static-getreceiverstate)
* [GetReceivers](_api_receiver_.onvifreceiver.md#static-getreceivers)
* [GetServiceCapabilities](_api_receiver_.onvifreceiver.md#static-getservicecapabilities)
* [SetReceiverMode](_api_receiver_.onvifreceiver.md#static-setreceivermode)

## Constructors

###  constructor

\+ **new ONVIFReceiver**(`config`: [IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md)): *[ONVIFReceiver](_api_receiver_.onvifreceiver.md)*

*Defined in [api/receiver.ts:5](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/receiver.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | [IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md) |

**Returns:** *[ONVIFReceiver](_api_receiver_.onvifreceiver.md)*

## Properties

### `Private` config

• **config**: *[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md)*

*Defined in [api/receiver.ts:6](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/receiver.ts#L6)*

## Methods

###  ConfigureReceiver

▸ **ConfigureReceiver**(`ReceiverToken`: [ReferenceToken](../modules/_api_types_.md#referencetoken), `Configuration`: [ReceiverConfiguration](../interfaces/_api_types_.receiverconfiguration.md)): *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

*Defined in [api/receiver.ts:152](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/receiver.ts#L152)*

  Configures an existing receiver. This operation is mandatory.

**Parameters:**

Name | Type |
------ | ------ |
`ReceiverToken` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |
`Configuration` | [ReceiverConfiguration](../interfaces/_api_types_.receiverconfiguration.md) |

**Returns:** *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

___

###  CreateReceiver

▸ **CreateReceiver**(`Configuration`: [ReceiverConfiguration](../interfaces/_api_types_.receiverconfiguration.md)): *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

*Defined in [api/receiver.ts:132](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/receiver.ts#L132)*

  Creates a new receiver. This operation is mandatory, although the service may
  raise a fault if the receiver cannot be created.

**Parameters:**

Name | Type |
------ | ------ |
`Configuration` | [ReceiverConfiguration](../interfaces/_api_types_.receiverconfiguration.md) |

**Returns:** *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

___

###  DeleteReceiver

▸ **DeleteReceiver**(`ReceiverToken`: [ReferenceToken](../modules/_api_types_.md#referencetoken)): *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

*Defined in [api/receiver.ts:143](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/receiver.ts#L143)*

  Deletes an existing receiver. A receiver may be deleted only if it is not
  currently in use; otherwise a fault shall be raised.
  This operation is mandatory.

**Parameters:**

Name | Type |
------ | ------ |
`ReceiverToken` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |

**Returns:** *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

___

###  GetReceiver

▸ **GetReceiver**(`ReceiverToken`: [ReferenceToken](../modules/_api_types_.md#referencetoken)): *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

*Defined in [api/receiver.ts:122](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/receiver.ts#L122)*

  Retrieves the details of a specific receiver. This operation is mandatory.

**Parameters:**

Name | Type |
------ | ------ |
`ReceiverToken` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |

**Returns:** *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

___

###  GetReceiverState

▸ **GetReceiverState**(`ReceiverToken`: [ReferenceToken](../modules/_api_types_.md#referencetoken)): *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

*Defined in [api/receiver.ts:173](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/receiver.ts#L173)*

  Determines whether the receiver is currently disconnected, connected or
  attempting to connect.
  This operation is mandatory.

**Parameters:**

Name | Type |
------ | ------ |
`ReceiverToken` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |

**Returns:** *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

___

###  GetReceivers

▸ **GetReceivers**(): *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

*Defined in [api/receiver.ts:113](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/receiver.ts#L113)*

  Lists all receivers currently present on a device. This operation is mandatory.

**Returns:** *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

___

###  GetServiceCapabilities

▸ **GetServiceCapabilities**(): *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

*Defined in [api/receiver.ts:104](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/receiver.ts#L104)*

Returns the capabilities of the receiver service. The result is returned in a typed answer.

**Returns:** *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

___

###  SetReceiverMode

▸ **SetReceiverMode**(`ReceiverToken`: [ReferenceToken](../modules/_api_types_.md#referencetoken), `Mode`: [ReceiverMode](../enums/_api_types_.receivermode.md)): *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

*Defined in [api/receiver.ts:162](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/receiver.ts#L162)*

  Sets the mode of the receiver without affecting the rest of its configuration.
  This operation is mandatory.

**Parameters:**

Name | Type |
------ | ------ |
`ReceiverToken` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |
`Mode` | [ReceiverMode](../enums/_api_types_.receivermode.md) |

**Returns:** *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

___

### `Static` ConfigureReceiver

▸ **ConfigureReceiver**(`ReceiverToken`: [ReferenceToken](../modules/_api_types_.md#referencetoken), `Configuration`: [ReceiverConfiguration](../interfaces/_api_types_.receiverconfiguration.md)): *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

*Defined in [api/receiver.ts:70](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/receiver.ts#L70)*

  Configures an existing receiver. This operation is mandatory.

**Parameters:**

Name | Type |
------ | ------ |
`ReceiverToken` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |
`Configuration` | [ReceiverConfiguration](../interfaces/_api_types_.receiverconfiguration.md) |

**Returns:** *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

___

### `Static` CreateReceiver

▸ **CreateReceiver**(`Configuration`: [ReceiverConfiguration](../interfaces/_api_types_.receiverconfiguration.md)): *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

*Defined in [api/receiver.ts:46](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/receiver.ts#L46)*

  Creates a new receiver. This operation is mandatory, although the service may
  raise a fault if the receiver cannot be created.

**Parameters:**

Name | Type |
------ | ------ |
`Configuration` | [ReceiverConfiguration](../interfaces/_api_types_.receiverconfiguration.md) |

**Returns:** *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

___

### `Static` DeleteReceiver

▸ **DeleteReceiver**(`ReceiverToken`: [ReferenceToken](../modules/_api_types_.md#referencetoken)): *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

*Defined in [api/receiver.ts:59](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/receiver.ts#L59)*

  Deletes an existing receiver. A receiver may be deleted only if it is not
  currently in use; otherwise a fault shall be raised.
  This operation is mandatory.

**Parameters:**

Name | Type |
------ | ------ |
`ReceiverToken` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |

**Returns:** *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

___

### `Static` GetReceiver

▸ **GetReceiver**(`ReceiverToken`: [ReferenceToken](../modules/_api_types_.md#referencetoken)): *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

*Defined in [api/receiver.ts:34](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/receiver.ts#L34)*

  Retrieves the details of a specific receiver. This operation is mandatory.

**Parameters:**

Name | Type |
------ | ------ |
`ReceiverToken` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |

**Returns:** *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

___

### `Static` GetReceiverState

▸ **GetReceiverState**(`ReceiverToken`: [ReferenceToken](../modules/_api_types_.md#referencetoken)): *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

*Defined in [api/receiver.ts:95](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/receiver.ts#L95)*

  Determines whether the receiver is currently disconnected, connected or
  attempting to connect.
  This operation is mandatory.

**Parameters:**

Name | Type |
------ | ------ |
`ReceiverToken` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |

**Returns:** *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

___

### `Static` GetReceivers

▸ **GetReceivers**(): *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

*Defined in [api/receiver.ts:23](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/receiver.ts#L23)*

  Lists all receivers currently present on a device. This operation is mandatory.

**Returns:** *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

___

### `Static` GetServiceCapabilities

▸ **GetServiceCapabilities**(): *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

*Defined in [api/receiver.ts:12](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/receiver.ts#L12)*

Returns the capabilities of the receiver service. The result is returned in a typed answer.

**Returns:** *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

___

### `Static` SetReceiverMode

▸ **SetReceiverMode**(`ReceiverToken`: [ReferenceToken](../modules/_api_types_.md#referencetoken), `Mode`: [ReceiverMode](../enums/_api_types_.receivermode.md)): *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

*Defined in [api/receiver.ts:82](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/receiver.ts#L82)*

  Sets the mode of the receiver without affecting the rest of its configuration.
  This operation is mandatory.

**Parameters:**

Name | Type |
------ | ------ |
`ReceiverToken` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |
`Mode` | [ReceiverMode](../enums/_api_types_.receivermode.md) |

**Returns:** *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*
