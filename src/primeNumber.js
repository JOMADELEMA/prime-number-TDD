export const primeNumber = (pNumber) => {
  const number = parseInt(pNumber)
  if (Number.isNaN(parseInt(number))) throw new Error('The input must be a number')
  if (parseInt(number) === 1) throw new Error('The number must not be 1')
  if (number <= 0) throw new Error('The number must be Positive Integer')
  for (let i = 2; i < number - 1; i++) {
    if (number % i === 0) return false
  }
  return true
}
