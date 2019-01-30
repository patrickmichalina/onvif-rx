import { createStandardRequestBodyFromString, mapResponseXmlToJson, generateRequestElements, mapResponseObsToProperty } from "../soap/request";
import { IDeviceConfig } from "../config";
import { ReferenceToken, PTZConfiguration, AuxiliaryData, PTZSpeed, PTZVector, GeoLocation, PresetTour, PTZPresetTourOperation } from "./types";

export class ONVIFPTZ {
    constructor(private config: IDeviceConfig) {
    }

    /**
     * Returns the capabilities of the PTZ service. The result is returned in a typed answer.
     */
    static GetServiceCapabilities() {
        return createStandardRequestBodyFromString(generateRequestElements('tptz:GetServiceCapabilities')({}))
                        .map(mapResponseXmlToJson<any>('tptz:GetServiceCapabilitiesResponse'))
                      
    }

    /**
     * 
     *   Get the descriptions of the available PTZ Nodes.
     *   
     *   A PTZ-capable device may have multiple PTZ Nodes. The PTZ Nodes may represent
     *   mechanical PTZ drivers, uploaded PTZ drivers or digital PTZ drivers. PTZ Nodes are the
     *   lowest level entities in the PTZ control API and reflect the supported PTZ capabilities. The
     *   PTZ Node is referenced either by its name or by its reference token. 
     *         
     */
    static GetNodes() {
        return createStandardRequestBodyFromString(generateRequestElements('tptz:GetNodes')({}))
                        .map(mapResponseXmlToJson<any>('tptz:GetNodesResponse'))
                      
    }

    /**
     * Get a specific PTZ Node identified by a reference
     *           token or a name.
     *     
     */
    static GetNode(NodeToken: ReferenceToken) {
        return createStandardRequestBodyFromString(generateRequestElements('tptz:GetNode')({tptz_NodeToken:NodeToken}))
                        .map(mapResponseXmlToJson<any>('tptz:GetNodeResponse'))
                      
    }

    /**
     * Get a specific PTZconfiguration from the device, identified by its reference token or name.
     *   
     *   The default Position/Translation/Velocity Spaces are introduced to allow NVCs sending move
     *   requests without the need to specify a certain coordinate system. The default Speeds are
     *   introduced to control the speed of move requests (absolute, relative, preset), where no
     *   explicit speed has been set.
     *   The allowed pan and tilt range for Pan/Tilt Limits is defined by a two-dimensional space range
     *   that is mapped to a specific Absolute Pan/Tilt Position Space. At least one Pan/Tilt Position
     *   Space is required by the PTZNode to support Pan/Tilt limits. The limits apply to all supported
     *   absolute, relative and continuous Pan/Tilt movements. The limits shall be checked within the
     *   coordinate system for which the limits have been specified. That means that even if
     *   movements are specified in a different coordinate system, the requested movements shall be
     *   transformed to the coordinate system of the limits where the limits can be checked. When a
     *   relative or continuous movements is specified, which would leave the specified limits, the PTZ
     *   unit has to move along the specified limits. The Zoom Limits have to be interpreted
     *   accordingly.
     *   
     */
    static GetConfiguration(PTZConfigurationToken: ReferenceToken) {
        return createStandardRequestBodyFromString(generateRequestElements('tptz:GetConfiguration')({tptz_PTZConfigurationToken:PTZConfigurationToken}))
                        .map(mapResponseXmlToJson<any>('tptz:GetConfigurationResponse'))
                      
    }

