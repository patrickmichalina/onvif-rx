import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../soap/request";
import { ReferenceToken, PTZConfiguration, AuxiliaryData, PTZSpeed, PTZVector, GeoLocation, PresetTour, PTZPresetTourOperation } from "./types";

export namespace PTZ {
    /**
     * Returns the capabilities of the PTZ service. The result is returned in a typed answer.
     */
    export function GetServiceCapabilities() {
        return createStandardRequestBodyFromString('<tptz:GetServiceCapabilities />')
                        .map(mapResponseXmlToJson<any>('tptz:GetServiceCapabilitiesResponse')())
                      
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
    export function GetNodes() {
        return createStandardRequestBodyFromString('<tptz:GetNodes />')
                        .map(mapResponseXmlToJson<any>('tptz:GetNodesResponse')())
                      
    }

    /**
     * Get a specific PTZ Node identified by a reference
     *           token or a name.
     *     
     */
    export function GetNode(NodeToken: ReferenceToken) {
        return createStandardRequestBodyFromString('<tptz:GetNode />')
                        .map(mapResponseXmlToJson<any>('tptz:GetNodeResponse')())
                      
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
    export function GetConfiguration(PTZConfigurationToken: ReferenceToken) {
        return createStandardRequestBodyFromString('<tptz:GetConfiguration />')
                        .map(mapResponseXmlToJson<any>('tptz:GetConfigurationResponse')())
                      
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
    export function GetConfigurations() {
        return createStandardRequestBodyFromString('<tptz:GetConfigurations />')
                        .map(mapResponseXmlToJson<any>('tptz:GetConfigurationsResponse')())
                      
    }

    /**
     * 
     *           Set/update a existing PTZConfiguration on the device.
     *         
     */
    export function SetConfiguration(PTZConfiguration: PTZConfiguration, ForcePersistence: boolean) {
        return createStandardRequestBodyFromString('<tptz:SetConfiguration />')
                        .map(mapResponseXmlToJson<any>('tptz:SetConfigurationResponse')())
                      
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
    export function GetConfigurationOptions(ConfigurationToken: ReferenceToken) {
        return createStandardRequestBodyFromString('<tptz:GetConfigurationOptions />')
                        .map(mapResponseXmlToJson<any>('tptz:GetConfigurationOptionsResponse')())
                      
    }

    /**
     * 
     *           Operation to send auxiliary commands to the PTZ device
     *           mapped by the PTZNode in the selected profile. The
     *           operation is supported
     *           if the AuxiliarySupported element of the PTZNode is true
     *         
     */
    export function SendAuxiliaryCommand(ProfileToken: ReferenceToken, AuxiliaryData: AuxiliaryData) {
        return createStandardRequestBodyFromString('<tptz:SendAuxiliaryCommand />')
                        .map(mapResponseXmlToJson<any>('tptz:SendAuxiliaryCommandResponse')())
                      
    }

    /**
     * 
     *           Operation to request all PTZ presets for the PTZNode
     *           in the selected profile. The operation is supported if there is support
     *           for at least on PTZ preset by the PTZNode.
     */
    export function GetPresets(ProfileToken: ReferenceToken) {
        return createStandardRequestBodyFromString('<tptz:GetPresets />')
                        .map(mapResponseXmlToJson<any>('tptz:GetPresetsResponse')())
                      
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
    export function SetPreset(ProfileToken: ReferenceToken, PresetName: string, PresetToken: ReferenceToken) {
        return createStandardRequestBodyFromString('<tptz:SetPreset />')
                        .map(mapResponseXmlToJson<any>('tptz:SetPresetResponse')())
                      
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
    export function RemovePreset(ProfileToken: ReferenceToken, PresetToken: ReferenceToken) {
        return createStandardRequestBodyFromString('<tptz:RemovePreset />')
                        .map(mapResponseXmlToJson<any>('tptz:RemovePresetResponse')())
                      
    }

    /**
     * 
     *           Operation to go to a saved preset position for the
     *           PTZNode in the selected profile. The operation is supported if there is
     *           support for at least on PTZ preset by the PTZNode.
     */
    export function GotoPreset(ProfileToken: ReferenceToken, PresetToken: ReferenceToken, Speed: PTZSpeed) {
        return createStandardRequestBodyFromString('<tptz:GotoPreset />')
                        .map(mapResponseXmlToJson<any>('tptz:GotoPresetResponse')())
                      
    }

    /**
     * 
     *           Operation to move the PTZ device to it's "home" position. The operation is supported if the HomeSupported element in the PTZNode is true.
     */
    export function GotoHomePosition(ProfileToken: ReferenceToken, Speed: PTZSpeed) {
        return createStandardRequestBodyFromString('<tptz:GotoHomePosition />')
                        .map(mapResponseXmlToJson<any>('tptz:GotoHomePositionResponse')())
                      
    }

    /**
     * Operation to save current position as the home position.
     *   The SetHomePosition command returns with a failure if the “home” position is fixed and
     *   cannot be overwritten. If the SetHomePosition is successful, it is possible to recall the
     *   Home Position with the GotoHomePosition command.
     */
    export function SetHomePosition(ProfileToken: ReferenceToken) {
        return createStandardRequestBodyFromString('<tptz:SetHomePosition />')
                        .map(mapResponseXmlToJson<any>('tptz:SetHomePositionResponse')())
                      
    }

    /**
     * Operation for continuous Pan/Tilt and Zoom movements. The operation is supported if the PTZNode supports at least one continuous Pan/Tilt or Zoom space. If the space argument is omitted, the default space set by the PTZConfiguration will be used.
     */
    export function ContinuousMove(ProfileToken: ReferenceToken, Velocity: PTZSpeed, Timeout: string) {
        return createStandardRequestBodyFromString('<tptz:ContinuousMove />')
                        .map(mapResponseXmlToJson<any>('tptz:ContinuousMoveResponse')())
                      
    }

    /**
     * Operation for Relative Pan/Tilt and Zoom Move. The operation is supported if the PTZNode supports at least one relative Pan/Tilt or Zoom space. 
     *   The speed argument is optional. If an x/y speed value is given it is up to the device to either use 
     *   the x value as absolute resoluting speed vector or to map x and y to the component speed. 
     *   If the speed argument is omitted, the default speed set by the PTZConfiguration will be used.
     *   
     */
    export function RelativeMove(ProfileToken: ReferenceToken, Translation: PTZVector, Speed: PTZSpeed) {
        return createStandardRequestBodyFromString('<tptz:RelativeMove />')
                        .map(mapResponseXmlToJson<any>('tptz:RelativeMoveResponse')())
                      
    }

    /**
     * 
     *   Operation to request PTZ status for the Node in the
     *   selected profile.
     */
    export function GetStatus(ProfileToken: ReferenceToken) {
        return createStandardRequestBodyFromString('<tptz:GetStatus />')
                        .map(mapResponseXmlToJson<any>('tptz:GetStatusResponse')())
                      
    }

    /**
     * Operation to move pan,tilt or zoom to a absolute destination. 
     *   The speed argument is optional. If an x/y speed value is given it is up to the device to either use 
     *   the x value as absolute resoluting speed vector or to map x and y to the component speed. 
     *   If the speed argument is omitted, the default speed set by the PTZConfiguration will be used.
     *   
     */
    export function AbsoluteMove(ProfileToken: ReferenceToken, Position: PTZVector, Speed: PTZSpeed) {
        return createStandardRequestBodyFromString('<tptz:AbsoluteMove />')
                        .map(mapResponseXmlToJson<any>('tptz:AbsoluteMoveResponse')())
                      
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
    export function GeoMove(ProfileToken: ReferenceToken, Target: GeoLocation, Speed: PTZSpeed, AreaHeight: number, AreaWidth: number) {
        return createStandardRequestBodyFromString('<tptz:GeoMove />')
                        .map(mapResponseXmlToJson<any>('tptz:GeoMoveResponse')())
                      
    }

    /**
     * Operation to stop ongoing pan, tilt and zoom movements of absolute relative and continuous type.
     *   If no stop argument for pan, tilt or zoom is set, the device will stop all ongoing pan, tilt and zoom movements.
     */
    export function Stop(ProfileToken: ReferenceToken, PanTilt: boolean, Zoom: boolean) {
        return createStandardRequestBodyFromString('<tptz:Stop />')
                        .map(mapResponseXmlToJson<any>('tptz:StopResponse')())
                      
    }

    /**
     * Operation to request PTZ preset tours in the selected media profiles.
     */
    export function GetPresetTours(ProfileToken: ReferenceToken) {
        return createStandardRequestBodyFromString('<tptz:GetPresetTours />')
                        .map(mapResponseXmlToJson<any>('tptz:GetPresetToursResponse')())
                      
    }

    /**
     * Operation to request a specific PTZ preset tour in the selected media profile.
     */
    export function GetPresetTour(ProfileToken: ReferenceToken, PresetTourToken: ReferenceToken) {
        return createStandardRequestBodyFromString('<tptz:GetPresetTour />')
                        .map(mapResponseXmlToJson<any>('tptz:GetPresetTourResponse')())
                      
    }

    /**
     * Operation to request available options to configure PTZ preset tour.
     */
    export function GetPresetTourOptions(ProfileToken: ReferenceToken, PresetTourToken: ReferenceToken) {
        return createStandardRequestBodyFromString('<tptz:GetPresetTourOptions />')
                        .map(mapResponseXmlToJson<any>('tptz:GetPresetTourOptionsResponse')())
                      
    }

    /**
     * Operation to create a preset tour for the selected media profile.
     */
    export function CreatePresetTour(ProfileToken: ReferenceToken) {
        return createStandardRequestBodyFromString('<tptz:CreatePresetTour />')
                        .map(mapResponseXmlToJson<any>('tptz:CreatePresetTourResponse')())
                      
    }

    /**
     * Operation to modify a preset tour for the selected media profile.
     */
    export function ModifyPresetTour(ProfileToken: ReferenceToken, PresetTour: PresetTour) {
        return createStandardRequestBodyFromString('<tptz:ModifyPresetTour />')
                        .map(mapResponseXmlToJson<any>('tptz:ModifyPresetTourResponse')())
                      
    }

    /**
     * Operation to perform specific operation on the preset tour in selected media profile.
     */
    export function OperatePresetTour(ProfileToken: ReferenceToken, PresetTourToken: ReferenceToken, Operation: PTZPresetTourOperation) {
        return createStandardRequestBodyFromString('<tptz:OperatePresetTour />')
                        .map(mapResponseXmlToJson<any>('tptz:OperatePresetTourResponse')())
                      
    }

    /**
     * Operation to delete a specific preset tour from the media profile.
     */
    export function RemovePresetTour(ProfileToken: ReferenceToken, PresetTourToken: ReferenceToken) {
        return createStandardRequestBodyFromString('<tptz:RemovePresetTour />')
                        .map(mapResponseXmlToJson<any>('tptz:RemovePresetTourResponse')())
                      
    }

    /**
     * Operation to get all available PTZConfigurations that can be added to the referenced media profile. 
     *   A device providing more than one PTZConfiguration or more than one VideoSourceConfiguration or which has any other resource
     *   interdependency between PTZConfiguration entities and other resources listable in a media profile should implement this operation.
     *   PTZConfiguration entities returned by this operation shall not fail on adding them to the referenced media profile.
     *   
     */
    export function GetCompatibleConfigurations(ProfileToken: ReferenceToken) {
        return createStandardRequestBodyFromString('<tptz:GetCompatibleConfigurations />')
                        .map(mapResponseXmlToJson<any>('tptz:GetCompatibleConfigurationsResponse')())
                      
    }
}
