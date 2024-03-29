import { createStandardRequestBodyFromString, mapResponseXmlToJson, generateRequestElements, mapResponseObsToProperty } from "../soap/request";
import { IDeviceConfig } from "../config";
import { SetDateTimeType, TimeZone, DateTime, FactoryDefaultType, AttachmentData, BackupFile, SystemLogType, DiscoveryMode, NetworkHost, RemoteUser, User, CapabilityCategory, IPAddress, DynamicDNSType, DNSName, ReferenceToken, NetworkInterfaceSetConfiguration, NetworkProtocol, IPv4Address, IPv6Address, IPAddressFilter, BinaryData, RelayOutputSettings, RelayLogicalState, AuxiliaryData, StorageConfigurationData, StorageConfiguration, LocationEntity, CertificateStatus, Certificate, CertificateWithPrivateKey, Dot1XConfiguration } from "./types";

export class ONVIFDevice {
    constructor(private config: IDeviceConfig) {
    }

    /**
     * Returns information about services on the device.
     */
    static GetServices(IncludeCapability: boolean) {
        return createStandardRequestBodyFromString(generateRequestElements('tds:GetServices')({tds_IncludeCapability:IncludeCapability}))
                        .map(mapResponseXmlToJson<any>('tds:GetServicesResponse'))
                      
    }

    /**
     * Returns the capabilities of the device service. The result is returned in a typed answer.
     */
    static GetServiceCapabilities() {
        return createStandardRequestBodyFromString(generateRequestElements('tds:GetServiceCapabilities')({}))
                        .map(mapResponseXmlToJson<any>('tds:GetServiceCapabilitiesResponse'))
                      
    }

    /**
     * This operation gets basic device information from the device.
     */
    static GetDeviceInformation() {
        return createStandardRequestBodyFromString(generateRequestElements('tds:GetDeviceInformation')({}))
                        .map(mapResponseXmlToJson<any>('tds:GetDeviceInformationResponse'))
                      
    }

    /**
     * This operation sets the device system date and time. The device shall support the
     *   configuration of the daylight saving setting and of the manual system date and time (if
     *   applicable) or indication of NTP time (if applicable) through the SetSystemDateAndTime
     *   command. 
     *   If system time and date are set manually, the client shall include UTCDateTime in the request.
     *   A TimeZone token which is not formed according to the rules of IEEE 1003.1 section 8.3 is considered as invalid timezone.
     *   The DayLightSavings flag should be set to true to activate any DST settings of the TimeZone string. 
     *   Clear the DayLightSavings flag if the DST portion of the TimeZone settings should be ignored.
     *   
     */
    static SetSystemDateAndTime(DateTimeType: SetDateTimeType, DaylightSavings: boolean, TimeZone?: TimeZone, UTCDateTime?: DateTime) {
        return createStandardRequestBodyFromString(generateRequestElements('tds:SetSystemDateAndTime')({tds_DateTimeType:DateTimeType,tds_DaylightSavings:DaylightSavings,tds_TimeZone:TimeZone,tds_UTCDateTime:UTCDateTime}))
                        .map(mapResponseXmlToJson<any>('tds:SetSystemDateAndTimeResponse'))
                      
    }

    /**
     * This operation gets the device system date and time. The device shall support the return of
     *   the daylight saving setting and of the manual system date and time (if applicable) or indication
     *   of NTP time (if applicable) through the GetSystemDateAndTime command.
     *   A device shall provide the UTCDateTime information.
     */
    static GetSystemDateAndTime() {
        return createStandardRequestBodyFromString(generateRequestElements('tds:GetSystemDateAndTime')({}))
                        .map(mapResponseXmlToJson<any>('tds:GetSystemDateAndTimeResponse'))
                      
    }

    /**
     * This operation reloads the parameters on the device to their factory default values.
     */
    static SetSystemFactoryDefault(FactoryDefault: FactoryDefaultType) {
        return createStandardRequestBodyFromString(generateRequestElements('tds:SetSystemFactoryDefault')({tds_FactoryDefault:FactoryDefault}))
                        .map(mapResponseXmlToJson<any>('tds:SetSystemFactoryDefaultResponse'))
                      
    }

    /**
     * This operation upgrades a device firmware version. After a successful upgrade the response
     *   message is sent before the device reboots. The device should support firmware upgrade
     *   through the UpgradeSystemFirmware command. The exact format of the firmware data is
     *   outside the scope of this standard.
     */
    static UpgradeSystemFirmware(Firmware: AttachmentData) {
        return createStandardRequestBodyFromString(generateRequestElements('tds:UpgradeSystemFirmware')({tds_Firmware:Firmware}))
                        .map(mapResponseXmlToJson<any>('tds:UpgradeSystemFirmwareResponse'))
                      
    }

    /**
     * This operation reboots the device.
     */
    static SystemReboot() {
        return createStandardRequestBodyFromString(generateRequestElements('tds:SystemReboot')({}))
                        .map(mapResponseXmlToJson<any>('tds:SystemRebootResponse'))
                      
    }

    /**
     * This operation restores the system backup configuration files(s) previously retrieved from a
     *   device. The device should support restore of backup configuration file(s) through the
     *   RestoreSystem command. The exact format of the backup configuration file(s) is outside the
     *   scope of this standard. If the command is supported, it shall accept backup files returned by
     *   the GetSystemBackup command.
     */
    static RestoreSystem(BackupFiles: BackupFile) {
        return createStandardRequestBodyFromString(generateRequestElements('tds:RestoreSystem')({tds_BackupFiles:BackupFiles}))
                        .map(mapResponseXmlToJson<any>('tds:RestoreSystemResponse'))
                      
    }

    /**
     * This operation is retrieves system backup configuration file(s) from a device. The device
     *   should support return of back up configuration file(s) through the GetSystemBackup command.
     *   The backup is returned with reference to a name and mime-type together with binary data.
     *   The exact format of the backup configuration files is outside the scope of this standard.
     */
    static GetSystemBackup() {
        return createStandardRequestBodyFromString(generateRequestElements('tds:GetSystemBackup')({}))
                        .map(mapResponseXmlToJson<any>('tds:GetSystemBackupResponse'))
                      
    }

    /**
     * This operation gets a system log from the device. The exact format of the system logs is outside the scope of this standard.
     */
    static GetSystemLog(LogType: SystemLogType) {
        return createStandardRequestBodyFromString(generateRequestElements('tds:GetSystemLog')({tds_LogType:LogType}))
                        .map(mapResponseXmlToJson<any>('tds:GetSystemLogResponse'))
                      
    }

    /**
     * This operation gets arbitary device diagnostics information from the device.
     */
    static GetSystemSupportInformation() {
        return createStandardRequestBodyFromString(generateRequestElements('tds:GetSystemSupportInformation')({}))
                        .map(mapResponseXmlToJson<any>('tds:GetSystemSupportInformationResponse'))
                      
    }

    /**
     * This operation requests the scope parameters of a device. The scope parameters are used in
     *   the device discovery to match a probe message, see Section 7. The Scope parameters are of
     *   two different types: 
     *   Fixed
     *   Configurable
     *   
     *   Fixed scope parameters are permanent device characteristics and cannot be removed through the device management interface. 
     *   The scope type is indicated in the scope list returned in the get scope parameters response. A device shall support 
     *   retrieval of discovery scope parameters through the GetScopes command. As some scope parameters are mandatory, 
     *   the device shall return a non-empty scope list in the response.
     */
    static GetScopes() {
        return createStandardRequestBodyFromString(generateRequestElements('tds:GetScopes')({}))
                        .map(mapResponseXmlToJson<any>('tds:GetScopesResponse'))
                      
    }

    /**
     * This operation sets the scope parameters of a device. The scope parameters are used in the
     *   device discovery to match a probe message.
     *   This operation replaces all existing configurable scope parameters (not fixed parameters). If
     *   this shall be avoided, one should use the scope add command instead. The device shall
     *   support configuration of discovery scope parameters through the SetScopes command.
     */
    static SetScopes(Scopes: string) {
        return createStandardRequestBodyFromString(generateRequestElements('tds:SetScopes')({tds_Scopes:Scopes}))
                        .map(mapResponseXmlToJson<any>('tds:SetScopesResponse'))
                      
    }

    /**
     * This operation adds new configurable scope parameters to a device. The scope parameters
     *   are used in the device discovery to match a probe message. The device shall
     *   support addition of discovery scope parameters through the AddScopes command.
     */
    static AddScopes(ScopeItem: string) {
        return createStandardRequestBodyFromString(generateRequestElements('tds:AddScopes')({tds_ScopeItem:ScopeItem}))
                        .map(mapResponseXmlToJson<any>('tds:AddScopesResponse'))
                      
    }

    /**
     * This operation deletes scope-configurable scope parameters from a device. The scope
     *   parameters are used in the device discovery to match a probe message, see Section 7. The
     *   device shall support deletion of discovery scope parameters through the RemoveScopes
     *   command.
     *   Table
     */
    static RemoveScopes(ScopeItem: string) {
        return createStandardRequestBodyFromString(generateRequestElements('tds:RemoveScopes')({tds_ScopeItem:ScopeItem}))
                        .map(mapResponseXmlToJson<any>('tds:RemoveScopesResponse'))
                      
    }

    /**
     * This operation gets the discovery mode of a device. See Section 7.2 for the definition of the
     *   different device discovery modes. The device shall support retrieval of the discovery mode
     *   setting through the GetDiscoveryMode command.
     */
    static GetDiscoveryMode() {
        return createStandardRequestBodyFromString(generateRequestElements('tds:GetDiscoveryMode')({}))
                        .map(mapResponseXmlToJson<any>('tds:GetDiscoveryModeResponse'))
                      
    }

