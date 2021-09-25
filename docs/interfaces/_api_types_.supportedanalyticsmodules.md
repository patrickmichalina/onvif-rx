[onvif-rx](../README.md) › ["api/types"](../modules/_api_types_.md) › [SupportedAnalyticsModules](_api_types_.supportedanalyticsmodules.md)

# Interface: SupportedAnalyticsModules

It optionally contains a list of URLs that provide the location of schema files.
					These schema files describe the types and elements used in the analytics module descriptions.
					Analytics module descriptions that reference types or elements imported from any ONVIF defined schema files
					need not explicitly list those schema files.

## Hierarchy

* **SupportedAnalyticsModules**

## Index

### Properties

* [AnalyticsModuleContentSchemaLocation](_api_types_.supportedanalyticsmodules.md#optional-readonly-analyticsmodulecontentschemalocation)
* [AnalyticsModuleDescription](_api_types_.supportedanalyticsmodules.md#optional-readonly-analyticsmoduledescription)
* [Extension](_api_types_.supportedanalyticsmodules.md#optional-readonly-extension)

## Properties

### `Optional` `Readonly` AnalyticsModuleContentSchemaLocation

• **AnalyticsModuleContentSchemaLocation**? : *undefined | string*

*Defined in [api/types.ts:3444](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L3444)*

___

### `Optional` `Readonly` AnalyticsModuleDescription

• **AnalyticsModuleDescription**? : *[ConfigDescription](_api_types_.configdescription.md)*

*Defined in [api/types.ts:3445](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L3445)*

___

### `Optional` `Readonly` Extension

• **Extension**? : *[SupportedAnalyticsModulesExtension](_api_types_.supportedanalyticsmodulesextension.md)*

*Defined in [api/types.ts:3446](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L3446)*
