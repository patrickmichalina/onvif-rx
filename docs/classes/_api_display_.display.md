[onvif-rx](../README.md) > ["api/display"](../modules/_api_display_.md) > [Display](../classes/_api_display_.display.md)

# Class: Display

## Hierarchy

**Display**

## Index

### Constructors

* [constructor](_api_display_.display.md#constructor)

### Properties

* [config](_api_display_.display.md#config)

### Methods

* [CreatePaneConfiguration](_api_display_.display.md#createpaneconfiguration)
* [DeletePaneConfiguration](_api_display_.display.md#deletepaneconfiguration)
* [GetDisplayOptions](_api_display_.display.md#getdisplayoptions)
* [GetLayout](_api_display_.display.md#getlayout)
* [GetPaneConfiguration](_api_display_.display.md#getpaneconfiguration)
* [GetPaneConfigurations](_api_display_.display.md#getpaneconfigurations)
* [GetServiceCapabilities](_api_display_.display.md#getservicecapabilities)
* [SetLayout](_api_display_.display.md#setlayout)
* [SetPaneConfiguration](_api_display_.display.md#setpaneconfiguration)
* [SetPaneConfigurations](_api_display_.display.md#setpaneconfigurations)
* [CreatePaneConfiguration](_api_display_.display.md#createpaneconfiguration-1)
* [DeletePaneConfiguration](_api_display_.display.md#deletepaneconfiguration-1)
* [GetDisplayOptions](_api_display_.display.md#getdisplayoptions-1)
* [GetLayout](_api_display_.display.md#getlayout-1)
* [GetPaneConfiguration](_api_display_.display.md#getpaneconfiguration-1)
* [GetPaneConfigurations](_api_display_.display.md#getpaneconfigurations-1)
* [GetServiceCapabilities](_api_display_.display.md#getservicecapabilities-1)
* [SetLayout](_api_display_.display.md#setlayout-1)
* [SetPaneConfiguration](_api_display_.display.md#setpaneconfiguration-1)
* [SetPaneConfigurations](_api_display_.display.md#setpaneconfigurations-1)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Display**(config: *[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md)*): [Display](_api_display_.display.md)

*Defined in [api/display.ts:5](https://github.com/patrickmichalina/onvif-rx/blob/1596479/src/api/display.ts#L5)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| config | [IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md) |

**Returns:** [Display](_api_display_.display.md)

___

## Properties

<a id="config"></a>

### `<Private>` config

**● config**: *[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md)*

*Defined in [api/display.ts:6](https://github.com/patrickmichalina/onvif-rx/blob/1596479/src/api/display.ts#L6)*

___

## Methods

<a id="createpaneconfiguration"></a>

###  CreatePaneConfiguration

▸ **CreatePaneConfiguration**(VideoOutput: *[ReferenceToken](../modules/_api_types_.md#referencetoken)*, PaneConfiguration: *[PaneConfiguration](../interfaces/_api_types_.paneconfiguration.md)*): `Observable`<`IResult`<`any`, [ITransportPayloadXml](../interfaces/_soap_request_.itransportpayloadxml.md)>>

*Defined in [api/display.ts:197](https://github.com/patrickmichalina/onvif-rx/blob/1596479/src/api/display.ts#L197)*

Create a new pane configuration describing the streaming and coding settings for a display area. This optional method is only supported by devices that signal support of dynamic pane creation via their capabilities. The content of the Token field may be ignored by the device.

**Parameters:**

| Name | Type |
| ------ | ------ |
| VideoOutput | [ReferenceToken](../modules/_api_types_.md#referencetoken) |
| PaneConfiguration | [PaneConfiguration](../interfaces/_api_types_.paneconfiguration.md) |

**Returns:** `Observable`<`IResult`<`any`, [ITransportPayloadXml](../interfaces/_soap_request_.itransportpayloadxml.md)>>

___
<a id="deletepaneconfiguration"></a>

###  DeletePaneConfiguration

▸ **DeletePaneConfiguration**(VideoOutput: *[ReferenceToken](../modules/_api_types_.md#referencetoken)*, PaneToken: *[ReferenceToken](../modules/_api_types_.md#referencetoken)*): `Observable`<`IResult`<`any`, [ITransportPayloadXml](../interfaces/_soap_request_.itransportpayloadxml.md)>>

*Defined in [api/display.ts:207](https://github.com/patrickmichalina/onvif-rx/blob/1596479/src/api/display.ts#L207)*

Delete a pane configuration. A service must respond with an error if the pane configuration is in use by the current layout. This optional method is only supported by devices that signal support of dynamic pane creation via their capabilities.

**Parameters:**

| Name | Type |
| ------ | ------ |
| VideoOutput | [ReferenceToken](../modules/_api_types_.md#referencetoken) |
| PaneToken | [ReferenceToken](../modules/_api_types_.md#referencetoken) |

**Returns:** `Observable`<`IResult`<`any`, [ITransportPayloadXml](../interfaces/_soap_request_.itransportpayloadxml.md)>>

___
<a id="getdisplayoptions"></a>

###  GetDisplayOptions

▸ **GetDisplayOptions**(VideoOutput: *[ReferenceToken](../modules/_api_types_.md#referencetoken)*): `Observable`<`IResult`<`any`, [ITransportPayloadXml](../interfaces/_soap_request_.itransportpayloadxml.md)>>

*Defined in [api/display.ts:153](https://github.com/patrickmichalina/onvif-rx/blob/1596479/src/api/display.ts#L153)*

The Display Options contain the supported layouts (LayoutOptions) and the decoding and encoding capabilities (CodingCapabilities) of the device. The GetDisplayOptions command returns both, Layout and Coding Capabilities, of a VideoOutput.

**Parameters:**

| Name | Type |
| ------ | ------ |
| VideoOutput | [ReferenceToken](../modules/_api_types_.md#referencetoken) |

**Returns:** `Observable`<`IResult`<`any`, [ITransportPayloadXml](../interfaces/_soap_request_.itransportpayloadxml.md)>>

___
<a id="getlayout"></a>

###  GetLayout

▸ **GetLayout**(VideoOutput: *[ReferenceToken](../modules/_api_types_.md#referencetoken)*): `Observable`<`IResult`<`any`, [ITransportPayloadXml](../interfaces/_soap_request_.itransportpayloadxml.md)>>

*Defined in [api/display.ts:132](https://github.com/patrickmichalina/onvif-rx/blob/1596479/src/api/display.ts#L132)*

Return the current layout of a video output. The Layout assigns a pane configuration to a certain area of the display. The layout settings directly affect a specific video output. The layout consists of a list of PaneConfigurations and their associated display areas.

**Parameters:**

| Name | Type |
| ------ | ------ |
| VideoOutput | [ReferenceToken](../modules/_api_types_.md#referencetoken) |

**Returns:** `Observable`<`IResult`<`any`, [ITransportPayloadXml](../interfaces/_soap_request_.itransportpayloadxml.md)>>

___
<a id="getpaneconfiguration"></a>

###  GetPaneConfiguration

▸ **GetPaneConfiguration**(VideoOutput: *[ReferenceToken](../modules/_api_types_.md#referencetoken)*, Pane: *[ReferenceToken](../modules/_api_types_.md#referencetoken)*): `Observable`<`IResult`<`any`, [ITransportPayloadXml](../interfaces/_soap_request_.itransportpayloadxml.md)>>

*Defined in [api/display.ts:171](https://github.com/patrickmichalina/onvif-rx/blob/1596479/src/api/display.ts#L171)*

Retrieve the pane configuration for a pane token.

**Parameters:**

| Name | Type |
| ------ | ------ |
| VideoOutput | [ReferenceToken](../modules/_api_types_.md#referencetoken) |
| Pane | [ReferenceToken](../modules/_api_types_.md#referencetoken) |

**Returns:** `Observable`<`IResult`<`any`, [ITransportPayloadXml](../interfaces/_soap_request_.itransportpayloadxml.md)>>

___
<a id="getpaneconfigurations"></a>

###  GetPaneConfigurations

▸ **GetPaneConfigurations**(VideoOutput: *[ReferenceToken](../modules/_api_types_.md#referencetoken)*): `Observable`<`IResult`<`any`, [ITransportPayloadXml](../interfaces/_soap_request_.itransportpayloadxml.md)>>

*Defined in [api/display.ts:164](https://github.com/patrickmichalina/onvif-rx/blob/1596479/src/api/display.ts#L164)*

List all currently defined panes of a device for a specified video output (regardless if this pane is visible at a moment). A Pane is a display area on the monitor that is attached to a video output. A pane has a PaneConfiguration that describes which entities are associated with the pane. A client has to configure the pane according to the connection to be established by setting the AudioOutput and/or AudioSourceToken. If a Token is not set, the corresponding session will not be established.

**Parameters:**

| Name | Type |
| ------ | ------ |
| VideoOutput | [ReferenceToken](../modules/_api_types_.md#referencetoken) |

**Returns:** `Observable`<`IResult`<`any`, [ITransportPayloadXml](../interfaces/_soap_request_.itransportpayloadxml.md)>>

___
<a id="getservicecapabilities"></a>

###  GetServiceCapabilities

▸ **GetServiceCapabilities**(): `Observable`<`IResult`<`any`, [ITransportPayloadXml](../interfaces/_soap_request_.itransportpayloadxml.md)>>

*Defined in [api/display.ts:123](https://github.com/patrickmichalina/onvif-rx/blob/1596479/src/api/display.ts#L123)*

Returns the capabilities of the display service. The result is returned in a typed answer.

**Returns:** `Observable`<`IResult`<`any`, [ITransportPayloadXml](../interfaces/_soap_request_.itransportpayloadxml.md)>>

___
<a id="setlayout"></a>

###  SetLayout

▸ **SetLayout**(VideoOutput: *[ReferenceToken](../modules/_api_types_.md#referencetoken)*, Layout: *[Layout](../interfaces/_api_types_.layout.md)*): `Observable`<`IResult`<`any`, [ITransportPayloadXml](../interfaces/_soap_request_.itransportpayloadxml.md)>>

*Defined in [api/display.ts:144](https://github.com/patrickmichalina/onvif-rx/blob/1596479/src/api/display.ts#L144)*

Change the layout of a display (e.g. change from single view to split screen view).The Layout assigns a pane configuration to a certain area of the display. The layout settings directly affect a specific video output. The layout consists of a list of PaneConfigurations and their associated display areas. A device implementation shall be tolerant against rounding errors when matching a layout against its fixed set of layouts by accepting differences of at least one percent.

**Parameters:**

| Name | Type |
| ------ | ------ |
| VideoOutput | [ReferenceToken](../modules/_api_types_.md#referencetoken) |
| Layout | [Layout](../interfaces/_api_types_.layout.md) |

**Returns:** `Observable`<`IResult`<`any`, [ITransportPayloadXml](../interfaces/_soap_request_.itransportpayloadxml.md)>>

___
<a id="setpaneconfiguration"></a>

###  SetPaneConfiguration

▸ **SetPaneConfiguration**(VideoOutput: *[ReferenceToken](../modules/_api_types_.md#referencetoken)*, PaneConfiguration: *[PaneConfiguration](../interfaces/_api_types_.paneconfiguration.md)*): `Observable`<`IResult`<`any`, [ITransportPayloadXml](../interfaces/_soap_request_.itransportpayloadxml.md)>>

*Defined in [api/display.ts:187](https://github.com/patrickmichalina/onvif-rx/blob/1596479/src/api/display.ts#L187)*

This command changes the configuration of the specified pane (tbd)

**Parameters:**

| Name | Type |
| ------ | ------ |
| VideoOutput | [ReferenceToken](../modules/_api_types_.md#referencetoken) |
| PaneConfiguration | [PaneConfiguration](../interfaces/_api_types_.paneconfiguration.md) |

**Returns:** `Observable`<`IResult`<`any`, [ITransportPayloadXml](../interfaces/_soap_request_.itransportpayloadxml.md)>>

___
<a id="setpaneconfigurations"></a>

###  SetPaneConfigurations

▸ **SetPaneConfigurations**(VideoOutput: *[ReferenceToken](../modules/_api_types_.md#referencetoken)*, PaneConfiguration: *[PaneConfiguration](../interfaces/_api_types_.paneconfiguration.md)*): `Observable`<`IResult`<`any`, [ITransportPayloadXml](../interfaces/_soap_request_.itransportpayloadxml.md)>>

*Defined in [api/display.ts:180](https://github.com/patrickmichalina/onvif-rx/blob/1596479/src/api/display.ts#L180)*

Modify one or more configurations of the specified video output. This method will only modify the provided configurations and leave the others unchanged. Use DeletePaneConfiguration to remove pane configurations.

**Parameters:**

| Name | Type |
| ------ | ------ |
| VideoOutput | [ReferenceToken](../modules/_api_types_.md#referencetoken) |
| PaneConfiguration | [PaneConfiguration](../interfaces/_api_types_.paneconfiguration.md) |

**Returns:** `Observable`<`IResult`<`any`, [ITransportPayloadXml](../interfaces/_soap_request_.itransportpayloadxml.md)>>

___
<a id="createpaneconfiguration-1"></a>

### `<Static>` CreatePaneConfiguration

▸ **CreatePaneConfiguration**(VideoOutput: *[ReferenceToken](../modules/_api_types_.md#referencetoken)*, PaneConfiguration: *[PaneConfiguration](../interfaces/_api_types_.paneconfiguration.md)*): `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<`any`, [ITransportPayloadXml](../interfaces/_soap_request_.itransportpayloadxml.md)>>>

*Defined in [api/display.ts:102](https://github.com/patrickmichalina/onvif-rx/blob/1596479/src/api/display.ts#L102)*

Create a new pane configuration describing the streaming and coding settings for a display area. This optional method is only supported by devices that signal support of dynamic pane creation via their capabilities. The content of the Token field may be ignored by the device.

**Parameters:**

| Name | Type |
| ------ | ------ |
| VideoOutput | [ReferenceToken](../modules/_api_types_.md#referencetoken) |
| PaneConfiguration | [PaneConfiguration](../interfaces/_api_types_.paneconfiguration.md) |

**Returns:** `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<`any`, [ITransportPayloadXml](../interfaces/_soap_request_.itransportpayloadxml.md)>>>

___
<a id="deletepaneconfiguration-1"></a>

### `<Static>` DeletePaneConfiguration

▸ **DeletePaneConfiguration**(VideoOutput: *[ReferenceToken](../modules/_api_types_.md#referencetoken)*, PaneToken: *[ReferenceToken](../modules/_api_types_.md#referencetoken)*): `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<`any`, [ITransportPayloadXml](../interfaces/_soap_request_.itransportpayloadxml.md)>>>

*Defined in [api/display.ts:114](https://github.com/patrickmichalina/onvif-rx/blob/1596479/src/api/display.ts#L114)*

Delete a pane configuration. A service must respond with an error if the pane configuration is in use by the current layout. This optional method is only supported by devices that signal support of dynamic pane creation via their capabilities.

**Parameters:**

| Name | Type |
| ------ | ------ |
| VideoOutput | [ReferenceToken](../modules/_api_types_.md#referencetoken) |
| PaneToken | [ReferenceToken](../modules/_api_types_.md#referencetoken) |

**Returns:** `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<`any`, [ITransportPayloadXml](../interfaces/_soap_request_.itransportpayloadxml.md)>>>

___
<a id="getdisplayoptions-1"></a>

### `<Static>` GetDisplayOptions

▸ **GetDisplayOptions**(VideoOutput: *[ReferenceToken](../modules/_api_types_.md#referencetoken)*): `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<`any`, [ITransportPayloadXml](../interfaces/_soap_request_.itransportpayloadxml.md)>>>

*Defined in [api/display.ts:48](https://github.com/patrickmichalina/onvif-rx/blob/1596479/src/api/display.ts#L48)*

The Display Options contain the supported layouts (LayoutOptions) and the decoding and encoding capabilities (CodingCapabilities) of the device. The GetDisplayOptions command returns both, Layout and Coding Capabilities, of a VideoOutput.

**Parameters:**

| Name | Type |
| ------ | ------ |
| VideoOutput | [ReferenceToken](../modules/_api_types_.md#referencetoken) |

**Returns:** `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<`any`, [ITransportPayloadXml](../interfaces/_soap_request_.itransportpayloadxml.md)>>>

___
<a id="getlayout-1"></a>

### `<Static>` GetLayout

▸ **GetLayout**(VideoOutput: *[ReferenceToken](../modules/_api_types_.md#referencetoken)*): `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<`any`, [ITransportPayloadXml](../interfaces/_soap_request_.itransportpayloadxml.md)>>>

*Defined in [api/display.ts:23](https://github.com/patrickmichalina/onvif-rx/blob/1596479/src/api/display.ts#L23)*

Return the current layout of a video output. The Layout assigns a pane configuration to a certain area of the display. The layout settings directly affect a specific video output. The layout consists of a list of PaneConfigurations and their associated display areas.

**Parameters:**

| Name | Type |
| ------ | ------ |
| VideoOutput | [ReferenceToken](../modules/_api_types_.md#referencetoken) |

**Returns:** `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<`any`, [ITransportPayloadXml](../interfaces/_soap_request_.itransportpayloadxml.md)>>>

___
<a id="getpaneconfiguration-1"></a>

### `<Static>` GetPaneConfiguration

▸ **GetPaneConfiguration**(VideoOutput: *[ReferenceToken](../modules/_api_types_.md#referencetoken)*, Pane: *[ReferenceToken](../modules/_api_types_.md#referencetoken)*): `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<`any`, [ITransportPayloadXml](../interfaces/_soap_request_.itransportpayloadxml.md)>>>

*Defined in [api/display.ts:70](https://github.com/patrickmichalina/onvif-rx/blob/1596479/src/api/display.ts#L70)*

Retrieve the pane configuration for a pane token.

**Parameters:**

| Name | Type |
| ------ | ------ |
| VideoOutput | [ReferenceToken](../modules/_api_types_.md#referencetoken) |
| Pane | [ReferenceToken](../modules/_api_types_.md#referencetoken) |

**Returns:** `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<`any`, [ITransportPayloadXml](../interfaces/_soap_request_.itransportpayloadxml.md)>>>

___
<a id="getpaneconfigurations-1"></a>

### `<Static>` GetPaneConfigurations

▸ **GetPaneConfigurations**(VideoOutput: *[ReferenceToken](../modules/_api_types_.md#referencetoken)*): `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<`any`, [ITransportPayloadXml](../interfaces/_soap_request_.itransportpayloadxml.md)>>>

*Defined in [api/display.ts:61](https://github.com/patrickmichalina/onvif-rx/blob/1596479/src/api/display.ts#L61)*

List all currently defined panes of a device for a specified video output (regardless if this pane is visible at a moment). A Pane is a display area on the monitor that is attached to a video output. A pane has a PaneConfiguration that describes which entities are associated with the pane. A client has to configure the pane according to the connection to be established by setting the AudioOutput and/or AudioSourceToken. If a Token is not set, the corresponding session will not be established.

**Parameters:**

| Name | Type |
| ------ | ------ |
| VideoOutput | [ReferenceToken](../modules/_api_types_.md#referencetoken) |

**Returns:** `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<`any`, [ITransportPayloadXml](../interfaces/_soap_request_.itransportpayloadxml.md)>>>

___
<a id="getservicecapabilities-1"></a>

### `<Static>` GetServiceCapabilities

▸ **GetServiceCapabilities**(): `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<`any`, [ITransportPayloadXml](../interfaces/_soap_request_.itransportpayloadxml.md)>>>

*Defined in [api/display.ts:12](https://github.com/patrickmichalina/onvif-rx/blob/1596479/src/api/display.ts#L12)*

Returns the capabilities of the display service. The result is returned in a typed answer.

**Returns:** `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<`any`, [ITransportPayloadXml](../interfaces/_soap_request_.itransportpayloadxml.md)>>>

___
<a id="setlayout-1"></a>

### `<Static>` SetLayout

▸ **SetLayout**(VideoOutput: *[ReferenceToken](../modules/_api_types_.md#referencetoken)*, Layout: *[Layout](../interfaces/_api_types_.layout.md)*): `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<`any`, [ITransportPayloadXml](../interfaces/_soap_request_.itransportpayloadxml.md)>>>

*Defined in [api/display.ts:37](https://github.com/patrickmichalina/onvif-rx/blob/1596479/src/api/display.ts#L37)*

Change the layout of a display (e.g. change from single view to split screen view).The Layout assigns a pane configuration to a certain area of the display. The layout settings directly affect a specific video output. The layout consists of a list of PaneConfigurations and their associated display areas. A device implementation shall be tolerant against rounding errors when matching a layout against its fixed set of layouts by accepting differences of at least one percent.

**Parameters:**

| Name | Type |
| ------ | ------ |
| VideoOutput | [ReferenceToken](../modules/_api_types_.md#referencetoken) |
| Layout | [Layout](../interfaces/_api_types_.layout.md) |

**Returns:** `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<`any`, [ITransportPayloadXml](../interfaces/_soap_request_.itransportpayloadxml.md)>>>

___
<a id="setpaneconfiguration-1"></a>

### `<Static>` SetPaneConfiguration

▸ **SetPaneConfiguration**(VideoOutput: *[ReferenceToken](../modules/_api_types_.md#referencetoken)*, PaneConfiguration: *[PaneConfiguration](../interfaces/_api_types_.paneconfiguration.md)*): `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<`any`, [ITransportPayloadXml](../interfaces/_soap_request_.itransportpayloadxml.md)>>>

*Defined in [api/display.ts:90](https://github.com/patrickmichalina/onvif-rx/blob/1596479/src/api/display.ts#L90)*

This command changes the configuration of the specified pane (tbd)

**Parameters:**

| Name | Type |
| ------ | ------ |
| VideoOutput | [ReferenceToken](../modules/_api_types_.md#referencetoken) |
| PaneConfiguration | [PaneConfiguration](../interfaces/_api_types_.paneconfiguration.md) |

**Returns:** `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<`any`, [ITransportPayloadXml](../interfaces/_soap_request_.itransportpayloadxml.md)>>>

___
<a id="setpaneconfigurations-1"></a>

### `<Static>` SetPaneConfigurations

▸ **SetPaneConfigurations**(VideoOutput: *[ReferenceToken](../modules/_api_types_.md#referencetoken)*, PaneConfiguration: *[PaneConfiguration](../interfaces/_api_types_.paneconfiguration.md)*): `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<`any`, [ITransportPayloadXml](../interfaces/_soap_request_.itransportpayloadxml.md)>>>

*Defined in [api/display.ts:81](https://github.com/patrickmichalina/onvif-rx/blob/1596479/src/api/display.ts#L81)*

Modify one or more configurations of the specified video output. This method will only modify the provided configurations and leave the others unchanged. Use DeletePaneConfiguration to remove pane configurations.

**Parameters:**

| Name | Type |
| ------ | ------ |
| VideoOutput | [ReferenceToken](../modules/_api_types_.md#referencetoken) |
| PaneConfiguration | [PaneConfiguration](../interfaces/_api_types_.paneconfiguration.md) |

**Returns:** `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<`any`, [ITransportPayloadXml](../interfaces/_soap_request_.itransportpayloadxml.md)>>>

___

