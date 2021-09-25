[onvif-rx](../README.md) › ["api/types"](../modules/_api_types_.md) › [RecordingInformation](_api_types_.recordinginformation.md)

# Interface: RecordingInformation

Information about the source of the recording. This gives a description of where the data in the recording comes from. Since a single
					recording is intended to record related material, there is just one source. It is indicates the physical location or the
					major data source for the recording. Currently the recordingconfiguration cannot describe each individual data source.

## Hierarchy

* **RecordingInformation**

## Index

### Properties

* [Content](_api_types_.recordinginformation.md#readonly-content)
* [EarliestRecording](_api_types_.recordinginformation.md#optional-readonly-earliestrecording)
* [LatestRecording](_api_types_.recordinginformation.md#optional-readonly-latestrecording)
* [RecordingStatus](_api_types_.recordinginformation.md#readonly-recordingstatus)
* [RecordingToken](_api_types_.recordinginformation.md#readonly-recordingtoken)
* [Source](_api_types_.recordinginformation.md#readonly-source)
* [Track](_api_types_.recordinginformation.md#optional-readonly-track)

## Properties

### `Readonly` Content

• **Content**: *[Description](../modules/_api_types_.md#description)*

*Defined in [api/types.ts:3735](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L3735)*

___

### `Optional` `Readonly` EarliestRecording

• **EarliestRecording**? : *undefined | string*

*Defined in [api/types.ts:3733](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L3733)*

___

### `Optional` `Readonly` LatestRecording

• **LatestRecording**? : *undefined | string*

*Defined in [api/types.ts:3734](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L3734)*

___

### `Readonly` RecordingStatus

• **RecordingStatus**: *[RecordingStatus](../enums/_api_types_.recordingstatus.md)*

*Defined in [api/types.ts:3737](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L3737)*

___

### `Readonly` RecordingToken

• **RecordingToken**: *[RecordingReference](../modules/_api_types_.md#recordingreference)*

*Defined in [api/types.ts:3731](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L3731)*

___

### `Readonly` Source

• **Source**: *[RecordingSourceInformation](_api_types_.recordingsourceinformation.md)*

*Defined in [api/types.ts:3732](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L3732)*

___

### `Optional` `Readonly` Track

• **Track**? : *[TrackInformation](_api_types_.trackinformation.md)*

*Defined in [api/types.ts:3736](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L3736)*
