[onvif-rx](../README.md) > ["api/types"](../modules/_api_types_.md) > [RelayOutputSettings](../interfaces/_api_types_.relayoutputsettings.md)

# Interface: RelayOutputSettings

```
                'Bistable' or 'Monostable'
```

```
                        Bistable – After setting the state, the relay remains in this state.
                        Monostable – After setting the state, the relay returns to its idle state after the specified time.
```

## Hierarchy

**RelayOutputSettings**

## Index

### Properties

* [DelayTime](_api_types_.relayoutputsettings.md#delaytime)
* [IdleState](_api_types_.relayoutputsettings.md#idlestate)
* [Mode](_api_types_.relayoutputsettings.md#mode)

---

## Properties

<a id="delaytime"></a>

###  DelayTime

**● DelayTime**: *`string`*

*Defined in [api/types.ts:2021](https://github.com/patrickmichalina/onvif-rx/blob/3ab1739/src/api/types.ts#L2021)*

___
<a id="idlestate"></a>

###  IdleState

**● IdleState**: *[RelayIdleState](../enums/_api_types_.relayidlestate.md)*

*Defined in [api/types.ts:2022](https://github.com/patrickmichalina/onvif-rx/blob/3ab1739/src/api/types.ts#L2022)*

___
<a id="mode"></a>

###  Mode

**● Mode**: *[RelayMode](../enums/_api_types_.relaymode.md)*

*Defined in [api/types.ts:2020](https://github.com/patrickmichalina/onvif-rx/blob/3ab1739/src/api/types.ts#L2020)*

___

