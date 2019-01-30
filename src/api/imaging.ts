import { createStandardRequestBodyFromString, mapResponseXmlToJson, generateRequestElements, mapResponseObsToProperty } from "../soap/request";
import { IDeviceConfig } from "../config";
import { ReferenceToken, ImagingSettings20, FocusMove } from "./types";

export class ONVIFImaging {
    constructor(private config: IDeviceConfig) {
    }

    /**
     * Returns the capabilities of the imaging service. The result is returned in a typed answer.
     */
    static GetServiceCapabilities() {
        return createStandardRequestBodyFromString(generateRequestElements('timg:GetServiceCapabilities')({}))
                        .map(mapResponseXmlToJson<any>('timg:GetServiceCapabilitiesResponse'))
                      
    }

    /**
     * Get the ImagingConfiguration for the requested VideoSource.
     */
    static GetImagingSettings(VideoSourceToken: ReferenceToken) {
        return createStandardRequestBodyFromString(generateRequestElements('timg:GetImagingSettings')({timg_VideoSourceToken:VideoSourceToken}))
                        .map(mapResponseXmlToJson<any>('timg:GetImagingSettingsResponse'))
                      
    }

    /**
     * Set the ImagingConfiguration for the requested VideoSource.
     */
    static SetImagingSettings(VideoSourceToken: ReferenceToken, ImagingSettings: ImagingSettings20, ForcePersistence?: boolean) {
        return createStandardRequestBodyFromString(generateRequestElements('timg:SetImagingSettings')({timg_VideoSourceToken:VideoSourceToken,timg_ImagingSettings:ImagingSettings,timg_ForcePersistence:ForcePersistence}))
                        .map(mapResponseXmlToJson<any>('timg:SetImagingSettingsResponse'))
                      
    }

