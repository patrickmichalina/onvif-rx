[onvif-rx](../README.md) › ["api/types"](../modules/_api_types_.md) › [ConfigDescription](_api_types_.configdescription.md)

# Interface: ConfigDescription

List describing the configuration parameters. The names of the parameters must be unique. If possible SimpleItems
						should be used to transport the information to ease parsing of dynamically defined messages by a client
						application.

## Hierarchy

* **ConfigDescription**

## Index

### Properties

* [Extension](_api_types_.configdescription.md#optional-readonly-extension)
* [Messages](_api_types_.configdescription.md#optional-readonly-messages)
* [Parameters](_api_types_.configdescription.md#readonly-parameters)
* [ParentTopic](_api_types_.configdescription.md#readonly-parenttopic)

## Properties

### `Optional` `Readonly` Extension

• **Extension**? : *[ConfigDescriptionExtension](_api_types_.configdescriptionextension.md)*

*Defined in [api/types.ts:3413](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L3413)*

___

### `Optional` `Readonly` Messages

• **Messages**? : *any*

*Defined in [api/types.ts:3411](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L3411)*

___

### `Readonly` Parameters

• **Parameters**: *[ItemListDescription](_api_types_.itemlistdescription.md)*

*Defined in [api/types.ts:3410](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L3410)*

___

### `Readonly` ParentTopic

• **ParentTopic**: *string*

*Defined in [api/types.ts:3412](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L3412)*
