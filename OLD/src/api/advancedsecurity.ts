import { createStandardRequestBodyFromString, mapResponseXmlToJson, generateRequestElements, mapResponseObsToProperty } from "../soap/request";
import { IDeviceConfig } from "../config";
import "./types";

export class ONVIFAdvancedSecurity {
    constructor(private config: IDeviceConfig) {
    }

    /**
     * Returns the capabilities of the security configuraiton service. The result is returned in a typed answer.
     */
    static GetServiceCapabilities() {
        return createStandardRequestBodyFromString(generateRequestElements('tas:GetServiceCapabilities')({}))
                        .map(mapResponseXmlToJson<any>('tas:GetServiceCapabilitiesResponse'))
                      
    }

    /**
     * 
     *   This operation triggers the asynchronous generation of an RSA key pair of a particular key length (specified as the number of bits) as specified in [RFC 3447], with a suitable key generation mechanism on the device.
     *   Keys, especially RSA key pairs, are uniquely identified using key IDs.
     *   If the device does not have not enough storage capacity for storing the key pair to be created, the maximum number of keys reached fault shall be produced and no key pair shall be generated.
     *   Otherwise, the operation generates a keyID for the new key and associates the generating status to it.
     *   Immediately after key generation has started, the device shall return the keyID to the client and continue to generate the key pair.
     *   The client may query the device with the GetKeyStatus operation whether the generation has finished.
     *   The client may also subscribe to Key Status events to be notified about key status changes.
     *   The device also returns a best-effort estimate of how much time it requires to create the key pair.
     *   A client may use this information as an indication how long to wait before querying the device whether key generation is completed.
     *   After the key has been successfully created, the device shall assign it the ok status. If the key generation fails, the device shall assign the key the corrupt status.
     *   
     */
    static CreateRSAKeyPair() {
        return createStandardRequestBodyFromString(generateRequestElements('tas:CreateRSAKeyPair')({}))
                        .map(mapResponseXmlToJson<any>('tas:CreateRSAKeyPairResponse'))
                      
    }

    /**
     * 
     *           This operation uploads a key pair in a PKCS#8 data structure as specified in [RFC 5958, RFC 5959].
     *           If an encryption passphrase ID is supplied in the request, the device shall assume that the KeyPair parameter contains an EncryptedPrivateKeyInfo ASN.1
     *           structure that is encrypted under the passphrase in the keystore that corresponds to the supplied ID, where the EncryptedPrivateKeyInfo structure contains
     *           both the private key and the corresponding public key. If no encryption passphrase ID is supplied, the device shall assume that the KeyPair parameter contains a
     *           OneAsymmetricKey ASN.1 structure which contains both the private key and the corresponding public key.
     *         
     */
    static UploadKeyPairInPKCS8() {
        return createStandardRequestBodyFromString(generateRequestElements('tas:UploadKeyPairInPKCS8')({}))
                        .map(mapResponseXmlToJson<any>('tas:UploadKeyPairInPKCS8Response'))
                      
    }

    /**
     * 
     *           This operation uploads a certification path consisting of X.509 certificates as specified by [RFC 5280] in DER encoding along with a private key to a device’s keystore.
     *           Certificates and private key are supplied in the form of a PKCS#12 file as specified in [PKCS#12].
     *           The device shall support PKCS#12 files that contain the following safe bags:
     *           one or more instances of CertBag [PKCS#12, Sect. 4.2.3]
     *           either exactly one instance of KeyBag [PKCS#12, Sect. 4.3.1] or exactly one instance of PKCS8ShroudedKeyBag [PKCS#12, Sect. 4.2.2].
     *           If the IgnoreAdditionalCertificates parameter has the value true, the device shall behave as if the client had supplied only the first CertBag in the sequence of CertBag instances.
     *           The device shall support PKCS#12 passphrase integrity mode for integrity protection of the PKCS#12 PFX as specified in [PKCS#12, Sect. 4].
     *           The device shall support PKCS8ShroudedKeyBags that are encrypted with the same passphrase as the CertBag instances.
     *           If an integrity passphrase ID is supplied, the device shall use the corresponding passphrase in the keystore to check the integrity of the supplied PKCS#12 PFX.
     *           If an integrity passphrase ID is supplied, but the supplied PKCS#12 PFX has no integrity protection, the device shall produce a BadPKCS12File fault and shall
     *           not store the uploaded certificates nor the uploaded key pair in the keystore.
     *           If an encryption passphrase ID is supplied, the device shall use the corresponding passphrase in the keystore to decrypt the PKCS8ShroudedKeyBag and the CertBag instances.
     *           If an EncryptionPassphraseID is supplied, but a CertBag is not encrypted, the device shall ignore the supplied EncryptionPassphraseID when processing this CertBag.
     *           If an EncryptionPassphraseID is supplied, but a KeyBag is provided instead of a PKCS8ShroudedKeyBag, the device shall ignore the supplied EncryptionPassphraseID when processing the KeyBag.
     *         
     */
    static UploadCertificateWithPrivateKeyInPKCS12() {
        return createStandardRequestBodyFromString(generateRequestElements('tas:UploadCertificateWithPrivateKeyInPKCS12')({}))
                        .map(mapResponseXmlToJson<any>('tas:UploadCertificateWithPrivateKeyInPKCS12Response'))
                      
    }

    /**
     * 
     *   This operation returns the status of a key.
     *   Keys are uniquely identified using key IDs. If no key is stored under the requested key ID in the keystore, an InvalidKeyID fault is produced.
     *   Otherwise, the status of the key is returned.
     *   
     */
    static GetKeyStatus() {
        return createStandardRequestBodyFromString(generateRequestElements('tas:GetKeyStatus')({}))
                        .map(mapResponseXmlToJson<any>('tas:GetKeyStatusResponse'))
                      
    }

    /**
     * 
     *   This operation returns whether a key pair contains a private key.
     *   Keys are uniquely identified using key IDs. If no key is stored under the requested key ID in the keystore or the key identified by the requested key ID does not identify a key pair,
     *   the device shall produce an InvalidKeyID fault.
     *   Otherwise, this operation returns true if the key pair identified by the key ID contains a private key, and false otherwise.
     *   
     */
    static GetPrivateKeyStatus() {
        return createStandardRequestBodyFromString(generateRequestElements('tas:GetPrivateKeyStatus')({}))
                        .map(mapResponseXmlToJson<any>('tas:GetPrivateKeyStatusResponse'))
                      
    }

    /**
     * 
     *   This operation returns information about all keys that are stored in the device’s keystore.
     *   This operation may be used, e.g., if a client lost track of which keys are present on the device.
     *   If no key is stored on the device, an empty list is returned.
     *   
     */
    static GetAllKeys() {
        return createStandardRequestBodyFromString(generateRequestElements('tas:GetAllKeys')({}))
                        .map(mapResponseXmlToJson<any>('tas:GetAllKeysResponse'))
                      
    }

    /**
     * 
     *   This operation deletes a key from the device’s keystore.
     *   Keys are uniquely identified using key IDs. If no key is stored under the requested key ID in the keystore, a device shall produce an InvalidArgVal fault.
     *   If a reference exists for the specified key, a device shall produce the corresponding fault and shall not delete the key.
     *   If there is a key under the requested key ID stored in the keystore and the key could not be deleted, a device shall produce a KeyDeletion fault.
     *   If the key has the status generating, a device shall abort the generation of the key and delete from the keystore all data generated for this key.
     *   After a key is successfully deleted, the device may assign its former ID to other keys.
     *   
     */
    static DeleteKey() {
        return createStandardRequestBodyFromString(generateRequestElements('tas:DeleteKey')({}))
                        .map(mapResponseXmlToJson<any>('tas:DeleteKeyResponse'))
                      
    }

    /**
     * 
     *   This operation generates a DER-encoded PKCS#10 v1.7 certification request (sometimes also called certificate signing request or CSR) as specified in RFC 2986 
     *   for a public key on the device.
     *   The key pair that contains the public key for which a certification request shall be produced is specified by its key ID.
     *   If no key is stored under the requested KeyID or the key specified by the requested KeyID is not an asymmetric key pair, an invalid key ID fault shall be produced and 
     *   no CSR shall be generated.
     *   
     *   A device that supports this command shall as minimum support the sha-1WithRSAEncryption signature algorithm as specified in RFC 3279. 
     *   If the specified signature algorithm is not supported by the device, an UnsupportedSignatureAlgorithm fault shall be produced and no CSR shall be generated.
     *   
     *   If the public key identified by the requested Key ID is an invalid input to the specified signature algorithm, a KeySignatureAlgorithmMismatch fault shall be produced 
     *   and no CSR shall be generated.
     *   If the key pair does not have status ok, a device shall produce an InvalidKeyStatus fault and no CSR shall be generated.
     *   
     */
    static CreatePKCS10CSR() {
        return createStandardRequestBodyFromString(generateRequestElements('tas:CreatePKCS10CSR')({}))
                        .map(mapResponseXmlToJson<any>('tas:CreatePKCS10CSRResponse'))
                      
    }

