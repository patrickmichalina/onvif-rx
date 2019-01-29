import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../soap/request";
import { IDeviceConfig } from "../config";
import "./types";

export class Provisioning {
    constructor(private config: IDeviceConfig) {
    }

    /**
     * Returns the capabilities of the provisioning service.
     */
    static GetServiceCapabilities() {
        return createStandardRequestBodyFromString('<tpv:GetServiceCapabilities />')
                        .map(mapResponseXmlToJson<any>('tpv:GetServiceCapabilitiesResponse')())
                      
    }

    /**
     * Moves device on the pan axis.
     */
    static PanMove() {
        return createStandardRequestBodyFromString('<tpv:PanMove />')
                        .map(mapResponseXmlToJson<any>('tpv:PanMoveResponse')())
                      
    }

    /**
     * Moves device on the tilt axis.
     */
    static TiltMove() {
        return createStandardRequestBodyFromString('<tpv:TiltMove />')
                        .map(mapResponseXmlToJson<any>('tpv:TiltMoveResponse')())
                      
    }

    /**
     * Moves device on the zoom axis.
     */
    static ZoomMove() {
        return createStandardRequestBodyFromString('<tpv:ZoomMove />')
                        .map(mapResponseXmlToJson<any>('tpv:ZoomMoveResponse')())
                      
    }

    /**
     * Moves device on the roll axis.
     */
    static RollMove() {
        return createStandardRequestBodyFromString('<tpv:RollMove />')
                        .map(mapResponseXmlToJson<any>('tpv:RollMoveResponse')())
                      
    }

    /**
     * Moves device on the focus axis.
     */
    static FocusMove() {
        return createStandardRequestBodyFromString('<tpv:FocusMove />')
                        .map(mapResponseXmlToJson<any>('tpv:FocusMoveResponse')())
                      
    }

    /**
     * Stops device motion on all axes.
     */
    static Stop() {
        return createStandardRequestBodyFromString('<tpv:Stop />')
                        .map(mapResponseXmlToJson<any>('tpv:StopResponse')())
                      
    }

    /**
     * Returns the lifetime move counts.
     */
    static GetUsage() {
        return createStandardRequestBodyFromString('<tpv:GetUsage />')
                        .map(mapResponseXmlToJson<any>('tpv:GetUsageResponse')())
                      
    }

    /**
     * Returns the capabilities of the provisioning service.
     */
    GetServiceCapabilities() {
        return Provisioning.GetServiceCapabilities().run(this.config)
    }

    /**
     * Moves device on the pan axis.
     */
    PanMove() {
        return Provisioning.PanMove().run(this.config)
    }

    /**
     * Moves device on the tilt axis.
     */
    TiltMove() {
        return Provisioning.TiltMove().run(this.config)
    }

    /**
     * Moves device on the zoom axis.
     */
    ZoomMove() {
        return Provisioning.ZoomMove().run(this.config)
    }

    /**
     * Moves device on the roll axis.
     */
    RollMove() {
        return Provisioning.RollMove().run(this.config)
    }

    /**
     * Moves device on the focus axis.
     */
    FocusMove() {
        return Provisioning.FocusMove().run(this.config)
    }

    /**
     * Stops device motion on all axes.
     */
    Stop() {
        return Provisioning.Stop().run(this.config)
    }

    /**
     * Returns the lifetime move counts.
     */
    GetUsage() {
        return Provisioning.GetUsage().run(this.config)
    }
}