    /**
     * This operation sets the discovery mode operation of a device. See Section 7.2 for the
     *   definition of the different device discovery modes. The device shall support configuration of
     *   the discovery mode setting through the SetDiscoveryMode command.
     */
    static SetDiscoveryMode(DiscoveryMode: DiscoveryMode) {
        return createStandardRequestBodyFromString(generateRequestElements('tds:SetDiscoveryMode')({tds_DiscoveryMode:DiscoveryMode}))
                        .map(mapResponseXmlToJson<any>('tds:SetDiscoveryModeResponse'))
                      
    }

    /**
     * This operation gets the remote discovery mode of a device. See Section 7.4 for the definition
     *   of remote discovery extensions. A device that supports remote discovery shall support
     *   retrieval of the remote discovery mode setting through the GetRemoteDiscoveryMode
     *   command.
     */
    static GetRemoteDiscoveryMode() {
        return createStandardRequestBodyFromString(generateRequestElements('tds:GetRemoteDiscoveryMode')({}))
                        .map(mapResponseXmlToJson<any>('tds:GetRemoteDiscoveryModeResponse'))
                      
    }

    /**
     * This operation sets the remote discovery mode of operation of a device. See Section 7.4 for
     *   the definition of remote discovery remote extensions. A device that supports remote discovery
     *   shall support configuration of the discovery mode setting through the
     *   SetRemoteDiscoveryMode command.
     */
    static SetRemoteDiscoveryMode(RemoteDiscoveryMode: DiscoveryMode) {
        return createStandardRequestBodyFromString(generateRequestElements('tds:SetRemoteDiscoveryMode')({tds_RemoteDiscoveryMode:RemoteDiscoveryMode}))
                        .map(mapResponseXmlToJson<any>('tds:SetRemoteDiscoveryModeResponse'))
                      
    }

    /**
     * This operation gets the remote DP address or addresses from a device. If the device supports
     *   remote discovery, as specified in Section 7.4, the device shall support retrieval of the remote
     *   DP address(es) through the GetDPAddresses command.
     */
    static GetDPAddresses() {
        return createStandardRequestBodyFromString(generateRequestElements('tds:GetDPAddresses')({}))
                        .map(mapResponseXmlToJson<any>('tds:GetDPAddressesResponse'))
                      
    }

    /**
     * This operation sets the remote DP address or addresses on a device. If the device supports
     *   remote discovery, as specified in Section 7.4, the device shall support configuration of the
     *   remote DP address(es) through the SetDPAddresses command.
     */
    static SetDPAddresses(DPAddress?: NetworkHost) {
        return createStandardRequestBodyFromString(generateRequestElements('tds:SetDPAddresses')({tds_DPAddress:DPAddress}))
                        .map(mapResponseXmlToJson<any>('tds:SetDPAddressesResponse'))
                      
    }

    /**
     * A client can ask for the device service endpoint reference address property that can be used
     *   to derive the password equivalent for remote user operation. The device shall support the
     *   GetEndpointReference command returning the address property of the device service
     *   endpoint reference.
     */
    static GetEndpointReference() {
        return createStandardRequestBodyFromString(generateRequestElements('tds:GetEndpointReference')({}))
                        .map(mapResponseXmlToJson<any>('tds:GetEndpointReferenceResponse'))
                      
    }

    /**
     * This operation returns the configured remote user (if any). A device supporting remote user
     *   handling shall support this operation. The user is only valid for the WS-UserToken profile or
     *   as a HTTP / RTSP user.
     *   The algorithm to use for deriving the password is described in section 5.12.2.1 of the core specification.
     */
    static GetRemoteUser() {
        return createStandardRequestBodyFromString(generateRequestElements('tds:GetRemoteUser')({}))
                        .map(mapResponseXmlToJson<any>('tds:GetRemoteUserResponse'))
                      
    }

    /**
     * This operation sets the remote user. A device supporting remote user handling shall support this
     *   operation. The user is only valid for the WS-UserToken profile or as a HTTP / RTSP user.
     *   The password that is set shall always be the original (not derived) password.
     *   If UseDerivedPassword is set password derivation shall be done by the device when connecting to a
     *   remote device.The algorithm to use for deriving the password is described in section 5.12.2.1 of the core specification.
     *   To remove the remote user SetRemoteUser should be called without the RemoteUser parameter.
     */
    static SetRemoteUser(RemoteUser?: RemoteUser) {
        return createStandardRequestBodyFromString(generateRequestElements('tds:SetRemoteUser')({tds_RemoteUser:RemoteUser}))
                        .map(mapResponseXmlToJson<any>('tds:SetRemoteUserResponse'))
                      
    }

    /**
     * This operation lists the registered users and corresponding credentials on a device. The
     *   device shall support retrieval of registered device users and their credentials for the user
     *   token through the GetUsers command.
     */
    static GetUsers() {
        return createStandardRequestBodyFromString(generateRequestElements('tds:GetUsers')({}))
                        .map(mapResponseXmlToJson<any>('tds:GetUsersResponse'))
                      
    }

    /**
     * This operation creates new device users and corresponding credentials on a device for authentication purposes. 
     *   The device shall support creation of device users and their credentials through the CreateUsers
     *   command. Either all users are created successfully or a fault message shall be returned
     *   without creating any user.
     *   ONVIF compliant devices are recommended to support password length of at least 28 bytes,
     *   as clients may follow the password derivation mechanism which results in 'password
     *   equivalent' of length 28 bytes, as described in section 3.1.2 of the ONVIF security white paper.
     */
    static CreateUsers(User: User) {
        return createStandardRequestBodyFromString(generateRequestElements('tds:CreateUsers')({tds_User:User}))
                        .map(mapResponseXmlToJson<any>('tds:CreateUsersResponse'))
                      
    }

    /**
     * This operation deletes users on a device. The device shall support deletion of device users and their credentials 
     *   through the DeleteUsers command. A device may have one or more fixed users
     *   that cannot be deleted to ensure access to the unit. Either all users are deleted successfully or a
     *   fault message shall be returned and no users be deleted.
     */
    static DeleteUsers(Username: string) {
        return createStandardRequestBodyFromString(generateRequestElements('tds:DeleteUsers')({tds_Username:Username}))
                        .map(mapResponseXmlToJson<any>('tds:DeleteUsersResponse'))
                      
    }

    /**
     * This operation updates the settings for one or several users on a device for authentication purposes.
     *   The device shall support update of device users and their credentials through the SetUser command. 
     *   Either all change requests are processed successfully or a fault message shall be returned and no change requests be processed.
     */
    static SetUser(User: User) {
        return createStandardRequestBodyFromString(generateRequestElements('tds:SetUser')({tds_User:User}))
                        .map(mapResponseXmlToJson<any>('tds:SetUserResponse'))
                      
    }

    /**
     * This method allows to provide a URL where product specific WSDL and schema definitions can be retrieved. This method is deprecated.
     */
    static GetWsdlUrl() {
        return createStandardRequestBodyFromString(generateRequestElements('tds:GetWsdlUrl')({}))
                        .map(mapResponseXmlToJson<any>('tds:GetWsdlUrlResponse'))
                      
    }

    /**
     * This method has been replaced by the more generic GetServices method.
     *    For capabilities of individual services refer to the GetServiceCapabilities methods.
     */
    static GetCapabilities(Category?: CapabilityCategory) {
        return createStandardRequestBodyFromString(generateRequestElements('tds:GetCapabilities')({tds_Category:Category}))
                        .map(mapResponseXmlToJson<any>('tds:GetCapabilitiesResponse'))
                      
    }

    /**
     * This operation is used by an endpoint to get the hostname from a device. The device shall
     *   return its hostname configurations through the GetHostname command.
     */
    static GetHostname() {
        return createStandardRequestBodyFromString(generateRequestElements('tds:GetHostname')({}))
                        .map(mapResponseXmlToJson<any>('tds:GetHostnameResponse'))
                      
    }

    /**
     * This operation sets the hostname on a device. It shall be possible to set the device hostname
     *   configurations through the SetHostname command.
     *   A device shall accept string formated according to RFC 1123 section 2.1 or alternatively to RFC 952, 
     *   other string shall be considered as invalid strings. 
     *   
     */
    static SetHostname(Name: string) {
        return createStandardRequestBodyFromString(generateRequestElements('tds:SetHostname')({tds_Name:Name}))
                        .map(mapResponseXmlToJson<any>('tds:SetHostnameResponse'))
                      
    }

    /**
     * This operation controls whether the hostname is set manually or retrieved via DHCP.
     */
    static SetHostnameFromDHCP(FromDHCP: boolean) {
        return createStandardRequestBodyFromString(generateRequestElements('tds:SetHostnameFromDHCP')({tds_FromDHCP:FromDHCP}))
                        .map(mapResponseXmlToJson<any>('tds:SetHostnameFromDHCPResponse'))
                      
    }

    /**
     * This operation gets the DNS settings from a device. The device shall return its DNS
     *   configurations through the GetDNS command.
     */
    static GetDNS() {
        return createStandardRequestBodyFromString(generateRequestElements('tds:GetDNS')({}))
                        .map(mapResponseXmlToJson<any>('tds:GetDNSResponse'))
                      
    }

    /**
     * This operation sets the DNS settings on a device. It shall be possible to set the device DNS
     *   configurations through the SetDNS command.
     */
    static SetDNS(FromDHCP: boolean, SearchDomain?: string, DNSManual?: IPAddress) {
        return createStandardRequestBodyFromString(generateRequestElements('tds:SetDNS')({tds_FromDHCP:FromDHCP,tds_SearchDomain:SearchDomain,tds_DNSManual:DNSManual}))
                        .map(mapResponseXmlToJson<any>('tds:SetDNSResponse'))
                      
    }

    /**
     * This operation gets the NTP settings from a device. If the device supports NTP, it shall be
     *   possible to get the NTP server settings through the GetNTP command.
     */
    static GetNTP() {
        return createStandardRequestBodyFromString(generateRequestElements('tds:GetNTP')({}))
                        .map(mapResponseXmlToJson<any>('tds:GetNTPResponse'))
                      
    }

