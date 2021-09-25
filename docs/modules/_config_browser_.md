[onvif-rx](../README.md) › ["config/browser"](_config_browser_.md)

# Module: "config/browser"

## Index

### Functions

* [digestSha1](_config_browser_.md#const-digestsha1)
* [transport](_config_browser_.md#const-transport)

### Object literals

* [DEFAULT_BROWSER_ENV](_config_browser_.md#const-default_browser_env)

## Functions

### `Const` digestSha1

▸ **digestSha1**(`data`: string): *PromiseLike‹string›*

*Defined in [config/browser.ts:5](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/config/browser.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | string |

**Returns:** *PromiseLike‹string›*

___

### `Const` transport

▸ **transport**(`body`: string): *(Anonymous function)*

*Defined in [config/browser.ts:10](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/config/browser.ts#L10)*

**Parameters:**

Name | Type |
------ | ------ |
`body` | string |

**Returns:** *(Anonymous function)*

## Object literals

### `Const` DEFAULT_BROWSER_ENV

### ▪ **DEFAULT_BROWSER_ENV**: *object*

*Defined in [config/browser.ts:15](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/config/browser.ts#L15)*

###  buffer

• **buffer**: *Buffer* = Buffer

*Defined in [config/browser.ts:20](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/config/browser.ts#L20)*

###  digestSha1

• **digestSha1**: *[digestSha1](_config_browser_.md#const-digestsha1)*

*Defined in [config/browser.ts:18](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/config/browser.ts#L18)*

###  nonce

• **nonce**: *function*

*Defined in [config/browser.ts:17](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/config/browser.ts#L17)*

#### Type declaration:

▸ (`size?`: undefined | number): *string*

**Parameters:**

Name | Type |
------ | ------ |
`size?` | undefined &#124; number |

###  parser

• **parser**: *DOMParser* = typeof DOMParser !== 'undefined' ? new DOMParser() : {} as DOMParser

*Defined in [config/browser.ts:16](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/config/browser.ts#L16)*

###  transport

• **transport**: *[transport](_config_browser_.md#const-transport)*

*Defined in [config/browser.ts:19](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/config/browser.ts#L19)*
