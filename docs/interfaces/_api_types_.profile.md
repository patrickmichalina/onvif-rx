[onvif-rx](../README.md) › ["api/types"](../modules/_api_types_.md) › [Profile](_api_types_.profile.md)

# Interface: Profile

A media profile consists of a set of media configurations. Media profiles are used by a client
			to configure properties of a media stream from an NVT.
			An NVT shall provide at least one media profile at boot. An NVT should provide “ready to use”
			profiles for the most common media configurations that the device offers.
			A profile consists of a set of interconnected configuration entities. Configurations are provided
			by the NVT and can be either static or created dynamically by the NVT. For example, the
			dynamic configurations can be created by the NVT depending on current available encoding
			resources.

## Hierarchy

* **Profile**

## Index

### Properties

* [AudioEncoderConfiguration](_api_types_.profile.md#optional-readonly-audioencoderconfiguration)
* [AudioSourceConfiguration](_api_types_.profile.md#optional-readonly-audiosourceconfiguration)
* [Extension](_api_types_.profile.md#optional-readonly-extension)
* [MetadataConfiguration](_api_types_.profile.md#optional-readonly-metadataconfiguration)
* [Name](_api_types_.profile.md#readonly-name)
* [PTZConfiguration](_api_types_.profile.md#optional-readonly-ptzconfiguration)
* [VideoAnalyticsConfiguration](_api_types_.profile.md#optional-readonly-videoanalyticsconfiguration)
* [VideoEncoderConfiguration](_api_types_.profile.md#optional-readonly-videoencoderconfiguration)
* [VideoSourceConfiguration](_api_types_.profile.md#optional-readonly-videosourceconfiguration)

## Properties

### `Optional` `Readonly` AudioEncoderConfiguration

• **AudioEncoderConfiguration**? : *[AudioEncoderConfiguration](_api_types_.profile.md#optional-readonly-audioencoderconfiguration)*

*Defined in [api/types.ts:561](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L561)*

___

### `Optional` `Readonly` AudioSourceConfiguration

• **AudioSourceConfiguration**? : *[AudioSourceConfiguration](_api_types_.profile.md#optional-readonly-audiosourceconfiguration)*

*Defined in [api/types.ts:559](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L559)*

___

### `Optional` `Readonly` Extension

• **Extension**? : *[ProfileExtension](_api_types_.profileextension.md)*

*Defined in [api/types.ts:565](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L565)*

___

### `Optional` `Readonly` MetadataConfiguration

• **MetadataConfiguration**? : *[MetadataConfiguration](_api_types_.profile.md#optional-readonly-metadataconfiguration)*

*Defined in [api/types.ts:564](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L564)*

___

### `Readonly` Name

• **Name**: *[Name](_api_types_.profile.md#readonly-name)*

*Defined in [api/types.ts:557](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L557)*

___

### `Optional` `Readonly` PTZConfiguration

• **PTZConfiguration**? : *[PTZConfiguration](_api_types_.profile.md#optional-readonly-ptzconfiguration)*

*Defined in [api/types.ts:563](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L563)*

___

### `Optional` `Readonly` VideoAnalyticsConfiguration

• **VideoAnalyticsConfiguration**? : *[VideoAnalyticsConfiguration](_api_types_.profile.md#optional-readonly-videoanalyticsconfiguration)*

*Defined in [api/types.ts:562](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L562)*

___

### `Optional` `Readonly` VideoEncoderConfiguration

• **VideoEncoderConfiguration**? : *[VideoEncoderConfiguration](_api_types_.profile.md#optional-readonly-videoencoderconfiguration)*

*Defined in [api/types.ts:560](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L560)*

___

### `Optional` `Readonly` VideoSourceConfiguration

• **VideoSourceConfiguration**? : *[VideoSourceConfiguration](_api_types_.profile.md#optional-readonly-videosourceconfiguration)*

*Defined in [api/types.ts:558](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L558)*