    /**
     * 
     *   This operation generates for a public key on the device a self-signed X.509 certificate that complies to RFC 5280.
     *   The X509Version parameter specifies the version of X.509 that the generated certificate shall comply to.
     *   A device that supports this command shall support the generation of X.509v3 certificates as specified in RFC 5280 and may additionally be able to handle other X.509 certificate formats
     *   as indicated by the X.509Versions capability.
     *   The key pair that contains the public key for which a self-signed certificate shall be produced is specified by its key pair ID.
     *   The subject parameter describes the entity that the public key belongs to.
     *   If the key pair does not have status ok, a device shall produce an InvalidKeyStatus fault and no certificate shall be generated.
     *   
     *   The signature algorithm parameter determines which signature algorithm shall be used for signing the certification request with the public key specified by the key ID parameter.
     *   A device that supports this command shall as minimum support the sha-1WithRSAEncryption signature algorithm as specified in RFC 3279. 
     *   The Extensions parameter specifies potential X509v3 extensions that shall be contained in the certificate.
     *   A device that supports this command shall support the extensions that are defined in [RFC 5280], Sect. 4.2] as mandatory for CAs that issue self-signed certificates.
     *   
     *   Certificates are uniquely identified using certificate IDs. If the command was successful, the device generates a new ID for the generated certificate and returns this ID.
     *   If the device does not have not enough storage capacity for storing the certificate to be created, the maximum number of certificates reached fault shall be produced and no certificate shall be generated.
     *   
     */
    static CreateSelfSignedCertificate() {
        return createStandardRequestBodyFromString(generateRequestElements('tas:CreateSelfSignedCertificate')({}))
                        .map(mapResponseXmlToJson<any>('tas:CreateSelfSignedCertificateResponse'))
                      
    }

    /**
     * 
     *   This operation uploads an X.509 certificate as specified by [RFC 5280] in DER encoding and the public key in the certificate to a device’s keystore.
     *   A device that supports this command shall be able to handle X.509v3 certificates as specified in RFC 5280 and may additionally be able to handle other X.509 certificate formats as indicated by the X.509Versions capability.
     *   A device that supports this command shall support sha1-WithRSAEncryption as certificate signature algorithm.
     *   
     *   Certificates are uniquely identified using certificate IDs, and key pairs are uniquely identified using key IDs.
     *   The device shall generate a new certificate ID for the uploaded certificate.
     *   Certain certificate usages, e.g. TLS server authentication, require the private key that corresponds to the public key in the certificate to be present in the keystore.
     *   In such cases, the client may indicate that it expects the device to produce a fault if the matching private key for
     *   the uploaded certificate is not present in the keystore by setting the PrivateKeyRequired argument in the upload request to true.
     *   
     *   The uploaded certificate has to be linked to a key pair in the keystore.
     *   If no private key is required for the public key in the certificate and a key pair exists in the keystore with a public key equal to the public key in the certificate,
     *   the uploaded certificate is linked to the key pair identified by the supplied key ID by adding a reference from the certificate to the key pair.
     *   If no private key is required for the public key in the certificate and no key pair exists with the public key equal to the public key in the certificate,
     *   a new key pair with status ok is created with the public key from the certificate, and this key pair is linked to the uploaded certificate by adding a reference from 
     *   the certificate to the key pair.
     *   If a private key is required for the public key in the certificate, and a key pair exists in the keystore with a private key that matches the public key in the certificate,
     *   the uploaded certificate is linked to this keypair by adding a reference from the certificate to the key pair.
     *   If a private key is required for the public key and no such keypair exists in the keystore, the NoMatchingPrivateKey fault shall be produced and the certificate
     *   shall not be stored in the keystore.
     *   If the key pair that the certificate shall be linked to does not have status ok, an InvalidKeyID fault is produced, and the uploaded certificate is not stored in the keystore.
     *   If the device cannot process the uploaded certificate, a BadCertificate fault is produced and neither the uploaded certificate nor the public key are stored in the device’s keystore.
     *   The BadCertificate fault shall not be produced based on the mere fact that the device’s current time lies outside the interval defined by the notBefore and notAfter fields as specified by [RFC 5280], Sect. 4.1 .
     *   This operation shall not mark the uploaded certificate as trusted.
     *   
     *   If the device does not have not enough storage capacity for storing the certificate to be uploaded, the maximum number of certificates reached fault shall be produced
     *   and no certificate shall be uploaded.
     *   If the device does not have not enough storage capacity for storing the key pair that eventually has to be created, the device shall generate a maximum number of keys reached fault.
     *   Furthermore the device shall not generate a key pair and no certificate shall be stored.
     *   
     */
    static UploadCertificate() {
        return createStandardRequestBodyFromString(generateRequestElements('tas:UploadCertificate')({}))
                        .map(mapResponseXmlToJson<any>('tas:UploadCertificateResponse'))
                      
    }

    /**
     * 
     *   This operation returns a specific certificate from the device’s keystore.
     *   Certificates are uniquely identified using certificate IDs. If no certificate is stored under the requested certificate ID in the keystore, an InvalidArgVal fault is produced.
     *   It shall be noted that this command does not return the private key that is associated to the public key in the certificate.
     *   
     */
    static GetCertificate() {
        return createStandardRequestBodyFromString(generateRequestElements('tas:GetCertificate')({}))
                        .map(mapResponseXmlToJson<any>('tas:GetCertificateResponse'))
                      
    }

    /**
     * 
     *   This operation returns the IDs of all certificates that are stored in the device’s keystore.
     *   This operation may be used, e.g.,  if a client lost track of which certificates are present on the device.
     *   If no certificate is stored in the device’s keystore, an empty list is returned.
     *   
     */
    static GetAllCertificates() {
        return createStandardRequestBodyFromString(generateRequestElements('tas:GetAllCertificates')({}))
                        .map(mapResponseXmlToJson<any>('tas:GetAllCertificatesResponse'))
                      
    }

    /**
     * 
     *   This operation deletes a certificate from the device’s keystore.
     *   The operation shall not delete the public key that is contained in the certificate from the keystore.
     *   Certificates are uniquely identified using certificate IDs. If no certificate is stored under the requested certificate ID in the keystore, an InvalidArgVal fault is produced.
     *   If there is a certificate under the requested certificate ID stored in the keystore and the certificate could not be deleted, a CertificateDeletion fault is produced.
     *   If a reference exists for the specified certificate, the certificate shall not be deleted and the corresponding fault shall be produced.
     *   After a certificate has been  successfully deleted, the device may assign its former ID to other certificates.
     *   
     */
    static DeleteCertificate() {
        return createStandardRequestBodyFromString(generateRequestElements('tas:DeleteCertificate')({}))
                        .map(mapResponseXmlToJson<any>('tas:DeleteCertificateResponse'))
                      
    }

    /**
     * 
     *   This operation creates a sequence of certificates that may be used, e.g., for certification path validation or for TLS server authentication.
     *   Certification paths are uniquely identified using certification path IDs. Certificates are uniquely identified using certificate IDs.
     *   A certification path contains a sequence of certificate IDs.
     *   If there is a certificate ID in the sequence of supplied certificate IDs for which no certificate exists in the device’s keystore, the corresponding fault shall be produced
     *   and no certification path shall be created.
     *   
     *   The signature of each certificate in the certification path except for the last one must be verifiable with the public key contained in the next certificate in the path.
     *   If there is a certificate ID in the request other than the last ID for which the corresponding certificate cannot be verified with the public key in the certificate identified 
     *   by the next certificate ID, an InvalidCertificateChain fault shall be produced and no certification path shall be created.
     *   
     */
    static CreateCertificationPath() {
        return createStandardRequestBodyFromString(generateRequestElements('tas:CreateCertificationPath')({}))
                        .map(mapResponseXmlToJson<any>('tas:CreateCertificationPathResponse'))
                      
    }

    /**
     * 
     *   This operation returns a specific certification path from the device’s keystore.
     *   Certification paths are uniquely identified using certification path IDs.
     *   If no certification path is stored under the requested ID in the keystore, an InvalidArgVal fault is produced.
     *   
     */
    static GetCertificationPath() {
        return createStandardRequestBodyFromString(generateRequestElements('tas:GetCertificationPath')({}))
                        .map(mapResponseXmlToJson<any>('tas:GetCertificationPathResponse'))
                      
    }

    /**
     * 
     *   This operation returns the IDs of all certification paths that are stored in the device’s keystore.
     *   This operation may be used, e.g., if a client lost track of which certificates are present on the device.
     *   If no certification path is stored on the device, an empty list is returned.
     *   
     */
    static GetAllCertificationPaths() {
        return createStandardRequestBodyFromString(generateRequestElements('tas:GetAllCertificationPaths')({}))
                        .map(mapResponseXmlToJson<any>('tas:GetAllCertificationPathsResponse'))
                      
    }

