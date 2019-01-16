import { Observable } from 'rxjs'
import { maybe, reader } from 'typescript-monads'
import { IDeviceConfig, ISystemConfig, IUserCredentials } from '../config/interfaces'
import { getStreamUri, IGetStreamUriRequest } from '../api/media/stream'
import { getProfiles } from '../api/media/profiles'
import {
  IService, IScope, getScopes, getServices, IDeviceInformation, getDeviceInformation,
  getCapabilities, getServiceCapabilities, ICapabilities, CapabilityCategory
} from '../api/device/capabilities'
import {
  getDeviceSystemDateAndTime, getSystemBackup, getSystemLog,
  getSystemSupportInformation, getSystemUris, getWsdlUrl, systemReboot, SystemDateTime,
  ISystemLog, ISupportInformation, WdslResponse, ISystemRebootResponse
} from '../api/device/system'
import {
  createUser, createUsers, deleteUser, deleteUsers, getUsers, ICreateUserRequest, IUser
} from '../api/device/users'
import {
  getDNS, getDeviceDiscoveryMode, getDynamicDNS, getHostname, getNetworkInterfaces,
  getNetworkProtocols, IDNSInformation, IDiscoveryResponse, IDynamicDNSInformation,
  IHostnameInformation, INetworkProtocol
} from '../api/device/network'

export interface IDeviceApi {
  readonly getScopes: () => Observable<ReadonlyArray<IScope>>
  readonly getServices: (includeCapability?: boolean) => Observable<ReadonlyArray<IService>>
  readonly getDeviceInformation: () => Observable<IDeviceInformation>
  readonly getCapabilities: (cat?: CapabilityCategory) => Observable<Partial<ICapabilities>>
  readonly getServiceCapabilities: () => Observable<ICapabilities>
  readonly getDeviceSystemDateAndTime: () => Observable<SystemDateTime>
  readonly getSystemBackup: () => Observable<any>
  readonly getSystemLog: () => Observable<ISystemLog>
  readonly getSystemSupportInformation: () => Observable<ISupportInformation>

  /**
  * This operation is used to retrieve URIs from which system information may be downloaded using HTTP. URIs may be returned for the following system information:
  * System Logs. Multiple system logs may be returned, of different types. The exact format of the system logs is outside the scope of this specification.
  * Support Information. This consists of arbitrary device diagnostics information from a device. The exact format of the diagnostic information is outside the scope of this specification.
  * System Backup. The received file is a backup file that can be used to restore the current device configuration at a later date. The exact format of the backup configuration file is outside the scope of this specification.
  * If the device allows retrieval of system logs, support information or system backup data, it should make them available via HTTP GET. If it does, it shall support the GetSystemUris command.
  */
  readonly getSystemUris: () => Observable<any>
  readonly getWsdlUrl: () => Observable<WdslResponse>
  readonly systemReboot: () => Observable<ISystemRebootResponse>
  readonly createUser: (user: ICreateUserRequest) => Observable<any>
  readonly createUsers: (users: ReadonlyArray<ICreateUserRequest>) => Observable<any>
  readonly deleteUser: (username: string) => Observable<any>
  readonly deleteUsers: (usernames: ReadonlyArray<string>) => Observable<any>
  readonly getUsers: () => Observable<ReadonlyArray<IUser>>

  readonly getDNS: () => Observable<IDNSInformation>
  readonly getDeviceDiscoveryMode: () => Observable<IDiscoveryResponse>
  readonly getDynamicDNS: () => Observable<IDynamicDNSInformation>
  readonly getHostname: () => Observable<IHostnameInformation>
  readonly getNetworkInterfaces: () => Observable<any>
  readonly getNetworkProtocols: () => Observable<ReadonlyArray<INetworkProtocol>>
}

export interface IMediaApi {
  readonly getStreamUri: (req: IGetStreamUriRequest) => Observable<any>
  readonly getProfiles: () => Observable<any>
}

export interface IOnvifApi {
  readonly device: IDeviceApi
  readonly media: IMediaApi
}

export interface IManagedDevice {
  readonly api: IOnvifApi
}

export interface IDeviceInitConfig {
  readonly deviceUrl: string
  readonly username?: string
  readonly password?: string
}

export const createManagedDevice = (config: IDeviceInitConfig) => reader<ISystemConfig, IManagedDevice>(system => {
  const innerRunConfig: IDeviceConfig = {
    system,
    deviceUrl: config.deviceUrl,
    user: config.username && config.password
      ? maybe<IUserCredentials>({ username: config.username, password: config.password })
      : maybe<IUserCredentials>()
  }

  return {
    api: {
      device: {
        getScopes: () => getScopes().run(innerRunConfig),
        getServices: (includeCapability?: boolean) => getServices(includeCapability).run(innerRunConfig),
        getDeviceInformation: () => getDeviceInformation().run(innerRunConfig),
        getCapabilities: (cat: CapabilityCategory = CapabilityCategory.ALL) => getCapabilities(cat).run(innerRunConfig),
        getServiceCapabilities: () => getServiceCapabilities().run(innerRunConfig),
        getDeviceSystemDateAndTime: () => getDeviceSystemDateAndTime().run(innerRunConfig),
        getSystemBackup: () => getSystemBackup().run(innerRunConfig),
        getSystemLog: () => getSystemLog().run(innerRunConfig),
        getSystemSupportInformation: () => getSystemSupportInformation().run(innerRunConfig),
        getSystemUris: () => getSystemUris().run(innerRunConfig),
        getWsdlUrl: () => getWsdlUrl().run(innerRunConfig),
        systemReboot: () => systemReboot().run(innerRunConfig),
        createUser: (user: ICreateUserRequest) => createUser(user).run(innerRunConfig),
        createUsers: (users: ReadonlyArray<ICreateUserRequest>) => createUsers(users).run(innerRunConfig),
        deleteUser: (username: string) => deleteUser(username).run(innerRunConfig),
        deleteUsers: (usernames: ReadonlyArray<string>) => deleteUsers(usernames).run(innerRunConfig),
        getUsers: () => getUsers().run(innerRunConfig),
        getDNS: () => getDNS().run(innerRunConfig),
        getDeviceDiscoveryMode: () => getDeviceDiscoveryMode().run(innerRunConfig),
        getDynamicDNS: () => getDynamicDNS().run(innerRunConfig),
        getHostname: () => getHostname().run(innerRunConfig),
        getNetworkInterfaces: () => getNetworkInterfaces().run(innerRunConfig),
        getNetworkProtocols: () => getNetworkProtocols().run(innerRunConfig)
      },
      media: {
        getStreamUri: (req: IGetStreamUriRequest) => getStreamUri(req).run(innerRunConfig),
        getProfiles: () => getProfiles().run(innerRunConfig)
      }
    }
  }
})
