[onvif-rx](../README.md) > ["api/types"](../modules/_api_types_.md) > [VideoSourceConfigurationExtension](../interfaces/_api_types_.videosourceconfigurationextension.md)

# Interface: VideoSourceConfigurationExtension

Optional element to configure rotation of captured image. What resolutions a device supports shall be unaffected by the Rotate parameters. If a device is configured with Rotate=AUTO, the device shall take control over the Degree parameter and automatically update it so that a client can query current rotation. The device shall automatically apply the same rotation to its pan/tilt control direction depending on the following condition: if Reverse=AUTO in PTControlDirection or if the device doesn’t support Reverse in PTControlDirection

## Hierarchy

**VideoSourceConfigurationExtension**

## Index

### Properties

* [Extension](_api_types_.videosourceconfigurationextension.md#extension)
* [Rotate](_api_types_.videosourceconfigurationextension.md#rotate)

---

## Properties

<a id="extension"></a>

### `<Optional>` Extension

**● Extension**: *[VideoSourceConfigurationExtension2](_api_types_.videosourceconfigurationextension2.md)*

*Defined in [api/types.ts:419](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/api/types.ts#L419)*

___
<a id="rotate"></a>

### `<Optional>` Rotate

**● Rotate**: *[Rotate](_api_types_.videosourceconfigurationextension.md#rotate)*

*Defined in [api/types.ts:418](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/api/types.ts#L418)*

___

