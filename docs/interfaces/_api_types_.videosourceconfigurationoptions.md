[onvif-rx](../README.md) > ["api/types"](../modules/_api_types_.md) > [VideoSourceConfigurationOptions](../interfaces/_api_types_.videosourceconfigurationoptions.md)

# Interface: VideoSourceConfigurationOptions

```
                    Supported range for the capturing area.
                    Device that does not support cropped streaming shall express BoundsRange option as mentioned below
                    BoundsRange->XRange and BoundsRange->YRange with same Min/Max values HeightRange and WidthRange Min/Max values same as VideoSource Height and Width Limits.
```

## Hierarchy

**VideoSourceConfigurationOptions**

## Index

### Properties

* [BoundsRange](_api_types_.videosourceconfigurationoptions.md#boundsrange)
* [Extension](_api_types_.videosourceconfigurationoptions.md#extension)
* [VideoSourceTokensAvailable](_api_types_.videosourceconfigurationoptions.md#videosourcetokensavailable)

---

## Properties

<a id="boundsrange"></a>

###  BoundsRange

**● BoundsRange**: *[IntRectangleRange](_api_types_.intrectanglerange.md)*

*Defined in [api/types.ts:639](https://github.com/patrickmichalina/onvif-rx/blob/f117e44/src/api/types.ts#L639)*

___
<a id="extension"></a>

### `<Optional>` Extension

**● Extension**: *[VideoSourceConfigurationOptionsExtension](_api_types_.videosourceconfigurationoptionsextension.md)*

*Defined in [api/types.ts:641](https://github.com/patrickmichalina/onvif-rx/blob/f117e44/src/api/types.ts#L641)*

___
<a id="videosourcetokensavailable"></a>

###  VideoSourceTokensAvailable

**● VideoSourceTokensAvailable**: *[ReferenceToken](../modules/_api_types_.md#referencetoken)*

*Defined in [api/types.ts:640](https://github.com/patrickmichalina/onvif-rx/blob/f117e44/src/api/types.ts#L640)*

___

