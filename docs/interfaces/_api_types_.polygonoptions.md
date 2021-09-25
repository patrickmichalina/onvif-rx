[onvif-rx](../README.md) › ["api/types"](../modules/_api_types_.md) › [PolygonOptions](_api_types_.polygonoptions.md)

# Interface: PolygonOptions

True if the device supports defining a region only using Rectangle.
The rectangle points are still passed using a Polygon element if the device does not support polygon regions. In this case, the points provided in the Polygon element shall represent a rectangle.

## Hierarchy

* **PolygonOptions**

## Index

### Properties

* [RectangleOnly](_api_types_.polygonoptions.md#optional-readonly-rectangleonly)
* [VertexLimits](_api_types_.polygonoptions.md#optional-readonly-vertexlimits)

## Properties

### `Optional` `Readonly` RectangleOnly

• **RectangleOnly**? : *undefined | false | true*

*Defined in [api/types.ts:4369](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L4369)*

___

### `Optional` `Readonly` VertexLimits

• **VertexLimits**? : *[IntRange](_api_types_.intrange.md)*

*Defined in [api/types.ts:4370](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L4370)*