    /**
     * This operation sets the NTP settings on a device. If the device supports NTP, it shall be
     *   possible to set the NTP server settings through the SetNTP command.
     *   A device shall accept string formated according to RFC 1123 section 2.1 or alternatively to RFC 952, 
     *   other string shall be considered as invalid strings. 
     *   Changes to the NTP server list will not affect the clock mode DateTimeType. Use SetSystemDateAndTime to activate NTP operation.
     *   
     */
    static SetNTP(FromDHCP: boolean, NTPManual?: NetworkHost) {
        return createStandardRequestBodyFromString(generateRequestElements('tds:SetNTP')({tds_FromDHCP:FromDHCP,tds_NTPManual:NTPManual}))
                        .map(mapResponseXmlToJson<any>('tds:SetNTPResponse'))
                      
    }

    /**
     * This operation gets the dynamic DNS settings from a device. If the device supports dynamic
     *   DNS as specified in [RFC 2136] and [RFC 4702], it shall be possible to get the type, name
     *   and TTL through the GetDynamicDNS command.
     */
    static GetDynamicDNS() {
        return createStandardRequestBodyFromString(generateRequestElements('tds:GetDynamicDNS')({}))
                        .map(mapResponseXmlToJson<any>('tds:GetDynamicDNSResponse'))
                      
    }

    /**
     * This operation sets the dynamic DNS settings on a device. If the device supports dynamic
     *   DNS as specified in [RFC 2136] and [RFC 4702], it shall be possible to set the type, name
     *   and TTL through the SetDynamicDNS command.
     */
    static SetDynamicDNS(Type: DynamicDNSType, Name?: DNSName, TTL?: string) {
        return createStandardRequestBodyFromString(generateRequestElements('tds:SetDynamicDNS')({tds_Type:Type,tds_Name:Name,tds_TTL:TTL}))
                        .map(mapResponseXmlToJson<any>('tds:SetDynamicDNSResponse'))
                      
    }

    /**
     * This operation gets the network interface configuration from a device. The device shall
     *   support return of network interface configuration settings as defined by the NetworkInterface
     *   type through the GetNetworkInterfaces command.
     */
    static GetNetworkInterfaces() {
        return createStandardRequestBodyFromString(generateRequestElements('tds:GetNetworkInterfaces')({}))
                        .map(mapResponseXmlToJson<any>('tds:GetNetworkInterfacesResponse'))
                      
    }

    /**
     * This operation sets the network interface configuration on a device. The device shall support
     *   network configuration of supported network interfaces through the SetNetworkInterfaces
     *   command.
     *   For interoperability with a client unaware of the IEEE 802.11 extension a device shall retain
     *   its IEEE 802.11 configuration if the IEEE 802.11 configuration element isn’t present in the
     *   request.
     */
    static SetNetworkInterfaces(InterfaceToken: ReferenceToken, NetworkInterface: NetworkInterfaceSetConfiguration) {
        return createStandardRequestBodyFromString(generateRequestElements('tds:SetNetworkInterfaces')({tds_InterfaceToken:InterfaceToken,tds_NetworkInterface:NetworkInterface}))
                        .map(mapResponseXmlToJson<any>('tds:SetNetworkInterfacesResponse'))
                      
    }

    /**
     * This operation gets defined network protocols from a device. The device shall support the
     *   GetNetworkProtocols command returning configured network protocols.
     */
    static GetNetworkProtocols() {
        return createStandardRequestBodyFromString(generateRequestElements('tds:GetNetworkProtocols')({}))
                        .map(mapResponseXmlToJson<any>('tds:GetNetworkProtocolsResponse'))
                      
    }

    /**
     * This operation configures defined network protocols on a device. The device shall support
     *   configuration of defined network protocols through the SetNetworkProtocols command.
     */
    static SetNetworkProtocols(NetworkProtocols: NetworkProtocol) {
        return createStandardRequestBodyFromString(generateRequestElements('tds:SetNetworkProtocols')({tds_NetworkProtocols:NetworkProtocols}))
                        .map(mapResponseXmlToJson<any>('tds:SetNetworkProtocolsResponse'))
                      
    }

    /**
     * This operation gets the default gateway settings from a device. The device shall support the
     *   GetNetworkDefaultGateway command returning configured default gateway address(es).
     */
    static GetNetworkDefaultGateway() {
        return createStandardRequestBodyFromString(generateRequestElements('tds:GetNetworkDefaultGateway')({}))
                        .map(mapResponseXmlToJson<any>('tds:GetNetworkDefaultGatewayResponse'))
                      
    }

    /**
     * This operation sets the default gateway settings on a device. The device shall support
     *   configuration of default gateway through the SetNetworkDefaultGateway command.
     */
    static SetNetworkDefaultGateway(IPv4Address?: IPv4Address, IPv6Address?: IPv6Address) {
        return createStandardRequestBodyFromString(generateRequestElements('tds:SetNetworkDefaultGateway')({tds_IPv4Address:IPv4Address,tds_IPv6Address:IPv6Address}))
                        .map(mapResponseXmlToJson<any>('tds:SetNetworkDefaultGatewayResponse'))
                      
    }

    /**
     * This operation gets the zero-configuration from a device. If the device supports dynamic IP
     *   configuration according to [RFC3927], it shall support the return of IPv4 zero configuration
     *   address and status through the GetZeroConfiguration command.
     *   Devices supporting zero configuration on more than one interface shall use the extension to list the additional interface settings.
     */
    static GetZeroConfiguration() {
        return createStandardRequestBodyFromString(generateRequestElements('tds:GetZeroConfiguration')({}))
                        .map(mapResponseXmlToJson<any>('tds:GetZeroConfigurationResponse'))
                      
    }

    /**
     * This operation sets the zero-configuration. Use GetCapalities to get if zero-zero-configuration is supported or not.
     */
    static SetZeroConfiguration(InterfaceToken: ReferenceToken, Enabled: boolean) {
        return createStandardRequestBodyFromString(generateRequestElements('tds:SetZeroConfiguration')({tds_InterfaceToken:InterfaceToken,tds_Enabled:Enabled}))
                        .map(mapResponseXmlToJson<any>('tds:SetZeroConfigurationResponse'))
                      
    }

    /**
     * This operation gets the IP address filter settings from a device. If the device supports device
     *   access control based on IP filtering rules (denied or accepted ranges of IP addresses), the
     *   device shall support the GetIPAddressFilter command.
     */
    static GetIPAddressFilter() {
        return createStandardRequestBodyFromString(generateRequestElements('tds:GetIPAddressFilter')({}))
                        .map(mapResponseXmlToJson<any>('tds:GetIPAddressFilterResponse'))
                      
    }

    /**
     * This operation sets the IP address filter settings on a device. If the device supports device
     *   access control based on IP filtering rules (denied or accepted ranges of IP addresses), the
     *   device shall support configuration of IP filtering rules through the SetIPAddressFilter
     *   command.
     */
    static SetIPAddressFilter(IPAddressFilter: IPAddressFilter) {
        return createStandardRequestBodyFromString(generateRequestElements('tds:SetIPAddressFilter')({tds_IPAddressFilter:IPAddressFilter}))
                        .map(mapResponseXmlToJson<any>('tds:SetIPAddressFilterResponse'))
                      
    }

    /**
     * This operation adds an IP filter address to a device. If the device supports device access
     *   control based on IP filtering rules (denied or accepted ranges of IP addresses), the device
     *   shall support adding of IP filtering addresses through the AddIPAddressFilter command.
     */
    static AddIPAddressFilter(IPAddressFilter: IPAddressFilter) {
        return createStandardRequestBodyFromString(generateRequestElements('tds:AddIPAddressFilter')({tds_IPAddressFilter:IPAddressFilter}))
                        .map(mapResponseXmlToJson<any>('tds:AddIPAddressFilterResponse'))
                      
    }

    /**
     * This operation deletes an IP filter address from a device. If the device supports device access
     *   control based on IP filtering rules (denied or accepted ranges of IP addresses), the device
     *   shall support deletion of IP filtering addresses through the RemoveIPAddressFilter command.
     */
    static RemoveIPAddressFilter(IPAddressFilter: IPAddressFilter) {
        return createStandardRequestBodyFromString(generateRequestElements('tds:RemoveIPAddressFilter')({tds_IPAddressFilter:IPAddressFilter}))
                        .map(mapResponseXmlToJson<any>('tds:RemoveIPAddressFilterResponse'))
                      
    }

    /**
     * Access to different services and sub-sets of services should be subject to access control. The
     *   WS-Security framework gives the prerequisite for end-point authentication. Authorization
     *   decisions can then be taken using an access security policy. This standard does not mandate
     *   any particular policy description format or security policy but this is up to the device
     *   manufacturer or system provider to choose policy and policy description format of choice.
     *   However, an access policy (in arbitrary format) can be requested using this command. If the
     *   device supports access policy settings based on WS-Security authentication, then the device
     *   shall support this command.
     */
    static GetAccessPolicy() {
        return createStandardRequestBodyFromString(generateRequestElements('tds:GetAccessPolicy')({}))
                        .map(mapResponseXmlToJson<any>('tds:GetAccessPolicyResponse'))
                      
    }

    /**
     * This command sets the device access security policy (for more details on the access security
     *   policy see the Get command). If the device supports access policy settings
     *   based on WS-Security authentication, then the device shall support this command.
     */
    static SetAccessPolicy(PolicyFile: BinaryData) {
        return createStandardRequestBodyFromString(generateRequestElements('tds:SetAccessPolicy')({tds_PolicyFile:PolicyFile}))
                        .map(mapResponseXmlToJson<any>('tds:SetAccessPolicyResponse'))
                      
    }