    /**
     * 
     *   This operation deletes a certification path from the device’s keystore.
     *   This operation shall not delete the certificates that are referenced by the certification path.
     *   Certification paths are uniquely identified using certification path IDs.
     *   If no certification path is stored under the requested certification path ID in the keystore, an InvalidArgVal fault is produced.
     *   If there is a certification path under the requested certification path ID stored in the keystore and the certification path could not be deleted,
     *   a CertificationPathDeletion fault is produced.
     *   If a reference exists for the specified certification path, the certification path shall not be deleted and the corresponding fault shall be produced.
     *   After a certification path is successfully deleted, the device may assign its former ID to other certification paths.
     *   
     */
    static DeleteCertificationPath() {
        return createStandardRequestBodyFromString(generateRequestElements('tas:DeleteCertificationPath')({}))
                        .map(mapResponseXmlToJson<any>('tas:DeleteCertificationPathResponse'))
                      
    }

    /**
     * 
     *           This operation uploads a passphrase to the keystore of the device.
     *         
     */
    static UploadPassphrase() {
        return createStandardRequestBodyFromString(generateRequestElements('tas:UploadPassphrase')({}))
                        .map(mapResponseXmlToJson<any>('tas:UploadPassphraseResponse'))
                      
    }

    /**
     * 
     *           This operation returns information about all passphrases that are stored in the keystore of the device.
     *           This operation may be used, e.g., if a client lost track of which passphrases are present on the device.
     *           If no passphrase is stored on the device, the device shall return an empty list.
     *         
     */
    static GetAllPassphrases() {
        return createStandardRequestBodyFromString(generateRequestElements('tas:GetAllPassphrases')({}))
                        .map(mapResponseXmlToJson<any>('tas:GetAllPassphrasesResponse'))
                      
    }

    /**
     * 
     *           This operation deletes a passphrase from the keystore of the device.
     *         
     */
    static DeletePassphrase() {
        return createStandardRequestBodyFromString(generateRequestElements('tas:DeletePassphrase')({}))
                        .map(mapResponseXmlToJson<any>('tas:DeletePassphraseResponse'))
                      
    }

    /**
     * 
     *           This operation uploads a certificate revocation list (CRL) as specified in [RFC 5280] to the keystore on the device.
     *           If the device does not have enough storage space to store the CRL to be uploaded, the device shall produce a MaximumNumberOfCRLsReached fault and shall not store the supplied CRL.
     *           If the device is not able to process the supplied CRL, the device shall produce a BadCRL fault and shall not store the supplied CRL.
     *           If the device does not support the signature algorithm that was used to sign the supplied CRL, the device shall produce an UnsupportedSignatureAlgorithm fault and shall not store the supplied CRL.
     *         
     */
    static UploadCRL() {
        return createStandardRequestBodyFromString(generateRequestElements('tas:UploadCRL')({}))
                        .map(mapResponseXmlToJson<any>('tas:UploadCRLResponse'))
                      
    }

    /**
     * 
     *           This operation returns a specific certificate revocation list (CRL) from the keystore on the device.
     *           Certification revocation lists are uniquely identified using CRLIDs. If no CRL is stored under the requested CRLID, the device shall produce a CRLID fault.
     *         
     */
    static GetCRL() {
        return createStandardRequestBodyFromString(generateRequestElements('tas:GetCRL')({}))
                        .map(mapResponseXmlToJson<any>('tas:GetCRLResponse'))
                      
    }

    /**
     * 
     *           This operation returns all certificate revocation lists (CRLs) that are stored in the keystore on the device.
     *           If no certificate revocation list is stored in the device’s keystore, an empty list is returned.
     *         
     */
    static GetAllCRLs() {
        return createStandardRequestBodyFromString(generateRequestElements('tas:GetAllCRLs')({}))
                        .map(mapResponseXmlToJson<any>('tas:GetAllCRLsResponse'))
                      
    }

    /**
     * 
     *           This operation deletes a certificate revocation list (CRL) from the keystore on the device.
     *           Certification revocation lists are uniquely identified using CRLIDs. If no CRL is stored under the requested CRLID, the device shall produce a CRLID fault.
     *           If a reference exists for the specified CRL, the device shall produce a ReferenceExists fault and shall not delete the CRL.
     *           After a CRL has been successfully deleted, a device may assign its former ID to other CRLs.
     *         
     */
    static DeleteCRL() {
        return createStandardRequestBodyFromString(generateRequestElements('tas:DeleteCRL')({}))
                        .map(mapResponseXmlToJson<any>('tas:DeleteCRLResponse'))
                      
    }

    /**
     * 
     *           This operation creates a certification path validation policy.
     *           Certification path validation policies are uniquely identified using certification path validation policy IDs. The device shall generate a new certification path validation policy ID for the created certification path validation policy.
     *           For the certification path validation parameters that are not represented in the certPathValidationParameters data type, the device shall use the default values specified in Sect. 3.
     *           If the device does not have enough storage capacity for storing the certification path validation policy to be created, the device shall produce a maximum number of certification path validation policies reached fault and shall not create a certification path validation policy.
     *           If there is at least one trust anchor certificate ID in the request for which there exists no certificate in the device’s keystore, the device shall produce a CertificateID fault and shall not create a certification path validation policy.
     *           If the device cannot process the supplied certification path validation parameters, the device shall produce a CertPathValidationParameters fault and shall not create a certification path validation policy.
     *         
     */
    static CreateCertPathValidationPolicy() {
        return createStandardRequestBodyFromString(generateRequestElements('tas:CreateCertPathValidationPolicy')({}))
                        .map(mapResponseXmlToJson<any>('tas:CreateCertPathValidationPolicyResponse'))
                      
    }

    /**
     * 
     *           This operation returns a certification path validation policy from the keystore on the device.
     *           Certification path validation policies are uniquely identified using certification path validation policy IDs. If no certification path validation policy is stored under the requested certification path validation policy ID, the device shall produce a CertPathValidationPolicyID fault.
     *         
     */
    static GetCertPathValidationPolicy() {
        return createStandardRequestBodyFromString(generateRequestElements('tas:GetCertPathValidationPolicy')({}))
                        .map(mapResponseXmlToJson<any>('tas:GetCertPathValidationPolicyResponse'))
                      
    }

    /**
     * 
     *           This operation returns all certification path validation policies that are stored in the keystore on the device.
     *           If no certification path validation policy is stored in the device’s keystore, an empty list is returned.
     *         
     */
    static GetAllCertPathValidationPolicies() {
        return createStandardRequestBodyFromString(generateRequestElements('tas:GetAllCertPathValidationPolicies')({}))
                        .map(mapResponseXmlToJson<any>('tas:GetAllCertPathValidationPoliciesResponse'))
                      
    }

    /**
     * 
     *           This operation deletes a certification path validation policy from the keystore on the device.
     *           Certification path validation policies are uniquely identified using certification path validation policy IDs. If no certification path validation policy is stored under the requested certification path validation policy ID, the device shall produce an InvalidCertPathValidationPolicyID fault.
     *           If a reference exists for the requested certification path validation policy, the device shall produce a ReferenceExists fault and shall not delete the certification path validation policy.
     *           After the certification path validation policy has been deleted, the device may assign its former ID to other certification path validation policies.
     *         
     */
    static DeleteCertPathValidationPolicy() {
        return createStandardRequestBodyFromString(generateRequestElements('tas:DeleteCertPathValidationPolicy')({}))
                        .map(mapResponseXmlToJson<any>('tas:DeleteCertPathValidationPolicyResponse'))
                      
    }

    /**
     * 
     *   This operation assigns a key pair and certificate along with a certification path (certificate chain) to the TLS server on the device.
     *   The TLS server shall use this information for key exchange during the TLS handshake, particularly for constructing server certificate messages as specified in RFC 4346 and RFC 2246.
     *   
     *   Certification paths are identified by their certification path IDs in the keystore. The first certificate in the certification path must be the TLS server certificate.
     *   Since each certificate has exactly one associated key pair, a reference to the key pair that is associated with the server certificate is not supplied explicitly.
     *   Devices shall obtain the private key or results of operations under the private key by suitable internal interaction with the keystore.
     *   If a device chooses to perform a TLS key exchange based on the supplied certification path,  it shall use the key pair that is associated with the server certificate for 
     *   key exchange and transmit the certification path to TLS clients as-is, i.e., the device shall not check conformance of the certification path to RFC 4346 norRFC 2246.
     *   In order to use the server certificate during the TLS handshake, the corresponding private key is required.
     *   Therefore, if the key pair that is associated with the server certificate, i.e., the first certificate in the certification path, does not have an associated private key, 
     *   the NoPrivateKey fault is produced and the certification path is not associated to the TLS server.
     *   A TLS server may present different certification paths to different clients during the TLS handshake instead of presenting the same certification path to all clients.
     *   Therefore more than one certification path may be assigned to the TLS server.
     *   If the maximum number of certification paths that may be assigned to the TLS server simultaneously is reached, the device shall generate a MaximumNumberOfCertificationPathsReached 
     *   fault and the requested certification path shall not be assigned to the TLS server.
     *   
     */
    static AddServerCertificateAssignment() {
        return createStandardRequestBodyFromString(generateRequestElements('tas:AddServerCertificateAssignment')({}))
                        .map(mapResponseXmlToJson<any>('tas:AddServerCertificateAssignmentResponse'))
                      
    }

