[onvif-rx](../README.md) > ["api/types"](../modules/_api_types_.md) > [TimeZone](../interfaces/_api_types_.timezone.md)

# Interface: TimeZone

```
            The TZ format is specified by POSIX, please refer to POSIX 1003.1 section 8.3
            Example: Europe, Paris TZ=CET-1CEST,M3.5.0/2,M10.5.0/3
            CET = designation for standard time when daylight saving is not in force
            -1 = offset in hours = negative so 1 hour east of Greenwich meridian
            CEST = designation when daylight saving is in force ("Central European Summer Time")
            , = no offset number between code and comma, so default to one hour ahead for daylight saving
            M3.5.0 = when daylight saving starts = the last Sunday in March (the "5th" week means the last in the month)
            /2, = the local time when the switch occurs = 2 a.m. in this case
            M10.5.0 = when daylight saving ends = the last Sunday in October.
            /3, = the local time when the switch occurs = 3 a.m. in this case
```

## Hierarchy

**TimeZone**

## Index

### Properties

* [TZ](_api_types_.timezone.md#tz)

---

## Properties

<a id="tz"></a>

###  TZ

**● TZ**: *`string`*

*Defined in [api/types.ts:1862](https://github.com/patrickmichalina/onvif-rx/blob/3ab1739/src/api/types.ts#L1862)*

___

