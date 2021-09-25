[onvif-rx](../README.md) › ["api/types"](../modules/_api_types_.md) › [MessageDescription](_api_types_.messagedescription.md)

# Interface: MessageDescription

Set of tokens producing this message. The list may only contain SimpleItemDescription items.
					The set of tokens identify the component within the WS-Endpoint, which is responsible for the producing the message.
					For analytics events the token set shall include the VideoSourceConfigurationToken, the VideoAnalyticsConfigurationToken
					and the name of the analytics module or rule.

## Hierarchy

* **MessageDescription**

## Index

### Properties

* [Data](_api_types_.messagedescription.md#optional-readonly-data)
* [Extension](_api_types_.messagedescription.md#optional-readonly-extension)
* [Key](_api_types_.messagedescription.md#optional-readonly-key)
* [Source](_api_types_.messagedescription.md#optional-readonly-source)

## Properties

### `Optional` `Readonly` Data

• **Data**? : *[ItemListDescription](_api_types_.itemlistdescription.md)*

*Defined in [api/types.ts:3331](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L3331)*

___

### `Optional` `Readonly` Extension

• **Extension**? : *[MessageDescriptionExtension](_api_types_.messagedescriptionextension.md)*

*Defined in [api/types.ts:3332](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L3332)*

___

### `Optional` `Readonly` Key

• **Key**? : *[ItemListDescription](_api_types_.itemlistdescription.md)*

*Defined in [api/types.ts:3330](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L3330)*

___

### `Optional` `Readonly` Source

• **Source**? : *[ItemListDescription](_api_types_.itemlistdescription.md)*

*Defined in [api/types.ts:3329](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L3329)*
