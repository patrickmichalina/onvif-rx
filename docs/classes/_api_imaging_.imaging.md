[onvif-rx](../README.md) > ["api/imaging"](../modules/_api_imaging_.md) > [Imaging](../classes/_api_imaging_.imaging.md)

# Class: Imaging

## Hierarchy

**Imaging**

## Index

### Constructors

* [constructor](_api_imaging_.imaging.md#constructor)

### Properties

* [config](_api_imaging_.imaging.md#config)

### Methods

* [GetCurrentPreset](_api_imaging_.imaging.md#getcurrentpreset)
* [GetImagingSettings](_api_imaging_.imaging.md#getimagingsettings)
* [GetMoveOptions](_api_imaging_.imaging.md#getmoveoptions)
* [GetOptions](_api_imaging_.imaging.md#getoptions)
* [GetPresets](_api_imaging_.imaging.md#getpresets)
* [GetServiceCapabilities](_api_imaging_.imaging.md#getservicecapabilities)
* [GetStatus](_api_imaging_.imaging.md#getstatus)
* [Move](_api_imaging_.imaging.md#move)
* [SetCurrentPreset](_api_imaging_.imaging.md#setcurrentpreset)
* [SetImagingSettings](_api_imaging_.imaging.md#setimagingsettings)
* [Stop](_api_imaging_.imaging.md#stop)
* [GetCurrentPreset](_api_imaging_.imaging.md#getcurrentpreset-1)
* [GetImagingSettings](_api_imaging_.imaging.md#getimagingsettings-1)
* [GetMoveOptions](_api_imaging_.imaging.md#getmoveoptions-1)
* [GetOptions](_api_imaging_.imaging.md#getoptions-1)
* [GetPresets](_api_imaging_.imaging.md#getpresets-1)
* [GetServiceCapabilities](_api_imaging_.imaging.md#getservicecapabilities-1)
* [GetStatus](_api_imaging_.imaging.md#getstatus-1)
* [Move](_api_imaging_.imaging.md#move-1)
* [SetCurrentPreset](_api_imaging_.imaging.md#setcurrentpreset-1)
* [SetImagingSettings](_api_imaging_.imaging.md#setimagingsettings-1)
* [Stop](_api_imaging_.imaging.md#stop-1)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Imaging**(config: *[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md)*): [Imaging](_api_imaging_.imaging.md)

*Defined in [api/imaging.ts:5](https://github.com/patrickmichalina/onvif-rx/blob/1596479/src/api/imaging.ts#L5)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| config | [IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md) |

**Returns:** [Imaging](_api_imaging_.imaging.md)

___

## Properties

<a id="config"></a>

### `<Private>` config

**● config**: *[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md)*

*Defined in [api/imaging.ts:6](https://github.com/patrickmichalina/onvif-rx/blob/1596479/src/api/imaging.ts#L6)*

___

## Methods

<a id="getcurrentpreset"></a>

###  GetCurrentPreset

▸ **GetCurrentPreset**(VideoSourceToken: *[ReferenceToken](../modules/_api_types_.md#referencetoken)*): `Observable`<`IResult`<`any`, [ITransportPayloadXml](../interfaces/_soap_request_.itransportpayloadxml.md)>>

*Defined in [api/imaging.ts:209](https://github.com/patrickmichalina/onvif-rx/blob/1596479/src/api/imaging.ts#L209)*

Via this command the last Imaging Preset applied can be requested. If the camera configuration does not match any of the existing Imaging Presets, the output of GetCurrentPreset shall be Empty. GetCurrentPreset shall return 0 if Imaging Presets are not supported by the Video Source.

**Parameters:**

| Name | Type |
| ------ | ------ |
| VideoSourceToken | [ReferenceToken](../modules/_api_types_.md#referencetoken) |

**Returns:** `Observable`<`IResult`<`any`, [ITransportPayloadXml](../interfaces/_soap_request_.itransportpayloadxml.md)>>

___
<a id="getimagingsettings"></a>

###  GetImagingSettings

▸ **GetImagingSettings**(VideoSourceToken: *[ReferenceToken](../modules/_api_types_.md#referencetoken)*): `Observable`<`IResult`<`any`, [ITransportPayloadXml](../interfaces/_soap_request_.itransportpayloadxml.md)>>

*Defined in [api/imaging.ts:137](https://github.com/patrickmichalina/onvif-rx/blob/1596479/src/api/imaging.ts#L137)*

Get the ImagingConfiguration for the requested VideoSource.

**Parameters:**

| Name | Type |
| ------ | ------ |
| VideoSourceToken | [ReferenceToken](../modules/_api_types_.md#referencetoken) |

**Returns:** `Observable`<`IResult`<`any`, [ITransportPayloadXml](../interfaces/_soap_request_.itransportpayloadxml.md)>>

___
<a id="getmoveoptions"></a>

###  GetMoveOptions

▸ **GetMoveOptions**(VideoSourceToken: *[ReferenceToken](../modules/_api_types_.md#referencetoken)*): `Observable`<`IResult`<`any`, [ITransportPayloadXml](../interfaces/_soap_request_.itransportpayloadxml.md)>>

*Defined in [api/imaging.ts:178](https://github.com/patrickmichalina/onvif-rx/blob/1596479/src/api/imaging.ts#L178)*

Imaging move operation options supported for the Video source.

**Parameters:**

| Name | Type |
| ------ | ------ |
| VideoSourceToken | [ReferenceToken](../modules/_api_types_.md#referencetoken) |

**Returns:** `Observable`<`IResult`<`any`, [ITransportPayloadXml](../interfaces/_soap_request_.itransportpayloadxml.md)>>

___
<a id="getoptions"></a>

###  GetOptions

▸ **GetOptions**(VideoSourceToken: *[ReferenceToken](../modules/_api_types_.md#referencetoken)*): `Observable`<`IResult`<`any`, [ITransportPayloadXml](../interfaces/_soap_request_.itransportpayloadxml.md)>>

*Defined in [api/imaging.ts:155](https://github.com/patrickmichalina/onvif-rx/blob/1596479/src/api/imaging.ts#L155)*

This operation gets the valid ranges for the imaging parameters that have device specific ranges. This command is mandatory for all device implementing the imaging service. The command returns all supported parameters and their ranges such that these can be applied to the SetImagingSettings command. For read-only parameters which cannot be modified via the SetImagingSettings command only a single option or identical Min and Max values is provided.

**Parameters:**

| Name | Type |
| ------ | ------ |
| VideoSourceToken | [ReferenceToken](../modules/_api_types_.md#referencetoken) |

**Returns:** `Observable`<`IResult`<`any`, [ITransportPayloadXml](../interfaces/_soap_request_.itransportpayloadxml.md)>>

___
<a id="getpresets"></a>

###  GetPresets

▸ **GetPresets**(VideoSourceToken: *[ReferenceToken](../modules/_api_types_.md#referencetoken)*): `Observable`<`IResult`<`any`, [ITransportPayloadXml](../interfaces/_soap_request_.itransportpayloadxml.md)>>

*Defined in [api/imaging.ts:200](https://github.com/patrickmichalina/onvif-rx/blob/1596479/src/api/imaging.ts#L200)*

Via this command the list of available Imaging Presets can be requested.

**Parameters:**

| Name | Type |
| ------ | ------ |
| VideoSourceToken | [ReferenceToken](../modules/_api_types_.md#referencetoken) |

**Returns:** `Observable`<`IResult`<`any`, [ITransportPayloadXml](../interfaces/_soap_request_.itransportpayloadxml.md)>>

___
<a id="getservicecapabilities"></a>

###  GetServiceCapabilities

▸ **GetServiceCapabilities**(): `Observable`<`IResult`<`any`, [ITransportPayloadXml](../interfaces/_soap_request_.itransportpayloadxml.md)>>

*Defined in [api/imaging.ts:130](https://github.com/patrickmichalina/onvif-rx/blob/1596479/src/api/imaging.ts#L130)*

Returns the capabilities of the imaging service. The result is returned in a typed answer.

**Returns:** `Observable`<`IResult`<`any`, [ITransportPayloadXml](../interfaces/_soap_request_.itransportpayloadxml.md)>>

___
<a id="getstatus"></a>

###  GetStatus

▸ **GetStatus**(VideoSourceToken: *[ReferenceToken](../modules/_api_types_.md#referencetoken)*): `Observable`<`IResult`<`any`, [ITransportPayloadXml](../interfaces/_soap_request_.itransportpayloadxml.md)>>

*Defined in [api/imaging.ts:193](https://github.com/patrickmichalina/onvif-rx/blob/1596479/src/api/imaging.ts#L193)*

Via this command the current status of the Move operation can be requested. Supported for this command is available if the support for the Move operation is signalled via GetMoveOptions.

**Parameters:**

| Name | Type |
| ------ | ------ |
| VideoSourceToken | [ReferenceToken](../modules/_api_types_.md#referencetoken) |

**Returns:** `Observable`<`IResult`<`any`, [ITransportPayloadXml](../interfaces/_soap_request_.itransportpayloadxml.md)>>

___
<a id="move"></a>

###  Move

▸ **Move**(VideoSourceToken: *[ReferenceToken](../modules/_api_types_.md#referencetoken)*, Focus: *[FocusMove](../interfaces/_api_types_.focusmove.md)*): `Observable`<`IResult`<`any`, [ITransportPayloadXml](../interfaces/_soap_request_.itransportpayloadxml.md)>>

*Defined in [api/imaging.ts:171](https://github.com/patrickmichalina/onvif-rx/blob/1596479/src/api/imaging.ts#L171)*

The Move command moves the focus lens in an absolute, a relative or in a continuous manner from its current position. The speed argument is optional for absolute and relative control, but required for continuous. If no speed argument is used, the default speed is used. Focus adjustments through this operation will turn off the autofocus. A device with support for remote focus control should support absolute, relative or continuous control through the Move operation. The supported MoveOpions are signalled via the GetMoveOptions command. At least one focus control capability is required for this operation to be functional. The move operation contains the following commands: Absolute – Requires position parameter and optionally takes a speed argument. A unitless type is used by default for focus positioning and speed. Optionally, if supported, the position may be requested in m-1 units. Relative – Requires distance parameter and optionally takes a speed argument. Negative distance means negative direction. Continuous – Requires a speed argument. Negative speed argument means negative direction.

**Parameters:**

| Name | Type |
| ------ | ------ |
| VideoSourceToken | [ReferenceToken](../modules/_api_types_.md#referencetoken) |
| Focus | [FocusMove](../interfaces/_api_types_.focusmove.md) |

**Returns:** `Observable`<`IResult`<`any`, [ITransportPayloadXml](../interfaces/_soap_request_.itransportpayloadxml.md)>>

___
<a id="setcurrentpreset"></a>

###  SetCurrentPreset

▸ **SetCurrentPreset**(VideoSourceToken: *[ReferenceToken](../modules/_api_types_.md#referencetoken)*, PresetToken: *[ReferenceToken](../modules/_api_types_.md#referencetoken)*): `Observable`<`IResult`<`any`, [ITransportPayloadXml](../interfaces/_soap_request_.itransportpayloadxml.md)>>

*Defined in [api/imaging.ts:219](https://github.com/patrickmichalina/onvif-rx/blob/1596479/src/api/imaging.ts#L219)*

The SetCurrentPreset command shall request a given Imaging Preset to be applied to the specified Video Source. SetCurrentPreset shall only be available for Video Sources with Imaging Presets Capability. Imaging Presets are defined by the Manufacturer, and offered as a tool to simplify Imaging Settings adjustments for specific scene content. When the new Imaging Preset is applied by SetCurrentPreset, the Device shall adjust the Video Source settings to match those defined by the specified Imaging Preset.

**Parameters:**

| Name | Type |
| ------ | ------ |
| VideoSourceToken | [ReferenceToken](../modules/_api_types_.md#referencetoken) |
| PresetToken | [ReferenceToken](../modules/_api_types_.md#referencetoken) |

**Returns:** `Observable`<`IResult`<`any`, [ITransportPayloadXml](../interfaces/_soap_request_.itransportpayloadxml.md)>>

___
<a id="setimagingsettings"></a>

###  SetImagingSettings

▸ **SetImagingSettings**(VideoSourceToken: *[ReferenceToken](../modules/_api_types_.md#referencetoken)*, ImagingSettings: *[ImagingSettings20](../interfaces/_api_types_.imagingsettings20.md)*, ForcePersistence: *`boolean`*): `Observable`<`IResult`<`any`, [ITransportPayloadXml](../interfaces/_soap_request_.itransportpayloadxml.md)>>

*Defined in [api/imaging.ts:144](https://github.com/patrickmichalina/onvif-rx/blob/1596479/src/api/imaging.ts#L144)*

Set the ImagingConfiguration for the requested VideoSource.

**Parameters:**

| Name | Type |
| ------ | ------ |
| VideoSourceToken | [ReferenceToken](../modules/_api_types_.md#referencetoken) |
| ImagingSettings | [ImagingSettings20](../interfaces/_api_types_.imagingsettings20.md) |
| ForcePersistence | `boolean` |

**Returns:** `Observable`<`IResult`<`any`, [ITransportPayloadXml](../interfaces/_soap_request_.itransportpayloadxml.md)>>

___
<a id="stop"></a>

###  Stop

▸ **Stop**(VideoSourceToken: *[ReferenceToken](../modules/_api_types_.md#referencetoken)*): `Observable`<`IResult`<`any`, [ITransportPayloadXml](../interfaces/_soap_request_.itransportpayloadxml.md)>>

*Defined in [api/imaging.ts:186](https://github.com/patrickmichalina/onvif-rx/blob/1596479/src/api/imaging.ts#L186)*

The Stop command stops all ongoing focus movements of the lense. A device with support for remote focus control as signalled via the GetMoveOptions supports this command. The operation will not affect ongoing autofocus operation.

**Parameters:**

| Name | Type |
| ------ | ------ |
| VideoSourceToken | [ReferenceToken](../modules/_api_types_.md#referencetoken) |

**Returns:** `Observable`<`IResult`<`any`, [ITransportPayloadXml](../interfaces/_soap_request_.itransportpayloadxml.md)>>

___
<a id="getcurrentpreset-1"></a>

### `<Static>` GetCurrentPreset

▸ **GetCurrentPreset**(VideoSourceToken: *[ReferenceToken](../modules/_api_types_.md#referencetoken)*): `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<`any`, [ITransportPayloadXml](../interfaces/_soap_request_.itransportpayloadxml.md)>>>

*Defined in [api/imaging.ts:109](https://github.com/patrickmichalina/onvif-rx/blob/1596479/src/api/imaging.ts#L109)*

Via this command the last Imaging Preset applied can be requested. If the camera configuration does not match any of the existing Imaging Presets, the output of GetCurrentPreset shall be Empty. GetCurrentPreset shall return 0 if Imaging Presets are not supported by the Video Source.

**Parameters:**

| Name | Type |
| ------ | ------ |
| VideoSourceToken | [ReferenceToken](../modules/_api_types_.md#referencetoken) |

**Returns:** `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<`any`, [ITransportPayloadXml](../interfaces/_soap_request_.itransportpayloadxml.md)>>>

___
<a id="getimagingsettings-1"></a>

### `<Static>` GetImagingSettings

▸ **GetImagingSettings**(VideoSourceToken: *[ReferenceToken](../modules/_api_types_.md#referencetoken)*): `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<`any`, [ITransportPayloadXml](../interfaces/_soap_request_.itransportpayloadxml.md)>>>

*Defined in [api/imaging.ts:21](https://github.com/patrickmichalina/onvif-rx/blob/1596479/src/api/imaging.ts#L21)*

Get the ImagingConfiguration for the requested VideoSource.

**Parameters:**

| Name | Type |
| ------ | ------ |
| VideoSourceToken | [ReferenceToken](../modules/_api_types_.md#referencetoken) |

**Returns:** `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<`any`, [ITransportPayloadXml](../interfaces/_soap_request_.itransportpayloadxml.md)>>>

___
<a id="getmoveoptions-1"></a>

### `<Static>` GetMoveOptions

▸ **GetMoveOptions**(VideoSourceToken: *[ReferenceToken](../modules/_api_types_.md#referencetoken)*): `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<`any`, [ITransportPayloadXml](../interfaces/_soap_request_.itransportpayloadxml.md)>>>

*Defined in [api/imaging.ts:70](https://github.com/patrickmichalina/onvif-rx/blob/1596479/src/api/imaging.ts#L70)*

Imaging move operation options supported for the Video source.

**Parameters:**

| Name | Type |
| ------ | ------ |
| VideoSourceToken | [ReferenceToken](../modules/_api_types_.md#referencetoken) |

**Returns:** `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<`any`, [ITransportPayloadXml](../interfaces/_soap_request_.itransportpayloadxml.md)>>>

___
<a id="getoptions-1"></a>

### `<Static>` GetOptions

▸ **GetOptions**(VideoSourceToken: *[ReferenceToken](../modules/_api_types_.md#referencetoken)*): `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<`any`, [ITransportPayloadXml](../interfaces/_soap_request_.itransportpayloadxml.md)>>>

*Defined in [api/imaging.ts:43](https://github.com/patrickmichalina/onvif-rx/blob/1596479/src/api/imaging.ts#L43)*

This operation gets the valid ranges for the imaging parameters that have device specific ranges. This command is mandatory for all device implementing the imaging service. The command returns all supported parameters and their ranges such that these can be applied to the SetImagingSettings command. For read-only parameters which cannot be modified via the SetImagingSettings command only a single option or identical Min and Max values is provided.

**Parameters:**

| Name | Type |
| ------ | ------ |
| VideoSourceToken | [ReferenceToken](../modules/_api_types_.md#referencetoken) |

**Returns:** `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<`any`, [ITransportPayloadXml](../interfaces/_soap_request_.itransportpayloadxml.md)>>>

___
<a id="getpresets-1"></a>

### `<Static>` GetPresets

▸ **GetPresets**(VideoSourceToken: *[ReferenceToken](../modules/_api_types_.md#referencetoken)*): `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<`any`, [ITransportPayloadXml](../interfaces/_soap_request_.itransportpayloadxml.md)>>>

*Defined in [api/imaging.ts:98](https://github.com/patrickmichalina/onvif-rx/blob/1596479/src/api/imaging.ts#L98)*

Via this command the list of available Imaging Presets can be requested.

**Parameters:**

| Name | Type |
| ------ | ------ |
| VideoSourceToken | [ReferenceToken](../modules/_api_types_.md#referencetoken) |

**Returns:** `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<`any`, [ITransportPayloadXml](../interfaces/_soap_request_.itransportpayloadxml.md)>>>

___
<a id="getservicecapabilities-1"></a>

### `<Static>` GetServiceCapabilities

▸ **GetServiceCapabilities**(): `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<`any`, [ITransportPayloadXml](../interfaces/_soap_request_.itransportpayloadxml.md)>>>

*Defined in [api/imaging.ts:12](https://github.com/patrickmichalina/onvif-rx/blob/1596479/src/api/imaging.ts#L12)*

Returns the capabilities of the imaging service. The result is returned in a typed answer.

**Returns:** `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<`any`, [ITransportPayloadXml](../interfaces/_soap_request_.itransportpayloadxml.md)>>>

___
<a id="getstatus-1"></a>

### `<Static>` GetStatus

▸ **GetStatus**(VideoSourceToken: *[ReferenceToken](../modules/_api_types_.md#referencetoken)*): `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<`any`, [ITransportPayloadXml](../interfaces/_soap_request_.itransportpayloadxml.md)>>>

*Defined in [api/imaging.ts:89](https://github.com/patrickmichalina/onvif-rx/blob/1596479/src/api/imaging.ts#L89)*

Via this command the current status of the Move operation can be requested. Supported for this command is available if the support for the Move operation is signalled via GetMoveOptions.

**Parameters:**

| Name | Type |
| ------ | ------ |
| VideoSourceToken | [ReferenceToken](../modules/_api_types_.md#referencetoken) |

**Returns:** `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<`any`, [ITransportPayloadXml](../interfaces/_soap_request_.itransportpayloadxml.md)>>>

___
<a id="move-1"></a>

### `<Static>` Move

▸ **Move**(VideoSourceToken: *[ReferenceToken](../modules/_api_types_.md#referencetoken)*, Focus: *[FocusMove](../interfaces/_api_types_.focusmove.md)*): `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<`any`, [ITransportPayloadXml](../interfaces/_soap_request_.itransportpayloadxml.md)>>>

*Defined in [api/imaging.ts:61](https://github.com/patrickmichalina/onvif-rx/blob/1596479/src/api/imaging.ts#L61)*

The Move command moves the focus lens in an absolute, a relative or in a continuous manner from its current position. The speed argument is optional for absolute and relative control, but required for continuous. If no speed argument is used, the default speed is used. Focus adjustments through this operation will turn off the autofocus. A device with support for remote focus control should support absolute, relative or continuous control through the Move operation. The supported MoveOpions are signalled via the GetMoveOptions command. At least one focus control capability is required for this operation to be functional. The move operation contains the following commands: Absolute – Requires position parameter and optionally takes a speed argument. A unitless type is used by default for focus positioning and speed. Optionally, if supported, the position may be requested in m-1 units. Relative – Requires distance parameter and optionally takes a speed argument. Negative distance means negative direction. Continuous – Requires a speed argument. Negative speed argument means negative direction.

**Parameters:**

| Name | Type |
| ------ | ------ |
| VideoSourceToken | [ReferenceToken](../modules/_api_types_.md#referencetoken) |
| Focus | [FocusMove](../interfaces/_api_types_.focusmove.md) |

**Returns:** `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<`any`, [ITransportPayloadXml](../interfaces/_soap_request_.itransportpayloadxml.md)>>>

___
<a id="setcurrentpreset-1"></a>

### `<Static>` SetCurrentPreset

▸ **SetCurrentPreset**(VideoSourceToken: *[ReferenceToken](../modules/_api_types_.md#referencetoken)*, PresetToken: *[ReferenceToken](../modules/_api_types_.md#referencetoken)*): `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<`any`, [ITransportPayloadXml](../interfaces/_soap_request_.itransportpayloadxml.md)>>>

*Defined in [api/imaging.ts:121](https://github.com/patrickmichalina/onvif-rx/blob/1596479/src/api/imaging.ts#L121)*

The SetCurrentPreset command shall request a given Imaging Preset to be applied to the specified Video Source. SetCurrentPreset shall only be available for Video Sources with Imaging Presets Capability. Imaging Presets are defined by the Manufacturer, and offered as a tool to simplify Imaging Settings adjustments for specific scene content. When the new Imaging Preset is applied by SetCurrentPreset, the Device shall adjust the Video Source settings to match those defined by the specified Imaging Preset.

**Parameters:**

| Name | Type |
| ------ | ------ |
| VideoSourceToken | [ReferenceToken](../modules/_api_types_.md#referencetoken) |
| PresetToken | [ReferenceToken](../modules/_api_types_.md#referencetoken) |

**Returns:** `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<`any`, [ITransportPayloadXml](../interfaces/_soap_request_.itransportpayloadxml.md)>>>

___
<a id="setimagingsettings-1"></a>

### `<Static>` SetImagingSettings

▸ **SetImagingSettings**(VideoSourceToken: *[ReferenceToken](../modules/_api_types_.md#referencetoken)*, ImagingSettings: *[ImagingSettings20](../interfaces/_api_types_.imagingsettings20.md)*, ForcePersistence?: *`undefined` \| `false` \| `true`*): `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<`any`, [ITransportPayloadXml](../interfaces/_soap_request_.itransportpayloadxml.md)>>>

*Defined in [api/imaging.ts:30](https://github.com/patrickmichalina/onvif-rx/blob/1596479/src/api/imaging.ts#L30)*

Set the ImagingConfiguration for the requested VideoSource.

**Parameters:**

| Name | Type |
| ------ | ------ |
| VideoSourceToken | [ReferenceToken](../modules/_api_types_.md#referencetoken) |
| ImagingSettings | [ImagingSettings20](../interfaces/_api_types_.imagingsettings20.md) |
| `Optional` ForcePersistence | `undefined` \| `false` \| `true` |

**Returns:** `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<`any`, [ITransportPayloadXml](../interfaces/_soap_request_.itransportpayloadxml.md)>>>

___
<a id="stop-1"></a>

### `<Static>` Stop

▸ **Stop**(VideoSourceToken: *[ReferenceToken](../modules/_api_types_.md#referencetoken)*): `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<`any`, [ITransportPayloadXml](../interfaces/_soap_request_.itransportpayloadxml.md)>>>

*Defined in [api/imaging.ts:80](https://github.com/patrickmichalina/onvif-rx/blob/1596479/src/api/imaging.ts#L80)*

The Stop command stops all ongoing focus movements of the lense. A device with support for remote focus control as signalled via the GetMoveOptions supports this command. The operation will not affect ongoing autofocus operation.

**Parameters:**

| Name | Type |
| ------ | ------ |
| VideoSourceToken | [ReferenceToken](../modules/_api_types_.md#referencetoken) |

**Returns:** `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<`any`, [ITransportPayloadXml](../interfaces/_soap_request_.itransportpayloadxml.md)>>>

___

