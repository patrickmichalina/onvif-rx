[onvif-rx](../README.md) › ["api/types"](../modules/_api_types_.md) › [VideoSourceConfigurationOptions](_api_types_.videosourceconfigurationoptions.md)

# Interface: VideoSourceConfigurationOptions

Supported range for the capturing area.
						Device that does not support cropped streaming shall express BoundsRange option as mentioned below
						BoundsRange->XRange and BoundsRange->YRange with same Min/Max values HeightRange and WidthRange Min/Max values same as VideoSource Height and Width Limits.

## Hierarchy

* **VideoSourceConfigurationOptions**

## Index

### Properties

* [BoundsRange](_api_types_.videosourceconfigurationoptions.md#readonly-boundsrange)
* [Extension](_api_types_.videosourceconfigurationoptions.md#optional-readonly-extension)
* [VideoSourceTokensAvailable](_api_types_.videosourceconfigurationoptions.md#readonly-videosourcetokensavailable)

## Properties

### `Readonly` BoundsRange

• **BoundsRange**: *[IntRectangleRange](_api_types_.intrectanglerange.md)*

*Defined in [api/types.ts:668](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L668)*

___

### `Optional` `Readonly` Extension

• **Extension**? : *[VideoSourceConfigurationOptionsExtension](_api_types_.videosourceconfigurationoptionsextension.md)*

*Defined in [api/types.ts:670](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L670)*

___

### `Readonly` VideoSourceTokensAvailable

• **VideoSourceTokensAvailable**: *[ReferenceToken](../modules/_api_types_.md#referencetoken)*

*Defined in [api/types.ts:669](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L669)*
