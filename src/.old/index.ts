export * from './stream'
export * from './profiles'


// type IOnvifNetworkResponse<T> = Observable<IResult<T, ITransportPayloadXml>>

// export interface IDeviceApi {
//   /**
//    * This operation requests the scope parameters of a device. The scope parameters are 
//    * used in the device discovery to match a probe message, see Section 7. The Scope parameters are of two different types:
//    *    Fixed
//    *    Configurable
//    * Fixed scope parameters are permanent device characteristics and cannot be removed through the device 
//    * management interface. The scope type is indicated in the scope list returned in the get scope parameters 
//    * response. A device shall support retrieval of discovery scope parameters through the GetScopes command. 
//    * As some scope parameters are mandatory, the device shall return a non-empty scope list in the response.
//    */
//   readonly getScopes: () => IOnvifNetworkResponse<ReadonlyArray<IScope>>

//   /**
//    * Returns information about services on the device.
//    */
//   readonly getServices: (includeCapability?: boolean) => IOnvifNetworkResponse<ReadonlyArray<IService>>

//   /**
//    * This operation gets basic device information from the device.
//    */
//   readonly getDeviceInformation: () => IOnvifNetworkResponse<IDeviceInformation>

//   /**
//    * This method has been replaced by the more generic GetServices method. 
//    * For capabilities of individual services refer to the GetServiceCapabilities methods.
//    */
//   readonly getCapabilities: (cat?: CapabilityCategory) => IOnvifNetworkResponse<Partial<ICapabilities>>

//   /**
//    * Returns the capabilities of the device service. The result is returned in a typed answer.
//    */
//   readonly getServiceCapabilities: () => IOnvifNetworkResponse<ICapabilities>

//   /**
//    * This operation gets the device system date and time. 
//    * The device shall support the return of the daylight saving setting and of 
//    * the manual system date and time (if applicable) or indication of NTP time (if applicable) 
//    * through the GetSystemDateAndTime command.
//    */
//   readonly getDeviceSystemDateAndTime: () => IOnvifNetworkResponse<SystemDateTime>

//   /**
//    * This operation is retrieves system backup configuration file(s) from a device. 
//    * The device should support return of back up configuration file(s) through the GetSystemBackup command. 
//    * The backup is returned with reference to a name and mime-type together with binary data. 
//    * The exact format of the backup configuration files is outside the scope of this standard.
//    */
//   readonly getSystemBackup: () => IOnvifNetworkResponse<any>

//   /**
//    * This operation gets a system log from the device. The exact format of the system logs is outside the scope of this standard.
//    */
//   readonly getSystemLog: () => IOnvifNetworkResponse<ISystemLog>

//   /**
//    * This operation gets a system log from the device. The exact format of the system logs is outside the scope of this standard.
//    */
//   readonly getSystemSupportInformation: () => IOnvifNetworkResponse<ISupportInformation>

//   /**
//   * This operation is used to retrieve URIs from which system information may be downloaded using HTTP. URIs may be returned for the following system information:
//   * System Logs. Multiple system logs may be returned, of different types. The exact format of the system logs is outside the scope of this specification.
//   * Support Information. This consists of arbitrary device diagnostics information from a device. The exact format of the diagnostic information is outside the scope of this specification.
//   * System Backup. The received file is a backup file that can be used to restore the current device configuration at a later date. The exact format of the backup configuration file is outside the scope of this specification.
//   * If the device allows retrieval of system logs, support information or system backup data, it should make them available via HTTP GET. If it does, it shall support the GetSystemUris command.
//   */
//   readonly getSystemUris: () => IOnvifNetworkResponse<any>

//   /**
//    * It is possible for an endpoint to request a URL that can be used to retrieve the complete 
//    * schema and WSDL definitions of a device. The command gives in return a URL entry point where all 
//    * the necessary product specific WSDL and schema definitions can be retrieved. The device shall 
//    * provide a URL for WSDL and schema download through the GetWsdlUrl command.
//    */
//   readonly getWsdlUrl: () => IOnvifNetworkResponse<WdslResponse>

//   /**
//    * This operation reboots the device.
//    */
//   readonly systemReboot: () => IOnvifNetworkResponse<ISystemRebootResponse>

//   /**
//   * This operation creates a new device user and corresponding credentials on a device for authentication purposes. 
//   * The device shall support creation of device users and their credentials through the CreateUsers command. 
//   * Either all users are created successfully or a fault message shall be returned without creating any user.
//   * 
//   * ONVIF compliant devices are recommended to support password length of at least 28 bytes, as clients may follow the 
//   * password derivation mechanism which results in 'password equivalent' of length 28 bytes, as described in section 3.1.2 
//   * of the ONVIF security white paper.
//   */
//   readonly createUser: (user: ICreateUserRequest) => IOnvifNetworkResponse<any>

