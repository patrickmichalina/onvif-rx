[onvif-rx](../README.md) › ["config/interfaces"](_config_interfaces_.md)

# Module: "config/interfaces"

## Index

### Interfaces

* [IDeviceConfig](../interfaces/_config_interfaces_.ideviceconfig.md)
* [ISystemConfig](../interfaces/_config_interfaces_.isystemconfig.md)
* [ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)
* [IUserCredentials](../interfaces/_config_interfaces_.iusercredentials.md)

### Type aliases

* [IEncodeBase64](_config_interfaces_.md#iencodebase64)
* [INonce](_config_interfaces_.md#inonce)
* [ISha1Digest](_config_interfaces_.md#isha1digest)
* [ITransport](_config_interfaces_.md#itransport)

## Type aliases

###  IEncodeBase64

Ƭ **IEncodeBase64**: *function*

*Defined in [config/interfaces.ts:11](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/config/interfaces.ts#L11)*

#### Type declaration:

▸ (`str`: string): *string*

**Parameters:**

Name | Type |
------ | ------ |
`str` | string |

___

###  INonce

Ƭ **INonce**: *function*

*Defined in [config/interfaces.ts:13](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/config/interfaces.ts#L13)*

#### Type declaration:

▸ (`size?`: undefined | number): *string*

**Parameters:**

Name | Type |
------ | ------ |
`size?` | undefined &#124; number |

___

###  ISha1Digest

Ƭ **ISha1Digest**: *function*

*Defined in [config/interfaces.ts:12](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/config/interfaces.ts#L12)*

#### Type declaration:

▸ (`str`: string): *PromiseLike‹string›*

**Parameters:**

Name | Type |
------ | ------ |
`str` | string |

___

###  ITransport

Ƭ **ITransport**: *function*

*Defined in [config/interfaces.ts:10](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/config/interfaces.ts#L10)*

#### Type declaration:

▸ (`body`: string): *function*

**Parameters:**

Name | Type |
------ | ------ |
`body` | string |

▸ (`uri`: string): *Observable‹[ITransportPayoad](../interfaces/_config_interfaces_.itransportpayoad.md)›*

**Parameters:**

Name | Type |
------ | ------ |
`uri` | string |
