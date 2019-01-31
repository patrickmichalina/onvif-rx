import { createStandardRequestBodyFromString, mapResponseXmlToJson, generateRequestElements, mapResponseObsToProperty } from "../soap/request";
import { IDeviceConfig } from "../config";
import { AbsoluteOrRelativeTimeType,  } from "./types";

export class ONVIFEvent {
    constructor(private config: IDeviceConfig) {
    }

    /**
     * Returns the capabilities of the event service. The result is returned in a typed answer.
     */
    static GetServiceCapabilities() {
        return createStandardRequestBodyFromString(generateRequestElements('tev:GetServiceCapabilities')({}))
                        .map(mapResponseXmlToJson<any>('tev:GetServiceCapabilitiesResponse'))
                      
    }

    /**
     * This method returns a PullPointSubscription that can be polled using PullMessages. 
     *   This message contains the same elements as the SubscriptionRequest of the WS-BaseNotification without the ConsumerReference.
     *   If no Filter is specified the pullpoint notifies all occurring events to the client.
     *   This method is mandatory.
     */
    static CreatePullPointSubscription(Filter?: any, InitialTerminationTime?: AbsoluteOrRelativeTimeType, SubscriptionPolicy?: any) {
        return createStandardRequestBodyFromString(generateRequestElements('tev:CreatePullPointSubscription')({tev_Filter:Filter,tev_InitialTerminationTime:InitialTerminationTime,tev_SubscriptionPolicy:SubscriptionPolicy}))
                        .map(mapResponseXmlToJson<any>('tev:CreatePullPointSubscriptionResponse'))
                      
    }

    /**
     * The WS-BaseNotification specification defines a set of OPTIONAL WS-ResouceProperties.
     *   This specification does not require the implementation of the WS-ResourceProperty interface.
     *   Instead, the subsequent direct interface shall be implemented by an ONVIF compliant device
     *   in order to provide information about the FilterDialects, Schema files and topics supported by
     *   the device.
     */
    static GetEventProperties() {
        return createStandardRequestBodyFromString(generateRequestElements('tev:GetEventProperties')({}))
                        .map(mapResponseXmlToJson<any>('tev:GetEventPropertiesResponse'))
                      
    }

    /**
     * 
     *   This method pulls one or more messages from a PullPoint.
     *   The device shall provide the following PullMessages command for all SubscriptionManager
     *   endpoints returned by the CreatePullPointSubscription command. This method shall not wait until
     *   the requested number of messages is available but return as soon as at least one message is available.
     *   The command shall at least support a Timeout of one minute. In case a device supports retrieval of less messages 
     *   than requested it shall return these without generating a fault.
     */
    static PullMessages(Timeout: string, MessageLimit: number) {
        return createStandardRequestBodyFromString(generateRequestElements('tev:PullMessages')({tev_Timeout:Timeout,tev_MessageLimit:MessageLimit}))
                        .map(mapResponseXmlToJson<any>('tev:PullMessagesResponse'))
                      
    }

    /**
     * 
     *   This method readjusts the pull pointer into the past.
     *   A device supporting persistent notification storage shall provide the
     *   following Seek command for all SubscriptionManager endpoints returned by
     *   the CreatePullPointSubscription command. The optional Reverse argument can
     *   be used to reverse the pull direction of the PullMessages command.
     *   The UtcTime argument will be matched against the UtcTime attribute on a
     *   NotificationMessage.
     *   
     */
    static Seek(UtcTime: string, Reverse?: boolean) {
        return createStandardRequestBodyFromString(generateRequestElements('tev:Seek')({tev_UtcTime:UtcTime,tev_Reverse:Reverse}))
                        .map(mapResponseXmlToJson<any>('tev:SeekResponse'))
                      
    }

    /**
     * Properties inform a client about property creation, changes and
     *   deletion in a uniform way. When a client wants to synchronize its properties with the
     *   properties of the device, it can request a synchronization point which repeats the current
     *   status of all properties to which a client has subscribed. The PropertyOperation of all
     *   produced notifications is set to “Initialized”. The Synchronization Point is
     *   requested directly from the SubscriptionManager which was returned in either the
     *   SubscriptionResponse or in the CreatePullPointSubscriptionResponse. The property update is
     *   transmitted via the notification transportation of the notification interface. This method is mandatory.
     *   
     */
    static SetSynchronizationPoint() {
        return createStandardRequestBodyFromString(generateRequestElements('tev:SetSynchronizationPoint')({}))
                        .map(mapResponseXmlToJson<any>('tev:SetSynchronizationPointResponse'))
                      
    }

