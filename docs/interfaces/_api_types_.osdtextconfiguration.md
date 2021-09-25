[onvif-rx](../README.md) › ["api/types"](../modules/_api_types_.md) › [OSDTextConfiguration](_api_types_.osdtextconfiguration.md)

# Interface: OSDTextConfiguration

The following OSD Text Type are defined:
							Plain - The Plain type means the OSD is shown as a text string which defined in the "PlainText" item.
							Date - The Date type means the OSD is shown as a date, format of which should be present in the "DateFormat" item.
							Time - The Time type means the OSD is shown as a time, format of which should be present in the "TimeFormat" item.
							DateAndTime - The DateAndTime type means the OSD is shown as date and time, format of which should be present in the "DateFormat" and the "TimeFormat" item.

## Hierarchy

* **OSDTextConfiguration**

## Index

### Properties

* [BackgroundColor](_api_types_.osdtextconfiguration.md#optional-readonly-backgroundcolor)
* [DateFormat](_api_types_.osdtextconfiguration.md#optional-readonly-dateformat)
* [Extension](_api_types_.osdtextconfiguration.md#optional-readonly-extension)
* [FontColor](_api_types_.osdtextconfiguration.md#optional-readonly-fontcolor)
* [FontSize](_api_types_.osdtextconfiguration.md#optional-readonly-fontsize)
* [PlainText](_api_types_.osdtextconfiguration.md#optional-readonly-plaintext)
* [TimeFormat](_api_types_.osdtextconfiguration.md#optional-readonly-timeformat)
* [Type](_api_types_.osdtextconfiguration.md#readonly-type)

## Properties

### `Optional` `Readonly` BackgroundColor

• **BackgroundColor**? : *[OSDColor](_api_types_.osdcolor.md)*

*Defined in [api/types.ts:4188](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L4188)*

___

### `Optional` `Readonly` DateFormat

• **DateFormat**? : *undefined | string*

*Defined in [api/types.ts:4184](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L4184)*

___

### `Optional` `Readonly` Extension

• **Extension**? : *[OSDTextConfigurationExtension](_api_types_.osdtextconfigurationextension.md)*

*Defined in [api/types.ts:4190](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L4190)*

___

### `Optional` `Readonly` FontColor

• **FontColor**? : *[OSDColor](_api_types_.osdcolor.md)*

*Defined in [api/types.ts:4187](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L4187)*

___

### `Optional` `Readonly` FontSize

• **FontSize**? : *undefined | number*

*Defined in [api/types.ts:4186](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L4186)*

___

### `Optional` `Readonly` PlainText

• **PlainText**? : *undefined | string*

*Defined in [api/types.ts:4189](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L4189)*

___

### `Optional` `Readonly` TimeFormat

• **TimeFormat**? : *undefined | string*

*Defined in [api/types.ts:4185](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L4185)*

___

### `Readonly` Type

• **Type**: *string*

*Defined in [api/types.ts:4183](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L4183)*
