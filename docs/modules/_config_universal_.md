[onvif-rx](../README.md) › ["config/universal"](_config_universal_.md)

# Module: "config/universal"

## Index

### Functions

* [FETCH_CONFIG](_config_universal_.md#const-fetch_config)
* [nonce](_config_universal_.md#const-nonce)
* [sharedFetchWrapper](_config_universal_.md#const-sharedfetchwrapper)

### Object literals

* [REQUEST_HEADERS](_config_universal_.md#const-request_headers)

## Functions

### `Const` FETCH_CONFIG

▸ **FETCH_CONFIG**(`body`: string): *object*

*Defined in [config/universal.ts:7](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/config/universal.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`body` | string |

**Returns:** *object*

* **body**: *string*

* **headers**(): *object*

  * **Content-Type**: *string* = "application/soap+xml; charset=utf-8;"

* **method**: *string* = "POST"

___

### `Const` nonce

▸ **nonce**(`size`: undefined | number): *string*

*Defined in [config/universal.ts:22](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/config/universal.ts#L22)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`size` | undefined &#124; number | 30 |

**Returns:** *string*

___

### `Const` sharedFetchWrapper

▸ **sharedFetchWrapper**(`fetchResponse`: Promise‹any›): *Observable‹[ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›*

*Defined in [config/universal.ts:9](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/config/universal.ts#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`fetchResponse` | Promise‹any› |

**Returns:** *Observable‹[ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›*

## Object literals

### `Const` REQUEST_HEADERS

### ▪ **REQUEST_HEADERS**: *object*

*Defined in [config/universal.ts:6](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/config/universal.ts#L6)*

###  Content-Type

• **Content-Type**: *string* = "application/soap+xml; charset=utf-8;"

*Defined in [config/universal.ts:6](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/config/universal.ts#L6)*
