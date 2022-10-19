export function nonce(size: number): string {
  return Array.from([...Array(size)]).map(() => Math.random().toString(36)[3]).join('')
}