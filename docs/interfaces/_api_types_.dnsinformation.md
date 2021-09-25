[onvif-rx](../README.md) › ["api/types"](../modules/_api_types_.md) › [DNSInformation](_api_types_.dnsinformation.md)

# Interface: DNSInformation

Indicates whether or not DNS information is retrieved from DHCP.

## Hierarchy

* **DNSInformation**

## Index

### Properties

* [DNSFromDHCP](_api_types_.dnsinformation.md#optional-readonly-dnsfromdhcp)
* [DNSManual](_api_types_.dnsinformation.md#optional-readonly-dnsmanual)
* [Extension](_api_types_.dnsinformation.md#optional-readonly-extension)
* [FromDHCP](_api_types_.dnsinformation.md#readonly-fromdhcp)
* [SearchDomain](_api_types_.dnsinformation.md#optional-readonly-searchdomain)

## Properties

### `Optional` `Readonly` DNSFromDHCP

• **DNSFromDHCP**? : *[IPAddress](_api_types_.ipaddress.md)*

*Defined in [api/types.ts:1400](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L1400)*

___

### `Optional` `Readonly` DNSManual

• **DNSManual**? : *[IPAddress](_api_types_.ipaddress.md)*

*Defined in [api/types.ts:1401](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L1401)*

___

### `Optional` `Readonly` Extension

• **Extension**? : *[DNSInformationExtension](_api_types_.dnsinformationextension.md)*

*Defined in [api/types.ts:1402](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L1402)*

___

### `Readonly` FromDHCP

• **FromDHCP**: *boolean*

*Defined in [api/types.ts:1398](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L1398)*

___

### `Optional` `Readonly` SearchDomain

• **SearchDomain**? : *undefined | string*

*Defined in [api/types.ts:1399](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L1399)*