    /**
     * 
     *           Get all the existing PTZConfigurations from the device.
     *   
     *   The default Position/Translation/Velocity Spaces are introduced to allow NVCs sending move
     *   requests without the need to specify a certain coordinate system. The default Speeds are
     *   introduced to control the speed of move requests (absolute, relative, preset), where no
     *   explicit speed has been set.
     *   The allowed pan and tilt range for Pan/Tilt Limits is defined by a two-dimensional space range
     *   that is mapped to a specific Absolute Pan/Tilt Position Space. At least one Pan/Tilt Position
     *   Space is required by the PTZNode to support Pan/Tilt limits. The limits apply to all supported
     *   absolute, relative and continuous Pan/Tilt movements. The limits shall be checked within the
     *   coordinate system for which the limits have been specified. That means that even if
     *   movements are specified in a different coordinate system, the requested movements shall be
     *   transformed to the coordinate system of the limits where the limits can be checked. When a
     *   relative or continuous movements is specified, which would leave the specified limits, the PTZ
     *   unit has to move along the specified limits. The Zoom Limits have to be interpreted
     *   accordingly.
     *   
     */
    static GetConfigurations() {
        return createStandardRequestBodyFromString(generateRequestElements('tptz:GetConfigurations')({}))
                        .map(mapResponseXmlToJson<any>('tptz:GetConfigurationsResponse'))
                      
    }

    /**
     * 
     *           Set/update a existing PTZConfiguration on the device.
     *         
     */
    static SetConfiguration(PTZConfiguration: PTZConfiguration, ForcePersistence: boolean) {
        return createStandardRequestBodyFromString(generateRequestElements('tptz:SetConfiguration')({tptz_PTZConfiguration:PTZConfiguration,tptz_ForcePersistence:ForcePersistence}))
                        .map(mapResponseXmlToJson<any>('tptz:SetConfigurationResponse'))
                      
    }

    /**
     * 
     *   List supported coordinate systems including their range limitations. Therefore, the options
     *   MAY differ depending on whether the PTZ Configuration is assigned to a Profile containing a
     *   Video Source Configuration. In that case, the options may additionally contain coordinate
     *   systems referring to the image coordinate system described by the Video Source
     *   Configuration. If the PTZ Node supports continuous movements, it shall return a Timeout Range within
     *   which Timeouts are accepted by the PTZ Node.
     *   
     */
    static GetConfigurationOptions(ConfigurationToken: ReferenceToken) {
        return createStandardRequestBodyFromString(generateRequestElements('tptz:GetConfigurationOptions')({tptz_ConfigurationToken:ConfigurationToken}))
                        .map(mapResponseXmlToJson<any>('tptz:GetConfigurationOptionsResponse'))
                      
    }

    /**
     * 
     *           Operation to send auxiliary commands to the PTZ device
     *           mapped by the PTZNode in the selected profile. The
     *           operation is supported
     *           if the AuxiliarySupported element of the PTZNode is true
     *         
     */
    static SendAuxiliaryCommand(ProfileToken: ReferenceToken, AuxiliaryData: AuxiliaryData) {
        return createStandardRequestBodyFromString(generateRequestElements('tptz:SendAuxiliaryCommand')({tptz_ProfileToken:ProfileToken,tptz_AuxiliaryData:AuxiliaryData}))
                        .map(mapResponseXmlToJson<any>('tptz:SendAuxiliaryCommandResponse'))
                      
    }

    /**
     * 
     *           Operation to request all PTZ presets for the PTZNode
     *           in the selected profile. The operation is supported if there is support
     *           for at least on PTZ preset by the PTZNode.
     */
    static GetPresets(ProfileToken: ReferenceToken) {
        return createStandardRequestBodyFromString(generateRequestElements('tptz:GetPresets')({tptz_ProfileToken:ProfileToken}))
                        .map(mapResponseXmlToJson<any>('tptz:GetPresetsResponse'))
                      
    }

    /**
     * 
     *   The SetPreset command saves the current device position parameters so that the device can
     *   move to the saved preset position through the GotoPreset operation.
     *   In order to create a new preset, the SetPresetRequest contains no PresetToken. If creation is
     *   successful, the Response contains the PresetToken which uniquely identifies the Preset. An
     *   existing Preset can be overwritten by specifying the PresetToken of the corresponding Preset.
     *   In both cases (overwriting or creation) an optional PresetName can be specified. The
     *   operation fails if the PTZ device is moving during the SetPreset operation.
     *   The device MAY internally save additional states such as imaging properties in the PTZ
     *   Preset which then should be recalled in the GotoPreset operation.      
     */
    static SetPreset(ProfileToken: ReferenceToken, PresetName?: string, PresetToken?: ReferenceToken) {
        return createStandardRequestBodyFromString(generateRequestElements('tptz:SetPreset')({tptz_ProfileToken:ProfileToken,tptz_PresetName:PresetName,tptz_PresetToken:PresetToken}))
                        .map(mapResponseXmlToJson<any>('tptz:SetPresetResponse'))
                      
    }

