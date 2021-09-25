[onvif-rx](../README.md) › ["api/display"](../modules/_api_display_.md) › [ONVIFDisplay](_api_display_.onvifdisplay.md)

# Class: ONVIFDisplay

## Hierarchy

* **ONVIFDisplay**

## Index

### Constructors

* [constructor](_api_display_.onvifdisplay.md#constructor)

### Properties

* [config](_api_display_.onvifdisplay.md#private-config)

### Methods

* [CreatePaneConfiguration](_api_display_.onvifdisplay.md#createpaneconfiguration)
* [DeletePaneConfiguration](_api_display_.onvifdisplay.md#deletepaneconfiguration)
* [GetDisplayOptions](_api_display_.onvifdisplay.md#getdisplayoptions)
* [GetLayout](_api_display_.onvifdisplay.md#getlayout)
* [GetPaneConfiguration](_api_display_.onvifdisplay.md#getpaneconfiguration)
* [GetPaneConfigurations](_api_display_.onvifdisplay.md#getpaneconfigurations)
* [GetServiceCapabilities](_api_display_.onvifdisplay.md#getservicecapabilities)
* [SetLayout](_api_display_.onvifdisplay.md#setlayout)
* [SetPaneConfiguration](_api_display_.onvifdisplay.md#setpaneconfiguration)
* [SetPaneConfigurations](_api_display_.onvifdisplay.md#setpaneconfigurations)
* [CreatePaneConfiguration](_api_display_.onvifdisplay.md#static-createpaneconfiguration)
* [DeletePaneConfiguration](_api_display_.onvifdisplay.md#static-deletepaneconfiguration)
* [GetDisplayOptions](_api_display_.onvifdisplay.md#static-getdisplayoptions)
* [GetLayout](_api_display_.onvifdisplay.md#static-getlayout)
* [GetPaneConfiguration](_api_display_.onvifdisplay.md#static-getpaneconfiguration)
* [GetPaneConfigurations](_api_display_.onvifdisplay.md#static-getpaneconfigurations)
* [GetServiceCapabilities](_api_display_.onvifdisplay.md#static-getservicecapabilities)
* [SetLayout](_api_display_.onvifdisplay.md#static-setlayout)
* [SetPaneConfiguration](_api_display_.onvifdisplay.md#static-setpaneconfiguration)
* [SetPaneConfigurations](_api_display_.onvifdisplay.md#static-setpaneconfigurations)

## Constructors

###  constructor

\+ **new ONVIFDisplay**(`config`: [IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md)): *[ONVIFDisplay](_api_display_.onvifdisplay.md)*

*Defined in [api/display.ts:5](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/display.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | [IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md) |

**Returns:** *[ONVIFDisplay](_api_display_.onvifdisplay.md)*

## Properties

### `Private` config

• **config**: *[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md)*

*Defined in [api/display.ts:6](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/display.ts#L6)*

## Methods

###  CreatePaneConfiguration

▸ **CreatePaneConfiguration**(`VideoOutput`: [ReferenceToken](../modules/_api_types_.md#referencetoken), `PaneConfiguration`: [PaneConfiguration](../interfaces/_api_types_.paneconfiguration.md)): *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

*Defined in [api/display.ts:197](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/display.ts#L197)*

Create a new pane configuration describing the streaming and coding settings for a display area.
  This optional method is only supported by devices that signal support of dynamic pane creation via their capabilities.
  The content of the Token field may be ignored by the device.

**Parameters:**

Name | Type |
------ | ------ |
`VideoOutput` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |
`PaneConfiguration` | [PaneConfiguration](../interfaces/_api_types_.paneconfiguration.md) |

**Returns:** *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

___

###  DeletePaneConfiguration

▸ **DeletePaneConfiguration**(`VideoOutput`: [ReferenceToken](../modules/_api_types_.md#referencetoken), `PaneToken`: [ReferenceToken](../modules/_api_types_.md#referencetoken)): *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

*Defined in [api/display.ts:207](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/display.ts#L207)*

Delete a pane configuration. A service must respond with an error if the pane configuration
  is in use by the current layout.
  This optional method is only supported by devices that signal support of dynamic pane creation via their capabilities.

**Parameters:**

Name | Type |
------ | ------ |
`VideoOutput` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |
`PaneToken` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |

**Returns:** *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

___

###  GetDisplayOptions

▸ **GetDisplayOptions**(`VideoOutput`: [ReferenceToken](../modules/_api_types_.md#referencetoken)): *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

*Defined in [api/display.ts:153](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/display.ts#L153)*

The Display Options contain the supported layouts (LayoutOptions) and the decoding and
  encoding capabilities (CodingCapabilities) of the device. The GetDisplayOptions command
  returns both, Layout and Coding Capabilities, of a VideoOutput.

**Parameters:**

Name | Type |
------ | ------ |
`VideoOutput` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |

**Returns:** *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

___

###  GetLayout

▸ **GetLayout**(`VideoOutput`: [ReferenceToken](../modules/_api_types_.md#referencetoken)): *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

*Defined in [api/display.ts:132](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/display.ts#L132)*

Return the current layout of a video output. The Layout assigns a pane configuration to a certain area of the display. The layout settings
  directly affect a specific video output. The layout consists of a list of PaneConfigurations and
  their associated display areas.

**Parameters:**

Name | Type |
------ | ------ |
`VideoOutput` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |

**Returns:** *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

___

###  GetPaneConfiguration

▸ **GetPaneConfiguration**(`VideoOutput`: [ReferenceToken](../modules/_api_types_.md#referencetoken), `Pane`: [ReferenceToken](../modules/_api_types_.md#referencetoken)): *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

*Defined in [api/display.ts:171](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/display.ts#L171)*

Retrieve the pane configuration for a pane token.

**Parameters:**

Name | Type |
------ | ------ |
`VideoOutput` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |
`Pane` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |

**Returns:** *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

___

###  GetPaneConfigurations

▸ **GetPaneConfigurations**(`VideoOutput`: [ReferenceToken](../modules/_api_types_.md#referencetoken)): *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

*Defined in [api/display.ts:164](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/display.ts#L164)*

List all currently defined panes of a device for a specified video output
  (regardless if this pane is visible at a moment). A Pane is a display area on the monitor that is attached to a video output. A pane has a
  PaneConfiguration that describes which entities are associated with the pane. A client has to configure the pane according to the connection to be established by setting the
  AudioOutput and/or AudioSourceToken. If a Token is not set, the corresponding session will
  not be established.

**Parameters:**

Name | Type |
------ | ------ |
`VideoOutput` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |

**Returns:** *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

___

###  GetServiceCapabilities

▸ **GetServiceCapabilities**(): *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

*Defined in [api/display.ts:123](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/display.ts#L123)*

Returns the capabilities of the display service. The result is returned in a typed answer.

**Returns:** *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

___

###  SetLayout

▸ **SetLayout**(`VideoOutput`: [ReferenceToken](../modules/_api_types_.md#referencetoken), `Layout`: [Layout](../interfaces/_api_types_.layout.md)): *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

*Defined in [api/display.ts:144](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/display.ts#L144)*

Change the layout of a display (e.g. change from
  single view to split screen view).The Layout assigns a pane configuration to a certain area of the display. The layout settings
  directly affect a specific video output. The layout consists of a list of PaneConfigurations and
  their associated display areas.
  A device implementation shall be tolerant against rounding errors when matching a layout against its fixed set of layouts by accepting differences of at least one percent.

**Parameters:**

Name | Type |
------ | ------ |
`VideoOutput` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |
`Layout` | [Layout](../interfaces/_api_types_.layout.md) |

**Returns:** *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

___

###  SetPaneConfiguration

▸ **SetPaneConfiguration**(`VideoOutput`: [ReferenceToken](../modules/_api_types_.md#referencetoken), `PaneConfiguration`: [PaneConfiguration](../interfaces/_api_types_.paneconfiguration.md)): *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

*Defined in [api/display.ts:187](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/display.ts#L187)*

This command changes the configuration of the specified pane (tbd)

**Parameters:**

Name | Type |
------ | ------ |
`VideoOutput` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |
`PaneConfiguration` | [PaneConfiguration](../interfaces/_api_types_.paneconfiguration.md) |

**Returns:** *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

___

###  SetPaneConfigurations

▸ **SetPaneConfigurations**(`VideoOutput`: [ReferenceToken](../modules/_api_types_.md#referencetoken), `PaneConfiguration`: [PaneConfiguration](../interfaces/_api_types_.paneconfiguration.md)): *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

*Defined in [api/display.ts:180](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/display.ts#L180)*

Modify one or more configurations of the specified video output.
  This method will only modify the provided configurations and leave the others unchanged.
  Use DeletePaneConfiguration to remove pane configurations.

**Parameters:**

Name | Type |
------ | ------ |
`VideoOutput` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |
`PaneConfiguration` | [PaneConfiguration](../interfaces/_api_types_.paneconfiguration.md) |

**Returns:** *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

___

### `Static` CreatePaneConfiguration

▸ **CreatePaneConfiguration**(`VideoOutput`: [ReferenceToken](../modules/_api_types_.md#referencetoken), `PaneConfiguration`: [PaneConfiguration](../interfaces/_api_types_.paneconfiguration.md)): *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

*Defined in [api/display.ts:102](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/display.ts#L102)*

Create a new pane configuration describing the streaming and coding settings for a display area.
  This optional method is only supported by devices that signal support of dynamic pane creation via their capabilities.
  The content of the Token field may be ignored by the device.

**Parameters:**

Name | Type |
------ | ------ |
`VideoOutput` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |
`PaneConfiguration` | [PaneConfiguration](../interfaces/_api_types_.paneconfiguration.md) |

**Returns:** *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

___

### `Static` DeletePaneConfiguration

▸ **DeletePaneConfiguration**(`VideoOutput`: [ReferenceToken](../modules/_api_types_.md#referencetoken), `PaneToken`: [ReferenceToken](../modules/_api_types_.md#referencetoken)): *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

*Defined in [api/display.ts:114](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/display.ts#L114)*

Delete a pane configuration. A service must respond with an error if the pane configuration
  is in use by the current layout.
  This optional method is only supported by devices that signal support of dynamic pane creation via their capabilities.

**Parameters:**

Name | Type |
------ | ------ |
`VideoOutput` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |
`PaneToken` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |

**Returns:** *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

___

### `Static` GetDisplayOptions

▸ **GetDisplayOptions**(`VideoOutput`: [ReferenceToken](../modules/_api_types_.md#referencetoken)): *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

*Defined in [api/display.ts:48](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/display.ts#L48)*

The Display Options contain the supported layouts (LayoutOptions) and the decoding and
  encoding capabilities (CodingCapabilities) of the device. The GetDisplayOptions command
  returns both, Layout and Coding Capabilities, of a VideoOutput.

**Parameters:**

Name | Type |
------ | ------ |
`VideoOutput` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |

**Returns:** *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

___

### `Static` GetLayout

▸ **GetLayout**(`VideoOutput`: [ReferenceToken](../modules/_api_types_.md#referencetoken)): *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

*Defined in [api/display.ts:23](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/display.ts#L23)*

Return the current layout of a video output. The Layout assigns a pane configuration to a certain area of the display. The layout settings
  directly affect a specific video output. The layout consists of a list of PaneConfigurations and
  their associated display areas.

**Parameters:**

Name | Type |
------ | ------ |
`VideoOutput` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |

**Returns:** *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

___

### `Static` GetPaneConfiguration

▸ **GetPaneConfiguration**(`VideoOutput`: [ReferenceToken](../modules/_api_types_.md#referencetoken), `Pane`: [ReferenceToken](../modules/_api_types_.md#referencetoken)): *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

*Defined in [api/display.ts:70](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/display.ts#L70)*

Retrieve the pane configuration for a pane token.

**Parameters:**

Name | Type |
------ | ------ |
`VideoOutput` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |
`Pane` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |

**Returns:** *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

___

### `Static` GetPaneConfigurations

▸ **GetPaneConfigurations**(`VideoOutput`: [ReferenceToken](../modules/_api_types_.md#referencetoken)): *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

*Defined in [api/display.ts:61](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/display.ts#L61)*

List all currently defined panes of a device for a specified video output
  (regardless if this pane is visible at a moment). A Pane is a display area on the monitor that is attached to a video output. A pane has a
  PaneConfiguration that describes which entities are associated with the pane. A client has to configure the pane according to the connection to be established by setting the
  AudioOutput and/or AudioSourceToken. If a Token is not set, the corresponding session will
  not be established.

**Parameters:**

Name | Type |
------ | ------ |
`VideoOutput` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |

**Returns:** *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

___

### `Static` GetServiceCapabilities

▸ **GetServiceCapabilities**(): *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

*Defined in [api/display.ts:12](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/display.ts#L12)*

Returns the capabilities of the display service. The result is returned in a typed answer.

**Returns:** *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

___

### `Static` SetLayout

▸ **SetLayout**(`VideoOutput`: [ReferenceToken](../modules/_api_types_.md#referencetoken), `Layout`: [Layout](../interfaces/_api_types_.layout.md)): *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

*Defined in [api/display.ts:37](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/display.ts#L37)*

Change the layout of a display (e.g. change from
  single view to split screen view).The Layout assigns a pane configuration to a certain area of the display. The layout settings
  directly affect a specific video output. The layout consists of a list of PaneConfigurations and
  their associated display areas.
  A device implementation shall be tolerant against rounding errors when matching a layout against its fixed set of layouts by accepting differences of at least one percent.

**Parameters:**

Name | Type |
------ | ------ |
`VideoOutput` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |
`Layout` | [Layout](../interfaces/_api_types_.layout.md) |

**Returns:** *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

___

### `Static` SetPaneConfiguration

▸ **SetPaneConfiguration**(`VideoOutput`: [ReferenceToken](../modules/_api_types_.md#referencetoken), `PaneConfiguration`: [PaneConfiguration](../interfaces/_api_types_.paneconfiguration.md)): *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

*Defined in [api/display.ts:90](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/display.ts#L90)*

This command changes the configuration of the specified pane (tbd)

**Parameters:**

Name | Type |
------ | ------ |
`VideoOutput` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |
`PaneConfiguration` | [PaneConfiguration](../interfaces/_api_types_.paneconfiguration.md) |

**Returns:** *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

___

### `Static` SetPaneConfigurations

▸ **SetPaneConfigurations**(`VideoOutput`: [ReferenceToken](../modules/_api_types_.md#referencetoken), `PaneConfiguration`: [PaneConfiguration](../interfaces/_api_types_.paneconfiguration.md)): *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

*Defined in [api/display.ts:81](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/display.ts#L81)*

Modify one or more configurations of the specified video output.
  This method will only modify the provided configurations and leave the others unchanged.
  Use DeletePaneConfiguration to remove pane configurations.

**Parameters:**

Name | Type |
------ | ------ |
`VideoOutput` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |
`PaneConfiguration` | [PaneConfiguration](../interfaces/_api_types_.paneconfiguration.md) |

**Returns:** *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*
