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

###  AudioEncoderConfiguration

**● AudioEncoderConfiguration**: *[AudioEncoderConfiguration](_api_types_.audioencoderconfiguration.md)*

*Defined in [api/types.ts:370](https://github.com/patrickmichalina/onvif-rx/blob/d62cee9/src/api/types.ts#L370)*

___
<a id="audiosourceconfiguration"></a>

###  AudioSourceConfiguration

**● AudioSourceConfiguration**: *[AudioSourceConfiguration](_api_types_.audiosourceconfiguration.md)*

*Defined in [api/types.ts:368](https://github.com/patrickmichalina/onvif-rx/blob/d62cee9/src/api/types.ts#L368)*

___
<a id="extension"></a>

###  Extension

**● Extension**: *[ProfileExtension](_api_types_.profileextension.md)*

*Defined in [api/types.ts:374](https://github.com/patrickmichalina/onvif-rx/blob/d62cee9/src/api/types.ts#L374)*

___
<a id="metadataconfiguration"></a>

###  MetadataConfiguration

**● MetadataConfiguration**: *[MetadataConfiguration](_api_types_.metadataconfiguration.md)*

*Defined in [api/types.ts:373](https://github.com/patrickmichalina/onvif-rx/blob/d62cee9/src/api/types.ts#L373)*

___
<a id="name"></a>

###  Name

**● Name**: *[Name](_api_types_.profile.md#name)*

*Defined in [api/types.ts:366](https://github.com/patrickmichalina/onvif-rx/blob/d62cee9/src/api/types.ts#L366)*

___
<a id="ptzconfiguration"></a>

###  PTZConfiguration

**● PTZConfiguration**: *[PTZConfiguration](_api_types_.ptzconfiguration.md)*

*Defined in [api/types.ts:372](https://github.com/patrickmichalina/onvif-rx/blob/d62cee9/src/api/types.ts#L372)*

___
<a id="videoanalyticsconfiguration"></a>

###  VideoAnalyticsConfiguration

**● VideoAnalyticsConfiguration**: *[VideoAnalyticsConfiguration](_api_types_.videoanalyticsconfiguration.md)*

*Defined in [api/types.ts:371](https://github.com/patrickmichalina/onvif-rx/blob/d62cee9/src/api/types.ts#L371)*

___
<a id="videoencoderconfiguration"></a>

###  VideoEncoderConfiguration

**● VideoEncoderConfiguration**: *[VideoEncoderConfiguration](_api_types_.videoencoderconfiguration.md)*

*Defined in [api/types.ts:369](https://github.com/patrickmichalina/onvif-rx/blob/d62cee9/src/api/types.ts#L369)*

___
<a id="videosourceconfiguration"></a>

###  VideoSourceConfiguration

**● VideoSourceConfiguration**: *[VideoSourceConfiguration](_api_types_.videosourceconfiguration.md)*

*Defined in [api/types.ts:367](https://github.com/patrickmichalina/onvif-rx/blob/d62cee9/src/api/types.ts#L367)*

___

