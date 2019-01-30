[onvif-rx](../README.md) > ["node"](../modules/_node_.md)

# External module: "node"

## Index

### Variables

* [device](_node_.md#device)

### Functions

* [createManagedDeviceInNode](_node_.md#createmanageddeviceinnode)

---

## Variables

<a id="device"></a>

### `<Const>` device

**● device**: *[IManagedDevice](../interfaces/_manage_device_.imanageddevice.md)* =  createManagedDeviceInNode({
  deviceUrl: 'http://192.168.1.172/onvif/device_service',
  password: 'admin',
  username: 'admin'
})

*Defined in [node.ts:15](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/node.ts#L15)*

___

## Functions

<a id="createmanageddeviceinnode"></a>

### `<Const>` createManagedDeviceInNode

▸ **createManagedDeviceInNode**(config: *[IDeviceInitConfig](../interfaces/_manage_device_.ideviceinitconfig.md)*): [IManagedDevice](../interfaces/_manage_device_.imanageddevice.md)

*Defined in [node.ts:10](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/node.ts#L10)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| config | [IDeviceInitConfig](../interfaces/_manage_device_.ideviceinitconfig.md) |

**Returns:** [IManagedDevice](../interfaces/_manage_device_.imanageddevice.md)

___

