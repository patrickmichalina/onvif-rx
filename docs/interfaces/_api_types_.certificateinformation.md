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

*Defined in [api/types.ts:2098](https://github.com/patrickmichalina/onvif-rx/blob/f117e44/src/api/types.ts#L2098)*

___
<a id="extendedkeyusage"></a>

### `<Optional>` ExtendedKeyUsage

**● ExtendedKeyUsage**: *[CertificateUsage](_api_types_.certificateusage.md)*

*Defined in [api/types.ts:2102](https://github.com/patrickmichalina/onvif-rx/blob/f117e44/src/api/types.ts#L2102)*

___
<a id="extension"></a>

### `<Optional>` Extension

**● Extension**: *[CertificateInformationExtension](_api_types_.certificateinformationextension.md)*

*Defined in [api/types.ts:2108](https://github.com/patrickmichalina/onvif-rx/blob/f117e44/src/api/types.ts#L2108)*

___
<a id="issuerdn"></a>

### `<Optional>` IssuerDN

**● IssuerDN**: *`undefined` \| `string`*

*Defined in [api/types.ts:2099](https://github.com/patrickmichalina/onvif-rx/blob/f117e44/src/api/types.ts#L2099)*

___
<a id="keylength"></a>

### `<Optional>` KeyLength

**● KeyLength**: *`undefined` \| `number`*

*Defined in [api/types.ts:2103](https://github.com/patrickmichalina/onvif-rx/blob/f117e44/src/api/types.ts#L2103)*

___
<a id="keyusage"></a>

### `<Optional>` KeyUsage

**● KeyUsage**: *[CertificateUsage](_api_types_.certificateusage.md)*

*Defined in [api/types.ts:2101](https://github.com/patrickmichalina/onvif-rx/blob/f117e44/src/api/types.ts#L2101)*

___
<a id="serialnum"></a>

### `<Optional>` SerialNum

**● SerialNum**: *`undefined` \| `string`*

*Defined in [api/types.ts:2105](https://github.com/patrickmichalina/onvif-rx/blob/f117e44/src/api/types.ts#L2105)*

___
<a id="signaturealgorithm"></a>

### `<Optional>` SignatureAlgorithm

**● SignatureAlgorithm**: *`undefined` \| `string`*

*Defined in [api/types.ts:2106](https://github.com/patrickmichalina/onvif-rx/blob/f117e44/src/api/types.ts#L2106)*

___
<a id="subjectdn"></a>

### `<Optional>` SubjectDN

**● SubjectDN**: *`undefined` \| `string`*

*Defined in [api/types.ts:2100](https://github.com/patrickmichalina/onvif-rx/blob/f117e44/src/api/types.ts#L2100)*

___
<a id="validity"></a>

### `<Optional>` Validity

**● Validity**: *[DateTimeRange](_api_types_.datetimerange.md)*

*Defined in [api/types.ts:2107](https://github.com/patrickmichalina/onvif-rx/blob/f117e44/src/api/types.ts#L2107)*

___
<a id="version"></a>

### `<Optional>` Version

**● Version**: *`undefined` \| `string`*

*Defined in [api/types.ts:2104](https://github.com/patrickmichalina/onvif-rx/blob/f117e44/src/api/types.ts#L2104)*

___