    /**
     * The device shall provide the following Unsubscribe command for all SubscriptionManager endpoints returned by the CreatePullPointSubscription command.
     *   This command shall terminate the lifetime of a pull point.
     *   
     */
    static Unsubscribe() {
        return createStandardRequestBodyFromString(generateRequestElements('')({}))
                        .map(mapResponseXmlToJson<any>('wsntw:UnsubscribeResponse'))
                      
    }

    /**
     * Returns the capabilities of the event service. The result is returned in a typed answer.
     */
    GetServiceCapabilities() {
        return ONVIFEvent.GetServiceCapabilities().run(this.config)
    }

    /**
     * This method returns a PullPointSubscription that can be polled using PullMessages. 
     *   This message contains the same elements as the SubscriptionRequest of the WS-BaseNotification without the ConsumerReference.
     *   If no Filter is specified the pullpoint notifies all occurring events to the client.
     *   This method is mandatory.
     */
    CreatePullPointSubscription(Filter: any, InitialTerminationTime: AbsoluteOrRelativeTimeType, SubscriptionPolicy: any) {
        return ONVIFEvent.CreatePullPointSubscription(Filter,InitialTerminationTime,SubscriptionPolicy).run(this.config)
    }

    /**
     * The WS-BaseNotification specification defines a set of OPTIONAL WS-ResouceProperties.
     *   This specification does not require the implementation of the WS-ResourceProperty interface.
     *   Instead, the subsequent direct interface shall be implemented by an ONVIF compliant device
     *   in order to provide information about the FilterDialects, Schema files and topics supported by
     *   the device.
     */
    GetEventProperties() {
        return ONVIFEvent.GetEventProperties().run(this.config)
    }

    /**
     * 
     *   This method pulls one or more messages from a PullPoint.
     *   The device shall provide the following PullMessages command for all SubscriptionManager
     *   endpoints returned by the CreatePullPointSubscription command. This method shall not wait until
     *   the requested number of messages is available but return as soon as at least one message is available.
     *   The command shall at least support a Timeout of one minute. In case a device supports retrieval of less messages 
     *   than requested it shall return these without generating a fault.
     */
    PullMessages(Timeout: string, MessageLimit: number) {
        return ONVIFEvent.PullMessages(Timeout,MessageLimit).run(this.config)
    }

    /**
     * 
     *   This method readjusts the pull pointer into the past.
     *   A device supporting persistent notification storage shall provide the
     *   following Seek command for all SubscriptionManager endpoints returned by
     *   the CreatePullPointSubscription command. The optional Reverse argument can
     *   be used to reverse the pull direction of the PullMessages command.
     *   The UtcTime argument will be matched against the UtcTime attribute on a
     *   NotificationMessage.
     *   
     */
    Seek(UtcTime: string, Reverse: boolean) {
        return ONVIFEvent.Seek(UtcTime,Reverse).run(this.config)
    }

    /**
     * Properties inform a client about property creation, changes and
     *   deletion in a uniform way. When a client wants to synchronize its properties with the
     *   properties of the device, it can request a synchronization point which repeats the current
     *   status of all properties to which a client has subscribed. The PropertyOperation of all
     *   produced notifications is set to “Initialized”. The Synchronization Point is
     *   requested directly from the SubscriptionManager which was returned in either the
     *   SubscriptionResponse or in the CreatePullPointSubscriptionResponse. The property update is
     *   transmitted via the notification transportation of the notification interface. This method is mandatory.
     *   
     */
    SetSynchronizationPoint() {
        return ONVIFEvent.SetSynchronizationPoint().run(this.config)
    }

    /**
     * The device shall provide the following Unsubscribe command for all SubscriptionManager endpoints returned by the CreatePullPointSubscription command.
     *   This command shall terminate the lifetime of a pull point.
     *   
     */
    Unsubscribe() {
        return ONVIFEvent.Unsubscribe().run(this.config)
    }
}
