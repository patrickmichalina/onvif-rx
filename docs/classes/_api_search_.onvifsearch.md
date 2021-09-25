[onvif-rx](../README.md) › ["api/search"](../modules/_api_search_.md) › [ONVIFSearch](_api_search_.onvifsearch.md)

# Class: ONVIFSearch

## Hierarchy

* **ONVIFSearch**

## Index

### Constructors

* [constructor](_api_search_.onvifsearch.md#constructor)

### Properties

* [config](_api_search_.onvifsearch.md#private-config)

### Methods

* [EndSearch](_api_search_.onvifsearch.md#endsearch)
* [FindEvents](_api_search_.onvifsearch.md#findevents)
* [FindMetadata](_api_search_.onvifsearch.md#findmetadata)
* [FindPTZPosition](_api_search_.onvifsearch.md#findptzposition)
* [FindRecordings](_api_search_.onvifsearch.md#findrecordings)
* [GetEventSearchResults](_api_search_.onvifsearch.md#geteventsearchresults)
* [GetMediaAttributes](_api_search_.onvifsearch.md#getmediaattributes)
* [GetMetadataSearchResults](_api_search_.onvifsearch.md#getmetadatasearchresults)
* [GetPTZPositionSearchResults](_api_search_.onvifsearch.md#getptzpositionsearchresults)
* [GetRecordingInformation](_api_search_.onvifsearch.md#getrecordinginformation)
* [GetRecordingSearchResults](_api_search_.onvifsearch.md#getrecordingsearchresults)
* [GetRecordingSummary](_api_search_.onvifsearch.md#getrecordingsummary)
* [GetSearchState](_api_search_.onvifsearch.md#getsearchstate)
* [GetServiceCapabilities](_api_search_.onvifsearch.md#getservicecapabilities)
* [EndSearch](_api_search_.onvifsearch.md#static-endsearch)
* [FindEvents](_api_search_.onvifsearch.md#static-findevents)
* [FindMetadata](_api_search_.onvifsearch.md#static-findmetadata)
* [FindPTZPosition](_api_search_.onvifsearch.md#static-findptzposition)
* [FindRecordings](_api_search_.onvifsearch.md#static-findrecordings)
* [GetEventSearchResults](_api_search_.onvifsearch.md#static-geteventsearchresults)
* [GetMediaAttributes](_api_search_.onvifsearch.md#static-getmediaattributes)
* [GetMetadataSearchResults](_api_search_.onvifsearch.md#static-getmetadatasearchresults)
* [GetPTZPositionSearchResults](_api_search_.onvifsearch.md#static-getptzpositionsearchresults)
* [GetRecordingInformation](_api_search_.onvifsearch.md#static-getrecordinginformation)
* [GetRecordingSearchResults](_api_search_.onvifsearch.md#static-getrecordingsearchresults)
* [GetRecordingSummary](_api_search_.onvifsearch.md#static-getrecordingsummary)
* [GetSearchState](_api_search_.onvifsearch.md#static-getsearchstate)
* [GetServiceCapabilities](_api_search_.onvifsearch.md#static-getservicecapabilities)

## Constructors

###  constructor

\+ **new ONVIFSearch**(`config`: [IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md)): *[ONVIFSearch](_api_search_.onvifsearch.md)*

*Defined in [api/search.ts:5](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/search.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | [IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md) |

**Returns:** *[ONVIFSearch](_api_search_.onvifsearch.md)*

## Properties

### `Private` config

• **config**: *[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md)*

*Defined in [api/search.ts:6](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/search.ts#L6)*

## Methods

###  EndSearch

▸ **EndSearch**(`SearchToken`: [JobToken](../interfaces/_api_types_.getrecordingjobsresponseitem.md#readonly-jobtoken)): *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

*Defined in [api/search.ts:418](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/search.ts#L418)*

EndSearch stops and ongoing search session, causing any blocking result request to return
  and the SearchToken to become invalid. If the search was interrupted before completion, the
  point in time that the search had reached shall be returned. If the search had not yet begun,
  the StartPoint shall be returned. If the search was completed the original EndPoint supplied
  by the Find operation shall be returned. When issuing EndSearch on a FindRecordings request the
  EndPoint is undefined and shall not be used since the FindRecordings request doesn't have
  StartPoint/EndPoint. This operation is mandatory to support for a device implementing the
  recording search service.

**Parameters:**

Name | Type |
------ | ------ |
`SearchToken` | [JobToken](../interfaces/_api_types_.getrecordingjobsresponseitem.md#readonly-jobtoken) |

**Returns:** *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

___

###  FindEvents

▸ **FindEvents**(`StartPoint`: string, `Scope`: [SearchScope](../interfaces/_api_types_.searchscope.md), `SearchFilter`: [EventFilter](../interfaces/_api_types_.eventfilter.md), `IncludeStartState`: boolean, `KeepAliveTime`: string, `EndPoint?`: undefined | string, `MaxMatches?`: undefined | number): *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

*Defined in [api/search.ts:339](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/search.ts#L339)*

FindEvents starts a search session, looking for recording events (in the scope that
  matches the search filter defined in the request. Results from the search are
  acquired using the GetEventSearchResults request, specifying the search token returned from
  this request.
  The device shall continue searching until one of the following occurs:

  The entire time range from StartPoint to EndPoint has been searched through.
  The total number of matches has been found, defined by the MaxMatches parameter.
  The session has been ended by a client EndSession request.
  The session has been ended because KeepAliveTime since the last request related to
  this session has expired.

  Results shall be ordered by time, ascending in case of forward search, or descending in case
  of backward search. This operation is mandatory to support for a device implementing the
  recording search service.

**Parameters:**

Name | Type |
------ | ------ |
`StartPoint` | string |
`Scope` | [SearchScope](../interfaces/_api_types_.searchscope.md) |
`SearchFilter` | [EventFilter](../interfaces/_api_types_.eventfilter.md) |
`IncludeStartState` | boolean |
`KeepAliveTime` | string |
`EndPoint?` | undefined &#124; string |
`MaxMatches?` | undefined &#124; number |

**Returns:** *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

___

###  FindMetadata

▸ **FindMetadata**(`StartPoint`: string, `Scope`: [SearchScope](../interfaces/_api_types_.searchscope.md), `MetadataFilter`: [MetadataFilter](../interfaces/_api_types_.metadatafilter.md), `KeepAliveTime`: string, `EndPoint?`: undefined | string, `MaxMatches?`: undefined | number): *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

*Defined in [api/search.ts:438](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/search.ts#L438)*

FindMetadata starts a search session, looking for metadata in the scope (See 20.2.4) that
  matches the search filter defined in the request. Results from the search are acquired using
  the GetMetadataSearchResults request, specifying the search token returned from this
  request.
  The device shall continue searching until one of the following occurs:

  The entire time range from StartPoint to EndPoint has been searched through.
  The total number of matches has been found, defined by the MaxMatches parameter.
  The session has been ended by a client EndSession request.
  The session has been ended because KeepAliveTime since the last request related to
  this session has expired.

  This operation is mandatory to support if the MetaDataSearch capability is set to true in the
  SearchCapabilities structure return by the GetCapabilities command in the Device service.

**Parameters:**

Name | Type |
------ | ------ |
`StartPoint` | string |
`Scope` | [SearchScope](../interfaces/_api_types_.searchscope.md) |
`MetadataFilter` | [MetadataFilter](../interfaces/_api_types_.metadatafilter.md) |
`KeepAliveTime` | string |
`EndPoint?` | undefined &#124; string |
`MaxMatches?` | undefined &#124; number |

**Returns:** *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

___

###  FindPTZPosition

▸ **FindPTZPosition**(`StartPoint`: string, `Scope`: [SearchScope](../interfaces/_api_types_.searchscope.md), `SearchFilter`: [PTZPositionFilter](../interfaces/_api_types_.ptzpositionfilter.md), `KeepAliveTime`: string, `EndPoint?`: undefined | string, `MaxMatches?`: undefined | number): *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

*Defined in [api/search.ts:377](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/search.ts#L377)*

FindPTZPosition starts a search session, looking for ptz positions in the scope (See 20.2.4)
  that matches the search filter defined in the request. Results from the search are acquired
  using the GetPTZPositionSearchResults request, specifying the search token returned from
  this request.
  The device shall continue searching until one of the following occurs:

  The entire time range from StartPoint to EndPoint has been searched through.
  The total number of matches has been found, defined by the MaxMatches parameter.
  The session has been ended by a client EndSession request.
  The session has been ended because KeepAliveTime since the last request related to
  this session has expired.

  This operation is mandatory to support whenever CanContainPTZ is true for any metadata
  track in any recording on the device.

**Parameters:**

Name | Type |
------ | ------ |
`StartPoint` | string |
`Scope` | [SearchScope](../interfaces/_api_types_.searchscope.md) |
`SearchFilter` | [PTZPositionFilter](../interfaces/_api_types_.ptzpositionfilter.md) |
`KeepAliveTime` | string |
`EndPoint?` | undefined &#124; string |
`MaxMatches?` | undefined &#124; number |

**Returns:** *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

___

###  FindRecordings

▸ **FindRecordings**(`Scope`: [SearchScope](../interfaces/_api_types_.searchscope.md), `KeepAliveTime`: string, `MaxMatches?`: undefined | number): *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

*Defined in [api/search.ts:299](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/search.ts#L299)*

FindRecordings starts a search session, looking for recordings that matches the scope (See
  20.2.4) defined in the request. Results from the search are acquired using the
  GetRecordingSearchResults request, specifying the search token returned from this request.
  The device shall continue searching until one of the following occurs:
  The entire time range from StartPoint to EndPoint has been searched through.
  The total number of matches has been found, defined by the MaxMatches parameter.
  The session has been ended by a client EndSession request.
  The session has been ended because KeepAliveTime since the last request related to
  this session has expired.

  The order of the results is undefined, to allow the device to return results in any order they
  are found. This operation is mandatory to support for a device implementing the recording
  search service.

**Parameters:**

Name | Type |
------ | ------ |
`Scope` | [SearchScope](../interfaces/_api_types_.searchscope.md) |
`KeepAliveTime` | string |
`MaxMatches?` | undefined &#124; number |

**Returns:** *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

___

###  GetEventSearchResults

▸ **GetEventSearchResults**(`SearchToken`: [JobToken](../interfaces/_api_types_.getrecordingjobsresponseitem.md#readonly-jobtoken), `MinResults?`: undefined | number, `MaxResults?`: undefined | number, `WaitTime?`: undefined | string): *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

*Defined in [api/search.ts:357](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/search.ts#L357)*

GetEventSearchResults acquires the results from a recording event search session previously
  initiated by a FindEvents operation. The response shall not include results already returned in
  previous requests for the same session. If MaxResults is specified, the response shall not
  contain more than MaxResults results.
  GetEventSearchResults shall block until:

  MaxResults results are available for the response if MaxResults is specified.
  MinResults results are available for the response if MinResults is specified.
  WaitTime has expired.
  Search is completed or stopped.

  This operation is mandatory to support for a device implementing the recording search service.

**Parameters:**

Name | Type |
------ | ------ |
`SearchToken` | [JobToken](../interfaces/_api_types_.getrecordingjobsresponseitem.md#readonly-jobtoken) |
`MinResults?` | undefined &#124; number |
`MaxResults?` | undefined &#124; number |
`WaitTime?` | undefined &#124; string |

**Returns:** *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

___

###  GetMediaAttributes

▸ **GetMediaAttributes**(`Time`: string, `RecordingTokens?`: [RecordingReference](../modules/_api_types_.md#recordingreference)): *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

*Defined in [api/search.ts:280](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/search.ts#L280)*

Returns a set of media attributes for all tracks of the specified recordings at a specified point
  in time. Clients using this operation shall be able to use it as a non blocking operation. A
  device shall set the starttime and endtime of the MediaAttributes structure to equal values if
  calculating this range would causes this operation to block. See MediaAttributes structure for
  more information. This operation is mandatory to support for a device implementing the
  recording search service.

**Parameters:**

Name | Type |
------ | ------ |
`Time` | string |
`RecordingTokens?` | [RecordingReference](../modules/_api_types_.md#recordingreference) |

**Returns:** *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

___

###  GetMetadataSearchResults

▸ **GetMetadataSearchResults**(`SearchToken`: [JobToken](../interfaces/_api_types_.getrecordingjobsresponseitem.md#readonly-jobtoken), `MinResults?`: undefined | number, `MaxResults?`: undefined | number, `WaitTime?`: undefined | string): *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

*Defined in [api/search.ts:457](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/search.ts#L457)*

GetMetadataSearchResults acquires the results from a recording search session previously
  initiated by a FindMetadata operation. The response shall not include results already returned
  in previous requests for the same session. If MaxResults is specified, the response shall not
  contain more than MaxResults results.
  GetMetadataSearchResults shall block until:

  MaxResults results are available for the response if MaxResults is specified.
  MinResults results are available for the response if MinResults is specified.
  WaitTime has expired.
  Search is completed or stopped.

  This operation is mandatory to support if the MetaDataSearch capability is set to true in the
  SearchCapabilities structure return by the GetCapabilities command in the Device service.

**Parameters:**

Name | Type |
------ | ------ |
`SearchToken` | [JobToken](../interfaces/_api_types_.getrecordingjobsresponseitem.md#readonly-jobtoken) |
`MinResults?` | undefined &#124; number |
`MaxResults?` | undefined &#124; number |
`WaitTime?` | undefined &#124; string |

**Returns:** *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

___

###  GetPTZPositionSearchResults

▸ **GetPTZPositionSearchResults**(`SearchToken`: [JobToken](../interfaces/_api_types_.getrecordingjobsresponseitem.md#readonly-jobtoken), `MinResults?`: undefined | number, `MaxResults?`: undefined | number, `WaitTime?`: undefined | string): *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

*Defined in [api/search.ts:396](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/search.ts#L396)*

GetPTZPositionSearchResults acquires the results from a ptz position search session
  previously initiated by a FindPTZPosition operation. The response shall not include results
  already returned in previous requests for the same session. If MaxResults is specified, the
  response shall not contain more than MaxResults results.
  GetPTZPositionSearchResults shall block until:

  MaxResults results are available for the response if MaxResults is specified.
  MinResults results are available for the response if MinResults is specified.
  WaitTime has expired.
  Search is completed or stopped.

  This operation is mandatory to support whenever CanContainPTZ is true for any metadata
  track in any recording on the device.

**Parameters:**

Name | Type |
------ | ------ |
`SearchToken` | [JobToken](../interfaces/_api_types_.getrecordingjobsresponseitem.md#readonly-jobtoken) |
`MinResults?` | undefined &#124; number |
`MaxResults?` | undefined &#124; number |
`WaitTime?` | undefined &#124; string |

**Returns:** *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

___

###  GetRecordingInformation

▸ **GetRecordingInformation**(`RecordingToken`: [RecordingReference](../modules/_api_types_.md#recordingreference)): *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

*Defined in [api/search.ts:268](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/search.ts#L268)*

Returns information about a single Recording specified by a RecordingToken. This operation
  is mandatory to support for a device implementing the recording search service.

**Parameters:**

Name | Type |
------ | ------ |
`RecordingToken` | [RecordingReference](../modules/_api_types_.md#recordingreference) |

**Returns:** *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

___

###  GetRecordingSearchResults

▸ **GetRecordingSearchResults**(`SearchToken`: [JobToken](../interfaces/_api_types_.getrecordingjobsresponseitem.md#readonly-jobtoken), `MinResults?`: undefined | number, `MaxResults?`: undefined | number, `WaitTime?`: undefined | string): *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

*Defined in [api/search.ts:318](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/search.ts#L318)*

GetRecordingSearchResults acquires the results from a recording search session previously
  initiated by a FindRecordings operation. The response shall not include results already
  returned in previous requests for the same session. If MaxResults is specified, the response
  shall not contain more than MaxResults results. The number of results relates to the number of recordings.
  For viewing individual recorded data for a signal track use the FindEvents method.
  GetRecordingSearchResults shall block until:

  MaxResults results are available for the response if MaxResults is specified.
  MinResults results are available for the response if MinResults is specified.
  WaitTime has expired.
  Search is completed or stopped.

  This operation is mandatory to support for a device implementing the recording search service.

**Parameters:**

Name | Type |
------ | ------ |
`SearchToken` | [JobToken](../interfaces/_api_types_.getrecordingjobsresponseitem.md#readonly-jobtoken) |
`MinResults?` | undefined &#124; number |
`MaxResults?` | undefined &#124; number |
`WaitTime?` | undefined &#124; string |

**Returns:** *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

___

###  GetRecordingSummary

▸ **GetRecordingSummary**(): *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

*Defined in [api/search.ts:260](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/search.ts#L260)*

GetRecordingSummary is used to get a summary description of all recorded data. This
  operation is mandatory to support for a device implementing the recording search service.

**Returns:** *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

___

###  GetSearchState

▸ **GetSearchState**(`SearchToken`: [JobToken](../interfaces/_api_types_.getrecordingjobsresponseitem.md#readonly-jobtoken)): *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

*Defined in [api/search.ts:403](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/search.ts#L403)*

GetSearchState returns the current state of the specified search session. This command is deprecated .

**Parameters:**

Name | Type |
------ | ------ |
`SearchToken` | [JobToken](../interfaces/_api_types_.getrecordingjobsresponseitem.md#readonly-jobtoken) |

**Returns:** *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

___

###  GetServiceCapabilities

▸ **GetServiceCapabilities**(): *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

*Defined in [api/search.ts:252](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/search.ts#L252)*

Returns the capabilities of the search service. The result is returned in a typed answer.

**Returns:** *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

___

### `Static` EndSearch

▸ **EndSearch**(`SearchToken`: [JobToken](../interfaces/_api_types_.getrecordingjobsresponseitem.md#readonly-jobtoken)): *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

*Defined in [api/search.ts:200](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/search.ts#L200)*

EndSearch stops and ongoing search session, causing any blocking result request to return
  and the SearchToken to become invalid. If the search was interrupted before completion, the
  point in time that the search had reached shall be returned. If the search had not yet begun,
  the StartPoint shall be returned. If the search was completed the original EndPoint supplied
  by the Find operation shall be returned. When issuing EndSearch on a FindRecordings request the
  EndPoint is undefined and shall not be used since the FindRecordings request doesn't have
  StartPoint/EndPoint. This operation is mandatory to support for a device implementing the
  recording search service.

**Parameters:**

Name | Type |
------ | ------ |
`SearchToken` | [JobToken](../interfaces/_api_types_.getrecordingjobsresponseitem.md#readonly-jobtoken) |

**Returns:** *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

___

### `Static` FindEvents

▸ **FindEvents**(`StartPoint`: string, `Scope`: [SearchScope](../interfaces/_api_types_.searchscope.md), `SearchFilter`: [EventFilter](../interfaces/_api_types_.eventfilter.md), `IncludeStartState`: boolean, `KeepAliveTime`: string, `EndPoint?`: undefined | string, `MaxMatches?`: undefined | number): *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

*Defined in [api/search.ts:111](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/search.ts#L111)*

FindEvents starts a search session, looking for recording events (in the scope that
  matches the search filter defined in the request. Results from the search are
  acquired using the GetEventSearchResults request, specifying the search token returned from
  this request.
  The device shall continue searching until one of the following occurs:

  The entire time range from StartPoint to EndPoint has been searched through.
  The total number of matches has been found, defined by the MaxMatches parameter.
  The session has been ended by a client EndSession request.
  The session has been ended because KeepAliveTime since the last request related to
  this session has expired.

  Results shall be ordered by time, ascending in case of forward search, or descending in case
  of backward search. This operation is mandatory to support for a device implementing the
  recording search service.

**Parameters:**

Name | Type |
------ | ------ |
`StartPoint` | string |
`Scope` | [SearchScope](../interfaces/_api_types_.searchscope.md) |
`SearchFilter` | [EventFilter](../interfaces/_api_types_.eventfilter.md) |
`IncludeStartState` | boolean |
`KeepAliveTime` | string |
`EndPoint?` | undefined &#124; string |
`MaxMatches?` | undefined &#124; number |

**Returns:** *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

___

### `Static` FindMetadata

▸ **FindMetadata**(`StartPoint`: string, `Scope`: [SearchScope](../interfaces/_api_types_.searchscope.md), `MetadataFilter`: [MetadataFilter](../interfaces/_api_types_.metadatafilter.md), `KeepAliveTime`: string, `EndPoint?`: undefined | string, `MaxMatches?`: undefined | number): *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

*Defined in [api/search.ts:222](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/search.ts#L222)*

FindMetadata starts a search session, looking for metadata in the scope (See 20.2.4) that
  matches the search filter defined in the request. Results from the search are acquired using
  the GetMetadataSearchResults request, specifying the search token returned from this
  request.
  The device shall continue searching until one of the following occurs:

  The entire time range from StartPoint to EndPoint has been searched through.
  The total number of matches has been found, defined by the MaxMatches parameter.
  The session has been ended by a client EndSession request.
  The session has been ended because KeepAliveTime since the last request related to
  this session has expired.

  This operation is mandatory to support if the MetaDataSearch capability is set to true in the
  SearchCapabilities structure return by the GetCapabilities command in the Device service.

**Parameters:**

Name | Type |
------ | ------ |
`StartPoint` | string |
`Scope` | [SearchScope](../interfaces/_api_types_.searchscope.md) |
`MetadataFilter` | [MetadataFilter](../interfaces/_api_types_.metadatafilter.md) |
`KeepAliveTime` | string |
`EndPoint?` | undefined &#124; string |
`MaxMatches?` | undefined &#124; number |

**Returns:** *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

___

### `Static` FindPTZPosition

▸ **FindPTZPosition**(`StartPoint`: string, `Scope`: [SearchScope](../interfaces/_api_types_.searchscope.md), `SearchFilter`: [PTZPositionFilter](../interfaces/_api_types_.ptzpositionfilter.md), `KeepAliveTime`: string, `EndPoint?`: undefined | string, `MaxMatches?`: undefined | number): *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

*Defined in [api/search.ts:153](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/search.ts#L153)*

FindPTZPosition starts a search session, looking for ptz positions in the scope (See 20.2.4)
  that matches the search filter defined in the request. Results from the search are acquired
  using the GetPTZPositionSearchResults request, specifying the search token returned from
  this request.
  The device shall continue searching until one of the following occurs:

  The entire time range from StartPoint to EndPoint has been searched through.
  The total number of matches has been found, defined by the MaxMatches parameter.
  The session has been ended by a client EndSession request.
  The session has been ended because KeepAliveTime since the last request related to
  this session has expired.

  This operation is mandatory to support whenever CanContainPTZ is true for any metadata
  track in any recording on the device.

**Parameters:**

Name | Type |
------ | ------ |
`StartPoint` | string |
`Scope` | [SearchScope](../interfaces/_api_types_.searchscope.md) |
`SearchFilter` | [PTZPositionFilter](../interfaces/_api_types_.ptzpositionfilter.md) |
`KeepAliveTime` | string |
`EndPoint?` | undefined &#124; string |
`MaxMatches?` | undefined &#124; number |

**Returns:** *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

___

### `Static` FindRecordings

▸ **FindRecordings**(`Scope`: [SearchScope](../interfaces/_api_types_.searchscope.md), `KeepAliveTime`: string, `MaxMatches?`: undefined | number): *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

*Defined in [api/search.ts:67](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/search.ts#L67)*

FindRecordings starts a search session, looking for recordings that matches the scope (See
  20.2.4) defined in the request. Results from the search are acquired using the
  GetRecordingSearchResults request, specifying the search token returned from this request.
  The device shall continue searching until one of the following occurs:
  The entire time range from StartPoint to EndPoint has been searched through.
  The total number of matches has been found, defined by the MaxMatches parameter.
  The session has been ended by a client EndSession request.
  The session has been ended because KeepAliveTime since the last request related to
  this session has expired.

  The order of the results is undefined, to allow the device to return results in any order they
  are found. This operation is mandatory to support for a device implementing the recording
  search service.

**Parameters:**

Name | Type |
------ | ------ |
`Scope` | [SearchScope](../interfaces/_api_types_.searchscope.md) |
`KeepAliveTime` | string |
`MaxMatches?` | undefined &#124; number |

**Returns:** *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

___

### `Static` GetEventSearchResults

▸ **GetEventSearchResults**(`SearchToken`: [JobToken](../interfaces/_api_types_.getrecordingjobsresponseitem.md#readonly-jobtoken), `MinResults?`: undefined | number, `MaxResults?`: undefined | number, `WaitTime?`: undefined | string): *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

*Defined in [api/search.ts:131](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/search.ts#L131)*

GetEventSearchResults acquires the results from a recording event search session previously
  initiated by a FindEvents operation. The response shall not include results already returned in
  previous requests for the same session. If MaxResults is specified, the response shall not
  contain more than MaxResults results.
  GetEventSearchResults shall block until:

  MaxResults results are available for the response if MaxResults is specified.
  MinResults results are available for the response if MinResults is specified.
  WaitTime has expired.
  Search is completed or stopped.

  This operation is mandatory to support for a device implementing the recording search service.

**Parameters:**

Name | Type |
------ | ------ |
`SearchToken` | [JobToken](../interfaces/_api_types_.getrecordingjobsresponseitem.md#readonly-jobtoken) |
`MinResults?` | undefined &#124; number |
`MaxResults?` | undefined &#124; number |
`WaitTime?` | undefined &#124; string |

**Returns:** *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

___

### `Static` GetMediaAttributes

▸ **GetMediaAttributes**(`Time`: string, `RecordingTokens?`: [RecordingReference](../modules/_api_types_.md#recordingreference)): *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

*Defined in [api/search.ts:46](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/search.ts#L46)*

Returns a set of media attributes for all tracks of the specified recordings at a specified point
  in time. Clients using this operation shall be able to use it as a non blocking operation. A
  device shall set the starttime and endtime of the MediaAttributes structure to equal values if
  calculating this range would causes this operation to block. See MediaAttributes structure for
  more information. This operation is mandatory to support for a device implementing the
  recording search service.

**Parameters:**

Name | Type |
------ | ------ |
`Time` | string |
`RecordingTokens?` | [RecordingReference](../modules/_api_types_.md#recordingreference) |

**Returns:** *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

___

### `Static` GetMetadataSearchResults

▸ **GetMetadataSearchResults**(`SearchToken`: [JobToken](../interfaces/_api_types_.getrecordingjobsresponseitem.md#readonly-jobtoken), `MinResults?`: undefined | number, `MaxResults?`: undefined | number, `WaitTime?`: undefined | string): *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

*Defined in [api/search.ts:243](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/search.ts#L243)*

GetMetadataSearchResults acquires the results from a recording search session previously
  initiated by a FindMetadata operation. The response shall not include results already returned
  in previous requests for the same session. If MaxResults is specified, the response shall not
  contain more than MaxResults results.
  GetMetadataSearchResults shall block until:

  MaxResults results are available for the response if MaxResults is specified.
  MinResults results are available for the response if MinResults is specified.
  WaitTime has expired.
  Search is completed or stopped.

  This operation is mandatory to support if the MetaDataSearch capability is set to true in the
  SearchCapabilities structure return by the GetCapabilities command in the Device service.

**Parameters:**

Name | Type |
------ | ------ |
`SearchToken` | [JobToken](../interfaces/_api_types_.getrecordingjobsresponseitem.md#readonly-jobtoken) |
`MinResults?` | undefined &#124; number |
`MaxResults?` | undefined &#124; number |
`WaitTime?` | undefined &#124; string |

**Returns:** *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

___

### `Static` GetPTZPositionSearchResults

▸ **GetPTZPositionSearchResults**(`SearchToken`: [JobToken](../interfaces/_api_types_.getrecordingjobsresponseitem.md#readonly-jobtoken), `MinResults?`: undefined | number, `MaxResults?`: undefined | number, `WaitTime?`: undefined | string): *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

*Defined in [api/search.ts:174](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/search.ts#L174)*

GetPTZPositionSearchResults acquires the results from a ptz position search session
  previously initiated by a FindPTZPosition operation. The response shall not include results
  already returned in previous requests for the same session. If MaxResults is specified, the
  response shall not contain more than MaxResults results.
  GetPTZPositionSearchResults shall block until:

  MaxResults results are available for the response if MaxResults is specified.
  MinResults results are available for the response if MinResults is specified.
  WaitTime has expired.
  Search is completed or stopped.

  This operation is mandatory to support whenever CanContainPTZ is true for any metadata
  track in any recording on the device.

**Parameters:**

Name | Type |
------ | ------ |
`SearchToken` | [JobToken](../interfaces/_api_types_.getrecordingjobsresponseitem.md#readonly-jobtoken) |
`MinResults?` | undefined &#124; number |
`MaxResults?` | undefined &#124; number |
`WaitTime?` | undefined &#124; string |

**Returns:** *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

___

### `Static` GetRecordingInformation

▸ **GetRecordingInformation**(`RecordingToken`: [RecordingReference](../modules/_api_types_.md#recordingreference)): *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

*Defined in [api/search.ts:32](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/search.ts#L32)*

Returns information about a single Recording specified by a RecordingToken. This operation
  is mandatory to support for a device implementing the recording search service.

**Parameters:**

Name | Type |
------ | ------ |
`RecordingToken` | [RecordingReference](../modules/_api_types_.md#recordingreference) |

**Returns:** *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

___

### `Static` GetRecordingSearchResults

▸ **GetRecordingSearchResults**(`SearchToken`: [JobToken](../interfaces/_api_types_.getrecordingjobsresponseitem.md#readonly-jobtoken), `MinResults?`: undefined | number, `MaxResults?`: undefined | number, `WaitTime?`: undefined | string): *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

*Defined in [api/search.ts:88](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/search.ts#L88)*

GetRecordingSearchResults acquires the results from a recording search session previously
  initiated by a FindRecordings operation. The response shall not include results already
  returned in previous requests for the same session. If MaxResults is specified, the response
  shall not contain more than MaxResults results. The number of results relates to the number of recordings.
  For viewing individual recorded data for a signal track use the FindEvents method.
  GetRecordingSearchResults shall block until:

  MaxResults results are available for the response if MaxResults is specified.
  MinResults results are available for the response if MinResults is specified.
  WaitTime has expired.
  Search is completed or stopped.

  This operation is mandatory to support for a device implementing the recording search service.

**Parameters:**

Name | Type |
------ | ------ |
`SearchToken` | [JobToken](../interfaces/_api_types_.getrecordingjobsresponseitem.md#readonly-jobtoken) |
`MinResults?` | undefined &#124; number |
`MaxResults?` | undefined &#124; number |
`WaitTime?` | undefined &#124; string |

**Returns:** *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

___

### `Static` GetRecordingSummary

▸ **GetRecordingSummary**(): *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

*Defined in [api/search.ts:22](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/search.ts#L22)*

GetRecordingSummary is used to get a summary description of all recorded data. This
  operation is mandatory to support for a device implementing the recording search service.

**Returns:** *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

___

### `Static` GetSearchState

▸ **GetSearchState**(`SearchToken`: [JobToken](../interfaces/_api_types_.getrecordingjobsresponseitem.md#readonly-jobtoken)): *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

*Defined in [api/search.ts:183](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/search.ts#L183)*

GetSearchState returns the current state of the specified search session. This command is deprecated .

**Parameters:**

Name | Type |
------ | ------ |
`SearchToken` | [JobToken](../interfaces/_api_types_.getrecordingjobsresponseitem.md#readonly-jobtoken) |

**Returns:** *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

___

### `Static` GetServiceCapabilities

▸ **GetServiceCapabilities**(): *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

*Defined in [api/search.ts:12](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/search.ts#L12)*

Returns the capabilities of the search service. The result is returned in a typed answer.

**Returns:** *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*
