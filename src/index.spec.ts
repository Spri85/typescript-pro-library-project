import { isBoolean } from './index'

describe('isBoolean:::', () => {
  it('shoud return the true if the given value is Boolean', () => {
    expect(isBoolean(new Boolean())).toEqual(true)
  })

  it('shoud return the true if the given value is true', () => {
    expect(isBoolean(true)).toEqual(true)
  })

  it('shoud return the true if the given value is false', () => {
    expect(isBoolean(true)).toEqual(true)
  })

  it('shoud return the false if the given value is undefined', () => {
    expect(isBoolean(undefined)).toEqual(false)
  })

  it('shoud return the false if the given value is null', () => {
    expect(isBoolean(null)).toEqual(false)
  })

  it('shoud return the false if the given value is number', () => {
    expect(isBoolean(123)).toEqual(false)
  })

  it('shoud return the false if the given value is string', () => {
    expect(isBoolean('abc')).toEqual(false)
  })
})
