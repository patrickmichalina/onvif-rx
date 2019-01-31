[onvif-rx](../README.md) > ["api/types"](../modules/_api_types_.md) > [FocusConfiguration20](../interfaces/_api_types_.focusconfiguration20.md)

# Interface: FocusConfiguration20

```
                    Mode of auto focus.
```

```
                        AUTO - The device automatically adjusts focus.
                        MANUAL - The device does not automatically adjust focus.

                    Note: for devices supporting both manual and auto operation at the same time manual operation may be supported even if the Mode parameter is set to Auto.
```

## Hierarchy

**FocusConfiguration20**

## Index

### Properties

* [AutoFocusMode](_api_types_.focusconfiguration20.md#autofocusmode)
* [DefaultSpeed](_api_types_.focusconfiguration20.md#defaultspeed)
* [Extension](_api_types_.focusconfiguration20.md#extension)
* [FarLimit](_api_types_.focusconfiguration20.md#farlimit)
* [NearLimit](_api_types_.focusconfiguration20.md#nearlimit)

---

## Properties

<a id="autofocusmode"></a>

###  AutoFocusMode

**● AutoFocusMode**: *[AutoFocusMode](../enums/_api_types_.autofocusmode.md)*

*Defined in [api/types.ts:3189](https://github.com/patrickmichalina/onvif-rx/blob/f117e44/src/api/types.ts#L3189)*

___
<a id="defaultspeed"></a>

### `<Optional>` DefaultSpeed

**● DefaultSpeed**: *`undefined` \| `number`*

*Defined in [api/types.ts:3190](https://github.com/patrickmichalina/onvif-rx/blob/f117e44/src/api/types.ts#L3190)*

___
<a id="extension"></a>

### `<Optional>` Extension

**● Extension**: *[FocusConfiguration20Extension](_api_types_.focusconfiguration20extension.md)*

*Defined in [api/types.ts:3193](https://github.com/patrickmichalina/onvif-rx/blob/f117e44/src/api/types.ts#L3193)*

___
<a id="farlimit"></a>

### `<Optional>` FarLimit

**● FarLimit**: *`undefined` \| `number`*

*Defined in [api/types.ts:3192](https://github.com/patrickmichalina/onvif-rx/blob/f117e44/src/api/types.ts#L3192)*

___
<a id="nearlimit"></a>

### `<Optional>` NearLimit

**● NearLimit**: *`undefined` \| `number`*

*Defined in [api/types.ts:3191](https://github.com/patrickmichalina/onvif-rx/blob/f117e44/src/api/types.ts#L3191)*

___