    /**
     * This operation gets the valid ranges for the imaging parameters that have device specific ranges. 
     *   This command is mandatory for all device implementing the imaging service. The command returns all supported parameters and their ranges 
     *   such that these can be applied to the SetImagingSettings command.
     *   For read-only parameters which cannot be modified via the SetImagingSettings command only a single option or identical Min and Max values 
     *   is provided.
     */
    static GetOptions(VideoSourceToken: ReferenceToken) {
        return createStandardRequestBodyFromString(generateRequestElements('timg:GetOptions')({timg_VideoSourceToken:VideoSourceToken}))
                        .map(mapResponseXmlToJson<any>('timg:GetOptionsResponse'))
                      
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
    static Move(VideoSourceToken: ReferenceToken, Focus: FocusMove) {
        return createStandardRequestBodyFromString(generateRequestElements('timg:Move')({timg_VideoSourceToken:VideoSourceToken,timg_Focus:Focus}))
                        .map(mapResponseXmlToJson<any>('timg:MoveResponse'))
                      
    }

    /**
     * Imaging move operation options supported for the Video source.
     */
    static GetMoveOptions(VideoSourceToken: ReferenceToken) {
        return createStandardRequestBodyFromString(generateRequestElements('timg:GetMoveOptions')({timg_VideoSourceToken:VideoSourceToken}))
                        .map(mapResponseXmlToJson<any>('timg:GetMoveOptionsResponse'))
                      
    }

    /**
     * The Stop command stops all ongoing focus movements of the lense. A device with support for remote focus control as signalled via 
     *   the GetMoveOptions supports this command. The operation will not affect ongoing autofocus operation.
     */
    static Stop(VideoSourceToken: ReferenceToken) {
        return createStandardRequestBodyFromString(generateRequestElements('timg:Stop')({timg_VideoSourceToken:VideoSourceToken}))
                        .map(mapResponseXmlToJson<any>('timg:StopResponse'))
                      
    }

    /**
     * Via this command the current status of the Move operation can be requested. Supported for this command is available if the support for the Move operation is signalled via GetMoveOptions.
     */
    static GetStatus(VideoSourceToken: ReferenceToken) {
        return createStandardRequestBodyFromString(generateRequestElements('timg:GetStatus')({timg_VideoSourceToken:VideoSourceToken}))
                        .map(mapResponseXmlToJson<any>('timg:GetStatusResponse'))
                      
    }

    /**
     * Via this command the list of available Imaging Presets can be requested.
     */
    static GetPresets(VideoSourceToken: ReferenceToken) {
        return createStandardRequestBodyFromString(generateRequestElements('timg:GetPresets')({timg_VideoSourceToken:VideoSourceToken}))
                        .map(mapResponseXmlToJson<any>('timg:GetPresetsResponse'))
                      
    }

    /**
     * Via this command the last Imaging Preset applied can be requested. 
     *   If the camera configuration does not match any of the existing Imaging Presets, the output of GetCurrentPreset shall be Empty.
     *   GetCurrentPreset shall return 0 if Imaging Presets are not supported by the Video Source.
     */
    static GetCurrentPreset(VideoSourceToken: ReferenceToken) {
        return createStandardRequestBodyFromString(generateRequestElements('timg:GetCurrentPreset')({timg_VideoSourceToken:VideoSourceToken}))
                        .map(mapResponseXmlToJson<any>('timg:GetCurrentPresetResponse'))
                      
    }

    /**
     * The SetCurrentPreset command shall request a given Imaging Preset to be applied to the specified Video Source.
     *   SetCurrentPreset shall only be available for Video Sources with Imaging Presets Capability. 
     *   Imaging Presets are defined by the Manufacturer, and offered as a tool to simplify Imaging Settings adjustments for specific scene content.
     *   When the new Imaging Preset is applied by SetCurrentPreset, the Device shall adjust the Video Source settings to match those defined by the specified Imaging Preset.
     */
    static SetCurrentPreset(VideoSourceToken: ReferenceToken, PresetToken: ReferenceToken) {
        return createStandardRequestBodyFromString(generateRequestElements('timg:SetCurrentPreset')({timg_VideoSourceToken:VideoSourceToken,timg_PresetToken:PresetToken}))
                        .map(mapResponseXmlToJson<any>('timg:SetCurrentPresetResponse'))
                      
    }

    /**
     * Returns the capabilities of the imaging service. The result is returned in a typed answer.
     */
    GetServiceCapabilities() {
        return ONVIFImaging.GetServiceCapabilities().run(this.config)
    }

    /**
     * Get the ImagingConfiguration for the requested VideoSource.
     */
    GetImagingSettings(VideoSourceToken: ReferenceToken) {
        return ONVIFImaging.GetImagingSettings(VideoSourceToken).run(this.config)
    }

    /**
     * Set the ImagingConfiguration for the requested VideoSource.
     */
    SetImagingSettings(VideoSourceToken: ReferenceToken, ImagingSettings: ImagingSettings20, ForcePersistence: boolean) {
        return ONVIFImaging.SetImagingSettings(VideoSourceToken,ImagingSettings,ForcePersistence).run(this.config)
    }

    /**
     * This operation gets the valid ranges for the imaging parameters that have device specific ranges. 
     *   This command is mandatory for all device implementing the imaging service. The command returns all supported parameters and their ranges 
     *   such that these can be applied to the SetImagingSettings command.
     *   For read-only parameters which cannot be modified via the SetImagingSettings command only a single option or identical Min and Max values 
     *   is provided.
     */
    GetOptions(VideoSourceToken: ReferenceToken) {
        return ONVIFImaging.GetOptions(VideoSourceToken).run(this.config)
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
    Move(VideoSourceToken: ReferenceToken, Focus: FocusMove) {
        return ONVIFImaging.Move(VideoSourceToken,Focus).run(this.config)
    }

    /**
     * Imaging move operation options supported for the Video source.
     */
    GetMoveOptions(VideoSourceToken: ReferenceToken) {
        return ONVIFImaging.GetMoveOptions(VideoSourceToken).run(this.config)
    }

    /**
     * The Stop command stops all ongoing focus movements of the lense. A device with support for remote focus control as signalled via 
     *   the GetMoveOptions supports this command. The operation will not affect ongoing autofocus operation.
     */
    Stop(VideoSourceToken: ReferenceToken) {
        return ONVIFImaging.Stop(VideoSourceToken).run(this.config)
    }

    /**
     * Via this command the current status of the Move operation can be requested. Supported for this command is available if the support for the Move operation is signalled via GetMoveOptions.
     */
    GetStatus(VideoSourceToken: ReferenceToken) {
        return ONVIFImaging.GetStatus(VideoSourceToken).run(this.config)
    }

    /**
     * Via this command the list of available Imaging Presets can be requested.
     */
    GetPresets(VideoSourceToken: ReferenceToken) {
        return ONVIFImaging.GetPresets(VideoSourceToken).run(this.config)
    }

    /**
     * Via this command the last Imaging Preset applied can be requested. 
     *   If the camera configuration does not match any of the existing Imaging Presets, the output of GetCurrentPreset shall be Empty.
     *   GetCurrentPreset shall return 0 if Imaging Presets are not supported by the Video Source.
     */
    GetCurrentPreset(VideoSourceToken: ReferenceToken) {
        return ONVIFImaging.GetCurrentPreset(VideoSourceToken).run(this.config)
    }

    /**
     * The SetCurrentPreset command shall request a given Imaging Preset to be applied to the specified Video Source.
     *   SetCurrentPreset shall only be available for Video Sources with Imaging Presets Capability. 
     *   Imaging Presets are defined by the Manufacturer, and offered as a tool to simplify Imaging Settings adjustments for specific scene content.
     *   When the new Imaging Preset is applied by SetCurrentPreset, the Device shall adjust the Video Source settings to match those defined by the specified Imaging Preset.
     */
    SetCurrentPreset(VideoSourceToken: ReferenceToken, PresetToken: ReferenceToken) {
        return ONVIFImaging.SetCurrentPreset(VideoSourceToken,PresetToken).run(this.config)
    }
}
