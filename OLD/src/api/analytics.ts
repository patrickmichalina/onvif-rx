import { createStandardRequestBodyFromString, mapResponseXmlToJson, generateRequestElements, mapResponseObsToProperty } from "../soap/request";
import { IDeviceConfig } from "../config";
import { ReferenceToken, Config } from "./types";

export class ONVIFAnalytics {
    constructor(private config: IDeviceConfig) {
    }

    /**
     * 
     *   List all rules that are supported by the given VideoAnalyticsConfiguration.
     *   
     */
    static GetSupportedRules(ConfigurationToken: ReferenceToken) {
        return createStandardRequestBodyFromString(generateRequestElements('tan:GetSupportedRules')({tan_ConfigurationToken:ConfigurationToken}))
                        .map(mapResponseXmlToJson<any>('tan:GetSupportedRulesResponse'))
                      
    }

    /**
     * 
     *   Add one or more rules to an existing VideoAnalyticsConfiguration.
     *   The available supported types can be retrieved via GetSupportedRules, 
     *   where the Name of the supported rule correspond to the type of an rule instance.
     *   Pass unique module names which can be later used as reference. 
     *   The Parameters of the rules must match those of the corresponding description.
     *   
     *   Although this method is mandatory a device implementation must not support adding rules. 
     *   Instead it can provide a fixed set of predefined configurations via the media service function 
     *   GetCompatibleVideoAnalyticsConfigurations.
     *   
     */
    static CreateRules(ConfigurationToken: ReferenceToken, Rule: Config) {
        return createStandardRequestBodyFromString(generateRequestElements('tan:CreateRules')({tan_ConfigurationToken:ConfigurationToken,tan_Rule:Rule}))
                        .map(mapResponseXmlToJson<any>('tan:CreateRulesResponse'))
                      
    }

    /**
     * 
     *   Remove one or more rules from a VideoAnalyticsConfiguration.
     *   
     */
    static DeleteRules(ConfigurationToken: ReferenceToken, RuleName: string) {
        return createStandardRequestBodyFromString(generateRequestElements('tan:DeleteRules')({tan_ConfigurationToken:ConfigurationToken,tan_RuleName:RuleName}))
                        .map(mapResponseXmlToJson<any>('tan:DeleteRulesResponse'))
                      
    }

    /**
     * 
     *   List the currently assigned set of rules of a VideoAnalyticsConfiguration.
     *   
     */
    static GetRules(ConfigurationToken: ReferenceToken) {
        return createStandardRequestBodyFromString(generateRequestElements('tan:GetRules')({tan_ConfigurationToken:ConfigurationToken}))
                        .map(mapResponseXmlToJson<any>('tan:GetRulesResponse'))
                      
    }

    /**
     * 
     *   Return the options for the supported rules that specify an Option attribute.
     *   
     */
    static GetRuleOptions(ConfigurationToken: ReferenceToken, RuleType?: any) {
        return createStandardRequestBodyFromString(generateRequestElements('tan:GetRuleOptions')({tan_ConfigurationToken:ConfigurationToken,tan_RuleType:RuleType}))
                        .map(mapResponseXmlToJson<any>('tan:GetRuleOptionsResponse'))
                      
    }

    /**
     * 
     *   Modify one or more rules of a VideoAnalyticsConfiguration. The rules are referenced by their names.
     *   
     */
    static ModifyRules(ConfigurationToken: ReferenceToken, Rule: Config) {
        return createStandardRequestBodyFromString(generateRequestElements('tan:ModifyRules')({tan_ConfigurationToken:ConfigurationToken,tan_Rule:Rule}))
                        .map(mapResponseXmlToJson<any>('tan:ModifyRulesResponse'))
                      
    }

    /**
     * Returns the capabilities of the analytics service. The result is returned in a typed answer.
     */
    static GetServiceCapabilities() {
        return createStandardRequestBodyFromString(generateRequestElements('tan:GetServiceCapabilities')({}))
                        .map(mapResponseXmlToJson<any>('tan:GetServiceCapabilitiesResponse'))
                      
    }

    /**
     * 
     *   List all analytics modules that are supported by the given VideoAnalyticsConfiguration.
     *   
     */
    static GetSupportedAnalyticsModules(ConfigurationToken: ReferenceToken) {
        return createStandardRequestBodyFromString(generateRequestElements('tan:GetSupportedAnalyticsModules')({tan_ConfigurationToken:ConfigurationToken}))
                        .map(mapResponseXmlToJson<any>('tan:GetSupportedAnalyticsModulesResponse'))
                      
    }

    /**
     * 
     *   Return the options for the supported analytics modules that specify an Option attribute.
     *   
     */
    static GetAnalyticsModuleOptions(ConfigurationToken: ReferenceToken, Type?: any) {
        return createStandardRequestBodyFromString(generateRequestElements('tan:GetAnalyticsModuleOptions')({tan_ConfigurationToken:ConfigurationToken,tan_Type:Type}))
                        .map(mapResponseXmlToJson<any>('tan:GetAnalyticsModuleOptionsResponse'))
                      
    }

