[onvif-rx](../README.md) › ["api/types"](../modules/_api_types_.md) › [H264Configuration](_api_types_.h264configuration.md)

# Interface: H264Configuration

Group of Video frames length. Determines typically the interval in which the I-Frames will be coded. An entry of 1 indicates I-Frames are continuously generated. An entry of 2 indicates that every 2nd image is an I-Frame, and 3 only every 3rd frame, etc. The frames in between are coded as P or B Frames.

## Hierarchy

* **H264Configuration**

## Index

### Properties

* [GovLength](_api_types_.h264configuration.md#readonly-govlength)
* [H264Profile](_api_types_.h264configuration.md#readonly-h264profile)

## Properties

### `Readonly` GovLength

• **GovLength**: *number*

*Defined in [api/types.ts:756](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L756)*

___

### `Readonly` H264Profile

• **H264Profile**: *[H264Profile](../enums/_api_types_.h264profile.md)*

*Defined in [api/types.ts:757](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L757)*
