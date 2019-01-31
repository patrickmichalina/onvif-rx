[onvif-rx](../README.md) > ["api/types"](../modules/_api_types_.md) > [RecordingJobSource](../interfaces/_api_types_.recordingjobsource.md)

# Interface: RecordingJobSource

This field shall be a reference to the source of the data. The type of the source is determined by the attribute Type in the SourceToken structure. If Type is [http://www.onvif.org/ver10/schema/Receiver](http://www.onvif.org/ver10/schema/Receiver), the token is a ReceiverReference. In this case the device shall receive the data over the network. If Type is [http://www.onvif.org/ver10/schema/Profile](http://www.onvif.org/ver10/schema/Profile), the token identifies a media profile, instructing the device to obtain data from a profile that exists on the local device.

## Hierarchy

**RecordingJobSource**

## Index

### Properties

* [AutoCreateReceiver](_api_types_.recordingjobsource.md#autocreatereceiver)
* [Extension](_api_types_.recordingjobsource.md#extension)
* [SourceToken](_api_types_.recordingjobsource.md#sourcetoken)
* [Tracks](_api_types_.recordingjobsource.md#tracks)

---

## Properties

<a id="autocreatereceiver"></a>

### `<Optional>` AutoCreateReceiver

**● AutoCreateReceiver**: *`undefined` \| `false` \| `true`*

*Defined in [api/types.ts:3870](https://github.com/patrickmichalina/onvif-rx/blob/f117e44/src/api/types.ts#L3870)*

___
<a id="extension"></a>

### `<Optional>` Extension

**● Extension**: *[RecordingJobSourceExtension](_api_types_.recordingjobsourceextension.md)*

*Defined in [api/types.ts:3872](https://github.com/patrickmichalina/onvif-rx/blob/f117e44/src/api/types.ts#L3872)*

___
<a id="sourcetoken"></a>

### `<Optional>` SourceToken

**● SourceToken**: *[SourceReference](_api_types_.sourcereference.md)*

*Defined in [api/types.ts:3869](https://github.com/patrickmichalina/onvif-rx/blob/f117e44/src/api/types.ts#L3869)*

___
<a id="tracks"></a>

### `<Optional>` Tracks

**● Tracks**: *[RecordingJobTrack](_api_types_.recordingjobtrack.md)*

*Defined in [api/types.ts:3871](https://github.com/patrickmichalina/onvif-rx/blob/f117e44/src/api/types.ts#L3871)*

___

