[onvif-rx](../README.md) > ["api/types"](../modules/_api_types_.md) > [Profile](../interfaces/_api_types_.profile.md)

# Interface: Profile

```
        A media profile consists of a set of media configurations. Media profiles are used by a client
        to configure properties of a media stream from an NVT.
        An NVT shall provide at least one media profile at boot. An NVT should provide “ready to use”
        profiles for the most common media configurations that the device offers.
        A profile consists of a set of interconnected configuration entities. Configurations are provided
        by the NVT and can be either static or created dynamically by the NVT. For example, the
        dynamic configurations can be created by the NVT depending on current available encoding
        resources.
```

## Hierarchy

**Profile**

## Index

### Properties

* [AudioEncoderConfiguration](_api_types_.profile.md#audioencoderconfiguration)
* [AudioSourceConfiguration](_api_types_.profile.md#audiosourceconfiguration)
* [Extension](_api_types_.profile.md#extension)
* [MetadataConfiguration](_api_types_.profile.md#metadataconfiguration)
* [Name](_api_types_.profile.md#name)
* [PTZConfiguration](_api_types_.profile.md#ptzconfiguration)
* [VideoAnalyticsConfiguration](_api_types_.profile.md#videoanalyticsconfiguration)
* [VideoEncoderConfiguration](_api_types_.profile.md#videoencoderconfiguration)
* [VideoSourceConfiguration](_api_types_.profile.md#videosourceconfiguration)

---

## Properties

<a id="audioencoderconfiguration"></a>

### `<Optional>` AudioEncoderConfiguration

**● AudioEncoderConfiguration**: *[AudioEncoderConfiguration](_api_types_.profile.md#audioencoderconfiguration)*

*Defined in [api/types.ts:532](https://github.com/patrickmichalina/onvif-rx/blob/f117e44/src/api/types.ts#L532)*

___
<a id="audiosourceconfiguration"></a>

### `<Optional>` AudioSourceConfiguration

**● AudioSourceConfiguration**: *[AudioSourceConfiguration](_api_types_.profile.md#audiosourceconfiguration)*

*Defined in [api/types.ts:530](https://github.com/patrickmichalina/onvif-rx/blob/f117e44/src/api/types.ts#L530)*

___
<a id="extension"></a>

### `<Optional>` Extension

**● Extension**: *[ProfileExtension](_api_types_.profileextension.md)*

*Defined in [api/types.ts:536](https://github.com/patrickmichalina/onvif-rx/blob/f117e44/src/api/types.ts#L536)*

___
<a id="metadataconfiguration"></a>

### `<Optional>` MetadataConfiguration

**● MetadataConfiguration**: *[MetadataConfiguration](_api_types_.profile.md#metadataconfiguration)*

*Defined in [api/types.ts:535](https://github.com/patrickmichalina/onvif-rx/blob/f117e44/src/api/types.ts#L535)*

___
<a id="name"></a>

###  Name

**● Name**: *[Name](_api_types_.profile.md#name)*

*Defined in [api/types.ts:528](https://github.com/patrickmichalina/onvif-rx/blob/f117e44/src/api/types.ts#L528)*

___
<a id="ptzconfiguration"></a>

### `<Optional>` PTZConfiguration

**● PTZConfiguration**: *[PTZConfiguration](_api_types_.profile.md#ptzconfiguration)*

*Defined in [api/types.ts:534](https://github.com/patrickmichalina/onvif-rx/blob/f117e44/src/api/types.ts#L534)*

___
<a id="videoanalyticsconfiguration"></a>

### `<Optional>` VideoAnalyticsConfiguration

**● VideoAnalyticsConfiguration**: *[VideoAnalyticsConfiguration](_api_types_.profile.md#videoanalyticsconfiguration)*

*Defined in [api/types.ts:533](https://github.com/patrickmichalina/onvif-rx/blob/f117e44/src/api/types.ts#L533)*

___
<a id="videoencoderconfiguration"></a>

### `<Optional>` VideoEncoderConfiguration

**● VideoEncoderConfiguration**: *[VideoEncoderConfiguration](_api_types_.profile.md#videoencoderconfiguration)*

*Defined in [api/types.ts:531](https://github.com/patrickmichalina/onvif-rx/blob/f117e44/src/api/types.ts#L531)*

___
<a id="videosourceconfiguration"></a>

### `<Optional>` VideoSourceConfiguration

**● VideoSourceConfiguration**: *[VideoSourceConfiguration](_api_types_.profile.md#videosourceconfiguration)*

*Defined in [api/types.ts:529](https://github.com/patrickmichalina/onvif-rx/blob/f117e44/src/api/types.ts#L529)*

___