    /**
     * This operation gets a list of all available relay outputs and their settings.
     *   This method has been depricated with version 2.0. Refer to the DeviceIO service.
     */
    static GetRelayOutputs() {
        return createStandardRequestBodyFromString(generateRequestElements('tds:GetRelayOutputs')({}))
                        .map(mapResponseXmlToJson<any>('tds:GetRelayOutputsResponse'))
                      
    }

    /**
     * This operation sets the settings of a relay output.
     *   This method has been depricated with version 2.0. Refer to the DeviceIO service.
     */
    static SetRelayOutputSettings(RelayOutputToken: ReferenceToken, Properties: RelayOutputSettings) {
        return createStandardRequestBodyFromString(generateRequestElements('tds:SetRelayOutputSettings')({tds_RelayOutputToken:RelayOutputToken,tds_Properties:Properties}))
                        .map(mapResponseXmlToJson<any>('tds:SetRelayOutputSettingsResponse'))
                      
    }

    /**
     * This operation sets the state of a relay output.
     *   This method has been depricated with version 2.0. Refer to the DeviceIO service.
     */
    static SetRelayOutputState(RelayOutputToken: ReferenceToken, LogicalState: RelayLogicalState) {
        return createStandardRequestBodyFromString(generateRequestElements('tds:SetRelayOutputState')({tds_RelayOutputToken:RelayOutputToken,tds_LogicalState:LogicalState}))
                        .map(mapResponseXmlToJson<any>('tds:SetRelayOutputStateResponse'))
                      
    }

    /**
     * Manage auxiliary commands supported by a device, such as controlling an Infrared (IR) lamp, 
     *   a heater or a wiper or a thermometer that is connected to the device.
     *   The supported commands can be retrieved via the AuxiliaryCommands capability.
     *   Although the name of the auxiliary commands can be freely defined, commands starting with the prefix tt: are 
     *   reserved to define frequently used commands and these reserved commands shall all share the "tt:command|parameter" syntax.
     *   
     *   tt:Wiper|On – Request to start the wiper.
     *   tt:Wiper|Off – Request to stop the wiper.
     *   tt:Washer|On – Request to start the washer.
     *   tt:Washer|Off – Request to stop the washer.
     *   tt:WashingProcedure|On – Request to start the washing procedure.
     *   tt: WashingProcedure |Off – Request to stop the washing procedure.
     *   tt:IRLamp|On – Request to turn ON an IR illuminator attached to the unit.
     *   tt:IRLamp|Off – Request to turn OFF an IR illuminator attached to the unit.
     *   tt:IRLamp|Auto – Request to configure an IR illuminator attached to the unit so that it automatically turns ON and OFF.
     *   
     *   A device that indicates auxiliary service capability shall support this command.
     */
    static SendAuxiliaryCommand(AuxiliaryCommand: AuxiliaryData) {
        return createStandardRequestBodyFromString(generateRequestElements('tds:SendAuxiliaryCommand')({tds_AuxiliaryCommand:AuxiliaryCommand}))
                        .map(mapResponseXmlToJson<any>('tds:SendAuxiliaryCommandResponse'))
                      
    }

    /**
     * This operation returns the IEEE802.11 capabilities. The device shall support
     *   this operation.
     */
    static GetDot11Capabilities() {
        return createStandardRequestBodyFromString(generateRequestElements('tds:GetDot11Capabilities')({}))
                        .map(mapResponseXmlToJson<any>('tds:GetDot11CapabilitiesResponse'))
                      
    }

    /**
     * This operation returns the status of a wireless network interface. The device shall support this
     *   command.
     */
    static GetDot11Status(InterfaceToken: ReferenceToken) {
        return createStandardRequestBodyFromString(generateRequestElements('tds:GetDot11Status')({tds_InterfaceToken:InterfaceToken}))
                        .map(mapResponseXmlToJson<any>('tds:GetDot11StatusResponse'))
                      
    }

    /**
     * This operation returns a lists of the wireless networks in range of the device. A device should
     *   support this operation.
     */
    static ScanAvailableDot11Networks(InterfaceToken: ReferenceToken) {
        return createStandardRequestBodyFromString(generateRequestElements('tds:ScanAvailableDot11Networks')({tds_InterfaceToken:InterfaceToken}))
                        .map(mapResponseXmlToJson<any>('tds:ScanAvailableDot11NetworksResponse'))
                      
    }

    /**
     * This operation is used to retrieve URIs from which system information may be downloaded
     *   using HTTP. URIs may be returned for the following system information:
     *   System Logs. Multiple system logs may be returned, of different types. The exact format of
     *   the system logs is outside the scope of this specification.
     *   Support Information. This consists of arbitrary device diagnostics information from a device.
     *   The exact format of the diagnostic information is outside the scope of this specification.
     *   System Backup. The received file is a backup file that can be used to restore the current
     *   device configuration at a later date. The exact format of the backup configuration file is
     *   outside the scope of this specification.
     *   If the device allows retrieval of system logs, support information or system backup data, it
     *   should make them available via HTTP GET. If it does, it shall support the GetSystemUris
     *   command.
     */
    static GetSystemUris() {
        return createStandardRequestBodyFromString(generateRequestElements('tds:GetSystemUris')({}))
                        .map(mapResponseXmlToJson<any>('tds:GetSystemUrisResponse'))
                      
    }

    /**
     * This operation initiates a firmware upgrade using the HTTP POST mechanism. The response
     *   to the command includes an HTTP URL to which the upgrade file may be uploaded. The
     *   actual upgrade takes place as soon as the HTTP POST operation has completed. The device
     *   should support firmware upgrade through the StartFirmwareUpgrade command. The exact
     *   format of the firmware data is outside the scope of this specification.
     *   Firmware upgrade over HTTP may be achieved using the following steps:
     *   Client calls StartFirmwareUpgrade.
     *   Server responds with upload URI and optional delay value.
     *   Client waits for delay duration if specified by server.
     *   Client transmits the firmware image to the upload URI using HTTP POST.
     *   Server reprograms itself using the uploaded image, then reboots.
     *   
     *   If the firmware upgrade fails because the upgrade file was invalid, the HTTP POST response
     *   shall be “415 Unsupported Media Type”. If the firmware upgrade fails due to an error at the
     *   device, the HTTP POST response shall be “500 Internal Server Error”.
     *   The value of the Content-Type header in the HTTP POST request shall be “application/octetstream”.
     */
    static StartFirmwareUpgrade() {
        return createStandardRequestBodyFromString(generateRequestElements('tds:StartFirmwareUpgrade')({}))
                        .map(mapResponseXmlToJson<any>('tds:StartFirmwareUpgradeResponse'))
                      
    }

    /**
     * This operation initiates a system restore from backed up configuration data using the HTTP
     *   POST mechanism. The response to the command includes an HTTP URL to which the backup
     *   file may be uploaded. The actual restore takes place as soon as the HTTP POST operation
     *   has completed. Devices should support system restore through the StartSystemRestore
     *   command. The exact format of the backup configuration data is outside the scope of this
     *   specification.
     *   System restore over HTTP may be achieved using the following steps:
     *   Client calls StartSystemRestore.
     *   Server responds with upload URI.
     *   Client transmits the configuration data to the upload URI using HTTP POST.
     *   Server applies the uploaded configuration, then reboots if necessary.
     *   
     *   If the system restore fails because the uploaded file was invalid, the HTTP POST response
     *   shall be “415 Unsupported Media Type”. If the system restore fails due to an error at the
     *   device, the HTTP POST response shall be “500 Internal Server Error”.
     *   The value of the Content-Type header in the HTTP POST request shall be “application/octetstream”.
     */
    static StartSystemRestore() {
        return createStandardRequestBodyFromString(generateRequestElements('tds:StartSystemRestore')({}))
                        .map(mapResponseXmlToJson<any>('tds:StartSystemRestoreResponse'))
                      
    }

    /**
     * 
     *   This operation lists all existing storage configurations for the device. 
     *   
     */
    static GetStorageConfigurations() {
        return createStandardRequestBodyFromString(generateRequestElements('tds:GetStorageConfigurations')({}))
                        .map(mapResponseXmlToJson<any>('tds:GetStorageConfigurationsResponse'))
                      
    }

    /**
     * 
     *   This operation creates a new storage configuration. 
     *   The configuration data shall be created in the device and shall be persistent (remain after reboot).
     *   
     */
    static CreateStorageConfiguration(StorageConfiguration: StorageConfigurationData) {
        return createStandardRequestBodyFromString(generateRequestElements('tds:CreateStorageConfiguration')({tds_StorageConfiguration:StorageConfiguration}))
                        .map(mapResponseXmlToJson<any>('tds:CreateStorageConfigurationResponse'))
                      
    }

    /**
     * 
     *   This operation retrieves the Storage configuration associated with the given storage configuration token.
     *   
     */
    static GetStorageConfiguration(Token: ReferenceToken) {
        return createStandardRequestBodyFromString(generateRequestElements('tds:GetStorageConfiguration')({tds_Token:Token}))
                        .map(mapResponseXmlToJson<any>('tds:GetStorageConfigurationResponse'))
                      
    }

    /**
     * 
     *   This operation modifies an existing Storage configuration.
     *   
     */
    static SetStorageConfiguration(StorageConfiguration: StorageConfiguration) {
        return createStandardRequestBodyFromString(generateRequestElements('tds:SetStorageConfiguration')({tds_StorageConfiguration:StorageConfiguration}))
                        .map(mapResponseXmlToJson<any>('tds:SetStorageConfigurationResponse'))
                      
    }

    /**
     * 
     *   This operation deletes the given storage configuration and configuration change shall always be persistent.
     *   
     */
    static DeleteStorageConfiguration(Token: ReferenceToken) {
        return createStandardRequestBodyFromString(generateRequestElements('tds:DeleteStorageConfiguration')({tds_Token:Token}))
                        .map(mapResponseXmlToJson<any>('tds:DeleteStorageConfigurationResponse'))
                      
    }

