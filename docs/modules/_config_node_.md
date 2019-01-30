[onvif-rx](../README.md) > ["config/node"](../modules/_config_node_.md)

# External module: "config/node"

## Index

### Variables

* [parser](_config_node_.md#parser)

### Functions

* [transport](_config_node_.md#transport)

### Object literals

* [DEFAULT_NODE_ENV](_config_node_.md#default_node_env)

---

## Variables

<a id="parser"></a>

### `<Const>` parser

**● parser**: *`DOMParser`* =  new DOMParser()

*Defined in [config/node.ts:6](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/config/node.ts#L6)*

___

## Functions

<a id="transport"></a>

### `<Const>` transport

▸ **transport**(body: *`string`*): `(Anonymous function)`

*Defined in [config/node.ts:7](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/config/node.ts#L7)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| body | `string` |

**Returns:** `(Anonymous function)`

___

## Object literals

<a id="default_node_env"></a>

### `<Const>` DEFAULT_NODE_ENV

**DEFAULT_NODE_ENV**: *`object`*

*Defined in [config/node.ts:12](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/config/node.ts#L12)*

<a id="default_node_env.buffer"></a>

####  buffer

**● buffer**: *`object`* =  Buffer

*Defined in [config/node.ts:17](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/config/node.ts#L17)*

#### Type declaration

 constructor : function
⊕ **new __type**(str: *`string`*, encoding?: *`undefined` \| `string`*): `Buffer`

⊕ **new __type**(size: *`number`*): `Buffer`

⊕ **new __type**(array: *`Uint8Array`*): `Buffer`

⊕ **new __type**(arrayBuffer: *`ArrayBuffer` \| `SharedArrayBuffer`*): `Buffer`

⊕ **new __type**(array: *`any`[]*): `Buffer`

⊕ **new __type**(buffer: *`Buffer`*): `Buffer`

*Defined in /Users/patrick/Code/onvif-rx/node_modules/@types/node/index.d.ts:366*

Allocates a new buffer containing the given {str}.

*__deprecated__*:
 since v10.0.0 - Use `Buffer.from(string[, encoding])` instead.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| str | `string` |  String to store in buffer. |
| `Optional` encoding | `undefined` \| `string` |  encoding to use, optional. Default is 'utf8' |

**Returns:** `Buffer`

*Defined in /Users/patrick/Code/onvif-rx/node_modules/@types/node/index.d.ts:374*

Allocates a new buffer of {size} octets.

*__deprecated__*:
 since v10.0.0 - Use `Buffer.alloc()` instead (also see `Buffer.allocUnsafe()`).

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| size | `number` |  count of octets to allocate. |

**Returns:** `Buffer`

*Defined in /Users/patrick/Code/onvif-rx/node_modules/@types/node/index.d.ts:381*

Allocates a new buffer containing the given {array} of octets.

*__deprecated__*:
 since v10.0.0 - Use `Buffer.from(array)` instead.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| array | `Uint8Array` |  The octets to store. |

**Returns:** `Buffer`

*Defined in /Users/patrick/Code/onvif-rx/node_modules/@types/node/index.d.ts:388*

Produces a Buffer backed by the same allocated memory as the given {ArrayBuffer}/{SharedArrayBuffer}.

*__deprecated__*:
 since v10.0.0 - Use `Buffer.from(arrayBuffer[, byteOffset[, length]])` instead.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| arrayBuffer | `ArrayBuffer` \| `SharedArrayBuffer` |  The ArrayBuffer with which to share memory. |

**Returns:** `Buffer`

*Defined in /Users/patrick/Code/onvif-rx/node_modules/@types/node/index.d.ts:397*

Allocates a new buffer containing the given {array} of octets.

*__deprecated__*:
 since v10.0.0 - Use `Buffer.from(array)` instead.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| array | `any`[] |  The octets to store. |

**Returns:** `Buffer`

*Defined in /Users/patrick/Code/onvif-rx/node_modules/@types/node/index.d.ts:404*

Copies the passed {buffer} data onto a new {Buffer} instance.

*__deprecated__*:
 since v10.0.0 - Use `Buffer.from(buffer)` instead.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| buffer | `Buffer` |  The buffer to copy. |

**Returns:** `Buffer`

 poolSize: `number`

This is the number of bytes used to determine the size of pre-allocated, internal Buffer instances used for pooling. This value may be modified.

 prototype: `Buffer`

 alloc : function
▸ **alloc**(size: *`number`*, fill?: *`string` \| `Buffer` \| `number`*, encoding?: *`undefined` \| `string`*): `Buffer`

*Defined in /Users/patrick/Code/onvif-rx/node_modules/@types/node/index.d.ts:484*

Allocates a new buffer of {size} octets.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| size | `number` |  count of octets to allocate. |
| `Optional` fill | `string` \| `Buffer` \| `number` |  if specified, buffer will be initialized by calling buf.fill(fill). If parameter is omitted, buffer will be filled with zeros. |
| `Optional` encoding | `undefined` \| `string` |  encoding used for call to buf.fill while initalizing |

**Returns:** `Buffer`

 allocUnsafe : function
▸ **allocUnsafe**(size: *`number`*): `Buffer`

*Defined in /Users/patrick/Code/onvif-rx/node_modules/@types/node/index.d.ts:491*

Allocates a new buffer of {size} octets, leaving memory not initialized, so the contents of the newly created Buffer are unknown and may contain sensitive data.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| size | `number` |  count of octets to allocate |

**Returns:** `Buffer`

 allocUnsafeSlow : function
▸ **allocUnsafeSlow**(size: *`number`*): `Buffer`

*Defined in /Users/patrick/Code/onvif-rx/node_modules/@types/node/index.d.ts:498*

Allocates a new non-pooled buffer of {size} octets, leaving memory not initialized, so the contents of the newly created Buffer are unknown and may contain sensitive data.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| size | `number` |  count of octets to allocate |

**Returns:** `Buffer`

 byteLength : function
▸ **byteLength**(string: *`string` \| `NodeJS.TypedArray` \| `DataView` \| `ArrayBuffer` \| `SharedArrayBuffer`*, encoding?: *`undefined` \| `string`*): `number`

*Defined in /Users/patrick/Code/onvif-rx/node_modules/@types/node/index.d.ts:459*

Gives the actual byte length of a string. encoding defaults to 'utf8'. This is not the same as String.prototype.length since that returns the number of characters in a string.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| string | `string` \| `NodeJS.TypedArray` \| `DataView` \| `ArrayBuffer` \| `SharedArrayBuffer` |  string to test. |
| `Optional` encoding | `undefined` \| `string` |  encoding used to evaluate (defaults to 'utf8') |

**Returns:** `number`

 compare : function
▸ **compare**(buf1: *`Uint8Array`*, buf2: *`Uint8Array`*): `number`

*Defined in /Users/patrick/Code/onvif-rx/node_modules/@types/node/index.d.ts:475*

The same as buf1.compare(buf2).

**Parameters:**

| Name | Type |
| ------ | ------ |
| buf1 | `Uint8Array` |
| buf2 | `Uint8Array` |

**Returns:** `number`

 concat : function
▸ **concat**(list: *`Uint8Array`[]*, totalLength?: *`undefined` \| `number`*): `Buffer`

*Defined in /Users/patrick/Code/onvif-rx/node_modules/@types/node/index.d.ts:471*

Returns a buffer which is the result of concatenating all the buffers in the list together.

If the list has no items, or if the totalLength is 0, then it returns a zero-length buffer. If the list has exactly one item, then the first item of the list is returned. If the list has more than one item, then a new Buffer is created.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| list | `Uint8Array`[] |  An array of Buffer objects to concatenate |
| `Optional` totalLength | `undefined` \| `number` |  Total length of the buffers when concatenated. If totalLength is not provided, it is read from the buffers in the list. However, this adds an additional loop to the function, so it is faster to provide the length explicitly. |

**Returns:** `Buffer`

 from : function
▸ **from**(arrayBuffer: *`ArrayBuffer` \| `SharedArrayBuffer`*, byteOffset?: *`undefined` \| `number`*, length?: *`undefined` \| `number`*): `Buffer`

▸ **from**(data: *`any`[]*): `Buffer`

▸ **from**(data: *`Uint8Array`*): `Buffer`

▸ **from**(str: *`string`*, encoding?: *`undefined` \| `string`*): `Buffer`

*Defined in /Users/patrick/Code/onvif-rx/node_modules/@types/node/index.d.ts:421*

When passed a reference to the .buffer property of a TypedArray instance, the newly created Buffer will share the same allocated memory as the TypedArray. The optional {byteOffset} and {length} arguments specify a memory range within the {arrayBuffer} that will be shared by the Buffer.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| arrayBuffer | `ArrayBuffer` \| `SharedArrayBuffer` |  The .buffer property of any TypedArray or a new ArrayBuffer() |
| `Optional` byteOffset | `undefined` \| `number` |
| `Optional` length | `undefined` \| `number` |

**Returns:** `Buffer`

*Defined in /Users/patrick/Code/onvif-rx/node_modules/@types/node/index.d.ts:426*

Creates a new Buffer using the passed {data}

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| data | `any`[] |  data to create a new Buffer |

**Returns:** `Buffer`

*Defined in /Users/patrick/Code/onvif-rx/node_modules/@types/node/index.d.ts:427*

**Parameters:**

| Name | Type |
| ------ | ------ |
| data | `Uint8Array` |

**Returns:** `Buffer`

*Defined in /Users/patrick/Code/onvif-rx/node_modules/@types/node/index.d.ts:433*

Creates a new Buffer containing the given JavaScript string {str}. If provided, the {encoding} parameter identifies the character encoding. If not provided, {encoding} defaults to 'utf8'.

**Parameters:**

| Name | Type |
| ------ | ------ |
| str | `string` |
| `Optional` encoding | `undefined` \| `string` |

**Returns:** `Buffer`

 isBuffer : function
▸ **isBuffer**(obj: *`any`*): `boolean`

*Defined in /Users/patrick/Code/onvif-rx/node_modules/@types/node/index.d.ts:444*

Returns true if {obj} is a Buffer

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| obj | `any` |  object to test. |

**Returns:** `boolean`

 isEncoding : function
▸ **isEncoding**(encoding: *`string`*): `boolean` \| `undefined`

*Defined in /Users/patrick/Code/onvif-rx/node_modules/@types/node/index.d.ts:451*

Returns true if {encoding} is a valid encoding argument. Valid string encodings in Node 0.12: 'ascii'\|'utf8'\|'utf16le'\|'ucs2'(alias of 'utf16le')\|'base64'\|'binary'(deprecated)\|'hex'

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| encoding | `string` |  string to test. |

**Returns:** `boolean` \| `undefined`

 of : function
▸ **of**(...items: *`number`[]*): `Buffer`

*Defined in /Users/patrick/Code/onvif-rx/node_modules/@types/node/index.d.ts:438*

Creates a new Buffer using the passed {data}

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` items | `number`[] |

**Returns:** `Buffer`

___
<a id="default_node_env.digestsha1"></a>

####  digestSha1

**● digestSha1**: *`function`*

*Defined in [config/node.ts:16](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/config/node.ts#L16)*

#### Type declaration
▸(str: *`string`*): `string`

**Parameters:**

| Name | Type |
| ------ | ------ |
| str | `string` |

**Returns:** `string`

___
<a id="default_node_env.nonce"></a>

####  nonce

**● nonce**: *`function`*

*Defined in [config/node.ts:15](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/config/node.ts#L15)*

#### Type declaration
▸(size?: *`undefined` \| `number`*): `string`

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` size | `undefined` \| `number` |

**Returns:** `string`

___
<a id="default_node_env.parser-1"></a>

####  parser

**● parser**: *`DOMParser`*

*Defined in [config/node.ts:13](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/config/node.ts#L13)*

___
<a id="default_node_env.transport-1"></a>

####  transport

**● transport**: *[transport]()*

*Defined in [config/node.ts:14](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/config/node.ts#L14)*

___

___

