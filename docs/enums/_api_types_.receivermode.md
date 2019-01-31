[onvif-rx](../README.md) > ["api/types"](../modules/_api_types_.md) > [ReceiverMode](../enums/_api_types_.receivermode.md)

# Enumeration: ReceiverMode

```
        Specifies a receiver connection mode.
```

## Index

### Enumeration members

* [AlwaysConnect](_api_types_.receivermode.md#alwaysconnect)
* [AutoConnect](_api_types_.receivermode.md#autoconnect)
* [NeverConnect](_api_types_.receivermode.md#neverconnect)
* [Unknown](_api_types_.receivermode.md#unknown)

---

## Enumeration members

<a id="alwaysconnect"></a>

###  AlwaysConnect

**AlwaysConnect**:  = "AlwaysConnect"

*Defined in [api/types.ts:5475](https://github.com/patrickmichalina/onvif-rx/blob/f117e44/src/api/types.ts#L5475)*

The receiver attempts to maintain a persistent connection to the configured endpoint.

___
<a id="autoconnect"></a>

###  AutoConnect

**AutoConnect**:  = "AutoConnect"

*Defined in [api/types.ts:5471](https://github.com/patrickmichalina/onvif-rx/blob/f117e44/src/api/types.ts#L5471)*

The receiver connects on demand, as required by consumers of the media streams.

___
<a id="neverconnect"></a>

###  NeverConnect

**NeverConnect**:  = "NeverConnect"

*Defined in [api/types.ts:5479](https://github.com/patrickmichalina/onvif-rx/blob/f117e44/src/api/types.ts#L5479)*

The receiver does not attempt to connect.

___
<a id="unknown"></a>

###  Unknown

**Unknown**:  = "Unknown"

*Defined in [api/types.ts:5483](https://github.com/patrickmichalina/onvif-rx/blob/f117e44/src/api/types.ts#L5483)*

This case should never happen.

___

