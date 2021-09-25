[onvif-rx](../README.md) › ["api/types"](../modules/_api_types_.md) › [Mpeg4Configuration](_api_types_.mpeg4configuration.md)

# Interface: Mpeg4Configuration

Determines the interval in which the I-Frames will be coded. An entry of 1 indicates I-Frames are continuously generated. An entry of 2 indicates that every 2nd image is an I-Frame, and 3 only every 3rd frame, etc. The frames in between are coded as P or B Frames.

## Hierarchy

* **Mpeg4Configuration**

## Index

### Properties

* [GovLength](_api_types_.mpeg4configuration.md#readonly-govlength)
* [Mpeg4Profile](_api_types_.mpeg4configuration.md#readonly-mpeg4profile)

## Properties

### `Readonly` GovLength

• **GovLength**: *number*

*Defined in [api/types.ts:748](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L748)*

___

### `Readonly` Mpeg4Profile

• **Mpeg4Profile**: *[Mpeg4Profile](../enums/_api_types_.mpeg4profile.md)*

*Defined in [api/types.ts:749](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L749)*
