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

*Defined in [api/types.ts:5363](https://github.com/patrickmichalina/onvif-rx/blob/1596479/src/api/types.ts#L5363)*

The search has been completed and no new results will be found.

___
<a id="queued"></a>

###  Queued

**Queued**:  = "Queued"

*Defined in [api/types.ts:5355](https://github.com/patrickmichalina/onvif-rx/blob/1596479/src/api/types.ts#L5355)*

The search is queued and not yet started.

___
<a id="searching"></a>

###  Searching

**Searching**:  = "Searching"

*Defined in [api/types.ts:5359](https://github.com/patrickmichalina/onvif-rx/blob/1596479/src/api/types.ts#L5359)*

The search is underway and not yet completed.

___
<a id="unknown"></a>

###  Unknown

**Unknown**:  = "Unknown"

*Defined in [api/types.ts:5367](https://github.com/patrickmichalina/onvif-rx/blob/1596479/src/api/types.ts#L5367)*

The state of the search is unknown. (This is not a valid response from GetSearchState.)

___

