[onvif-rx](../README.md) › ["api/types"](../modules/_api_types_.md) › [Dot11PSKSet](_api_types_.dot11pskset.md)

# Interface: Dot11PSKSet

According to IEEE802.11-2007 H.4.1 the RSNA PSK consists of 256 bits, or 64 octets when represented in hex
					Either Key or Passphrase shall be given, if both are supplied Key shall be used by the device and Passphrase ignored.

## Hierarchy

* **Dot11PSKSet**

## Index

### Properties

* [Extension](_api_types_.dot11pskset.md#optional-readonly-extension)
* [Key](_api_types_.dot11pskset.md#optional-readonly-key)
* [Passphrase](_api_types_.dot11pskset.md#optional-readonly-passphrase)

## Properties

### `Optional` `Readonly` Extension

• **Extension**? : *[Dot11PSKSetExtension](_api_types_.dot11psksetextension.md)*

*Defined in [api/types.ts:1568](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L1568)*

___

### `Optional` `Readonly` Key

• **Key**? : *[Dot11PSK](../modules/_api_types_.md#dot11psk)*

*Defined in [api/types.ts:1566](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L1566)*

___

### `Optional` `Readonly` Passphrase

• **Passphrase**? : *[Dot11PSKPassphrase](../modules/_api_types_.md#dot11pskpassphrase)*

*Defined in [api/types.ts:1567](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L1567)*
