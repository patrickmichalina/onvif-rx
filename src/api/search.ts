import { createStandardRequestBodyFromString, mapResponseXmlToJson, generateRequestElements, mapResponseObsToProperty } from "../soap/request";
import { IDeviceConfig } from "../config";
import { RecordingReference, SearchScope, JobToken, EventFilter, PTZPositionFilter, MetadataFilter } from "./types";

export class ONVIFSearch {
    constructor(private config: IDeviceConfig) {
    }

    /**
     * Returns the capabilities of the search service. The result is returned in a typed answer.
     */
    static GetServiceCapabilities() {
        return createStandardRequestBodyFromString(generateRequestElements('tse:GetServiceCapabilities')({}))
                        .map(mapResponseXmlToJson<any>('tse:GetServiceCapabilitiesResponse'))
                      
    }

    /**
     * GetRecordingSummary is used to get a summary description of all recorded data. This
     *   operation is mandatory to support for a device implementing the recording search service.
     */
    static GetRecordingSummary() {
        return createStandardRequestBodyFromString(generateRequestElements('tse:GetRecordingSummary')({}))
                        .map(mapResponseXmlToJson<any>('tse:GetRecordingSummaryResponse'))
                      
    }

    /**
     * Returns information about a single Recording specified by a RecordingToken. This operation
     *   is mandatory to support for a device implementing the recording search service.
     */
    static GetRecordingInformation(RecordingToken: RecordingReference) {
        return createStandardRequestBodyFromString(generateRequestElements('tse:GetRecordingInformation')({tse_RecordingToken:RecordingToken}))
                        .map(mapResponseXmlToJson<any>('tse:GetRecordingInformationResponse'))
                      
    }

