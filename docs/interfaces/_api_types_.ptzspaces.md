[onvif-rx](../README.md) › ["api/types"](../modules/_api_types_.md) › [PTZSpaces](_api_types_.ptzspaces.md)

# Interface: PTZSpaces

The Generic Pan/Tilt Position space is provided by every PTZ node that supports absolute Pan/Tilt, since it does not relate to a specific physical range.
			Instead, the range should be defined as the full range of the PTZ unit normalized to the range -1 to 1 resulting in the following space description.

## Hierarchy

* **PTZSpaces**

## Index

### Properties

* [AbsolutePanTiltPositionSpace](_api_types_.ptzspaces.md#optional-readonly-absolutepantiltpositionspace)
* [AbsoluteZoomPositionSpace](_api_types_.ptzspaces.md#optional-readonly-absolutezoompositionspace)
* [ContinuousPanTiltVelocitySpace](_api_types_.ptzspaces.md#optional-readonly-continuouspantiltvelocityspace)
* [ContinuousZoomVelocitySpace](_api_types_.ptzspaces.md#optional-readonly-continuouszoomvelocityspace)
* [Extension](_api_types_.ptzspaces.md#optional-readonly-extension)
* [PanTiltSpeedSpace](_api_types_.ptzspaces.md#optional-readonly-pantiltspeedspace)
* [RelativePanTiltTranslationSpace](_api_types_.ptzspaces.md#optional-readonly-relativepantilttranslationspace)
* [RelativeZoomTranslationSpace](_api_types_.ptzspaces.md#optional-readonly-relativezoomtranslationspace)
* [ZoomSpeedSpace](_api_types_.ptzspaces.md#optional-readonly-zoomspeedspace)

## Properties

### `Optional` `Readonly` AbsolutePanTiltPositionSpace

• **AbsolutePanTiltPositionSpace**? : *[Space2DDescription](_api_types_.space2ddescription.md)*

*Defined in [api/types.ts:2425](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L2425)*

___

### `Optional` `Readonly` AbsoluteZoomPositionSpace

• **AbsoluteZoomPositionSpace**? : *[Space1DDescription](_api_types_.space1ddescription.md)*

*Defined in [api/types.ts:2426](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L2426)*

___

### `Optional` `Readonly` ContinuousPanTiltVelocitySpace

• **ContinuousPanTiltVelocitySpace**? : *[Space2DDescription](_api_types_.space2ddescription.md)*

*Defined in [api/types.ts:2429](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L2429)*

___

### `Optional` `Readonly` ContinuousZoomVelocitySpace

• **ContinuousZoomVelocitySpace**? : *[Space1DDescription](_api_types_.space1ddescription.md)*

*Defined in [api/types.ts:2430](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L2430)*

___

### `Optional` `Readonly` Extension

• **Extension**? : *[PTZSpacesExtension](_api_types_.ptzspacesextension.md)*

*Defined in [api/types.ts:2433](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L2433)*

___

### `Optional` `Readonly` PanTiltSpeedSpace

• **PanTiltSpeedSpace**? : *[Space1DDescription](_api_types_.space1ddescription.md)*

*Defined in [api/types.ts:2431](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L2431)*

___

### `Optional` `Readonly` RelativePanTiltTranslationSpace

• **RelativePanTiltTranslationSpace**? : *[Space2DDescription](_api_types_.space2ddescription.md)*

*Defined in [api/types.ts:2427](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L2427)*

___

### `Optional` `Readonly` RelativeZoomTranslationSpace

• **RelativeZoomTranslationSpace**? : *[Space1DDescription](_api_types_.space1ddescription.md)*

*Defined in [api/types.ts:2428](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L2428)*

___

### `Optional` `Readonly` ZoomSpeedSpace

• **ZoomSpeedSpace**? : *[Space1DDescription](_api_types_.space1ddescription.md)*

*Defined in [api/types.ts:2432](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L2432)*
