[onvif-rx](../README.md) > ["api/types"](../modules/_api_types_.md) > [H264Configuration](../interfaces/_api_types_.h264configuration.md)

# Interface: H264Configuration

Group of Video frames length. Determines typically the interval in which the I-Frames will be coded. An entry of 1 indicates I-Frames are continuously generated. An entry of 2 indicates that every 2nd image is an I-Frame, and 3 only every 3rd frame, etc. The frames in between are coded as P or B Frames.

## Hierarchy

**H264Configuration**

## Index

### Properties

* [GovLength](_api_types_.h264configuration.md#govlength)
* [H264Profile](_api_types_.h264configuration.md#h264profile)

---

## Properties

<a id="govlength"></a>

###  GovLength

**● GovLength**: *`number`*

*Defined in [api/types.ts:565](https://github.com/patrickmichalina/onvif-rx/blob/3ab1739/src/api/types.ts#L565)*

___
<a id="h264profile"></a>

###  H264Profile

**● H264Profile**: *[H264Profile](../enums/_api_types_.h264profile.md)*

*Defined in [api/types.ts:566](https://github.com/patrickmichalina/onvif-rx/blob/3ab1739/src/api/types.ts#L566)*

___

