export * from './GetServiceCapabilities'
export * from './GetNodes'
export * from './GetNode'
export * from './GetConfiguration'
export * from './GetConfigurations'
export * from './SetConfiguration'
export * from './GetConfigurationOptions'
export * from './SendAuxiliaryCommand'
export * from './GetPresets'
export * from './SetPreset'
export * from './RemovePreset'
export * from './GotoPreset'
export * from './GotoHomePosition'
export * from './SetHomePosition'
export * from './ContinuousMove'
export * from './RelativeMove'
export * from './GetStatus'
export * from './AbsoluteMove'
export * from './GeoMove'
export * from './Stop'
export * from './GetPresetTours'
export * from './GetPresetTour'
export * from './GetPresetTourOptions'
export * from './CreatePresetTour'
export * from './ModifyPresetTour'
export * from './OperatePresetTour'
export * from './RemovePresetTour'
export * from './GetCompatibleConfigurations'

import { GetServiceCapabilities } from './GetServiceCapabilities'
import { GetNodes } from './GetNodes'
import { GetNode } from './GetNode'
import { GetConfiguration } from './GetConfiguration'
import { GetConfigurations } from './GetConfigurations'
import { SetConfiguration } from './SetConfiguration'
import { GetConfigurationOptions } from './GetConfigurationOptions'
import { SendAuxiliaryCommand } from './SendAuxiliaryCommand'
import { GetPresets } from './GetPresets'
import { SetPreset } from './SetPreset'
import { RemovePreset } from './RemovePreset'
import { GotoPreset } from './GotoPreset'
import { GotoHomePosition } from './GotoHomePosition'
import { SetHomePosition } from './SetHomePosition'
import { ContinuousMove } from './ContinuousMove'
import { RelativeMove } from './RelativeMove'
import { GetStatus } from './GetStatus'
import { AbsoluteMove } from './AbsoluteMove'
import { GeoMove } from './GeoMove'
import { Stop } from './Stop'
import { GetPresetTours } from './GetPresetTours'
import { GetPresetTour } from './GetPresetTour'
import { GetPresetTourOptions } from './GetPresetTourOptions'
import { CreatePresetTour } from './CreatePresetTour'
import { ModifyPresetTour } from './ModifyPresetTour'
import { OperatePresetTour } from './OperatePresetTour'
import { RemovePresetTour } from './RemovePresetTour'
import { GetCompatibleConfigurations } from './GetCompatibleConfigurations'
import { IDeviceConfig } from '../../config'

export interface IONVIFPTZApi {
  
  /**
   * Returns the capabilities of the PTZ service. The result is returned in a typed answer.
   */
  readonly GetServiceCapabilities: () => any

  /**
   * 
   * Get the descriptions of the available PTZ Nodes.
   * 
   * A PTZ-capable device may have multiple PTZ Nodes. The PTZ Nodes may represent
   * mechanical PTZ drivers, uploaded PTZ drivers or digital PTZ drivers. PTZ Nodes are the
   * lowest level entities in the PTZ control API and reflect the supported PTZ capabilities. The
   * PTZ Node is referenced either by its name or by its reference token. 
   *       
   */
  readonly GetNodes: () => any

  /**
   * Get a specific PTZ Node identified by a reference
   *         token or a name.
   *   
   */
  readonly GetNode: () => any

  /**
   * Get a specific PTZconfiguration from the device, identified by its reference token or name.
   * 
   * The default Position/Translation/Velocity Spaces are introduced to allow NVCs sending move
   * requests without the need to specify a certain coordinate system. The default Speeds are
   * introduced to control the speed of move requests (absolute, relative, preset), where no
   * explicit speed has been set.
   * The allowed pan and tilt range for Pan/Tilt Limits is defined by a two-dimensional space range
   * that is mapped to a specific Absolute Pan/Tilt Position Space. At least one Pan/Tilt Position
   * Space is required by the PTZNode to support Pan/Tilt limits. The limits apply to all supported
   * absolute, relative and continuous Pan/Tilt movements. The limits shall be checked within the
   * coordinate system for which the limits have been specified. That means that even if
   * movements are specified in a different coordinate system, the requested movements shall be
   * transformed to the coordinate system of the limits where the limits can be checked. When a
   * relative or continuous movements is specified, which would leave the specified limits, the PTZ
   * unit has to move along the specified limits. The Zoom Limits have to be interpreted
   * accordingly.
   * 
   */
  readonly GetConfiguration: () => any

