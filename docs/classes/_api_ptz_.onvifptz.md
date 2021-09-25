[onvif-rx](../README.md) › ["api/ptz"](../modules/_api_ptz_.md) › [ONVIFPTZ](_api_ptz_.onvifptz.md)

# Class: ONVIFPTZ

## Hierarchy

* **ONVIFPTZ**

## Index

### Constructors

* [constructor](_api_ptz_.onvifptz.md#constructor)

### Properties

* [config](_api_ptz_.onvifptz.md#private-config)

### Methods

* [AbsoluteMove](_api_ptz_.onvifptz.md#absolutemove)
* [ContinuousMove](_api_ptz_.onvifptz.md#continuousmove)
* [CreatePresetTour](_api_ptz_.onvifptz.md#createpresettour)
* [GeoMove](_api_ptz_.onvifptz.md#geomove)
* [GetCompatibleConfigurations](_api_ptz_.onvifptz.md#getcompatibleconfigurations)
* [GetConfiguration](_api_ptz_.onvifptz.md#getconfiguration)
* [GetConfigurationOptions](_api_ptz_.onvifptz.md#getconfigurationoptions)
* [GetConfigurations](_api_ptz_.onvifptz.md#getconfigurations)
* [GetNode](_api_ptz_.onvifptz.md#getnode)
* [GetNodes](_api_ptz_.onvifptz.md#getnodes)
* [GetPresetTour](_api_ptz_.onvifptz.md#getpresettour)
* [GetPresetTourOptions](_api_ptz_.onvifptz.md#getpresettouroptions)
* [GetPresetTours](_api_ptz_.onvifptz.md#getpresettours)
* [GetPresets](_api_ptz_.onvifptz.md#getpresets)
* [GetServiceCapabilities](_api_ptz_.onvifptz.md#getservicecapabilities)
* [GetStatus](_api_ptz_.onvifptz.md#getstatus)
* [GotoHomePosition](_api_ptz_.onvifptz.md#gotohomeposition)
* [GotoPreset](_api_ptz_.onvifptz.md#gotopreset)
* [ModifyPresetTour](_api_ptz_.onvifptz.md#modifypresettour)
* [MoveAndStartTracking](_api_ptz_.onvifptz.md#moveandstarttracking)
* [OperatePresetTour](_api_ptz_.onvifptz.md#operatepresettour)
* [RelativeMove](_api_ptz_.onvifptz.md#relativemove)
* [RemovePreset](_api_ptz_.onvifptz.md#removepreset)
* [RemovePresetTour](_api_ptz_.onvifptz.md#removepresettour)
* [SendAuxiliaryCommand](_api_ptz_.onvifptz.md#sendauxiliarycommand)
* [SetConfiguration](_api_ptz_.onvifptz.md#setconfiguration)
* [SetHomePosition](_api_ptz_.onvifptz.md#sethomeposition)
* [SetPreset](_api_ptz_.onvifptz.md#setpreset)
* [Stop](_api_ptz_.onvifptz.md#stop)
* [AbsoluteMove](_api_ptz_.onvifptz.md#static-absolutemove)
* [ContinuousMove](_api_ptz_.onvifptz.md#static-continuousmove)
* [CreatePresetTour](_api_ptz_.onvifptz.md#static-createpresettour)
* [GeoMove](_api_ptz_.onvifptz.md#static-geomove)
* [GetCompatibleConfigurations](_api_ptz_.onvifptz.md#static-getcompatibleconfigurations)
* [GetConfiguration](_api_ptz_.onvifptz.md#static-getconfiguration)
* [GetConfigurationOptions](_api_ptz_.onvifptz.md#static-getconfigurationoptions)
* [GetConfigurations](_api_ptz_.onvifptz.md#static-getconfigurations)
* [GetNode](_api_ptz_.onvifptz.md#static-getnode)
* [GetNodes](_api_ptz_.onvifptz.md#static-getnodes)
* [GetPresetTour](_api_ptz_.onvifptz.md#static-getpresettour)
* [GetPresetTourOptions](_api_ptz_.onvifptz.md#static-getpresettouroptions)
* [GetPresetTours](_api_ptz_.onvifptz.md#static-getpresettours)
* [GetPresets](_api_ptz_.onvifptz.md#static-getpresets)
* [GetServiceCapabilities](_api_ptz_.onvifptz.md#static-getservicecapabilities)
* [GetStatus](_api_ptz_.onvifptz.md#static-getstatus)
* [GotoHomePosition](_api_ptz_.onvifptz.md#static-gotohomeposition)
* [GotoPreset](_api_ptz_.onvifptz.md#static-gotopreset)
* [ModifyPresetTour](_api_ptz_.onvifptz.md#static-modifypresettour)
* [MoveAndStartTracking](_api_ptz_.onvifptz.md#static-moveandstarttracking)
* [OperatePresetTour](_api_ptz_.onvifptz.md#static-operatepresettour)
* [RelativeMove](_api_ptz_.onvifptz.md#static-relativemove)
* [RemovePreset](_api_ptz_.onvifptz.md#static-removepreset)
* [RemovePresetTour](_api_ptz_.onvifptz.md#static-removepresettour)
* [SendAuxiliaryCommand](_api_ptz_.onvifptz.md#static-sendauxiliarycommand)
* [SetConfiguration](_api_ptz_.onvifptz.md#static-setconfiguration)
* [SetHomePosition](_api_ptz_.onvifptz.md#static-sethomeposition)
* [SetPreset](_api_ptz_.onvifptz.md#static-setpreset)
* [Stop](_api_ptz_.onvifptz.md#static-stop)

## Constructors

###  constructor

\+ **new ONVIFPTZ**(`config`: [IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md)): *[ONVIFPTZ](_api_ptz_.onvifptz.md)*

*Defined in [api/ptz.ts:5](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/ptz.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | [IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md) |

**Returns:** *[ONVIFPTZ](_api_ptz_.onvifptz.md)*

## Properties

### `Private` config

• **config**: *[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md)*

*Defined in [api/ptz.ts:6](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/ptz.ts#L6)*

## Methods

###  AbsoluteMove

▸ **AbsoluteMove**(`ProfileToken`: [ReferenceToken](../modules/_api_types_.md#referencetoken), `Position`: [PTZVector](../interfaces/_api_types_.ptzvector.md), `Speed?`: [PTZSpeed](../interfaces/_api_types_.ptzspeed.md)): *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

*Defined in [api/ptz.ts:592](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/ptz.ts#L592)*

Operation to move pan,tilt or zoom to a absolute destination.
  The speed argument is optional. If an x/y speed value is given it is up to the device to either use
  the x value as absolute resoluting speed vector or to map x and y to the component speed.
  If the speed argument is omitted, the default speed set by the PTZConfiguration will be used.

**Parameters:**

Name | Type |
------ | ------ |
`ProfileToken` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |
`Position` | [PTZVector](../interfaces/_api_types_.ptzvector.md) |
`Speed?` | [PTZSpeed](../interfaces/_api_types_.ptzspeed.md) |

**Returns:** *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

___

###  ContinuousMove

▸ **ContinuousMove**(`ProfileToken`: [ReferenceToken](../modules/_api_types_.md#referencetoken), `Velocity`: [PTZSpeed](../interfaces/_api_types_.ptzspeed.md), `Timeout?`: undefined | string): *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

*Defined in [api/ptz.ts:561](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/ptz.ts#L561)*

Operation for continuous Pan/Tilt and Zoom movements. The operation is supported if the PTZNode supports at least one continuous Pan/Tilt or Zoom space. If the space argument is omitted, the default space set by the PTZConfiguration will be used.

**Parameters:**

Name | Type |
------ | ------ |
`ProfileToken` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |
`Velocity` | [PTZSpeed](../interfaces/_api_types_.ptzspeed.md) |
`Timeout?` | undefined &#124; string |

**Returns:** *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

___

###  CreatePresetTour

▸ **CreatePresetTour**(`ProfileToken`: [ReferenceToken](../modules/_api_types_.md#referencetoken)): *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

*Defined in [api/ptz.ts:641](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/ptz.ts#L641)*

Operation to create a preset tour for the selected media profile.

**Parameters:**

Name | Type |
------ | ------ |
`ProfileToken` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |

**Returns:** *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

___

###  GeoMove

▸ **GeoMove**(`ProfileToken`: [ReferenceToken](../modules/_api_types_.md#referencetoken), `Target`: [GeoLocation](../interfaces/_api_types_.geolocation.md), `Speed?`: [PTZSpeed](../interfaces/_api_types_.ptzspeed.md), `AreaHeight?`: undefined | number, `AreaWidth?`: undefined | number): *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

*Defined in [api/ptz.ts:605](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/ptz.ts#L605)*

Operation to move pan,tilt or zoom to point to a destination based on the geolocation of the target.
  The speed argument is optional. If an x/y speed value is given it is up to the device to either use
  the x value as absolute resoluting speed vector or to map x and y to the component speed.
  If the speed argument is omitted, the default speed set by the PTZConfiguration will be used.
  The area height and area dwidth parameters are optional, they can be used independently and may be used
  by the device to automatically determine the best zoom level to show the target.

**Parameters:**

Name | Type |
------ | ------ |
`ProfileToken` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |
`Target` | [GeoLocation](../interfaces/_api_types_.geolocation.md) |
`Speed?` | [PTZSpeed](../interfaces/_api_types_.ptzspeed.md) |
`AreaHeight?` | undefined &#124; number |
`AreaWidth?` | undefined &#124; number |

**Returns:** *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

___

###  GetCompatibleConfigurations

▸ **GetCompatibleConfigurations**(`ProfileToken`: [ReferenceToken](../modules/_api_types_.md#referencetoken)): *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

*Defined in [api/ptz.ts:673](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/ptz.ts#L673)*

Operation to get all available PTZConfigurations that can be added to the referenced media profile.
  A device providing more than one PTZConfiguration or more than one VideoSourceConfiguration or which has any other resource
  interdependency between PTZConfiguration entities and other resources listable in a media profile should implement this operation.
  PTZConfiguration entities returned by this operation shall not fail on adding them to the referenced media profile.

**Parameters:**

Name | Type |
------ | ------ |
`ProfileToken` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |

**Returns:** *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

___

###  GetConfiguration

▸ **GetConfiguration**(`PTZConfigurationToken`: [ReferenceToken](../modules/_api_types_.md#referencetoken)): *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

*Defined in [api/ptz.ts:427](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/ptz.ts#L427)*

Get a specific PTZconfiguration from the device, identified by its reference token or name.

  The default Position/Translation/Velocity Spaces are introduced to allow NVCs sending move
  requests without the need to specify a certain coordinate system. The default Speeds are
  introduced to control the speed of move requests (absolute, relative, preset), where no
  explicit speed has been set.
  The allowed pan and tilt range for Pan/Tilt Limits is defined by a two-dimensional space range
  that is mapped to a specific Absolute Pan/Tilt Position Space. At least one Pan/Tilt Position
  Space is required by the PTZNode to support Pan/Tilt limits. The limits apply to all supported
  absolute, relative and continuous Pan/Tilt movements. The limits shall be checked within the
  coordinate system for which the limits have been specified. That means that even if
  movements are specified in a different coordinate system, the requested movements shall be
  transformed to the coordinate system of the limits where the limits can be checked. When a
  relative or continuous movements is specified, which would leave the specified limits, the PTZ
  unit has to move along the specified limits. The Zoom Limits have to be interpreted
  accordingly.

**Parameters:**

Name | Type |
------ | ------ |
`PTZConfigurationToken` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |

**Returns:** *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

___

###  GetConfigurationOptions

▸ **GetConfigurationOptions**(`ConfigurationToken`: [ReferenceToken](../modules/_api_types_.md#referencetoken)): *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

*Defined in [api/ptz.ts:474](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/ptz.ts#L474)*

  List supported coordinate systems including their range limitations. Therefore, the options
  MAY differ depending on whether the PTZ Configuration is assigned to a Profile containing a
  Video Source Configuration. In that case, the options may additionally contain coordinate
  systems referring to the image coordinate system described by the Video Source
  Configuration. If the PTZ Node supports continuous movements, it shall return a Timeout Range within
  which Timeouts are accepted by the PTZ Node.

**Parameters:**

Name | Type |
------ | ------ |
`ConfigurationToken` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |

**Returns:** *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

___

###  GetConfigurations

▸ **GetConfigurations**(): *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

*Defined in [api/ptz.ts:451](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/ptz.ts#L451)*

          Get all the existing PTZConfigurations from the device.

  The default Position/Translation/Velocity Spaces are introduced to allow NVCs sending move
  requests without the need to specify a certain coordinate system. The default Speeds are
  introduced to control the speed of move requests (absolute, relative, preset), where no
  explicit speed has been set.
  The allowed pan and tilt range for Pan/Tilt Limits is defined by a two-dimensional space range
  that is mapped to a specific Absolute Pan/Tilt Position Space. At least one Pan/Tilt Position
  Space is required by the PTZNode to support Pan/Tilt limits. The limits apply to all supported
  absolute, relative and continuous Pan/Tilt movements. The limits shall be checked within the
  coordinate system for which the limits have been specified. That means that even if
  movements are specified in a different coordinate system, the requested movements shall be
  transformed to the coordinate system of the limits where the limits can be checked. When a
  relative or continuous movements is specified, which would leave the specified limits, the PTZ
  unit has to move along the specified limits. The Zoom Limits have to be interpreted
  accordingly.

**Returns:** *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

___

###  GetNode

▸ **GetNode**(`NodeToken`: [ReferenceToken](../modules/_api_types_.md#referencetoken)): *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

*Defined in [api/ptz.ts:404](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/ptz.ts#L404)*

Get a specific PTZ Node identified by a reference
          token or a name.

**Parameters:**

Name | Type |
------ | ------ |
`NodeToken` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |

**Returns:** *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

___

###  GetNodes

▸ **GetNodes**(): *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

*Defined in [api/ptz.ts:395](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/ptz.ts#L395)*

  Get the descriptions of the available PTZ Nodes.

  A PTZ-capable device may have multiple PTZ Nodes. The PTZ Nodes may represent
  mechanical PTZ drivers, uploaded PTZ drivers or digital PTZ drivers. PTZ Nodes are the
  lowest level entities in the PTZ control API and reflect the supported PTZ capabilities. The
  PTZ Node is referenced either by its name or by its reference token.

**Returns:** *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

___

###  GetPresetTour

▸ **GetPresetTour**(`ProfileToken`: [ReferenceToken](../modules/_api_types_.md#referencetoken), `PresetTourToken`: [ReferenceToken](../modules/_api_types_.md#referencetoken)): *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

*Defined in [api/ptz.ts:627](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/ptz.ts#L627)*

Operation to request a specific PTZ preset tour in the selected media profile.

**Parameters:**

Name | Type |
------ | ------ |
`ProfileToken` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |
`PresetTourToken` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |

**Returns:** *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

___

###  GetPresetTourOptions

▸ **GetPresetTourOptions**(`ProfileToken`: [ReferenceToken](../modules/_api_types_.md#referencetoken), `PresetTourToken?`: [ReferenceToken](../modules/_api_types_.md#referencetoken)): *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

*Defined in [api/ptz.ts:634](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/ptz.ts#L634)*

Operation to request available options to configure PTZ preset tour.

**Parameters:**

Name | Type |
------ | ------ |
`ProfileToken` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |
`PresetTourToken?` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |

**Returns:** *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

___

###  GetPresetTours

▸ **GetPresetTours**(`ProfileToken`: [ReferenceToken](../modules/_api_types_.md#referencetoken)): *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

*Defined in [api/ptz.ts:620](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/ptz.ts#L620)*

Operation to request PTZ preset tours in the selected media profiles.

**Parameters:**

Name | Type |
------ | ------ |
`ProfileToken` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |

**Returns:** *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

___

###  GetPresets

▸ **GetPresets**(`ProfileToken`: [ReferenceToken](../modules/_api_types_.md#referencetoken)): *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

*Defined in [api/ptz.ts:496](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/ptz.ts#L496)*

          Operation to request all PTZ presets for the PTZNode
          in the selected profile. The operation is supported if there is support
          for at least on PTZ preset by the PTZNode.

**Parameters:**

Name | Type |
------ | ------ |
`ProfileToken` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |

**Returns:** *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

___

###  GetServiceCapabilities

▸ **GetServiceCapabilities**(): *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

*Defined in [api/ptz.ts:381](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/ptz.ts#L381)*

Returns the capabilities of the PTZ service. The result is returned in a typed answer.

**Returns:** *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

___

###  GetStatus

▸ **GetStatus**(`ProfileToken`: [ReferenceToken](../modules/_api_types_.md#referencetoken)): *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

*Defined in [api/ptz.ts:581](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/ptz.ts#L581)*

  Operation to request PTZ status for the Node in the
  selected profile.

**Parameters:**

Name | Type |
------ | ------ |
`ProfileToken` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |

**Returns:** *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

___

###  GotoHomePosition

▸ **GotoHomePosition**(`ProfileToken`: [ReferenceToken](../modules/_api_types_.md#referencetoken), `Speed?`: [PTZSpeed](../interfaces/_api_types_.ptzspeed.md)): *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

*Defined in [api/ptz.ts:544](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/ptz.ts#L544)*

          Operation to move the PTZ device to it's "home" position. The operation is supported if the HomeSupported element in the PTZNode is true.

**Parameters:**

Name | Type |
------ | ------ |
`ProfileToken` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |
`Speed?` | [PTZSpeed](../interfaces/_api_types_.ptzspeed.md) |

**Returns:** *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

___

###  GotoPreset

▸ **GotoPreset**(`ProfileToken`: [ReferenceToken](../modules/_api_types_.md#referencetoken), `PresetToken`: [ReferenceToken](../modules/_api_types_.md#referencetoken), `Speed?`: [PTZSpeed](../interfaces/_api_types_.ptzspeed.md)): *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

*Defined in [api/ptz.ts:536](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/ptz.ts#L536)*

          Operation to go to a saved preset position for the
          PTZNode in the selected profile. The operation is supported if there is
          support for at least on PTZ preset by the PTZNode.

**Parameters:**

Name | Type |
------ | ------ |
`ProfileToken` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |
`PresetToken` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |
`Speed?` | [PTZSpeed](../interfaces/_api_types_.ptzspeed.md) |

**Returns:** *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

___

###  ModifyPresetTour

▸ **ModifyPresetTour**(`ProfileToken`: [ReferenceToken](../modules/_api_types_.md#referencetoken), `PresetTour`: [PresetTour](../interfaces/_api_types_.presettour.md)): *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

*Defined in [api/ptz.ts:648](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/ptz.ts#L648)*

Operation to modify a preset tour for the selected media profile.

**Parameters:**

Name | Type |
------ | ------ |
`ProfileToken` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |
`PresetTour` | [PresetTour](../interfaces/_api_types_.presettour.md) |

**Returns:** *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

___

###  MoveAndStartTracking

▸ **MoveAndStartTracking**(`ProfileToken`: [ReferenceToken](../modules/_api_types_.md#referencetoken), `PresetToken?`: [ReferenceToken](../modules/_api_types_.md#referencetoken), `GeoLocation?`: GeoLocation, `TargetPosition?`: [PTZVector](../interfaces/_api_types_.ptzvector.md), `Speed?`: [PTZSpeed](../interfaces/_api_types_.ptzspeed.md), `ObjectID?`: undefined | number): *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

*Defined in [api/ptz.ts:685](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/ptz.ts#L685)*

Operation to send an an atomic command to the device: move the camera to a wanted position and then delegate the PTZ control to the tracking algorithm.
                      An existing Speed argument overrides DefaultSpeed of the corresponding PTZ configuration during movement to the requested position.
                      If spaces are referenced within the Speed argument, they shall be speed spaces supported by the PTZ node.
                      If the detection and the tracking are done in the same device, an ObjectID reference can be passed as an argument, in order to specify which object should be tracked.
                      The operation shall fail if the requested absolute position is not reachable.

**Parameters:**

Name | Type |
------ | ------ |
`ProfileToken` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |
`PresetToken?` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |
`GeoLocation?` | GeoLocation |
`TargetPosition?` | [PTZVector](../interfaces/_api_types_.ptzvector.md) |
`Speed?` | [PTZSpeed](../interfaces/_api_types_.ptzspeed.md) |
`ObjectID?` | undefined &#124; number |

**Returns:** *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

___

###  OperatePresetTour

▸ **OperatePresetTour**(`ProfileToken`: [ReferenceToken](../modules/_api_types_.md#referencetoken), `PresetTourToken`: [ReferenceToken](../modules/_api_types_.md#referencetoken), `Operation`: [PTZPresetTourOperation](../enums/_api_types_.ptzpresettouroperation.md)): *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

*Defined in [api/ptz.ts:655](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/ptz.ts#L655)*

Operation to perform specific operation on the preset tour in selected media profile.

**Parameters:**

Name | Type |
------ | ------ |
`ProfileToken` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |
`PresetTourToken` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |
`Operation` | [PTZPresetTourOperation](../enums/_api_types_.ptzpresettouroperation.md) |

**Returns:** *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

___

###  RelativeMove

▸ **RelativeMove**(`ProfileToken`: [ReferenceToken](../modules/_api_types_.md#referencetoken), `Translation`: [PTZVector](../interfaces/_api_types_.ptzvector.md), `Speed?`: [PTZSpeed](../interfaces/_api_types_.ptzspeed.md)): *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

*Defined in [api/ptz.ts:572](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/ptz.ts#L572)*

Operation for Relative Pan/Tilt and Zoom Move. The operation is supported if the PTZNode supports at least one relative Pan/Tilt or Zoom space.
  The speed argument is optional. If an x/y speed value is given it is up to the device to either use
  the x value as absolute resoluting speed vector or to map x and y to the component speed.
  If the speed argument is omitted, the default speed set by the PTZConfiguration will be used.

**Parameters:**

Name | Type |
------ | ------ |
`ProfileToken` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |
`Translation` | [PTZVector](../interfaces/_api_types_.ptzvector.md) |
`Speed?` | [PTZSpeed](../interfaces/_api_types_.ptzspeed.md) |

**Returns:** *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

___

###  RemovePreset

▸ **RemovePreset**(`ProfileToken`: [ReferenceToken](../modules/_api_types_.md#referencetoken), `PresetToken`: [ReferenceToken](../modules/_api_types_.md#referencetoken)): *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

*Defined in [api/ptz.ts:526](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/ptz.ts#L526)*

          Operation to remove a PTZ preset for the Node in
          the
          selected profile. The operation is supported if the
          PresetPosition
          capability exists for teh Node in the
          selected profile.

**Parameters:**

Name | Type |
------ | ------ |
`ProfileToken` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |
`PresetToken` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |

**Returns:** *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

___

###  RemovePresetTour

▸ **RemovePresetTour**(`ProfileToken`: [ReferenceToken](../modules/_api_types_.md#referencetoken), `PresetTourToken`: [ReferenceToken](../modules/_api_types_.md#referencetoken)): *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

*Defined in [api/ptz.ts:662](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/ptz.ts#L662)*

Operation to delete a specific preset tour from the media profile.

**Parameters:**

Name | Type |
------ | ------ |
`ProfileToken` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |
`PresetTourToken` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |

**Returns:** *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

___

###  SendAuxiliaryCommand

▸ **SendAuxiliaryCommand**(`ProfileToken`: [ReferenceToken](../modules/_api_types_.md#referencetoken), `AuxiliaryData`: AuxiliaryData): *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

*Defined in [api/ptz.ts:486](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/ptz.ts#L486)*

          Operation to send auxiliary commands to the PTZ device
          mapped by the PTZNode in the selected profile. The
          operation is supported
          if the AuxiliarySupported element of the PTZNode is true

**Parameters:**

Name | Type |
------ | ------ |
`ProfileToken` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |
`AuxiliaryData` | AuxiliaryData |

**Returns:** *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

___

###  SetConfiguration

▸ **SetConfiguration**(`PTZConfiguration`: [PTZConfiguration](../interfaces/_api_types_.ptzconfiguration.md), `ForcePersistence`: boolean): *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

*Defined in [api/ptz.ts:460](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/ptz.ts#L460)*

          Set/update a existing PTZConfiguration on the device.

**Parameters:**

Name | Type |
------ | ------ |
`PTZConfiguration` | [PTZConfiguration](../interfaces/_api_types_.ptzconfiguration.md) |
`ForcePersistence` | boolean |

**Returns:** *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

___

###  SetHomePosition

▸ **SetHomePosition**(`ProfileToken`: [ReferenceToken](../modules/_api_types_.md#referencetoken)): *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

*Defined in [api/ptz.ts:554](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/ptz.ts#L554)*

Operation to save current position as the home position.
  The SetHomePosition command returns with a failure if the “home” position is fixed and
  cannot be overwritten. If the SetHomePosition is successful, it is possible to recall the
  Home Position with the GotoHomePosition command.

**Parameters:**

Name | Type |
------ | ------ |
`ProfileToken` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |

**Returns:** *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

___

###  SetPreset

▸ **SetPreset**(`ProfileToken`: [ReferenceToken](../modules/_api_types_.md#referencetoken), `PresetName?`: undefined | string, `PresetToken?`: [ReferenceToken](../modules/_api_types_.md#referencetoken)): *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

*Defined in [api/ptz.ts:512](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/ptz.ts#L512)*

  The SetPreset command saves the current device position parameters so that the device can
  move to the saved preset position through the GotoPreset operation.
  In order to create a new preset, the SetPresetRequest contains no PresetToken. If creation is
  successful, the Response contains the PresetToken which uniquely identifies the Preset. An
  existing Preset can be overwritten by specifying the PresetToken of the corresponding Preset.
  In both cases (overwriting or creation) an optional PresetName can be specified. The
  operation fails if the PTZ device is moving during the SetPreset operation.
  The device MAY internally save additional states such as imaging properties in the PTZ
  Preset which then should be recalled in the GotoPreset operation.

**Parameters:**

Name | Type |
------ | ------ |
`ProfileToken` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |
`PresetName?` | undefined &#124; string |
`PresetToken?` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |

**Returns:** *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

___

###  Stop

▸ **Stop**(`ProfileToken`: [ReferenceToken](../modules/_api_types_.md#referencetoken), `PanTilt?`: undefined | false | true, `Zoom?`: undefined | false | true): *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

*Defined in [api/ptz.ts:613](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/ptz.ts#L613)*

Operation to stop ongoing pan, tilt and zoom movements of absolute relative and continuous type.
  If no stop argument for pan, tilt or zoom is set, the device will stop all ongoing pan, tilt and zoom movements.

**Parameters:**

Name | Type |
------ | ------ |
`ProfileToken` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |
`PanTilt?` | undefined &#124; false &#124; true |
`Zoom?` | undefined &#124; false &#124; true |

**Returns:** *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

___

### `Static` AbsoluteMove

▸ **AbsoluteMove**(`ProfileToken`: [ReferenceToken](../modules/_api_types_.md#referencetoken), `Position`: [PTZVector](../interfaces/_api_types_.ptzvector.md), `Speed?`: [PTZSpeed](../interfaces/_api_types_.ptzspeed.md)): *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

*Defined in [api/ptz.ts:257](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/ptz.ts#L257)*

Operation to move pan,tilt or zoom to a absolute destination.
  The speed argument is optional. If an x/y speed value is given it is up to the device to either use
  the x value as absolute resoluting speed vector or to map x and y to the component speed.
  If the speed argument is omitted, the default speed set by the PTZConfiguration will be used.

**Parameters:**

Name | Type |
------ | ------ |
`ProfileToken` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |
`Position` | [PTZVector](../interfaces/_api_types_.ptzvector.md) |
`Speed?` | [PTZSpeed](../interfaces/_api_types_.ptzspeed.md) |

**Returns:** *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

___

### `Static` ContinuousMove

▸ **ContinuousMove**(`ProfileToken`: [ReferenceToken](../modules/_api_types_.md#referencetoken), `Velocity`: [PTZSpeed](../interfaces/_api_types_.ptzspeed.md), `Timeout?`: undefined | string): *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

*Defined in [api/ptz.ts:220](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/ptz.ts#L220)*

Operation for continuous Pan/Tilt and Zoom movements. The operation is supported if the PTZNode supports at least one continuous Pan/Tilt or Zoom space. If the space argument is omitted, the default space set by the PTZConfiguration will be used.

**Parameters:**

Name | Type |
------ | ------ |
`ProfileToken` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |
`Velocity` | [PTZSpeed](../interfaces/_api_types_.ptzspeed.md) |
`Timeout?` | undefined &#124; string |

**Returns:** *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

___

### `Static` CreatePresetTour

▸ **CreatePresetTour**(`ProfileToken`: [ReferenceToken](../modules/_api_types_.md#referencetoken)): *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

*Defined in [api/ptz.ts:318](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/ptz.ts#L318)*

Operation to create a preset tour for the selected media profile.

**Parameters:**

Name | Type |
------ | ------ |
`ProfileToken` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |

**Returns:** *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

___

### `Static` GeoMove

▸ **GeoMove**(`ProfileToken`: [ReferenceToken](../modules/_api_types_.md#referencetoken), `Target`: [GeoLocation](../interfaces/_api_types_.geolocation.md), `Speed?`: [PTZSpeed](../interfaces/_api_types_.ptzspeed.md), `AreaHeight?`: undefined | number, `AreaWidth?`: undefined | number): *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

*Defined in [api/ptz.ts:272](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/ptz.ts#L272)*

Operation to move pan,tilt or zoom to point to a destination based on the geolocation of the target.
  The speed argument is optional. If an x/y speed value is given it is up to the device to either use
  the x value as absolute resoluting speed vector or to map x and y to the component speed.
  If the speed argument is omitted, the default speed set by the PTZConfiguration will be used.
  The area height and area dwidth parameters are optional, they can be used independently and may be used
  by the device to automatically determine the best zoom level to show the target.

**Parameters:**

Name | Type |
------ | ------ |
`ProfileToken` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |
`Target` | [GeoLocation](../interfaces/_api_types_.geolocation.md) |
`Speed?` | [PTZSpeed](../interfaces/_api_types_.ptzspeed.md) |
`AreaHeight?` | undefined &#124; number |
`AreaWidth?` | undefined &#124; number |

**Returns:** *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

___

### `Static` GetCompatibleConfigurations

▸ **GetCompatibleConfigurations**(`ProfileToken`: [ReferenceToken](../modules/_api_types_.md#referencetoken)): *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

*Defined in [api/ptz.ts:358](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/ptz.ts#L358)*

Operation to get all available PTZConfigurations that can be added to the referenced media profile.
  A device providing more than one PTZConfiguration or more than one VideoSourceConfiguration or which has any other resource
  interdependency between PTZConfiguration entities and other resources listable in a media profile should implement this operation.
  PTZConfiguration entities returned by this operation shall not fail on adding them to the referenced media profile.

**Parameters:**

Name | Type |
------ | ------ |
`ProfileToken` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |

**Returns:** *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

___

### `Static` GetConfiguration

▸ **GetConfiguration**(`PTZConfigurationToken`: [ReferenceToken](../modules/_api_types_.md#referencetoken)): *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

*Defined in [api/ptz.ts:64](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/ptz.ts#L64)*

Get a specific PTZconfiguration from the device, identified by its reference token or name.

  The default Position/Translation/Velocity Spaces are introduced to allow NVCs sending move
  requests without the need to specify a certain coordinate system. The default Speeds are
  introduced to control the speed of move requests (absolute, relative, preset), where no
  explicit speed has been set.
  The allowed pan and tilt range for Pan/Tilt Limits is defined by a two-dimensional space range
  that is mapped to a specific Absolute Pan/Tilt Position Space. At least one Pan/Tilt Position
  Space is required by the PTZNode to support Pan/Tilt limits. The limits apply to all supported
  absolute, relative and continuous Pan/Tilt movements. The limits shall be checked within the
  coordinate system for which the limits have been specified. That means that even if
  movements are specified in a different coordinate system, the requested movements shall be
  transformed to the coordinate system of the limits where the limits can be checked. When a
  relative or continuous movements is specified, which would leave the specified limits, the PTZ
  unit has to move along the specified limits. The Zoom Limits have to be interpreted
  accordingly.

**Parameters:**

Name | Type |
------ | ------ |
`PTZConfigurationToken` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |

**Returns:** *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

___

### `Static` GetConfigurationOptions

▸ **GetConfigurationOptions**(`ConfigurationToken`: [ReferenceToken](../modules/_api_types_.md#referencetoken)): *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

*Defined in [api/ptz.ts:117](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/ptz.ts#L117)*

  List supported coordinate systems including their range limitations. Therefore, the options
  MAY differ depending on whether the PTZ Configuration is assigned to a Profile containing a
  Video Source Configuration. In that case, the options may additionally contain coordinate
  systems referring to the image coordinate system described by the Video Source
  Configuration. If the PTZ Node supports continuous movements, it shall return a Timeout Range within
  which Timeouts are accepted by the PTZ Node.

**Parameters:**

Name | Type |
------ | ------ |
`ConfigurationToken` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |

**Returns:** *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

___

### `Static` GetConfigurations

▸ **GetConfigurations**(): *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

*Defined in [api/ptz.ts:90](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/ptz.ts#L90)*

          Get all the existing PTZConfigurations from the device.

  The default Position/Translation/Velocity Spaces are introduced to allow NVCs sending move
  requests without the need to specify a certain coordinate system. The default Speeds are
  introduced to control the speed of move requests (absolute, relative, preset), where no
  explicit speed has been set.
  The allowed pan and tilt range for Pan/Tilt Limits is defined by a two-dimensional space range
  that is mapped to a specific Absolute Pan/Tilt Position Space. At least one Pan/Tilt Position
  Space is required by the PTZNode to support Pan/Tilt limits. The limits apply to all supported
  absolute, relative and continuous Pan/Tilt movements. The limits shall be checked within the
  coordinate system for which the limits have been specified. That means that even if
  movements are specified in a different coordinate system, the requested movements shall be
  transformed to the coordinate system of the limits where the limits can be checked. When a
  relative or continuous movements is specified, which would leave the specified limits, the PTZ
  unit has to move along the specified limits. The Zoom Limits have to be interpreted
  accordingly.

**Returns:** *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

___

### `Static` GetNode

▸ **GetNode**(`NodeToken`: [ReferenceToken](../modules/_api_types_.md#referencetoken)): *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

*Defined in [api/ptz.ts:39](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/ptz.ts#L39)*

Get a specific PTZ Node identified by a reference
          token or a name.

**Parameters:**

Name | Type |
------ | ------ |
`NodeToken` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |

**Returns:** *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

___

### `Static` GetNodes

▸ **GetNodes**(): *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

*Defined in [api/ptz.ts:28](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/ptz.ts#L28)*

  Get the descriptions of the available PTZ Nodes.

  A PTZ-capable device may have multiple PTZ Nodes. The PTZ Nodes may represent
  mechanical PTZ drivers, uploaded PTZ drivers or digital PTZ drivers. PTZ Nodes are the
  lowest level entities in the PTZ control API and reflect the supported PTZ capabilities. The
  PTZ Node is referenced either by its name or by its reference token.

**Returns:** *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

___

### `Static` GetPresetTour

▸ **GetPresetTour**(`ProfileToken`: [ReferenceToken](../modules/_api_types_.md#referencetoken), `PresetTourToken`: [ReferenceToken](../modules/_api_types_.md#referencetoken)): *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

*Defined in [api/ptz.ts:300](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/ptz.ts#L300)*

Operation to request a specific PTZ preset tour in the selected media profile.

**Parameters:**

Name | Type |
------ | ------ |
`ProfileToken` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |
`PresetTourToken` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |

**Returns:** *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

___

### `Static` GetPresetTourOptions

▸ **GetPresetTourOptions**(`ProfileToken`: [ReferenceToken](../modules/_api_types_.md#referencetoken), `PresetTourToken?`: [ReferenceToken](../modules/_api_types_.md#referencetoken)): *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

*Defined in [api/ptz.ts:309](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/ptz.ts#L309)*

Operation to request available options to configure PTZ preset tour.

**Parameters:**

Name | Type |
------ | ------ |
`ProfileToken` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |
`PresetTourToken?` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |

**Returns:** *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

___

### `Static` GetPresetTours

▸ **GetPresetTours**(`ProfileToken`: [ReferenceToken](../modules/_api_types_.md#referencetoken)): *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

*Defined in [api/ptz.ts:291](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/ptz.ts#L291)*

Operation to request PTZ preset tours in the selected media profiles.

**Parameters:**

Name | Type |
------ | ------ |
`ProfileToken` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |

**Returns:** *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

___

### `Static` GetPresets

▸ **GetPresets**(`ProfileToken`: [ReferenceToken](../modules/_api_types_.md#referencetoken)): *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

*Defined in [api/ptz.ts:143](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/ptz.ts#L143)*

          Operation to request all PTZ presets for the PTZNode
          in the selected profile. The operation is supported if there is support
          for at least on PTZ preset by the PTZNode.

**Parameters:**

Name | Type |
------ | ------ |
`ProfileToken` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |

**Returns:** *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

___

### `Static` GetServiceCapabilities

▸ **GetServiceCapabilities**(): *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

*Defined in [api/ptz.ts:12](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/ptz.ts#L12)*

Returns the capabilities of the PTZ service. The result is returned in a typed answer.

**Returns:** *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

___

### `Static` GetStatus

▸ **GetStatus**(`ProfileToken`: [ReferenceToken](../modules/_api_types_.md#referencetoken)): *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

*Defined in [api/ptz.ts:244](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/ptz.ts#L244)*

  Operation to request PTZ status for the Node in the
  selected profile.

**Parameters:**

Name | Type |
------ | ------ |
`ProfileToken` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |

**Returns:** *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

___

### `Static` GotoHomePosition

▸ **GotoHomePosition**(`ProfileToken`: [ReferenceToken](../modules/_api_types_.md#referencetoken), `Speed?`: [PTZSpeed](../interfaces/_api_types_.ptzspeed.md)): *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

*Defined in [api/ptz.ts:199](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/ptz.ts#L199)*

          Operation to move the PTZ device to it's "home" position. The operation is supported if the HomeSupported element in the PTZNode is true.

**Parameters:**

Name | Type |
------ | ------ |
`ProfileToken` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |
`Speed?` | [PTZSpeed](../interfaces/_api_types_.ptzspeed.md) |

**Returns:** *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

___

### `Static` GotoPreset

▸ **GotoPreset**(`ProfileToken`: [ReferenceToken](../modules/_api_types_.md#referencetoken), `PresetToken`: [ReferenceToken](../modules/_api_types_.md#referencetoken), `Speed?`: [PTZSpeed](../interfaces/_api_types_.ptzspeed.md)): *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

*Defined in [api/ptz.ts:189](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/ptz.ts#L189)*

          Operation to go to a saved preset position for the
          PTZNode in the selected profile. The operation is supported if there is
          support for at least on PTZ preset by the PTZNode.

**Parameters:**

Name | Type |
------ | ------ |
`ProfileToken` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |
`PresetToken` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |
`Speed?` | [PTZSpeed](../interfaces/_api_types_.ptzspeed.md) |

**Returns:** *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

___

### `Static` ModifyPresetTour

▸ **ModifyPresetTour**(`ProfileToken`: [ReferenceToken](../modules/_api_types_.md#referencetoken), `PresetTour`: [PresetTour](../interfaces/_api_types_.presettour.md)): *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

*Defined in [api/ptz.ts:327](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/ptz.ts#L327)*

Operation to modify a preset tour for the selected media profile.

**Parameters:**

Name | Type |
------ | ------ |
`ProfileToken` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |
`PresetTour` | [PresetTour](../interfaces/_api_types_.presettour.md) |

**Returns:** *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

___

### `Static` MoveAndStartTracking

▸ **MoveAndStartTracking**(`ProfileToken`: [ReferenceToken](../modules/_api_types_.md#referencetoken), `PresetToken?`: [ReferenceToken](../modules/_api_types_.md#referencetoken), `GeoLocation?`: GeoLocation, `TargetPosition?`: [PTZVector](../interfaces/_api_types_.ptzvector.md), `Speed?`: [PTZSpeed](../interfaces/_api_types_.ptzspeed.md), `ObjectID?`: undefined | number): *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

*Defined in [api/ptz.ts:372](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/ptz.ts#L372)*

Operation to send an an atomic command to the device: move the camera to a wanted position and then delegate the PTZ control to the tracking algorithm.
                      An existing Speed argument overrides DefaultSpeed of the corresponding PTZ configuration during movement to the requested position.
                      If spaces are referenced within the Speed argument, they shall be speed spaces supported by the PTZ node.
                      If the detection and the tracking are done in the same device, an ObjectID reference can be passed as an argument, in order to specify which object should be tracked.
                      The operation shall fail if the requested absolute position is not reachable.

**Parameters:**

Name | Type |
------ | ------ |
`ProfileToken` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |
`PresetToken?` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |
`GeoLocation?` | GeoLocation |
`TargetPosition?` | [PTZVector](../interfaces/_api_types_.ptzvector.md) |
`Speed?` | [PTZSpeed](../interfaces/_api_types_.ptzspeed.md) |
`ObjectID?` | undefined &#124; number |

**Returns:** *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

___

### `Static` OperatePresetTour

▸ **OperatePresetTour**(`ProfileToken`: [ReferenceToken](../modules/_api_types_.md#referencetoken), `PresetTourToken`: [ReferenceToken](../modules/_api_types_.md#referencetoken), `Operation`: [PTZPresetTourOperation](../enums/_api_types_.ptzpresettouroperation.md)): *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

*Defined in [api/ptz.ts:336](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/ptz.ts#L336)*

Operation to perform specific operation on the preset tour in selected media profile.

**Parameters:**

Name | Type |
------ | ------ |
`ProfileToken` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |
`PresetTourToken` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |
`Operation` | [PTZPresetTourOperation](../enums/_api_types_.ptzpresettouroperation.md) |

**Returns:** *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

___

### `Static` RelativeMove

▸ **RelativeMove**(`ProfileToken`: [ReferenceToken](../modules/_api_types_.md#referencetoken), `Translation`: [PTZVector](../interfaces/_api_types_.ptzvector.md), `Speed?`: [PTZSpeed](../interfaces/_api_types_.ptzspeed.md)): *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

*Defined in [api/ptz.ts:233](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/ptz.ts#L233)*

Operation for Relative Pan/Tilt and Zoom Move. The operation is supported if the PTZNode supports at least one relative Pan/Tilt or Zoom space.
  The speed argument is optional. If an x/y speed value is given it is up to the device to either use
  the x value as absolute resoluting speed vector or to map x and y to the component speed.
  If the speed argument is omitted, the default speed set by the PTZConfiguration will be used.

**Parameters:**

Name | Type |
------ | ------ |
`ProfileToken` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |
`Translation` | [PTZVector](../interfaces/_api_types_.ptzvector.md) |
`Speed?` | [PTZSpeed](../interfaces/_api_types_.ptzspeed.md) |

**Returns:** *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

___

### `Static` RemovePreset

▸ **RemovePreset**(`ProfileToken`: [ReferenceToken](../modules/_api_types_.md#referencetoken), `PresetToken`: [ReferenceToken](../modules/_api_types_.md#referencetoken)): *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

*Defined in [api/ptz.ts:177](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/ptz.ts#L177)*

          Operation to remove a PTZ preset for the Node in
          the
          selected profile. The operation is supported if the
          PresetPosition
          capability exists for teh Node in the
          selected profile.

**Parameters:**

Name | Type |
------ | ------ |
`ProfileToken` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |
`PresetToken` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |

**Returns:** *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

___

### `Static` RemovePresetTour

▸ **RemovePresetTour**(`ProfileToken`: [ReferenceToken](../modules/_api_types_.md#referencetoken), `PresetTourToken`: [ReferenceToken](../modules/_api_types_.md#referencetoken)): *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

*Defined in [api/ptz.ts:345](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/ptz.ts#L345)*

Operation to delete a specific preset tour from the media profile.

**Parameters:**

Name | Type |
------ | ------ |
`ProfileToken` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |
`PresetTourToken` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |

**Returns:** *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

___

### `Static` SendAuxiliaryCommand

▸ **SendAuxiliaryCommand**(`ProfileToken`: [ReferenceToken](../modules/_api_types_.md#referencetoken), `AuxiliaryData`: AuxiliaryData): *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

*Defined in [api/ptz.ts:131](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/ptz.ts#L131)*

          Operation to send auxiliary commands to the PTZ device
          mapped by the PTZNode in the selected profile. The
          operation is supported
          if the AuxiliarySupported element of the PTZNode is true

**Parameters:**

Name | Type |
------ | ------ |
`ProfileToken` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |
`AuxiliaryData` | AuxiliaryData |

**Returns:** *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

___

### `Static` SetConfiguration

▸ **SetConfiguration**(`PTZConfiguration`: [PTZConfiguration](../interfaces/_api_types_.ptzconfiguration.md), `ForcePersistence`: boolean): *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

*Defined in [api/ptz.ts:101](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/ptz.ts#L101)*

          Set/update a existing PTZConfiguration on the device.

**Parameters:**

Name | Type |
------ | ------ |
`PTZConfiguration` | [PTZConfiguration](../interfaces/_api_types_.ptzconfiguration.md) |
`ForcePersistence` | boolean |

**Returns:** *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

___

### `Static` SetHomePosition

▸ **SetHomePosition**(`ProfileToken`: [ReferenceToken](../modules/_api_types_.md#referencetoken)): *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

*Defined in [api/ptz.ts:211](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/ptz.ts#L211)*

Operation to save current position as the home position.
  The SetHomePosition command returns with a failure if the “home” position is fixed and
  cannot be overwritten. If the SetHomePosition is successful, it is possible to recall the
  Home Position with the GotoHomePosition command.

**Parameters:**

Name | Type |
------ | ------ |
`ProfileToken` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |

**Returns:** *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

___

### `Static` SetPreset

▸ **SetPreset**(`ProfileToken`: [ReferenceToken](../modules/_api_types_.md#referencetoken), `PresetName?`: undefined | string, `PresetToken?`: [ReferenceToken](../modules/_api_types_.md#referencetoken)): *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

*Defined in [api/ptz.ts:161](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/ptz.ts#L161)*

  The SetPreset command saves the current device position parameters so that the device can
  move to the saved preset position through the GotoPreset operation.
  In order to create a new preset, the SetPresetRequest contains no PresetToken. If creation is
  successful, the Response contains the PresetToken which uniquely identifies the Preset. An
  existing Preset can be overwritten by specifying the PresetToken of the corresponding Preset.
  In both cases (overwriting or creation) an optional PresetName can be specified. The
  operation fails if the PTZ device is moving during the SetPreset operation.
  The device MAY internally save additional states such as imaging properties in the PTZ
  Preset which then should be recalled in the GotoPreset operation.

**Parameters:**

Name | Type |
------ | ------ |
`ProfileToken` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |
`PresetName?` | undefined &#124; string |
`PresetToken?` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |

**Returns:** *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

___

### `Static` Stop

▸ **Stop**(`ProfileToken`: [ReferenceToken](../modules/_api_types_.md#referencetoken), `PanTilt?`: undefined | false | true, `Zoom?`: undefined | false | true): *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

*Defined in [api/ptz.ts:282](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/ptz.ts#L282)*

Operation to stop ongoing pan, tilt and zoom movements of absolute relative and continuous type.
  If no stop argument for pan, tilt or zoom is set, the device will stop all ongoing pan, tilt and zoom movements.

**Parameters:**

Name | Type |
------ | ------ |
`ProfileToken` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |
`PanTilt?` | undefined &#124; false &#124; true |
`Zoom?` | undefined &#124; false &#124; true |

**Returns:** *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*
