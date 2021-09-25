[onvif-rx](../README.md) › ["api/types"](../modules/_api_types_.md) › [RelayOutputSettings](_api_types_.relayoutputsettings.md)

# Interface: RelayOutputSettings

'Bistable' or 'Monostable'

							Bistable – After setting the state, the relay remains in this state.
							Monostable – After setting the state, the relay returns to its idle state after the specified time.

## Hierarchy

* **RelayOutputSettings**

## Index

### Properties

* [DelayTime](_api_types_.relayoutputsettings.md#readonly-delaytime)
* [IdleState](_api_types_.relayoutputsettings.md#readonly-idlestate)
* [Mode](_api_types_.relayoutputsettings.md#readonly-mode)

## Properties

### `Readonly` DelayTime

• **DelayTime**: *string*

*Defined in [api/types.ts:2212](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L2212)*

___

### `Readonly` IdleState

• **IdleState**: *[RelayIdleState](../enums/_api_types_.relayidlestate.md)*

*Defined in [api/types.ts:2213](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L2213)*

___

### `Readonly` Mode

• **Mode**: *[RelayMode](../enums/_api_types_.relaymode.md)*

*Defined in [api/types.ts:2211](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L2211)*