//   /**
//    * This operation creates new device users and corresponding credentials on a device for authentication purposes. 
//    * The device shall support creation of device users and their credentials through the CreateUsers command. 
//    * Either all users are created successfully or a fault message shall be returned without creating any user.
//    * 
//    * ONVIF compliant devices are recommended to support password length of at least 28 bytes, as clients may follow the 
//    * password derivation mechanism which results in 'password equivalent' of length 28 bytes, as described in section 3.1.2 
//    * of the ONVIF security white paper.
//    */
//   readonly createUsers: (users: ReadonlyArray<ICreateUserRequest>) => IOnvifNetworkResponse<any>

//   /**
//   * Deletes a user on an device and there may exist users that cannot be deleted to ensure access to the unit. 
//   * Either all users are deleted successfully or a fault message MUST be returned and no users be deleted. 
//   * If a username exists multiple times in the request, then a fault message is returned.
//   */
//   readonly deleteUser: (username: string) => IOnvifNetworkResponse<any>

//   /**
//    * Deletes users on an device and there may exist users that cannot be deleted to ensure access to the unit. 
//    * Either all users are deleted successfully or a fault message MUST be returned and no users be deleted. 
//    * If a username exists multiple times in the request, then a fault message is returned.
//    */
//   readonly deleteUsers: (usernames: ReadonlyArray<string>) => IOnvifNetworkResponse<any>

//   /**
//    * This operation lists the registered users and corresponding credentials on a device. 
//    * The device shall support retrieval of registered device users and their credentials for 
//    * the user token through the GetUsers command.
//    */
//   readonly getUsers: () => IOnvifNetworkResponse<ReadonlyArray<IUser>>

//   /**
//   * This operation gets the DNS settings from a device. The device shall return its DNS configurations through the GetDNS command.
//   */
//   readonly getDNS: () => IOnvifNetworkResponse<IDNSInformation>

//   /**
//    * This operation gets the discovery mode of a device. See Section 7.2 for the definition of 
//    * the different device discovery modes. The device shall support retrieval of the discovery 
//    * mode setting through the GetDiscoveryMode command.
//    */
//   readonly getDeviceDiscoveryMode: () => IOnvifNetworkResponse<IDiscoveryResponse>

//   /**
//    * This operation gets the dynamic DNS settings from a device. 
//    * If the device supports dynamic DNS as specified in [RFC 2136] and [RFC 4702], 
//    * it shall be possible to get the type, name and TTL through the GetDynamicDNS command.
//    */
//   readonly getDynamicDNS: () => IOnvifNetworkResponse<IDynamicDNSInformation>

//   /**
//    * This operation is used by an endpoint to get the hostname from a device. 
//    * The device shall return its hostname configurations through the GetHostname command.
//    */
//   readonly getHostname: () => IOnvifNetworkResponse<IHostnameInformation>

//   /**
//   * This operation gets the network interface configuration from a device. The device shall support 
//   * return of network interface configuration settings as defined by the NetworkInterface type 
//   * through the GetNetworkInterfaces command.
//   */
//   readonly getNetworkInterfaces: () => IOnvifNetworkResponse<any>

//   /**
//   * This operation gets defined network protocols from a device. 
//   * The device shall support the GetNetworkProtocols command returning configured network protocols.
//   */
//   // readonly getNetworkProtocols: () => IOnvifNetworkResponse<INetworkProtocol>
// }

// export interface IMediaApi {
//   /**
//    * This operation gets basic device information from the device.
//    */
//   readonly getStreamUri: (req: IGetStreamUriRequest) => IOnvifNetworkResponse<IMediaUri>
//   readonly getProfiles: () => IOnvifNetworkResponse<any>
// }

// export interface IOnvifApi {

//   /**
//    * 
//    * https://www.onvif.org/ver10/device/wsdl/devicemgmt.wsdl
//    */
//   readonly device: IDeviceApi

//   /**
//    * Web service interface for configuration of the so called media profiles. 
//    * These include the selection of Video and Audio inputs as well as PTZ and Analytics
//    * modes and the configuration of Video and Audio encoders. 
//    * 
//    * http://www.onvif.org/ver10/media/wsdl
//    */
//   readonly media: IMediaApi
// }