    /**
     * 
     *   This operation removes a key pair and certificate assignment (including certification path) to the TLS server on the device.
     *   Certification paths are identified using certification path IDs. If the supplied certification path ID is not associated to the TLS server, an InvalidArgVal fault is produced.
     *   
     */
    static RemoveServerCertificateAssignment() {
        return createStandardRequestBodyFromString(generateRequestElements('tas:RemoveServerCertificateAssignment')({}))
                        .map(mapResponseXmlToJson<any>('tas:RemoveServerCertificateAssignmentResponse'))
                      
    }

    /**
     * 
     *   This operation replaces an existing key pair and certificate assignment to the TLS server on the device by a new key pair and certificate assignment (including certification paths).
     *   
     *   After the replacement, the TLS server shall use the new certificate and certification path exactly in those cases in which it would have used the old certificate and certification path.
     *   Therefore, especially in the case that several server certificates are assigned to the TLS server, clients that wish to replace an old certificate assignment by a new assignment
     *   should use this operation instead of a combination of the Add TLS Server Certificate Assignment and the Remove TLS Server Certificate Assignment operations.
     *   
     *   Certification paths are identified using certification path IDs. If the supplied old certification path ID is not associated to the TLS server, or no certification path exists
     *   under the new certification path ID, the corresponding InvalidArgVal faults are produced and the associations are unchanged.
     *   The first certificate in the new certification path must be the TLS server certificate.
     *   Since each certificate has exactly one associated key pair, a reference to the key pair that is associated with the new server certificate is not supplied explicitly.
     *   Devices shall obtain the private key or results of operations under the private key by suitable internal interaction with the keystore.
     *   If a device chooses to perform a TLS key exchange based on the new certification path,  it shall use the key pair that is associated with the server certificate
     *   for key exchange and transmit the certification path to TLS clients as-is, i.e., the device shall not check conformance of the certification path to RFC 4346 norRFC 2246.
     *   In order to use the server certificate during the TLS handshake, the corresponding private key is required.
     *   Therefore, if the key pair that is associated with the server certificate, i.e., the first certificate in the certification path, does not have an associated private key,
     *   the NoPrivateKey fault is produced and the certification path is not associated to the TLS server.
     *   
     */
    static ReplaceServerCertificateAssignment() {
        return createStandardRequestBodyFromString(generateRequestElements('tas:ReplaceServerCertificateAssignment')({}))
                        .map(mapResponseXmlToJson<any>('tas:ReplaceServerCertificateAssignmentResponse'))
                      
    }

    /**
     * 
     *   This operation sets the version(s) of TLS which the device shall use.  Valid values are taken from the TLSServerSupported capability.
     *   A client initiates a TLS session by sending a ClientHello with the hightest TLS version it supports.  This suggests to the server that the client can accept any TLS version up to and including that version.
     *   The server then chooses the TLS version to use.  This is generally the highest TLS version the server supports that is within the range of the client.  For example, if a ClientHello indicates TLS version 1.1, the server can proceed with TLS 1.0 or TLS 1.1.
     *   In the event that an ONVIF installation wishes to disable certain version(s) of TLS, it may do so with this operation.  For example, to disable TLS 1.0 on a device signaling support for TLS versions 1.0, 1.1, and 1.2, the enabled version list may be set to "1.1 1.2", omitting 1.0.  If a client then attempts to connect with a ClientHello containing TLS 1.0, the server shall send a "protocol_version" alert message and close the connection.  This handshake indicates to the client that TLS 1.0 is not supported by the server.  The client must try again with a higher TLS version suggestion.
     *   An empty list is not permitted.  Disabling all versions of TLS is not the intent of this operation.  See AddServerCertificateAssignment and RemoveServerCertificateAssignment.
     *   
     */
    static SetEnabledTLSVersions() {
        return createStandardRequestBodyFromString(generateRequestElements('tas:SetEnabledTLSVersions')({}))
                        .map(mapResponseXmlToJson<any>('tas:SetEnabledTLSVersionsResponse'))
                      
    }

    /**
     * 
     *   This operation retrieves the version(s) of TLS which are currently enabled on the device.
     *   
     */
    static GetEnabledTLSVersions() {
        return createStandardRequestBodyFromString(generateRequestElements('tas:GetEnabledTLSVersions')({}))
                        .map(mapResponseXmlToJson<any>('tas:GetEnabledTLSVersionsResponse'))
                      
    }

    /**
     * 
     *   This operation returns the IDs of all key pairs and certificates (including certification paths) that are assigned to the TLS server on the device.
     *   This operation may be used, e.g., if a client lost track of the certification path assignments on the device.
     *   If no certification path is assigned to the TLS server, an empty list is returned.
     *   
     */
    static GetAssignedServerCertificates() {
        return createStandardRequestBodyFromString(generateRequestElements('tas:GetAssignedServerCertificates')({}))
                        .map(mapResponseXmlToJson<any>('tas:GetAssignedServerCertificatesResponse'))
                      
    }

    /**
     * 
     *           This operation activates or deactivates TLS client authentication for the TLS server on the device.
     *           The TLS server on the device shall require client authentication if and only if clientAuthenticationRequired is set to true.
     *           If TLS client authentication is requested to be enabled and no certification path validation policy is assigned to the TLS server, the device shall return an EnablingTLSClientAuthenticationFailed fault and shall not enable TLS client authentication.
     *           The device shall execute this command regardless of the TLS enabled/disabled state configured in the ONVIF Device Management Service.
     *         
     */
    static SetClientAuthenticationRequired() {
        return createStandardRequestBodyFromString(generateRequestElements('tas:SetClientAuthenticationRequired')({}))
                        .map(mapResponseXmlToJson<any>('tas:SetClientAuthenticationRequiredResponse'))
                      
    }

    /**
     * 
     *           This operation returns whether TLS client authentication is active.
     *         
     */
    static GetClientAuthenticationRequired() {
        return createStandardRequestBodyFromString(generateRequestElements('tas:GetClientAuthenticationRequired')({}))
                        .map(mapResponseXmlToJson<any>('tas:GetClientAuthenticationRequiredResponse'))
                      
    }

    /**
     * 
     *           This operation enables or disables mapping of the Common Name present in the TLS client certificate to an existing user name in the device.
     *           The TLS server on the device shall perform mapping if parameter clientAuthenticationRequired is set to true.
     *         
     */
    static SetCnMapsToUser() {
        return createStandardRequestBodyFromString(generateRequestElements('tas:SetCnMapsToUser')({}))
                        .map(mapResponseXmlToJson<any>('tas:SetCnMapsToUserResponse'))
                      
    }

    /**
     * 
     *           This operation returns whether the Common Name Mapping to User is enabled.
     *         
     */
    static GetCnMapsToUser() {
        return createStandardRequestBodyFromString(generateRequestElements('tas:GetCnMapsToUser')({}))
                        .map(mapResponseXmlToJson<any>('tas:GetCnMapsToUserResponse'))
                      
    }

    /**
     * 
     *           This operation assigns a certification path validation policy to the TLS server on the device. The TLS server shall enforce the policy when authenticating TLS clients and consider a client authentic if and only if the algorithm returns valid.
     *           If no certification path validation policy is stored under the requested CertPathValidationPolicyID, the device shall produce a CertPathValidationPolicyID fault.
     *           A TLS server may use different certification path validation policies to authenticate clients. Therefore more than one certification path validation policy may be assigned to the TLS server. If the maximum number of certification path validation policies that may be assigned to the  TLS server simultaneously is reached, the device shall produce a MaximumNumberOfTLSCertPathValidationPoliciesReached fault and shall not assign the requested certification path validation policy to the TLS server.
     *         
     */
    static AddCertPathValidationPolicyAssignment() {
        return createStandardRequestBodyFromString(generateRequestElements('tas:AddCertPathValidationPolicyAssignment')({}))
                        .map(mapResponseXmlToJson<any>('tas:AddCertPathValidationPolicyAssignmentResponse'))
                      
    }

    /**
     * 
     *           This operation removes a certification path validation policy assignment from the TLS server on the device.
     *           If the certification path validation policy identified by the requested CertPathValidationPolicyID is not associated to the TLS server, the device shall produce a CertPathValidationPolicy fault.
     *         
     */
    static RemoveCertPathValidationPolicyAssignment() {
        return createStandardRequestBodyFromString(generateRequestElements('tas:RemoveCertPathValidationPolicyAssignment')({}))
                        .map(mapResponseXmlToJson<any>('tas:RemoveCertPathValidationPolicyAssignmentResponse'))
                      
    }