    /**
     * 
     *   Add one or more analytics modules to an existing VideoAnalyticsConfiguration.
     *   The available supported types can be retrieved via GetSupportedAnalyticsModules, 
     *   where the Name of the supported AnalyticsModules correspond to the type of an AnalyticsModule instance.
     *   Pass unique module names which can be later used as reference. The Parameters of the analytics module must match those of the corresponding AnalyticsModuleDescription.
     *   
     *   Although this method is mandatory a device implementation may not support adding modules. 
     *   Instead it can provide a fixed set of predefined configurations via the media service functions 
     *   GetCompatibleVideoAnalyticsConfigurations and 
     *   GetAnalyticsConfigurations.
     *   
     *   The device shall ensure that a corresponding analytics engine starts operation when a client
     *   subscribes directly or indirectly for events produced by the analytics or rule engine or when a
     *   client requests the corresponding scene description stream.
     *   An analytics module must be attached to a Video source using the media profiles before it can be used.
     *   In case differing analytics configurations are attached to the same profile it is undefined which
     *   of the analytics module configuration becomes active if no stream is activated or multiple streams
     *   with different profiles are activated at the same time.
     *   
     */
    static CreateAnalyticsModules(ConfigurationToken: ReferenceToken, AnalyticsModule: Config) {
        return createStandardRequestBodyFromString(generateRequestElements('tan:CreateAnalyticsModules')({tan_ConfigurationToken:ConfigurationToken,tan_AnalyticsModule:AnalyticsModule}))
                        .map(mapResponseXmlToJson<any>('tan:CreateAnalyticsModulesResponse'))
                      
    }

    /**
     * 
     *   Remove one or more analytics modules from a VideoAnalyticsConfiguration referenced by their names.
     *   
     */
    static DeleteAnalyticsModules(ConfigurationToken: ReferenceToken, AnalyticsModuleName: string) {
        return createStandardRequestBodyFromString(generateRequestElements('tan:DeleteAnalyticsModules')({tan_ConfigurationToken:ConfigurationToken,tan_AnalyticsModuleName:AnalyticsModuleName}))
                        .map(mapResponseXmlToJson<any>('tan:DeleteAnalyticsModulesResponse'))
                      
    }

    /**
     * 
     *   List the currently assigned set of analytics modules of a VideoAnalyticsConfiguration.
     *   
     */
    static GetAnalyticsModules(ConfigurationToken: ReferenceToken) {
        return createStandardRequestBodyFromString(generateRequestElements('tan:GetAnalyticsModules')({tan_ConfigurationToken:ConfigurationToken}))
                        .map(mapResponseXmlToJson<any>('tan:GetAnalyticsModulesResponse'))
                      
    }

    /**
     * 
     *   Modify the settings of one or more analytics modules of a VideoAnalyticsConfiguration. The modules are referenced by their names.
     *   It is allowed to pass only a subset to be modified.
     *   
     */
    static ModifyAnalyticsModules(ConfigurationToken: ReferenceToken, AnalyticsModule: Config) {
        return createStandardRequestBodyFromString(generateRequestElements('tan:ModifyAnalyticsModules')({tan_ConfigurationToken:ConfigurationToken,tan_AnalyticsModule:AnalyticsModule}))
                        .map(mapResponseXmlToJson<any>('tan:ModifyAnalyticsModulesResponse'))
                      
    }

    /**
     * 
     *   This method provides a computer readable description of the metadata that the selected analytics modules can generate. 
     *   The type parameter allows to select a single analytics module. By default the output shall relate to all analytics modules that exist in the device. 
     *   The response shall provide a sample XML frame. 
     *   The sample frame shall include all potentially generated elements by the selected analytics modules. 
     *   Note that this e.g. does not need to include all possible class type enumerations.
     *   
     */
    static GetSupportedMetadata(Type?: any) {
        return createStandardRequestBodyFromString(generateRequestElements('tan:GetSupportedMetadata')({tan_Type:Type}))
                        .map(mapResponseXmlToJson<any>('tan:GetSupportedMetadataResponse'))
                      
    }

    /**
     * 
     *   List all rules that are supported by the given VideoAnalyticsConfiguration.
     *   
     */
    GetSupportedRules(ConfigurationToken: ReferenceToken) {
        return ONVIFAnalytics.GetSupportedRules(ConfigurationToken).run(this.config)
    }

    /**
     * 
     *   Add one or more rules to an existing VideoAnalyticsConfiguration.
     *   The available supported types can be retrieved via GetSupportedRules, 
     *   where the Name of the supported rule correspond to the type of an rule instance.
     *   Pass unique module names which can be later used as reference. 
     *   The Parameters of the rules must match those of the corresponding description.
     *   
     *   Although this method is mandatory a device implementation must not support adding rules. 
     *   Instead it can provide a fixed set of predefined configurations via the media service function 
     *   GetCompatibleVideoAnalyticsConfigurations.
     *   
     */
    CreateRules(ConfigurationToken: ReferenceToken, Rule: Config) {
        return ONVIFAnalytics.CreateRules(ConfigurationToken,Rule).run(this.config)
    }

