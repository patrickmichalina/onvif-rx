import { createStandardRequestBodyFromString, mapResponseXmlToJson, generateRequestElements, mapResponseObsToProperty } from "../soap/request";
import { IDeviceConfig } from "../config";
import { ReferenceToken, ReceiverConfiguration, ReceiverMode } from "./types";

export class Receiver {
    constructor(private config: IDeviceConfig) {
    }

    /**
     * Returns the capabilities of the receiver service. The result is returned in a typed answer.
     */
    static GetServiceCapabilities() {
        return createStandardRequestBodyFromString(generateRequestElements('trv:GetServiceCapabilities')([])())
                        .map(mapResponseXmlToJson<any>('trv:GetServiceCapabilitiesResponse'))
                      
    }

    /**
     * 
     *   Lists all receivers currently present on a device. This operation is mandatory.
     *   
     */
    static GetReceivers() {
        return createStandardRequestBodyFromString(generateRequestElements('trv:GetReceivers')([])())
                        .map(mapResponseXmlToJson<any>('trv:GetReceiversResponse'))
                      
    }

    /**
     * 
     *   Retrieves the details of a specific receiver. This operation is mandatory.
     *   
     */
    static GetReceiver(ReceiverToken: ReferenceToken) {
        return createStandardRequestBodyFromString(generateRequestElements('trv:GetReceiver')(['ReceiverToken'])(ReceiverToken))
                        .map(mapResponseXmlToJson<any>('trv:GetReceiverResponse'))
                      
    }

    /**
     * 
     *   Creates a new receiver. This operation is mandatory, although the service may
     *   raise a fault if the receiver cannot be created.
     *   
     */
    static CreateReceiver(Configuration: ReceiverConfiguration) {
        return createStandardRequestBodyFromString(generateRequestElements('trv:CreateReceiver')(['Configuration'])(Configuration))
                        .map(mapResponseXmlToJson<any>('trv:CreateReceiverResponse'))
                      
    }

    /**
     * 
     *   Deletes an existing receiver. A receiver may be deleted only if it is not
     *   currently in use; otherwise a fault shall be raised.
     *   This operation is mandatory.
     *   
     */
    static DeleteReceiver(ReceiverToken: ReferenceToken) {
        return createStandardRequestBodyFromString(generateRequestElements('trv:DeleteReceiver')(['ReceiverToken'])(ReceiverToken))
                        .map(mapResponseXmlToJson<any>('trv:DeleteReceiverResponse'))
                      
    }

    /**
     * 
     *   Configures an existing receiver. This operation is mandatory.
     *   
     */
    static ConfigureReceiver(ReceiverToken: ReferenceToken, Configuration: ReceiverConfiguration) {
        return createStandardRequestBodyFromString(generateRequestElements('trv:ConfigureReceiver')(['ReceiverToken','Configuration'])(ReceiverToken,Configuration))
                        .map(mapResponseXmlToJson<any>('trv:ConfigureReceiverResponse'))
                      
    }

    /**
     * 
     *   Sets the mode of the receiver without affecting the rest of its configuration.
     *   This operation is mandatory.
     *   
     */
    static SetReceiverMode(ReceiverToken: ReferenceToken, Mode: ReceiverMode) {
        return createStandardRequestBodyFromString(generateRequestElements('trv:SetReceiverMode')(['ReceiverToken','Mode'])(ReceiverToken,Mode))
                        .map(mapResponseXmlToJson<any>('trv:SetReceiverModeResponse'))
                      
    }

    /**
     * 
     *   Determines whether the receiver is currently disconnected, connected or
     *   attempting to connect.
     *   This operation is mandatory.
     *   
     */
    static GetReceiverState(ReceiverToken: ReferenceToken) {
        return createStandardRequestBodyFromString(generateRequestElements('trv:GetReceiverState')(['ReceiverToken'])(ReceiverToken))
                        .map(mapResponseXmlToJson<any>('trv:GetReceiverStateResponse'))
                      
    }

    /**
     * Returns the capabilities of the receiver service. The result is returned in a typed answer.
     */
    GetServiceCapabilities() {
        return Receiver.GetServiceCapabilities().run(this.config)
    }

    /**
     * 
     *   Lists all receivers currently present on a device. This operation is mandatory.
     *   
     */
    GetReceivers() {
        return Receiver.GetReceivers().run(this.config)
    }

    /**
     * 
     *   Retrieves the details of a specific receiver. This operation is mandatory.
     *   
     */
    GetReceiver(ReceiverToken: ReferenceToken) {
        return Receiver.GetReceiver(ReceiverToken).run(this.config)
    }

    /**
     * 
     *   Creates a new receiver. This operation is mandatory, although the service may
     *   raise a fault if the receiver cannot be created.
     *   
     */
    CreateReceiver(Configuration: ReceiverConfiguration) {
        return Receiver.CreateReceiver(Configuration).run(this.config)
    }

    /**
     * 
     *   Deletes an existing receiver. A receiver may be deleted only if it is not
     *   currently in use; otherwise a fault shall be raised.
     *   This operation is mandatory.
     *   
     */
    DeleteReceiver(ReceiverToken: ReferenceToken) {
        return Receiver.DeleteReceiver(ReceiverToken).run(this.config)
    }

    /**
     * 
     *   Configures an existing receiver. This operation is mandatory.
     *   
     */
    ConfigureReceiver(ReceiverToken: ReferenceToken, Configuration: ReceiverConfiguration) {
        return Receiver.ConfigureReceiver(ReceiverToken,Configuration).run(this.config)
    }

    /**
     * 
     *   Sets the mode of the receiver without affecting the rest of its configuration.
     *   This operation is mandatory.
     *   
     */
    SetReceiverMode(ReceiverToken: ReferenceToken, Mode: ReceiverMode) {
        return Receiver.SetReceiverMode(ReceiverToken,Mode).run(this.config)
    }

    /**
     * 
     *   Determines whether the receiver is currently disconnected, connected or
     *   attempting to connect.
     *   This operation is mandatory.
     *   
     */
    GetReceiverState(ReceiverToken: ReferenceToken) {
        return Receiver.GetReceiverState(ReceiverToken).run(this.config)
    }
}