    /**
     * 
     *           This operation replaces a certification path validation policy assignment to the TLS server on the device with another certification path validation policy assignment.
     *           If the certification path validation policy identified by the requested OldCertPathValidationPolicyID is not associated to the TLS server, the device shall produce an OldCertPathValidationPolicyID fault and shall not associate the certification path validation policy identified by the NewCertPathValidationPolicyID to the TLS server.
     *           If no certification path validation policy exists under the requested NewCertPathValidationPolicyID in the device’s keystore, the device shall produce a NewCertPathValidationPolicyID fault and shall not remove the association of the old certification path validation policy to the TLS server.
     *         
     */
    static ReplaceCertPathValidationPolicyAssignment() {
        return createStandardRequestBodyFromString(generateRequestElements('tas:ReplaceCertPathValidationPolicyAssignment')({}))
                        .map(mapResponseXmlToJson<any>('tas:ReplaceCertPathValidationPolicyAssignmentResponse'))
                      
    }

    /**
     * 
     *           This operation returns the IDs of all certification path validation policies that are assigned to the TLS server on the device.
     *         
     */
    static GetAssignedCertPathValidationPolicies() {
        return createStandardRequestBodyFromString(generateRequestElements('tas:GetAssignedCertPathValidationPolicies')({}))
                        .map(mapResponseXmlToJson<any>('tas:GetAssignedCertPathValidationPoliciesResponse'))
                      
    }

    /**
     * 
     *   (to be written)
     *   
     */
    static AddDot1XConfiguration() {
        return createStandardRequestBodyFromString(generateRequestElements('tas:AddDot1XConfiguration')({}))
                        .map(mapResponseXmlToJson<any>('tas:AddDot1XConfigurationResponse'))
                      
    }

    /**
     * 
     *   (to be written)
     *   
     */
    static GetAllDot1XConfigurations() {
        return createStandardRequestBodyFromString(generateRequestElements('tas:GetAllDot1XConfigurations')({}))
                        .map(mapResponseXmlToJson<any>('tas:GetAllDot1XConfigurationsResponse'))
                      
    }

    /**
     * 
     *   (to be written)
     *   
     */
    static GetDot1XConfiguration() {
        return createStandardRequestBodyFromString(generateRequestElements('tas:GetDot1XConfiguration')({}))
                        .map(mapResponseXmlToJson<any>('tas:GetDot1XConfigurationResponse'))
                      
    }

    /**
     * 
     *   (to be written)
     *   
     */
    static DeleteDot1XConfiguration() {
        return createStandardRequestBodyFromString(generateRequestElements('tas:DeleteDot1XConfiguration')({}))
                        .map(mapResponseXmlToJson<any>('tas:DeleteDot1XConfigurationResponse'))
                      
    }

    /**
     * 
     *   (to be written)
     *   
     */
    static SetNetworkInterfaceDot1XConfiguration() {
        return createStandardRequestBodyFromString(generateRequestElements('tas:SetNetworkInterfaceDot1XConfiguration')({}))
                        .map(mapResponseXmlToJson<any>('tas:SetNetworkInterfaceDot1XConfigurationResponse'))
                      
    }

    /**
     * 
     *   (to be written)
     *   
     */
    static GetNetworkInterfaceDot1XConfiguration() {
        return createStandardRequestBodyFromString(generateRequestElements('tas:GetNetworkInterfaceDot1XConfiguration')({}))
                        .map(mapResponseXmlToJson<any>('tas:GetNetworkInterfaceDot1XConfigurationResponse'))
                      
    }

    /**
     * 
     *   (to be written)
     *   
     */
    static DeleteNetworkInterfaceDot1XConfiguration() {
        return createStandardRequestBodyFromString(generateRequestElements('tas:DeleteNetworkInterfaceDot1XConfiguration')({}))
                        .map(mapResponseXmlToJson<any>('tas:DeleteNetworkInterfaceDot1XConfigurationResponse'))
                      
    }

    /**
     * Returns the capabilities of the security configuraiton service. The result is returned in a typed answer.
     */
    GetServiceCapabilities() {
        return ONVIFAdvancedSecurity.GetServiceCapabilities().run(this.config)
    }

    /**
     * 
     *   This operation triggers the asynchronous generation of an RSA key pair of a particular key length (specified as the number of bits) as specified in [RFC 3447], with a suitable key generation mechanism on the device.
     *   Keys, especially RSA key pairs, are uniquely identified using key IDs.
     *   If the device does not have not enough storage capacity for storing the key pair to be created, the maximum number of keys reached fault shall be produced and no key pair shall be generated.
     *   Otherwise, the operation generates a keyID for the new key and associates the generating status to it.
     *   Immediately after key generation has started, the device shall return the keyID to the client and continue to generate the key pair.
     *   The client may query the device with the GetKeyStatus operation whether the generation has finished.
     *   The client may also subscribe to Key Status events to be notified about key status changes.
     *   The device also returns a best-effort estimate of how much time it requires to create the key pair.
     *   A client may use this information as an indication how long to wait before querying the device whether key generation is completed.
     *   After the key has been successfully created, the device shall assign it the ok status. If the key generation fails, the device shall assign the key the corrupt status.
     *   
     */
    CreateRSAKeyPair() {
        return ONVIFAdvancedSecurity.CreateRSAKeyPair().run(this.config)
    }

    /**
     * 
     *           This operation uploads a key pair in a PKCS#8 data structure as specified in [RFC 5958, RFC 5959].
     *           If an encryption passphrase ID is supplied in the request, the device shall assume that the KeyPair parameter contains an EncryptedPrivateKeyInfo ASN.1
     *           structure that is encrypted under the passphrase in the keystore that corresponds to the supplied ID, where the EncryptedPrivateKeyInfo structure contains
     *           both the private key and the corresponding public key. If no encryption passphrase ID is supplied, the device shall assume that the KeyPair parameter contains a
     *           OneAsymmetricKey ASN.1 structure which contains both the private key and the corresponding public key.
     *         
     */
    UploadKeyPairInPKCS8() {
        return ONVIFAdvancedSecurity.UploadKeyPairInPKCS8().run(this.config)
    }

    /**
     * 
     *           This operation uploads a certification path consisting of X.509 certificates as specified by [RFC 5280] in DER encoding along with a private key to a device’s keystore.
     *           Certificates and private key are supplied in the form of a PKCS#12 file as specified in [PKCS#12].
     *           The device shall support PKCS#12 files that contain the following safe bags:
     *           one or more instances of CertBag [PKCS#12, Sect. 4.2.3]
     *           either exactly one instance of KeyBag [PKCS#12, Sect. 4.3.1] or exactly one instance of PKCS8ShroudedKeyBag [PKCS#12, Sect. 4.2.2].
     *           If the IgnoreAdditionalCertificates parameter has the value true, the device shall behave as if the client had supplied only the first CertBag in the sequence of CertBag instances.
     *           The device shall support PKCS#12 passphrase integrity mode for integrity protection of the PKCS#12 PFX as specified in [PKCS#12, Sect. 4].
     *           The device shall support PKCS8ShroudedKeyBags that are encrypted with the same passphrase as the CertBag instances.
     *           If an integrity passphrase ID is supplied, the device shall use the corresponding passphrase in the keystore to check the integrity of the supplied PKCS#12 PFX.
     *           If an integrity passphrase ID is supplied, but the supplied PKCS#12 PFX has no integrity protection, the device shall produce a BadPKCS12File fault and shall
     *           not store the uploaded certificates nor the uploaded key pair in the keystore.
     *           If an encryption passphrase ID is supplied, the device shall use the corresponding passphrase in the keystore to decrypt the PKCS8ShroudedKeyBag and the CertBag instances.
     *           If an EncryptionPassphraseID is supplied, but a CertBag is not encrypted, the device shall ignore the supplied EncryptionPassphraseID when processing this CertBag.
     *           If an EncryptionPassphraseID is supplied, but a KeyBag is provided instead of a PKCS8ShroudedKeyBag, the device shall ignore the supplied EncryptionPassphraseID when processing the KeyBag.
     *         
     */
    UploadCertificateWithPrivateKeyInPKCS12() {
        return ONVIFAdvancedSecurity.UploadCertificateWithPrivateKeyInPKCS12().run(this.config)
    }

    /**
     * 
     *   This operation returns the status of a key.
     *   Keys are uniquely identified using key IDs. If no key is stored under the requested key ID in the keystore, an InvalidKeyID fault is produced.
     *   Otherwise, the status of the key is returned.
     *   
     */
    GetKeyStatus() {
        return ONVIFAdvancedSecurity.GetKeyStatus().run(this.config)
    }

    /**
     * 
     *   This operation returns whether a key pair contains a private key.
     *   Keys are uniquely identified using key IDs. If no key is stored under the requested key ID in the keystore or the key identified by the requested key ID does not identify a key pair,
     *   the device shall produce an InvalidKeyID fault.
     *   Otherwise, this operation returns true if the key pair identified by the key ID contains a private key, and false otherwise.
     *   
     */
    GetPrivateKeyStatus() {
        return ONVIFAdvancedSecurity.GetPrivateKeyStatus().run(this.config)
    }

    /**
     * 
     *   This operation returns information about all keys that are stored in the device’s keystore.
     *   This operation may be used, e.g., if a client lost track of which keys are present on the device.
     *   If no key is stored on the device, an empty list is returned.
     *   
     */
    GetAllKeys() {
        return ONVIFAdvancedSecurity.GetAllKeys().run(this.config)
    }