    /**
     * 
     *           Operation to remove a PTZ preset for the Node in
     *           the
     *           selected profile. The operation is supported if the
     *           PresetPosition
     *           capability exists for teh Node in the
     *           selected profile.
     *         
     */
    static RemovePreset(ProfileToken: ReferenceToken, PresetToken: ReferenceToken) {
        return createStandardRequestBodyFromString(generateRequestElements('tptz:RemovePreset')({tptz_ProfileToken:ProfileToken,tptz_PresetToken:PresetToken}))
                        .map(mapResponseXmlToJson<any>('tptz:RemovePresetResponse'))
                      
    }

    /**
     * 
     *           Operation to go to a saved preset position for the
     *           PTZNode in the selected profile. The operation is supported if there is
     *           support for at least on PTZ preset by the PTZNode.
     */
    static GotoPreset(ProfileToken: ReferenceToken, PresetToken: ReferenceToken, Speed?: PTZSpeed) {
        return createStandardRequestBodyFromString(generateRequestElements('tptz:GotoPreset')({tptz_ProfileToken:ProfileToken,tptz_PresetToken:PresetToken,tptz_Speed:Speed}))
                        .map(mapResponseXmlToJson<any>('tptz:GotoPresetResponse'))
                      
    }

    /**
     * 
     *           Operation to move the PTZ device to it's "home" position. The operation is supported if the HomeSupported element in the PTZNode is true.
     */
    static GotoHomePosition(ProfileToken: ReferenceToken, Speed?: PTZSpeed) {
        return createStandardRequestBodyFromString(generateRequestElements('tptz:GotoHomePosition')({tptz_ProfileToken:ProfileToken,tptz_Speed:Speed}))
                        .map(mapResponseXmlToJson<any>('tptz:GotoHomePositionResponse'))
                      
    }

    /**
     * Operation to save current position as the home position.
     *   The SetHomePosition command returns with a failure if the “home” position is fixed and
     *   cannot be overwritten. If the SetHomePosition is successful, it is possible to recall the
     *   Home Position with the GotoHomePosition command.
     */
    static SetHomePosition(ProfileToken: ReferenceToken) {
        return createStandardRequestBodyFromString(generateRequestElements('tptz:SetHomePosition')({tptz_ProfileToken:ProfileToken}))
                        .map(mapResponseXmlToJson<any>('tptz:SetHomePositionResponse'))
                      
    }

    /**
     * Operation for continuous Pan/Tilt and Zoom movements. The operation is supported if the PTZNode supports at least one continuous Pan/Tilt or Zoom space. If the space argument is omitted, the default space set by the PTZConfiguration will be used.
     */
    static ContinuousMove(ProfileToken: ReferenceToken, Velocity: PTZSpeed, Timeout?: string) {
        return createStandardRequestBodyFromString(generateRequestElements('tptz:ContinuousMove')({tptz_ProfileToken:ProfileToken,tptz_Velocity:Velocity,tptz_Timeout:Timeout}))
                        .map(mapResponseXmlToJson<any>('tptz:ContinuousMoveResponse'))
                      
    }

    /**
     * Operation for Relative Pan/Tilt and Zoom Move. The operation is supported if the PTZNode supports at least one relative Pan/Tilt or Zoom space. 
     *   The speed argument is optional. If an x/y speed value is given it is up to the device to either use 
     *   the x value as absolute resoluting speed vector or to map x and y to the component speed. 
     *   If the speed argument is omitted, the default speed set by the PTZConfiguration will be used.
     *   
     */
    static RelativeMove(ProfileToken: ReferenceToken, Translation: PTZVector, Speed?: PTZSpeed) {
        return createStandardRequestBodyFromString(generateRequestElements('tptz:RelativeMove')({tptz_ProfileToken:ProfileToken,tptz_Translation:Translation,tptz_Speed:Speed}))
                        .map(mapResponseXmlToJson<any>('tptz:RelativeMoveResponse'))
                      
    }

