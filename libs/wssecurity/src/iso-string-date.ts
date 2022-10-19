export function isoString(timeDifference = 0): string {
  return new Date(Date.now() + timeDifference).toISOString()
}