    /**
     * Returns a set of media attributes for all tracks of the specified recordings at a specified point
     *   in time. Clients using this operation shall be able to use it as a non blocking operation. A
     *   device shall set the starttime and endtime of the MediaAttributes structure to equal values if
     *   calculating this range would causes this operation to block. See MediaAttributes structure for
     *   more information. This operation is mandatory to support for a device implementing the
     *   recording search service.
     */
    static GetMediaAttributes(Time: string, RecordingTokens?: RecordingReference) {
        return createStandardRequestBodyFromString(generateRequestElements('tse:GetMediaAttributes')({tse_Time:Time,tse_RecordingTokens:RecordingTokens}))
                        .map(mapResponseXmlToJson<any>('tse:GetMediaAttributesResponse'))
                      
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
    static FindRecordings(Scope: SearchScope, KeepAliveTime: string, MaxMatches?: number) {
        return createStandardRequestBodyFromString(generateRequestElements('tse:FindRecordings')({tse_Scope:Scope,tse_KeepAliveTime:KeepAliveTime,tse_MaxMatches:MaxMatches}))
                        .map(mapResponseXmlToJson<any>('tse:FindRecordingsResponse'))
                      
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
    static GetRecordingSearchResults(SearchToken: JobToken, MinResults?: number, MaxResults?: number, WaitTime?: string) {
        return createStandardRequestBodyFromString(generateRequestElements('tse:GetRecordingSearchResults')({tse_SearchToken:SearchToken,tse_MinResults:MinResults,tse_MaxResults:MaxResults,tse_WaitTime:WaitTime}))
                        .map(mapResponseXmlToJson<any>('tse:GetRecordingSearchResultsResponse'))
                      
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
    static FindEvents(StartPoint: string, Scope: SearchScope, SearchFilter: EventFilter, IncludeStartState: boolean, KeepAliveTime: string, EndPoint?: string, MaxMatches?: number) {
        return createStandardRequestBodyFromString(generateRequestElements('tse:FindEvents')({tse_StartPoint:StartPoint,tse_Scope:Scope,tse_SearchFilter:SearchFilter,tse_IncludeStartState:IncludeStartState,tse_KeepAliveTime:KeepAliveTime,tse_EndPoint:EndPoint,tse_MaxMatches:MaxMatches}))
                        .map(mapResponseXmlToJson<any>('tse:FindEventsResponse'))
                      
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
    static GetEventSearchResults(SearchToken: JobToken, MinResults?: number, MaxResults?: number, WaitTime?: string) {
        return createStandardRequestBodyFromString(generateRequestElements('tse:GetEventSearchResults')({tse_SearchToken:SearchToken,tse_MinResults:MinResults,tse_MaxResults:MaxResults,tse_WaitTime:WaitTime}))
                        .map(mapResponseXmlToJson<any>('tse:GetEventSearchResultsResponse'))
                      
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
    static FindPTZPosition(StartPoint: string, Scope: SearchScope, SearchFilter: PTZPositionFilter, KeepAliveTime: string, EndPoint?: string, MaxMatches?: number) {
        return createStandardRequestBodyFromString(generateRequestElements('tse:FindPTZPosition')({tse_StartPoint:StartPoint,tse_Scope:Scope,tse_SearchFilter:SearchFilter,tse_KeepAliveTime:KeepAliveTime,tse_EndPoint:EndPoint,tse_MaxMatches:MaxMatches}))
                        .map(mapResponseXmlToJson<any>('tse:FindPTZPositionResponse'))
                      
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
    static GetPTZPositionSearchResults(SearchToken: JobToken, MinResults?: number, MaxResults?: number, WaitTime?: string) {
        return createStandardRequestBodyFromString(generateRequestElements('tse:GetPTZPositionSearchResults')({tse_SearchToken:SearchToken,tse_MinResults:MinResults,tse_MaxResults:MaxResults,tse_WaitTime:WaitTime}))
                        .map(mapResponseXmlToJson<any>('tse:GetPTZPositionSearchResultsResponse'))
                      
    }

    /**
     * GetSearchState returns the current state of the specified search session. This command is deprecated .
     */
    static GetSearchState(SearchToken: JobToken) {
        return createStandardRequestBodyFromString(generateRequestElements('tse:GetSearchState')({tse_SearchToken:SearchToken}))
                        .map(mapResponseXmlToJson<any>('tse:GetSearchStateResponse'))
                      
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
    static EndSearch(SearchToken: JobToken) {
        return createStandardRequestBodyFromString(generateRequestElements('tse:EndSearch')({tse_SearchToken:SearchToken}))
                        .map(mapResponseXmlToJson<any>('tse:EndSearchResponse'))
                      
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
    static FindMetadata(StartPoint: string, Scope: SearchScope, MetadataFilter: MetadataFilter, KeepAliveTime: string, EndPoint?: string, MaxMatches?: number) {
        return createStandardRequestBodyFromString(generateRequestElements('tse:FindMetadata')({tse_StartPoint:StartPoint,tse_Scope:Scope,tse_MetadataFilter:MetadataFilter,tse_KeepAliveTime:KeepAliveTime,tse_EndPoint:EndPoint,tse_MaxMatches:MaxMatches}))
                        .map(mapResponseXmlToJson<any>('tse:FindMetadataResponse'))
                      
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
    static GetMetadataSearchResults(SearchToken: JobToken, MinResults?: number, MaxResults?: number, WaitTime?: string) {
        return createStandardRequestBodyFromString(generateRequestElements('tse:GetMetadataSearchResults')({tse_SearchToken:SearchToken,tse_MinResults:MinResults,tse_MaxResults:MaxResults,tse_WaitTime:WaitTime}))
                        .map(mapResponseXmlToJson<any>('tse:GetMetadataSearchResultsResponse'))
                      
    }

    /**
     * Returns the capabilities of the search service. The result is returned in a typed answer.
     */
    GetServiceCapabilities() {
        return ONVIFSearch.GetServiceCapabilities().run(this.config)
    }

    /**
     * GetRecordingSummary is used to get a summary description of all recorded data. This
     *   operation is mandatory to support for a device implementing the recording search service.
     */
    GetRecordingSummary() {
        return ONVIFSearch.GetRecordingSummary().run(this.config)
    }

    /**
     * Returns information about a single Recording specified by a RecordingToken. This operation
     *   is mandatory to support for a device implementing the recording search service.
     */
    GetRecordingInformation(RecordingToken: RecordingReference) {
        return ONVIFSearch.GetRecordingInformation(RecordingToken).run(this.config)
    }

    /**
     * Returns a set of media attributes for all tracks of the specified recordings at a specified point
     *   in time. Clients using this operation shall be able to use it as a non blocking operation. A
     *   device shall set the starttime and endtime of the MediaAttributes structure to equal values if
     *   calculating this range would causes this operation to block. See MediaAttributes structure for
     *   more information. This operation is mandatory to support for a device implementing the
     *   recording search service.
     */
    GetMediaAttributes(Time: string, RecordingTokens: RecordingReference) {
        return ONVIFSearch.GetMediaAttributes(Time,RecordingTokens).run(this.config)
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
    FindRecordings(Scope: SearchScope, KeepAliveTime: string, MaxMatches: number) {
        return ONVIFSearch.FindRecordings(Scope,KeepAliveTime,MaxMatches).run(this.config)
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
    GetRecordingSearchResults(SearchToken: JobToken, MinResults: number, MaxResults: number, WaitTime: string) {
        return ONVIFSearch.GetRecordingSearchResults(SearchToken,MinResults,MaxResults,WaitTime).run(this.config)
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
    FindEvents(StartPoint: string, Scope: SearchScope, SearchFilter: EventFilter, IncludeStartState: boolean, KeepAliveTime: string, EndPoint: string, MaxMatches: number) {
        return ONVIFSearch.FindEvents(StartPoint,Scope,SearchFilter,IncludeStartState,KeepAliveTime,EndPoint,MaxMatches).run(this.config)
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
    GetEventSearchResults(SearchToken: JobToken, MinResults: number, MaxResults: number, WaitTime: string) {
        return ONVIFSearch.GetEventSearchResults(SearchToken,MinResults,MaxResults,WaitTime).run(this.config)
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
    FindPTZPosition(StartPoint: string, Scope: SearchScope, SearchFilter: PTZPositionFilter, KeepAliveTime: string, EndPoint: string, MaxMatches: number) {
        return ONVIFSearch.FindPTZPosition(StartPoint,Scope,SearchFilter,KeepAliveTime,EndPoint,MaxMatches).run(this.config)
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
    GetPTZPositionSearchResults(SearchToken: JobToken, MinResults: number, MaxResults: number, WaitTime: string) {
        return ONVIFSearch.GetPTZPositionSearchResults(SearchToken,MinResults,MaxResults,WaitTime).run(this.config)
    }

    /**
     * GetSearchState returns the current state of the specified search session. This command is deprecated .
     */
    GetSearchState(SearchToken: JobToken) {
        return ONVIFSearch.GetSearchState(SearchToken).run(this.config)
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
    EndSearch(SearchToken: JobToken) {
        return ONVIFSearch.EndSearch(SearchToken).run(this.config)
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
    FindMetadata(StartPoint: string, Scope: SearchScope, MetadataFilter: MetadataFilter, KeepAliveTime: string, EndPoint: string, MaxMatches: number) {
        return ONVIFSearch.FindMetadata(StartPoint,Scope,MetadataFilter,KeepAliveTime,EndPoint,MaxMatches).run(this.config)
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
    GetMetadataSearchResults(SearchToken: JobToken, MinResults: number, MaxResults: number, WaitTime: string) {
        return ONVIFSearch.GetMetadataSearchResults(SearchToken,MinResults,MaxResults,WaitTime).run(this.config)
    }
}