    /**
     * 
     *   Operation to request PTZ status for the Node in the
     *   selected profile.
     */
    static GetStatus(ProfileToken: ReferenceToken) {
        return createStandardRequestBodyFromString(generateRequestElements('tptz:GetStatus')({tptz_ProfileToken:ProfileToken}))
                        .map(mapResponseXmlToJson<any>('tptz:GetStatusResponse'))
                      
    }

    /**
     * Operation to move pan,tilt or zoom to a absolute destination. 
     *   The speed argument is optional. If an x/y speed value is given it is up to the device to either use 
     *   the x value as absolute resoluting speed vector or to map x and y to the component speed. 
     *   If the speed argument is omitted, the default speed set by the PTZConfiguration will be used.
     *   
     */
    static AbsoluteMove(ProfileToken: ReferenceToken, Position: PTZVector, Speed?: PTZSpeed) {
        return createStandardRequestBodyFromString(generateRequestElements('tptz:AbsoluteMove')({tptz_ProfileToken:ProfileToken,tptz_Position:Position,tptz_Speed:Speed}))
                        .map(mapResponseXmlToJson<any>('tptz:AbsoluteMoveResponse'))
                      
    }

    /**
     * Operation to move pan,tilt or zoom to point to a destination based on the geolocation of the target. 
     *   The speed argument is optional. If an x/y speed value is given it is up to the device to either use 
     *   the x value as absolute resoluting speed vector or to map x and y to the component speed. 
     *   If the speed argument is omitted, the default speed set by the PTZConfiguration will be used.
     *   The area height and area dwidth parameters are optional, they can be used independently and may be used
     *   by the device to automatically determine the best zoom level to show the target.
     *   
     */
    static GeoMove(ProfileToken: ReferenceToken, Target: GeoLocation, Speed?: PTZSpeed, AreaHeight?: number, AreaWidth?: number) {
        return createStandardRequestBodyFromString(generateRequestElements('tptz:GeoMove')({tptz_ProfileToken:ProfileToken,tptz_Target:Target,tptz_Speed:Speed,tptz_AreaHeight:AreaHeight,tptz_AreaWidth:AreaWidth}))
                        .map(mapResponseXmlToJson<any>('tptz:GeoMoveResponse'))
                      
    }

    /**
     * Operation to stop ongoing pan, tilt and zoom movements of absolute relative and continuous type.
     *   If no stop argument for pan, tilt or zoom is set, the device will stop all ongoing pan, tilt and zoom movements.
     */
    static Stop(ProfileToken: ReferenceToken, PanTilt?: boolean, Zoom?: boolean) {
        return createStandardRequestBodyFromString(generateRequestElements('tptz:Stop')({tptz_ProfileToken:ProfileToken,tptz_PanTilt:PanTilt,tptz_Zoom:Zoom}))
                        .map(mapResponseXmlToJson<any>('tptz:StopResponse'))
                      
    }

    /**
     * Operation to request PTZ preset tours in the selected media profiles.
     */
    static GetPresetTours(ProfileToken: ReferenceToken) {
        return createStandardRequestBodyFromString(generateRequestElements('tptz:GetPresetTours')({tptz_ProfileToken:ProfileToken}))
                        .map(mapResponseXmlToJson<any>('tptz:GetPresetToursResponse'))
                      
    }

    /**
     * Operation to request a specific PTZ preset tour in the selected media profile.
     */
    static GetPresetTour(ProfileToken: ReferenceToken, PresetTourToken: ReferenceToken) {
        return createStandardRequestBodyFromString(generateRequestElements('tptz:GetPresetTour')({tptz_ProfileToken:ProfileToken,tptz_PresetTourToken:PresetTourToken}))
                        .map(mapResponseXmlToJson<any>('tptz:GetPresetTourResponse'))
                      
    }

    /**
     * Operation to request available options to configure PTZ preset tour.
     */
    static GetPresetTourOptions(ProfileToken: ReferenceToken, PresetTourToken?: ReferenceToken) {
        return createStandardRequestBodyFromString(generateRequestElements('tptz:GetPresetTourOptions')({tptz_ProfileToken:ProfileToken,tptz_PresetTourToken:PresetTourToken}))
                        .map(mapResponseXmlToJson<any>('tptz:GetPresetTourOptionsResponse'))
                      
    }

