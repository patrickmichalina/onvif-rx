import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../soap/request";
import { RecordingReference, SearchScope, JobToken, EventFilter, PTZPositionFilter, MetadataFilter } from "./types";

export namespace Search {
    /**
     * Returns the capabilities of the search service. The result is returned in a typed answer.
     */
    export function GetServiceCapabilities() {
        return createStandardRequestBodyFromString('<tse:GetServiceCapabilities />')
                        .map(mapResponseXmlToJson<any>('tse:GetServiceCapabilitiesResponse')())
                      
    }

    /**
     * GetRecordingSummary is used to get a summary description of all recorded data. This
     *   operation is mandatory to support for a device implementing the recording search service.
     */
    export function GetRecordingSummary() {
        return createStandardRequestBodyFromString('<tse:GetRecordingSummary />')
                        .map(mapResponseXmlToJson<any>('tse:GetRecordingSummaryResponse')())
                      
    }

    /**
     * Returns information about a single Recording specified by a RecordingToken. This operation
     *   is mandatory to support for a device implementing the recording search service.
     */
    export function GetRecordingInformation(RecordingToken: RecordingReference) {
        return createStandardRequestBodyFromString('<tse:GetRecordingInformation />')
                        .map(mapResponseXmlToJson<any>('tse:GetRecordingInformationResponse')())
                      
    }

    /**
     * Returns a set of media attributes for all tracks of the specified recordings at a specified point
     *   in time. Clients using this operation shall be able to use it as a non blocking operation. A
     *   device shall set the starttime and endtime of the MediaAttributes structure to equal values if
     *   calculating this range would causes this operation to block. See MediaAttributes structure for
     *   more information. This operation is mandatory to support for a device implementing the
     *   recording search service.
     */
    export function GetMediaAttributes(RecordingTokens: RecordingReference, Time: string) {
        return createStandardRequestBodyFromString('<tse:GetMediaAttributes />')
                        .map(mapResponseXmlToJson<any>('tse:GetMediaAttributesResponse')())
                      
    }

    /**
     * FindRecordings starts a search session, looking for recordings that matches the scope (See
     *   20.2.4) defined in the request. Results from the search are acquired using the
     *   GetRecordingSearchResults request, specifying the search token returned from this request.
     *   The device shall continue searching until one of the following occurs:
     *   The entire time range from StartPoint to EndPoint has been searched through.
     *   The total number of matches has been found, defined by the MaxMatches parameter.
     *   The session has been ended by a client EndSession request.
     *   The session has been ended because KeepAliveTime since the last request related to
     *   this session has expired.
     *   
     *   The order of the results is undefined, to allow the device to return results in any order they
     *   are found. This operation is mandatory to support for a device implementing the recording
     *   search service.
     */
    export function FindRecordings(Scope: SearchScope, MaxMatches: number, KeepAliveTime: string) {
        return createStandardRequestBodyFromString('<tse:FindRecordings />')
                        .map(mapResponseXmlToJson<any>('tse:FindRecordingsResponse')())
                      
    }

    /**
     * GetRecordingSearchResults acquires the results from a recording search session previously
     *   initiated by a FindRecordings operation. The response shall not include results already
     *   returned in previous requests for the same session. If MaxResults is specified, the response
     *   shall not contain more than MaxResults results. The number of results relates to the number of recordings. 
     *   For viewing individual recorded data for a signal track use the FindEvents method.
     *   GetRecordingSearchResults shall block until:
     *   
     *   MaxResults results are available for the response if MaxResults is specified.
     *   MinResults results are available for the response if MinResults is specified.
     *   WaitTime has expired.
     *   Search is completed or stopped.
     *   
     *   This operation is mandatory to support for a device implementing the recording search service.
     */
    export function GetRecordingSearchResults(SearchToken: JobToken, MinResults: number, MaxResults: number, WaitTime: string) {
        return createStandardRequestBodyFromString('<tse:GetRecordingSearchResults />')
                        .map(mapResponseXmlToJson<any>('tse:GetRecordingSearchResultsResponse')())
                      
    }

    /**
     * FindEvents starts a search session, looking for recording events (in the scope that 
     *   matches the search filter defined in the request. Results from the search are
     *   acquired using the GetEventSearchResults request, specifying the search token returned from
     *   this request.
     *   The device shall continue searching until one of the following occurs:
     *   
     *   The entire time range from StartPoint to EndPoint has been searched through.
     *   The total number of matches has been found, defined by the MaxMatches parameter.
     *   The session has been ended by a client EndSession request.
     *   The session has been ended because KeepAliveTime since the last request related to
     *   this session has expired.
     *   
     *   Results shall be ordered by time, ascending in case of forward search, or descending in case
     *   of backward search. This operation is mandatory to support for a device implementing the
     *   recording search service.
     */
    export function FindEvents(StartPoint: string, EndPoint: string, Scope: SearchScope, SearchFilter: EventFilter, IncludeStartState: boolean, MaxMatches: number, KeepAliveTime: string) {
        return createStandardRequestBodyFromString('<tse:FindEvents />')
                        .map(mapResponseXmlToJson<any>('tse:FindEventsResponse')())
                      
    }

    /**
     * GetEventSearchResults acquires the results from a recording event search session previously
     *   initiated by a FindEvents operation. The response shall not include results already returned in
     *   previous requests for the same session. If MaxResults is specified, the response shall not
     *   contain more than MaxResults results.
     *   GetEventSearchResults shall block until:
     *   
     *   MaxResults results are available for the response if MaxResults is specified.
     *   MinResults results are available for the response if MinResults is specified.
     *   WaitTime has expired.
     *   Search is completed or stopped.
     *   
     *   This operation is mandatory to support for a device implementing the recording search service.
     */
    export function GetEventSearchResults(SearchToken: JobToken, MinResults: number, MaxResults: number, WaitTime: string) {
        return createStandardRequestBodyFromString('<tse:GetEventSearchResults />')
                        .map(mapResponseXmlToJson<any>('tse:GetEventSearchResultsResponse')())
                      
    }

