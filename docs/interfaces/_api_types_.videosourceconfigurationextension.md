[onvif-rx](../README.md) › ["api/types"](../modules/_api_types_.md) › [VideoSourceConfigurationExtension](_api_types_.videosourceconfigurationextension.md)

# Interface: VideoSourceConfigurationExtension

Optional element to configure rotation of captured image.
						What resolutions a device supports shall be unaffected by the Rotate parameters.
						If a device is configured with Rotate=AUTO, the device shall take control over the Degree parameter and automatically update it so that a client can query current rotation.
						The device shall automatically apply the same rotation to its pan/tilt control direction depending on the following condition:
						if Reverse=AUTO in PTControlDirection or if the device doesn’t support Reverse in PTControlDirection

## Hierarchy

* **VideoSourceConfigurationExtension**

## Index

### Properties

* [Extension](_api_types_.videosourceconfigurationextension.md#optional-readonly-extension)
* [Rotate](_api_types_.videosourceconfigurationextension.md#optional-readonly-rotate)

## Properties

### `Optional` `Readonly` Extension

• **Extension**? : *[VideoSourceConfigurationExtension2](_api_types_.videosourceconfigurationextension2.md)*

*Defined in [api/types.ts:610](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L610)*

___

### `Optional` `Readonly` Rotate

• **Rotate**? : *[Rotate](_api_types_.videosourceconfigurationextension.md#optional-readonly-rotate)*

*Defined in [api/types.ts:609](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L609)*
