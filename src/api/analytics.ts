import { createStandardRequestBodyFromString, mapResponseXmlToJson, generateRequestElements, mapResponseObsToProperty } from "../soap/request";
import { IDeviceConfig } from "../config";
import { ReferenceToken, Config } from "./types";

export class Analytics {
    constructor(private config: IDeviceConfig) {
    }

    /**
     * 
     *   List all rules that are supported by the given VideoAnalyticsConfiguration.
     *   The result of this method may depend on the overall Video analytics configuration of the device,
     *   which is available via the current set of profiles. 
     *   
     */
    static GetSupportedRules(ConfigurationToken: ReferenceToken) {
        return createStandardRequestBodyFromString(generateRequestElements('tan:GetSupportedRules')(['ConfigurationToken'])(ConfigurationToken))
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
        return createStandardRequestBodyFromString(generateRequestElements('tan:CreateRules')(['ConfigurationToken','Rule'])(ConfigurationToken,Rule))
                        .map(mapResponseXmlToJson<any>('tan:CreateRulesResponse'))
                      
    }

    /**
     * 
     *   Remove one or more rules from a VideoAnalyticsConfiguration.
     *   
     */
    static DeleteRules(ConfigurationToken: ReferenceToken, RuleName: string) {
        return createStandardRequestBodyFromString(generateRequestElements('tan:DeleteRules')(['ConfigurationToken','RuleName'])(ConfigurationToken,RuleName))
                        .map(mapResponseXmlToJson<any>('tan:DeleteRulesResponse'))
                      
    }

    /**
     * 
     *   List the currently assigned set of rules of a VideoAnalyticsConfiguration.
     *   
     */
    static GetRules(ConfigurationToken: ReferenceToken) {
        return createStandardRequestBodyFromString(generateRequestElements('tan:GetRules')(['ConfigurationToken'])(ConfigurationToken))
                        .map(mapResponseXmlToJson<any>('tan:GetRulesResponse'))
                      
    }

    /**
     * 
     *   Return the options for the supported rules that specify an Option attribute.
     *   
     */
    static GetRuleOptions(ConfigurationToken: ReferenceToken, RuleType?: any) {
        return createStandardRequestBodyFromString(generateRequestElements('tan:GetRuleOptions')(['ConfigurationToken','RuleType'])(ConfigurationToken,RuleType))
                        .map(mapResponseXmlToJson<any>('tan:GetRuleOptionsResponse'))
                      
    }

    /**
     * 
     *   Modify one or more rules of a VideoAnalyticsConfiguration. The rules are referenced by their names.
     *   
     */
    static ModifyRules(ConfigurationToken: ReferenceToken, Rule: Config) {
        return createStandardRequestBodyFromString(generateRequestElements('tan:ModifyRules')(['ConfigurationToken','Rule'])(ConfigurationToken,Rule))
                        .map(mapResponseXmlToJson<any>('tan:ModifyRulesResponse'))
                      
    }

    /**
     * Returns the capabilities of the analytics service. The result is returned in a typed answer.
     */
    static GetServiceCapabilities() {
        return createStandardRequestBodyFromString(generateRequestElements('tan:GetServiceCapabilities')([])())
                        .map(mapResponseXmlToJson<any>('tan:GetServiceCapabilitiesResponse'))
                      
    }

    /**
     * 
     *   List all analytics modules that are supported by the given VideoAnalyticsConfiguration.
     *   The result of this method may depend on the overall Video analytics configuration of the device,
     *   which is available via the current set of profiles. 
     *   
     */
    static GetSupportedAnalyticsModules(ConfigurationToken: ReferenceToken) {
        return createStandardRequestBodyFromString(generateRequestElements('tan:GetSupportedAnalyticsModules')(['ConfigurationToken'])(ConfigurationToken))
                        .map(mapResponseXmlToJson<any>('tan:GetSupportedAnalyticsModulesResponse'))
                      
    }

    /**
     * 
     *   Return the options for the supported analytics modules that specify an Option attribute.
     *   
     */
    static GetAnalyticsModuleOptions(ConfigurationToken: ReferenceToken, Type?: any) {
        return createStandardRequestBodyFromString(generateRequestElements('tan:GetAnalyticsModuleOptions')(['ConfigurationToken','Type'])(ConfigurationToken,Type))
                        .map(mapResponseXmlToJson<any>('tan:GetAnalyticsModuleOptionsResponse'))
                      
    }

    /**
     * 
     *   Add one or more analytics modules to an existing VideoAnalyticsConfiguration.
     *   The available supported types can be retrieved via GetSupportedAnalyticsModules, 
     *   where the Name of the supported AnalyticsModules correspond to the type of an AnalyticsModule instance.
     *   Pass unique module names which can be later used as reference. The Parameters of the analytics module must match those of the corresponding AnalyticsModuleDescription.
     *   
     *   Although this method is mandatory a device implementation must not support adding modules. 
     *   Instead it can provide a fixed set of predefined configurations via the media service function 
     *   GetCompatibleVideoAnalyticsConfigurations.
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
        return createStandardRequestBodyFromString(generateRequestElements('tan:CreateAnalyticsModules')(['ConfigurationToken','AnalyticsModule'])(ConfigurationToken,AnalyticsModule))
                        .map(mapResponseXmlToJson<any>('tan:CreateAnalyticsModulesResponse'))
                      
    }

    /**
     * 
     *   Remove one or more analytics modules from a VideoAnalyticsConfiguration referenced by their names.
     *   
     */
    static DeleteAnalyticsModules(ConfigurationToken: ReferenceToken, AnalyticsModuleName: string) {
        return createStandardRequestBodyFromString(generateRequestElements('tan:DeleteAnalyticsModules')(['ConfigurationToken','AnalyticsModuleName'])(ConfigurationToken,AnalyticsModuleName))
                        .map(mapResponseXmlToJson<any>('tan:DeleteAnalyticsModulesResponse'))
                      
    }

