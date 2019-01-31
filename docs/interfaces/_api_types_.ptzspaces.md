[onvif-rx](../README.md) > ["api/types"](../modules/_api_types_.md) > [PTZSpaces](../interfaces/_api_types_.ptzspaces.md)

# Interface: PTZSpaces

```
        The Generic Pan/Tilt Position space is provided by every PTZ node that supports absolute Pan/Tilt, since it does not relate to a specific physical range.
        Instead, the range should be defined as the full range of the PTZ unit normalized to the range -1 to 1 resulting in the following space description.
```

## Hierarchy

**PTZSpaces**

## Index

### Properties

* [AbsolutePanTiltPositionSpace](_api_types_.ptzspaces.md#absolutepantiltpositionspace)
* [AbsoluteZoomPositionSpace](_api_types_.ptzspaces.md#absolutezoompositionspace)
* [ContinuousPanTiltVelocitySpace](_api_types_.ptzspaces.md#continuouspantiltvelocityspace)
* [ContinuousZoomVelocitySpace](_api_types_.ptzspaces.md#continuouszoomvelocityspace)
* [Extension](_api_types_.ptzspaces.md#extension)
* [PanTiltSpeedSpace](_api_types_.ptzspaces.md#pantiltspeedspace)
* [RelativePanTiltTranslationSpace](_api_types_.ptzspaces.md#relativepantilttranslationspace)
* [RelativeZoomTranslationSpace](_api_types_.ptzspaces.md#relativezoomtranslationspace)
* [ZoomSpeedSpace](_api_types_.ptzspaces.md#zoomspeedspace)

---

## Properties

<a id="absolutepantiltpositionspace"></a>

### `<Optional>` AbsolutePanTiltPositionSpace

**● AbsolutePanTiltPositionSpace**: *[Space2DDescription](_api_types_.space2ddescription.md)*

*Defined in [api/types.ts:2396](https://github.com/patrickmichalina/onvif-rx/blob/f117e44/src/api/types.ts#L2396)*

___
<a id="absolutezoompositionspace"></a>

### `<Optional>` AbsoluteZoomPositionSpace

**● AbsoluteZoomPositionSpace**: *[Space1DDescription](_api_types_.space1ddescription.md)*

*Defined in [api/types.ts:2397](https://github.com/patrickmichalina/onvif-rx/blob/f117e44/src/api/types.ts#L2397)*

___
<a id="continuouspantiltvelocityspace"></a>

### `<Optional>` ContinuousPanTiltVelocitySpace

**● ContinuousPanTiltVelocitySpace**: *[Space2DDescription](_api_types_.space2ddescription.md)*

*Defined in [api/types.ts:2400](https://github.com/patrickmichalina/onvif-rx/blob/f117e44/src/api/types.ts#L2400)*

___
<a id="continuouszoomvelocityspace"></a>

### `<Optional>` ContinuousZoomVelocitySpace

**● ContinuousZoomVelocitySpace**: *[Space1DDescription](_api_types_.space1ddescription.md)*

*Defined in [api/types.ts:2401](https://github.com/patrickmichalina/onvif-rx/blob/f117e44/src/api/types.ts#L2401)*

___
<a id="extension"></a>

### `<Optional>` Extension

**● Extension**: *[PTZSpacesExtension](_api_types_.ptzspacesextension.md)*

*Defined in [api/types.ts:2404](https://github.com/patrickmichalina/onvif-rx/blob/f117e44/src/api/types.ts#L2404)*

___
<a id="pantiltspeedspace"></a>

### `<Optional>` PanTiltSpeedSpace

**● PanTiltSpeedSpace**: *[Space1DDescription](_api_types_.space1ddescription.md)*

*Defined in [api/types.ts:2402](https://github.com/patrickmichalina/onvif-rx/blob/f117e44/src/api/types.ts#L2402)*

___
<a id="relativepantilttranslationspace"></a>

### `<Optional>` RelativePanTiltTranslationSpace

**● RelativePanTiltTranslationSpace**: *[Space2DDescription](_api_types_.space2ddescription.md)*

*Defined in [api/types.ts:2398](https://github.com/patrickmichalina/onvif-rx/blob/f117e44/src/api/types.ts#L2398)*

___
<a id="relativezoomtranslationspace"></a>

### `<Optional>` RelativeZoomTranslationSpace

**● RelativeZoomTranslationSpace**: *[Space1DDescription](_api_types_.space1ddescription.md)*

*Defined in [api/types.ts:2399](https://github.com/patrickmichalina/onvif-rx/blob/f117e44/src/api/types.ts#L2399)*

___
<a id="zoomspeedspace"></a>

### `<Optional>` ZoomSpeedSpace

**● ZoomSpeedSpace**: *[Space1DDescription](_api_types_.space1ddescription.md)*

*Defined in [api/types.ts:2403](https://github.com/patrickmichalina/onvif-rx/blob/f117e44/src/api/types.ts#L2403)*

___

