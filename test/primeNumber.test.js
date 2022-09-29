import { describe, expect, it } from 'vitest'
import { primeNumber } from '../src/primeNumber'

describe('primeNumber', () => {
  it('Throw error if the parameter is NaN', () => {
    expect(() => primeNumber(NaN)).throw()
  })
  it('Throw error if parameter is 1', () => {
    expect(() => primeNumber(1)).throw()
  })
  it('Throw error if number is equal or less to 0', () => {
    expect(() => primeNumber(0)).throw()
    expect(() => primeNumber(-1)).throw()
  })
  it('Number must only be divided by itself', () => {
    expect(primeNumber(2)).toBe(true)
    expect(primeNumber(3)).toBe(true)
    expect(primeNumber(97)).toBe(true)
  })
})
