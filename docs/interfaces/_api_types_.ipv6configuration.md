[onvif-rx](../README.md) › ["api/types"](../modules/_api_types_.md) › [IPv6Configuration](_api_types_.ipv6configuration.md)

# Interface: IPv6Configuration

Indicates whether router advertisment is used.

## Hierarchy

* **IPv6Configuration**

## Index

### Properties

* [AcceptRouterAdvert](_api_types_.ipv6configuration.md#optional-readonly-acceptrouteradvert)
* [DHCP](_api_types_.ipv6configuration.md#readonly-dhcp)
* [Extension](_api_types_.ipv6configuration.md#optional-readonly-extension)
* [FromDHCP](_api_types_.ipv6configuration.md#optional-readonly-fromdhcp)
* [FromRA](_api_types_.ipv6configuration.md#optional-readonly-fromra)
* [LinkLocal](_api_types_.ipv6configuration.md#optional-readonly-linklocal)
* [Manual](_api_types_.ipv6configuration.md#optional-readonly-manual)

## Properties

### `Optional` `Readonly` AcceptRouterAdvert

• **AcceptRouterAdvert**? : *undefined | false | true*

*Defined in [api/types.ts:1306](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L1306)*

___

### `Readonly` DHCP

• **DHCP**: *[IPv6DHCPConfiguration](../enums/_api_types_.ipv6dhcpconfiguration.md)*

*Defined in [api/types.ts:1307](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L1307)*

___

### `Optional` `Readonly` Extension

• **Extension**? : *[IPv6ConfigurationExtension](_api_types_.ipv6configurationextension.md)*

*Defined in [api/types.ts:1312](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L1312)*

___

### `Optional` `Readonly` FromDHCP

• **FromDHCP**? : *[PrefixedIPv6Address](_api_types_.prefixedipv6address.md)*

*Defined in [api/types.ts:1310](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L1310)*

___

### `Optional` `Readonly` FromRA

• **FromRA**? : *[PrefixedIPv6Address](_api_types_.prefixedipv6address.md)*

*Defined in [api/types.ts:1311](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L1311)*

___

### `Optional` `Readonly` LinkLocal

• **LinkLocal**? : *[PrefixedIPv6Address](_api_types_.prefixedipv6address.md)*

*Defined in [api/types.ts:1309](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L1309)*

___

### `Optional` `Readonly` Manual

• **Manual**? : *[PrefixedIPv6Address](_api_types_.prefixedipv6address.md)*

*Defined in [api/types.ts:1308](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L1308)*