    /**
     * 
     *   Remove one or more rules from a VideoAnalyticsConfiguration.
     *   
     */
    DeleteRules(ConfigurationToken: ReferenceToken, RuleName: string) {
        return ONVIFAnalytics.DeleteRules(ConfigurationToken,RuleName).run(this.config)
    }

    /**
     * 
     *   List the currently assigned set of rules of a VideoAnalyticsConfiguration.
     *   
     */
    GetRules(ConfigurationToken: ReferenceToken) {
        return ONVIFAnalytics.GetRules(ConfigurationToken).run(this.config)
    }

    /**
     * 
     *   Return the options for the supported rules that specify an Option attribute.
     *   
     */
    GetRuleOptions(ConfigurationToken: ReferenceToken, RuleType?: any) {
        return ONVIFAnalytics.GetRuleOptions(ConfigurationToken,RuleType).run(this.config)
    }

    /**
     * 
     *   Modify one or more rules of a VideoAnalyticsConfiguration. The rules are referenced by their names.
     *   
     */
    ModifyRules(ConfigurationToken: ReferenceToken, Rule: Config) {
        return ONVIFAnalytics.ModifyRules(ConfigurationToken,Rule).run(this.config)
    }

    /**
     * Returns the capabilities of the analytics service. The result is returned in a typed answer.
     */
    GetServiceCapabilities() {
        return ONVIFAnalytics.GetServiceCapabilities().run(this.config)
    }

    /**
     * 
     *   List all analytics modules that are supported by the given VideoAnalyticsConfiguration.
     *   
     */
    GetSupportedAnalyticsModules(ConfigurationToken: ReferenceToken) {
        return ONVIFAnalytics.GetSupportedAnalyticsModules(ConfigurationToken).run(this.config)
    }

    /**
     * 
     *   Return the options for the supported analytics modules that specify an Option attribute.
     *   
     */
    GetAnalyticsModuleOptions(ConfigurationToken: ReferenceToken, Type?: any) {
        return ONVIFAnalytics.GetAnalyticsModuleOptions(ConfigurationToken,Type).run(this.config)
    }

    /**
     * 
     *   Add one or more analytics modules to an existing VideoAnalyticsConfiguration.
     *   The available supported types can be retrieved via GetSupportedAnalyticsModules, 
     *   where the Name of the supported AnalyticsModules correspond to the type of an AnalyticsModule instance.
     *   Pass unique module names which can be later used as reference. The Parameters of the analytics module must match those of the corresponding AnalyticsModuleDescription.
     *   
     *   Although this method is mandatory a device implementation may not support adding modules. 
     *   Instead it can provide a fixed set of predefined configurations via the media service functions 
     *   GetCompatibleVideoAnalyticsConfigurations and 
     *   GetAnalyticsConfigurations.
     *   
     *   The device shall ensure that a corresponding analytics engine starts operation when a client
     *   subscribes directly or indirectly for events produced by the analytics or rule engine or when a
     *   client requests the corresponding scene description stream.
     *   An analytics module must be attached to a Video source using the media profiles before it can be used.
     *   In case differing analytics configurations are attached to the same profile it is undefined which
     *   of the analytics module configuration becomes active if no stream is activated or multiple streams
     *   with different profiles are activated at the same time.
     *   
     */
    CreateAnalyticsModules(ConfigurationToken: ReferenceToken, AnalyticsModule: Config) {
        return ONVIFAnalytics.CreateAnalyticsModules(ConfigurationToken,AnalyticsModule).run(this.config)
    }

    /**
     * 
     *   Remove one or more analytics modules from a VideoAnalyticsConfiguration referenced by their names.
     *   
     */
    DeleteAnalyticsModules(ConfigurationToken: ReferenceToken, AnalyticsModuleName: string) {
        return ONVIFAnalytics.DeleteAnalyticsModules(ConfigurationToken,AnalyticsModuleName).run(this.config)
    }

    /**
     * 
     *   List the currently assigned set of analytics modules of a VideoAnalyticsConfiguration.
     *   
     */
    GetAnalyticsModules(ConfigurationToken: ReferenceToken) {
        return ONVIFAnalytics.GetAnalyticsModules(ConfigurationToken).run(this.config)
    }

    /**
     * 
     *   Modify the settings of one or more analytics modules of a VideoAnalyticsConfiguration. The modules are referenced by their names.
     *   It is allowed to pass only a subset to be modified.
     *   
     */
    ModifyAnalyticsModules(ConfigurationToken: ReferenceToken, AnalyticsModule: Config) {
        return ONVIFAnalytics.ModifyAnalyticsModules(ConfigurationToken,AnalyticsModule).run(this.config)
    }

    /**
     * 
     *   This method provides a computer readable description of the metadata that the selected analytics modules can generate. 
     *   The type parameter allows to select a single analytics module. By default the output shall relate to all analytics modules that exist in the device. 
     *   The response shall provide a sample XML frame. 
     *   The sample frame shall include all potentially generated elements by the selected analytics modules. 
     *   Note that this e.g. does not need to include all possible class type enumerations.
     *   
     */
    GetSupportedMetadata(Type?: any) {
        return ONVIFAnalytics.GetSupportedMetadata(Type).run(this.config)
    }
}
