[onvif-rx](../README.md) > ["api/types"](../modules/_api_types_.md) > [Mpeg4Configuration](../interfaces/_api_types_.mpeg4configuration.md)

# Interface: Mpeg4Configuration

Determines the interval in which the I-Frames will be coded. An entry of 1 indicates I-Frames are continuously generated. An entry of 2 indicates that every 2nd image is an I-Frame, and 3 only every 3rd frame, etc. The frames in between are coded as P or B Frames.

## Hierarchy

**Mpeg4Configuration**

## Index

### Properties

* [GovLength](_api_types_.mpeg4configuration.md#govlength)
* [Mpeg4Profile](_api_types_.mpeg4configuration.md#mpeg4profile)

---

## Properties

<a id="govlength"></a>

###  GovLength

**● GovLength**: *`number`*

*Defined in [api/types.ts:557](https://github.com/patrickmichalina/onvif-rx/blob/3ab1739/src/api/types.ts#L557)*

___
<a id="mpeg4profile"></a>

###  Mpeg4Profile

**● Mpeg4Profile**: *[Mpeg4Profile](../enums/_api_types_.mpeg4profile.md)*

*Defined in [api/types.ts:558](https://github.com/patrickmichalina/onvif-rx/blob/3ab1739/src/api/types.ts#L558)*

___

