import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../soap/request";
import { RecordingConfiguration, RecordingReference, TrackConfiguration, TrackReference, RecordingJobConfiguration, RecordingJobReference, RecordingJobMode, SearchScope, StorageReferencePath, ReferenceToken } from "./types";

export namespace Recording {
    /**
     * Returns the capabilities of the recording service. The result is returned in a typed answer.
     */
    export function GetServiceCapabilities() {
        return createStandardRequestBodyFromString('<trc:GetServiceCapabilities />')
                        .map(mapResponseXmlToJson<any>('trc:GetServiceCapabilitiesResponse')())
                      
    }

    /**
     * CreateRecording shall create a new recording. The new recording shall be created with a track 
     *                                   for each supported TrackType see Recording Control Spec. 
     *   This method is optional. It shall be available if the Recording/DynamicRecordings capability is TRUE. 
     *   When successfully completed, CreateRecording shall have created three tracks with the following configurations: 
     *   
     *   TrackToken TrackType
     *   
     *   VIDEO001 Video
     *   
     *   AUDIO001 Audio
     *   
     *   META001 Metadata
     *   
     *   All TrackConfigurations shall have the MaximumRetentionTime set to 0 (unlimited), and the
     *   Description set to the empty string.
     *   
     */
    export function CreateRecording(RecordingConfiguration: RecordingConfiguration) {
        return createStandardRequestBodyFromString('<trc:CreateRecording />')
                        .map(mapResponseXmlToJson<any>('trc:CreateRecordingResponse')())
                      
    }

    /**
     * DeleteRecording shall delete a recording object. Whenever a recording is deleted, the device
     *   shall delete all the tracks that are part of the recording, and it shall delete all the Recording
     *   Jobs that record into the recording. For each deleted recording job, the device shall also
     *   delete all the receiver objects associated with the recording job that are automatically created
     *   using the AutoCreateReceiver field of the recording job configuration structure and are not
     *   used in any other recording job.
     *   This method is optional. It shall be available if the Recording/DynamicRecordings capability is TRUE.
     *   
     */
    export function DeleteRecording(RecordingToken: RecordingReference) {
        return createStandardRequestBodyFromString('<trc:DeleteRecording />')
                        .map(mapResponseXmlToJson<any>('trc:DeleteRecordingResponse')())
                      
    }

    /**
     * GetRecordings shall return a description of all the recordings in the device. This description
     *   shall include a list of all the tracks for each recording.
     */
    export function GetRecordings() {
        return createStandardRequestBodyFromString('<trc:GetRecordings />')
                        .map(mapResponseXmlToJson<any>('trc:GetRecordingsResponse')())
                      
    }

    /**
     * SetRecordingConfiguration shall change the configuration of a recording.
     */
    export function SetRecordingConfiguration(RecordingToken: RecordingReference, RecordingConfiguration: RecordingConfiguration) {
        return createStandardRequestBodyFromString('<trc:SetRecordingConfiguration />')
                        .map(mapResponseXmlToJson<any>('trc:SetRecordingConfigurationResponse')())
                      
    }

    /**
     * GetRecordingConfiguration shall retrieve the recording configuration for a recording.
     */
    export function GetRecordingConfiguration(RecordingToken: RecordingReference) {
        return createStandardRequestBodyFromString('<trc:GetRecordingConfiguration />')
                        .map(mapResponseXmlToJson<any>('trc:GetRecordingConfigurationResponse')())
                      
    }

    /**
     * GetRecordingOptions returns information for a recording identified by the RecordingToken. The information includes the number of additonal tracks as well as recording jobs that can be configured.
     */
    export function GetRecordingOptions(RecordingToken: RecordingReference) {
        return createStandardRequestBodyFromString('<trc:GetRecordingOptions />')
                        .map(mapResponseXmlToJson<any>('trc:GetRecordingOptionsResponse')())
                      
    }

    /**
     * This method shall create a new track within a recording.
     *   This method is optional. It shall be available if the Recording/DynamicTracks capability is TRUE.
     *   A TrackToken in itself does not uniquely identify a specific track. Tracks within different
     *   recordings may have the same TrackToken.
     *   
     */
    export function CreateTrack(RecordingToken: RecordingReference, TrackConfiguration: TrackConfiguration) {
        return createStandardRequestBodyFromString('<trc:CreateTrack />')
                        .map(mapResponseXmlToJson<any>('trc:CreateTrackResponse')())
                      
    }

    /**
     * DeleteTrack shall remove a track from a recording. All the data in the track shall be deleted.
     *   This method is optional. It shall be available if the Recording/DynamicTracks capability is
     *   TRUE.
     */
    export function DeleteTrack(RecordingToken: RecordingReference, TrackToken: TrackReference) {
        return createStandardRequestBodyFromString('<trc:DeleteTrack />')
                        .map(mapResponseXmlToJson<any>('trc:DeleteTrackResponse')())
                      
    }

    /**
     * GetTrackConfiguration shall retrieve the configuration for a specific track.
     */
    export function GetTrackConfiguration(RecordingToken: RecordingReference, TrackToken: TrackReference) {
        return createStandardRequestBodyFromString('<trc:GetTrackConfiguration />')
                        .map(mapResponseXmlToJson<any>('trc:GetTrackConfigurationResponse')())
                      
    }

