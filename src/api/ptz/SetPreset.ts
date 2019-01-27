import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

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
export const SetPreset =
  () =>
    createStandardRequestBodyFromString('<tptz:SetPreset />')
      .map(mapResponseXmlToJson<any>('tptz:SetPresetResponse')())
