[onvif-rx](../README.md) > ["config/universal"](../modules/_config_universal_.md)

# External module: "config/universal"

## Index

### Variables

* [digestSha1](_config_universal_.md#digestsha1)

### Functions

* [FETCH_CONFIG](_config_universal_.md#fetch_config)
* [nonce](_config_universal_.md#nonce)
* [sharedFetchWrapper](_config_universal_.md#sharedfetchwrapper)

### Object literals

* [REQUEST_HEADERS](_config_universal_.md#request_headers)

---

## Variables

<a id="digestsha1"></a>

### `<Const>` digestSha1

**● digestSha1**: *[ISha1Digest](_config_interfaces_.md#isha1digest)* =  require('js-sha1').digest

*Defined in [config/universal.ts:5](https://github.com/patrickmichalina/onvif-rx/blob/d62cee9/src/config/universal.ts#L5)*

___

## Functions

<a id="fetch_config"></a>

### `<Const>` FETCH_CONFIG

▸ **FETCH_CONFIG**(body: *`string`*): `object`

*Defined in [config/universal.ts:8](https://github.com/patrickmichalina/onvif-rx/blob/d62cee9/src/config/universal.ts#L8)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| body | `string` |

**Returns:** `object`

___
<a id="nonce"></a>

### `<Const>` nonce

▸ **nonce**(size?: *`undefined` \| `number`*): `string`

*Defined in [config/universal.ts:21](https://github.com/patrickmichalina/onvif-rx/blob/d62cee9/src/config/universal.ts#L21)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` size | `undefined` \| `number` | 30 |

**Returns:** `string`

___
<a id="sharedfetchwrapper"></a>

### `<Const>` sharedFetchWrapper

▸ **sharedFetchWrapper**(fetchResponse: *`Promise`<`any`>*): `Observable`<[ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>

*Defined in [config/universal.ts:10](https://github.com/patrickmichalina/onvif-rx/blob/d62cee9/src/config/universal.ts#L10)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| fetchResponse | `Promise`<`any`> |

**Returns:** `Observable`<[ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)>

___

## Object literals

<a id="request_headers"></a>

### `<Const>` REQUEST_HEADERS

**REQUEST_HEADERS**: *`object`*

*Defined in [config/universal.ts:7](https://github.com/patrickmichalina/onvif-rx/blob/d62cee9/src/config/universal.ts#L7)*

<a id="request_headers.content_type"></a>

####  Content-Type

**● Content-Type**: *`string`* = "application/soap+xml; charset=utf-8;"

*Defined in [config/universal.ts:7](https://github.com/patrickmichalina/onvif-rx/blob/d62cee9/src/config/universal.ts#L7)*

___

___