    /**
     * 
     *   This operation lists all existing geo location configurations for the device. 
     *   
     */
    static GetGeoLocation() {
        return createStandardRequestBodyFromString(generateRequestElements('tds:GetGeoLocation')({}))
                        .map(mapResponseXmlToJson<any>('tds:GetGeoLocationResponse'))
                      
    }

    /**
     * 
     *   This operation allows to modify one or more geo configuration entries.
     *   
     */
    static SetGeoLocation(Location: LocationEntity) {
        return createStandardRequestBodyFromString(generateRequestElements('tds:SetGeoLocation')({tds_Location:Location}))
                        .map(mapResponseXmlToJson<any>('tds:SetGeoLocationResponse'))
                      
    }

    /**
     * 
     *   This operation deletes the given geo location entries.
     *   
     */
    static DeleteGeoLocation(Location: LocationEntity) {
        return createStandardRequestBodyFromString(generateRequestElements('tds:DeleteGeoLocation')({tds_Location:Location}))
                        .map(mapResponseXmlToJson<any>('tds:DeleteGeoLocationResponse'))
                      
    }

    /**
     * 
     */
    static CreateCertificate(CertificateID?: string, Subject?: string, ValidNotBefore?: string, ValidNotAfter?: string) {
        return createStandardRequestBodyFromString(generateRequestElements('tds:CreateCertificate')({tds_CertificateID:CertificateID,tds_Subject:Subject,tds_ValidNotBefore:ValidNotBefore,tds_ValidNotAfter:ValidNotAfter}))
                        .map(mapResponseXmlToJson<any>('tds:CreateCertificateResponse'))
                      
    }

    /**
     * 
     */
    static GetCertificates() {
        return createStandardRequestBodyFromString(generateRequestElements('tds:GetCertificates')({}))
                        .map(mapResponseXmlToJson<any>('tds:GetCertificatesResponse'))
                      
    }

    /**
     * 
     */
    static GetCertificatesStatus() {
        return createStandardRequestBodyFromString(generateRequestElements('tds:GetCertificatesStatus')({}))
                        .map(mapResponseXmlToJson<any>('tds:GetCertificatesStatusResponse'))
                      
    }

    /**
     * 
     */
    static SetCertificatesStatus(CertificateStatus?: CertificateStatus) {
        return createStandardRequestBodyFromString(generateRequestElements('tds:SetCertificatesStatus')({tds_CertificateStatus:CertificateStatus}))
                        .map(mapResponseXmlToJson<any>('tds:SetCertificatesStatusResponse'))
                      
    }

    /**
     * 
     */
    static DeleteCertificates(CertificateID: string) {
        return createStandardRequestBodyFromString(generateRequestElements('tds:DeleteCertificates')({tds_CertificateID:CertificateID}))
                        .map(mapResponseXmlToJson<any>('tds:DeleteCertificatesResponse'))
                      
    }

    /**
     * 
     */
    static GetPkcs10Request(CertificateID: string, Subject?: string, Attributes?: BinaryData) {
        return createStandardRequestBodyFromString(generateRequestElements('tds:GetPkcs10Request')({tds_CertificateID:CertificateID,tds_Subject:Subject,tds_Attributes:Attributes}))
                        .map(mapResponseXmlToJson<any>('tds:GetPkcs10RequestResponse'))
                      
    }

    /**
     * 
     */
    static LoadCertificates(NVTCertificate: Certificate) {
        return createStandardRequestBodyFromString(generateRequestElements('tds:LoadCertificates')({tds_NVTCertificate:NVTCertificate}))
                        .map(mapResponseXmlToJson<any>('tds:LoadCertificatesResponse'))
                      
    }

    /**
     * 
     */
    static GetClientCertificateMode() {
        return createStandardRequestBodyFromString(generateRequestElements('tds:GetClientCertificateMode')({}))
                        .map(mapResponseXmlToJson<any>('tds:GetClientCertificateModeResponse'))
                      
    }

    /**
     * 
     */
    static SetClientCertificateMode(Enabled: boolean) {
        return createStandardRequestBodyFromString(generateRequestElements('tds:SetClientCertificateMode')({tds_Enabled:Enabled}))
                        .map(mapResponseXmlToJson<any>('tds:SetClientCertificateModeResponse'))
                      
    }

    /**
     * 
     */
    static GetCACertificates() {
        return createStandardRequestBodyFromString(generateRequestElements('tds:GetCACertificates')({}))
                        .map(mapResponseXmlToJson<any>('tds:GetCACertificatesResponse'))
                      
    }

    /**
     * 
     */
    static LoadCertificateWithPrivateKey(CertificateWithPrivateKey: CertificateWithPrivateKey) {
        return createStandardRequestBodyFromString(generateRequestElements('tds:LoadCertificateWithPrivateKey')({tds_CertificateWithPrivateKey:CertificateWithPrivateKey}))
                        .map(mapResponseXmlToJson<any>('tds:LoadCertificateWithPrivateKeyResponse'))
                      
    }

    /**
     * 
     */
    static GetCertificateInformation(CertificateID: string) {
        return createStandardRequestBodyFromString(generateRequestElements('tds:GetCertificateInformation')({tds_CertificateID:CertificateID}))
                        .map(mapResponseXmlToJson<any>('tds:GetCertificateInformationResponse'))
                      
    }

    /**
     * 
     */
    static LoadCACertificates(CACertificate: Certificate) {
        return createStandardRequestBodyFromString(generateRequestElements('tds:LoadCACertificates')({tds_CACertificate:CACertificate}))
                        .map(mapResponseXmlToJson<any>('tds:LoadCACertificatesResponse'))
                      
    }

    /**
     * 
     */
    static CreateDot1XConfiguration(Dot1XConfiguration: Dot1XConfiguration) {
        return createStandardRequestBodyFromString(generateRequestElements('tds:CreateDot1XConfiguration')({tds_Dot1XConfiguration:Dot1XConfiguration}))
                        .map(mapResponseXmlToJson<any>('tds:CreateDot1XConfigurationResponse'))
                      
    }

    /**
     * 
     */
    static SetDot1XConfiguration(Dot1XConfiguration: Dot1XConfiguration) {
        return createStandardRequestBodyFromString(generateRequestElements('tds:SetDot1XConfiguration')({tds_Dot1XConfiguration:Dot1XConfiguration}))
                        .map(mapResponseXmlToJson<any>('tds:SetDot1XConfigurationResponse'))
                      
    }

    /**
     * 
     */
    static GetDot1XConfiguration(Dot1XConfigurationToken: ReferenceToken) {
        return createStandardRequestBodyFromString(generateRequestElements('tds:GetDot1XConfiguration')({tds_Dot1XConfigurationToken:Dot1XConfigurationToken}))
                        .map(mapResponseXmlToJson<any>('tds:GetDot1XConfigurationResponse'))
                      
    }

    /**
     * 
     */
    static GetDot1XConfigurations() {
        return createStandardRequestBodyFromString(generateRequestElements('tds:GetDot1XConfigurations')({}))
                        .map(mapResponseXmlToJson<any>('tds:GetDot1XConfigurationsResponse'))
                      
    }

    /**
     * 
     */
    static DeleteDot1XConfiguration(Dot1XConfigurationToken?: ReferenceToken) {
        return createStandardRequestBodyFromString(generateRequestElements('tds:DeleteDot1XConfiguration')({tds_Dot1XConfigurationToken:Dot1XConfigurationToken}))
                        .map(mapResponseXmlToJson<any>('tds:DeleteDot1XConfigurationResponse'))
                      
    }

    /**
     * Returns information about services on the device.
     */
    GetServices(IncludeCapability: boolean) {
        return ONVIFDevice.GetServices(IncludeCapability).run(this.config)
    }

    /**
     * Returns the capabilities of the device service. The result is returned in a typed answer.
     */
    GetServiceCapabilities() {
        return ONVIFDevice.GetServiceCapabilities().run(this.config)
    }

    /**
     * This operation gets basic device information from the device.
     */
    GetDeviceInformation() {
        return ONVIFDevice.GetDeviceInformation().run(this.config)
    }

    /**
     * This operation sets the device system date and time. The device shall support the
     *   configuration of the daylight saving setting and of the manual system date and time (if
     *   applicable) or indication of NTP time (if applicable) through the SetSystemDateAndTime
     *   command. 
     *   If system time and date are set manually, the client shall include UTCDateTime in the request.
     *   A TimeZone token which is not formed according to the rules of IEEE 1003.1 section 8.3 is considered as invalid timezone.
     *   The DayLightSavings flag should be set to true to activate any DST settings of the TimeZone string. 
     *   Clear the DayLightSavings flag if the DST portion of the TimeZone settings should be ignored.
     *   
     */
    SetSystemDateAndTime(DateTimeType: SetDateTimeType, DaylightSavings: boolean, TimeZone?: TimeZone, UTCDateTime?: DateTime) {
        return ONVIFDevice.SetSystemDateAndTime(DateTimeType,DaylightSavings,TimeZone,UTCDateTime).run(this.config)
    }

    /**
     * This operation gets the device system date and time. The device shall support the return of
     *   the daylight saving setting and of the manual system date and time (if applicable) or indication
     *   of NTP time (if applicable) through the GetSystemDateAndTime command.
     *   A device shall provide the UTCDateTime information.
     */
    GetSystemDateAndTime() {
        return ONVIFDevice.GetSystemDateAndTime().run(this.config)
    }

    /**
     * This operation reloads the parameters on the device to their factory default values.
     */
    SetSystemFactoryDefault(FactoryDefault: FactoryDefaultType) {
        return ONVIFDevice.SetSystemFactoryDefault(FactoryDefault).run(this.config)
    }

    /**
     * This operation upgrades a device firmware version. After a successful upgrade the response
     *   message is sent before the device reboots. The device should support firmware upgrade
     *   through the UpgradeSystemFirmware command. The exact format of the firmware data is
     *   outside the scope of this standard.
     */
    UpgradeSystemFirmware(Firmware: AttachmentData) {
        return ONVIFDevice.UpgradeSystemFirmware(Firmware).run(this.config)
    }

