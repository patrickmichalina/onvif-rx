[onvif-rx](../README.md) › ["api/types"](../modules/_api_types_.md) › [EventBrokerConfig](_api_types_.eventbrokerconfig.md)

# Interface: EventBrokerConfig

Event broker address in the format "scheme://host:port[/resource]". The supported schemes shall be returned by the EventBrokerProtocols capability. The resource part of the URL is only valid when using websocket. The Address must be unique.

## Hierarchy

* **EventBrokerConfig**

## Index

### Properties

* [Address](_api_types_.eventbrokerconfig.md#readonly-address)
* [CertPathValidationPolicyID](_api_types_.eventbrokerconfig.md#optional-readonly-certpathvalidationpolicyid)
* [CertificateID](_api_types_.eventbrokerconfig.md#optional-readonly-certificateid)
* [Password](_api_types_.eventbrokerconfig.md#optional-readonly-password)
* [PublishFilter](_api_types_.eventbrokerconfig.md#optional-readonly-publishfilter)
* [QoS](_api_types_.eventbrokerconfig.md#optional-readonly-qos)
* [Status](_api_types_.eventbrokerconfig.md#optional-readonly-status)
* [TopicPrefix](_api_types_.eventbrokerconfig.md#readonly-topicprefix)
* [UserName](_api_types_.eventbrokerconfig.md#optional-readonly-username)

## Properties

### `Readonly` Address

• **Address**: *string*

*Defined in [api/types.ts:4421](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L4421)*

___

### `Optional` `Readonly` CertPathValidationPolicyID

• **CertPathValidationPolicyID**? : *undefined | string*

*Defined in [api/types.ts:4429](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L4429)*

___

### `Optional` `Readonly` CertificateID

• **CertificateID**? : *undefined | string*

*Defined in [api/types.ts:4425](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L4425)*

___

### `Optional` `Readonly` Password

• **Password**? : *undefined | string*

*Defined in [api/types.ts:4424](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L4424)*

___

### `Optional` `Readonly` PublishFilter

• **PublishFilter**? : *any*

*Defined in [api/types.ts:4426](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L4426)*

___

### `Optional` `Readonly` QoS

• **QoS**? : *undefined | number*

*Defined in [api/types.ts:4427](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L4427)*

___

### `Optional` `Readonly` Status

• **Status**? : *undefined | string*

*Defined in [api/types.ts:4428](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L4428)*

___

### `Readonly` TopicPrefix

• **TopicPrefix**: *string*

*Defined in [api/types.ts:4422](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L4422)*

___

### `Optional` `Readonly` UserName

• **UserName**? : *undefined | string*

*Defined in [api/types.ts:4423](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L4423)*
