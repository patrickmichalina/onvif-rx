import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../soap/request";
import { ReferenceToken, ReceiverConfiguration, ReceiverMode } from "./types";

export namespace Receiver {
    /**
     * Returns the capabilities of the receiver service. The result is returned in a typed answer.
     */
    export function GetServiceCapabilities() {
        return createStandardRequestBodyFromString('<trv:GetServiceCapabilities />')
                        .map(mapResponseXmlToJson<any>('trv:GetServiceCapabilitiesResponse')())
                      
    }

    /**
     * 
     *   Lists all receivers currently present on a device. This operation is mandatory.
     *   
     */
    export function GetReceivers() {
        return createStandardRequestBodyFromString('<trv:GetReceivers />')
                        .map(mapResponseXmlToJson<any>('trv:GetReceiversResponse')())
                      
    }

    /**
     * 
     *   Retrieves the details of a specific receiver. This operation is mandatory.
     *   
     */
    export function GetReceiver(ReceiverToken: ReferenceToken) {
        return createStandardRequestBodyFromString('<trv:GetReceiver />')
                        .map(mapResponseXmlToJson<any>('trv:GetReceiverResponse')())
                      
    }

    /**
     * 
     *   Creates a new receiver. This operation is mandatory, although the service may
     *   raise a fault if the receiver cannot be created.
     *   
     */
    export function CreateReceiver(Configuration: ReceiverConfiguration) {
        return createStandardRequestBodyFromString('<trv:CreateReceiver />')
                        .map(mapResponseXmlToJson<any>('trv:CreateReceiverResponse')())
                      
    }

    /**
     * 
     *   Deletes an existing receiver. A receiver may be deleted only if it is not
     *   currently in use; otherwise a fault shall be raised.
     *   This operation is mandatory.
     *   
     */
    export function DeleteReceiver(ReceiverToken: ReferenceToken) {
        return createStandardRequestBodyFromString('<trv:DeleteReceiver />')
                        .map(mapResponseXmlToJson<any>('trv:DeleteReceiverResponse')())
                      
    }

    /**
     * 
     *   Configures an existing receiver. This operation is mandatory.
     *   
     */
    export function ConfigureReceiver(ReceiverToken: ReferenceToken, Configuration: ReceiverConfiguration) {
        return createStandardRequestBodyFromString('<trv:ConfigureReceiver />')
                        .map(mapResponseXmlToJson<any>('trv:ConfigureReceiverResponse')())
                      
    }

    /**
     * 
     *   Sets the mode of the receiver without affecting the rest of its configuration.
     *   This operation is mandatory.
     *   
     */
    export function SetReceiverMode(ReceiverToken: ReferenceToken, Mode: ReceiverMode) {
        return createStandardRequestBodyFromString('<trv:SetReceiverMode />')
                        .map(mapResponseXmlToJson<any>('trv:SetReceiverModeResponse')())
                      
    }

    /**
     * 
     *   Determines whether the receiver is currently disconnected, connected or
     *   attempting to connect.
     *   This operation is mandatory.
     *   
     */
    export function GetReceiverState(ReceiverToken: ReferenceToken) {
        return createStandardRequestBodyFromString('<trv:GetReceiverState />')
                        .map(mapResponseXmlToJson<any>('trv:GetReceiverStateResponse')())
                      
    }
}