    /**
     * 
     *   This operation deletes a key from the device’s keystore.
     *   Keys are uniquely identified using key IDs. If no key is stored under the requested key ID in the keystore, a device shall produce an InvalidArgVal fault.
     *   If a reference exists for the specified key, a device shall produce the corresponding fault and shall not delete the key.
     *   If there is a key under the requested key ID stored in the keystore and the key could not be deleted, a device shall produce a KeyDeletion fault.
     *   If the key has the status generating, a device shall abort the generation of the key and delete from the keystore all data generated for this key.
     *   After a key is successfully deleted, the device may assign its former ID to other keys.
     *   
     */
    DeleteKey() {
        return ONVIFAdvancedSecurity.DeleteKey().run(this.config)
    }

    /**
     * 
     *   This operation generates a DER-encoded PKCS#10 v1.7 certification request (sometimes also called certificate signing request or CSR) as specified in RFC 2986 
     *   for a public key on the device.
     *   The key pair that contains the public key for which a certification request shall be produced is specified by its key ID.
     *   If no key is stored under the requested KeyID or the key specified by the requested KeyID is not an asymmetric key pair, an invalid key ID fault shall be produced and 
     *   no CSR shall be generated.
     *   
     *   A device that supports this command shall as minimum support the sha-1WithRSAEncryption signature algorithm as specified in RFC 3279. 
     *   If the specified signature algorithm is not supported by the device, an UnsupportedSignatureAlgorithm fault shall be produced and no CSR shall be generated.
     *   
     *   If the public key identified by the requested Key ID is an invalid input to the specified signature algorithm, a KeySignatureAlgorithmMismatch fault shall be produced 
     *   and no CSR shall be generated.
     *   If the key pair does not have status ok, a device shall produce an InvalidKeyStatus fault and no CSR shall be generated.
     *   
     */
    CreatePKCS10CSR() {
        return ONVIFAdvancedSecurity.CreatePKCS10CSR().run(this.config)
    }

    /**
     * 
     *   This operation generates for a public key on the device a self-signed X.509 certificate that complies to RFC 5280.
     *   The X509Version parameter specifies the version of X.509 that the generated certificate shall comply to.
     *   A device that supports this command shall support the generation of X.509v3 certificates as specified in RFC 5280 and may additionally be able to handle other X.509 certificate formats
     *   as indicated by the X.509Versions capability.
     *   The key pair that contains the public key for which a self-signed certificate shall be produced is specified by its key pair ID.
     *   The subject parameter describes the entity that the public key belongs to.
     *   If the key pair does not have status ok, a device shall produce an InvalidKeyStatus fault and no certificate shall be generated.
     *   
     *   The signature algorithm parameter determines which signature algorithm shall be used for signing the certification request with the public key specified by the key ID parameter.
     *   A device that supports this command shall as minimum support the sha-1WithRSAEncryption signature algorithm as specified in RFC 3279. 
     *   The Extensions parameter specifies potential X509v3 extensions that shall be contained in the certificate.
     *   A device that supports this command shall support the extensions that are defined in [RFC 5280], Sect. 4.2] as mandatory for CAs that issue self-signed certificates.
     *   
     *   Certificates are uniquely identified using certificate IDs. If the command was successful, the device generates a new ID for the generated certificate and returns this ID.
     *   If the device does not have not enough storage capacity for storing the certificate to be created, the maximum number of certificates reached fault shall be produced and no certificate shall be generated.
     *   
     */
    CreateSelfSignedCertificate() {
        return ONVIFAdvancedSecurity.CreateSelfSignedCertificate().run(this.config)
    }

    /**
     * 
     *   This operation uploads an X.509 certificate as specified by [RFC 5280] in DER encoding and the public key in the certificate to a device’s keystore.
     *   A device that supports this command shall be able to handle X.509v3 certificates as specified in RFC 5280 and may additionally be able to handle other X.509 certificate formats as indicated by the X.509Versions capability.
     *   A device that supports this command shall support sha1-WithRSAEncryption as certificate signature algorithm.
     *   
     *   Certificates are uniquely identified using certificate IDs, and key pairs are uniquely identified using key IDs.
     *   The device shall generate a new certificate ID for the uploaded certificate.
     *   Certain certificate usages, e.g. TLS server authentication, require the private key that corresponds to the public key in the certificate to be present in the keystore.
     *   In such cases, the client may indicate that it expects the device to produce a fault if the matching private key for
     *   the uploaded certificate is not present in the keystore by setting the PrivateKeyRequired argument in the upload request to true.
     *   
     *   The uploaded certificate has to be linked to a key pair in the keystore.
     *   If no private key is required for the public key in the certificate and a key pair exists in the keystore with a public key equal to the public key in the certificate,
     *   the uploaded certificate is linked to the key pair identified by the supplied key ID by adding a reference from the certificate to the key pair.
     *   If no private key is required for the public key in the certificate and no key pair exists with the public key equal to the public key in the certificate,
     *   a new key pair with status ok is created with the public key from the certificate, and this key pair is linked to the uploaded certificate by adding a reference from 
     *   the certificate to the key pair.
     *   If a private key is required for the public key in the certificate, and a key pair exists in the keystore with a private key that matches the public key in the certificate,
     *   the uploaded certificate is linked to this keypair by adding a reference from the certificate to the key pair.
     *   If a private key is required for the public key and no such keypair exists in the keystore, the NoMatchingPrivateKey fault shall be produced and the certificate
     *   shall not be stored in the keystore.
     *   If the key pair that the certificate shall be linked to does not have status ok, an InvalidKeyID fault is produced, and the uploaded certificate is not stored in the keystore.
     *   If the device cannot process the uploaded certificate, a BadCertificate fault is produced and neither the uploaded certificate nor the public key are stored in the device’s keystore.
     *   The BadCertificate fault shall not be produced based on the mere fact that the device’s current time lies outside the interval defined by the notBefore and notAfter fields as specified by [RFC 5280], Sect. 4.1 .
     *   This operation shall not mark the uploaded certificate as trusted.
     *   
     *   If the device does not have not enough storage capacity for storing the certificate to be uploaded, the maximum number of certificates reached fault shall be produced
     *   and no certificate shall be uploaded.
     *   If the device does not have not enough storage capacity for storing the key pair that eventually has to be created, the device shall generate a maximum number of keys reached fault.
     *   Furthermore the device shall not generate a key pair and no certificate shall be stored.
     *   
     */
    UploadCertificate() {
        return ONVIFAdvancedSecurity.UploadCertificate().run(this.config)
    }

    /**
     * 
     *   This operation returns a specific certificate from the device’s keystore.
     *   Certificates are uniquely identified using certificate IDs. If no certificate is stored under the requested certificate ID in the keystore, an InvalidArgVal fault is produced.
     *   It shall be noted that this command does not return the private key that is associated to the public key in the certificate.
     *   
     */
    GetCertificate() {
        return ONVIFAdvancedSecurity.GetCertificate().run(this.config)
    }

    /**
     * 
     *   This operation returns the IDs of all certificates that are stored in the device’s keystore.
     *   This operation may be used, e.g.,  if a client lost track of which certificates are present on the device.
     *   If no certificate is stored in the device’s keystore, an empty list is returned.
     *   
     */
    GetAllCertificates() {
        return ONVIFAdvancedSecurity.GetAllCertificates().run(this.config)
    }

    /**
     * 
     *   This operation deletes a certificate from the device’s keystore.
     *   The operation shall not delete the public key that is contained in the certificate from the keystore.
     *   Certificates are uniquely identified using certificate IDs. If no certificate is stored under the requested certificate ID in the keystore, an InvalidArgVal fault is produced.
     *   If there is a certificate under the requested certificate ID stored in the keystore and the certificate could not be deleted, a CertificateDeletion fault is produced.
     *   If a reference exists for the specified certificate, the certificate shall not be deleted and the corresponding fault shall be produced.
     *   After a certificate has been  successfully deleted, the device may assign its former ID to other certificates.
     *   
     */
    DeleteCertificate() {
        return ONVIFAdvancedSecurity.DeleteCertificate().run(this.config)
    }

    /**
     * 
     *   This operation creates a sequence of certificates that may be used, e.g., for certification path validation or for TLS server authentication.
     *   Certification paths are uniquely identified using certification path IDs. Certificates are uniquely identified using certificate IDs.
     *   A certification path contains a sequence of certificate IDs.
     *   If there is a certificate ID in the sequence of supplied certificate IDs for which no certificate exists in the device’s keystore, the corresponding fault shall be produced
     *   and no certification path shall be created.
     *   
     *   The signature of each certificate in the certification path except for the last one must be verifiable with the public key contained in the next certificate in the path.
     *   If there is a certificate ID in the request other than the last ID for which the corresponding certificate cannot be verified with the public key in the certificate identified 
     *   by the next certificate ID, an InvalidCertificateChain fault shall be produced and no certification path shall be created.
     *   
     */
    CreateCertificationPath() {
        return ONVIFAdvancedSecurity.CreateCertificationPath().run(this.config)
    }