  /**
   * 
   *         Get all the existing PTZConfigurations from the device.
   * 
   * The default Position/Translation/Velocity Spaces are introduced to allow NVCs sending move
   * requests without the need to specify a certain coordinate system. The default Speeds are
   * introduced to control the speed of move requests (absolute, relative, preset), where no
   * explicit speed has been set.
   * The allowed pan and tilt range for Pan/Tilt Limits is defined by a two-dimensional space range
   * that is mapped to a specific Absolute Pan/Tilt Position Space. At least one Pan/Tilt Position
   * Space is required by the PTZNode to support Pan/Tilt limits. The limits apply to all supported
   * absolute, relative and continuous Pan/Tilt movements. The limits shall be checked within the
   * coordinate system for which the limits have been specified. That means that even if
   * movements are specified in a different coordinate system, the requested movements shall be
   * transformed to the coordinate system of the limits where the limits can be checked. When a
   * relative or continuous movements is specified, which would leave the specified limits, the PTZ
   * unit has to move along the specified limits. The Zoom Limits have to be interpreted
   * accordingly.
   * 
   */
  readonly GetConfigurations: () => any

  /**
   * 
   *         Set/update a existing PTZConfiguration on the device.
   *       
   */
  readonly SetConfiguration: () => any

  /**
   * 
   * List supported coordinate systems including their range limitations. Therefore, the options
   * MAY differ depending on whether the PTZ Configuration is assigned to a Profile containing a
   * Video Source Configuration. In that case, the options may additionally contain coordinate
   * systems referring to the image coordinate system described by the Video Source
   * Configuration. If the PTZ Node supports continuous movements, it shall return a Timeout Range within
   * which Timeouts are accepted by the PTZ Node.
   * 
   */
  readonly GetConfigurationOptions: () => any

  /**
   * 
   *         Operation to send auxiliary commands to the PTZ device
   *         mapped by the PTZNode in the selected profile. The
   *         operation is supported
   *         if the AuxiliarySupported element of the PTZNode is true
   *       
   */
  readonly SendAuxiliaryCommand: () => any

  /**
   * 
   *         Operation to request all PTZ presets for the PTZNode
   *         in the selected profile. The operation is supported if there is support
   *         for at least on PTZ preset by the PTZNode.
   */
  readonly GetPresets: () => any

  /**
   * 
   * The SetPreset command saves the current device position parameters so that the device can
   * move to the saved preset position through the GotoPreset operation.
   * In order to create a new preset, the SetPresetRequest contains no PresetToken. If creation is
   * successful, the Response contains the PresetToken which uniquely identifies the Preset. An
   * existing Preset can be overwritten by specifying the PresetToken of the corresponding Preset.
   * In both cases (overwriting or creation) an optional PresetName can be specified. The
   * operation fails if the PTZ device is moving during the SetPreset operation.
   * The device MAY internally save additional states such as imaging properties in the PTZ
   * Preset which then should be recalled in the GotoPreset operation.      
   */
  readonly SetPreset: () => any

  /**
   * 
   *         Operation to remove a PTZ preset for the Node in
   *         the
   *         selected profile. The operation is supported if the
   *         PresetPosition
   *         capability exists for teh Node in the
   *         selected profile.
   *       
   */
  readonly RemovePreset: () => any

  /**
   * 
   *         Operation to go to a saved preset position for the
   *         PTZNode in the selected profile. The operation is supported if there is
   *         support for at least on PTZ preset by the PTZNode.
   */
  readonly GotoPreset: () => any

  /**
   * 
   *         Operation to move the PTZ device to it's "home" position. The operation is supported if the HomeSupported element in the PTZNode is true.
   */
  readonly GotoHomePosition: () => any

  /**
   * Operation to save current position as the home position.
   * The SetHomePosition command returns with a failure if the “home” position is fixed and
   * cannot be overwritten. If the SetHomePosition is successful, it is possible to recall the
   * Home Position with the GotoHomePosition command.
   */
  readonly SetHomePosition: () => any

  /**
   * Operation for continuous Pan/Tilt and Zoom movements. The operation is supported if the PTZNode supports at least one continuous Pan/Tilt or Zoom space. If the space argument is omitted, the default space set by the PTZConfiguration will be used.
   */
  readonly ContinuousMove: () => any

  /**
   * Operation for Relative Pan/Tilt and Zoom Move. The operation is supported if the PTZNode supports at least one relative Pan/Tilt or Zoom space. 
   * The speed argument is optional. If an x/y speed value is given it is up to the device to either use 
   * the x value as absolute resoluting speed vector or to map x and y to the component speed. 
   * If the speed argument is omitted, the default speed set by the PTZConfiguration will be used.
   * 
   */
  readonly RelativeMove: () => any

