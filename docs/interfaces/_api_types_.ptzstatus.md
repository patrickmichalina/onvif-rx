[onvif-rx](../README.md) › ["api/types"](../modules/_api_types_.md) › [PTZStatus](_api_types_.ptzstatus.md)

# Interface: PTZStatus

Specifies the absolute position of the PTZ unit together with the Space references. The default absolute spaces of the corresponding PTZ configuration MUST be referenced within the Position element.

## Hierarchy

* **PTZStatus**

## Index

### Properties

* [Error](_api_types_.ptzstatus.md#optional-readonly-error)
* [MoveStatus](_api_types_.ptzstatus.md#optional-readonly-movestatus)
* [Position](_api_types_.ptzstatus.md#optional-readonly-position)
* [UtcTime](_api_types_.ptzstatus.md#readonly-utctime)

## Properties

### `Optional` `Readonly` Error

• **Error**? : *undefined | string*

*Defined in [api/types.ts:327](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L327)*

___

### `Optional` `Readonly` MoveStatus

• **MoveStatus**? : *[PTZMoveStatus](_api_types_.ptzmovestatus.md)*

*Defined in [api/types.ts:326](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L326)*

___

### `Optional` `Readonly` Position

• **Position**? : *[PTZVector](_api_types_.ptzvector.md)*

*Defined in [api/types.ts:325](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L325)*

___

### `Readonly` UtcTime

• **UtcTime**: *string*

*Defined in [api/types.ts:328](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L328)*
