[onvif-rx](../README.md) > ["api/types"](../modules/_api_types_.md) > [RecordingInformation](../interfaces/_api_types_.recordinginformation.md)

# Interface: RecordingInformation

```
                Information about the source of the recording. This gives a description of where the data in the recording comes from. Since a single
                recording is intended to record related material, there is just one source. It is indicates the physical location or the
                major data source for the recording. Currently the recordingconfiguration cannot describe each individual data source.
```

## Hierarchy

**RecordingInformation**

## Index

### Properties

* [Content](_api_types_.recordinginformation.md#content)
* [EarliestRecording](_api_types_.recordinginformation.md#earliestrecording)
* [LatestRecording](_api_types_.recordinginformation.md#latestrecording)
* [RecordingStatus](_api_types_.recordinginformation.md#recordingstatus)
* [RecordingToken](_api_types_.recordinginformation.md#recordingtoken)
* [Source](_api_types_.recordinginformation.md#source)
* [Track](_api_types_.recordinginformation.md#track)

---

## Properties

<a id="content"></a>

###  Content

**● Content**: *[Description](../modules/_api_types_.md#description)*

*Defined in [api/types.ts:3553](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/api/types.ts#L3553)*

___
<a id="earliestrecording"></a>

### `<Optional>` EarliestRecording

**● EarliestRecording**: *`undefined` \| `string`*

*Defined in [api/types.ts:3551](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/api/types.ts#L3551)*

___
<a id="latestrecording"></a>

### `<Optional>` LatestRecording

**● LatestRecording**: *`undefined` \| `string`*

*Defined in [api/types.ts:3552](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/api/types.ts#L3552)*

___
<a id="recordingstatus"></a>

###  RecordingStatus

**● RecordingStatus**: *[RecordingStatus](../enums/_api_types_.recordingstatus.md)*

*Defined in [api/types.ts:3555](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/api/types.ts#L3555)*

___
<a id="recordingtoken"></a>

###  RecordingToken

**● RecordingToken**: *[RecordingReference](../modules/_api_types_.md#recordingreference)*

*Defined in [api/types.ts:3549](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/api/types.ts#L3549)*

___
<a id="source"></a>

###  Source

**● Source**: *[RecordingSourceInformation](_api_types_.recordingsourceinformation.md)*

*Defined in [api/types.ts:3550](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/api/types.ts#L3550)*

___
<a id="track"></a>

### `<Optional>` Track

**● Track**: *[TrackInformation](_api_types_.trackinformation.md)*

*Defined in [api/types.ts:3554](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/api/types.ts#L3554)*

___

