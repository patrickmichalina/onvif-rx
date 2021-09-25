[onvif-rx](../README.md) › ["api/types"](../modules/_api_types_.md) › [SearchState](_api_types_.searchstate.md)

# Enumeration: SearchState

The search is queued and not yet started.

## Index

### Enumeration members

* [Completed](_api_types_.searchstate.md#completed)
* [Queued](_api_types_.searchstate.md#queued)
* [Searching](_api_types_.searchstate.md#searching)
* [Unknown](_api_types_.searchstate.md#unknown)

## Enumeration members

###  Completed

• **Completed**: = "Completed"

*Defined in [api/types.ts:5701](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L5701)*

The search has been completed and no new results will be found.

___

###  Queued

• **Queued**: = "Queued"

*Defined in [api/types.ts:5693](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L5693)*

The search is queued and not yet started.

___

###  Searching

• **Searching**: = "Searching"

*Defined in [api/types.ts:5697](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L5697)*

The search is underway and not yet completed.

___

###  Unknown

• **Unknown**: = "Unknown"

*Defined in [api/types.ts:5705](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L5705)*

The state of the search is unknown. (This is not a valid response from GetSearchState.)
