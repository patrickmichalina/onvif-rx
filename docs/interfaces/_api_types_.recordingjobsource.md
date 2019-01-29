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

###  AutoCreateReceiver

**● AutoCreateReceiver**: *`boolean`*

*Defined in [api/types.ts:3708](https://github.com/patrickmichalina/onvif-rx/blob/d62cee9/src/api/types.ts#L3708)*

___
<a id="extension"></a>

###  Extension

**● Extension**: *[RecordingJobSourceExtension](_api_types_.recordingjobsourceextension.md)*

*Defined in [api/types.ts:3710](https://github.com/patrickmichalina/onvif-rx/blob/d62cee9/src/api/types.ts#L3710)*

___
<a id="sourcetoken"></a>

###  SourceToken

**● SourceToken**: *[SourceReference](_api_types_.sourcereference.md)*

*Defined in [api/types.ts:3707](https://github.com/patrickmichalina/onvif-rx/blob/d62cee9/src/api/types.ts#L3707)*

___
<a id="tracks"></a>

###  Tracks

**● Tracks**: *[RecordingJobTrack](_api_types_.recordingjobtrack.md)*

*Defined in [api/types.ts:3709](https://github.com/patrickmichalina/onvif-rx/blob/d62cee9/src/api/types.ts#L3709)*

___

