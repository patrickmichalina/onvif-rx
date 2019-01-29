import { createStandardRequestBodyFromString, mapResponseXmlToJson, generateRequestElements, mapResponseObsToProperty } from "../soap/request";
import { IDeviceConfig } from "../config";
import { ReferenceToken, Layout, PaneConfiguration } from "./types";

export class Display {
    constructor(private config: IDeviceConfig) {
    }

    /**
     * Returns the capabilities of the display service. The result is returned in a typed answer.
     */
    static GetServiceCapabilities() {
        return createStandardRequestBodyFromString(generateRequestElements('tls:GetServiceCapabilities')([])())
                        .map(mapResponseXmlToJson<any>('tls:GetServiceCapabilitiesResponse'))
                      
    }

    /**
     * Return the current layout of a video output. The Layout assigns a pane configuration to a certain area of the display. The layout settings
     *   directly affect a specific video output. The layout consists of a list of PaneConfigurations and
     *   their associated display areas.
     */
    static GetLayout(VideoOutput: ReferenceToken) {
        return createStandardRequestBodyFromString(generateRequestElements('tls:GetLayout')(['VideoOutput'])(VideoOutput))
                        .map(mapResponseXmlToJson<any>('tls:GetLayoutResponse'))
                      
    }

    /**
     * Change the layout of a display (e.g. change from
     *   single view to split screen view).The Layout assigns a pane configuration to a certain area of the display. The layout settings
     *   directly affect a specific video output. The layout consists of a list of PaneConfigurations and
     *   their associated display areas.
     *   A device implementation shall be tolerant against rounding errors when matching a layout against its fixed set of layouts by accepting differences of at least one percent.
     *   
     */
    static SetLayout(VideoOutput: ReferenceToken, Layout: Layout) {
        return createStandardRequestBodyFromString(generateRequestElements('tls:SetLayout')(['VideoOutput','Layout'])(VideoOutput,Layout))
                        .map(mapResponseXmlToJson<any>('tls:SetLayoutResponse'))
                      
    }

    /**
     * The Display Options contain the supported layouts (LayoutOptions) and the decoding and
     *   encoding capabilities (CodingCapabilities) of the device. The GetDisplayOptions command
     *   returns both, Layout and Coding Capabilities, of a VideoOutput.
     */
    static GetDisplayOptions(VideoOutput: ReferenceToken) {
        return createStandardRequestBodyFromString(generateRequestElements('tls:GetDisplayOptions')(['VideoOutput'])(VideoOutput))
                        .map(mapResponseXmlToJson<any>('tls:GetDisplayOptionsResponse'))
                      
    }

    /**
     * List all currently defined panes of a device for a specified video output
     *   (regardless if this pane is visible at a moment). A Pane is a display area on the monitor that is attached to a video output. A pane has a
     *   PaneConfiguration that describes which entities are associated with the pane. A client has to configure the pane according to the connection to be established by setting the
     *   AudioOutput and/or AudioSourceToken. If a Token is not set, the corresponding session will
     *   not be established.
     */
    static GetPaneConfigurations(VideoOutput: ReferenceToken) {
        return createStandardRequestBodyFromString(generateRequestElements('tls:GetPaneConfigurations')(['VideoOutput'])(VideoOutput))
                        .map(mapResponseXmlToJson<any>('tls:GetPaneConfigurationsResponse'))
                      
    }

    /**
     * Retrieve the pane configuration for a pane token.
     */
    static GetPaneConfiguration(VideoOutput: ReferenceToken, Pane: ReferenceToken) {
        return createStandardRequestBodyFromString(generateRequestElements('tls:GetPaneConfiguration')(['VideoOutput','Pane'])(VideoOutput,Pane))
                        .map(mapResponseXmlToJson<any>('tls:GetPaneConfigurationResponse'))
                      
    }

    /**
     * Modify one or more configurations of the specified video output. 
     *   This method will only modify the provided configurations and leave the others unchanged. 
     *   Use DeletePaneConfiguration to remove pane configurations.
     */
    static SetPaneConfigurations(VideoOutput: ReferenceToken, PaneConfiguration: PaneConfiguration) {
        return createStandardRequestBodyFromString(generateRequestElements('tls:SetPaneConfigurations')(['VideoOutput','PaneConfiguration'])(VideoOutput,PaneConfiguration))
                        .map(mapResponseXmlToJson<any>('tls:SetPaneConfigurationsResponse'))
                      
    }

    /**
     * This command changes the configuration of the specified pane (tbd)
     */
    static SetPaneConfiguration(VideoOutput: ReferenceToken, PaneConfiguration: PaneConfiguration) {
        return createStandardRequestBodyFromString(generateRequestElements('tls:SetPaneConfiguration')(['VideoOutput','PaneConfiguration'])(VideoOutput,PaneConfiguration))
                        .map(mapResponseXmlToJson<any>('tls:SetPaneConfigurationResponse'))
                      
    }

