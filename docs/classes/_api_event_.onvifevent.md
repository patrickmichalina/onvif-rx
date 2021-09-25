[onvif-rx](../README.md) › ["api/event"](../modules/_api_event_.md) › [ONVIFEvent](_api_event_.onvifevent.md)

# Class: ONVIFEvent

## Hierarchy

* **ONVIFEvent**

## Index

### Constructors

* [constructor](_api_event_.onvifevent.md#constructor)

### Properties

* [config](_api_event_.onvifevent.md#private-config)

### Methods

* [AddEventBroker](_api_event_.onvifevent.md#addeventbroker)
* [CreatePullPointSubscription](_api_event_.onvifevent.md#createpullpointsubscription)
* [DeleteEventBroker](_api_event_.onvifevent.md#deleteeventbroker)
* [GetEventBrokers](_api_event_.onvifevent.md#geteventbrokers)
* [GetEventProperties](_api_event_.onvifevent.md#geteventproperties)
* [GetServiceCapabilities](_api_event_.onvifevent.md#getservicecapabilities)
* [PullMessages](_api_event_.onvifevent.md#pullmessages)
* [Seek](_api_event_.onvifevent.md#seek)
* [SetSynchronizationPoint](_api_event_.onvifevent.md#setsynchronizationpoint)
* [Unsubscribe](_api_event_.onvifevent.md#unsubscribe)
* [AddEventBroker](_api_event_.onvifevent.md#static-addeventbroker)
* [CreatePullPointSubscription](_api_event_.onvifevent.md#static-createpullpointsubscription)
* [DeleteEventBroker](_api_event_.onvifevent.md#static-deleteeventbroker)
* [GetEventBrokers](_api_event_.onvifevent.md#static-geteventbrokers)
* [GetEventProperties](_api_event_.onvifevent.md#static-geteventproperties)
* [GetServiceCapabilities](_api_event_.onvifevent.md#static-getservicecapabilities)
* [PullMessages](_api_event_.onvifevent.md#static-pullmessages)
* [Seek](_api_event_.onvifevent.md#static-seek)
* [SetSynchronizationPoint](_api_event_.onvifevent.md#static-setsynchronizationpoint)
* [Unsubscribe](_api_event_.onvifevent.md#static-unsubscribe)

## Constructors

###  constructor

\+ **new ONVIFEvent**(`config`: [IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md)): *[ONVIFEvent](_api_event_.onvifevent.md)*

*Defined in [api/event.ts:5](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/event.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | [IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md) |

**Returns:** *[ONVIFEvent](_api_event_.onvifevent.md)*

## Properties

### `Private` config

• **config**: *[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md)*

*Defined in [api/event.ts:6](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/event.ts#L6)*

## Methods

###  AddEventBroker

▸ **AddEventBroker**(`EventBroker`: [EventBrokerConfig](../interfaces/_api_types_.eventbrokerconfig.md)): *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

*Defined in [api/event.ts:161](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/event.ts#L161)*

The AddEventBroker command allows an ONVIF client to add an event broker configuration to device to enable ONVIF events to be transferred to an event broker. If an existing event broker configuration already exists with the same Address, the existing configuration shall be modified.

**Parameters:**

Name | Type |
------ | ------ |
`EventBroker` | [EventBrokerConfig](../interfaces/_api_types_.eventbrokerconfig.md) |

**Returns:** *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

___

###  CreatePullPointSubscription

▸ **CreatePullPointSubscription**(`Filter?`: any, `InitialTerminationTime?`: [AbsoluteOrRelativeTimeType](../modules/_api_types_.md#absoluteorrelativetimetype), `SubscriptionPolicy?`: any): *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

*Defined in [api/event.ts:143](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/event.ts#L143)*

This method returns a PullPointSubscription that can be polled using PullMessages.
  This message contains the same elements as the SubscriptionRequest of the WS-BaseNotification without the ConsumerReference.
  If no Filter is specified the pullpoint notifies all occurring events to the client.
  This method is mandatory.

**Parameters:**

Name | Type |
------ | ------ |
`Filter?` | any |
`InitialTerminationTime?` | [AbsoluteOrRelativeTimeType](../modules/_api_types_.md#absoluteorrelativetimetype) |
`SubscriptionPolicy?` | any |

**Returns:** *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

___

###  DeleteEventBroker

▸ **DeleteEventBroker**(`Address`: string): *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

*Defined in [api/event.ts:168](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/event.ts#L168)*

The DeleteEventBroker allows an ONVIF client to delete an event broker configuration from an ONVIF device.

**Parameters:**

Name | Type |
------ | ------ |
`Address` | string |

**Returns:** *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

___

###  GetEventBrokers

▸ **GetEventBrokers**(`Address?`: undefined | string): *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

*Defined in [api/event.ts:175](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/event.ts#L175)*

The GetEventBrokers command lets a client retrieve event broker configurations from the device.

**Parameters:**

Name | Type |
------ | ------ |
`Address?` | undefined &#124; string |

**Returns:** *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

___

###  GetEventProperties

▸ **GetEventProperties**(): *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

*Defined in [api/event.ts:154](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/event.ts#L154)*

The WS-BaseNotification specification defines a set of OPTIONAL WS-ResouceProperties.
  This specification does not require the implementation of the WS-ResourceProperty interface.
  Instead, the subsequent direct interface shall be implemented by an ONVIF compliant device
  in order to provide information about the FilterDialects, Schema files and topics supported by
  the device.

**Returns:** *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

___

###  GetServiceCapabilities

▸ **GetServiceCapabilities**(): *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

*Defined in [api/event.ts:133](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/event.ts#L133)*

Returns the capabilities of the event service. The result is returned in a typed answer.

**Returns:** *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

___

###  PullMessages

▸ **PullMessages**(`Timeout`: string, `MessageLimit`: number): *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

*Defined in [api/event.ts:188](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/event.ts#L188)*

  This method pulls one or more messages from a PullPoint.
  The device shall provide the following PullMessages command for all SubscriptionManager
  endpoints returned by the CreatePullPointSubscription command. This method shall not wait until
  the requested number of messages is available but return as soon as at least one message is available.
  The command shall at least support a Timeout of one minute. In case a device supports retrieval of less messages
  than requested it shall return these without generating a fault.

**Parameters:**

Name | Type |
------ | ------ |
`Timeout` | string |
`MessageLimit` | number |

**Returns:** *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

___

###  Seek

▸ **Seek**(`UtcTime`: string, `Reverse?`: undefined | false | true): *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

*Defined in [api/event.ts:203](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/event.ts#L203)*

  This method readjusts the pull pointer into the past.
  A device supporting persistent notification storage shall provide the
  following Seek command for all SubscriptionManager endpoints returned by
  the CreatePullPointSubscription command. The optional Reverse argument can
  be used to reverse the pull direction of the PullMessages command.
  The UtcTime argument will be matched against the UtcTime attribute on a
  NotificationMessage.

**Parameters:**

Name | Type |
------ | ------ |
`UtcTime` | string |
`Reverse?` | undefined &#124; false &#124; true |

**Returns:** *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

___

###  SetSynchronizationPoint

▸ **SetSynchronizationPoint**(): *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

*Defined in [api/event.ts:218](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/event.ts#L218)*

Properties inform a client about property creation, changes and
  deletion in a uniform way. When a client wants to synchronize its properties with the
  properties of the device, it can request a synchronization point which repeats the current
  status of all properties to which a client has subscribed. The PropertyOperation of all
  produced notifications is set to “Initialized”. The Synchronization Point is
  requested directly from the SubscriptionManager which was returned in either the
  SubscriptionResponse or in the CreatePullPointSubscriptionResponse. The property update is
  transmitted via the notification transportation of the notification interface. This method is mandatory.

**Returns:** *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

___

###  Unsubscribe

▸ **Unsubscribe**(): *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

*Defined in [api/event.ts:227](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/event.ts#L227)*

The device shall provide the following Unsubscribe command for all SubscriptionManager endpoints returned by the CreatePullPointSubscription command.
  This command shall terminate the lifetime of a pull point.

**Returns:** *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

___

### `Static` AddEventBroker

▸ **AddEventBroker**(`EventBroker`: [EventBrokerConfig](../interfaces/_api_types_.eventbrokerconfig.md)): *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

*Defined in [api/event.ts:46](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/event.ts#L46)*

The AddEventBroker command allows an ONVIF client to add an event broker configuration to device to enable ONVIF events to be transferred to an event broker. If an existing event broker configuration already exists with the same Address, the existing configuration shall be modified.

**Parameters:**

Name | Type |
------ | ------ |
`EventBroker` | [EventBrokerConfig](../interfaces/_api_types_.eventbrokerconfig.md) |

**Returns:** *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

___

### `Static` CreatePullPointSubscription

▸ **CreatePullPointSubscription**(`Filter?`: any, `InitialTerminationTime?`: [AbsoluteOrRelativeTimeType](../modules/_api_types_.md#absoluteorrelativetimetype), `SubscriptionPolicy?`: any): *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

*Defined in [api/event.ts:24](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/event.ts#L24)*

This method returns a PullPointSubscription that can be polled using PullMessages.
  This message contains the same elements as the SubscriptionRequest of the WS-BaseNotification without the ConsumerReference.
  If no Filter is specified the pullpoint notifies all occurring events to the client.
  This method is mandatory.

**Parameters:**

Name | Type |
------ | ------ |
`Filter?` | any |
`InitialTerminationTime?` | [AbsoluteOrRelativeTimeType](../modules/_api_types_.md#absoluteorrelativetimetype) |
`SubscriptionPolicy?` | any |

**Returns:** *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

___

### `Static` DeleteEventBroker

▸ **DeleteEventBroker**(`Address`: string): *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

*Defined in [api/event.ts:55](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/event.ts#L55)*

The DeleteEventBroker allows an ONVIF client to delete an event broker configuration from an ONVIF device.

**Parameters:**

Name | Type |
------ | ------ |
`Address` | string |

**Returns:** *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

___

### `Static` GetEventBrokers

▸ **GetEventBrokers**(`Address?`: undefined | string): *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

*Defined in [api/event.ts:64](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/event.ts#L64)*

The GetEventBrokers command lets a client retrieve event broker configurations from the device.

**Parameters:**

Name | Type |
------ | ------ |
`Address?` | undefined &#124; string |

**Returns:** *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

___

### `Static` GetEventProperties

▸ **GetEventProperties**(): *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

*Defined in [api/event.ts:37](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/event.ts#L37)*

The WS-BaseNotification specification defines a set of OPTIONAL WS-ResouceProperties.
  This specification does not require the implementation of the WS-ResourceProperty interface.
  Instead, the subsequent direct interface shall be implemented by an ONVIF compliant device
  in order to provide information about the FilterDialects, Schema files and topics supported by
  the device.

**Returns:** *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

___

### `Static` GetServiceCapabilities

▸ **GetServiceCapabilities**(): *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

*Defined in [api/event.ts:12](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/event.ts#L12)*

Returns the capabilities of the event service. The result is returned in a typed answer.

**Returns:** *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

___

### `Static` PullMessages

▸ **PullMessages**(`Timeout`: string, `MessageLimit`: number): *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

*Defined in [api/event.ts:79](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/event.ts#L79)*

  This method pulls one or more messages from a PullPoint.
  The device shall provide the following PullMessages command for all SubscriptionManager
  endpoints returned by the CreatePullPointSubscription command. This method shall not wait until
  the requested number of messages is available but return as soon as at least one message is available.
  The command shall at least support a Timeout of one minute. In case a device supports retrieval of less messages
  than requested it shall return these without generating a fault.

**Parameters:**

Name | Type |
------ | ------ |
`Timeout` | string |
`MessageLimit` | number |

**Returns:** *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

___

### `Static` Seek

▸ **Seek**(`UtcTime`: string, `Reverse?`: undefined | false | true): *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

*Defined in [api/event.ts:96](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/event.ts#L96)*

  This method readjusts the pull pointer into the past.
  A device supporting persistent notification storage shall provide the
  following Seek command for all SubscriptionManager endpoints returned by
  the CreatePullPointSubscription command. The optional Reverse argument can
  be used to reverse the pull direction of the PullMessages command.
  The UtcTime argument will be matched against the UtcTime attribute on a
  NotificationMessage.

**Parameters:**

Name | Type |
------ | ------ |
`UtcTime` | string |
`Reverse?` | undefined &#124; false &#124; true |

**Returns:** *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

___

### `Static` SetSynchronizationPoint

▸ **SetSynchronizationPoint**(): *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

*Defined in [api/event.ts:113](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/event.ts#L113)*

Properties inform a client about property creation, changes and
  deletion in a uniform way. When a client wants to synchronize its properties with the
  properties of the device, it can request a synchronization point which repeats the current
  status of all properties to which a client has subscribed. The PropertyOperation of all
  produced notifications is set to “Initialized”. The Synchronization Point is
  requested directly from the SubscriptionManager which was returned in either the
  SubscriptionResponse or in the CreatePullPointSubscriptionResponse. The property update is
  transmitted via the notification transportation of the notification interface. This method is mandatory.

**Returns:** *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

___

### `Static` Unsubscribe

▸ **Unsubscribe**(): *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

*Defined in [api/event.ts:124](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/event.ts#L124)*

The device shall provide the following Unsubscribe command for all SubscriptionManager endpoints returned by the CreatePullPointSubscription command.
  This command shall terminate the lifetime of a pull point.

**Returns:** *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*
