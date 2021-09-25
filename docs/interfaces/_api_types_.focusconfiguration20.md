[onvif-rx](../README.md) › ["api/types"](../modules/_api_types_.md) › [FocusConfiguration20](_api_types_.focusconfiguration20.md)

# Interface: FocusConfiguration20

Mode of auto focus.

							AUTO - The device automatically adjusts focus.
							MANUAL - The device does not automatically adjust focus.

						Note: for devices supporting both manual and auto operation at the same time manual operation may be supported even if the Mode parameter is set to Auto.

## Hierarchy

* **FocusConfiguration20**

## Index

### Properties

* [AutoFocusMode](_api_types_.focusconfiguration20.md#readonly-autofocusmode)
* [DefaultSpeed](_api_types_.focusconfiguration20.md#optional-readonly-defaultspeed)
* [Extension](_api_types_.focusconfiguration20.md#optional-readonly-extension)
* [FarLimit](_api_types_.focusconfiguration20.md#optional-readonly-farlimit)
* [NearLimit](_api_types_.focusconfiguration20.md#optional-readonly-nearlimit)

## Properties

### `Readonly` AutoFocusMode

• **AutoFocusMode**: *[AutoFocusMode](../enums/_api_types_.autofocusmode.md)*

*Defined in [api/types.ts:3218](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L3218)*

___

### `Optional` `Readonly` DefaultSpeed

• **DefaultSpeed**? : *undefined | number*

*Defined in [api/types.ts:3219](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L3219)*

___

### `Optional` `Readonly` Extension

• **Extension**? : *[FocusConfiguration20Extension](_api_types_.focusconfiguration20extension.md)*

*Defined in [api/types.ts:3222](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L3222)*

___

### `Optional` `Readonly` FarLimit

• **FarLimit**? : *undefined | number*

*Defined in [api/types.ts:3221](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L3221)*

___

### `Optional` `Readonly` NearLimit

• **NearLimit**? : *undefined | number*

*Defined in [api/types.ts:3220](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L3220)*
