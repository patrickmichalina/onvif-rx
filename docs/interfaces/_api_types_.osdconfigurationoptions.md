[onvif-rx](../README.md) › ["api/types"](../modules/_api_types_.md) › [OSDConfigurationOptions](_api_types_.osdconfigurationoptions.md)

# Interface: OSDConfigurationOptions

The maximum number of OSD configurations supported for the specified video source configuration. If the configuration does not support OSDs, this value shall be zero and the Type and PositionOption elements are ignored. If a device limits the number of instances by OSDType, it shall indicate the supported number for each type via the related attribute.

## Hierarchy

* **OSDConfigurationOptions**

## Index

### Properties

* [Extension](_api_types_.osdconfigurationoptions.md#optional-readonly-extension)
* [ImageOption](_api_types_.osdconfigurationoptions.md#optional-readonly-imageoption)
* [MaximumNumberOfOSDs](_api_types_.osdconfigurationoptions.md#readonly-maximumnumberofosds)
* [PositionOption](_api_types_.osdconfigurationoptions.md#readonly-positionoption)
* [TextOption](_api_types_.osdconfigurationoptions.md#optional-readonly-textoption)
* [Type](_api_types_.osdconfigurationoptions.md#readonly-type)

## Properties

### `Optional` `Readonly` Extension

• **Extension**? : *[OSDConfigurationOptionsExtension](_api_types_.osdconfigurationoptionsextension.md)*

*Defined in [api/types.ts:4316](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L4316)*

___

### `Optional` `Readonly` ImageOption

• **ImageOption**? : *[OSDImgOptions](_api_types_.osdimgoptions.md)*

*Defined in [api/types.ts:4315](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L4315)*

___

### `Readonly` MaximumNumberOfOSDs

• **MaximumNumberOfOSDs**: *[MaximumNumberOfOSDs](_api_types_.maximumnumberofosds.md)*

*Defined in [api/types.ts:4311](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L4311)*

___

### `Readonly` PositionOption

• **PositionOption**: *string*

*Defined in [api/types.ts:4313](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L4313)*

___

### `Optional` `Readonly` TextOption

• **TextOption**? : *[OSDTextOptions](_api_types_.osdtextoptions.md)*

*Defined in [api/types.ts:4314](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L4314)*

___

### `Readonly` Type

• **Type**: *[OSDType](../enums/_api_types_.osdtype.md)*

*Defined in [api/types.ts:4312](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L4312)*
