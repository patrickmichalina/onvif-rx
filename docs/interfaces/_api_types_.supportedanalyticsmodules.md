[onvif-rx](../README.md) > ["api/types"](../modules/_api_types_.md) > [SupportedAnalyticsModules](../interfaces/_api_types_.supportedanalyticsmodules.md)

# Interface: SupportedAnalyticsModules

It optionally contains a list of URLs that provide the location of schema files. These schema files describe the types and elements used in the analytics module descriptions. If the analytics module descriptions reference types or elements of the ONVIF schema file, the ONVIF schema file MUST be explicitly listed.

## Hierarchy

**SupportedAnalyticsModules**

## Index

### Properties

* [AnalyticsModuleContentSchemaLocation](_api_types_.supportedanalyticsmodules.md#analyticsmodulecontentschemalocation)
* [AnalyticsModuleDescription](_api_types_.supportedanalyticsmodules.md#analyticsmoduledescription)
* [Extension](_api_types_.supportedanalyticsmodules.md#extension)

---

## Properties

<a id="analyticsmodulecontentschemalocation"></a>

### `<Optional>` AnalyticsModuleContentSchemaLocation

**● AnalyticsModuleContentSchemaLocation**: *`undefined` \| `string`*

*Defined in [api/types.ts:3417](https://github.com/patrickmichalina/onvif-rx/blob/f117e44/src/api/types.ts#L3417)*

___
<a id="analyticsmoduledescription"></a>

### `<Optional>` AnalyticsModuleDescription

**● AnalyticsModuleDescription**: *[ConfigDescription](_api_types_.configdescription.md)*

*Defined in [api/types.ts:3418](https://github.com/patrickmichalina/onvif-rx/blob/f117e44/src/api/types.ts#L3418)*

___
<a id="extension"></a>

### `<Optional>` Extension

**● Extension**: *[SupportedAnalyticsModulesExtension](_api_types_.supportedanalyticsmodulesextension.md)*

*Defined in [api/types.ts:3419](https://github.com/patrickmichalina/onvif-rx/blob/f117e44/src/api/types.ts#L3419)*

___