    /**
     * Operation to create a preset tour for the selected media profile.
     */
    static CreatePresetTour(ProfileToken: ReferenceToken) {
        return createStandardRequestBodyFromString(generateRequestElements('tptz:CreatePresetTour')({tptz_ProfileToken:ProfileToken}))
                        .map(mapResponseXmlToJson<any>('tptz:CreatePresetTourResponse'))
                      
    }

    /**
     * Operation to modify a preset tour for the selected media profile.
     */
    static ModifyPresetTour(ProfileToken: ReferenceToken, PresetTour: PresetTour) {
        return createStandardRequestBodyFromString(generateRequestElements('tptz:ModifyPresetTour')({tptz_ProfileToken:ProfileToken,tptz_PresetTour:PresetTour}))
                        .map(mapResponseXmlToJson<any>('tptz:ModifyPresetTourResponse'))
                      
    }

    /**
     * Operation to perform specific operation on the preset tour in selected media profile.
     */
    static OperatePresetTour(ProfileToken: ReferenceToken, PresetTourToken: ReferenceToken, Operation: PTZPresetTourOperation) {
        return createStandardRequestBodyFromString(generateRequestElements('tptz:OperatePresetTour')({tptz_ProfileToken:ProfileToken,tptz_PresetTourToken:PresetTourToken,tptz_Operation:Operation}))
                        .map(mapResponseXmlToJson<any>('tptz:OperatePresetTourResponse'))
                      
    }

    /**
     * Operation to delete a specific preset tour from the media profile.
     */
    static RemovePresetTour(ProfileToken: ReferenceToken, PresetTourToken: ReferenceToken) {
        return createStandardRequestBodyFromString(generateRequestElements('tptz:RemovePresetTour')({tptz_ProfileToken:ProfileToken,tptz_PresetTourToken:PresetTourToken}))
                        .map(mapResponseXmlToJson<any>('tptz:RemovePresetTourResponse'))
                      
    }

    /**
     * Operation to get all available PTZConfigurations that can be added to the referenced media profile. 
     *   A device providing more than one PTZConfiguration or more than one VideoSourceConfiguration or which has any other resource
     *   interdependency between PTZConfiguration entities and other resources listable in a media profile should implement this operation.
     *   PTZConfiguration entities returned by this operation shall not fail on adding them to the referenced media profile.
     *   
     */
    static GetCompatibleConfigurations(ProfileToken: ReferenceToken) {
        return createStandardRequestBodyFromString(generateRequestElements('tptz:GetCompatibleConfigurations')({tptz_ProfileToken:ProfileToken}))
                        .map(mapResponseXmlToJson<any>('tptz:GetCompatibleConfigurationsResponse'))
                      
    }

    /**
     * Returns the capabilities of the PTZ service. The result is returned in a typed answer.
     */
    GetServiceCapabilities() {
        return ONVIFPTZ.GetServiceCapabilities().run(this.config)
    }

    /**
     * 
     *   Get the descriptions of the available PTZ Nodes.
     *   
     *   A PTZ-capable device may have multiple PTZ Nodes. The PTZ Nodes may represent
     *   mechanical PTZ drivers, uploaded PTZ drivers or digital PTZ drivers. PTZ Nodes are the
     *   lowest level entities in the PTZ control API and reflect the supported PTZ capabilities. The
     *   PTZ Node is referenced either by its name or by its reference token. 
     *         
     */
    GetNodes() {
        return ONVIFPTZ.GetNodes().run(this.config)
    }

    /**
     * Get a specific PTZ Node identified by a reference
     *           token or a name.
     *     
     */
    GetNode(NodeToken: ReferenceToken) {
        return ONVIFPTZ.GetNode(NodeToken).run(this.config)
    }

