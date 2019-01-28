import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../soap/request";
import "./types";

export namespace Provisioning {
    /**
     * Returns the capabilities of the provisioning service.
     */
    export function GetServiceCapabilities() {
        return createStandardRequestBodyFromString('<tpv:GetServiceCapabilities />')
                        .map(mapResponseXmlToJson<any>('tpv:GetServiceCapabilitiesResponse')())
                      
    }

    /**
     * Moves device on the pan axis.
     */
    export function PanMove() {
        return createStandardRequestBodyFromString('<tpv:PanMove />')
                        .map(mapResponseXmlToJson<any>('tpv:PanMoveResponse')())
                      
    }

    /**
     * Moves device on the tilt axis.
     */
    export function TiltMove() {
        return createStandardRequestBodyFromString('<tpv:TiltMove />')
                        .map(mapResponseXmlToJson<any>('tpv:TiltMoveResponse')())
                      
    }

    /**
     * Moves device on the zoom axis.
     */
    export function ZoomMove() {
        return createStandardRequestBodyFromString('<tpv:ZoomMove />')
                        .map(mapResponseXmlToJson<any>('tpv:ZoomMoveResponse')())
                      
    }

    /**
     * Moves device on the roll axis.
     */
    export function RollMove() {
        return createStandardRequestBodyFromString('<tpv:RollMove />')
                        .map(mapResponseXmlToJson<any>('tpv:RollMoveResponse')())
                      
    }

    /**
     * Moves device on the focus axis.
     */
    export function FocusMove() {
        return createStandardRequestBodyFromString('<tpv:FocusMove />')
                        .map(mapResponseXmlToJson<any>('tpv:FocusMoveResponse')())
                      
    }

    /**
     * Stops device motion on all axes.
     */
    export function Stop() {
        return createStandardRequestBodyFromString('<tpv:Stop />')
                        .map(mapResponseXmlToJson<any>('tpv:StopResponse')())
                      
    }

    /**
     * Returns the lifetime move counts.
     */
    export function GetUsage() {
        return createStandardRequestBodyFromString('<tpv:GetUsage />')
                        .map(mapResponseXmlToJson<any>('tpv:GetUsageResponse')())
                      
    }
}
