import { createStandardRequestBodyFromString, mapResponseXmlToJson, mapResponseObsToProperty } from '../../soap/request'

/**
 * Manage auxiliary commands supported by a device, such as controlling an Infrared (IR) lamp, 
 * a heater or a wiper or a thermometer that is connected to the device.
 * The supported commands can be retrieved via the AuxiliaryCommands capability.
 * Although the name of the auxiliary commands can be freely defined, commands starting with the prefix tt: are 
 * reserved to define frequently used commands and these reserved commands shall all share the "tt:command|parameter" syntax.
 * 
 * tt:Wiper|On – Request to start the wiper.
 * tt:Wiper|Off – Request to stop the wiper.
 * tt:Washer|On – Request to start the washer.
 * tt:Washer|Off – Request to stop the washer.
 * tt:WashingProcedure|On – Request to start the washing procedure.
 * tt: WashingProcedure |Off – Request to stop the washing procedure.
 * tt:IRLamp|On – Request to turn ON an IR illuminator attached to the unit.
 * tt:IRLamp|Off – Request to turn OFF an IR illuminator attached to the unit.
 * tt:IRLamp|Auto – Request to configure an IR illuminator attached to the unit so that it automatically turns ON and OFF.
 * 
 * A device that indicates auxiliary service capability shall support this command.
 */
export const SendAuxiliaryCommand =
  () =>
    createStandardRequestBodyFromString('<tds:SendAuxiliaryCommand />')
      .map(mapResponseXmlToJson<any>('tds:SendAuxiliaryCommandResponse')())