    /**
     * This operation reboots the device.
     */
    SystemReboot() {
        return ONVIFDevice.SystemReboot().run(this.config)
    }

    /**
     * This operation restores the system backup configuration files(s) previously retrieved from a
     *   device. The device should support restore of backup configuration file(s) through the
     *   RestoreSystem command. The exact format of the backup configuration file(s) is outside the
     *   scope of this standard. If the command is supported, it shall accept backup files returned by
     *   the GetSystemBackup command.
     */
    RestoreSystem(BackupFiles: BackupFile) {
        return ONVIFDevice.RestoreSystem(BackupFiles).run(this.config)
    }

    /**
     * This operation is retrieves system backup configuration file(s) from a device. The device
     *   should support return of back up configuration file(s) through the GetSystemBackup command.
     *   The backup is returned with reference to a name and mime-type together with binary data.
     *   The exact format of the backup configuration files is outside the scope of this standard.
     */
    GetSystemBackup() {
        return ONVIFDevice.GetSystemBackup().run(this.config)
    }

    /**
     * This operation gets a system log from the device. The exact format of the system logs is outside the scope of this standard.
     */
    GetSystemLog(LogType: SystemLogType) {
        return ONVIFDevice.GetSystemLog(LogType).run(this.config)
    }

    /**
     * This operation gets arbitary device diagnostics information from the device.
     */
    GetSystemSupportInformation() {
        return ONVIFDevice.GetSystemSupportInformation().run(this.config)
    }

    /**
     * This operation requests the scope parameters of a device. The scope parameters are used in
     *   the device discovery to match a probe message, see Section 7. The Scope parameters are of
     *   two different types: 
     *   Fixed
     *   Configurable
     *   
     *   Fixed scope parameters are permanent device characteristics and cannot be removed through the device management interface. 
     *   The scope type is indicated in the scope list returned in the get scope parameters response. A device shall support 
     *   retrieval of discovery scope parameters through the GetScopes command. As some scope parameters are mandatory, 
     *   the device shall return a non-empty scope list in the response.
     */
    GetScopes() {
        return ONVIFDevice.GetScopes().run(this.config)
    }

    /**
     * This operation sets the scope parameters of a device. The scope parameters are used in the
     *   device discovery to match a probe message.
     *   This operation replaces all existing configurable scope parameters (not fixed parameters). If
     *   this shall be avoided, one should use the scope add command instead. The device shall
     *   support configuration of discovery scope parameters through the SetScopes command.
     */
    SetScopes(Scopes: string) {
        return ONVIFDevice.SetScopes(Scopes).run(this.config)
    }

    /**
     * This operation adds new configurable scope parameters to a device. The scope parameters
     *   are used in the device discovery to match a probe message. The device shall
     *   support addition of discovery scope parameters through the AddScopes command.
     */
    AddScopes(ScopeItem: string) {
        return ONVIFDevice.AddScopes(ScopeItem).run(this.config)
    }

    /**
     * This operation deletes scope-configurable scope parameters from a device. The scope
     *   parameters are used in the device discovery to match a probe message, see Section 7. The
     *   device shall support deletion of discovery scope parameters through the RemoveScopes
     *   command.
     *   Table
     */
    RemoveScopes(ScopeItem: string) {
        return ONVIFDevice.RemoveScopes(ScopeItem).run(this.config)
    }

    /**
     * This operation gets the discovery mode of a device. See Section 7.2 for the definition of the
     *   different device discovery modes. The device shall support retrieval of the discovery mode
     *   setting through the GetDiscoveryMode command.
     */
    GetDiscoveryMode() {
        return ONVIFDevice.GetDiscoveryMode().run(this.config)
    }

    /**
     * This operation sets the discovery mode operation of a device. See Section 7.2 for the
     *   definition of the different device discovery modes. The device shall support configuration of
     *   the discovery mode setting through the SetDiscoveryMode command.
     */
    SetDiscoveryMode(DiscoveryMode: DiscoveryMode) {
        return ONVIFDevice.SetDiscoveryMode(DiscoveryMode).run(this.config)
    }

    /**
     * This operation gets the remote discovery mode of a device. See Section 7.4 for the definition
     *   of remote discovery extensions. A device that supports remote discovery shall support
     *   retrieval of the remote discovery mode setting through the GetRemoteDiscoveryMode
     *   command.
     */
    GetRemoteDiscoveryMode() {
        return ONVIFDevice.GetRemoteDiscoveryMode().run(this.config)
    }

    /**
     * This operation sets the remote discovery mode of operation of a device. See Section 7.4 for
     *   the definition of remote discovery remote extensions. A device that supports remote discovery
     *   shall support configuration of the discovery mode setting through the
     *   SetRemoteDiscoveryMode command.
     */
    SetRemoteDiscoveryMode(RemoteDiscoveryMode: DiscoveryMode) {
        return ONVIFDevice.SetRemoteDiscoveryMode(RemoteDiscoveryMode).run(this.config)
    }

    /**
     * This operation gets the remote DP address or addresses from a device. If the device supports
     *   remote discovery, as specified in Section 7.4, the device shall support retrieval of the remote
     *   DP address(es) through the GetDPAddresses command.
     */
    GetDPAddresses() {
        return ONVIFDevice.GetDPAddresses().run(this.config)
    }

    /**
     * This operation sets the remote DP address or addresses on a device. If the device supports
     *   remote discovery, as specified in Section 7.4, the device shall support configuration of the
     *   remote DP address(es) through the SetDPAddresses command.
     */
    SetDPAddresses(DPAddress?: NetworkHost) {
        return ONVIFDevice.SetDPAddresses(DPAddress).run(this.config)
    }

    /**
     * A client can ask for the device service endpoint reference address property that can be used
     *   to derive the password equivalent for remote user operation. The device shall support the
     *   GetEndpointReference command returning the address property of the device service
     *   endpoint reference.
     */
    GetEndpointReference() {
        return ONVIFDevice.GetEndpointReference().run(this.config)
    }

    /**
     * This operation returns the configured remote user (if any). A device supporting remote user
     *   handling shall support this operation. The user is only valid for the WS-UserToken profile or
     *   as a HTTP / RTSP user.
     *   The algorithm to use for deriving the password is described in section 5.12.2.1 of the core specification.
     */
    GetRemoteUser() {
        return ONVIFDevice.GetRemoteUser().run(this.config)
    }

    /**
     * This operation sets the remote user. A device supporting remote user handling shall support this
     *   operation. The user is only valid for the WS-UserToken profile or as a HTTP / RTSP user.
     *   The password that is set shall always be the original (not derived) password.
     *   If UseDerivedPassword is set password derivation shall be done by the device when connecting to a
     *   remote device.The algorithm to use for deriving the password is described in section 5.12.2.1 of the core specification.
     *   To remove the remote user SetRemoteUser should be called without the RemoteUser parameter.
     */
    SetRemoteUser(RemoteUser?: RemoteUser) {
        return ONVIFDevice.SetRemoteUser(RemoteUser).run(this.config)
    }

    /**
     * This operation lists the registered users and corresponding credentials on a device. The
     *   device shall support retrieval of registered device users and their credentials for the user
     *   token through the GetUsers command.
     */
    GetUsers() {
        return ONVIFDevice.GetUsers().run(this.config)
    }

    /**
     * This operation creates new device users and corresponding credentials on a device for authentication purposes. 
     *   The device shall support creation of device users and their credentials through the CreateUsers
     *   command. Either all users are created successfully or a fault message shall be returned
     *   without creating any user.
     *   ONVIF compliant devices are recommended to support password length of at least 28 bytes,
     *   as clients may follow the password derivation mechanism which results in 'password
     *   equivalent' of length 28 bytes, as described in section 3.1.2 of the ONVIF security white paper.
     */
    CreateUsers(User: User) {
        return ONVIFDevice.CreateUsers(User).run(this.config)
    }

    /**
     * This operation deletes users on a device. The device shall support deletion of device users and their credentials 
     *   through the DeleteUsers command. A device may have one or more fixed users
     *   that cannot be deleted to ensure access to the unit. Either all users are deleted successfully or a
     *   fault message shall be returned and no users be deleted.
     */
    DeleteUsers(Username: string) {
        return ONVIFDevice.DeleteUsers(Username).run(this.config)
    }

    /**
     * This operation updates the settings for one or several users on a device for authentication purposes.
     *   The device shall support update of device users and their credentials through the SetUser command. 
     *   Either all change requests are processed successfully or a fault message shall be returned and no change requests be processed.
     */
    SetUser(User: User) {
        return ONVIFDevice.SetUser(User).run(this.config)
    }

    /**
     * This method allows to provide a URL where product specific WSDL and schema definitions can be retrieved. This method is deprecated.
     */
    GetWsdlUrl() {
        return ONVIFDevice.GetWsdlUrl().run(this.config)
    }

    /**
     * This method has been replaced by the more generic GetServices method.
     *    For capabilities of individual services refer to the GetServiceCapabilities methods.
     */
    GetCapabilities(Category?: CapabilityCategory) {
        return ONVIFDevice.GetCapabilities(Category).run(this.config)
    }

    /**
     * This operation is used by an endpoint to get the hostname from a device. The device shall
     *   return its hostname configurations through the GetHostname command.
     */
    GetHostname() {
        return ONVIFDevice.GetHostname().run(this.config)
    }

    /**
     * This operation sets the hostname on a device. It shall be possible to set the device hostname
     *   configurations through the SetHostname command.
     *   A device shall accept string formated according to RFC 1123 section 2.1 or alternatively to RFC 952, 
     *   other string shall be considered as invalid strings. 
     *   
     */
    SetHostname(Name: string) {
        return ONVIFDevice.SetHostname(Name).run(this.config)
    }