    /**
     * Create a new pane configuration describing the streaming and coding settings for a display area.
     *   This optional method is only supported by devices that signal support of dynamic pane creation via their capabilities.
     *   The content of the Token field may be ignored by the device.
     *   
     */
    static CreatePaneConfiguration(VideoOutput: ReferenceToken, PaneConfiguration: PaneConfiguration) {
        return createStandardRequestBodyFromString(generateRequestElements('tls:CreatePaneConfiguration')(['VideoOutput','PaneConfiguration'])(VideoOutput,PaneConfiguration))
                        .map(mapResponseXmlToJson<any>('tls:CreatePaneConfigurationResponse'))
                      
    }

    /**
     * Delete a pane configuration. A service must respond with an error if the pane configuration
     *   is in use by the current layout.
     *   This optional method is only supported by devices that signal support of dynamic pane creation via their capabilities. 
     *   
     */
    static DeletePaneConfiguration(VideoOutput: ReferenceToken, PaneToken: ReferenceToken) {
        return createStandardRequestBodyFromString(generateRequestElements('tls:DeletePaneConfiguration')(['VideoOutput','PaneToken'])(VideoOutput,PaneToken))
                        .map(mapResponseXmlToJson<any>('tls:DeletePaneConfigurationResponse'))
                      
    }

    /**
     * Returns the capabilities of the display service. The result is returned in a typed answer.
     */
    GetServiceCapabilities() {
        return Display.GetServiceCapabilities().run(this.config)
    }

    /**
     * Return the current layout of a video output. The Layout assigns a pane configuration to a certain area of the display. The layout settings
     *   directly affect a specific video output. The layout consists of a list of PaneConfigurations and
     *   their associated display areas.
     */
    GetLayout(VideoOutput: ReferenceToken) {
        return Display.GetLayout(VideoOutput).run(this.config)
    }

    /**
     * Change the layout of a display (e.g. change from
     *   single view to split screen view).The Layout assigns a pane configuration to a certain area of the display. The layout settings
     *   directly affect a specific video output. The layout consists of a list of PaneConfigurations and
     *   their associated display areas.
     *   A device implementation shall be tolerant against rounding errors when matching a layout against its fixed set of layouts by accepting differences of at least one percent.
     *   
     */
    SetLayout(VideoOutput: ReferenceToken, Layout: Layout) {
        return Display.SetLayout(VideoOutput,Layout).run(this.config)
    }

    /**
     * The Display Options contain the supported layouts (LayoutOptions) and the decoding and
     *   encoding capabilities (CodingCapabilities) of the device. The GetDisplayOptions command
     *   returns both, Layout and Coding Capabilities, of a VideoOutput.
     */
    GetDisplayOptions(VideoOutput: ReferenceToken) {
        return Display.GetDisplayOptions(VideoOutput).run(this.config)
    }

    /**
     * List all currently defined panes of a device for a specified video output
     *   (regardless if this pane is visible at a moment). A Pane is a display area on the monitor that is attached to a video output. A pane has a
     *   PaneConfiguration that describes which entities are associated with the pane. A client has to configure the pane according to the connection to be established by setting the
     *   AudioOutput and/or AudioSourceToken. If a Token is not set, the corresponding session will
     *   not be established.
     */
    GetPaneConfigurations(VideoOutput: ReferenceToken) {
        return Display.GetPaneConfigurations(VideoOutput).run(this.config)
    }

    /**
     * Retrieve the pane configuration for a pane token.
     */
    GetPaneConfiguration(VideoOutput: ReferenceToken, Pane: ReferenceToken) {
        return Display.GetPaneConfiguration(VideoOutput,Pane).run(this.config)
    }

    /**
     * Modify one or more configurations of the specified video output. 
     *   This method will only modify the provided configurations and leave the others unchanged. 
     *   Use DeletePaneConfiguration to remove pane configurations.
     */
    SetPaneConfigurations(VideoOutput: ReferenceToken, PaneConfiguration: PaneConfiguration) {
        return Display.SetPaneConfigurations(VideoOutput,PaneConfiguration).run(this.config)
    }

    /**
     * This command changes the configuration of the specified pane (tbd)
     */
    SetPaneConfiguration(VideoOutput: ReferenceToken, PaneConfiguration: PaneConfiguration) {
        return Display.SetPaneConfiguration(VideoOutput,PaneConfiguration).run(this.config)
    }

    /**
     * Create a new pane configuration describing the streaming and coding settings for a display area.
     *   This optional method is only supported by devices that signal support of dynamic pane creation via their capabilities.
     *   The content of the Token field may be ignored by the device.
     *   
     */
    CreatePaneConfiguration(VideoOutput: ReferenceToken, PaneConfiguration: PaneConfiguration) {
        return Display.CreatePaneConfiguration(VideoOutput,PaneConfiguration).run(this.config)
    }

    /**
     * Delete a pane configuration. A service must respond with an error if the pane configuration
     *   is in use by the current layout.
     *   This optional method is only supported by devices that signal support of dynamic pane creation via their capabilities. 
     *   
     */
    DeletePaneConfiguration(VideoOutput: ReferenceToken, PaneToken: ReferenceToken) {
        return Display.DeletePaneConfiguration(VideoOutput,PaneToken).run(this.config)
    }
}
