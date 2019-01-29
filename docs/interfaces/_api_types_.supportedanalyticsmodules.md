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

###  AnalyticsModuleContentSchemaLocation

**● AnalyticsModuleContentSchemaLocation**: *`string`*

*Defined in [api/types.ts:3255](https://github.com/patrickmichalina/onvif-rx/blob/1596479/src/api/types.ts#L3255)*

___
<a id="analyticsmoduledescription"></a>

###  AnalyticsModuleDescription

**● AnalyticsModuleDescription**: *[ConfigDescription](_api_types_.configdescription.md)*

*Defined in [api/types.ts:3256](https://github.com/patrickmichalina/onvif-rx/blob/1596479/src/api/types.ts#L3256)*

___
<a id="extension"></a>

###  Extension

**● Extension**: *[SupportedAnalyticsModulesExtension](_api_types_.supportedanalyticsmodulesextension.md)*

*Defined in [api/types.ts:3257](https://github.com/patrickmichalina/onvif-rx/blob/1596479/src/api/types.ts#L3257)*

___

