[onvif-rx](../README.md) > ["api/types"](../modules/_api_types_.md) > [SearchState](../enums/_api_types_.searchstate.md)

# Enumeration: SearchState

The search is queued and not yet started.

## Index

### Enumeration members

* [Completed](_api_types_.searchstate.md#completed)
* [Queued](_api_types_.searchstate.md#queued)
* [Searching](_api_types_.searchstate.md#searching)
* [Unknown](_api_types_.searchstate.md#unknown)

---

## Enumeration members

<a id="completed"></a>

###  Completed

**Completed**:  = "Completed"

*Defined in [api/types.ts:5525](https://github.com/patrickmichalina/onvif-rx/blob/f117e44/src/api/types.ts#L5525)*

The search has been completed and no new results will be found.

___
<a id="queued"></a>

###  Queued

**Queued**:  = "Queued"

*Defined in [api/types.ts:5517](https://github.com/patrickmichalina/onvif-rx/blob/f117e44/src/api/types.ts#L5517)*

The search is queued and not yet started.

___
<a id="searching"></a>

###  Searching

**Searching**:  = "Searching"

*Defined in [api/types.ts:5521](https://github.com/patrickmichalina/onvif-rx/blob/f117e44/src/api/types.ts#L5521)*

The search is underway and not yet completed.

___
<a id="unknown"></a>

###  Unknown

**Unknown**:  = "Unknown"

*Defined in [api/types.ts:5529](https://github.com/patrickmichalina/onvif-rx/blob/f117e44/src/api/types.ts#L5529)*

The state of the search is unknown. (This is not a valid response from GetSearchState.)

___