    /**
     * 
     *   List the currently assigned set of analytics modules of a VideoAnalyticsConfiguration.
     *   
     */
    static GetAnalyticsModules(ConfigurationToken: ReferenceToken) {
        return createStandardRequestBodyFromString(generateRequestElements('tan:GetAnalyticsModules')(['ConfigurationToken'])(ConfigurationToken))
                        .map(mapResponseXmlToJson<any>('tan:GetAnalyticsModulesResponse'))
                      
    }

    /**
     * 
     *   Modify the settings of one or more analytics modules of a VideoAnalyticsConfiguration. The modules are referenced by their names.
     *   It is allowed to pass only a subset to be modified.
     *   
     */
    static ModifyAnalyticsModules(ConfigurationToken: ReferenceToken, AnalyticsModule: Config) {
        return createStandardRequestBodyFromString(generateRequestElements('tan:ModifyAnalyticsModules')(['ConfigurationToken','AnalyticsModule'])(ConfigurationToken,AnalyticsModule))
                        .map(mapResponseXmlToJson<any>('tan:ModifyAnalyticsModulesResponse'))
                      
    }

    /**
     * 
     *   List all rules that are supported by the given VideoAnalyticsConfiguration.
     *   The result of this method may depend on the overall Video analytics configuration of the device,
     *   which is available via the current set of profiles. 
     *   
     */
    GetSupportedRules(ConfigurationToken: ReferenceToken) {
        return Analytics.GetSupportedRules(ConfigurationToken).run(this.config)
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
        return Analytics.CreateRules(ConfigurationToken,Rule).run(this.config)
    }

    /**
     * 
     *   Remove one or more rules from a VideoAnalyticsConfiguration.
     *   
     */
    DeleteRules(ConfigurationToken: ReferenceToken, RuleName: string) {
        return Analytics.DeleteRules(ConfigurationToken,RuleName).run(this.config)
    }

    /**
     * 
     *   List the currently assigned set of rules of a VideoAnalyticsConfiguration.
     *   
     */
    GetRules(ConfigurationToken: ReferenceToken) {
        return Analytics.GetRules(ConfigurationToken).run(this.config)
    }

    /**
     * 
     *   Return the options for the supported rules that specify an Option attribute.
     *   
     */
    GetRuleOptions(ConfigurationToken: ReferenceToken, RuleType: any) {
        return Analytics.GetRuleOptions(ConfigurationToken,RuleType).run(this.config)
    }

    /**
     * 
     *   Modify one or more rules of a VideoAnalyticsConfiguration. The rules are referenced by their names.
     *   
     */
    ModifyRules(ConfigurationToken: ReferenceToken, Rule: Config) {
        return Analytics.ModifyRules(ConfigurationToken,Rule).run(this.config)
    }

    /**
     * Returns the capabilities of the analytics service. The result is returned in a typed answer.
     */
    GetServiceCapabilities() {
        return Analytics.GetServiceCapabilities().run(this.config)
    }

    /**
     * 
     *   List all analytics modules that are supported by the given VideoAnalyticsConfiguration.
     *   The result of this method may depend on the overall Video analytics configuration of the device,
     *   which is available via the current set of profiles. 
     *   
     */
    GetSupportedAnalyticsModules(ConfigurationToken: ReferenceToken) {
        return Analytics.GetSupportedAnalyticsModules(ConfigurationToken).run(this.config)
    }

    /**
     * 
     *   Return the options for the supported analytics modules that specify an Option attribute.
     *   
     */
    GetAnalyticsModuleOptions(ConfigurationToken: ReferenceToken, Type: any) {
        return Analytics.GetAnalyticsModuleOptions(ConfigurationToken,Type).run(this.config)
    }

    /**
     * 
     *   Add one or more analytics modules to an existing VideoAnalyticsConfiguration.
     *   The available supported types can be retrieved via GetSupportedAnalyticsModules, 
     *   where the Name of the supported AnalyticsModules correspond to the type of an AnalyticsModule instance.
     *   Pass unique module names which can be later used as reference. The Parameters of the analytics module must match those of the corresponding AnalyticsModuleDescription.
     *   
     *   Although this method is mandatory a device implementation must not support adding modules. 
     *   Instead it can provide a fixed set of predefined configurations via the media service function 
     *   GetCompatibleVideoAnalyticsConfigurations.
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
        return Analytics.CreateAnalyticsModules(ConfigurationToken,AnalyticsModule).run(this.config)
    }

    /**
     * 
     *   Remove one or more analytics modules from a VideoAnalyticsConfiguration referenced by their names.
     *   
     */
    DeleteAnalyticsModules(ConfigurationToken: ReferenceToken, AnalyticsModuleName: string) {
        return Analytics.DeleteAnalyticsModules(ConfigurationToken,AnalyticsModuleName).run(this.config)
    }

    /**
     * 
     *   List the currently assigned set of analytics modules of a VideoAnalyticsConfiguration.
     *   
     */
    GetAnalyticsModules(ConfigurationToken: ReferenceToken) {
        return Analytics.GetAnalyticsModules(ConfigurationToken).run(this.config)
    }

    /**
     * 
     *   Modify the settings of one or more analytics modules of a VideoAnalyticsConfiguration. The modules are referenced by their names.
     *   It is allowed to pass only a subset to be modified.
     *   
     */
    ModifyAnalyticsModules(ConfigurationToken: ReferenceToken, AnalyticsModule: Config) {
        return Analytics.ModifyAnalyticsModules(ConfigurationToken,AnalyticsModule).run(this.config)
    }
}
