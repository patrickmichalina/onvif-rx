[onvif-rx](../README.md) › ["api/analytics"](../modules/_api_analytics_.md) › [ONVIFAnalytics](_api_analytics_.onvifanalytics.md)

# Class: ONVIFAnalytics

## Hierarchy

* **ONVIFAnalytics**

## Index

### Constructors

* [constructor](_api_analytics_.onvifanalytics.md#constructor)

### Properties

* [config](_api_analytics_.onvifanalytics.md#private-config)

### Methods

* [CreateAnalyticsModules](_api_analytics_.onvifanalytics.md#createanalyticsmodules)
* [CreateRules](_api_analytics_.onvifanalytics.md#createrules)
* [DeleteAnalyticsModules](_api_analytics_.onvifanalytics.md#deleteanalyticsmodules)
* [DeleteRules](_api_analytics_.onvifanalytics.md#deleterules)
* [GetAnalyticsModuleOptions](_api_analytics_.onvifanalytics.md#getanalyticsmoduleoptions)
* [GetAnalyticsModules](_api_analytics_.onvifanalytics.md#getanalyticsmodules)
* [GetRuleOptions](_api_analytics_.onvifanalytics.md#getruleoptions)
* [GetRules](_api_analytics_.onvifanalytics.md#getrules)
* [GetServiceCapabilities](_api_analytics_.onvifanalytics.md#getservicecapabilities)
* [GetSupportedAnalyticsModules](_api_analytics_.onvifanalytics.md#getsupportedanalyticsmodules)
* [GetSupportedMetadata](_api_analytics_.onvifanalytics.md#getsupportedmetadata)
* [GetSupportedRules](_api_analytics_.onvifanalytics.md#getsupportedrules)
* [ModifyAnalyticsModules](_api_analytics_.onvifanalytics.md#modifyanalyticsmodules)
* [ModifyRules](_api_analytics_.onvifanalytics.md#modifyrules)
* [CreateAnalyticsModules](_api_analytics_.onvifanalytics.md#static-createanalyticsmodules)
* [CreateRules](_api_analytics_.onvifanalytics.md#static-createrules)
* [DeleteAnalyticsModules](_api_analytics_.onvifanalytics.md#static-deleteanalyticsmodules)
* [DeleteRules](_api_analytics_.onvifanalytics.md#static-deleterules)
* [GetAnalyticsModuleOptions](_api_analytics_.onvifanalytics.md#static-getanalyticsmoduleoptions)
* [GetAnalyticsModules](_api_analytics_.onvifanalytics.md#static-getanalyticsmodules)
* [GetRuleOptions](_api_analytics_.onvifanalytics.md#static-getruleoptions)
* [GetRules](_api_analytics_.onvifanalytics.md#static-getrules)
* [GetServiceCapabilities](_api_analytics_.onvifanalytics.md#static-getservicecapabilities)
* [GetSupportedAnalyticsModules](_api_analytics_.onvifanalytics.md#static-getsupportedanalyticsmodules)
* [GetSupportedMetadata](_api_analytics_.onvifanalytics.md#static-getsupportedmetadata)
* [GetSupportedRules](_api_analytics_.onvifanalytics.md#static-getsupportedrules)
* [ModifyAnalyticsModules](_api_analytics_.onvifanalytics.md#static-modifyanalyticsmodules)
* [ModifyRules](_api_analytics_.onvifanalytics.md#static-modifyrules)

## Constructors

###  constructor

\+ **new ONVIFAnalytics**(`config`: [IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md)): *[ONVIFAnalytics](_api_analytics_.onvifanalytics.md)*

*Defined in [api/analytics.ts:5](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/analytics.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | [IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md) |

**Returns:** *[ONVIFAnalytics](_api_analytics_.onvifanalytics.md)*

## Properties

### `Private` config

• **config**: *[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md)*

*Defined in [api/analytics.ts:6](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/analytics.ts#L6)*

## Methods

###  CreateAnalyticsModules

▸ **CreateAnalyticsModules**(`ConfigurationToken`: [ReferenceToken](../modules/_api_types_.md#referencetoken), `AnalyticsModule`: [Config](../interfaces/_api_types_.config.md)): *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

*Defined in [api/analytics.ts:298](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/analytics.ts#L298)*

  Add one or more analytics modules to an existing VideoAnalyticsConfiguration.
  The available supported types can be retrieved via GetSupportedAnalyticsModules,
  where the Name of the supported AnalyticsModules correspond to the type of an AnalyticsModule instance.
  Pass unique module names which can be later used as reference. The Parameters of the analytics module must match those of the corresponding AnalyticsModuleDescription.

  Although this method is mandatory a device implementation may not support adding modules.
  Instead it can provide a fixed set of predefined configurations via the media service functions
  GetCompatibleVideoAnalyticsConfigurations and
  GetAnalyticsConfigurations.

  The device shall ensure that a corresponding analytics engine starts operation when a client
  subscribes directly or indirectly for events produced by the analytics or rule engine or when a
  client requests the corresponding scene description stream.
  An analytics module must be attached to a Video source using the media profiles before it can be used.
  In case differing analytics configurations are attached to the same profile it is undefined which
  of the analytics module configuration becomes active if no stream is activated or multiple streams
  with different profiles are activated at the same time.

**Parameters:**

Name | Type |
------ | ------ |
`ConfigurationToken` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |
`AnalyticsModule` | [Config](../interfaces/_api_types_.config.md) |

**Returns:** *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

___

###  CreateRules

▸ **CreateRules**(`ConfigurationToken`: [ReferenceToken](../modules/_api_types_.md#referencetoken), `Rule`: [Config](../interfaces/_api_types_.config.md)): *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

*Defined in [api/analytics.ts:212](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/analytics.ts#L212)*

  Add one or more rules to an existing VideoAnalyticsConfiguration.
  The available supported types can be retrieved via GetSupportedRules,
  where the Name of the supported rule correspond to the type of an rule instance.
  Pass unique module names which can be later used as reference.
  The Parameters of the rules must match those of the corresponding description.

  Although this method is mandatory a device implementation must not support adding rules.
  Instead it can provide a fixed set of predefined configurations via the media service function
  GetCompatibleVideoAnalyticsConfigurations.

**Parameters:**

Name | Type |
------ | ------ |
`ConfigurationToken` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |
`Rule` | [Config](../interfaces/_api_types_.config.md) |

**Returns:** *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

___

###  DeleteAnalyticsModules

▸ **DeleteAnalyticsModules**(`ConfigurationToken`: [ReferenceToken](../modules/_api_types_.md#referencetoken), `AnalyticsModuleName`: string): *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

*Defined in [api/analytics.ts:307](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/analytics.ts#L307)*

  Remove one or more analytics modules from a VideoAnalyticsConfiguration referenced by their names.

**Parameters:**

Name | Type |
------ | ------ |
`ConfigurationToken` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |
`AnalyticsModuleName` | string |

**Returns:** *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

___

###  DeleteRules

▸ **DeleteRules**(`ConfigurationToken`: [ReferenceToken](../modules/_api_types_.md#referencetoken), `RuleName`: string): *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

*Defined in [api/analytics.ts:221](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/analytics.ts#L221)*

  Remove one or more rules from a VideoAnalyticsConfiguration.

**Parameters:**

Name | Type |
------ | ------ |
`ConfigurationToken` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |
`RuleName` | string |

**Returns:** *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

___

###  GetAnalyticsModuleOptions

▸ **GetAnalyticsModuleOptions**(`ConfigurationToken`: [ReferenceToken](../modules/_api_types_.md#referencetoken), `Type?`: any): *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

*Defined in [api/analytics.ts:273](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/analytics.ts#L273)*

  Return the options for the supported analytics modules that specify an Option attribute.

**Parameters:**

Name | Type |
------ | ------ |
`ConfigurationToken` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |
`Type?` | any |

**Returns:** *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

___

###  GetAnalyticsModules

▸ **GetAnalyticsModules**(`ConfigurationToken`: [ReferenceToken](../modules/_api_types_.md#referencetoken)): *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

*Defined in [api/analytics.ts:316](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/analytics.ts#L316)*

  List the currently assigned set of analytics modules of a VideoAnalyticsConfiguration.

**Parameters:**

Name | Type |
------ | ------ |
`ConfigurationToken` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |

**Returns:** *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

___

###  GetRuleOptions

▸ **GetRuleOptions**(`ConfigurationToken`: [ReferenceToken](../modules/_api_types_.md#referencetoken), `RuleType?`: any): *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

*Defined in [api/analytics.ts:239](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/analytics.ts#L239)*

  Return the options for the supported rules that specify an Option attribute.

**Parameters:**

Name | Type |
------ | ------ |
`ConfigurationToken` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |
`RuleType?` | any |

**Returns:** *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

___

###  GetRules

▸ **GetRules**(`ConfigurationToken`: [ReferenceToken](../modules/_api_types_.md#referencetoken)): *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

*Defined in [api/analytics.ts:230](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/analytics.ts#L230)*

  List the currently assigned set of rules of a VideoAnalyticsConfiguration.

**Parameters:**

Name | Type |
------ | ------ |
`ConfigurationToken` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |

**Returns:** *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

___

###  GetServiceCapabilities

▸ **GetServiceCapabilities**(): *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

*Defined in [api/analytics.ts:255](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/analytics.ts#L255)*

Returns the capabilities of the analytics service. The result is returned in a typed answer.

**Returns:** *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

___

###  GetSupportedAnalyticsModules

▸ **GetSupportedAnalyticsModules**(`ConfigurationToken`: [ReferenceToken](../modules/_api_types_.md#referencetoken)): *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

*Defined in [api/analytics.ts:264](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/analytics.ts#L264)*

  List all analytics modules that are supported by the given VideoAnalyticsConfiguration.

**Parameters:**

Name | Type |
------ | ------ |
`ConfigurationToken` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |

**Returns:** *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

___

###  GetSupportedMetadata

▸ **GetSupportedMetadata**(`Type?`: any): *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

*Defined in [api/analytics.ts:339](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/analytics.ts#L339)*

  This method provides a computer readable description of the metadata that the selected analytics modules can generate.
  The type parameter allows to select a single analytics module. By default the output shall relate to all analytics modules that exist in the device.
  The response shall provide a sample XML frame.
  The sample frame shall include all potentially generated elements by the selected analytics modules.
  Note that this e.g. does not need to include all possible class type enumerations.

**Parameters:**

Name | Type |
------ | ------ |
`Type?` | any |

**Returns:** *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

___

###  GetSupportedRules

▸ **GetSupportedRules**(`ConfigurationToken`: [ReferenceToken](../modules/_api_types_.md#referencetoken)): *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

*Defined in [api/analytics.ts:195](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/analytics.ts#L195)*

  List all rules that are supported by the given VideoAnalyticsConfiguration.

**Parameters:**

Name | Type |
------ | ------ |
`ConfigurationToken` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |

**Returns:** *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

___

###  ModifyAnalyticsModules

▸ **ModifyAnalyticsModules**(`ConfigurationToken`: [ReferenceToken](../modules/_api_types_.md#referencetoken), `AnalyticsModule`: [Config](../interfaces/_api_types_.config.md)): *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

*Defined in [api/analytics.ts:326](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/analytics.ts#L326)*

  Modify the settings of one or more analytics modules of a VideoAnalyticsConfiguration. The modules are referenced by their names.
  It is allowed to pass only a subset to be modified.

**Parameters:**

Name | Type |
------ | ------ |
`ConfigurationToken` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |
`AnalyticsModule` | [Config](../interfaces/_api_types_.config.md) |

**Returns:** *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

___

###  ModifyRules

▸ **ModifyRules**(`ConfigurationToken`: [ReferenceToken](../modules/_api_types_.md#referencetoken), `Rule`: [Config](../interfaces/_api_types_.config.md)): *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

*Defined in [api/analytics.ts:248](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/analytics.ts#L248)*

  Modify one or more rules of a VideoAnalyticsConfiguration. The rules are referenced by their names.

**Parameters:**

Name | Type |
------ | ------ |
`ConfigurationToken` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |
`Rule` | [Config](../interfaces/_api_types_.config.md) |

**Returns:** *Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)››*

___

### `Static` CreateAnalyticsModules

▸ **CreateAnalyticsModules**(`ConfigurationToken`: [ReferenceToken](../modules/_api_types_.md#referencetoken), `AnalyticsModule`: [Config](../interfaces/_api_types_.config.md)): *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

*Defined in [api/analytics.ts:135](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/analytics.ts#L135)*

  Add one or more analytics modules to an existing VideoAnalyticsConfiguration.
  The available supported types can be retrieved via GetSupportedAnalyticsModules,
  where the Name of the supported AnalyticsModules correspond to the type of an AnalyticsModule instance.
  Pass unique module names which can be later used as reference. The Parameters of the analytics module must match those of the corresponding AnalyticsModuleDescription.

  Although this method is mandatory a device implementation may not support adding modules.
  Instead it can provide a fixed set of predefined configurations via the media service functions
  GetCompatibleVideoAnalyticsConfigurations and
  GetAnalyticsConfigurations.

  The device shall ensure that a corresponding analytics engine starts operation when a client
  subscribes directly or indirectly for events produced by the analytics or rule engine or when a
  client requests the corresponding scene description stream.
  An analytics module must be attached to a Video source using the media profiles before it can be used.
  In case differing analytics configurations are attached to the same profile it is undefined which
  of the analytics module configuration becomes active if no stream is activated or multiple streams
  with different profiles are activated at the same time.

**Parameters:**

Name | Type |
------ | ------ |
`ConfigurationToken` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |
`AnalyticsModule` | [Config](../interfaces/_api_types_.config.md) |

**Returns:** *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

___

### `Static` CreateRules

▸ **CreateRules**(`ConfigurationToken`: [ReferenceToken](../modules/_api_types_.md#referencetoken), `Rule`: [Config](../interfaces/_api_types_.config.md)): *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

*Defined in [api/analytics.ts:33](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/analytics.ts#L33)*

  Add one or more rules to an existing VideoAnalyticsConfiguration.
  The available supported types can be retrieved via GetSupportedRules,
  where the Name of the supported rule correspond to the type of an rule instance.
  Pass unique module names which can be later used as reference.
  The Parameters of the rules must match those of the corresponding description.

  Although this method is mandatory a device implementation must not support adding rules.
  Instead it can provide a fixed set of predefined configurations via the media service function
  GetCompatibleVideoAnalyticsConfigurations.

**Parameters:**

Name | Type |
------ | ------ |
`ConfigurationToken` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |
`Rule` | [Config](../interfaces/_api_types_.config.md) |

**Returns:** *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

___

### `Static` DeleteAnalyticsModules

▸ **DeleteAnalyticsModules**(`ConfigurationToken`: [ReferenceToken](../modules/_api_types_.md#referencetoken), `AnalyticsModuleName`: string): *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

*Defined in [api/analytics.ts:146](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/analytics.ts#L146)*

  Remove one or more analytics modules from a VideoAnalyticsConfiguration referenced by their names.

**Parameters:**

Name | Type |
------ | ------ |
`ConfigurationToken` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |
`AnalyticsModuleName` | string |

**Returns:** *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

___

### `Static` DeleteRules

▸ **DeleteRules**(`ConfigurationToken`: [ReferenceToken](../modules/_api_types_.md#referencetoken), `RuleName`: string): *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

*Defined in [api/analytics.ts:44](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/analytics.ts#L44)*

  Remove one or more rules from a VideoAnalyticsConfiguration.

**Parameters:**

Name | Type |
------ | ------ |
`ConfigurationToken` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |
`RuleName` | string |

**Returns:** *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

___

### `Static` GetAnalyticsModuleOptions

▸ **GetAnalyticsModuleOptions**(`ConfigurationToken`: [ReferenceToken](../modules/_api_types_.md#referencetoken), `Type?`: any): *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

*Defined in [api/analytics.ts:108](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/analytics.ts#L108)*

  Return the options for the supported analytics modules that specify an Option attribute.

**Parameters:**

Name | Type |
------ | ------ |
`ConfigurationToken` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |
`Type?` | any |

**Returns:** *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

___

### `Static` GetAnalyticsModules

▸ **GetAnalyticsModules**(`ConfigurationToken`: [ReferenceToken](../modules/_api_types_.md#referencetoken)): *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

*Defined in [api/analytics.ts:157](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/analytics.ts#L157)*

  List the currently assigned set of analytics modules of a VideoAnalyticsConfiguration.

**Parameters:**

Name | Type |
------ | ------ |
`ConfigurationToken` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |

**Returns:** *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

___

### `Static` GetRuleOptions

▸ **GetRuleOptions**(`ConfigurationToken`: [ReferenceToken](../modules/_api_types_.md#referencetoken), `RuleType?`: any): *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

*Defined in [api/analytics.ts:66](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/analytics.ts#L66)*

  Return the options for the supported rules that specify an Option attribute.

**Parameters:**

Name | Type |
------ | ------ |
`ConfigurationToken` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |
`RuleType?` | any |

**Returns:** *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

___

### `Static` GetRules

▸ **GetRules**(`ConfigurationToken`: [ReferenceToken](../modules/_api_types_.md#referencetoken)): *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

*Defined in [api/analytics.ts:55](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/analytics.ts#L55)*

  List the currently assigned set of rules of a VideoAnalyticsConfiguration.

**Parameters:**

Name | Type |
------ | ------ |
`ConfigurationToken` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |

**Returns:** *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

___

### `Static` GetServiceCapabilities

▸ **GetServiceCapabilities**(): *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

*Defined in [api/analytics.ts:86](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/analytics.ts#L86)*

Returns the capabilities of the analytics service. The result is returned in a typed answer.

**Returns:** *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

___

### `Static` GetSupportedAnalyticsModules

▸ **GetSupportedAnalyticsModules**(`ConfigurationToken`: [ReferenceToken](../modules/_api_types_.md#referencetoken)): *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

*Defined in [api/analytics.ts:97](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/analytics.ts#L97)*

  List all analytics modules that are supported by the given VideoAnalyticsConfiguration.

**Parameters:**

Name | Type |
------ | ------ |
`ConfigurationToken` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |

**Returns:** *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

___

### `Static` GetSupportedMetadata

▸ **GetSupportedMetadata**(`Type?`: any): *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

*Defined in [api/analytics.ts:184](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/analytics.ts#L184)*

  This method provides a computer readable description of the metadata that the selected analytics modules can generate.
  The type parameter allows to select a single analytics module. By default the output shall relate to all analytics modules that exist in the device.
  The response shall provide a sample XML frame.
  The sample frame shall include all potentially generated elements by the selected analytics modules.
  Note that this e.g. does not need to include all possible class type enumerations.

**Parameters:**

Name | Type |
------ | ------ |
`Type?` | any |

**Returns:** *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

___

### `Static` GetSupportedRules

▸ **GetSupportedRules**(`ConfigurationToken`: [ReferenceToken](../modules/_api_types_.md#referencetoken)): *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

*Defined in [api/analytics.ts:14](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/analytics.ts#L14)*

  List all rules that are supported by the given VideoAnalyticsConfiguration.

**Parameters:**

Name | Type |
------ | ------ |
`ConfigurationToken` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |

**Returns:** *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

___

### `Static` ModifyAnalyticsModules

▸ **ModifyAnalyticsModules**(`ConfigurationToken`: [ReferenceToken](../modules/_api_types_.md#referencetoken), `AnalyticsModule`: [Config](../interfaces/_api_types_.config.md)): *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

*Defined in [api/analytics.ts:169](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/analytics.ts#L169)*

  Modify the settings of one or more analytics modules of a VideoAnalyticsConfiguration. The modules are referenced by their names.
  It is allowed to pass only a subset to be modified.

**Parameters:**

Name | Type |
------ | ------ |
`ConfigurationToken` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |
`AnalyticsModule` | [Config](../interfaces/_api_types_.config.md) |

**Returns:** *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

___

### `Static` ModifyRules

▸ **ModifyRules**(`ConfigurationToken`: [ReferenceToken](../modules/_api_types_.md#referencetoken), `Rule`: [Config](../interfaces/_api_types_.config.md)): *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*

*Defined in [api/analytics.ts:77](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/analytics.ts#L77)*

  Modify one or more rules of a VideoAnalyticsConfiguration. The rules are referenced by their names.

**Parameters:**

Name | Type |
------ | ------ |
`ConfigurationToken` | [ReferenceToken](../modules/_api_types_.md#referencetoken) |
`Rule` | [Config](../interfaces/_api_types_.config.md) |

**Returns:** *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), Observable‹IResult‹[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)‹any›, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›››*