    /**
     * Get a specific PTZconfiguration from the device, identified by its reference token or name.
     *   
     *   The default Position/Translation/Velocity Spaces are introduced to allow NVCs sending move
     *   requests without the need to specify a certain coordinate system. The default Speeds are
     *   introduced to control the speed of move requests (absolute, relative, preset), where no
     *   explicit speed has been set.
     *   The allowed pan and tilt range for Pan/Tilt Limits is defined by a two-dimensional space range
     *   that is mapped to a specific Absolute Pan/Tilt Position Space. At least one Pan/Tilt Position
     *   Space is required by the PTZNode to support Pan/Tilt limits. The limits apply to all supported
     *   absolute, relative and continuous Pan/Tilt movements. The limits shall be checked within the
     *   coordinate system for which the limits have been specified. That means that even if
     *   movements are specified in a different coordinate system, the requested movements shall be
     *   transformed to the coordinate system of the limits where the limits can be checked. When a
     *   relative or continuous movements is specified, which would leave the specified limits, the PTZ
     *   unit has to move along the specified limits. The Zoom Limits have to be interpreted
     *   accordingly.
     *   
     */
    GetConfiguration(PTZConfigurationToken: ReferenceToken) {
        return ONVIFPTZ.GetConfiguration(PTZConfigurationToken).run(this.config)
    }

    /**
     * 
     *           Get all the existing PTZConfigurations from the device.
     *   
     *   The default Position/Translation/Velocity Spaces are introduced to allow NVCs sending move
     *   requests without the need to specify a certain coordinate system. The default Speeds are
     *   introduced to control the speed of move requests (absolute, relative, preset), where no
     *   explicit speed has been set.
     *   The allowed pan and tilt range for Pan/Tilt Limits is defined by a two-dimensional space range
     *   that is mapped to a specific Absolute Pan/Tilt Position Space. At least one Pan/Tilt Position
     *   Space is required by the PTZNode to support Pan/Tilt limits. The limits apply to all supported
     *   absolute, relative and continuous Pan/Tilt movements. The limits shall be checked within the
     *   coordinate system for which the limits have been specified. That means that even if
     *   movements are specified in a different coordinate system, the requested movements shall be
     *   transformed to the coordinate system of the limits where the limits can be checked. When a
     *   relative or continuous movements is specified, which would leave the specified limits, the PTZ
     *   unit has to move along the specified limits. The Zoom Limits have to be interpreted
     *   accordingly.
     *   
     */
    GetConfigurations() {
        return ONVIFPTZ.GetConfigurations().run(this.config)
    }

    /**
     * 
     *           Set/update a existing PTZConfiguration on the device.
     *         
     */
    SetConfiguration(PTZConfiguration: PTZConfiguration, ForcePersistence: boolean) {
        return ONVIFPTZ.SetConfiguration(PTZConfiguration,ForcePersistence).run(this.config)
    }

    /**
     * 
     *   List supported coordinate systems including their range limitations. Therefore, the options
     *   MAY differ depending on whether the PTZ Configuration is assigned to a Profile containing a
     *   Video Source Configuration. In that case, the options may additionally contain coordinate
     *   systems referring to the image coordinate system described by the Video Source
     *   Configuration. If the PTZ Node supports continuous movements, it shall return a Timeout Range within
     *   which Timeouts are accepted by the PTZ Node.
     *   
     */
    GetConfigurationOptions(ConfigurationToken: ReferenceToken) {
        return ONVIFPTZ.GetConfigurationOptions(ConfigurationToken).run(this.config)
    }

    /**
     * 
     *           Operation to send auxiliary commands to the PTZ device
     *           mapped by the PTZNode in the selected profile. The
     *           operation is supported
     *           if the AuxiliarySupported element of the PTZNode is true
     *         
     */
    SendAuxiliaryCommand(ProfileToken: ReferenceToken, AuxiliaryData: AuxiliaryData) {
        return ONVIFPTZ.SendAuxiliaryCommand(ProfileToken,AuxiliaryData).run(this.config)
    }

    /**
     * 
     *           Operation to request all PTZ presets for the PTZNode
     *           in the selected profile. The operation is supported if there is support
     *           for at least on PTZ preset by the PTZNode.
     */
    GetPresets(ProfileToken: ReferenceToken) {
        return ONVIFPTZ.GetPresets(ProfileToken).run(this.config)
    }

