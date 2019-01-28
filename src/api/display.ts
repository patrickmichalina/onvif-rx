import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../soap/request";
import { ReferenceToken, Layout, PaneConfiguration } from "./types";

export namespace Display {
    /**
     * Returns the capabilities of the display service. The result is returned in a typed answer.
     */
    export function GetServiceCapabilities() {
        return createStandardRequestBodyFromString('<tls:GetServiceCapabilities />')
                        .map(mapResponseXmlToJson<any>('tls:GetServiceCapabilitiesResponse')())
                      
    }

    /**
     * Return the current layout of a video output. The Layout assigns a pane configuration to a certain area of the display. The layout settings
     *   directly affect a specific video output. The layout consists of a list of PaneConfigurations and
     *   their associated display areas.
     */
    export function GetLayout(VideoOutput: ReferenceToken) {
        return createStandardRequestBodyFromString('<tls:GetLayout />')
                        .map(mapResponseXmlToJson<any>('tls:GetLayoutResponse')())
                      
    }

    /**
     * Change the layout of a display (e.g. change from
     *   single view to split screen view).The Layout assigns a pane configuration to a certain area of the display. The layout settings
     *   directly affect a specific video output. The layout consists of a list of PaneConfigurations and
     *   their associated display areas.
     *   A device implementation shall be tolerant against rounding errors when matching a layout against its fixed set of layouts by accepting differences of at least one percent.
     *   
     */
    export function SetLayout(VideoOutput: ReferenceToken, Layout: Layout) {
        return createStandardRequestBodyFromString('<tls:SetLayout />')
                        .map(mapResponseXmlToJson<any>('tls:SetLayoutResponse')())
                      
    }

    /**
     * The Display Options contain the supported layouts (LayoutOptions) and the decoding and
     *   encoding capabilities (CodingCapabilities) of the device. The GetDisplayOptions command
     *   returns both, Layout and Coding Capabilities, of a VideoOutput.
     */
    export function GetDisplayOptions(VideoOutput: ReferenceToken) {
        return createStandardRequestBodyFromString('<tls:GetDisplayOptions />')
                        .map(mapResponseXmlToJson<any>('tls:GetDisplayOptionsResponse')())
                      
    }

    /**
     * List all currently defined panes of a device for a specified video output
     *   (regardless if this pane is visible at a moment). A Pane is a display area on the monitor that is attached to a video output. A pane has a
     *   PaneConfiguration that describes which entities are associated with the pane. A client has to configure the pane according to the connection to be established by setting the
     *   AudioOutput and/or AudioSourceToken. If a Token is not set, the corresponding session will
     *   not be established.
     */
    export function GetPaneConfigurations(VideoOutput: ReferenceToken) {
        return createStandardRequestBodyFromString('<tls:GetPaneConfigurations />')
                        .map(mapResponseXmlToJson<any>('tls:GetPaneConfigurationsResponse')())
                      
    }

    /**
     * Retrieve the pane configuration for a pane token.
     */
    export function GetPaneConfiguration(VideoOutput: ReferenceToken, Pane: ReferenceToken) {
        return createStandardRequestBodyFromString('<tls:GetPaneConfiguration />')
                        .map(mapResponseXmlToJson<any>('tls:GetPaneConfigurationResponse')())
                      
    }

    /**
     * Modify one or more configurations of the specified video output. 
     *   This method will only modify the provided configurations and leave the others unchanged. 
     *   Use DeletePaneConfiguration to remove pane configurations.
     */
    export function SetPaneConfigurations(VideoOutput: ReferenceToken, PaneConfiguration: PaneConfiguration) {
        return createStandardRequestBodyFromString('<tls:SetPaneConfigurations />')
                        .map(mapResponseXmlToJson<any>('tls:SetPaneConfigurationsResponse')())
                      
    }

    /**
     * This command changes the configuration of the specified pane (tbd)
     */
    export function SetPaneConfiguration(VideoOutput: ReferenceToken, PaneConfiguration: PaneConfiguration) {
        return createStandardRequestBodyFromString('<tls:SetPaneConfiguration />')
                        .map(mapResponseXmlToJson<any>('tls:SetPaneConfigurationResponse')())
                      
    }

    /**
     * Create a new pane configuration describing the streaming and coding settings for a display area.
     *   This optional method is only supported by devices that signal support of dynamic pane creation via their capabilities.
     *   The content of the Token field may be ignored by the device.
     *   
     */
    export function CreatePaneConfiguration(VideoOutput: ReferenceToken, PaneConfiguration: PaneConfiguration) {
        return createStandardRequestBodyFromString('<tls:CreatePaneConfiguration />')
                        .map(mapResponseXmlToJson<any>('tls:CreatePaneConfigurationResponse')())
                      
    }

    /**
     * Delete a pane configuration. A service must respond with an error if the pane configuration
     *   is in use by the current layout.
     *   This optional method is only supported by devices that signal support of dynamic pane creation via their capabilities. 
     *   
     */
    export function DeletePaneConfiguration(VideoOutput: ReferenceToken, PaneToken: ReferenceToken) {
        return createStandardRequestBodyFromString('<tls:DeletePaneConfiguration />')
                        .map(mapResponseXmlToJson<any>('tls:DeletePaneConfigurationResponse')())
                      
    }
}
