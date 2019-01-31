[onvif-rx](../README.md) > ["soap/auth"](../modules/_soap_auth_.md)

# External module: "soap/auth"

## Index

### Interfaces

* [IDigestBag](../interfaces/_soap_auth_.idigestbag.md)
* [IUserCredentials](../interfaces/_soap_auth_.iusercredentials.md)

### Functions

* [createUserToken](_soap_auth_.md#createusertoken)
* [onvifDigest](_soap_auth_.md#onvifdigest)

### Object literals

* [TOKENS](_soap_auth_.md#tokens)

---

## Functions

<a id="createusertoken"></a>

### `<Const>` createUserToken

▸ **createUserToken**(timeDifference?: *`number`*): `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `IMaybe`<`string`>>

*Defined in [soap/auth.ts:42](https://github.com/patrickmichalina/onvif-rx/blob/f117e44/src/soap/auth.ts#L42)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` timeDifference | `number` | 0 |

**Returns:** `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `IMaybe`<`string`>>

___
<a id="onvifdigest"></a>

### `<Const>` onvifDigest

▸ **onvifDigest**(dateIsoString: *`string`*): `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `IMaybe`<[IDigestBag](../interfaces/_soap_auth_.idigestbag.md)>>

*Defined in [soap/auth.ts:16](https://github.com/patrickmichalina/onvif-rx/blob/f117e44/src/soap/auth.ts#L16)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| dateIsoString | `string` |

**Returns:** `IReader`<[IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md), `IMaybe`<[IDigestBag](../interfaces/_soap_auth_.idigestbag.md)>>

___

## Object literals

<a id="tokens"></a>

### `<Const>` TOKENS

**TOKENS**: *`object`*

*Defined in [soap/auth.ts:33](https://github.com/patrickmichalina/onvif-rx/blob/f117e44/src/soap/auth.ts#L33)*

<a id="tokens.cr"></a>

####  cr

**● cr**: *`string`* = "wsu:Created"

*Defined in [soap/auth.ts:39](https://github.com/patrickmichalina/onvif-rx/blob/f117e44/src/soap/auth.ts#L39)*

___
<a id="tokens.nc"></a>

####  nc

**● nc**: *`string`* = "wsse:Nonce"

*Defined in [soap/auth.ts:38](https://github.com/patrickmichalina/onvif-rx/blob/f117e44/src/soap/auth.ts#L38)*

___
<a id="tokens.pw"></a>

####  pw

**● pw**: *`string`* = "wsse:Password"

*Defined in [soap/auth.ts:37](https://github.com/patrickmichalina/onvif-rx/blob/f117e44/src/soap/auth.ts#L37)*

___
<a id="tokens.s"></a>

####  s

**● s**: *`string`* = "wsse:Security"

*Defined in [soap/auth.ts:34](https://github.com/patrickmichalina/onvif-rx/blob/f117e44/src/soap/auth.ts#L34)*

___
<a id="tokens.un"></a>

####  un

**● un**: *`string`* = "wsse:Username"

*Defined in [soap/auth.ts:36](https://github.com/patrickmichalina/onvif-rx/blob/f117e44/src/soap/auth.ts#L36)*

___
<a id="tokens.unt"></a>

####  unt

**● unt**: *`string`* = "wsse:UsernameToken"

*Defined in [soap/auth.ts:35](https://github.com/patrickmichalina/onvif-rx/blob/f117e44/src/soap/auth.ts#L35)*

___

___