    /**
     * SetTrackConfiguration shall change the configuration of a track.
     */
    export function SetTrackConfiguration(RecordingToken: RecordingReference, TrackToken: TrackReference, TrackConfiguration: TrackConfiguration) {
        return createStandardRequestBodyFromString('<trc:SetTrackConfiguration />')
                        .map(mapResponseXmlToJson<any>('trc:SetTrackConfigurationResponse')())
                      
    }

    /**
     * CreateRecordingJob shall create a new recording job.
     *   The JobConfiguration returned from CreateRecordingJob shall be identical to the
     *   JobConfiguration passed into CreateRecordingJob, except for the ReceiverToken and the
     *   AutoCreateReceiver. In the returned structure, the ReceiverToken shall be present and valid
     *   and the AutoCreateReceiver field shall be omitted.
     *   
     */
    export function CreateRecordingJob(JobConfiguration: RecordingJobConfiguration) {
        return createStandardRequestBodyFromString('<trc:CreateRecordingJob />')
                        .map(mapResponseXmlToJson<any>('trc:CreateRecordingJobResponse')())
                      
    }

    /**
     * DeleteRecordingJob removes a recording job. It shall also implicitly delete all the receiver
     *   objects associated with the recording job that are automatically created using the
     *   AutoCreateReceiver field of the recording job configuration structure and are not used in any
     *   other recording job.
     */
    export function DeleteRecordingJob(JobToken: RecordingJobReference) {
        return createStandardRequestBodyFromString('<trc:DeleteRecordingJob />')
                        .map(mapResponseXmlToJson<any>('trc:DeleteRecordingJobResponse')())
                      
    }

    /**
     * GetRecordingJobs shall return a list of all the recording jobs in the device.
     */
    export function GetRecordingJobs() {
        return createStandardRequestBodyFromString('<trc:GetRecordingJobs />')
                        .map(mapResponseXmlToJson<any>('trc:GetRecordingJobsResponse')())
                      
    }

    /**
     * SetRecordingJobConfiguration shall change the configuration for a recording job.
     *   SetRecordingJobConfiguration shall implicitly delete any receiver objects that were created
     *   automatically if they are no longer used as a result of changing the recording job configuration.
     *   
     */
    export function SetRecordingJobConfiguration(JobToken: RecordingJobReference, JobConfiguration: RecordingJobConfiguration) {
        return createStandardRequestBodyFromString('<trc:SetRecordingJobConfiguration />')
                        .map(mapResponseXmlToJson<any>('trc:SetRecordingJobConfigurationResponse')())
                      
    }

    /**
     * GetRecordingJobConfiguration shall return the current configuration for a recording job.
     */
    export function GetRecordingJobConfiguration(JobToken: RecordingJobReference) {
        return createStandardRequestBodyFromString('<trc:GetRecordingJobConfiguration />')
                        .map(mapResponseXmlToJson<any>('trc:GetRecordingJobConfigurationResponse')())
                      
    }

    /**
     * SetRecordingJobMode shall change the mode of the recording job. Using this method shall be
     *   equivalent to retrieving the recording job configuration, and writing it back with a different
     *   mode.
     */
    export function SetRecordingJobMode(JobToken: RecordingJobReference, Mode: RecordingJobMode) {
        return createStandardRequestBodyFromString('<trc:SetRecordingJobMode />')
                        .map(mapResponseXmlToJson<any>('trc:SetRecordingJobModeResponse')())
                      
    }

    /**
     * GetRecordingJobState returns the state of a recording job. It includes an aggregated state,
     *   and state for each track of the recording job.
     */
    export function GetRecordingJobState(JobToken: RecordingJobReference) {
        return createStandardRequestBodyFromString('<trc:GetRecordingJobState />')
                        .map(mapResponseXmlToJson<any>('trc:GetRecordingJobStateResponse')())
                      
    }

    /**
     * 
     *   Exports the selected recordings (from existing recorded data) to the given storage target based on the requested file format. 
     *   
     */
    export function ExportRecordedData(StartPoint: string, EndPoint: string, SearchScope: SearchScope, FileFormat: string, StorageDestination: StorageReferencePath) {
        return createStandardRequestBodyFromString('<trc:ExportRecordedData />')
                        .map(mapResponseXmlToJson<any>('trc:ExportRecordedDataResponse')())
                      
    }

    /**
     * 
     *   Stops the selected ExportRecordedData operation. 
     *   
     */
    export function StopExportRecordedData(OperationToken: ReferenceToken) {
        return createStandardRequestBodyFromString('<trc:StopExportRecordedData />')
                        .map(mapResponseXmlToJson<any>('trc:StopExportRecordedDataResponse')())
                      
    }

    /**
     * 
     *   Retrieves the status of selected ExportRecordedData operation. 
     *   
     */
    export function GetExportRecordedDataState(OperationToken: ReferenceToken) {
        return createStandardRequestBodyFromString('<trc:GetExportRecordedDataState />')
                        .map(mapResponseXmlToJson<any>('trc:GetExportRecordedDataStateResponse')())
                      
    }
}