    /**
     * FindPTZPosition starts a search session, looking for ptz positions in the scope (See 20.2.4)
     *   that matches the search filter defined in the request. Results from the search are acquired
     *   using the GetPTZPositionSearchResults request, specifying the search token returned from
     *   this request.
     *   The device shall continue searching until one of the following occurs:
     *   
     *   The entire time range from StartPoint to EndPoint has been searched through.
     *   The total number of matches has been found, defined by the MaxMatches parameter.
     *   The session has been ended by a client EndSession request.
     *   The session has been ended because KeepAliveTime since the last request related to
     *   this session has expired.
     *   
     *   This operation is mandatory to support whenever CanContainPTZ is true for any metadata
     *   track in any recording on the device.
     */
    export function FindPTZPosition(StartPoint: string, EndPoint: string, Scope: SearchScope, SearchFilter: PTZPositionFilter, MaxMatches: number, KeepAliveTime: string) {
        return createStandardRequestBodyFromString('<tse:FindPTZPosition />')
                        .map(mapResponseXmlToJson<any>('tse:FindPTZPositionResponse')())
                      
    }

    /**
     * GetPTZPositionSearchResults acquires the results from a ptz position search session
     *   previously initiated by a FindPTZPosition operation. The response shall not include results
     *   already returned in previous requests for the same session. If MaxResults is specified, the
     *   response shall not contain more than MaxResults results.
     *   GetPTZPositionSearchResults shall block until:
     *   
     *   MaxResults results are available for the response if MaxResults is specified.
     *   MinResults results are available for the response if MinResults is specified.
     *   WaitTime has expired.
     *   Search is completed or stopped.
     *   
     *   This operation is mandatory to support whenever CanContainPTZ is true for any metadata
     *   track in any recording on the device.
     */
    export function GetPTZPositionSearchResults(SearchToken: JobToken, MinResults: number, MaxResults: number, WaitTime: string) {
        return createStandardRequestBodyFromString('<tse:GetPTZPositionSearchResults />')
                        .map(mapResponseXmlToJson<any>('tse:GetPTZPositionSearchResultsResponse')())
                      
    }

    /**
     * GetSearchState returns the current state of the specified search session. This command is deprecated .
     */
    export function GetSearchState(SearchToken: JobToken) {
        return createStandardRequestBodyFromString('<tse:GetSearchState />')
                        .map(mapResponseXmlToJson<any>('tse:GetSearchStateResponse')())
                      
    }

    /**
     * EndSearch stops and ongoing search session, causing any blocking result request to return
     *   and the SearchToken to become invalid. If the search was interrupted before completion, the
     *   point in time that the search had reached shall be returned. If the search had not yet begun,
     *   the StartPoint shall be returned. If the search was completed the original EndPoint supplied
     *   by the Find operation shall be returned. When issuing EndSearch on a FindRecordings request the 
     *   EndPoint is undefined and shall not be used since the FindRecordings request doesn't have 
     *   StartPoint/EndPoint. This operation is mandatory to support for a device implementing the 
     *   recording search service. 
     *   
     */
    export function EndSearch(SearchToken: JobToken) {
        return createStandardRequestBodyFromString('<tse:EndSearch />')
                        .map(mapResponseXmlToJson<any>('tse:EndSearchResponse')())
                      
    }

    /**
     * FindMetadata starts a search session, looking for metadata in the scope (See 20.2.4) that
     *   matches the search filter defined in the request. Results from the search are acquired using
     *   the GetMetadataSearchResults request, specifying the search token returned from this
     *   request.
     *   The device shall continue searching until one of the following occurs:
     *   
     *   The entire time range from StartPoint to EndPoint has been searched through.
     *   The total number of matches has been found, defined by the MaxMatches parameter.
     *   The session has been ended by a client EndSession request.
     *   The session has been ended because KeepAliveTime since the last request related to
     *   this session has expired.
     *   
     *   This operation is mandatory to support if the MetaDataSearch capability is set to true in the
     *   SearchCapabilities structure return by the GetCapabilities command in the Device service.
     */
    export function FindMetadata(StartPoint: string, EndPoint: string, Scope: SearchScope, MetadataFilter: MetadataFilter, MaxMatches: number, KeepAliveTime: string) {
        return createStandardRequestBodyFromString('<tse:FindMetadata />')
                        .map(mapResponseXmlToJson<any>('tse:FindMetadataResponse')())
                      
    }

    /**
     * GetMetadataSearchResults acquires the results from a recording search session previously
     *   initiated by a FindMetadata operation. The response shall not include results already returned
     *   in previous requests for the same session. If MaxResults is specified, the response shall not
     *   contain more than MaxResults results.
     *   GetMetadataSearchResults shall block until:
     *   
     *   MaxResults results are available for the response if MaxResults is specified.
     *   MinResults results are available for the response if MinResults is specified.
     *   WaitTime has expired.
     *   Search is completed or stopped.
     *   
     *   This operation is mandatory to support if the MetaDataSearch capability is set to true in the
     *   SearchCapabilities structure return by the GetCapabilities command in the Device service.
     */
    export function GetMetadataSearchResults(SearchToken: JobToken, MinResults: number, MaxResults: number, WaitTime: string) {
        return createStandardRequestBodyFromString('<tse:GetMetadataSearchResults />')
                        .map(mapResponseXmlToJson<any>('tse:GetMetadataSearchResultsResponse')())
                      
    }
}
