[onvif-rx](../README.md) › ["api/types"](../modules/_api_types_.md) › [CertificateInformation](_api_types_.certificateinformation.md)

# Interface: CertificateInformation

Validity Range is from "NotBefore" to "NotAfter"; the corresponding DateTimeRange is from "From" to "Until"

## Hierarchy

* **CertificateInformation**

## Index

### Properties

* [CertificateID](_api_types_.certificateinformation.md#readonly-certificateid)
* [ExtendedKeyUsage](_api_types_.certificateinformation.md#optional-readonly-extendedkeyusage)
* [Extension](_api_types_.certificateinformation.md#optional-readonly-extension)
* [IssuerDN](_api_types_.certificateinformation.md#optional-readonly-issuerdn)
* [KeyLength](_api_types_.certificateinformation.md#optional-readonly-keylength)
* [KeyUsage](_api_types_.certificateinformation.md#optional-readonly-keyusage)
* [SerialNum](_api_types_.certificateinformation.md#optional-readonly-serialnum)
* [SignatureAlgorithm](_api_types_.certificateinformation.md#optional-readonly-signaturealgorithm)
* [SubjectDN](_api_types_.certificateinformation.md#optional-readonly-subjectdn)
* [Validity](_api_types_.certificateinformation.md#optional-readonly-validity)
* [Version](_api_types_.certificateinformation.md#optional-readonly-version)

## Properties

### `Readonly` CertificateID

• **CertificateID**: *string*

*Defined in [api/types.ts:2127](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L2127)*

___

### `Optional` `Readonly` ExtendedKeyUsage

• **ExtendedKeyUsage**? : *[CertificateUsage](_api_types_.certificateusage.md)*

*Defined in [api/types.ts:2131](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L2131)*

___

### `Optional` `Readonly` Extension

• **Extension**? : *[CertificateInformationExtension](_api_types_.certificateinformationextension.md)*

*Defined in [api/types.ts:2137](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L2137)*

___

### `Optional` `Readonly` IssuerDN

• **IssuerDN**? : *undefined | string*

*Defined in [api/types.ts:2128](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L2128)*

___

### `Optional` `Readonly` KeyLength

• **KeyLength**? : *undefined | number*

*Defined in [api/types.ts:2132](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L2132)*

___

### `Optional` `Readonly` KeyUsage

• **KeyUsage**? : *[CertificateUsage](_api_types_.certificateusage.md)*

*Defined in [api/types.ts:2130](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L2130)*

___

### `Optional` `Readonly` SerialNum

• **SerialNum**? : *undefined | string*

*Defined in [api/types.ts:2134](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L2134)*

___

### `Optional` `Readonly` SignatureAlgorithm

• **SignatureAlgorithm**? : *undefined | string*

*Defined in [api/types.ts:2135](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L2135)*

___

### `Optional` `Readonly` SubjectDN

• **SubjectDN**? : *undefined | string*

*Defined in [api/types.ts:2129](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L2129)*

___

### `Optional` `Readonly` Validity

• **Validity**? : *[DateTimeRange](_api_types_.datetimerange.md)*

*Defined in [api/types.ts:2136](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L2136)*

___

### `Optional` `Readonly` Version

• **Version**? : *undefined | string*

*Defined in [api/types.ts:2133](https://github.com/patrickmichalina/onvif-rx/blob/3e9b152/src/api/types.ts#L2133)*
