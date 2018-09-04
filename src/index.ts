export function isBoolean(value: any): value is boolean {
  return value instanceof Boolean || typeof value === 'boolean'
}

export default {
  isBoolean,
}
