[onvif-rx](../README.md) › ["api/types"](../modules/_api_types_.md) › [Dot11AvailableNetworks](_api_types_.dot11availablenetworks.md)

# Interface: Dot11AvailableNetworks

See IEEE802.11 7.3.2.25.2 for details.

## Hierarchy

* **Dot11AvailableNetworks**

## Index

### Properties

* [AuthAndMangementSuite](_api_types_.dot11availablenetworks.md#optional-readonly-authandmangementsuite)
* [BSSID](_api_types_.dot11availablenetworks.md#optional-readonly-bssid)
* [Extension](_api_types_.dot11availablenetworks.md#optional-readonly-extension)
* [GroupCipher](_api_types_.dot11availablenetworks.md#optional-readonly-groupcipher)
* [PairCipher](_api_types_.dot11availablenetworks.md#optional-readonly-paircipher)
* [SSID](_api_types_.dot11availablenetworks.md#readonly-ssid)
* [SignalStrength](_api_types_.dot11availablenetworks.md#optional-readonly-signalstrength)

## Properties

### `Optional` `Readonly` AuthAndMangementSuite

• **AuthAndMangementSuite**? : *[Dot11AuthAndMangementSuite](../enums/_api_types_.dot11authandmangementsuite.md)*

*Defined in [api/types.ts:1612](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L1612)*

___

### `Optional` `Readonly` BSSID

• **BSSID**? : *undefined | string*

*Defined in [api/types.ts:1611](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L1611)*

___

### `Optional` `Readonly` Extension

• **Extension**? : *[Dot11AvailableNetworksExtension](_api_types_.dot11availablenetworksextension.md)*

*Defined in [api/types.ts:1616](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L1616)*

___

### `Optional` `Readonly` GroupCipher

• **GroupCipher**? : *[Dot11Cipher](../enums/_api_types_.dot11cipher.md)*

*Defined in [api/types.ts:1614](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L1614)*

___

### `Optional` `Readonly` PairCipher

• **PairCipher**? : *[Dot11Cipher](../enums/_api_types_.dot11cipher.md)*

*Defined in [api/types.ts:1613](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L1613)*

___

### `Readonly` SSID

• **SSID**: *[Dot11SSIDType](../modules/_api_types_.md#dot11ssidtype)*

*Defined in [api/types.ts:1610](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L1610)*

___

### `Optional` `Readonly` SignalStrength

• **SignalStrength**? : *[Dot11SignalStrength](../enums/_api_types_.dot11signalstrength.md)*

*Defined in [api/types.ts:1615](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L1615)*
