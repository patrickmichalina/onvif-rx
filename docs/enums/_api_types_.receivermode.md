[onvif-rx](../README.md) › ["api/types"](../modules/_api_types_.md) › [ReceiverMode](_api_types_.receivermode.md)

# Enumeration: ReceiverMode

Specifies a receiver connection mode.

## Index

### Enumeration members

* [AlwaysConnect](_api_types_.receivermode.md#alwaysconnect)
* [AutoConnect](_api_types_.receivermode.md#autoconnect)
* [NeverConnect](_api_types_.receivermode.md#neverconnect)
* [Unknown](_api_types_.receivermode.md#unknown)

## Enumeration members

###  AlwaysConnect

• **AlwaysConnect**: = "AlwaysConnect"

*Defined in [api/types.ts:5651](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L5651)*

The receiver attempts to maintain a persistent connection to the configured endpoint.

___

###  AutoConnect

• **AutoConnect**: = "AutoConnect"

*Defined in [api/types.ts:5647](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L5647)*

The receiver connects on demand, as required by consumers of the media streams.

___

###  NeverConnect

• **NeverConnect**: = "NeverConnect"

*Defined in [api/types.ts:5655](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L5655)*

The receiver does not attempt to connect.

___

###  Unknown

• **Unknown**: = "Unknown"

*Defined in [api/types.ts:5659](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L5659)*

This case should never happen.
