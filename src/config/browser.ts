import { DOMParser } from 'xmldom'
import { ISystemConfig } from './interfaces'

export const DEFAULT_BROWSER_ENV: ISystemConfig = {
  parser: new DOMParser(),
  transport: {} as any
}
