import { primeNumber } from './primeNumber.js'
import { instructions } from './instructions.js'

const button = document.querySelector('#validate-button')
const modalButton = document.querySelector('#modal-button')
const input = document.querySelector('#text-input')
const modal = document.querySelector('#modal')
const modalContent = document.querySelector('#modal-content')
const modalTitle = document.querySelector('#modal-title')
const modalText = document.querySelector('#modal-text')
const instructionsButton = document.querySelector('#button-instructions')

const showInstructions = () => {
  modalTitle.innerText = instructions.title
  modalText.innerHTML = instructions.body
  toggleModal()
  modalContent.classList.remove('modal-bg')
  modalContent.classList.add('modal-bg-big')
  modalText.classList.remove('modal-text')
  modalText.classList.add('modal-text-instructions')
}

const toggleModal = () => {
  modal.classList.toggle('invisible')
}
const verifyPrime = () => {
  modalTitle.innerText = 'Result:'
  modalContent.classList.remove('modal-bg-big')
  modalContent.classList.add('modal-bg')
  modalText.classList.remove('modal-text-instructions')
  modalText.classList.add('modal-text')
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

instructionsButton.addEventListener('click', showInstructions)
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

showInstructions()
