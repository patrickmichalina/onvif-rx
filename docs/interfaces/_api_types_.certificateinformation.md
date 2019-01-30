[onvif-rx](../README.md) > ["api/types"](../modules/_api_types_.md) > [CertificateInformation](../interfaces/_api_types_.certificateinformation.md)

# Interface: CertificateInformation

Validity Range is from "NotBefore" to "NotAfter"; the corresponding DateTimeRange is from "From" to "Until"

## Hierarchy

**CertificateInformation**

## Index

### Properties

* [CertificateID](_api_types_.certificateinformation.md#certificateid)
* [ExtendedKeyUsage](_api_types_.certificateinformation.md#extendedkeyusage)
* [Extension](_api_types_.certificateinformation.md#extension)
* [IssuerDN](_api_types_.certificateinformation.md#issuerdn)
* [KeyLength](_api_types_.certificateinformation.md#keylength)
* [KeyUsage](_api_types_.certificateinformation.md#keyusage)
* [SerialNum](_api_types_.certificateinformation.md#serialnum)
* [SignatureAlgorithm](_api_types_.certificateinformation.md#signaturealgorithm)
* [SubjectDN](_api_types_.certificateinformation.md#subjectdn)
* [Validity](_api_types_.certificateinformation.md#validity)
* [Version](_api_types_.certificateinformation.md#version)

---

## Properties

<a id="certificateid"></a>

###  CertificateID

**● CertificateID**: *`string`*

*Defined in [api/types.ts:1936](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/api/types.ts#L1936)*

___
<a id="extendedkeyusage"></a>

### `<Optional>` ExtendedKeyUsage

**● ExtendedKeyUsage**: *[CertificateUsage](_api_types_.certificateusage.md)*

*Defined in [api/types.ts:1940](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/api/types.ts#L1940)*

___
<a id="extension"></a>

### `<Optional>` Extension

**● Extension**: *[CertificateInformationExtension](_api_types_.certificateinformationextension.md)*

*Defined in [api/types.ts:1946](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/api/types.ts#L1946)*

___
<a id="issuerdn"></a>

### `<Optional>` IssuerDN

**● IssuerDN**: *`undefined` \| `string`*

*Defined in [api/types.ts:1937](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/api/types.ts#L1937)*

___
<a id="keylength"></a>

### `<Optional>` KeyLength

**● KeyLength**: *`undefined` \| `number`*

*Defined in [api/types.ts:1941](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/api/types.ts#L1941)*

___
<a id="keyusage"></a>

### `<Optional>` KeyUsage

**● KeyUsage**: *[CertificateUsage](_api_types_.certificateusage.md)*

*Defined in [api/types.ts:1939](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/api/types.ts#L1939)*

___
<a id="serialnum"></a>

### `<Optional>` SerialNum

**● SerialNum**: *`undefined` \| `string`*

*Defined in [api/types.ts:1943](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/api/types.ts#L1943)*

___
<a id="signaturealgorithm"></a>

### `<Optional>` SignatureAlgorithm

**● SignatureAlgorithm**: *`undefined` \| `string`*

*Defined in [api/types.ts:1944](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/api/types.ts#L1944)*

___
<a id="subjectdn"></a>

### `<Optional>` SubjectDN

**● SubjectDN**: *`undefined` \| `string`*

*Defined in [api/types.ts:1938](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/api/types.ts#L1938)*

___
<a id="validity"></a>

### `<Optional>` Validity

**● Validity**: *[DateTimeRange](_api_types_.datetimerange.md)*

*Defined in [api/types.ts:1945](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/api/types.ts#L1945)*

___
<a id="version"></a>

### `<Optional>` Version

**● Version**: *`undefined` \| `string`*

*Defined in [api/types.ts:1942](https://github.com/patrickmichalina/onvif-rx/blob/034e4d6/src/api/types.ts#L1942)*

___