    /**
     * 
     *   The SetPreset command saves the current device position parameters so that the device can
     *   move to the saved preset position through the GotoPreset operation.
     *   In order to create a new preset, the SetPresetRequest contains no PresetToken. If creation is
     *   successful, the Response contains the PresetToken which uniquely identifies the Preset. An
     *   existing Preset can be overwritten by specifying the PresetToken of the corresponding Preset.
     *   In both cases (overwriting or creation) an optional PresetName can be specified. The
     *   operation fails if the PTZ device is moving during the SetPreset operation.
     *   The device MAY internally save additional states such as imaging properties in the PTZ
     *   Preset which then should be recalled in the GotoPreset operation.      
     */
    SetPreset(ProfileToken: ReferenceToken, PresetName: string, PresetToken: ReferenceToken) {
        return ONVIFPTZ.SetPreset(ProfileToken,PresetName,PresetToken).run(this.config)
    }

    /**
     * 
     *           Operation to remove a PTZ preset for the Node in
     *           the
     *           selected profile. The operation is supported if the
     *           PresetPosition
     *           capability exists for teh Node in the
     *           selected profile.
     *         
     */
    RemovePreset(ProfileToken: ReferenceToken, PresetToken: ReferenceToken) {
        return ONVIFPTZ.RemovePreset(ProfileToken,PresetToken).run(this.config)
    }

    /**
     * 
     *           Operation to go to a saved preset position for the
     *           PTZNode in the selected profile. The operation is supported if there is
     *           support for at least on PTZ preset by the PTZNode.
     */
    GotoPreset(ProfileToken: ReferenceToken, PresetToken: ReferenceToken, Speed: PTZSpeed) {
        return ONVIFPTZ.GotoPreset(ProfileToken,PresetToken,Speed).run(this.config)
    }

    /**
     * 
     *           Operation to move the PTZ device to it's "home" position. The operation is supported if the HomeSupported element in the PTZNode is true.
     */
    GotoHomePosition(ProfileToken: ReferenceToken, Speed: PTZSpeed) {
        return ONVIFPTZ.GotoHomePosition(ProfileToken,Speed).run(this.config)
    }

    /**
     * Operation to save current position as the home position.
     *   The SetHomePosition command returns with a failure if the “home” position is fixed and
     *   cannot be overwritten. If the SetHomePosition is successful, it is possible to recall the
     *   Home Position with the GotoHomePosition command.
     */
    SetHomePosition(ProfileToken: ReferenceToken) {
        return ONVIFPTZ.SetHomePosition(ProfileToken).run(this.config)
    }

    /**
     * Operation for continuous Pan/Tilt and Zoom movements. The operation is supported if the PTZNode supports at least one continuous Pan/Tilt or Zoom space. If the space argument is omitted, the default space set by the PTZConfiguration will be used.
     */
    ContinuousMove(ProfileToken: ReferenceToken, Velocity: PTZSpeed, Timeout: string) {
        return ONVIFPTZ.ContinuousMove(ProfileToken,Velocity,Timeout).run(this.config)
    }

    /**
     * Operation for Relative Pan/Tilt and Zoom Move. The operation is supported if the PTZNode supports at least one relative Pan/Tilt or Zoom space. 
     *   The speed argument is optional. If an x/y speed value is given it is up to the device to either use 
     *   the x value as absolute resoluting speed vector or to map x and y to the component speed. 
     *   If the speed argument is omitted, the default speed set by the PTZConfiguration will be used.
     *   
     */
    RelativeMove(ProfileToken: ReferenceToken, Translation: PTZVector, Speed: PTZSpeed) {
        return ONVIFPTZ.RelativeMove(ProfileToken,Translation,Speed).run(this.config)
    }

    /**
     * 
     *   Operation to request PTZ status for the Node in the
     *   selected profile.
     */
    GetStatus(ProfileToken: ReferenceToken) {
        return ONVIFPTZ.GetStatus(ProfileToken).run(this.config)
    }

