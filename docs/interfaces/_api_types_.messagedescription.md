[onvif-rx](../README.md) > ["api/types"](../modules/_api_types_.md) > [MessageDescription](../interfaces/_api_types_.messagedescription.md)

# Interface: MessageDescription

Set of tokens producing this message. The list may only contain SimpleItemDescription items. The set of tokens identify the component within the WS-Endpoint, which is responsible for the producing the message. For analytics events the token set shall include the VideoSourceConfigurationToken, the VideoAnalyticsConfigurationToken and the name of the analytics module or rule.

## Hierarchy

**MessageDescription**

## Index

### Properties

* [Data](_api_types_.messagedescription.md#data)
* [Extension](_api_types_.messagedescription.md#extension)
* [Key](_api_types_.messagedescription.md#key)
* [Source](_api_types_.messagedescription.md#source)

---

## Properties

<a id="data"></a>

### `<Optional>` Data

**● Data**: *[ItemListDescription](_api_types_.itemlistdescription.md)*

*Defined in [api/types.ts:3304](https://github.com/patrickmichalina/onvif-rx/blob/f117e44/src/api/types.ts#L3304)*

___
<a id="extension"></a>

### `<Optional>` Extension

**● Extension**: *[MessageDescriptionExtension](_api_types_.messagedescriptionextension.md)*

*Defined in [api/types.ts:3305](https://github.com/patrickmichalina/onvif-rx/blob/f117e44/src/api/types.ts#L3305)*

___
<a id="key"></a>

### `<Optional>` Key

**● Key**: *[ItemListDescription](_api_types_.itemlistdescription.md)*

*Defined in [api/types.ts:3303](https://github.com/patrickmichalina/onvif-rx/blob/f117e44/src/api/types.ts#L3303)*

___
<a id="source"></a>

### `<Optional>` Source

**● Source**: *[ItemListDescription](_api_types_.itemlistdescription.md)*

*Defined in [api/types.ts:3302](https://github.com/patrickmichalina/onvif-rx/blob/f117e44/src/api/types.ts#L3302)*

___