  /**
   * 
   * Operation to request PTZ status for the Node in the
   * selected profile.
   */
  readonly GetStatus: () => any

  /**
   * Operation to move pan,tilt or zoom to a absolute destination. 
   * The speed argument is optional. If an x/y speed value is given it is up to the device to either use 
   * the x value as absolute resoluting speed vector or to map x and y to the component speed. 
   * If the speed argument is omitted, the default speed set by the PTZConfiguration will be used.
   * 
   */
  readonly AbsoluteMove: () => any

  /**
   * Operation to move pan,tilt or zoom to point to a destination based on the geolocation of the target. 
   * The speed argument is optional. If an x/y speed value is given it is up to the device to either use 
   * the x value as absolute resoluting speed vector or to map x and y to the component speed. 
   * If the speed argument is omitted, the default speed set by the PTZConfiguration will be used.
   * The area height and area dwidth parameters are optional, they can be used independently and may be used
   * by the device to automatically determine the best zoom level to show the target.
   * 
   */
  readonly GeoMove: () => any

  /**
   * Operation to stop ongoing pan, tilt and zoom movements of absolute relative and continuous type.
   * If no stop argument for pan, tilt or zoom is set, the device will stop all ongoing pan, tilt and zoom movements.
   */
  readonly Stop: () => any

  /**
   * Operation to request PTZ preset tours in the selected media profiles.
   */
  readonly GetPresetTours: () => any

  /**
   * Operation to request a specific PTZ preset tour in the selected media profile.
   */
  readonly GetPresetTour: () => any

  /**
   * Operation to request available options to configure PTZ preset tour.
   */
  readonly GetPresetTourOptions: () => any

  /**
   * Operation to create a preset tour for the selected media profile.
   */
  readonly CreatePresetTour: () => any

  /**
   * Operation to modify a preset tour for the selected media profile.
   */
  readonly ModifyPresetTour: () => any

  /**
   * Operation to perform specific operation on the preset tour in selected media profile.
   */
  readonly OperatePresetTour: () => any

  /**
   * Operation to delete a specific preset tour from the media profile.
   */
  readonly RemovePresetTour: () => any

  /**
   * Operation to get all available PTZConfigurations that can be added to the referenced media profile. 
   * A device providing more than one PTZConfiguration or more than one VideoSourceConfiguration or which has any other resource
   * interdependency between PTZConfiguration entities and other resources listable in a media profile should implement this operation.
   * PTZConfiguration entities returned by this operation shall not fail on adding them to the referenced media profile.
   * 
   */
  readonly GetCompatibleConfigurations: () => any
}

export const ONVIF_PTZ_API = (config: IDeviceConfig): IONVIFPTZApi => {
  return {
    GetServiceCapabilities: () => GetServiceCapabilities().run(config),
    GetNodes: () => GetNodes().run(config),
    GetNode: () => GetNode().run(config),
    GetConfiguration: () => GetConfiguration().run(config),
    GetConfigurations: () => GetConfigurations().run(config),
    SetConfiguration: () => SetConfiguration().run(config),
    GetConfigurationOptions: () => GetConfigurationOptions().run(config),
    SendAuxiliaryCommand: () => SendAuxiliaryCommand().run(config),
    GetPresets: () => GetPresets().run(config),
    SetPreset: () => SetPreset().run(config),
    RemovePreset: () => RemovePreset().run(config),
    GotoPreset: () => GotoPreset().run(config),
    GotoHomePosition: () => GotoHomePosition().run(config),
    SetHomePosition: () => SetHomePosition().run(config),
    ContinuousMove: () => ContinuousMove().run(config),
    RelativeMove: () => RelativeMove().run(config),
    GetStatus: () => GetStatus().run(config),
    AbsoluteMove: () => AbsoluteMove().run(config),
    GeoMove: () => GeoMove().run(config),
    Stop: () => Stop().run(config),
    GetPresetTours: () => GetPresetTours().run(config),
    GetPresetTour: () => GetPresetTour().run(config),
    GetPresetTourOptions: () => GetPresetTourOptions().run(config),
    CreatePresetTour: () => CreatePresetTour().run(config),
    ModifyPresetTour: () => ModifyPresetTour().run(config),
    OperatePresetTour: () => OperatePresetTour().run(config),
    RemovePresetTour: () => RemovePresetTour().run(config),
    GetCompatibleConfigurations: () => GetCompatibleConfigurations().run(config),
  }
}