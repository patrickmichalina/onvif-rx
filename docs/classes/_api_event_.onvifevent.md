[onvif-rx](../README.md) > ["api/event"](../modules/_api_event_.md) > [ONVIFEvent](../classes/_api_event_.onvifevent.md)

# Class: ONVIFEvent

## Hierarchy

**ONVIFEvent**

## Index

### Constructors

* [constructor](_api_event_.onvifevent.md#constructor)

### Properties

* [config](_api_event_.onvifevent.md#config)

### Methods

* [CreatePullPointSubscription](_api_event_.onvifevent.md#createpullpointsubscription)
* [GetEventProperties](_api_event_.onvifevent.md#geteventproperties)
* [GetServiceCapabilities](_api_event_.onvifevent.md#getservicecapabilities)
* [PullMessages](_api_event_.onvifevent.md#pullmessages)
* [Seek](_api_event_.onvifevent.md#seek)
* [SetSynchronizationPoint](_api_event_.onvifevent.md#setsynchronizationpoint)
* [Unsubscribe](_api_event_.onvifevent.md#unsubscribe)
* [CreatePullPointSubscription](_api_event_.onvifevent.md#createpullpointsubscription-1)
* [GetEventProperties](_api_event_.onvifevent.md#geteventproperties-1)
* [GetServiceCapabilities](_api_event_.onvifevent.md#getservicecapabilities-1)
* [PullMessages](_api_event_.onvifevent.md#pullmessages-1)
* [Seek](_api_event_.onvifevent.md#seek-1)
* [SetSynchronizationPoint](_api_event_.onvifevent.md#setsynchronizationpoint-1)
* [Unsubscribe](_api_event_.onvifevent.md#unsubscribe-1)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new ONVIFEvent**(config: *[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md)*): [ONVIFEvent](_api_event_.onvifevent.md)

*Defined in api/event.ts:5*

**Parameters:**

| Name | Type |
| ------ | ------ |
| config | [IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md) |

**Returns:** [ONVIFEvent](_api_event_.onvifevent.md)

___

## Properties

<a id="config"></a>

### `<Private>` config

**● config**: *[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md)*

*Defined in api/event.ts:6*

___

## Methods

<a id="createpullpointsubscription"></a>

###  CreatePullPointSubscription

▸ **CreatePullPointSubscription**(Filter: *`any`*, InitialTerminationTime: *[AbsoluteOrRelativeTimeType](../modules/_api_types_.md#absoluteorrelativetimetype)*, SubscriptionPolicy: *`any`*): `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>

*Defined in api/event.ts:116*

This method returns a PullPointSubscription that can be polled using PullMessages. This message contains the same elements as the SubscriptionRequest of the WS-BaseNotification without the ConsumerReference. If no Filter is specified the pullpoint notifies all occurring events to the client. This method is mandatory.

**Parameters:**

| Name | Type |
| ------ | ------ |
| Filter | `any` |
| InitialTerminationTime | [AbsoluteOrRelativeTimeType](../modules/_api_types_.md#absoluteorrelativetimetype) |
| SubscriptionPolicy | `any` |

**Returns:** `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>

___
<a id="geteventproperties"></a>

###  GetEventProperties

▸ **GetEventProperties**(): `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>

*Defined in api/event.ts:127*

The WS-BaseNotification specification defines a set of OPTIONAL WS-ResouceProperties. This specification does not require the implementation of the WS-ResourceProperty interface. Instead, the subsequent direct interface shall be implemented by an ONVIF compliant device in order to provide information about the FilterDialects, Schema files and topics supported by the device.

**Returns:** `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>

___
<a id="getservicecapabilities"></a>

###  GetServiceCapabilities

▸ **GetServiceCapabilities**(): `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>

*Defined in api/event.ts:106*

Returns the capabilities of the event service. The result is returned in a typed answer.

**Returns:** `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>

___
<a id="pullmessages"></a>

###  PullMessages

▸ **PullMessages**(Timeout: *`string`*, MessageLimit: *`number`*): `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>

*Defined in api/event.ts:140*

This method pulls one or more messages from a PullPoint. The device shall provide the following PullMessages command for all SubscriptionManager endpoints returned by the CreatePullPointSubscription command. This method shall not wait until the requested number of messages is available but return as soon as at least one message is available. The command shall at least support a Timeout of one minute. In case a device supports retrieval of less messages than requested it shall return these without generating a fault.

**Parameters:**

| Name | Type |
| ------ | ------ |
| Timeout | `string` |
| MessageLimit | `number` |

**Returns:** `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>

___
<a id="seek"></a>

###  Seek

▸ **Seek**(UtcTime: *`string`*, Reverse: *`boolean`*): `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>

*Defined in api/event.ts:155*

This method readjusts the pull pointer into the past. A device supporting persistent notification storage shall provide the following Seek command for all SubscriptionManager endpoints returned by the CreatePullPointSubscription command. The optional Reverse argument can be used to reverse the pull direction of the PullMessages command. The UtcTime argument will be matched against the UtcTime attribute on a NotificationMessage.

**Parameters:**

| Name | Type |
| ------ | ------ |
| UtcTime | `string` |
| Reverse | `boolean` |

**Returns:** `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>

___
<a id="setsynchronizationpoint"></a>

###  SetSynchronizationPoint

▸ **SetSynchronizationPoint**(): `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>

*Defined in api/event.ts:170*

Properties inform a client about property creation, changes and deletion in a uniform way. When a client wants to synchronize its properties with the properties of the device, it can request a synchronization point which repeats the current status of all properties to which a client has subscribed. The PropertyOperation of all produced notifications is set to “Initialized”. The Synchronization Point is requested directly from the SubscriptionManager which was returned in either the SubscriptionResponse or in the CreatePullPointSubscriptionResponse. The property update is transmitted via the notification transportation of the notification interface. This method is mandatory.

**Returns:** `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>

___
<a id="unsubscribe"></a>

###  Unsubscribe

▸ **Unsubscribe**(): `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>

*Defined in api/event.ts:179*

The device shall provide the following Unsubscribe command for all SubscriptionManager endpoints returned by the CreatePullPointSubscription command. This command shall terminate the lifetime of a pull point.

**Returns:** `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>

___
<a id="createpullpointsubscription-1"></a>

### `<Static>` CreatePullPointSubscription

▸ **CreatePullPointSubscription**(Filter?: *`any`*, InitialTerminationTime?: *[AbsoluteOrRelativeTimeType](../modules/_api_types_.md#absoluteorrelativetimetype)*, SubscriptionPolicy?: *`any`*): `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

*Defined in api/event.ts:24*

This method returns a PullPointSubscription that can be polled using PullMessages. This message contains the same elements as the SubscriptionRequest of the WS-BaseNotification without the ConsumerReference. If no Filter is specified the pullpoint notifies all occurring events to the client. This method is mandatory.

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` Filter | `any` |
| `Optional` InitialTerminationTime | [AbsoluteOrRelativeTimeType](../modules/_api_types_.md#absoluteorrelativetimetype) |
| `Optional` SubscriptionPolicy | `any` |

**Returns:** `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

___
<a id="geteventproperties-1"></a>

### `<Static>` GetEventProperties

▸ **GetEventProperties**(): `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

*Defined in api/event.ts:37*

The WS-BaseNotification specification defines a set of OPTIONAL WS-ResouceProperties. This specification does not require the implementation of the WS-ResourceProperty interface. Instead, the subsequent direct interface shall be implemented by an ONVIF compliant device in order to provide information about the FilterDialects, Schema files and topics supported by the device.

**Returns:** `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

___
<a id="getservicecapabilities-1"></a>

### `<Static>` GetServiceCapabilities

▸ **GetServiceCapabilities**(): `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

*Defined in api/event.ts:12*

Returns the capabilities of the event service. The result is returned in a typed answer.

**Returns:** `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

___
<a id="pullmessages-1"></a>

### `<Static>` PullMessages

▸ **PullMessages**(Timeout: *`string`*, MessageLimit: *`number`*): `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

*Defined in api/event.ts:52*

This method pulls one or more messages from a PullPoint. The device shall provide the following PullMessages command for all SubscriptionManager endpoints returned by the CreatePullPointSubscription command. This method shall not wait until the requested number of messages is available but return as soon as at least one message is available. The command shall at least support a Timeout of one minute. In case a device supports retrieval of less messages than requested it shall return these without generating a fault.

**Parameters:**

| Name | Type |
| ------ | ------ |
| Timeout | `string` |
| MessageLimit | `number` |

**Returns:** `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

___
<a id="seek-1"></a>

### `<Static>` Seek

▸ **Seek**(UtcTime: *`string`*, Reverse?: *`undefined` \| `false` \| `true`*): `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

*Defined in api/event.ts:69*

This method readjusts the pull pointer into the past. A device supporting persistent notification storage shall provide the following Seek command for all SubscriptionManager endpoints returned by the CreatePullPointSubscription command. The optional Reverse argument can be used to reverse the pull direction of the PullMessages command. The UtcTime argument will be matched against the UtcTime attribute on a NotificationMessage.

**Parameters:**

| Name | Type |
| ------ | ------ |
| UtcTime | `string` |
| `Optional` Reverse | `undefined` \| `false` \| `true` |

**Returns:** `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

___
<a id="setsynchronizationpoint-1"></a>

### `<Static>` SetSynchronizationPoint

▸ **SetSynchronizationPoint**(): `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

*Defined in api/event.ts:86*

Properties inform a client about property creation, changes and deletion in a uniform way. When a client wants to synchronize its properties with the properties of the device, it can request a synchronization point which repeats the current status of all properties to which a client has subscribed. The PropertyOperation of all produced notifications is set to “Initialized”. The Synchronization Point is requested directly from the SubscriptionManager which was returned in either the SubscriptionResponse or in the CreatePullPointSubscriptionResponse. The property update is transmitted via the notification transportation of the notification interface. This method is mandatory.

**Returns:** `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

___
<a id="unsubscribe-1"></a>

### `<Static>` Unsubscribe

▸ **Unsubscribe**(): `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

*Defined in api/event.ts:97*

The device shall provide the following Unsubscribe command for all SubscriptionManager endpoints returned by the CreatePullPointSubscription command. This command shall terminate the lifetime of a pull point.

**Returns:** `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

___

