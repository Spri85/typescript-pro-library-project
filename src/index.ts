export function isBoolean(value: any): boolean {
  return value instanceof Boolean || typeof value === 'boolean'
}

export default {
  isBoolean,
}
