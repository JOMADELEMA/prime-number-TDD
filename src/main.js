import { primeNumber } from './primeNumber.js'

const button = document.querySelector('#validate-button')
const modalButton = document.querySelector('#modal-button')
const input = document.querySelector('#text-input')
const modal = document.querySelector('#modal')
const modalText = document.querySelector('#modal-text')

button.addEventListener('click', verifyPrime)
modalButton.addEventListener('click', toggleModal)

input.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    event.preventDefault()
    button.click()
  }
})

modal.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    event.preventDefault()
    modalButton.click()
  }
})

function verifyPrime () {
  try {
    const result = primeNumber(input.value)
    console.log(result)
    if (result) {
      modalText.innerText = 'The number ' + input.value + ' is a prime number.'
      toggleModal()
      return
    }
    modalText.innerText =
      'The number ' + input.value + ' is not a prime number.'
    toggleModal()
  } catch (err) {
    modalText.innerText = err
    toggleModal()
  }
}

function toggleModal () {
  modal.classList.toggle('invisible')
}