    /**
     * This operation controls whether the hostname is set manually or retrieved via DHCP.
     */
    SetHostnameFromDHCP(FromDHCP: boolean) {
        return ONVIFDevice.SetHostnameFromDHCP(FromDHCP).run(this.config)
    }

    /**
     * This operation gets the DNS settings from a device. The device shall return its DNS
     *   configurations through the GetDNS command.
     */
    GetDNS() {
        return ONVIFDevice.GetDNS().run(this.config)
    }

    /**
     * This operation sets the DNS settings on a device. It shall be possible to set the device DNS
     *   configurations through the SetDNS command.
     */
    SetDNS(FromDHCP: boolean, SearchDomain?: string, DNSManual?: IPAddress) {
        return ONVIFDevice.SetDNS(FromDHCP,SearchDomain,DNSManual).run(this.config)
    }

    /**
     * This operation gets the NTP settings from a device. If the device supports NTP, it shall be
     *   possible to get the NTP server settings through the GetNTP command.
     */
    GetNTP() {
        return ONVIFDevice.GetNTP().run(this.config)
    }

    /**
     * This operation sets the NTP settings on a device. If the device supports NTP, it shall be
     *   possible to set the NTP server settings through the SetNTP command.
     *   A device shall accept string formated according to RFC 1123 section 2.1 or alternatively to RFC 952, 
     *   other string shall be considered as invalid strings. 
     *   Changes to the NTP server list will not affect the clock mode DateTimeType. Use SetSystemDateAndTime to activate NTP operation.
     *   
     */
    SetNTP(FromDHCP: boolean, NTPManual?: NetworkHost) {
        return ONVIFDevice.SetNTP(FromDHCP,NTPManual).run(this.config)
    }

    /**
     * This operation gets the dynamic DNS settings from a device. If the device supports dynamic
     *   DNS as specified in [RFC 2136] and [RFC 4702], it shall be possible to get the type, name
     *   and TTL through the GetDynamicDNS command.
     */
    GetDynamicDNS() {
        return ONVIFDevice.GetDynamicDNS().run(this.config)
    }

    /**
     * This operation sets the dynamic DNS settings on a device. If the device supports dynamic
     *   DNS as specified in [RFC 2136] and [RFC 4702], it shall be possible to set the type, name
     *   and TTL through the SetDynamicDNS command.
     */
    SetDynamicDNS(Type: DynamicDNSType, Name?: DNSName, TTL?: string) {
        return ONVIFDevice.SetDynamicDNS(Type,Name,TTL).run(this.config)
    }

    /**
     * This operation gets the network interface configuration from a device. The device shall
     *   support return of network interface configuration settings as defined by the NetworkInterface
     *   type through the GetNetworkInterfaces command.
     */
    GetNetworkInterfaces() {
        return ONVIFDevice.GetNetworkInterfaces().run(this.config)
    }

    /**
     * This operation sets the network interface configuration on a device. The device shall support
     *   network configuration of supported network interfaces through the SetNetworkInterfaces
     *   command.
     *   For interoperability with a client unaware of the IEEE 802.11 extension a device shall retain
     *   its IEEE 802.11 configuration if the IEEE 802.11 configuration element isn’t present in the
     *   request.
     */
    SetNetworkInterfaces(InterfaceToken: ReferenceToken, NetworkInterface: NetworkInterfaceSetConfiguration) {
        return ONVIFDevice.SetNetworkInterfaces(InterfaceToken,NetworkInterface).run(this.config)
    }

    /**
     * This operation gets defined network protocols from a device. The device shall support the
     *   GetNetworkProtocols command returning configured network protocols.
     */
    GetNetworkProtocols() {
        return ONVIFDevice.GetNetworkProtocols().run(this.config)
    }

    /**
     * This operation configures defined network protocols on a device. The device shall support
     *   configuration of defined network protocols through the SetNetworkProtocols command.
     */
    SetNetworkProtocols(NetworkProtocols: NetworkProtocol) {
        return ONVIFDevice.SetNetworkProtocols(NetworkProtocols).run(this.config)
    }

    /**
     * This operation gets the default gateway settings from a device. The device shall support the
     *   GetNetworkDefaultGateway command returning configured default gateway address(es).
     */
    GetNetworkDefaultGateway() {
        return ONVIFDevice.GetNetworkDefaultGateway().run(this.config)
    }

    /**
     * This operation sets the default gateway settings on a device. The device shall support
     *   configuration of default gateway through the SetNetworkDefaultGateway command.
     */
    SetNetworkDefaultGateway(IPv4Address?: IPv4Address, IPv6Address?: IPv6Address) {
        return ONVIFDevice.SetNetworkDefaultGateway(IPv4Address,IPv6Address).run(this.config)
    }

    /**
     * This operation gets the zero-configuration from a device. If the device supports dynamic IP
     *   configuration according to [RFC3927], it shall support the return of IPv4 zero configuration
     *   address and status through the GetZeroConfiguration command.
     *   Devices supporting zero configuration on more than one interface shall use the extension to list the additional interface settings.
     */
    GetZeroConfiguration() {
        return ONVIFDevice.GetZeroConfiguration().run(this.config)
    }

    /**
     * This operation sets the zero-configuration. Use GetCapalities to get if zero-zero-configuration is supported or not.
     */
    SetZeroConfiguration(InterfaceToken: ReferenceToken, Enabled: boolean) {
        return ONVIFDevice.SetZeroConfiguration(InterfaceToken,Enabled).run(this.config)
    }

    /**
     * This operation gets the IP address filter settings from a device. If the device supports device
     *   access control based on IP filtering rules (denied or accepted ranges of IP addresses), the
     *   device shall support the GetIPAddressFilter command.
     */
    GetIPAddressFilter() {
        return ONVIFDevice.GetIPAddressFilter().run(this.config)
    }

    /**
     * This operation sets the IP address filter settings on a device. If the device supports device
     *   access control based on IP filtering rules (denied or accepted ranges of IP addresses), the
     *   device shall support configuration of IP filtering rules through the SetIPAddressFilter
     *   command.
     */
    SetIPAddressFilter(IPAddressFilter: IPAddressFilter) {
        return ONVIFDevice.SetIPAddressFilter(IPAddressFilter).run(this.config)
    }

    /**
     * This operation adds an IP filter address to a device. If the device supports device access
     *   control based on IP filtering rules (denied or accepted ranges of IP addresses), the device
     *   shall support adding of IP filtering addresses through the AddIPAddressFilter command.
     */
    AddIPAddressFilter(IPAddressFilter: IPAddressFilter) {
        return ONVIFDevice.AddIPAddressFilter(IPAddressFilter).run(this.config)
    }

    /**
     * This operation deletes an IP filter address from a device. If the device supports device access
     *   control based on IP filtering rules (denied or accepted ranges of IP addresses), the device
     *   shall support deletion of IP filtering addresses through the RemoveIPAddressFilter command.
     */
    RemoveIPAddressFilter(IPAddressFilter: IPAddressFilter) {
        return ONVIFDevice.RemoveIPAddressFilter(IPAddressFilter).run(this.config)
    }

    /**
     * Access to different services and sub-sets of services should be subject to access control. The
     *   WS-Security framework gives the prerequisite for end-point authentication. Authorization
     *   decisions can then be taken using an access security policy. This standard does not mandate
     *   any particular policy description format or security policy but this is up to the device
     *   manufacturer or system provider to choose policy and policy description format of choice.
     *   However, an access policy (in arbitrary format) can be requested using this command. If the
     *   device supports access policy settings based on WS-Security authentication, then the device
     *   shall support this command.
     */
    GetAccessPolicy() {
        return ONVIFDevice.GetAccessPolicy().run(this.config)
    }

    /**
     * This command sets the device access security policy (for more details on the access security
     *   policy see the Get command). If the device supports access policy settings
     *   based on WS-Security authentication, then the device shall support this command.
     */
    SetAccessPolicy(PolicyFile: BinaryData) {
        return ONVIFDevice.SetAccessPolicy(PolicyFile).run(this.config)
    }

    /**
     * This operation gets a list of all available relay outputs and their settings.
     *   This method has been depricated with version 2.0. Refer to the DeviceIO service.
     */
    GetRelayOutputs() {
        return ONVIFDevice.GetRelayOutputs().run(this.config)
    }

    /**
     * This operation sets the settings of a relay output.
     *   This method has been depricated with version 2.0. Refer to the DeviceIO service.
     */
    SetRelayOutputSettings(RelayOutputToken: ReferenceToken, Properties: RelayOutputSettings) {
        return ONVIFDevice.SetRelayOutputSettings(RelayOutputToken,Properties).run(this.config)
    }

    /**
     * This operation sets the state of a relay output.
     *   This method has been depricated with version 2.0. Refer to the DeviceIO service.
     */
    SetRelayOutputState(RelayOutputToken: ReferenceToken, LogicalState: RelayLogicalState) {
        return ONVIFDevice.SetRelayOutputState(RelayOutputToken,LogicalState).run(this.config)
    }

    /**
     * Manage auxiliary commands supported by a device, such as controlling an Infrared (IR) lamp, 
     *   a heater or a wiper or a thermometer that is connected to the device.
     *   The supported commands can be retrieved via the AuxiliaryCommands capability.
     *   Although the name of the auxiliary commands can be freely defined, commands starting with the prefix tt: are 
     *   reserved to define frequently used commands and these reserved commands shall all share the "tt:command|parameter" syntax.
     *   
     *   tt:Wiper|On – Request to start the wiper.
     *   tt:Wiper|Off – Request to stop the wiper.
     *   tt:Washer|On – Request to start the washer.
     *   tt:Washer|Off – Request to stop the washer.
     *   tt:WashingProcedure|On – Request to start the washing procedure.
     *   tt: WashingProcedure |Off – Request to stop the washing procedure.
     *   tt:IRLamp|On – Request to turn ON an IR illuminator attached to the unit.
     *   tt:IRLamp|Off – Request to turn OFF an IR illuminator attached to the unit.
     *   tt:IRLamp|Auto – Request to configure an IR illuminator attached to the unit so that it automatically turns ON and OFF.
     *   
     *   A device that indicates auxiliary service capability shall support this command.
     */
    SendAuxiliaryCommand(AuxiliaryCommand: AuxiliaryData) {
        return ONVIFDevice.SendAuxiliaryCommand(AuxiliaryCommand).run(this.config)
    }