    /**
     * 
     *   This operation returns a specific certification path from the device’s keystore.
     *   Certification paths are uniquely identified using certification path IDs.
     *   If no certification path is stored under the requested ID in the keystore, an InvalidArgVal fault is produced.
     *   
     */
    GetCertificationPath() {
        return ONVIFAdvancedSecurity.GetCertificationPath().run(this.config)
    }

    /**
     * 
     *   This operation returns the IDs of all certification paths that are stored in the device’s keystore.
     *   This operation may be used, e.g., if a client lost track of which certificates are present on the device.
     *   If no certification path is stored on the device, an empty list is returned.
     *   
     */
    GetAllCertificationPaths() {
        return ONVIFAdvancedSecurity.GetAllCertificationPaths().run(this.config)
    }

    /**
     * 
     *   This operation deletes a certification path from the device’s keystore.
     *   This operation shall not delete the certificates that are referenced by the certification path.
     *   Certification paths are uniquely identified using certification path IDs.
     *   If no certification path is stored under the requested certification path ID in the keystore, an InvalidArgVal fault is produced.
     *   If there is a certification path under the requested certification path ID stored in the keystore and the certification path could not be deleted,
     *   a CertificationPathDeletion fault is produced.
     *   If a reference exists for the specified certification path, the certification path shall not be deleted and the corresponding fault shall be produced.
     *   After a certification path is successfully deleted, the device may assign its former ID to other certification paths.
     *   
     */
    DeleteCertificationPath() {
        return ONVIFAdvancedSecurity.DeleteCertificationPath().run(this.config)
    }

    /**
     * 
     *           This operation uploads a passphrase to the keystore of the device.
     *         
     */
    UploadPassphrase() {
        return ONVIFAdvancedSecurity.UploadPassphrase().run(this.config)
    }

    /**
     * 
     *           This operation returns information about all passphrases that are stored in the keystore of the device.
     *           This operation may be used, e.g., if a client lost track of which passphrases are present on the device.
     *           If no passphrase is stored on the device, the device shall return an empty list.
     *         
     */
    GetAllPassphrases() {
        return ONVIFAdvancedSecurity.GetAllPassphrases().run(this.config)
    }

    /**
     * 
     *           This operation deletes a passphrase from the keystore of the device.
     *         
     */
    DeletePassphrase() {
        return ONVIFAdvancedSecurity.DeletePassphrase().run(this.config)
    }

    /**
     * 
     *           This operation uploads a certificate revocation list (CRL) as specified in [RFC 5280] to the keystore on the device.
     *           If the device does not have enough storage space to store the CRL to be uploaded, the device shall produce a MaximumNumberOfCRLsReached fault and shall not store the supplied CRL.
     *           If the device is not able to process the supplied CRL, the device shall produce a BadCRL fault and shall not store the supplied CRL.
     *           If the device does not support the signature algorithm that was used to sign the supplied CRL, the device shall produce an UnsupportedSignatureAlgorithm fault and shall not store the supplied CRL.
     *         
     */
    UploadCRL() {
        return ONVIFAdvancedSecurity.UploadCRL().run(this.config)
    }

    /**
     * 
     *           This operation returns a specific certificate revocation list (CRL) from the keystore on the device.
     *           Certification revocation lists are uniquely identified using CRLIDs. If no CRL is stored under the requested CRLID, the device shall produce a CRLID fault.
     *         
     */
    GetCRL() {
        return ONVIFAdvancedSecurity.GetCRL().run(this.config)
    }

    /**
     * 
     *           This operation returns all certificate revocation lists (CRLs) that are stored in the keystore on the device.
     *           If no certificate revocation list is stored in the device’s keystore, an empty list is returned.
     *         
     */
    GetAllCRLs() {
        return ONVIFAdvancedSecurity.GetAllCRLs().run(this.config)
    }

    /**
     * 
     *           This operation deletes a certificate revocation list (CRL) from the keystore on the device.
     *           Certification revocation lists are uniquely identified using CRLIDs. If no CRL is stored under the requested CRLID, the device shall produce a CRLID fault.
     *           If a reference exists for the specified CRL, the device shall produce a ReferenceExists fault and shall not delete the CRL.
     *           After a CRL has been successfully deleted, a device may assign its former ID to other CRLs.
     *         
     */
    DeleteCRL() {
        return ONVIFAdvancedSecurity.DeleteCRL().run(this.config)
    }

    /**
     * 
     *           This operation creates a certification path validation policy.
     *           Certification path validation policies are uniquely identified using certification path validation policy IDs. The device shall generate a new certification path validation policy ID for the created certification path validation policy.
     *           For the certification path validation parameters that are not represented in the certPathValidationParameters data type, the device shall use the default values specified in Sect. 3.
     *           If the device does not have enough storage capacity for storing the certification path validation policy to be created, the device shall produce a maximum number of certification path validation policies reached fault and shall not create a certification path validation policy.
     *           If there is at least one trust anchor certificate ID in the request for which there exists no certificate in the device’s keystore, the device shall produce a CertificateID fault and shall not create a certification path validation policy.
     *           If the device cannot process the supplied certification path validation parameters, the device shall produce a CertPathValidationParameters fault and shall not create a certification path validation policy.
     *         
     */
    CreateCertPathValidationPolicy() {
        return ONVIFAdvancedSecurity.CreateCertPathValidationPolicy().run(this.config)
    }

    /**
     * 
     *           This operation returns a certification path validation policy from the keystore on the device.
     *           Certification path validation policies are uniquely identified using certification path validation policy IDs. If no certification path validation policy is stored under the requested certification path validation policy ID, the device shall produce a CertPathValidationPolicyID fault.
     *         
     */
    GetCertPathValidationPolicy() {
        return ONVIFAdvancedSecurity.GetCertPathValidationPolicy().run(this.config)
    }

    /**
     * 
     *           This operation returns all certification path validation policies that are stored in the keystore on the device.
     *           If no certification path validation policy is stored in the device’s keystore, an empty list is returned.
     *         
     */
    GetAllCertPathValidationPolicies() {
        return ONVIFAdvancedSecurity.GetAllCertPathValidationPolicies().run(this.config)
    }

    /**
     * 
     *           This operation deletes a certification path validation policy from the keystore on the device.
     *           Certification path validation policies are uniquely identified using certification path validation policy IDs. If no certification path validation policy is stored under the requested certification path validation policy ID, the device shall produce an InvalidCertPathValidationPolicyID fault.
     *           If a reference exists for the requested certification path validation policy, the device shall produce a ReferenceExists fault and shall not delete the certification path validation policy.
     *           After the certification path validation policy has been deleted, the device may assign its former ID to other certification path validation policies.
     *         
     */
    DeleteCertPathValidationPolicy() {
        return ONVIFAdvancedSecurity.DeleteCertPathValidationPolicy().run(this.config)
    }

    /**
     * 
     *   This operation assigns a key pair and certificate along with a certification path (certificate chain) to the TLS server on the device.
     *   The TLS server shall use this information for key exchange during the TLS handshake, particularly for constructing server certificate messages as specified in RFC 4346 and RFC 2246.
     *   
     *   Certification paths are identified by their certification path IDs in the keystore. The first certificate in the certification path must be the TLS server certificate.
     *   Since each certificate has exactly one associated key pair, a reference to the key pair that is associated with the server certificate is not supplied explicitly.
     *   Devices shall obtain the private key or results of operations under the private key by suitable internal interaction with the keystore.
     *   If a device chooses to perform a TLS key exchange based on the supplied certification path,  it shall use the key pair that is associated with the server certificate for 
     *   key exchange and transmit the certification path to TLS clients as-is, i.e., the device shall not check conformance of the certification path to RFC 4346 norRFC 2246.
     *   In order to use the server certificate during the TLS handshake, the corresponding private key is required.
     *   Therefore, if the key pair that is associated with the server certificate, i.e., the first certificate in the certification path, does not have an associated private key, 
     *   the NoPrivateKey fault is produced and the certification path is not associated to the TLS server.
     *   A TLS server may present different certification paths to different clients during the TLS handshake instead of presenting the same certification path to all clients.
     *   Therefore more than one certification path may be assigned to the TLS server.
     *   If the maximum number of certification paths that may be assigned to the TLS server simultaneously is reached, the device shall generate a MaximumNumberOfCertificationPathsReached 
     *   fault and the requested certification path shall not be assigned to the TLS server.
     *   
     */
    AddServerCertificateAssignment() {
        return ONVIFAdvancedSecurity.AddServerCertificateAssignment().run(this.config)
    }

    /**
     * 
     *   This operation removes a key pair and certificate assignment (including certification path) to the TLS server on the device.
     *   Certification paths are identified using certification path IDs. If the supplied certification path ID is not associated to the TLS server, an InvalidArgVal fault is produced.
     *   
     */
    RemoveServerCertificateAssignment() {
        return ONVIFAdvancedSecurity.RemoveServerCertificateAssignment().run(this.config)
    }

