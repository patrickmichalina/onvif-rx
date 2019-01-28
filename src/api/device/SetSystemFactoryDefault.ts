import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from "../../soap/request";
import { FactoryDefaultType } from "../types";

/**
 * This operation reloads the parameters on the device to their factory default values.
 */
export function SetSystemFactoryDefault(FactoryDefault: FactoryDefaultType) {
    createStandardRequestBodyFromString('<tds:SetSystemFactoryDefault />')
                  .map(mapResponseXmlToJson<any>('tds:SetSystemFactoryDefaultResponse')())
                
}