    /**
     * Operation to move pan,tilt or zoom to a absolute destination. 
     *   The speed argument is optional. If an x/y speed value is given it is up to the device to either use 
     *   the x value as absolute resoluting speed vector or to map x and y to the component speed. 
     *   If the speed argument is omitted, the default speed set by the PTZConfiguration will be used.
     *   
     */
    AbsoluteMove(ProfileToken: ReferenceToken, Position: PTZVector, Speed: PTZSpeed) {
        return ONVIFPTZ.AbsoluteMove(ProfileToken,Position,Speed).run(this.config)
    }

    /**
     * Operation to move pan,tilt or zoom to point to a destination based on the geolocation of the target. 
     *   The speed argument is optional. If an x/y speed value is given it is up to the device to either use 
     *   the x value as absolute resoluting speed vector or to map x and y to the component speed. 
     *   If the speed argument is omitted, the default speed set by the PTZConfiguration will be used.
     *   The area height and area dwidth parameters are optional, they can be used independently and may be used
     *   by the device to automatically determine the best zoom level to show the target.
     *   
     */
    GeoMove(ProfileToken: ReferenceToken, Target: GeoLocation, Speed: PTZSpeed, AreaHeight: number, AreaWidth: number) {
        return ONVIFPTZ.GeoMove(ProfileToken,Target,Speed,AreaHeight,AreaWidth).run(this.config)
    }

    /**
     * Operation to stop ongoing pan, tilt and zoom movements of absolute relative and continuous type.
     *   If no stop argument for pan, tilt or zoom is set, the device will stop all ongoing pan, tilt and zoom movements.
     */
    Stop(ProfileToken: ReferenceToken, PanTilt: boolean, Zoom: boolean) {
        return ONVIFPTZ.Stop(ProfileToken,PanTilt,Zoom).run(this.config)
    }

    /**
     * Operation to request PTZ preset tours in the selected media profiles.
     */
    GetPresetTours(ProfileToken: ReferenceToken) {
        return ONVIFPTZ.GetPresetTours(ProfileToken).run(this.config)
    }

    /**
     * Operation to request a specific PTZ preset tour in the selected media profile.
     */
    GetPresetTour(ProfileToken: ReferenceToken, PresetTourToken: ReferenceToken) {
        return ONVIFPTZ.GetPresetTour(ProfileToken,PresetTourToken).run(this.config)
    }

    /**
     * Operation to request available options to configure PTZ preset tour.
     */
    GetPresetTourOptions(ProfileToken: ReferenceToken, PresetTourToken: ReferenceToken) {
        return ONVIFPTZ.GetPresetTourOptions(ProfileToken,PresetTourToken).run(this.config)
    }

    /**
     * Operation to create a preset tour for the selected media profile.
     */
    CreatePresetTour(ProfileToken: ReferenceToken) {
        return ONVIFPTZ.CreatePresetTour(ProfileToken).run(this.config)
    }

    /**
     * Operation to modify a preset tour for the selected media profile.
     */
    ModifyPresetTour(ProfileToken: ReferenceToken, PresetTour: PresetTour) {
        return ONVIFPTZ.ModifyPresetTour(ProfileToken,PresetTour).run(this.config)
    }

    /**
     * Operation to perform specific operation on the preset tour in selected media profile.
     */
    OperatePresetTour(ProfileToken: ReferenceToken, PresetTourToken: ReferenceToken, Operation: PTZPresetTourOperation) {
        return ONVIFPTZ.OperatePresetTour(ProfileToken,PresetTourToken,Operation).run(this.config)
    }

    /**
     * Operation to delete a specific preset tour from the media profile.
     */
    RemovePresetTour(ProfileToken: ReferenceToken, PresetTourToken: ReferenceToken) {
        return ONVIFPTZ.RemovePresetTour(ProfileToken,PresetTourToken).run(this.config)
    }

    /**
     * Operation to get all available PTZConfigurations that can be added to the referenced media profile. 
     *   A device providing more than one PTZConfiguration or more than one VideoSourceConfiguration or which has any other resource
     *   interdependency between PTZConfiguration entities and other resources listable in a media profile should implement this operation.
     *   PTZConfiguration entities returned by this operation shall not fail on adding them to the referenced media profile.
     *   
     */
    GetCompatibleConfigurations(ProfileToken: ReferenceToken) {
        return ONVIFPTZ.GetCompatibleConfigurations(ProfileToken).run(this.config)
    }
}
