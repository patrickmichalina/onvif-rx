[onvif-rx](../README.md) > ["api/types"](../modules/_api_types_.md) > [OSDConfigurationOptions](../interfaces/_api_types_.osdconfigurationoptions.md)

# Interface: OSDConfigurationOptions

The maximum number of OSD configurations supported for the specified video source configuration. If the configuration does not support OSDs, this value shall be zero and the Type and PositionOption elements are ignored. If a device limits the number of instances by OSDType, it shall indicate the supported number for each type via the related attribute.

## Hierarchy

**OSDConfigurationOptions**

## Index

### Properties

* [Extension](_api_types_.osdconfigurationoptions.md#extension)
* [ImageOption](_api_types_.osdconfigurationoptions.md#imageoption)
* [MaximumNumberOfOSDs](_api_types_.osdconfigurationoptions.md#maximumnumberofosds)
* [PositionOption](_api_types_.osdconfigurationoptions.md#positionoption)
* [TextOption](_api_types_.osdconfigurationoptions.md#textoption)
* [Type](_api_types_.osdconfigurationoptions.md#type)

---

## Properties

<a id="extension"></a>

### `<Optional>` Extension

**● Extension**: *[OSDConfigurationOptionsExtension](_api_types_.osdconfigurationoptionsextension.md)*

*Defined in [api/types.ts:4134](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/api/types.ts#L4134)*

___
<a id="imageoption"></a>

### `<Optional>` ImageOption

**● ImageOption**: *[OSDImgOptions](_api_types_.osdimgoptions.md)*

*Defined in [api/types.ts:4133](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/api/types.ts#L4133)*

___
<a id="maximumnumberofosds"></a>

###  MaximumNumberOfOSDs

**● MaximumNumberOfOSDs**: *[MaximumNumberOfOSDs](_api_types_.maximumnumberofosds.md)*

*Defined in [api/types.ts:4129](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/api/types.ts#L4129)*

___
<a id="positionoption"></a>

###  PositionOption

**● PositionOption**: *`string`*

*Defined in [api/types.ts:4131](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/api/types.ts#L4131)*

___
<a id="textoption"></a>

### `<Optional>` TextOption

**● TextOption**: *[OSDTextOptions](_api_types_.osdtextoptions.md)*

*Defined in [api/types.ts:4132](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/api/types.ts#L4132)*

___
<a id="type"></a>

###  Type

**● Type**: *[OSDType](../enums/_api_types_.osdtype.md)*

*Defined in [api/types.ts:4130](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/api/types.ts#L4130)*

___

