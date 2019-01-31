[onvif-rx](../README.md) > ["api/analytics"](../modules/_api_analytics_.md) > [ONVIFAnalytics](../classes/_api_analytics_.onvifanalytics.md)

# Class: ONVIFAnalytics

## Hierarchy

**ONVIFAnalytics**

## Index

### Constructors

* [constructor](_api_analytics_.onvifanalytics.md#constructor)

### Properties

* [config](_api_analytics_.onvifanalytics.md#config)

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
* [GetSupportedRules](_api_analytics_.onvifanalytics.md#getsupportedrules)
* [ModifyAnalyticsModules](_api_analytics_.onvifanalytics.md#modifyanalyticsmodules)
* [ModifyRules](_api_analytics_.onvifanalytics.md#modifyrules)
* [CreateAnalyticsModules](_api_analytics_.onvifanalytics.md#createanalyticsmodules-1)
* [CreateRules](_api_analytics_.onvifanalytics.md#createrules-1)
* [DeleteAnalyticsModules](_api_analytics_.onvifanalytics.md#deleteanalyticsmodules-1)
* [DeleteRules](_api_analytics_.onvifanalytics.md#deleterules-1)
* [GetAnalyticsModuleOptions](_api_analytics_.onvifanalytics.md#getanalyticsmoduleoptions-1)
* [GetAnalyticsModules](_api_analytics_.onvifanalytics.md#getanalyticsmodules-1)
* [GetRuleOptions](_api_analytics_.onvifanalytics.md#getruleoptions-1)
* [GetRules](_api_analytics_.onvifanalytics.md#getrules-1)
* [GetServiceCapabilities](_api_analytics_.onvifanalytics.md#getservicecapabilities-1)
* [GetSupportedAnalyticsModules](_api_analytics_.onvifanalytics.md#getsupportedanalyticsmodules-1)
* [GetSupportedRules](_api_analytics_.onvifanalytics.md#getsupportedrules-1)
* [ModifyAnalyticsModules](_api_analytics_.onvifanalytics.md#modifyanalyticsmodules-1)
* [ModifyRules](_api_analytics_.onvifanalytics.md#modifyrules-1)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new ONVIFAnalytics**(config: *[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md)*): [ONVIFAnalytics](_api_analytics_.onvifanalytics.md)

*Defined in [api/analytics.ts:5](https://github.com/patrickmichalina/onvif-rx/blob/f117e44/src/api/analytics.ts#L5)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| config | [IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md) |

**Returns:** [ONVIFAnalytics](_api_analytics_.onvifanalytics.md)

___

## Properties

<a id="config"></a>

### `<Private>` config

**● config**: *[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md)*

*Defined in [api/analytics.ts:6](https://github.com/patrickmichalina/onvif-rx/blob/f117e44/src/api/analytics.ts#L6)*

___

## Methods

<a id="createanalyticsmodules"></a>

###  CreateAnalyticsModules

▸ **CreateAnalyticsModules**(ConfigurationToken: *[ReferenceToken](../modules/_api_types_.md#referencetoken)*, AnalyticsModule: *[Config](../interfaces/_api_types_.config.md)*): `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>

*Defined in [api/analytics.ts:289](https://github.com/patrickmichalina/onvif-rx/blob/f117e44/src/api/analytics.ts#L289)*

Add one or more analytics modules to an existing VideoAnalyticsConfiguration. The available supported types can be retrieved via GetSupportedAnalyticsModules, where the Name of the supported AnalyticsModules correspond to the type of an AnalyticsModule instance. Pass unique module names which can be later used as reference. The Parameters of the analytics module must match those of the corresponding AnalyticsModuleDescription.

Although this method is mandatory a device implementation must not support adding modules. Instead it can provide a fixed set of predefined configurations via the media service function GetCompatibleVideoAnalyticsConfigurations.

The device shall ensure that a corresponding analytics engine starts operation when a client subscribes directly or indirectly for events produced by the analytics or rule engine or when a client requests the corresponding scene description stream. An analytics module must be attached to a Video source using the media profiles before it can be used. In case differing analytics configurations are attached to the same profile it is undefined which of the analytics module configuration becomes active if no stream is activated or multiple streams with different profiles are activated at the same time.

**Parameters:**

| Name | Type |
| ------ | ------ |
| ConfigurationToken | [ReferenceToken](../modules/_api_types_.md#referencetoken) |
| AnalyticsModule | [Config](../interfaces/_api_types_.config.md) |

**Returns:** `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>

___
<a id="createrules"></a>

###  CreateRules

▸ **CreateRules**(ConfigurationToken: *[ReferenceToken](../modules/_api_types_.md#referencetoken)*, Rule: *[Config](../interfaces/_api_types_.config.md)*): `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>

*Defined in [api/analytics.ts:202](https://github.com/patrickmichalina/onvif-rx/blob/f117e44/src/api/analytics.ts#L202)*

Add one or more rules to an existing VideoAnalyticsConfiguration. The available supported types can be retrieved via GetSupportedRules, where the Name of the supported rule correspond to the type of an rule instance. Pass unique module names which can be later used as reference. The Parameters of the rules must match those of the corresponding description.

Although this method is mandatory a device implementation must not support adding rules. Instead it can provide a fixed set of predefined configurations via the media service function GetCompatibleVideoAnalyticsConfigurations.

**Parameters:**

| Name | Type |
| ------ | ------ |
| ConfigurationToken | [ReferenceToken](../modules/_api_types_.md#referencetoken) |
| Rule | [Config](../interfaces/_api_types_.config.md) |

**Returns:** `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>

___
<a id="deleteanalyticsmodules"></a>

###  DeleteAnalyticsModules

▸ **DeleteAnalyticsModules**(ConfigurationToken: *[ReferenceToken](../modules/_api_types_.md#referencetoken)*, AnalyticsModuleName: *`string`*): `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>

*Defined in [api/analytics.ts:298](https://github.com/patrickmichalina/onvif-rx/blob/f117e44/src/api/analytics.ts#L298)*

Remove one or more analytics modules from a VideoAnalyticsConfiguration referenced by their names.

**Parameters:**

| Name | Type |
| ------ | ------ |
| ConfigurationToken | [ReferenceToken](../modules/_api_types_.md#referencetoken) |
| AnalyticsModuleName | `string` |

**Returns:** `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>

___
<a id="deleterules"></a>

###  DeleteRules

▸ **DeleteRules**(ConfigurationToken: *[ReferenceToken](../modules/_api_types_.md#referencetoken)*, RuleName: *`string`*): `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>

*Defined in [api/analytics.ts:211](https://github.com/patrickmichalina/onvif-rx/blob/f117e44/src/api/analytics.ts#L211)*

Remove one or more rules from a VideoAnalyticsConfiguration.

**Parameters:**

| Name | Type |
| ------ | ------ |
| ConfigurationToken | [ReferenceToken](../modules/_api_types_.md#referencetoken) |
| RuleName | `string` |

**Returns:** `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>

___
<a id="getanalyticsmoduleoptions"></a>

###  GetAnalyticsModuleOptions

▸ **GetAnalyticsModuleOptions**(ConfigurationToken: *[ReferenceToken](../modules/_api_types_.md#referencetoken)*, Type: *`any`*): `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>

*Defined in [api/analytics.ts:265](https://github.com/patrickmichalina/onvif-rx/blob/f117e44/src/api/analytics.ts#L265)*

Return the options for the supported analytics modules that specify an Option attribute.

**Parameters:**

| Name | Type |
| ------ | ------ |
| ConfigurationToken | [ReferenceToken](../modules/_api_types_.md#referencetoken) |
| Type | `any` |

**Returns:** `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>

___
<a id="getanalyticsmodules"></a>

###  GetAnalyticsModules

▸ **GetAnalyticsModules**(ConfigurationToken: *[ReferenceToken](../modules/_api_types_.md#referencetoken)*): `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>

*Defined in [api/analytics.ts:307](https://github.com/patrickmichalina/onvif-rx/blob/f117e44/src/api/analytics.ts#L307)*

List the currently assigned set of analytics modules of a VideoAnalyticsConfiguration.

**Parameters:**

| Name | Type |
| ------ | ------ |
| ConfigurationToken | [ReferenceToken](../modules/_api_types_.md#referencetoken) |

**Returns:** `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>

___
<a id="getruleoptions"></a>

###  GetRuleOptions

▸ **GetRuleOptions**(ConfigurationToken: *[ReferenceToken](../modules/_api_types_.md#referencetoken)*, RuleType: *`any`*): `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>

*Defined in [api/analytics.ts:229](https://github.com/patrickmichalina/onvif-rx/blob/f117e44/src/api/analytics.ts#L229)*

Return the options for the supported rules that specify an Option attribute.

**Parameters:**

| Name | Type |
| ------ | ------ |
| ConfigurationToken | [ReferenceToken](../modules/_api_types_.md#referencetoken) |
| RuleType | `any` |

**Returns:** `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>

___
<a id="getrules"></a>

###  GetRules

▸ **GetRules**(ConfigurationToken: *[ReferenceToken](../modules/_api_types_.md#referencetoken)*): `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>

*Defined in [api/analytics.ts:220](https://github.com/patrickmichalina/onvif-rx/blob/f117e44/src/api/analytics.ts#L220)*

List the currently assigned set of rules of a VideoAnalyticsConfiguration.

**Parameters:**

| Name | Type |
| ------ | ------ |
| ConfigurationToken | [ReferenceToken](../modules/_api_types_.md#referencetoken) |

**Returns:** `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>

___
<a id="getservicecapabilities"></a>

###  GetServiceCapabilities

▸ **GetServiceCapabilities**(): `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>

*Defined in [api/analytics.ts:245](https://github.com/patrickmichalina/onvif-rx/blob/f117e44/src/api/analytics.ts#L245)*

Returns the capabilities of the analytics service. The result is returned in a typed answer.

**Returns:** `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>

___
<a id="getsupportedanalyticsmodules"></a>

###  GetSupportedAnalyticsModules

▸ **GetSupportedAnalyticsModules**(ConfigurationToken: *[ReferenceToken](../modules/_api_types_.md#referencetoken)*): `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>

*Defined in [api/analytics.ts:256](https://github.com/patrickmichalina/onvif-rx/blob/f117e44/src/api/analytics.ts#L256)*

List all analytics modules that are supported by the given VideoAnalyticsConfiguration. The result of this method may depend on the overall Video analytics configuration of the device, which is available via the current set of profiles.

**Parameters:**

| Name | Type |
| ------ | ------ |
| ConfigurationToken | [ReferenceToken](../modules/_api_types_.md#referencetoken) |

**Returns:** `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>

___
<a id="getsupportedrules"></a>

###  GetSupportedRules

▸ **GetSupportedRules**(ConfigurationToken: *[ReferenceToken](../modules/_api_types_.md#referencetoken)*): `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>

*Defined in [api/analytics.ts:185](https://github.com/patrickmichalina/onvif-rx/blob/f117e44/src/api/analytics.ts#L185)*

List all rules that are supported by the given VideoAnalyticsConfiguration. The result of this method may depend on the overall Video analytics configuration of the device, which is available via the current set of profiles.

**Parameters:**

| Name | Type |
| ------ | ------ |
| ConfigurationToken | [ReferenceToken](../modules/_api_types_.md#referencetoken) |

**Returns:** `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>

___
<a id="modifyanalyticsmodules"></a>

###  ModifyAnalyticsModules

▸ **ModifyAnalyticsModules**(ConfigurationToken: *[ReferenceToken](../modules/_api_types_.md#referencetoken)*, AnalyticsModule: *[Config](../interfaces/_api_types_.config.md)*): `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>

*Defined in [api/analytics.ts:317](https://github.com/patrickmichalina/onvif-rx/blob/f117e44/src/api/analytics.ts#L317)*

Modify the settings of one or more analytics modules of a VideoAnalyticsConfiguration. The modules are referenced by their names. It is allowed to pass only a subset to be modified.

**Parameters:**

| Name | Type |
| ------ | ------ |
| ConfigurationToken | [ReferenceToken](../modules/_api_types_.md#referencetoken) |
| AnalyticsModule | [Config](../interfaces/_api_types_.config.md) |

**Returns:** `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>

___
<a id="modifyrules"></a>

###  ModifyRules

▸ **ModifyRules**(ConfigurationToken: *[ReferenceToken](../modules/_api_types_.md#referencetoken)*, Rule: *[Config](../interfaces/_api_types_.config.md)*): `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>

*Defined in [api/analytics.ts:238](https://github.com/patrickmichalina/onvif-rx/blob/f117e44/src/api/analytics.ts#L238)*

Modify one or more rules of a VideoAnalyticsConfiguration. The rules are referenced by their names.

**Parameters:**

| Name | Type |
| ------ | ------ |
| ConfigurationToken | [ReferenceToken](../modules/_api_types_.md#referencetoken) |
| Rule | [Config](../interfaces/_api_types_.config.md) |

**Returns:** `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>

___
<a id="createanalyticsmodules-1"></a>

### `<Static>` CreateAnalyticsModules

▸ **CreateAnalyticsModules**(ConfigurationToken: *[ReferenceToken](../modules/_api_types_.md#referencetoken)*, AnalyticsModule: *[Config](../interfaces/_api_types_.config.md)*): `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

*Defined in [api/analytics.ts:138](https://github.com/patrickmichalina/onvif-rx/blob/f117e44/src/api/analytics.ts#L138)*

Add one or more analytics modules to an existing VideoAnalyticsConfiguration. The available supported types can be retrieved via GetSupportedAnalyticsModules, where the Name of the supported AnalyticsModules correspond to the type of an AnalyticsModule instance. Pass unique module names which can be later used as reference. The Parameters of the analytics module must match those of the corresponding AnalyticsModuleDescription.

Although this method is mandatory a device implementation must not support adding modules. Instead it can provide a fixed set of predefined configurations via the media service function GetCompatibleVideoAnalyticsConfigurations.

The device shall ensure that a corresponding analytics engine starts operation when a client subscribes directly or indirectly for events produced by the analytics or rule engine or when a client requests the corresponding scene description stream. An analytics module must be attached to a Video source using the media profiles before it can be used. In case differing analytics configurations are attached to the same profile it is undefined which of the analytics module configuration becomes active if no stream is activated or multiple streams with different profiles are activated at the same time.

**Parameters:**

| Name | Type |
| ------ | ------ |
| ConfigurationToken | [ReferenceToken](../modules/_api_types_.md#referencetoken) |
| AnalyticsModule | [Config](../interfaces/_api_types_.config.md) |

**Returns:** `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

___
<a id="createrules-1"></a>

### `<Static>` CreateRules

▸ **CreateRules**(ConfigurationToken: *[ReferenceToken](../modules/_api_types_.md#referencetoken)*, Rule: *[Config](../interfaces/_api_types_.config.md)*): `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

*Defined in [api/analytics.ts:35](https://github.com/patrickmichalina/onvif-rx/blob/f117e44/src/api/analytics.ts#L35)*

Add one or more rules to an existing VideoAnalyticsConfiguration. The available supported types can be retrieved via GetSupportedRules, where the Name of the supported rule correspond to the type of an rule instance. Pass unique module names which can be later used as reference. The Parameters of the rules must match those of the corresponding description.

Although this method is mandatory a device implementation must not support adding rules. Instead it can provide a fixed set of predefined configurations via the media service function GetCompatibleVideoAnalyticsConfigurations.

**Parameters:**

| Name | Type |
| ------ | ------ |
| ConfigurationToken | [ReferenceToken](../modules/_api_types_.md#referencetoken) |
| Rule | [Config](../interfaces/_api_types_.config.md) |

**Returns:** `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

___
<a id="deleteanalyticsmodules-1"></a>

### `<Static>` DeleteAnalyticsModules

▸ **DeleteAnalyticsModules**(ConfigurationToken: *[ReferenceToken](../modules/_api_types_.md#referencetoken)*, AnalyticsModuleName: *`string`*): `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

*Defined in [api/analytics.ts:149](https://github.com/patrickmichalina/onvif-rx/blob/f117e44/src/api/analytics.ts#L149)*

Remove one or more analytics modules from a VideoAnalyticsConfiguration referenced by their names.

**Parameters:**

| Name | Type |
| ------ | ------ |
| ConfigurationToken | [ReferenceToken](../modules/_api_types_.md#referencetoken) |
| AnalyticsModuleName | `string` |

**Returns:** `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

___
<a id="deleterules-1"></a>

### `<Static>` DeleteRules

▸ **DeleteRules**(ConfigurationToken: *[ReferenceToken](../modules/_api_types_.md#referencetoken)*, RuleName: *`string`*): `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

*Defined in [api/analytics.ts:46](https://github.com/patrickmichalina/onvif-rx/blob/f117e44/src/api/analytics.ts#L46)*

Remove one or more rules from a VideoAnalyticsConfiguration.

**Parameters:**

| Name | Type |
| ------ | ------ |
| ConfigurationToken | [ReferenceToken](../modules/_api_types_.md#referencetoken) |
| RuleName | `string` |

**Returns:** `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

___
<a id="getanalyticsmoduleoptions-1"></a>

### `<Static>` GetAnalyticsModuleOptions

▸ **GetAnalyticsModuleOptions**(ConfigurationToken: *[ReferenceToken](../modules/_api_types_.md#referencetoken)*, Type?: *`any`*): `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

*Defined in [api/analytics.ts:112](https://github.com/patrickmichalina/onvif-rx/blob/f117e44/src/api/analytics.ts#L112)*

Return the options for the supported analytics modules that specify an Option attribute.

**Parameters:**

| Name | Type |
| ------ | ------ |
| ConfigurationToken | [ReferenceToken](../modules/_api_types_.md#referencetoken) |
| `Optional` Type | `any` |

**Returns:** `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

___
<a id="getanalyticsmodules-1"></a>

### `<Static>` GetAnalyticsModules

▸ **GetAnalyticsModules**(ConfigurationToken: *[ReferenceToken](../modules/_api_types_.md#referencetoken)*): `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

*Defined in [api/analytics.ts:160](https://github.com/patrickmichalina/onvif-rx/blob/f117e44/src/api/analytics.ts#L160)*

List the currently assigned set of analytics modules of a VideoAnalyticsConfiguration.

**Parameters:**

| Name | Type |
| ------ | ------ |
| ConfigurationToken | [ReferenceToken](../modules/_api_types_.md#referencetoken) |

**Returns:** `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

___
<a id="getruleoptions-1"></a>

### `<Static>` GetRuleOptions

▸ **GetRuleOptions**(ConfigurationToken: *[ReferenceToken](../modules/_api_types_.md#referencetoken)*, RuleType?: *`any`*): `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

*Defined in [api/analytics.ts:68](https://github.com/patrickmichalina/onvif-rx/blob/f117e44/src/api/analytics.ts#L68)*

Return the options for the supported rules that specify an Option attribute.

**Parameters:**

| Name | Type |
| ------ | ------ |
| ConfigurationToken | [ReferenceToken](../modules/_api_types_.md#referencetoken) |
| `Optional` RuleType | `any` |

**Returns:** `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

___
<a id="getrules-1"></a>

### `<Static>` GetRules

▸ **GetRules**(ConfigurationToken: *[ReferenceToken](../modules/_api_types_.md#referencetoken)*): `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

*Defined in [api/analytics.ts:57](https://github.com/patrickmichalina/onvif-rx/blob/f117e44/src/api/analytics.ts#L57)*

List the currently assigned set of rules of a VideoAnalyticsConfiguration.

**Parameters:**

| Name | Type |
| ------ | ------ |
| ConfigurationToken | [ReferenceToken](../modules/_api_types_.md#referencetoken) |

**Returns:** `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

___
<a id="getservicecapabilities-1"></a>

### `<Static>` GetServiceCapabilities

▸ **GetServiceCapabilities**(): `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

*Defined in [api/analytics.ts:88](https://github.com/patrickmichalina/onvif-rx/blob/f117e44/src/api/analytics.ts#L88)*

Returns the capabilities of the analytics service. The result is returned in a typed answer.

**Returns:** `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

___
<a id="getsupportedanalyticsmodules-1"></a>

### `<Static>` GetSupportedAnalyticsModules

▸ **GetSupportedAnalyticsModules**(ConfigurationToken: *[ReferenceToken](../modules/_api_types_.md#referencetoken)*): `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

*Defined in [api/analytics.ts:101](https://github.com/patrickmichalina/onvif-rx/blob/f117e44/src/api/analytics.ts#L101)*

List all analytics modules that are supported by the given VideoAnalyticsConfiguration. The result of this method may depend on the overall Video analytics configuration of the device, which is available via the current set of profiles.

**Parameters:**

| Name | Type |
| ------ | ------ |
| ConfigurationToken | [ReferenceToken](../modules/_api_types_.md#referencetoken) |

**Returns:** `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

___
<a id="getsupportedrules-1"></a>

### `<Static>` GetSupportedRules

▸ **GetSupportedRules**(ConfigurationToken: *[ReferenceToken](../modules/_api_types_.md#referencetoken)*): `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

*Defined in [api/analytics.ts:16](https://github.com/patrickmichalina/onvif-rx/blob/f117e44/src/api/analytics.ts#L16)*

List all rules that are supported by the given VideoAnalyticsConfiguration. The result of this method may depend on the overall Video analytics configuration of the device, which is available via the current set of profiles.

**Parameters:**

| Name | Type |
| ------ | ------ |
| ConfigurationToken | [ReferenceToken](../modules/_api_types_.md#referencetoken) |

**Returns:** `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

___
<a id="modifyanalyticsmodules-1"></a>

### `<Static>` ModifyAnalyticsModules

▸ **ModifyAnalyticsModules**(ConfigurationToken: *[ReferenceToken](../modules/_api_types_.md#referencetoken)*, AnalyticsModule: *[Config](../interfaces/_api_types_.config.md)*): `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

*Defined in [api/analytics.ts:172](https://github.com/patrickmichalina/onvif-rx/blob/f117e44/src/api/analytics.ts#L172)*

Modify the settings of one or more analytics modules of a VideoAnalyticsConfiguration. The modules are referenced by their names. It is allowed to pass only a subset to be modified.

**Parameters:**

| Name | Type |
| ------ | ------ |
| ConfigurationToken | [ReferenceToken](../modules/_api_types_.md#referencetoken) |
| AnalyticsModule | [Config](../interfaces/_api_types_.config.md) |

**Returns:** `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

___
<a id="modifyrules-1"></a>

### `<Static>` ModifyRules

▸ **ModifyRules**(ConfigurationToken: *[ReferenceToken](../modules/_api_types_.md#referencetoken)*, Rule: *[Config](../interfaces/_api_types_.config.md)*): `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

*Defined in [api/analytics.ts:79](https://github.com/patrickmichalina/onvif-rx/blob/f117e44/src/api/analytics.ts#L79)*

Modify one or more rules of a VideoAnalyticsConfiguration. The rules are referenced by their names.

**Parameters:**

| Name | Type |
| ------ | ------ |
| ConfigurationToken | [ReferenceToken](../modules/_api_types_.md#referencetoken) |
| Rule | [Config](../interfaces/_api_types_.config.md) |

**Returns:** `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `Observable`<`IResult`<[IResultStructure](../interfaces/_soap_request_.iresultstructure.md)<`any`>, [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>>>

___

