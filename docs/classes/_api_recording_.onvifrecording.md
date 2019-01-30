[onvif-rx](../README.md) > ["api/recording"](../modules/_api_recording_.md) > [ONVIFRecording](../classes/_api_recording_.onvifrecording.md)

# Class: ONVIFRecording

## Hierarchy

**ONVIFRecording**

## Index

### Constructors

* [constructor](_api_recording_.onvifrecording.md#constructor)

### Properties

* [config](_api_recording_.onvifrecording.md#config)

### Methods

* [CreateRecording](_api_recording_.onvifrecording.md#createrecording)
* [CreateRecordingJob](_api_recording_.onvifrecording.md#createrecordingjob)
* [CreateTrack](_api_recording_.onvifrecording.md#createtrack)
* [DeleteRecording](_api_recording_.onvifrecording.md#deleterecording)
* [DeleteRecordingJob](_api_recording_.onvifrecording.md#deleterecordingjob)
* [DeleteTrack](_api_recording_.onvifrecording.md#deletetrack)
* [ExportRecordedData](_api_recording_.onvifrecording.md#exportrecordeddata)
* [GetExportRecordedDataState](_api_recording_.onvifrecording.md#getexportrecordeddatastate)
* [GetRecordingConfiguration](_api_recording_.onvifrecording.md#getrecordingconfiguration)
* [GetRecordingJobConfiguration](_api_recording_.onvifrecording.md#getrecordingjobconfiguration)
* [GetRecordingJobState](_api_recording_.onvifrecording.md#getrecordingjobstate)
* [GetRecordingJobs](_api_recording_.onvifrecording.md#getrecordingjobs)
* [GetRecordingOptions](_api_recording_.onvifrecording.md#getrecordingoptions)
* [GetRecordings](_api_recording_.onvifrecording.md#getrecordings)
* [GetServiceCapabilities](_api_recording_.onvifrecording.md#getservicecapabilities)
* [GetTrackConfiguration](_api_recording_.onvifrecording.md#gettrackconfiguration)
* [SetRecordingConfiguration](_api_recording_.onvifrecording.md#setrecordingconfiguration)
* [SetRecordingJobConfiguration](_api_recording_.onvifrecording.md#setrecordingjobconfiguration)
* [SetRecordingJobMode](_api_recording_.onvifrecording.md#setrecordingjobmode)
* [SetTrackConfiguration](_api_recording_.onvifrecording.md#settrackconfiguration)
* [StopExportRecordedData](_api_recording_.onvifrecording.md#stopexportrecordeddata)
* [CreateRecording](_api_recording_.onvifrecording.md#createrecording-1)
* [CreateRecordingJob](_api_recording_.onvifrecording.md#createrecordingjob-1)
* [CreateTrack](_api_recording_.onvifrecording.md#createtrack-1)
* [DeleteRecording](_api_recording_.onvifrecording.md#deleterecording-1)
* [DeleteRecordingJob](_api_recording_.onvifrecording.md#deleterecordingjob-1)
* [DeleteTrack](_api_recording_.onvifrecording.md#deletetrack-1)
* [ExportRecordedData](_api_recording_.onvifrecording.md#exportrecordeddata-1)
* [GetExportRecordedDataState](_api_recording_.onvifrecording.md#getexportrecordeddatastate-1)
* [GetRecordingConfiguration](_api_recording_.onvifrecording.md#getrecordingconfiguration-1)
* [GetRecordingJobConfiguration](_api_recording_.onvifrecording.md#getrecordingjobconfiguration-1)
* [GetRecordingJobState](_api_recording_.onvifrecording.md#getrecordingjobstate-1)
* [GetRecordingJobs](_api_recording_.onvifrecording.md#getrecordingjobs-1)
* [GetRecordingOptions](_api_recording_.onvifrecording.md#getrecordingoptions-1)
* [GetRecordings](_api_recording_.onvifrecording.md#getrecordings-1)
* [GetServiceCapabilities](_api_recording_.onvifrecording.md#getservicecapabilities-1)
* [GetTrackConfiguration](_api_recording_.onvifrecording.md#gettrackconfiguration-1)
* [SetRecordingConfiguration](_api_recording_.onvifrecording.md#setrecordingconfiguration-1)
* [SetRecordingJobConfiguration](_api_recording_.onvifrecording.md#setrecordingjobconfiguration-1)
* [SetRecordingJobMode](_api_recording_.onvifrecording.md#setrecordingjobmode-1)
* [SetTrackConfiguration](_api_recording_.onvifrecording.md#settrackconfiguration-1)
* [StopExportRecordedData](_api_recording_.onvifrecording.md#stopexportrecordeddata-1)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new ONVIFRecording**(config: *[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md)*): [ONVIFRecording](_api_recording_.onvifrecording.md)

*Defined in [api/recording.ts:5](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/api/recording.ts#L5)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| config | [IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md) |

**Returns:** [ONVIFRecording](_api_recording_.onvifrecording.md)

___

## Properties

<a id="config"></a>

### `<Private>` config

**● config**: *[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md)*

*Defined in [api/recording.ts:6](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/api/recording.ts#L6)*

___

## Methods

<a id="createrecording"></a>

###  CreateRecording

▸ **CreateRecording**(RecordingConfiguration: *[RecordingConfiguration](../interfaces/_api_types_.recordingconfiguration.md)*): `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>

*Defined in [api/recording.ts:272](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/api/recording.ts#L272)*

CreateRecording shall create a new recording. The new recording shall be created with a track for each supported TrackType see Recording Control Spec. This method is optional. It shall be available if the Recording/DynamicRecordings capability is TRUE. When successfully completed, CreateRecording shall have created three tracks with the following configurations:

TrackToken TrackType

VIDEO001 Video

AUDIO001 Audio

META001 Metadata

All TrackConfigurations shall have the MaximumRetentionTime set to 0 (unlimited), and the Description set to the empty string.

**Parameters:**

| Name | Type |
| ------ | ------ |
| RecordingConfiguration | [RecordingConfiguration](../interfaces/_api_types_.recordingconfiguration.md) |

**Returns:** `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>

___
<a id="createrecordingjob"></a>

###  CreateRecordingJob

▸ **CreateRecordingJob**(JobConfiguration: *[RecordingJobConfiguration](../interfaces/_api_types_.recordingjobconfiguration.md)*): `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>

*Defined in [api/recording.ts:361](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/api/recording.ts#L361)*

CreateRecordingJob shall create a new recording job. The JobConfiguration returned from CreateRecordingJob shall be identical to the JobConfiguration passed into CreateRecordingJob, except for the ReceiverToken and the AutoCreateReceiver. In the returned structure, the ReceiverToken shall be present and valid and the AutoCreateReceiver field shall be omitted.

**Parameters:**

| Name | Type |
| ------ | ------ |
| JobConfiguration | [RecordingJobConfiguration](../interfaces/_api_types_.recordingjobconfiguration.md) |

**Returns:** `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>

___
<a id="createtrack"></a>

###  CreateTrack

▸ **CreateTrack**(RecordingToken: *[RecordingReference](../modules/_api_types_.md#recordingreference)*, TrackConfiguration: *[TrackConfiguration](../interfaces/_api_types_.trackconfiguration.md)*): `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>

*Defined in [api/recording.ts:326](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/api/recording.ts#L326)*

This method shall create a new track within a recording. This method is optional. It shall be available if the Recording/DynamicTracks capability is TRUE. A TrackToken in itself does not uniquely identify a specific track. Tracks within different recordings may have the same TrackToken.

**Parameters:**

| Name | Type |
| ------ | ------ |
| RecordingToken | [RecordingReference](../modules/_api_types_.md#recordingreference) |
| TrackConfiguration | [TrackConfiguration](../interfaces/_api_types_.trackconfiguration.md) |

**Returns:** `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>

___
<a id="deleterecording"></a>

###  DeleteRecording

▸ **DeleteRecording**(RecordingToken: *[RecordingReference](../modules/_api_types_.md#recordingreference)*): `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>

*Defined in [api/recording.ts:286](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/api/recording.ts#L286)*

DeleteRecording shall delete a recording object. Whenever a recording is deleted, the device shall delete all the tracks that are part of the recording, and it shall delete all the Recording Jobs that record into the recording. For each deleted recording job, the device shall also delete all the receiver objects associated with the recording job that are automatically created using the AutoCreateReceiver field of the recording job configuration structure and are not used in any other recording job. This method is optional. It shall be available if the Recording/DynamicRecordings capability is TRUE.

**Parameters:**

| Name | Type |
| ------ | ------ |
| RecordingToken | [RecordingReference](../modules/_api_types_.md#recordingreference) |

**Returns:** `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>

___
<a id="deleterecordingjob"></a>

###  DeleteRecordingJob

▸ **DeleteRecordingJob**(JobToken: *[RecordingJobReference](../modules/_api_types_.md#recordingjobreference)*): `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>

*Defined in [api/recording.ts:371](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/api/recording.ts#L371)*

DeleteRecordingJob removes a recording job. It shall also implicitly delete all the receiver objects associated with the recording job that are automatically created using the AutoCreateReceiver field of the recording job configuration structure and are not used in any other recording job.

**Parameters:**

| Name | Type |
| ------ | ------ |
| JobToken | [RecordingJobReference](../modules/_api_types_.md#recordingjobreference) |

**Returns:** `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>

___
<a id="deletetrack"></a>

###  DeleteTrack

▸ **DeleteTrack**(RecordingToken: *[RecordingReference](../modules/_api_types_.md#recordingreference)*, TrackToken: *[TrackReference](../modules/_api_types_.md#trackreference)*): `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>

*Defined in [api/recording.ts:335](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/api/recording.ts#L335)*

DeleteTrack shall remove a track from a recording. All the data in the track shall be deleted. This method is optional. It shall be available if the Recording/DynamicTracks capability is TRUE.

**Parameters:**

| Name | Type |
| ------ | ------ |
| RecordingToken | [RecordingReference](../modules/_api_types_.md#recordingreference) |
| TrackToken | [TrackReference](../modules/_api_types_.md#trackreference) |

**Returns:** `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>

___
<a id="exportrecordeddata"></a>

###  ExportRecordedData

▸ **ExportRecordedData**(SearchScope: *[SearchScope](../interfaces/_api_types_.searchscope.md)*, FileFormat: *`string`*, StorageDestination: *[StorageReferencePath](../interfaces/_api_types_.storagereferencepath.md)*, StartPoint: *`string`*, EndPoint: *`string`*): `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>

*Defined in [api/recording.ts:421](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/api/recording.ts#L421)*

Exports the selected recordings (from existing recorded data) to the given storage target based on the requested file format.

**Parameters:**

| Name | Type |
| ------ | ------ |
| SearchScope | [SearchScope](../interfaces/_api_types_.searchscope.md) |
| FileFormat | `string` |
| StorageDestination | [StorageReferencePath](../interfaces/_api_types_.storagereferencepath.md) |
| StartPoint | `string` |
| EndPoint | `string` |

**Returns:** `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>

___
<a id="getexportrecordeddatastate"></a>

###  GetExportRecordedDataState

▸ **GetExportRecordedDataState**(OperationToken: *[ReferenceToken](../modules/_api_types_.md#referencetoken)*): `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>

*Defined in [api/recording.ts:439](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/api/recording.ts#L439)*

Retrieves the status of selected ExportRecordedData operation.

**Parameters:**

| Name | Type |
| ------ | ------ |
| OperationToken | [ReferenceToken](../modules/_api_types_.md#referencetoken) |

**Returns:** `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>

___
<a id="getrecordingconfiguration"></a>

###  GetRecordingConfiguration

▸ **GetRecordingConfiguration**(RecordingToken: *[RecordingReference](../modules/_api_types_.md#recordingreference)*): `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>

*Defined in [api/recording.ts:308](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/api/recording.ts#L308)*

GetRecordingConfiguration shall retrieve the recording configuration for a recording.

**Parameters:**

| Name | Type |
| ------ | ------ |
| RecordingToken | [RecordingReference](../modules/_api_types_.md#recordingreference) |

**Returns:** `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>

___
<a id="getrecordingjobconfiguration"></a>

###  GetRecordingJobConfiguration

▸ **GetRecordingJobConfiguration**(JobToken: *[RecordingJobReference](../modules/_api_types_.md#recordingjobreference)*): `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>

*Defined in [api/recording.ts:395](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/api/recording.ts#L395)*

GetRecordingJobConfiguration shall return the current configuration for a recording job.

**Parameters:**

| Name | Type |
| ------ | ------ |
| JobToken | [RecordingJobReference](../modules/_api_types_.md#recordingjobreference) |

**Returns:** `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>

___
<a id="getrecordingjobstate"></a>

###  GetRecordingJobState

▸ **GetRecordingJobState**(JobToken: *[RecordingJobReference](../modules/_api_types_.md#recordingjobreference)*): `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>

*Defined in [api/recording.ts:412](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/api/recording.ts#L412)*

GetRecordingJobState returns the state of a recording job. It includes an aggregated state, and state for each track of the recording job.

**Parameters:**

| Name | Type |
| ------ | ------ |
| JobToken | [RecordingJobReference](../modules/_api_types_.md#recordingjobreference) |

**Returns:** `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>

___
<a id="getrecordingjobs"></a>

###  GetRecordingJobs

▸ **GetRecordingJobs**(): `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>

*Defined in [api/recording.ts:378](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/api/recording.ts#L378)*

GetRecordingJobs shall return a list of all the recording jobs in the device.

**Returns:** `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>

___
<a id="getrecordingoptions"></a>

###  GetRecordingOptions

▸ **GetRecordingOptions**(RecordingToken: *[RecordingReference](../modules/_api_types_.md#recordingreference)*): `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>

*Defined in [api/recording.ts:315](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/api/recording.ts#L315)*

GetRecordingOptions returns information for a recording identified by the RecordingToken. The information includes the number of additonal tracks as well as recording jobs that can be configured.

**Parameters:**

| Name | Type |
| ------ | ------ |
| RecordingToken | [RecordingReference](../modules/_api_types_.md#recordingreference) |

**Returns:** `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>

___
<a id="getrecordings"></a>

###  GetRecordings

▸ **GetRecordings**(): `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>

*Defined in [api/recording.ts:294](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/api/recording.ts#L294)*

GetRecordings shall return a description of all the recordings in the device. This description shall include a list of all the tracks for each recording.

**Returns:** `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>

___
<a id="getservicecapabilities"></a>

###  GetServiceCapabilities

▸ **GetServiceCapabilities**(): `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>

*Defined in [api/recording.ts:250](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/api/recording.ts#L250)*

Returns the capabilities of the recording service. The result is returned in a typed answer.

**Returns:** `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>

___
<a id="gettrackconfiguration"></a>

###  GetTrackConfiguration

▸ **GetTrackConfiguration**(RecordingToken: *[RecordingReference](../modules/_api_types_.md#recordingreference)*, TrackToken: *[TrackReference](../modules/_api_types_.md#trackreference)*): `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>

*Defined in [api/recording.ts:342](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/api/recording.ts#L342)*

GetTrackConfiguration shall retrieve the configuration for a specific track.

**Parameters:**

| Name | Type |
| ------ | ------ |
| RecordingToken | [RecordingReference](../modules/_api_types_.md#recordingreference) |
| TrackToken | [TrackReference](../modules/_api_types_.md#trackreference) |

**Returns:** `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>

___
<a id="setrecordingconfiguration"></a>

###  SetRecordingConfiguration

▸ **SetRecordingConfiguration**(RecordingToken: *[RecordingReference](../modules/_api_types_.md#recordingreference)*, RecordingConfiguration: *[RecordingConfiguration](../interfaces/_api_types_.recordingconfiguration.md)*): `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>

*Defined in [api/recording.ts:301](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/api/recording.ts#L301)*

SetRecordingConfiguration shall change the configuration of a recording.

**Parameters:**

| Name | Type |
| ------ | ------ |
| RecordingToken | [RecordingReference](../modules/_api_types_.md#recordingreference) |
| RecordingConfiguration | [RecordingConfiguration](../interfaces/_api_types_.recordingconfiguration.md) |

**Returns:** `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>

___
<a id="setrecordingjobconfiguration"></a>

###  SetRecordingJobConfiguration

▸ **SetRecordingJobConfiguration**(JobToken: *[RecordingJobReference](../modules/_api_types_.md#recordingjobreference)*, JobConfiguration: *[RecordingJobConfiguration](../interfaces/_api_types_.recordingjobconfiguration.md)*): `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>

*Defined in [api/recording.ts:388](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/api/recording.ts#L388)*

SetRecordingJobConfiguration shall change the configuration for a recording job. SetRecordingJobConfiguration shall implicitly delete any receiver objects that were created automatically if they are no longer used as a result of changing the recording job configuration.

**Parameters:**

| Name | Type |
| ------ | ------ |
| JobToken | [RecordingJobReference](../modules/_api_types_.md#recordingjobreference) |
| JobConfiguration | [RecordingJobConfiguration](../interfaces/_api_types_.recordingjobconfiguration.md) |

**Returns:** `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>

___
<a id="setrecordingjobmode"></a>

###  SetRecordingJobMode

▸ **SetRecordingJobMode**(JobToken: *[RecordingJobReference](../modules/_api_types_.md#recordingjobreference)*, Mode: *[RecordingJobMode](../modules/_api_types_.md#recordingjobmode)*): `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>

*Defined in [api/recording.ts:404](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/api/recording.ts#L404)*

SetRecordingJobMode shall change the mode of the recording job. Using this method shall be equivalent to retrieving the recording job configuration, and writing it back with a different mode.

**Parameters:**

| Name | Type |
| ------ | ------ |
| JobToken | [RecordingJobReference](../modules/_api_types_.md#recordingjobreference) |
| Mode | [RecordingJobMode](../modules/_api_types_.md#recordingjobmode) |

**Returns:** `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>

___
<a id="settrackconfiguration"></a>

###  SetTrackConfiguration

▸ **SetTrackConfiguration**(RecordingToken: *[RecordingReference](../modules/_api_types_.md#recordingreference)*, TrackToken: *[TrackReference](../modules/_api_types_.md#trackreference)*, TrackConfiguration: *[TrackConfiguration](../interfaces/_api_types_.trackconfiguration.md)*): `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>

*Defined in [api/recording.ts:349](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/api/recording.ts#L349)*

SetTrackConfiguration shall change the configuration of a track.

**Parameters:**

| Name | Type |
| ------ | ------ |
| RecordingToken | [RecordingReference](../modules/_api_types_.md#recordingreference) |
| TrackToken | [TrackReference](../modules/_api_types_.md#trackreference) |
| TrackConfiguration | [TrackConfiguration](../interfaces/_api_types_.trackconfiguration.md) |

**Returns:** `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>

___
<a id="stopexportrecordeddata"></a>

###  StopExportRecordedData

▸ **StopExportRecordedData**(OperationToken: *[ReferenceToken](../modules/_api_types_.md#referencetoken)*): `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>

*Defined in [api/recording.ts:430](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/api/recording.ts#L430)*

Stops the selected ExportRecordedData operation.

**Parameters:**

| Name | Type |
| ------ | ------ |
| OperationToken | [ReferenceToken](../modules/_api_types_.md#referencetoken) |

**Returns:** `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>

___
<a id="createrecording-1"></a>

### `<Static>` CreateRecording

▸ **CreateRecording**(RecordingConfiguration: *[RecordingConfiguration](../interfaces/_api_types_.recordingconfiguration.md)*): `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

*Defined in [api/recording.ts:36](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/api/recording.ts#L36)*

CreateRecording shall create a new recording. The new recording shall be created with a track for each supported TrackType see Recording Control Spec. This method is optional. It shall be available if the Recording/DynamicRecordings capability is TRUE. When successfully completed, CreateRecording shall have created three tracks with the following configurations:

TrackToken TrackType

VIDEO001 Video

AUDIO001 Audio

META001 Metadata

All TrackConfigurations shall have the MaximumRetentionTime set to 0 (unlimited), and the Description set to the empty string.

**Parameters:**

| Name | Type |
| ------ | ------ |
| RecordingConfiguration | [RecordingConfiguration](../interfaces/_api_types_.recordingconfiguration.md) |

**Returns:** `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

___
<a id="createrecordingjob-1"></a>

### `<Static>` CreateRecordingJob

▸ **CreateRecordingJob**(JobConfiguration: *[RecordingJobConfiguration](../interfaces/_api_types_.recordingjobconfiguration.md)*): `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

*Defined in [api/recording.ts:145](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/api/recording.ts#L145)*

CreateRecordingJob shall create a new recording job. The JobConfiguration returned from CreateRecordingJob shall be identical to the JobConfiguration passed into CreateRecordingJob, except for the ReceiverToken and the AutoCreateReceiver. In the returned structure, the ReceiverToken shall be present and valid and the AutoCreateReceiver field shall be omitted.

**Parameters:**

| Name | Type |
| ------ | ------ |
| JobConfiguration | [RecordingJobConfiguration](../interfaces/_api_types_.recordingjobconfiguration.md) |

**Returns:** `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

___
<a id="createtrack-1"></a>

### `<Static>` CreateTrack

▸ **CreateTrack**(RecordingToken: *[RecordingReference](../modules/_api_types_.md#recordingreference)*, TrackConfiguration: *[TrackConfiguration](../interfaces/_api_types_.trackconfiguration.md)*): `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

*Defined in [api/recording.ts:102](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/api/recording.ts#L102)*

This method shall create a new track within a recording. This method is optional. It shall be available if the Recording/DynamicTracks capability is TRUE. A TrackToken in itself does not uniquely identify a specific track. Tracks within different recordings may have the same TrackToken.

**Parameters:**

| Name | Type |
| ------ | ------ |
| RecordingToken | [RecordingReference](../modules/_api_types_.md#recordingreference) |
| TrackConfiguration | [TrackConfiguration](../interfaces/_api_types_.trackconfiguration.md) |

**Returns:** `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

___
<a id="deleterecording-1"></a>

### `<Static>` DeleteRecording

▸ **DeleteRecording**(RecordingToken: *[RecordingReference](../modules/_api_types_.md#recordingreference)*): `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

*Defined in [api/recording.ts:52](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/api/recording.ts#L52)*

DeleteRecording shall delete a recording object. Whenever a recording is deleted, the device shall delete all the tracks that are part of the recording, and it shall delete all the Recording Jobs that record into the recording. For each deleted recording job, the device shall also delete all the receiver objects associated with the recording job that are automatically created using the AutoCreateReceiver field of the recording job configuration structure and are not used in any other recording job. This method is optional. It shall be available if the Recording/DynamicRecordings capability is TRUE.

**Parameters:**

| Name | Type |
| ------ | ------ |
| RecordingToken | [RecordingReference](../modules/_api_types_.md#recordingreference) |

**Returns:** `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

___
<a id="deleterecordingjob-1"></a>

### `<Static>` DeleteRecordingJob

▸ **DeleteRecordingJob**(JobToken: *[RecordingJobReference](../modules/_api_types_.md#recordingjobreference)*): `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

*Defined in [api/recording.ts:157](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/api/recording.ts#L157)*

DeleteRecordingJob removes a recording job. It shall also implicitly delete all the receiver objects associated with the recording job that are automatically created using the AutoCreateReceiver field of the recording job configuration structure and are not used in any other recording job.

**Parameters:**

| Name | Type |
| ------ | ------ |
| JobToken | [RecordingJobReference](../modules/_api_types_.md#recordingjobreference) |

**Returns:** `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

___
<a id="deletetrack-1"></a>

### `<Static>` DeleteTrack

▸ **DeleteTrack**(RecordingToken: *[RecordingReference](../modules/_api_types_.md#recordingreference)*, TrackToken: *[TrackReference](../modules/_api_types_.md#trackreference)*): `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

*Defined in [api/recording.ts:113](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/api/recording.ts#L113)*

DeleteTrack shall remove a track from a recording. All the data in the track shall be deleted. This method is optional. It shall be available if the Recording/DynamicTracks capability is TRUE.

**Parameters:**

| Name | Type |
| ------ | ------ |
| RecordingToken | [RecordingReference](../modules/_api_types_.md#recordingreference) |
| TrackToken | [TrackReference](../modules/_api_types_.md#trackreference) |

**Returns:** `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

___
<a id="exportrecordeddata-1"></a>

### `<Static>` ExportRecordedData

▸ **ExportRecordedData**(SearchScope: *[SearchScope](../interfaces/_api_types_.searchscope.md)*, FileFormat: *`string`*, StorageDestination: *[StorageReferencePath](../interfaces/_api_types_.storagereferencepath.md)*, StartPoint?: *`undefined` \| `string`*, EndPoint?: *`undefined` \| `string`*): `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

*Defined in [api/recording.ts:219](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/api/recording.ts#L219)*

Exports the selected recordings (from existing recorded data) to the given storage target based on the requested file format.

**Parameters:**

| Name | Type |
| ------ | ------ |
| SearchScope | [SearchScope](../interfaces/_api_types_.searchscope.md) |
| FileFormat | `string` |
| StorageDestination | [StorageReferencePath](../interfaces/_api_types_.storagereferencepath.md) |
| `Optional` StartPoint | `undefined` \| `string` |
| `Optional` EndPoint | `undefined` \| `string` |

**Returns:** `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

___
<a id="getexportrecordeddatastate-1"></a>

### `<Static>` GetExportRecordedDataState

▸ **GetExportRecordedDataState**(OperationToken: *[ReferenceToken](../modules/_api_types_.md#referencetoken)*): `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

*Defined in [api/recording.ts:241](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/api/recording.ts#L241)*

Retrieves the status of selected ExportRecordedData operation.

**Parameters:**

| Name | Type |
| ------ | ------ |
| OperationToken | [ReferenceToken](../modules/_api_types_.md#referencetoken) |

**Returns:** `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

___
<a id="getrecordingconfiguration-1"></a>

### `<Static>` GetRecordingConfiguration

▸ **GetRecordingConfiguration**(RecordingToken: *[RecordingReference](../modules/_api_types_.md#recordingreference)*): `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

*Defined in [api/recording.ts:80](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/api/recording.ts#L80)*

GetRecordingConfiguration shall retrieve the recording configuration for a recording.

**Parameters:**

| Name | Type |
| ------ | ------ |
| RecordingToken | [RecordingReference](../modules/_api_types_.md#recordingreference) |

**Returns:** `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

___
<a id="getrecordingjobconfiguration-1"></a>

### `<Static>` GetRecordingJobConfiguration

▸ **GetRecordingJobConfiguration**(JobToken: *[RecordingJobReference](../modules/_api_types_.md#recordingjobreference)*): `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

*Defined in [api/recording.ts:187](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/api/recording.ts#L187)*

GetRecordingJobConfiguration shall return the current configuration for a recording job.

**Parameters:**

| Name | Type |
| ------ | ------ |
| JobToken | [RecordingJobReference](../modules/_api_types_.md#recordingjobreference) |

**Returns:** `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

___
<a id="getrecordingjobstate-1"></a>

### `<Static>` GetRecordingJobState

▸ **GetRecordingJobState**(JobToken: *[RecordingJobReference](../modules/_api_types_.md#recordingjobreference)*): `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

*Defined in [api/recording.ts:208](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/api/recording.ts#L208)*

GetRecordingJobState returns the state of a recording job. It includes an aggregated state, and state for each track of the recording job.

**Parameters:**

| Name | Type |
| ------ | ------ |
| JobToken | [RecordingJobReference](../modules/_api_types_.md#recordingjobreference) |

**Returns:** `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

___
<a id="getrecordingjobs-1"></a>

### `<Static>` GetRecordingJobs

▸ **GetRecordingJobs**(): `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

*Defined in [api/recording.ts:166](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/api/recording.ts#L166)*

GetRecordingJobs shall return a list of all the recording jobs in the device.

**Returns:** `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

___
<a id="getrecordingoptions-1"></a>

### `<Static>` GetRecordingOptions

▸ **GetRecordingOptions**(RecordingToken: *[RecordingReference](../modules/_api_types_.md#recordingreference)*): `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

*Defined in [api/recording.ts:89](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/api/recording.ts#L89)*

GetRecordingOptions returns information for a recording identified by the RecordingToken. The information includes the number of additonal tracks as well as recording jobs that can be configured.

**Parameters:**

| Name | Type |
| ------ | ------ |
| RecordingToken | [RecordingReference](../modules/_api_types_.md#recordingreference) |

**Returns:** `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

___
<a id="getrecordings-1"></a>

### `<Static>` GetRecordings

▸ **GetRecordings**(): `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

*Defined in [api/recording.ts:62](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/api/recording.ts#L62)*

GetRecordings shall return a description of all the recordings in the device. This description shall include a list of all the tracks for each recording.

**Returns:** `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

___
<a id="getservicecapabilities-1"></a>

### `<Static>` GetServiceCapabilities

▸ **GetServiceCapabilities**(): `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

*Defined in [api/recording.ts:12](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/api/recording.ts#L12)*

Returns the capabilities of the recording service. The result is returned in a typed answer.

**Returns:** `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

___
<a id="gettrackconfiguration-1"></a>

### `<Static>` GetTrackConfiguration

▸ **GetTrackConfiguration**(RecordingToken: *[RecordingReference](../modules/_api_types_.md#recordingreference)*, TrackToken: *[TrackReference](../modules/_api_types_.md#trackreference)*): `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

*Defined in [api/recording.ts:122](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/api/recording.ts#L122)*

GetTrackConfiguration shall retrieve the configuration for a specific track.

**Parameters:**

| Name | Type |
| ------ | ------ |
| RecordingToken | [RecordingReference](../modules/_api_types_.md#recordingreference) |
| TrackToken | [TrackReference](../modules/_api_types_.md#trackreference) |

**Returns:** `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

___
<a id="setrecordingconfiguration-1"></a>

### `<Static>` SetRecordingConfiguration

▸ **SetRecordingConfiguration**(RecordingToken: *[RecordingReference](../modules/_api_types_.md#recordingreference)*, RecordingConfiguration: *[RecordingConfiguration](../interfaces/_api_types_.recordingconfiguration.md)*): `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

*Defined in [api/recording.ts:71](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/api/recording.ts#L71)*

SetRecordingConfiguration shall change the configuration of a recording.

**Parameters:**

| Name | Type |
| ------ | ------ |
| RecordingToken | [RecordingReference](../modules/_api_types_.md#recordingreference) |
| RecordingConfiguration | [RecordingConfiguration](../interfaces/_api_types_.recordingconfiguration.md) |

**Returns:** `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

___
<a id="setrecordingjobconfiguration-1"></a>

### `<Static>` SetRecordingJobConfiguration

▸ **SetRecordingJobConfiguration**(JobToken: *[RecordingJobReference](../modules/_api_types_.md#recordingjobreference)*, JobConfiguration: *[RecordingJobConfiguration](../interfaces/_api_types_.recordingjobconfiguration.md)*): `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

*Defined in [api/recording.ts:178](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/api/recording.ts#L178)*

SetRecordingJobConfiguration shall change the configuration for a recording job. SetRecordingJobConfiguration shall implicitly delete any receiver objects that were created automatically if they are no longer used as a result of changing the recording job configuration.

**Parameters:**

| Name | Type |
| ------ | ------ |
| JobToken | [RecordingJobReference](../modules/_api_types_.md#recordingjobreference) |
| JobConfiguration | [RecordingJobConfiguration](../interfaces/_api_types_.recordingjobconfiguration.md) |

**Returns:** `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

___
<a id="setrecordingjobmode-1"></a>

### `<Static>` SetRecordingJobMode

▸ **SetRecordingJobMode**(JobToken: *[RecordingJobReference](../modules/_api_types_.md#recordingjobreference)*, Mode: *[RecordingJobMode](../modules/_api_types_.md#recordingjobmode)*): `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

*Defined in [api/recording.ts:198](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/api/recording.ts#L198)*

SetRecordingJobMode shall change the mode of the recording job. Using this method shall be equivalent to retrieving the recording job configuration, and writing it back with a different mode.

**Parameters:**

| Name | Type |
| ------ | ------ |
| JobToken | [RecordingJobReference](../modules/_api_types_.md#recordingjobreference) |
| Mode | [RecordingJobMode](../modules/_api_types_.md#recordingjobmode) |

**Returns:** `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

___
<a id="settrackconfiguration-1"></a>

### `<Static>` SetTrackConfiguration

▸ **SetTrackConfiguration**(RecordingToken: *[RecordingReference](../modules/_api_types_.md#recordingreference)*, TrackToken: *[TrackReference](../modules/_api_types_.md#trackreference)*, TrackConfiguration: *[TrackConfiguration](../interfaces/_api_types_.trackconfiguration.md)*): `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

*Defined in [api/recording.ts:131](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/api/recording.ts#L131)*

SetTrackConfiguration shall change the configuration of a track.

**Parameters:**

| Name | Type |
| ------ | ------ |
| RecordingToken | [RecordingReference](../modules/_api_types_.md#recordingreference) |
| TrackToken | [TrackReference](../modules/_api_types_.md#trackreference) |
| TrackConfiguration | [TrackConfiguration](../interfaces/_api_types_.trackconfiguration.md) |

**Returns:** `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

___
<a id="stopexportrecordeddata-1"></a>

### `<Static>` StopExportRecordedData

▸ **StopExportRecordedData**(OperationToken: *[ReferenceToken](../modules/_api_types_.md#referencetoken)*): `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

*Defined in [api/recording.ts:230](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/api/recording.ts#L230)*

Stops the selected ExportRecordedData operation.

**Parameters:**

| Name | Type |
| ------ | ------ |
| OperationToken | [ReferenceToken](../modules/_api_types_.md#referencetoken) |

**Returns:** `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

___