    /**
     * This operation returns the IEEE802.11 capabilities. The device shall support
     *   this operation.
     */
    GetDot11Capabilities() {
        return ONVIFDevice.GetDot11Capabilities().run(this.config)
    }

    /**
     * This operation returns the status of a wireless network interface. The device shall support this
     *   command.
     */
    GetDot11Status(InterfaceToken: ReferenceToken) {
        return ONVIFDevice.GetDot11Status(InterfaceToken).run(this.config)
    }

    /**
     * This operation returns a lists of the wireless networks in range of the device. A device should
     *   support this operation.
     */
    ScanAvailableDot11Networks(InterfaceToken: ReferenceToken) {
        return ONVIFDevice.ScanAvailableDot11Networks(InterfaceToken).run(this.config)
    }

    /**
     * This operation is used to retrieve URIs from which system information may be downloaded
     *   using HTTP. URIs may be returned for the following system information:
     *   System Logs. Multiple system logs may be returned, of different types. The exact format of
     *   the system logs is outside the scope of this specification.
     *   Support Information. This consists of arbitrary device diagnostics information from a device.
     *   The exact format of the diagnostic information is outside the scope of this specification.
     *   System Backup. The received file is a backup file that can be used to restore the current
     *   device configuration at a later date. The exact format of the backup configuration file is
     *   outside the scope of this specification.
     *   If the device allows retrieval of system logs, support information or system backup data, it
     *   should make them available via HTTP GET. If it does, it shall support the GetSystemUris
     *   command.
     */
    GetSystemUris() {
        return ONVIFDevice.GetSystemUris().run(this.config)
    }

    /**
     * This operation initiates a firmware upgrade using the HTTP POST mechanism. The response
     *   to the command includes an HTTP URL to which the upgrade file may be uploaded. The
     *   actual upgrade takes place as soon as the HTTP POST operation has completed. The device
     *   should support firmware upgrade through the StartFirmwareUpgrade command. The exact
     *   format of the firmware data is outside the scope of this specification.
     *   Firmware upgrade over HTTP may be achieved using the following steps:
     *   Client calls StartFirmwareUpgrade.
     *   Server responds with upload URI and optional delay value.
     *   Client waits for delay duration if specified by server.
     *   Client transmits the firmware image to the upload URI using HTTP POST.
     *   Server reprograms itself using the uploaded image, then reboots.
     *   
     *   If the firmware upgrade fails because the upgrade file was invalid, the HTTP POST response
     *   shall be “415 Unsupported Media Type”. If the firmware upgrade fails due to an error at the
     *   device, the HTTP POST response shall be “500 Internal Server Error”.
     *   The value of the Content-Type header in the HTTP POST request shall be “application/octetstream”.
     */
    StartFirmwareUpgrade() {
        return ONVIFDevice.StartFirmwareUpgrade().run(this.config)
    }

    /**
     * This operation initiates a system restore from backed up configuration data using the HTTP
     *   POST mechanism. The response to the command includes an HTTP URL to which the backup
     *   file may be uploaded. The actual restore takes place as soon as the HTTP POST operation
     *   has completed. Devices should support system restore through the StartSystemRestore
     *   command. The exact format of the backup configuration data is outside the scope of this
     *   specification.
     *   System restore over HTTP may be achieved using the following steps:
     *   Client calls StartSystemRestore.
     *   Server responds with upload URI.
     *   Client transmits the configuration data to the upload URI using HTTP POST.
     *   Server applies the uploaded configuration, then reboots if necessary.
     *   
     *   If the system restore fails because the uploaded file was invalid, the HTTP POST response
     *   shall be “415 Unsupported Media Type”. If the system restore fails due to an error at the
     *   device, the HTTP POST response shall be “500 Internal Server Error”.
     *   The value of the Content-Type header in the HTTP POST request shall be “application/octetstream”.
     */
    StartSystemRestore() {
        return ONVIFDevice.StartSystemRestore().run(this.config)
    }

    /**
     * 
     *   This operation lists all existing storage configurations for the device. 
     *   
     */
    GetStorageConfigurations() {
        return ONVIFDevice.GetStorageConfigurations().run(this.config)
    }

    /**
     * 
     *   This operation creates a new storage configuration. 
     *   The configuration data shall be created in the device and shall be persistent (remain after reboot).
     *   
     */
    CreateStorageConfiguration(StorageConfiguration: StorageConfigurationData) {
        return ONVIFDevice.CreateStorageConfiguration(StorageConfiguration).run(this.config)
    }

    /**
     * 
     *   This operation retrieves the Storage configuration associated with the given storage configuration token.
     *   
     */
    GetStorageConfiguration(Token: ReferenceToken) {
        return ONVIFDevice.GetStorageConfiguration(Token).run(this.config)
    }

    /**
     * 
     *   This operation modifies an existing Storage configuration.
     *   
     */
    SetStorageConfiguration(StorageConfiguration: StorageConfiguration) {
        return ONVIFDevice.SetStorageConfiguration(StorageConfiguration).run(this.config)
    }

    /**
     * 
     *   This operation deletes the given storage configuration and configuration change shall always be persistent.
     *   
     */
    DeleteStorageConfiguration(Token: ReferenceToken) {
        return ONVIFDevice.DeleteStorageConfiguration(Token).run(this.config)
    }

    /**
     * 
     *   This operation lists all existing geo location configurations for the device. 
     *   
     */
    GetGeoLocation() {
        return ONVIFDevice.GetGeoLocation().run(this.config)
    }

    /**
     * 
     *   This operation allows to modify one or more geo configuration entries.
     *   
     */
    SetGeoLocation(Location: LocationEntity) {
        return ONVIFDevice.SetGeoLocation(Location).run(this.config)
    }

    /**
     * 
     *   This operation deletes the given geo location entries.
     *   
     */
    DeleteGeoLocation(Location: LocationEntity) {
        return ONVIFDevice.DeleteGeoLocation(Location).run(this.config)
    }

    /**
     * 
     */
    CreateCertificate(CertificateID?: string, Subject?: string, ValidNotBefore?: string, ValidNotAfter?: string) {
        return ONVIFDevice.CreateCertificate(CertificateID,Subject,ValidNotBefore,ValidNotAfter).run(this.config)
    }

    /**
     * 
     */
    GetCertificates() {
        return ONVIFDevice.GetCertificates().run(this.config)
    }

    /**
     * 
     */
    GetCertificatesStatus() {
        return ONVIFDevice.GetCertificatesStatus().run(this.config)
    }

    /**
     * 
     */
    SetCertificatesStatus(CertificateStatus?: CertificateStatus) {
        return ONVIFDevice.SetCertificatesStatus(CertificateStatus).run(this.config)
    }

    /**
     * 
     */
    DeleteCertificates(CertificateID: string) {
        return ONVIFDevice.DeleteCertificates(CertificateID).run(this.config)
    }

    /**
     * 
     */
    GetPkcs10Request(CertificateID: string, Subject?: string, Attributes?: BinaryData) {
        return ONVIFDevice.GetPkcs10Request(CertificateID,Subject,Attributes).run(this.config)
    }

    /**
     * 
     */
    LoadCertificates(NVTCertificate: Certificate) {
        return ONVIFDevice.LoadCertificates(NVTCertificate).run(this.config)
    }

    /**
     * 
     */
    GetClientCertificateMode() {
        return ONVIFDevice.GetClientCertificateMode().run(this.config)
    }

    /**
     * 
     */
    SetClientCertificateMode(Enabled: boolean) {
        return ONVIFDevice.SetClientCertificateMode(Enabled).run(this.config)
    }

    /**
     * 
     */
    GetCACertificates() {
        return ONVIFDevice.GetCACertificates().run(this.config)
    }

    /**
     * 
     */
    LoadCertificateWithPrivateKey(CertificateWithPrivateKey: CertificateWithPrivateKey) {
        return ONVIFDevice.LoadCertificateWithPrivateKey(CertificateWithPrivateKey).run(this.config)
    }

    /**
     * 
     */
    GetCertificateInformation(CertificateID: string) {
        return ONVIFDevice.GetCertificateInformation(CertificateID).run(this.config)
    }

    /**
     * 
     */
    LoadCACertificates(CACertificate: Certificate) {
        return ONVIFDevice.LoadCACertificates(CACertificate).run(this.config)
    }

    /**
     * 
     */
    CreateDot1XConfiguration(Dot1XConfiguration: Dot1XConfiguration) {
        return ONVIFDevice.CreateDot1XConfiguration(Dot1XConfiguration).run(this.config)
    }

    /**
     * 
     */
    SetDot1XConfiguration(Dot1XConfiguration: Dot1XConfiguration) {
        return ONVIFDevice.SetDot1XConfiguration(Dot1XConfiguration).run(this.config)
    }

    /**
     * 
     */
    GetDot1XConfiguration(Dot1XConfigurationToken: ReferenceToken) {
        return ONVIFDevice.GetDot1XConfiguration(Dot1XConfigurationToken).run(this.config)
    }

    /**
     * 
     */
    GetDot1XConfigurations() {
        return ONVIFDevice.GetDot1XConfigurations().run(this.config)
    }

    /**
     * 
     */
    DeleteDot1XConfiguration(Dot1XConfigurationToken?: ReferenceToken) {
        return ONVIFDevice.DeleteDot1XConfiguration(Dot1XConfigurationToken).run(this.config)
    }
}
