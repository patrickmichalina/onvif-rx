[onvif-rx](../README.md) › ["config/node"](_config_node_.md)

# Module: "config/node"

## Index

### Variables

* [parser](_config_node_.md#const-parser)

### Functions

* [digestSha1](_config_node_.md#const-digestsha1)
* [getContent](_config_node_.md#const-getcontent)
* [soapFault](_config_node_.md#const-soapfault)
* [transport](_config_node_.md#const-transport)

### Object literals

* [DEFAULT_NODE_ENV](_config_node_.md#const-default_node_env)

## Variables

### `Const` parser

• **parser**: *DOMParser* = new DOMParser()

*Defined in [config/node.ts:62](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/config/node.ts#L62)*

## Functions

### `Const` digestSha1

▸ **digestSha1**(`str`: string): *Promise‹string›*

*Defined in [config/node.ts:36](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/config/node.ts#L36)*

**Parameters:**

Name | Type |
------ | ------ |
`str` | string |

**Returns:** *Promise‹string›*

___

### `Const` getContent

▸ **getContent**(`url`: string, `body`: string): *Observable‹RxHttpRequestResponse‹any››*

*Defined in [config/node.ts:38](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/config/node.ts#L38)*

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |
`body` | string |

**Returns:** *Observable‹RxHttpRequestResponse‹any››*

___

### `Const` soapFault

▸ **soapFault**(`code`: number, `reason`: string, `detail`: string): *string*

*Defined in [config/node.ts:9](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/config/node.ts#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`code` | number |
`reason` | string |
`detail` | string |

**Returns:** *string*

___

### `Const` transport

▸ **transport**(`body`: string): *(Anonymous function)*

*Defined in [config/node.ts:63](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/config/node.ts#L63)*

**Parameters:**

Name | Type |
------ | ------ |
`body` | string |

**Returns:** *(Anonymous function)*

## Object literals

### `Const` DEFAULT_NODE_ENV

### ▪ **DEFAULT_NODE_ENV**: *object*

*Defined in [config/node.ts:74](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/config/node.ts#L74)*

###  buffer

• **buffer**: *Buffer* = Buffer

*Defined in [config/node.ts:79](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/config/node.ts#L79)*

###  digestSha1

• **digestSha1**: *[digestSha1](_config_browser_.md#const-digestsha1)*

*Defined in [config/node.ts:78](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/config/node.ts#L78)*

###  nonce

• **nonce**: *function*

*Defined in [config/node.ts:77](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/config/node.ts#L77)*

#### Type declaration:

▸ (`size?`: undefined | number): *string*

**Parameters:**

Name | Type |
------ | ------ |
`size?` | undefined &#124; number |

###  parser

• **parser**: *DOMParser*

*Defined in [config/node.ts:75](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/config/node.ts#L75)*

###  transport

• **transport**: *[transport](_config_browser_.md#const-transport)*

*Defined in [config/node.ts:76](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/config/node.ts#L76)*
