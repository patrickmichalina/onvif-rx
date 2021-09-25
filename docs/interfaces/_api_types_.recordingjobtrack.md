[onvif-rx](../README.md) › ["api/types"](../modules/_api_types_.md) › [RecordingJobTrack](_api_types_.recordingjobtrack.md)

# Interface: RecordingJobTrack

If the received RTSP stream contains multiple tracks of the same type, the
						SourceTag differentiates between those Tracks. This field can be ignored in case of recording a local source.

## Hierarchy

* **RecordingJobTrack**

## Index

### Properties

* [Destination](_api_types_.recordingjobtrack.md#readonly-destination)
* [SourceTag](_api_types_.recordingjobtrack.md#readonly-sourcetag)

## Properties

### `Readonly` Destination

• **Destination**: *[TrackReference](../modules/_api_types_.md#trackreference)*

*Defined in [api/types.ts:3907](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L3907)*

___

### `Readonly` SourceTag

• **SourceTag**: *string*

*Defined in [api/types.ts:3906](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L3906)*
