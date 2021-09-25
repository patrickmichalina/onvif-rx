[onvif-rx](../README.md) › ["soap/auth"](_soap_auth_.md)

# Module: "soap/auth"

## Index

### Interfaces

* [IDigestBag](../interfaces/_soap_auth_.idigestbag.md)
* [IUserCredentials](../interfaces/_soap_auth_.iusercredentials.md)

### Functions

* [createUserToken](_soap_auth_.md#const-createusertoken)
* [onvifDigest](_soap_auth_.md#const-onvifdigest)

### Object literals

* [TOKENS](_soap_auth_.md#const-tokens)

## Functions

### `Const` createUserToken

▸ **createUserToken**(`timeDifference`: number): *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), IMaybe‹PromiseLike‹string›››*

*Defined in [soap/auth.ts:42](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/soap/auth.ts#L42)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`timeDifference` | number | 0 |

**Returns:** *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), IMaybe‹PromiseLike‹string›››*

___

### `Const` onvifDigest

▸ **onvifDigest**(`dateIsoString`: string): *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), IMaybe‹PromiseLike‹[IDigestBag](../interfaces/_soap_auth_.idigestbag.md)›››*

*Defined in [soap/auth.ts:16](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/soap/auth.ts#L16)*

**Parameters:**

Name | Type |
------ | ------ |
`dateIsoString` | string |

**Returns:** *IReader‹[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), IMaybe‹PromiseLike‹[IDigestBag](../interfaces/_soap_auth_.idigestbag.md)›››*

## Object literals

### `Const` TOKENS

### ▪ **TOKENS**: *object*

*Defined in [soap/auth.ts:33](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/soap/auth.ts#L33)*

###  cr

• **cr**: *string* = "wsu:Created"

*Defined in [soap/auth.ts:39](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/soap/auth.ts#L39)*

###  nc

• **nc**: *string* = "wsse:Nonce"

*Defined in [soap/auth.ts:38](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/soap/auth.ts#L38)*

###  pw

• **pw**: *string* = "wsse:Password"

*Defined in [soap/auth.ts:37](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/soap/auth.ts#L37)*

###  s

• **s**: *string* = "wsse:Security"

*Defined in [soap/auth.ts:34](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/soap/auth.ts#L34)*

###  un

• **un**: *string* = "wsse:Username"

*Defined in [soap/auth.ts:36](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/soap/auth.ts#L36)*

###  unt

• **unt**: *string* = "wsse:UsernameToken"

*Defined in [soap/auth.ts:35](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/soap/auth.ts#L35)*
