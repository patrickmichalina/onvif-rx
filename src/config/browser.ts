import { DOMParser } from 'xmldom'
import { map } from 'rxjs/operators'
import { ISystemConfig } from './interfaces'

const parser = new DOMParser()
const transportHeaders = { 'Content-Type': 'application/soap+xml; charset=utf-8;' }

export const DEFAULT_NODE_ENV: ISystemConfig = {
  parser,
  transport: {} as any,
  base64: {
    decode: (str: string) => window.atob(str),
    encode: (str: string) => window.btoa(str)
  },
  xaddrs: ''
}
// window.atob('')
// const d = (s: string) => Uint8Array.from('window as any.atob(s)', c => c.charCodeAt(0))
// decode: s => Uint8Array.from(atob(s), c => c.charCodeAt(0)),
// encode: b => btoa(String.fromCharCode(...new Uint8Array(b)))
