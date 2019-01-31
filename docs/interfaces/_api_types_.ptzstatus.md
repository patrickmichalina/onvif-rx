[onvif-rx](../README.md) > ["api/types"](../modules/_api_types_.md) > [PTZStatus](../interfaces/_api_types_.ptzstatus.md)

# Interface: PTZStatus

```
        Specifies the absolute position of the PTZ unit together with the Space references. The default absolute spaces of the corresponding PTZ configuration MUST be referenced within the Position element.
```

## Hierarchy

**PTZStatus**

## Index

### Properties

* [Error](_api_types_.ptzstatus.md#error)
* [MoveStatus](_api_types_.ptzstatus.md#movestatus)
* [Position](_api_types_.ptzstatus.md#position)
* [UtcTime](_api_types_.ptzstatus.md#utctime)

---

## Properties

<a id="error"></a>

### `<Optional>` Error

**● Error**: *`undefined` \| `string`*

*Defined in [api/types.ts:325](https://github.com/patrickmichalina/onvif-rx/blob/f117e44/src/api/types.ts#L325)*

___
<a id="movestatus"></a>

### `<Optional>` MoveStatus

**● MoveStatus**: *[PTZMoveStatus](_api_types_.ptzmovestatus.md)*

*Defined in [api/types.ts:324](https://github.com/patrickmichalina/onvif-rx/blob/f117e44/src/api/types.ts#L324)*

___
<a id="position"></a>

### `<Optional>` Position

**● Position**: *[PTZVector](_api_types_.ptzvector.md)*

*Defined in [api/types.ts:323](https://github.com/patrickmichalina/onvif-rx/blob/f117e44/src/api/types.ts#L323)*

___
<a id="utctime"></a>

###  UtcTime

**● UtcTime**: *`string`*

*Defined in [api/types.ts:326](https://github.com/patrickmichalina/onvif-rx/blob/f117e44/src/api/types.ts#L326)*

___

