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

*Defined in [api/types.ts:3027](https://github.com/patrickmichalina/onvif-rx/blob/3ab1739/src/api/types.ts#L3027)*

___
<a id="defaultspeed"></a>

### `<Optional>` DefaultSpeed

**● DefaultSpeed**: *`undefined` \| `number`*

*Defined in [api/types.ts:3028](https://github.com/patrickmichalina/onvif-rx/blob/3ab1739/src/api/types.ts#L3028)*

___
<a id="extension"></a>

### `<Optional>` Extension

**● Extension**: *[FocusConfiguration20Extension](_api_types_.focusconfiguration20extension.md)*

*Defined in [api/types.ts:3031](https://github.com/patrickmichalina/onvif-rx/blob/3ab1739/src/api/types.ts#L3031)*

___
<a id="farlimit"></a>

### `<Optional>` FarLimit

**● FarLimit**: *`undefined` \| `number`*

*Defined in [api/types.ts:3030](https://github.com/patrickmichalina/onvif-rx/blob/3ab1739/src/api/types.ts#L3030)*

___
<a id="nearlimit"></a>

### `<Optional>` NearLimit

**● NearLimit**: *`undefined` \| `number`*

*Defined in [api/types.ts:3029](https://github.com/patrickmichalina/onvif-rx/blob/3ab1739/src/api/types.ts#L3029)*

___

