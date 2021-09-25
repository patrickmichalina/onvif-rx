[onvif-rx](../README.md) › ["api/types"](../modules/_api_types_.md) › [MetadataConfiguration](_api_types_.metadataconfiguration.md)

# Interface: MetadataConfiguration

optional element to configure which PTZ related data is to include in the metadata stream

## Hierarchy

* **MetadataConfiguration**

## Index

### Properties

* [Analytics](_api_types_.metadataconfiguration.md#optional-readonly-analytics)
* [AnalyticsEngineConfiguration](_api_types_.metadataconfiguration.md#optional-readonly-analyticsengineconfiguration)
* [Events](_api_types_.metadataconfiguration.md#optional-readonly-events)
* [Extension](_api_types_.metadataconfiguration.md#optional-readonly-extension)
* [Multicast](_api_types_.metadataconfiguration.md#readonly-multicast)
* [PTZStatus](_api_types_.metadataconfiguration.md#optional-readonly-ptzstatus)
* [SessionTimeout](_api_types_.metadataconfiguration.md#readonly-sessiontimeout)

## Properties

### `Optional` `Readonly` Analytics

• **Analytics**? : *undefined | false | true*

*Defined in [api/types.ts:957](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L957)*

___

### `Optional` `Readonly` AnalyticsEngineConfiguration

• **AnalyticsEngineConfiguration**? : *[AnalyticsEngineConfiguration](_api_types_.metadataconfiguration.md#optional-readonly-analyticsengineconfiguration)*

*Defined in [api/types.ts:960](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L960)*

___

### `Optional` `Readonly` Events

• **Events**? : *[EventSubscription](_api_types_.eventsubscription.md)*

*Defined in [api/types.ts:956](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L956)*

___

### `Optional` `Readonly` Extension

• **Extension**? : *[MetadataConfigurationExtension](_api_types_.metadataconfigurationextension.md)*

*Defined in [api/types.ts:961](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L961)*

___

### `Readonly` Multicast

• **Multicast**: *[MulticastConfiguration](_api_types_.multicastconfiguration.md)*

*Defined in [api/types.ts:958](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L958)*

___

### `Optional` `Readonly` PTZStatus

• **PTZStatus**? : *[PTZFilter](_api_types_.ptzfilter.md)*

*Defined in [api/types.ts:955](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L955)*

___

### `Readonly` SessionTimeout

• **SessionTimeout**: *string*

*Defined in [api/types.ts:959](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L959)*
