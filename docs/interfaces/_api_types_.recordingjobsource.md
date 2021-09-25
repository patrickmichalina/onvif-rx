[onvif-rx](../README.md) › ["api/types"](../modules/_api_types_.md) › [RecordingJobSource](_api_types_.recordingjobsource.md)

# Interface: RecordingJobSource

This field shall be a reference to the source of the data. The type of the source
				is determined by the attribute Type in the SourceToken structure. If Type is
				http://www.onvif.org/ver10/schema/Receiver, the token is a ReceiverReference. In this case
				the device shall receive the data over the network. If Type is
				http://www.onvif.org/ver10/schema/Profile, the token identifies a media profile, instructing the
				device to obtain data from a profile that exists on the local device.

## Hierarchy

* **RecordingJobSource**

## Index

### Properties

* [AutoCreateReceiver](_api_types_.recordingjobsource.md#optional-readonly-autocreatereceiver)
* [Extension](_api_types_.recordingjobsource.md#optional-readonly-extension)
* [SourceToken](_api_types_.recordingjobsource.md#optional-readonly-sourcetoken)
* [Tracks](_api_types_.recordingjobsource.md#optional-readonly-tracks)

## Properties

### `Optional` `Readonly` AutoCreateReceiver

• **AutoCreateReceiver**? : *undefined | false | true*

*Defined in [api/types.ts:3890](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L3890)*

___

### `Optional` `Readonly` Extension

• **Extension**? : *[RecordingJobSourceExtension](_api_types_.recordingjobsourceextension.md)*

*Defined in [api/types.ts:3892](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L3892)*

___

### `Optional` `Readonly` SourceToken

• **SourceToken**? : *[SourceReference](_api_types_.sourcereference.md)*

*Defined in [api/types.ts:3889](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L3889)*

___

### `Optional` `Readonly` Tracks

• **Tracks**? : *[RecordingJobTrack](_api_types_.recordingjobtrack.md)*

*Defined in [api/types.ts:3891](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L3891)*
