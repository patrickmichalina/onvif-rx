import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../soap/request";
import { ReferenceToken, ImagingSettings20, FocusMove } from "./types";

export namespace Imaging {
    /**
     * Returns the capabilities of the imaging service. The result is returned in a typed answer.
     */
    export function GetServiceCapabilities() {
        return createStandardRequestBodyFromString('<timg:GetServiceCapabilities />')
                        .map(mapResponseXmlToJson<any>('timg:GetServiceCapabilitiesResponse')())
                      
    }

    /**
     * Get the ImagingConfiguration for the requested VideoSource.
     */
    export function GetImagingSettings(VideoSourceToken: ReferenceToken) {
        return createStandardRequestBodyFromString('<timg:GetImagingSettings />')
                        .map(mapResponseXmlToJson<any>('timg:GetImagingSettingsResponse')())
                      
    }

    /**
     * Set the ImagingConfiguration for the requested VideoSource.
     */
    export function SetImagingSettings(VideoSourceToken: ReferenceToken, ImagingSettings: ImagingSettings20, ForcePersistence: boolean) {
        return createStandardRequestBodyFromString('<timg:SetImagingSettings />')
                        .map(mapResponseXmlToJson<any>('timg:SetImagingSettingsResponse')())
                      
    }

    /**
     * This operation gets the valid ranges for the imaging parameters that have device specific ranges. 
     *   This command is mandatory for all device implementing the imaging service. The command returns all supported parameters and their ranges 
     *   such that these can be applied to the SetImagingSettings command.
     *   For read-only parameters which cannot be modified via the SetImagingSettings command only a single option or identical Min and Max values 
     *   is provided.
     */
    export function GetOptions(VideoSourceToken: ReferenceToken) {
        return createStandardRequestBodyFromString('<timg:GetOptions />')
                        .map(mapResponseXmlToJson<any>('timg:GetOptionsResponse')())
                      
    }

    /**
     * The Move command moves the focus lens in an absolute, a relative or in a continuous manner from its current position. 
     *   The speed argument is optional for absolute and relative control, but required for continuous. If no speed argument is used, the default speed is used. 
     *   Focus adjustments through this operation will turn off the autofocus. A device with support for remote focus control should support absolute, 
     *   relative or continuous control through the Move operation. The supported MoveOpions are signalled via the GetMoveOptions command.
     *   At least one focus control capability is required for this operation to be functional. 
     *   The move operation contains the following commands:
     *   Absolute – Requires position parameter and optionally takes a speed argument. A unitless type is used by default for focus positioning and speed. Optionally, if supported, the position may be requested in m-1 units. 
     *   Relative – Requires distance parameter and optionally takes a speed argument. Negative distance means negative direction. 
     *   Continuous – Requires a speed argument. Negative speed argument means negative direction.
     *   
     */
    export function Move(VideoSourceToken: ReferenceToken, Focus: FocusMove) {
        return createStandardRequestBodyFromString('<timg:Move />')
                        .map(mapResponseXmlToJson<any>('timg:MoveResponse')())
                      
    }

    /**
     * Imaging move operation options supported for the Video source.
     */
    export function GetMoveOptions(VideoSourceToken: ReferenceToken) {
        return createStandardRequestBodyFromString('<timg:GetMoveOptions />')
                        .map(mapResponseXmlToJson<any>('timg:GetMoveOptionsResponse')())
                      
    }

    /**
     * The Stop command stops all ongoing focus movements of the lense. A device with support for remote focus control as signalled via 
     *   the GetMoveOptions supports this command. The operation will not affect ongoing autofocus operation.
     */
    export function Stop(VideoSourceToken: ReferenceToken) {
        return createStandardRequestBodyFromString('<timg:Stop />')
                        .map(mapResponseXmlToJson<any>('timg:StopResponse')())
                      
    }

    /**
     * Via this command the current status of the Move operation can be requested. Supported for this command is available if the support for the Move operation is signalled via GetMoveOptions.
     */
    export function GetStatus(VideoSourceToken: ReferenceToken) {
        return createStandardRequestBodyFromString('<timg:GetStatus />')
                        .map(mapResponseXmlToJson<any>('timg:GetStatusResponse')())
                      
    }

    /**
     * Via this command the list of available Imaging Presets can be requested.
     */
    export function GetPresets(VideoSourceToken: ReferenceToken) {
        return createStandardRequestBodyFromString('<timg:GetPresets />')
                        .map(mapResponseXmlToJson<any>('timg:GetPresetsResponse')())
                      
    }

    /**
     * Via this command the last Imaging Preset applied can be requested. 
     *   If the camera configuration does not match any of the existing Imaging Presets, the output of GetCurrentPreset shall be Empty.
     *   GetCurrentPreset shall return 0 if Imaging Presets are not supported by the Video Source.
     */
    export function GetCurrentPreset(VideoSourceToken: ReferenceToken) {
        return createStandardRequestBodyFromString('<timg:GetCurrentPreset />')
                        .map(mapResponseXmlToJson<any>('timg:GetCurrentPresetResponse')())
                      
    }

    /**
     * The SetCurrentPreset command shall request a given Imaging Preset to be applied to the specified Video Source.
     *   SetCurrentPreset shall only be available for Video Sources with Imaging Presets Capability. 
     *   Imaging Presets are defined by the Manufacturer, and offered as a tool to simplify Imaging Settings adjustments for specific scene content.
     *   When the new Imaging Preset is applied by SetCurrentPreset, the Device shall adjust the Video Source settings to match those defined by the specified Imaging Preset.
     */
    export function SetCurrentPreset(VideoSourceToken: ReferenceToken, PresetToken: ReferenceToken) {
        return createStandardRequestBodyFromString('<timg:SetCurrentPreset />')
                        .map(mapResponseXmlToJson<any>('timg:SetCurrentPresetResponse')())
                      
    }
}