    /**
     * 
     *   This operation replaces an existing key pair and certificate assignment to the TLS server on the device by a new key pair and certificate assignment (including certification paths).
     *   
     *   After the replacement, the TLS server shall use the new certificate and certification path exactly in those cases in which it would have used the old certificate and certification path.
     *   Therefore, especially in the case that several server certificates are assigned to the TLS server, clients that wish to replace an old certificate assignment by a new assignment
     *   should use this operation instead of a combination of the Add TLS Server Certificate Assignment and the Remove TLS Server Certificate Assignment operations.
     *   
     *   Certification paths are identified using certification path IDs. If the supplied old certification path ID is not associated to the TLS server, or no certification path exists
     *   under the new certification path ID, the corresponding InvalidArgVal faults are produced and the associations are unchanged.
     *   The first certificate in the new certification path must be the TLS server certificate.
     *   Since each certificate has exactly one associated key pair, a reference to the key pair that is associated with the new server certificate is not supplied explicitly.
     *   Devices shall obtain the private key or results of operations under the private key by suitable internal interaction with the keystore.
     *   If a device chooses to perform a TLS key exchange based on the new certification path,  it shall use the key pair that is associated with the server certificate
     *   for key exchange and transmit the certification path to TLS clients as-is, i.e., the device shall not check conformance of the certification path to RFC 4346 norRFC 2246.
     *   In order to use the server certificate during the TLS handshake, the corresponding private key is required.
     *   Therefore, if the key pair that is associated with the server certificate, i.e., the first certificate in the certification path, does not have an associated private key,
     *   the NoPrivateKey fault is produced and the certification path is not associated to the TLS server.
     *   
     */
    ReplaceServerCertificateAssignment() {
        return ONVIFAdvancedSecurity.ReplaceServerCertificateAssignment().run(this.config)
    }

    /**
     * 
     *   This operation sets the version(s) of TLS which the device shall use.  Valid values are taken from the TLSServerSupported capability.
     *   A client initiates a TLS session by sending a ClientHello with the hightest TLS version it supports.  This suggests to the server that the client can accept any TLS version up to and including that version.
     *   The server then chooses the TLS version to use.  This is generally the highest TLS version the server supports that is within the range of the client.  For example, if a ClientHello indicates TLS version 1.1, the server can proceed with TLS 1.0 or TLS 1.1.
     *   In the event that an ONVIF installation wishes to disable certain version(s) of TLS, it may do so with this operation.  For example, to disable TLS 1.0 on a device signaling support for TLS versions 1.0, 1.1, and 1.2, the enabled version list may be set to "1.1 1.2", omitting 1.0.  If a client then attempts to connect with a ClientHello containing TLS 1.0, the server shall send a "protocol_version" alert message and close the connection.  This handshake indicates to the client that TLS 1.0 is not supported by the server.  The client must try again with a higher TLS version suggestion.
     *   An empty list is not permitted.  Disabling all versions of TLS is not the intent of this operation.  See AddServerCertificateAssignment and RemoveServerCertificateAssignment.
     *   
     */
    SetEnabledTLSVersions() {
        return ONVIFAdvancedSecurity.SetEnabledTLSVersions().run(this.config)
    }

    /**
     * 
     *   This operation retrieves the version(s) of TLS which are currently enabled on the device.
     *   
     */
    GetEnabledTLSVersions() {
        return ONVIFAdvancedSecurity.GetEnabledTLSVersions().run(this.config)
    }

    /**
     * 
     *   This operation returns the IDs of all key pairs and certificates (including certification paths) that are assigned to the TLS server on the device.
     *   This operation may be used, e.g., if a client lost track of the certification path assignments on the device.
     *   If no certification path is assigned to the TLS server, an empty list is returned.
     *   
     */
    GetAssignedServerCertificates() {
        return ONVIFAdvancedSecurity.GetAssignedServerCertificates().run(this.config)
    }

    /**
     * 
     *           This operation activates or deactivates TLS client authentication for the TLS server on the device.
     *           The TLS server on the device shall require client authentication if and only if clientAuthenticationRequired is set to true.
     *           If TLS client authentication is requested to be enabled and no certification path validation policy is assigned to the TLS server, the device shall return an EnablingTLSClientAuthenticationFailed fault and shall not enable TLS client authentication.
     *           The device shall execute this command regardless of the TLS enabled/disabled state configured in the ONVIF Device Management Service.
     *         
     */
    SetClientAuthenticationRequired() {
        return ONVIFAdvancedSecurity.SetClientAuthenticationRequired().run(this.config)
    }

    /**
     * 
     *           This operation returns whether TLS client authentication is active.
     *         
     */
    GetClientAuthenticationRequired() {
        return ONVIFAdvancedSecurity.GetClientAuthenticationRequired().run(this.config)
    }

    /**
     * 
     *           This operation enables or disables mapping of the Common Name present in the TLS client certificate to an existing user name in the device.
     *           The TLS server on the device shall perform mapping if parameter clientAuthenticationRequired is set to true.
     *         
     */
    SetCnMapsToUser() {
        return ONVIFAdvancedSecurity.SetCnMapsToUser().run(this.config)
    }

    /**
     * 
     *           This operation returns whether the Common Name Mapping to User is enabled.
     *         
     */
    GetCnMapsToUser() {
        return ONVIFAdvancedSecurity.GetCnMapsToUser().run(this.config)
    }

    /**
     * 
     *           This operation assigns a certification path validation policy to the TLS server on the device. The TLS server shall enforce the policy when authenticating TLS clients and consider a client authentic if and only if the algorithm returns valid.
     *           If no certification path validation policy is stored under the requested CertPathValidationPolicyID, the device shall produce a CertPathValidationPolicyID fault.
     *           A TLS server may use different certification path validation policies to authenticate clients. Therefore more than one certification path validation policy may be assigned to the TLS server. If the maximum number of certification path validation policies that may be assigned to the  TLS server simultaneously is reached, the device shall produce a MaximumNumberOfTLSCertPathValidationPoliciesReached fault and shall not assign the requested certification path validation policy to the TLS server.
     *         
     */
    AddCertPathValidationPolicyAssignment() {
        return ONVIFAdvancedSecurity.AddCertPathValidationPolicyAssignment().run(this.config)
    }

    /**
     * 
     *           This operation removes a certification path validation policy assignment from the TLS server on the device.
     *           If the certification path validation policy identified by the requested CertPathValidationPolicyID is not associated to the TLS server, the device shall produce a CertPathValidationPolicy fault.
     *         
     */
    RemoveCertPathValidationPolicyAssignment() {
        return ONVIFAdvancedSecurity.RemoveCertPathValidationPolicyAssignment().run(this.config)
    }

    /**
     * 
     *           This operation replaces a certification path validation policy assignment to the TLS server on the device with another certification path validation policy assignment.
     *           If the certification path validation policy identified by the requested OldCertPathValidationPolicyID is not associated to the TLS server, the device shall produce an OldCertPathValidationPolicyID fault and shall not associate the certification path validation policy identified by the NewCertPathValidationPolicyID to the TLS server.
     *           If no certification path validation policy exists under the requested NewCertPathValidationPolicyID in the device’s keystore, the device shall produce a NewCertPathValidationPolicyID fault and shall not remove the association of the old certification path validation policy to the TLS server.
     *         
     */
    ReplaceCertPathValidationPolicyAssignment() {
        return ONVIFAdvancedSecurity.ReplaceCertPathValidationPolicyAssignment().run(this.config)
    }

    /**
     * 
     *           This operation returns the IDs of all certification path validation policies that are assigned to the TLS server on the device.
     *         
     */
    GetAssignedCertPathValidationPolicies() {
        return ONVIFAdvancedSecurity.GetAssignedCertPathValidationPolicies().run(this.config)
    }

    /**
     * 
     *   (to be written)
     *   
     */
    AddDot1XConfiguration() {
        return ONVIFAdvancedSecurity.AddDot1XConfiguration().run(this.config)
    }

    /**
     * 
     *   (to be written)
     *   
     */
    GetAllDot1XConfigurations() {
        return ONVIFAdvancedSecurity.GetAllDot1XConfigurations().run(this.config)
    }

    /**
     * 
     *   (to be written)
     *   
     */
    GetDot1XConfiguration() {
        return ONVIFAdvancedSecurity.GetDot1XConfiguration().run(this.config)
    }

    /**
     * 
     *   (to be written)
     *   
     */
    DeleteDot1XConfiguration() {
        return ONVIFAdvancedSecurity.DeleteDot1XConfiguration().run(this.config)
    }

    /**
     * 
     *   (to be written)
     *   
     */
    SetNetworkInterfaceDot1XConfiguration() {
        return ONVIFAdvancedSecurity.SetNetworkInterfaceDot1XConfiguration().run(this.config)
    }

    /**
     * 
     *   (to be written)
     *   
     */
    GetNetworkInterfaceDot1XConfiguration() {
        return ONVIFAdvancedSecurity.GetNetworkInterfaceDot1XConfiguration().run(this.config)
    }

    /**
     * 
     *   (to be written)
     *   
     */
    DeleteNetworkInterfaceDot1XConfiguration() {
        return ONVIFAdvancedSecurity.DeleteNetworkInterfaceDot1XConfiguration().run(this.config)
    }
}
